<template>
  <div>

    <hero-bar>
      Payment Details
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Payment List" icon="account-multiple">
        <card-toolbar>
          <b-field slot="left">
             <b-datepicker v-model="dates"
              placeholder="Click to select..."
              range>
          </b-datepicker>
          </b-field>
          
          <b-field slot="left">
            <b-button @click="generateReport()" class=" ml-2" type="is-success" size="is-small">Generate Report</b-button>
          </b-field>
          
           <b-field slot="left">
            <b-button @click="clear()" class="mb-3 ml-2" type="is-danger" size="is-small">Clear</b-button>
          </b-field>
          <button slot="right" type="button" class="button is-danger is-small has-checked-rows-number" @click="trashModal(null)" :disabled="!checkedRows.length">
            <b-icon icon="trash-can" custom-size="default"/>
            <span>Delete</span>
            <span v-show="!!checkedRows.length">({{ checkedRows.length }})</span>
          </button>
           <button slot="right" type="button" class="button is-primary is-small" @click="exportToPDF()">Export to pDF</button>  
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


            <b-table-column label="Patient Name" field="patient_name " sortable v-slot="props">
              {{ props.row.patient_name }}
            </b-table-column>
            <b-table-column label="Amount" field="amount" sortable v-slot="props">
              {{ props.row.amount}}
            </b-table-column>
            <b-table-column label="Currency" field="currency" sortable v-slot="props">
              {{ props.row.currency }}
            </b-table-column>
            <b-table-column label="Status" field="status" sortable v-slot="props">
              {{ props.row.status}}
            </b-table-column>
           
            <b-table-column label="Created" v-slot="props">
              <small class="has-text-grey is-abbr-like" title="created">{{ formatDate(props.row.created_at) }}</small>
            </b-table-column>
            <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
              <div class="buttons is-right">
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
      checkedRows: [],
      dates: []
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

    clear(){
     this.pendingList = []
    },

    formatDate(value){
      let day = new Date(value);
      var date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
      return date
    },

    generateReport(){
      if(this.dates == ''){
         this.$buefy.toast.open({
          message: 'Please select date range',
          type: 'is-danger',
          duration: 5000
        })
      }else{
        this.getData();
      }
    },

    getData () {
      this.isLoading = true
      var formData = new FormData()
      var start_date = this.dates[0]
      var end_date  = this.dates[1]

      var st_dt  = start_date.getFullYear()+"-"+(start_date.getMonth()+1)+"-"+start_date.getDate()
      var end_dt = end_date.getFullYear()+"-"+(end_date.getMonth()+1)+"-"+end_date.getDate()

      formData.append('start_date',st_dt);
      formData.append('end_date',end_dt);
      
      axios
        .post('/admin/getAllPayments',formData)
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
        url = `admin/${this.trashObject.id}/destroyPayments`
      } else if (this.checkedRows.length) {
        method = 'post'
        url = 'admin/destroyPayments'
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
    },

    exportToPDF()
    {
      var component = this
      var doc = new window.jspdf.jsPDF('l', 'px', 'a4')

  
      var reportTitle = 'Payment Report'

      doc.setFontSize(22)
      doc.text(reportTitle, 30, 30)

      doc.setFontSize(11)
      doc.setTextColor(100)

      var col = ['Patient Name','Amount','Currency','Status','Created']
      var rows = [];


      component.pendingList.forEach(element => {

          var temp = [element.patient_name ,element.amount,element.currency, element.status,element.created_at];
          rows.push(temp);
      });

      doc.setProperties({
          title: 'Payment Report',
      });
      doc.autoTable({head:[col], body:rows, title: reportTitle, startY: 100 });

      doc.save('Payment Reprot' + '.pdf') // for download file
    }
  },



}
</script>
