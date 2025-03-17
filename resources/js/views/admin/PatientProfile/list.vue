<template>
  <div>

    <hero-bar>
      Patient's Profiles
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Patients's Profiles List" icon="account-multiple">
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
          :data="pendingList">


            <b-table-column label="Name" field="name" sortable v-slot="props">
              {{ props.row.name }}
            </b-table-column>
            <b-table-column label="First Name" field="first_name" sortable v-slot="props">
              {{ props.row.first_name }}
            </b-table-column>
            <b-table-column label="Last Name" field="last_name" sortable v-slot="props">
              {{ props.row.last_name }}
            </b-table-column>
            <b-table-column label="Contact No" field="contact_no" sortable v-slot="props">
              {{ props.row.contact_no}}
            </b-table-column>
            <b-table-column label="Email" field="email" sortable v-slot="props">
              {{ props.row.email}}
            </b-table-column>


            <b-table-column label="Created" v-slot="props">
              <small class="has-text-grey is-abbr-like" title="created">{{ formatDate(props.row.created_at) }}</small>
            </b-table-column>
            <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
              <div class="buttons is-right">
                <router-link :to="{name:'admin.viewProfile', params: {id: props.row.patient_id}}" class="button is-small is-primary">
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
  name: "pendingListDoctors",
  components: {CardToolbar, HeroBar, TitleBar, ModalBox, CardComponent},
  data () {
    return {
      isModalActive: false,
      trashObject: null,
      pendingList: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
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
        .get('/admin/patientProfilesList')
        .then(r => {
          console.log(r.data)
          this.isLoading = false
          if (r.data) {
            if (r.data.length > this.perPage) {
              this.paginated = true
            }
            this.pendingList = r.data
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
        url = `admin/${this.trashObject.patient_id}/destroyPatient`
      } else if (this.checkedRows.length) {
        method = 'post'
        url = 'admin/destroyPatient'
        data = {
          ids: map(this.checkedRows, row => row.patient_id)
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
