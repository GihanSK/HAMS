<template>
  <div>

    <hero-bar>
      Today Pending Appoinments
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Pending Appoinment List" icon="account-multiple">

        <!-- <card-toolbar> -->

          <!-- <div slot="left"  @click="trashModal(null)" :disabled="!checkedRows.length"> -->
            <!-- <b-field >
              <b-datepicker
                  placeholder="Select Date Range..."
                  v-model="filterDates"
                  range>
              </b-datepicker>
          </b-field>
          </div>
          <div slot="left"  @click="trashModal(null)" :disabled="!checkedRows.length">
            <b-field >
              <b-button type="is-primary" @click="filter()">Filter Appoinments</b-button>
            </b-field>
          </div> -->
        <!-- </card-toolbar> -->

        <modal-box
          :is-active="isModalActive"
          :trash-object-name="trashSubject"
          @confirm="trashConfirm"
          @cancel="trashCancel"
        />

        <b-table
          :loading="isLoading"
          :paginated="paginated"
          :per-page="perPage"
          :striped="true"
          :hoverable="true"
          default-sort="name"
          :data="pendingList">


            <b-table-column label="Full Name" field="user_fullname" sortable v-slot="props">
              {{ props.row.user_fullname }}
            </b-table-column>
            <b-table-column label="Contact Number" field="user_firstname" sortable v-slot="props">
              {{ props.row.user_contact_no }}
            </b-table-column>
            <b-table-column label="Gender" field="last_name" sortable v-slot="props">
              {{ props.row.user_gender }}
            </b-table-column>
            <b-table-column label="Email" field="contact_no" sortable v-slot="props">
              {{ props.row.user_email}}
            </b-table-column>

            <b-table-column label="Appinment Date" field="contact_no" sortable v-slot="props">
              {{ props.row.selected_timeslot}}
            </b-table-column>

            <b-table-column label="Time Slot" field="contact_no" sortable v-slot="props">

              {{ props.row.selected_start_time}} to {{ props.row.selected_end_time }}
            </b-table-column>

            <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
              <div class="buttons is-right">
                <router-link :to="{name:'doctor.viewAppoinments', params: {id: props.row.id}}" class="button is-small is-primary">
                  View Appoinment
                </router-link>
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
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import ModalBox from '@/components/ModalBox'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import CardToolbar from '@/components/CardToolbar'

export default {
  name: "doctorAppoinments",
  components: {CardToolbar, HeroBar, TitleBar, ModalBox, CardComponent},
  data () {
    return {
      isModalActive: false,
      trashObject: null,
      pendingList: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],

    }
  },
  computed: {
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
  created () {
    this.getData()
  },

  methods: {
    calculatePercentage(imgvalue,medicalvalue,expvalue){
      if(imgvalue == 1 && medicalvalue ==1 && expvalue == 1){
        return 100;
      }else if(imgvalue == 1 || medicalvalue == 1 || expvalue == 1){
        return 50;
      }else{
        return 2;
      }


    },

    formatDate(value){
      let day = new Date(value);
      var date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
      return date
    },

    getData () {
      this.isLoading = true
      axios
        .get('/doctor/getPendingAppoinmentsForDoctor')
        .then(r => {
          console.log(r.data)
          this.isLoading = false
          if (r.data) {
            if (r.data.length > this.perPage) {
              this.paginated = true
            }
            this.pendingList = r.data.data
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
  }
}
</script>
