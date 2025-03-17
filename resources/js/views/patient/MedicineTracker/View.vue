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
      <card-component title="Patient's Diagnostic" icon="medical-bag" class="tile is-child">
        <b-field horizontal>
          <template slot="label">Symptoms</template>
          <b-input v-model="medicalLog.patient_symtoms" type="textarea" disabled/>
        </b-field>

        <b-field horizontal>
          <template slot="label">Patient's disease</template>
          <b-input v-model="medicalLog.patient_disease" type="textarea" disabled/>
        </b-field>

        <b-field label="Extra Note" horizontal>
          <b-input  v-model="medicalLog.extra_note" type="textarea" disabled/>
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
              {{ props.row.drug }}
            </b-table-column>

            <b-table-column label="Strength" v-slot="props">
              {{ props.row.strength }}
            </b-table-column>

            <b-table-column label="Type" v-slot="props">
              {{ props.row.type }}
            </b-table-column>

            <b-table-column label="Frequency" v-slot="props">
              {{ props.row.frequency }}
            </b-table-column>

            <b-table-column label="Action" v-slot="props">
              <b-button size="is-small" type="is-primary" @click="openSetTimeModal(props.row.id)">
                Set Time
              </b-button>
              <b-button size="is-small" type="is-info" @click="viewTimeslots(props.row.id)">
                View Timeslots
              </b-button>
            </b-table-column>

        </b-table>
      </card-component>
     </tiles>

     <tiles>
      <card-component title="Medical Transcription Reports" icon="file-document-edit-outline" class="tile is-child">
        <b-field>
            <b-input v-model="medicalLog.medical_transcription" disabled></b-input>
        </b-field>


        <div style="display: flex;justify-content: flex-end;">
             <b-button style="margin-right: 10px;" type="is-dark" @click="$router.go(-1)">Cancel</b-button>
        </div>
      </card-component>
     </tiles>
    </section>

    <b-modal v-model="showSetTimeModal" :width="800" scroll="keep" :can-cancel="false">
      <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Set Time</p>
                        <button
                            type="button"
                            class="delete"
                            @click="showSetTimeModal = false"/>
                    </header>
                    <section class="modal-card-body">
                      <b-field horizontal label="Drug/Medication">
                            <b-input v-model="formData.drug" disabled>
                            </b-input>
                      </b-field>
                      <b-field horizontal label="Strength">
                            <b-input v-model="formData.strength" disabled>
                            </b-input>
                      </b-field>
                      <b-field horizontal label="Type">
                            <b-input v-model="formData.type" disabled>
                            </b-input>
                      </b-field>
                      <b-field horizontal label="Frequency">
                            <b-input v-model="formData.frequency" disabled>
                            </b-input>
                      </b-field>

                      <b-field label="Timeslot 1" horizontal >
                        <b-timepicker v-model="formData.timeslot1"  position="is-top-right"
                            placeholder="Click to select...">

                            <b-button
                                label="Now"
                                type="is-primary"
                                icon-left="clock"
                                @click="time = new Date()" />
                            <b-button
                                label="Clear"
                                type="is-danger"
                                icon-left="close"
                                outlined
                                @click="formData.timeslot1 = null" />
                        </b-timepicker>
                    </b-field>

                    <b-field label="Timeslot 2" horizontal v-if="formData.frequency =='Twice a day' || formData.frequency =='Three times' ">
                        <b-timepicker v-model="formData.timeslot2"  position="is-top-right"
                            placeholder="Click to select...">

                            <b-button
                                label="Now"
                                type="is-primary"
                                icon-left="clock"
                                @click="time = new Date()" />
                            <b-button
                                label="Clear"
                                type="is-danger"
                                icon-left="close"
                                outlined
                                @click="formData.timeslot2 = null" />
                        </b-timepicker>
                    </b-field>

                    <b-field label="Timeslot 3" horizontal v-if="formData.frequency == 'Three times'">
                        <b-timepicker v-model="formData.timeslot3" position="is-top-right"
                            placeholder="Click to select...">

                            <b-button
                                label="Now"
                                type="is-primary"
                                icon-left="clock"
                                @click="time = new Date()" />
                            <b-button
                                label="Clear"
                                type="is-danger"
                                icon-left="close"
                                outlined
                                @click="formData.timeslot3 = null" />
                        </b-timepicker>
                    </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="showSetTimeModal = false" />
                        <b-button
                           :loading="isLoading"
                            @click="validateAndSubmit()"
                            label="Save"
                            type="is-success" />
                    </footer>
                </div>
    </b-modal>

    <b-modal v-model="showTimeslots" :width="800" scroll="keep" :can-cancel="false">
      <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">View Timeslots</p>
                        <button
                            type="button"
                            class="delete"
                            @click="showTimeslots = false"/>
                    </header>
                    <section class="modal-card-body">
                      <b-field horizontal label="Frequency">
                        <b-input v-model="Timeslots.frequency" disabled></b-input>
                      </b-field>

                      <b-field label="Timeslot 1" horizontal >
                          <b-input v-model="Timeslots.timeslot1" disabled></b-input>
                      </b-field>

                      <b-field label="Timeslot 2" horizontal v-if="Timeslots.frequency =='Twice a day' || Timeslots.frequency =='Three times' ">
                        <b-input v-model="Timeslots.timeslot2" disabled></b-input>
                      </b-field>

                      <b-field label="Timeslot 3" horizontal v-if="Timeslots.frequency== 'Three times'">
                        <b-input v-model="Timeslots.timeslot3" disabled></b-input>
                      </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="showTimeslots= false" />

                    </footer>
                </div>
    </b-modal>
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
        diagnostic_id:'',
        frequency:"",
        type:"",
        strength:"",
        drug:"",
        prescription_id:"",
        timeslot1:new Date(),
        timeslot2:new Date(),
        timeslot3:new Date(),

      },

      Timeslots:{
        diagnostic_id:'',
        frequency:"",
        type:"",
        strength:"",
        drug:"",
        timeslot1:"" ,
        timeslot2:"" ,
        timeslot3:"" ,
      },

      invalidFileds:{
        timeslot1:"",
        timeslot2:"",
        timeslot3:"",
      },

      invalidPrescription:[
        { drug:"",strength:"",type:"",frequency:""}
      ],

      reports:{
        radiology_report:"",
        laboratory_report:""
      },

      Prescription:[],

      medicalLog:[],

      rowNumber: 0,

      showSetTimeModal:false,
      showTimeslots:false,
    }
  },

  methods: {

    formatTime(time){
      const dateObject = new Date(time);
      const hours =   String(dateObject.getHours()).padStart(2, '0');
      const minutes = String(dateObject.getMinutes()).padStart(2, '0');
      // const seconds = String(dateObject.getSeconds()).padStart(2, '0');

      const joined = [hours, minutes ].join(':');
       return joined;

    },

    validateTimeSlots(){
      var isError = true
      var formatted_timeslot1 = this.formatTime(this.formData.timeslot1)
      var formatted_timeslot2 = this.formatTime(this.formData.timeslot2)
      var formatted_timeslot3 = this.formatTime(this.formData.timeslot3)

      if(this.formData.timeslot1 == null || this.formData.timeslot2 == null || this.formData.timeslot3 == null){
        this.$buefy.toast.open({
              message: 'Timeslots value cannot be empty',
              type: 'is-danger',
            })
         isError = false
      }else{

        if(this.formData.frequency == 'Three times'){
          if(formatted_timeslot1 == formatted_timeslot2 && formatted_timeslot2 == formatted_timeslot3){
            isError = false
              this.$buefy.toast.open({
                    message: 'Cannot select same timeslots',
                    type: 'is-danger',
              })

          }else{
            if(formatted_timeslot1 == formatted_timeslot2 ){
              this.$buefy.toast.open({
                    message: 'Timeslot 1 & 2 cannot be same',
                    type: 'is-danger',
              })
              isError = false
            }

            if(formatted_timeslot2 == formatted_timeslot3 ){
              this.$buefy.toast.open({
                    message: 'Timeslot 2 & 3 cannot be same',
                    type: 'is-danger',
              })
              isError = false
            }

            if(formatted_timeslot1 == formatted_timeslot3 ){
              this.$buefy.toast.open({
                    message: 'Timeslot 1 & 3 cannot be same',
                    type: 'is-danger',
              })
              isError = false
            }

          }
        }


      if(this.formData.frequency == 'Twice a day'){
          if(formatted_timeslot1 == formatted_timeslot2){
              this.$buefy.toast.open({
                    message: 'Cannot select same timeslots',
                    type: 'is-danger',
              })
              isError = false
          }
        }
      }

      return isError

    },

    validateAndSubmit(){
      if(this.validateTimeSlots()){
        this.submitForm()
      }
    },

    viewTimeslots(id){
      this.showTimeslots = true

      axios
        .post('/patient/viewTimeslots',{prescription_id:id})
        .then(r => {
          console.log(r.data)

          this.Timeslots.frequency = r.data.frequency
          this.Timeslots.timeslot1 = r.data.selected_time_1
          this.Timeslots.timeslot2 = r.data.selected_time_2
          this.Timeslots.timeslot3 = r.data.selected_time_3

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


    openSetTimeModal(id){
      this.showSetTimeModal = true
      var index = this.Prescription.findIndex(x => x.id === id);
      console.log(this.Prescription[index])
      this.formData.diagnostic_id = this.Prescription[index].diagnostic_id
      this.formData.drug = this.Prescription[index].drug
      this.formData.frequency = this.Prescription[index].frequency
      this.formData.type = this.Prescription[index].type
      this.formData.strength = this.Prescription[index].strength
      this.formData.prescription_id = this.Prescription[index].id
    },


    getData () {
      this.isLoading = true
      axios
        .post('/patient/GetPresciptionData',{diagnostic_id:this.formData.diagnostic_id})
        .then(r => {

          this.isLoading = false
          console.log(r.data)
          this.Prescription = r.data.Prescription
          this.medicalLog = r.data.medicalLog

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
      formData.append("frequency", this.formData.frequency)
      formData.append("prescription_id", this.formData.prescription_id)
      formData.append("timeslot1", this.formatTime(this.formData.timeslot1))
      formData.append("timeslot2", this.formatTime(this.formData.timeslot2))
      formData.append("timeslot3",this.formatTime(this.formData.timeslot3))

      axios
        .post('/patient/SaveTimeslots', formData )
        .then(r => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: r.data.message,
            type: 'is-success',
            queue: false
          })
          this.$router.push({name: 'patient.medicineTracker'})
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



  },

  mounted (){
    console.log(this.$route.params.id)
    this.formData.diagnostic_id = this.$route.params.id
    this.getData()
  }


}
</script>

<style scoped>

.flex-container{
  justify-content: flex-end;
}


</style>
