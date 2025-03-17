<template>
  <div>
    <hero-bar>
      Manage My Routine
    </hero-bar>

    <section class="section is-main-section">
       <b-message v-if="formData.profile_status == 'pending'"
            title="Message"
            type="is-warning"
            aria-close-label="Close message">
             You cannot manage your Routine untill the admin will apprve your account
        </b-message>

        
        <b-message v-if="formData.profile_status == 'rejected'"
            title="Warning"
            type="is-danger"
            aria-close-label="Close message">
            Your profile is rejected by admin. You cannot manage your Routine untill the admin will apprve your account <br>
           <strong>Reason : {{ formData.comment }}</strong>
        </b-message>

      <tiles v-if="formData.profile_status == 'approved'">
        <card-component :loading="isLoading" :title="formCardTitle" icon="account-edit" class="tile is-child">
              <b-field label="Select a date" horizontal>
                <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    :icon-right="selected ? 'close-circle' : ''"
                    icon-right-clickable
                    @icon-right-click="clearDate"
                    trap-focus>
                </b-datepicker>
            </b-field>

            <b-field label="Select Start time" horizontal>
              <b-timepicker v-model="startTime"
                  placeholder="Click to select...">
              </b-timepicker>
            </b-field>

            <b-field label="Select End time" horizontal>
              <b-timepicker v-model="endTime"
                  placeholder="Click to select...">
              </b-timepicker>
            </b-field>

            <div style="display: flex;justify-content: flex-end;">
             <b-button :loading="isLoading" type="is-success" @click="submitForm()">Save Date & Time</b-button>
        </div>

        </card-component>
      </tiles>

      <tiles v-if="formData.profile_status == 'approved'">
      <card-component class="has-table has-mobile-sort-spaced" title="Time Table" icon="account-multiple">
        <card-toolbar>
          <button slot="right" type="button" class="button is-danger is-small has-checked-rows-number" @click="trashModal(null)" :disabled="!checkedRows.length">
            <b-icon icon="trash-can" custom-size="default"/>
            <span>Delete</span>
            <span v-show="!!checkedRows.length">({{ checkedRows.length }})</span>
          </button>
        </card-toolbar>

        <modal-box
          :is-active="isModalActive"
          :trash-object-name="trashSubject"
          @confirm="trashConfirm"
          @cancel="trashCancel"
        />

        <b-table
          :checked-rows.sync="checkedRows"
          :checkable="true"
          :loading="isLoading"
          :paginated="paginated"
          :per-page="perPage"
          :striped="true"
          :hoverable="true"
          default-sort="name"
          :data="timeSlots">


            <b-table-column label="Name" field="name" sortable v-slot="props">
              {{ props.row.available_date }}
            </b-table-column>
            <b-table-column label="Start Time" field="start_time" sortable v-slot="props">
              {{ props.row.start_time }}
            </b-table-column>
            <b-table-column label="End Time" field="end_time" sortable v-slot="props">
              {{ props.row.end_time }}
            </b-table-column>

            <b-table-column label="Created" v-slot="props">
              <small class="has-text-grey is-abbr-like" title="created">{{ formatDate(props.row.created_at) }}</small>
            </b-table-column>
            <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
              <div class="buttons is-right">
                <router-link :to="{name:'rejected.view', params: {id: props.row.id}}" class="button is-small is-primary">
                  <b-icon icon="account-edit" size="is-small"/>
                </router-link>
                <button class="button is-small is-danger" type="button" @click.prevent="trashModal(props.row)">
                  <b-icon icon="trash-can" size="is-small"/>
                </button>
              </div>
            </b-table-column>

          <section class="section" slot="empty">
            <div class="content has-text-grey has-text-centered">
              <template v-if="isLoading">
                <p>
                  <b-icon icon="dots-horizontal" size="is-large"/>
                </p>
                <p>Fetching data...</p>
              </template>
              <template v-else>
                <p>
                  <b-icon icon="emoticon-sad" size="is-large"/>
                </p>
                <p>Nothing's here&hellip;</p>
              </template>
            </div>
          </section>
        </b-table>
      </card-component>
     </tiles>
    </section>


  </div>
</template>

<script>
import { mapState } from 'vuex'
import map from 'lodash/map'
import TitleBar from '@/components/TitleBar'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardToolbar from '@/components/CardToolbar'
import ModalBox from '@/components/ModalBox'

