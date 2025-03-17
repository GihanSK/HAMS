<template>
  <div>
    <hero-bar>
      View Profile
      <router-link to="/pendinglist/index" class="button" slot="right">
        Appoinment List
      </router-link>
    </hero-bar>

    <section class="section is-main-section">
      <tiles>
        <card-component :loading="isLoading" title="Patient's Details" icon="account-tie" class="tile is-child">
            <b-field label="Full Name" horizontal>
              <b-input  v-model="formData.fullname" disabled/>
            </b-field>

            <b-field label="Email" horizontal>
              <b-input  v-model="formData.email" disabled/>
            </b-field>

            <b-field label="Contact No" horizontal>
              <b-input  v-model="formData.contact_no" disabled/>
            </b-field>

            <b-field label="Gender" horizontal>
              <b-input  v-model="formData.gender" disabled/>
            </b-field>

            <b-field label="Appoinment Date" horizontal>
              <b-input  v-model="formData.appoinment_date" disabled/>
            </b-field>

            <b-field label="Time Slot" horizontal>
              <b-input  v-model="formData.timeslot" disabled/>
            </b-field>
        </card-component>
      </tiles>

     <tiles>
      <card-component title="Patient's Diagnostic" icon="medical-bag" class="tile is-child">
        <b-field horizontal :type="invalidFileds.symptoms == '' ? '' : 'is-danger'" :message="invalidFileds.symptoms">
          <template slot="label">Symptoms<span class="has-text-danger">*</span></template>
          <b-input @input="resetinvalidstatus('symptoms')" v-model="formData.symptoms" type="textarea" />
        </b-field>

        <b-field horizontal :type="invalidFileds.disease == '' ? '' : 'is-danger'" :message="invalidFileds.disease">
          <template slot="label">Patient's disease<span class="has-text-danger">*</span></template>
          <b-input @input="resetinvalidstatus('disease')"  v-model="formData.disease"  />
        </b-field>

        <b-field label="Extra Note" horizontal>
          <b-input  v-model="formData.extra_note" type="textarea" />
        </b-field>
      </card-component>
     </tiles>

     <tiles>
      <card-component title="Patient's Prescription" icon="medical-bag" class="tile is-child">
        <b-table
          :striped="true"
          :hoverable="true"
           default-sort="name"
          :data="Prescription"
          striped hoverable>
             <b-table-column label="Drug/Medication" v-slot="props">
              <b-field :type="invalidPrescription[props.row.rowNumber].drug == '' ? '' : 'is-danger'" :message="invalidPrescription[props.row.rowNumber].drug">
                <b-input v-model="Prescription[props.row.rowNumber].drug" @input="resetInvalidPresctiption('drug')" ></b-input>

              </b-field>
            </b-table-column>

            <b-table-column label="Strength" v-slot="props">
              <b-field :type="invalidPrescription[props.row.rowNumber].strength == '' ? '' : 'is-danger'" :message="invalidPrescription[props.row.rowNumber].strength">
                <b-input v-model="Prescription[props.row.rowNumber].strength"  @input="resetInvalidPresctiption('strength')"></b-input>
              </b-field>
            </b-table-column>

            <b-table-column label="Type" v-slot="props">
              <b-field :type="invalidPrescription[props.row.rowNumber].type == '' ? '' : 'is-danger'" :message="invalidPrescription[props.row.rowNumber].type">
                <b-select v-model="Prescription[props.row.rowNumber].type"  @input="resetInvalidPresctiption('type')">
                  <option value="Tablet">Tablet</option>
                  <option value="Syrup">Syrup</option>
                  <option value="Inhaler">Inhaler</option>
                </b-select>
              </b-field>
            </b-table-column>

            <b-table-column label="Frequency" v-slot="props">
              <b-field :type="invalidPrescription[props.row.rowNumber].frequency == '' ? '' : 'is-danger'" :message="invalidPrescription[props.row.rowNumber].frequency">
                <b-select v-model="Prescription[props.row.rowNumber].frequency"  @input="resetInvalidPresctiption('frequency')">
                    <option value="Daily">Daily</option>
                    <option value="Twice a day">Twice a day</option>
                    <option value="Three times">Three times a day</option>
               </b-select>
              </b-field>
            </b-table-column>

            <b-table-column label="Add / Remove">
              <b-button size="is-small" type="is-primary" @click="addNewPrescription()">
                <b-icon icon="plus" custom-size="default"/>
              </b-button>
              <b-button size="is-small" type="is-danger" @click="removePrescription()">
                <b-icon icon="minus" custom-size="default"/>
              </b-button>
            </b-table-column>

        </b-table>
      </card-component>
     </tiles>

     <tiles>
      <card-component title="Medical Transcription Reports" icon="file-document-edit-outline" class="tile is-child">
        <b-field>
            <b-checkbox  v-model="reports.radiology_report" true-value="Yes" false-value="No">Radiology Report</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="reports.plaboratory_report" true-value="Yes" false-value="No">Laboratory Reports</b-checkbox>
        </b-field>

        <div style="display: flex;justify-content: flex-end;">
             <b-button style="margin-right: 10px;" type="is-dark" @click="$router.go(-1)">Cancel</b-button>
             <b-button type="is-success" @click="validateAndSubmit()">Mark As Completed</b-button>
        </div>
      </card-component>
     </tiles>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'

