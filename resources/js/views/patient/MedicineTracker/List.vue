<template>
  <div>

    <hero-bar>
      Medicine Tracker
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Completed Appoinment List" icon="account-multiple">

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

             <b-table-column label="Disease" field="doctor_name" sortable v-slot="props">
              {{ props.row.patient_disease }}
            </b-table-column>

            <b-table-column label="Symtoms" field="doctor_name" sortable v-slot="props">
              {{ props.row.patient_symtoms }}
            </b-table-column>

            <b-table-column label="Reports" field="doctor_name" sortable v-slot="props">
              <b-tag type="is-warning">{{ props.row.medical_transcription }}</b-tag>
            </b-table-column>

            <b-table-column label="Doctor Name" field="doctor_name" sortable v-slot="props">
              {{ props.row.doctor_name }}
            </b-table-column>

            <b-table-column label="Doctor Category" field="doctor_category" sortable v-slot="props">
              {{ props.row.doctor_category }}
            </b-table-column>

            <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
              <div class="buttons is-right">
                <router-link :to="{name:'patient.medicineTracker.view', params: {id: props.row.id}}" class="button is-small is-primary">
                  View Prescription
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
        .get('/patient/GetlistOfDisease')
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