export default {

  name:'Routine',

  components: {TitleBar,CardComponent,HeroBar,Tiles,CardToolbar,ModalBox},

  computed:{
    ...mapState(['userId']),

    trashSubject () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      if (this.checkedRows.length) {
        return `${this.checkedRows.length} entries`
      }

      return null
    }
  },

  data () {


    return {
      isLoading:false,
      formCardTitle:"Create or update your Daily Routine",

      formData:{
        doctor_id:'',
        profile_status:false,

      },

      selected: new Date(),
      showWeekNumber: false,
      locale: undefined, // Browser locale
      startTime:new Date(),
      endTime:new Date(),

      paginated: false,
      perPage: 10,
      checkedRows: [],
      isModalActive: false,
      trashObject: null,


      Doctortypes:[],
      timeSlots:[],

      isprofileImageUpdate:false,
      isMedicalProfileUpdate:false,

      invalidFileds:{
        doctor_id:'',
      }
    }
  },


  methods: {

    clearDate () {
       this.selected = null
    },

    formatDate: function (dateTime){
       var date = new Date(dateTime)
       const year = date.getFullYear();
       const month = String(date.getMonth() + 1).padStart(2, '0');
       const day = String(date.getDate()).padStart(2, '0');

       const joined = [year, month,day ].join('-');
       return joined;
    },

    formatTime: function (dateTime){
      const dateObject = new Date(dateTime);
      const hours =   String(dateObject.getHours()).padStart(2, '0');
      const minutes = String(dateObject.getMinutes()).padStart(2, '0');
      // const seconds = String(dateObject.getSeconds()).padStart(2, '0');

      const joined = [hours, minutes ].join(':');
       return joined;
    },

    getTimeTable(){

      this.isLoading = true
      axios
        .post('/doctor/getTimeTable',{doctor_id: this.userId })
        .then(r => {

          this.isLoading = false
          if (r.data) {
            if (r.data.length > this.perPage) {
              this.paginated = true
            }
            this.timeSlots = r.data
          }

        })
        .catch( err => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: 'is-danger',
            queue: false
          })
        })
    },



    getData () {
      this.isLoading = true
      axios
        .post('/doctor/getProfileData',{doctor_id: this.userId })
        .then(r => {

          this.isLoading = false
          this.formData.doctor_id = r.data.data[0].doctor_id
          this.formData.profile_status = r.data.data[0].status



        })
        .catch( err => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: 'is-danger',
            queue: false
          })
        })
      },

      resetInvalidStatus: function(key){
            this.invalidFileds[key] = ''
      },



      submitForm(){
        if(this.formatTime(this.startTime) == this.formatTime(this.endTime)){
          this.$buefy.toast.open({
                message: 'Start Time and End Time cannot be same',
                type: 'is-danger',
                queue: false
              })
        }else{
          this.isLoading = true

          var formData = new FormData();
          formData.append('doctor_id', this.userId);
          formData.append('date', this.formatDate(this.selected));
          formData.append('start_time', this.formatTime(this.startTime));
          formData.append('end_time', this.formatTime(this.endTime));


          axios
          .post('/doctor/storeDateAndTime',formData)
          .then(r => {

            this.isLoading = false

            if(r.data.success == true){
              this.getTimeTable();

              this.$buefy.toast.open({
                message: r.data.message,
                type: 'is-success',
                queue: false
              })

            }else{
              this.$buefy.toast.open({
                message: r.data.message,
                type: 'is-danger',
                queue: false
              })
            }
          })
          .catch( err => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${err.message}`,
              type: 'is-danger',
              queue: false
            })
          })
        }

      },


      trashModal (trashObject = null) {
      if (trashObject || this.checkedRows.length) {
        this.trashObject = trashObject
        this.isModalActive = true
      }
    },
    trashConfirm () {
      let url
      let method
      let data = null

      this.isModalActive = false

      if (this.trashObject) {
        method = 'delete'
        url = `/clients/${this.trashObject.id}/destroy`
      } else if (this.checkedRows.length) {
        method = 'post'
        url = '/clients/destroy'
        data = {
          ids: map(this.checkedRows, row => row.id)
        }
      }

      axios({
        method,
        url,
        data
      }).then( r => {
        this.getData()

        this.trashObject = null
        this.checkedRows = []

        this.$buefy.snackbar.open({
          message: `Deleted`,
          queue: false
        })
      }).catch( err => {
        this.$buefy.toast.open({
          message: `Error: ${err.message}`,
          type: 'is-danger',
          queue: false
        })
      })
    },
    trashCancel () {
      this.isModalActive = false
    }
  },

  mounted (){

    this.getData()
    this.getTimeTable()

  }


}
</script>

<style scoped>

.flex-container{
  justify-content: flex-end;
}


</style>