export default {

  name:'PendingviewProfile',

  components: {TitleBar,CardComponent,HeroBar,Tiles},

  data () {
    return {
      isLoading:false,

      formData:{
        appoinment_id:'',
        fullname:"",
        email:'',
        contact_no:'',
        gender:'',
        appoinment_date:"",
        timeslot:"",
        symptoms:"",
        disease:"",
        extra_note:"",
        patient_id:"",

      },

      invalidFileds:{
        symptoms:"",
        disease:"",
      },

      invalidPrescription:[
        { drug:"",strength:"",type:"",frequency:""}
      ],

      reports:{
        radiology_report:"",
        laboratory_report:""
      },
      Prescription:[
        { rowNumber:0,drug:"",strength:"",type:"",frequency:""}
      ],

      rowNumber: 0
    }
  },

  methods: {

    addNewPrescription(){
      if(this.rowNumber == 9){
        this.$buefy.toast.open({
            message: 'Cannot Add more than 10 rows',
            type: 'is-danger',
            queue: false
          })
      }else if(this.validatePrescription()){

        this.rowNumber++
        this.Prescription.push({
          rowNumber: this.rowNumber,
          drug: '',
          strength: '',
          type: '',
          frequency: ''
        })


        this.invalidPrescription.push({
          rowNumber: this.rowNumber,
          drug: '',
          strength: '',
          type: '',
          frequency:'',
        })
      }

    },



    validatePrescription(){
      var isError = true
      if(this.Prescription[this.rowNumber].drug == ''){
        this.invalidPrescription[this.rowNumber].drug = 'This field cannot be empty'
        isError = false
      }

      if(this.Prescription[this.rowNumber].strength == ''){
        this.invalidPrescription[this.rowNumber].strength = 'This field cannot be empty'
        isError = false
      }

      if(this.Prescription[this.rowNumber].type == ''){
        this.invalidPrescription[this.rowNumber].type = 'This field cannot be empty'
        isError = false
      }

      if(this.Prescription[this.rowNumber].frequency == ''){
        this.invalidPrescription[this.rowNumber].frequency = 'This field cannot be empty'
        isError = false
      }


      return isError
    },

    resetInvalidPresctiption: function(key){
            this.invalidPrescription[this.rowNumber][key] = ''
    },

    resetinvalidstatus: function(key){
            this.invalidFileds[key] = ''
    },

    removePrescription(){
      if(this.rowNumber != 0){
        this.Prescription.splice(this.rowNumber, 1);
        this.rowNumber --;
      }

    },



    getData () {
      this.isLoading = true
      axios
        .post('/doctor/viewAppoinment',{appoinment_id:this.formData.appoinment_id })
        .then(r => {

          this.isLoading = false
          console.log(r.data.data)
          this.formData.patient_id = r.data.data.user_id
          this.formData.fullname = r.data.data.user_fullname;
          this.formData.email = r.data.data.user_email;
          this.formData.contact_no = r.data.data.user_contact_no;
          this.formData.gender = r.data.data.user_gender;
          this.formData.appoinment_date = r.data.data.selected_timeslot;
          this.formData.timeslot = r.data.data.selected_start_time +" to " + r.data.data.selected_end_time

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

      submitForm () {
      this.isLoading = true
      var formData = new FormData();
      formData.append('patient_id',this.formData.patient_id)
      formData.append('appoinment_id',this.formData.appoinment_id)
      formData.append('symptoms',this.formData.symptoms)
      formData.append('disease',this.formData.disease)
      formData.append('extra_note',this.formData.extra_note)
      formData.append('medical_transcription',JSON.stringify(this.reports))
      formData.append('prescription',JSON.stringify(this.Prescription))

      axios
        .post('/doctor/addMedicalDiagnostic', formData )
        .then(r => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: r.data.message,
            type: 'is-success',
            queue: false
          })
          this.$router.push({name: 'doctor.appoinments'})
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

      validateAndSubmit(){
        if(this.validateData()){
          this.submitForm()
        }
      },


      validateData(){
        var isError = true
        if(this.formData.symptoms == ''){
          this.invalidFileds.symptoms = "Symptoms cannot be empty"
          isError = false
        }

        if(this.formData.disease == ''){
          this.invalidFileds.disease = "Disease cannot be empty"
          isError = false
        }

        if(this.validatePrescription()== false){
          isError = false
        }

        return isError
      },

  },

  mounted (){
    console.log(this.$route.params.id)
    this.formData.appoinment_id = this.$route.params.id
    this.getData()
  }


}
</script>

<style scoped>

.flex-container{
  justify-content: flex-end;
}


</style>
