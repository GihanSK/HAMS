<template>
  <div>
    <title-bar :title-stack="userRole"/>
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget v-if="userRole == 'admin'" class="tile is-child" type="is-primary" icon="account-multiple" :number="doctorProfilePendingCount" label="Pending Doctor's profiles"/>
        <card-widget v-if="userRole == 'admin'" class="tile is-child" type="is-primary" icon="account-multiple" :number="doctorProfileRejectedCount" label="Rejected Doctor's profiles"/>
        <card-widget v-if="userRole == 'admin'" class="tile is-child" type="is-info" icon="account-multiple" :number="doctorProfileApprovedCount" label="Approved Doctor's profiles"/>

      </tiles>

      <tiles>
        <card-widget v-if="userRole == 'admin'" class="tile is-child" type="is-info" icon="account-multiple" :number="patientCount" label="Patients"/>
        <card-widget v-if="userRole == 'admin'" class="tile is-child" type="is-dark" icon="file-document" :number="totalAppoinmentCount" label="Total Appoinment"/>
        <card-widget v-if="userRole == 'admin'" class="tile is-child" type="is-dark" icon="file-document" :number="completedAppoinmentsCount" label="Completed Appoinment"/>
      </tiles>



      <!-- <card-component title="Performance" @header-icon-click="fillChartData" icon="finance" header-icon="reload">
        <div v-if="defaultChart.chartData" class="chart-area">
          <line-chart style="height: 100%"
                      ref="bigChart"
                      chart-id="big-line-chart"
                      :chart-data="defaultChart.chartData"
                      :extra-options="defaultChart.extraOptions">
          </line-chart>
        </div>
      </card-component>

      <card-component title="Clients" class="has-table has-mobile-sort-spaced">
        <clients-table-sample data-url="/clients"/>
      </card-component> -->
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import * as chartConfig from '@/components/Charts/chart.config'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'
import CardComponent from '@/components/CardComponent'
import LineChart from '@/components/Charts/LineChart'
import ClientsTableSample from '@/components/ClientsTableSample'
export default {
  name: 'home',
  components: {
    ClientsTableSample,
    LineChart,
    CardComponent,
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar
  },

  data () {
    return {
      defaultChart: {
        chartData: null,
        extraOptions: chartConfig.chartOptionsMain,


      },

      //admin
      doctorProfilePendingCount:0,
      patientCount:0,
      totalAppoinmentCount:0,
      completedAppoinmentsCount:0,
      doctorProfileRejectedCount:0,
      doctorProfileApprovedCount:0,
      //patient


      //doctor
    }
  },
  computed: {
    ...mapState(['isNavBarVisible', 'isAsideMobileExpanded', 'userRole']),

    titleStack () {
      return [
        'Admin',
        'Dashboard'
      ]
    }
  },
  mounted () {

    this.fillChartData()


    setTimeout(() => {
      this.getWidgetData()
    }, 1000);


    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  methods: {
    randomChartData (n) {
      let data = []

      for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 200))
      }

      return data
    },

    getWidgetData(){

      var url = this.userRole+'/getWidgetData';
      var method = 'Get'
      axios({
        method,
        url,

      }).then(response => {

        console.log(response);
        this.doctorProfilePendingCount = response.data.pendingDoctoProfilecount
        this.doctorProfileRejectedCount = response.data.rejectedDoctoProfilecount
        this.doctorProfileApprovedCount = response.data.approvedoctoProfilecount
        this.totalAppoinmentCount = response.data.totalAppoinmentCount
        this.patientCount = response.data.patientCount
        this.completedAppoinmentsCount = response.data.completedAppoinmentsCount

      }).catch(e => {

        this.$buefy.toast.open({
          message: `Error: ${e.message}`,
          type: 'is-danger',
          queue: false
        })
      })
    },

    fillChartData () {
      this.defaultChart.chartData = {
        datasets: [
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          }
        ],
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
      }
    }
  }
}
</script>
