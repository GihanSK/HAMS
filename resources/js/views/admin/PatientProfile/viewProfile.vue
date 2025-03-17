<template>
  <div>
    <hero-bar>
      View Profile
      <router-link to="/admin/userList" class="button" slot="right">
        Patient's Profiles
      </router-link>
    </hero-bar>

    
    <section class="section is-main-section">
      <tiles>
        <card-component :loading="isLoading" :title="formCardTitle" icon="account-edit" class="tile is-child">
            <b-field label="Full Name" horizontal>
              <b-input  v-model="formData.name" disabled/>
            </b-field>

            <b-field label="First Name" horizontal :type="invalidFileds.first_name == '' ? '' : 'is-danger'"
               :message="invalidFileds.first_name">
              <b-input  v-model="formData.first_name"  @input="resetInvalidStatus('first_name')" />
            </b-field>

             <b-field label="Last Name" horizontal :type="invalidFileds.last_name == '' ? '' : 'is-danger'"
               :message="invalidFileds.last_name">
              <b-input  v-model="formData.last_name"  @input="resetInvalidStatus('last_name')"/>
            </b-field>

            <b-field label="Email" horizontal :type="invalidFileds.email == '' ? '' : 'is-danger'"
               :message="invalidFileds.email">
              <b-input  v-model="formData.email"  @input="resetInvalidStatus('email')"/>
            </b-field>

            <b-field label="Contact No" horizontal :type="invalidFileds.contact_no == '' ? '' : 'is-danger'"
               :message="invalidFileds.contact_no">
              <b-input  v-model="formData.contact_no"  @input="resetInvalidStatus('contact_no')"/>
            </b-field>

            <b-field label="Gender" horizontal :type="invalidFileds.gender == '' ? '' : 'is-danger'"
               :message="invalidFileds.gender">
              <b-select v-model="formData.gender">
                <option value="Male">Male</option>
                 <option value="Female">Female</option>
              </b-select>
          
            </b-field>

            <b-field label="Created At" horizontal>
              <b-input  v-model="formData.created_at" disabled/>
            </b-field>

            <div style="display: flex;justify-content: flex-end;">
              <b-button class="is-primary mr-3" @click="validateAndSubmit()" :loading="isLoading">Update</b-button>
              <b-button style="margin-right: 10px;" type="is-dark" @click="$router.go(-1)">Cancel</b-button>
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
      formCardTitle:"View Patient's Profile",

      showApproveModal:false,
      showRejectModal:false,
      comment:"",

      invalidFileds:{
        comment:''
      },

      Doctortypes:[],

      formData:{
        user_id:'',
        first_name:'',
        last_name:'',
        name:'',
        email:'',
        contact_no:'',
        age:'',
        gender:'',
        created_at:''
      },

       oldData:{
        user_id:'',
        first_name:'',
        last_name:'',
        name:'',
        email:'',
        contact_no:'',
        age:'',
        gender:'',
        created_at:''
      },


       invalidFileds:{
        first_name:'',
        last_name:'',
        email:'',
        contact_no:'',
        gender:''

      }
    }
  },

  methods: {
    getData () {
      this.isLoading = true
      axios
        .post('/admin/ShowProfile',{user_id:this.formData.user_id})
        .then(r => {

          this.isLoading = false
          console.log(r.data)
          this.formData.user_id = r.data.id
          this.formData.name = r.data.name;
          this.formData.first_name = r.data.first_name;
          this.formData.last_name = r.data.last_name;
          this.formData.email = r.data.email;
          this.formData.contact_no = r.data.contact_no;
          this.formData.gender = r.data.gender;
          this.formData.created_at = this.formatDate(r.data.created_at)

          this.oldData.first_name = r.data.first_name;
          this.oldData.last_name = r.data.last_name;
          this.oldData.email = r.data.email;
          this.oldData.contact_no = r.data.contact_no;
          this.oldData.gender = r.data.gender;


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
        if(this.validateForm()){
            this.submitForm()
        }
      },

      submitForm(){
        this.isLoading = true

        var formdata = new FormData();
        formdata.append('patient_id',this.formData.user_id)
        formdata.append('first_name',this.formData.first_name);
        formdata.append('last_name',this.formData.last_name);
        formdata.append('email',this.formData.email);
        formdata.append('contact_no',this.formData.contact_no);
        formdata.append('gender',this.formData.gender);

        axios
        .post('/admin/updatePatient',formdata)
        .then(r => {

        this.isLoading = false
          this.$buefy.toast.open({
            message: r.data.message,
            type: 'is-success',
            queue: false
          })

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

      validateForm(){
         var formIsValid = true

        if(this.formData.first_name == '' || this.formData.first_name == null){
          this.invalidFileds.first_name = 'This field cannot left blank'
          formIsValid = false
        }

        if(this.formData.last_name == '' || this.formData.last_name == null){
          this.invalidFileds.last_name = 'This field cannot left blank'
          formIsValid = false
        }

        if(this.formData.email == '' || this.formData.email == null){
          this.invalidFileds.email = 'This field cannot left blank'
          formIsValid = false
        }

        if(this.formData.contact_no == '' ||  this.formData.contact_no == null){
          this.invalidFileds.contact_no = 'This field cannot left blank'
          formIsValid = false
        }

        if(this.formData.gender == '' || this.formData.gender == null){
          this.invalidFileds.gender = 'This field cannot left blank'
          formIsValid = false
        }

    

       return formIsValid;
      },

     resetInvalidStatus: function(key){
            this.invalidFileds[key] = ''
    },


      approveprofile(){
        axios
            .post('/admin/approveProfile',{doctor_id:this.formData.doctor_id})
            .then(r => {

              this.showApproveModal = false
              if(r.data.success == true){
                  this.$buefy.toast.open({
                  message: r.data.message,
                  type: 'is-success',
                  queue: false
                })
                this.$router.push({name: 'pending.index'})
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
      },

      openRejectModal(){
        this.showRejectModal = true
        this.comment = ''
      },

      formatDate(value){
        let day = new Date(value);
        var date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
        return date
      },

      rejectProfile(){
        this.isLoading = true

        if(this.comment == ''){
          this.invalidFileds.comment = 'Comment is required'
          this.isLoading = false

        }else{
          axios
            .post('/admin/rejectProfile',{doctor_id:this.formData.doctor_id,comment:this.comment})
            .then(r => {
              this.isLoading = false
              this.showRejectModal = false
              if(r.data.success == true){
                  this.$buefy.toast.open({
                  message: r.data.message,
                  type: 'is-success',
                  queue: false
                })
                this.$router.push({name: 'pending.index'})
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
      }
  },

  mounted (){
    console.log(this.$route.params.id)
    this.formData.user_id = this.$route.params.id


    this.getData()
  }


}
</script>

<style scoped>

.flex-container{
  justify-content: flex-end;
}


</style>
