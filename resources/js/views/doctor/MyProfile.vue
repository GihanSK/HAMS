<template>
  <div>
    <hero-bar>
      My Profile
    </hero-bar>

    
    <section class="section is-main-section">
      <b-message v-if="formData.profile_status == 'pending' && formData.experience_status == 1 && formData.profile_img_status== 1 && formData.medical_license_status == 1"
            title="Message"
            type="is-warning"
            aria-close-label="Close message">
            You cannot manage your Routine untill the admin will apprve your account
        </b-message>

        <b-message v-if="formData.profile_status == 'rejected'"
            title="Warning"
            type="is-danger"
            aria-close-label="Close message">
            Your profile is rejected by admin <br>
           <strong>Reason : {{ formData.comment }}</strong>
        </b-message>
      <tiles>
        <card-component :loading="isLoading" :title="formCardTitle" icon="account-edit" class="tile is-child">

            <b-field label="First Name" horizontal :type="invalidFileds.first_name == '' ? '' : 'is-danger'"
               :message="invalidFileds.first_name">
              <b-input @input="resetInvalidStatus('first_name')" v-model="formData.first_name" />
            </b-field>

             <b-field label="Last Name" horizontal :type="invalidFileds.last_name == '' ? '' : 'is-danger'"
               :message="invalidFileds.last_name">
              <b-input @input="resetInvalidStatus('last_name')" v-model="formData.last_name" />
            </b-field>

            <b-field label="Email" horizontal :type="invalidFileds.email == '' ? '' : 'is-danger'"
               :message="invalidFileds.email">
              <b-input @input="resetInvalidStatus('email')" v-model="formData.email" />
            </b-field>

            <b-field label="Contact No" horizontal :type="invalidFileds.contact_no == '' ? '' : 'is-danger'"
               :message="invalidFileds.contact_no">
              <b-input @input="resetInvalidStatus('contact_no')" v-model="formData.contact_no" />
            </b-field>

            <b-field label="Gender" horizontal :type="invalidFileds.gender == '' ? '' : 'is-danger'"
               :message="invalidFileds.gender">
              <div class="block">
                <b-radio @input="resetInvalidStatus('gender')" v-model="formData.gender"
                    name="gender"
                    native-value="Male">
                     Male
                </b-radio>
                <b-radio @input="resetInvalidStatus('gender')" v-model="formData.gender"
                    name="gender"
                    native-value="Female">
                    Female
                </b-radio>
              </div>
            </b-field>

            <b-field label="Select Type" horizontal>
              <b-select v-model="formData.doctor_type" >
                  <option
                      v-for="option in Doctortypes"
                      :value="option.name"
                      :key="option.id">
                      {{ option.name}}
                  </option>
              </b-select>
            </b-field>

            <b-field  label="Experience" horizontal :type="invalidFileds.experience == '' ? '' : 'is-danger'"
               :message="invalidFileds.experience">
              <b-input @input="resetInvalidStatus('experience')"  type="textarea" v-model="formData.experience" />
            </b-field>

             <b-field  label="Doctor Fee" horizontal :type="invalidFileds.doctor_fee == '' ? '' : 'is-danger'"
               :message="invalidFileds.doctor_fee">
              <b-input @input="resetInvalidStatus('doctor_fee')" v-model="formData.doctor_fee" />
            </b-field>
        </card-component>
      </tiles>

     <tiles>
      <card-component title="Upload Proof" icon="upload" class="tile is-child">
        <b-field label="Updated Cover Image" horizontal v-if="formData.profile_img_status == 1">
          <img :src="'/storage/'+formData.profile_img_path" width="200" alt="" style="border:1px solid rgb(176, 176, 176);border-radius: 10px;">
        </b-field>

        <b-field label="Update Cover Image?" horizontal v-if="formData.profile_img_status == 1">
            <b-switch v-model="isprofileImageUpdate"></b-switch>
        </b-field>

        <b-field  label="Cover Image" horizontal :type="invalidFileds.profile_img == '' ? '' : 'is-danger'" v-if="isprofileImageUpdate"
               :message="invalidFileds.profile_img">
          <b-field class="file is-primary" :class="{'has-name': !!formData.profile_img}">
              <b-upload v-model="formData.profile_img" class="file-label" :multiple="false"  @input="resetInvalidStatus('profile_img')">
                  <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="formData.profile_img != null">
                      {{ formData.profile_img.name }}
                  </span>
              </b-upload>
          </b-field>
        </b-field>

        <!-- if new user  -->
        <b-field  label="Cover Image" horizontal :type="invalidFileds.profile_img == '' ? '' : 'is-danger'"  v-if="formData.profile_img_status == 0"
               :message="invalidFileds.profile_img">
          <b-field class="file is-primary" :class="{'has-name': !!formData.profile_img}">
              <b-upload v-model="formData.profile_img" class="file-label" :multiple="false"  @input="resetInvalidStatus('profile_img')">
                  <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="formData.profile_img != null">
                      {{ formData.profile_img.name }}
                  </span>
              </b-upload>
          </b-field>
        </b-field>


        <b-field label="Updated Nedical License Image" horizontal v-if="formData.medical_license_status == 1">
          <img :src="'/storage/'+formData.medical_license_path" width="500" alt="" style="border:1px solid rgb(176, 176, 176);border-radius: 10px;">
        </b-field>

        <b-field label="Update Medical License?" horizontal v-if="formData.medical_license_status == 1">
            <b-switch v-model="isMedicalProfileUpdate"></b-switch>
        </b-field>

        <b-field  label="Medical License" horizontal :type="invalidFileds.medical_license == '' ? '' : 'is-danger'" v-if="isMedicalProfileUpdate"
               :message="invalidFileds.medical_license">
          <b-field class="file is-primary" :class="{'has-name': !!formData.medical_license}">
              <b-upload v-model="formData.medical_license" class="file-label" :multiple="false"  @input="resetInvalidStatus('medical_license')">
                  <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="formData.medical_license != null">
                      {{ formData.medical_license.name }}
                  </span>
              </b-upload>
          </b-field>
        </b-field>

        <!-- new user -->
        <b-field  label="Medical License" horizontal :type="invalidFileds.medical_license == '' ? '' : 'is-danger'" v-if="formData.medical_license_status == 0"
               :message="invalidFileds.medical_license">
          <b-field class="file is-primary" :class="{'has-name': !!formData.medical_license}">
              <b-upload v-model="formData.medical_license" class="file-label" :multiple="false"  @input="resetInvalidStatus('medical_license')">
                  <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="formData.medical_license != null">
                      {{ formData.medical_license.name }}
                  </span>
              </b-upload>
          </b-field>
        </b-field>

        <div style="display: flex;justify-content: flex-end;">
             <b-button :loading="isLoading" type="is-success" @click="validateAndSubmit()">Update Profile</b-button>
        </div>
      </card-component>
     </tiles>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TitleBar from '@/components/TitleBar'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'

export default {

  name:'DoctorProfile',

  components: {TitleBar,CardComponent,HeroBar,Tiles},

  computed:{
    ...mapState(['isNavBarVisible', 'isAsideMobileExpanded', 'userId'])
  },

  data () {
    return {
      isLoading:false,
      formCardTitle:"Profile Informations",

      formData:{
        doctor_id:'',
        first_name:'',
        last_name:'',
        email:'',
        contact_no:'',
        gender:'',
        experience:'',
        profile_img:[],
        profile_img_path:'',
        medical_license:[],
        medical_license_path:'',
        profile_status:'',
        comment:'',
        doctor_type:'',
        doctor_fee:''

      },

      Doctortypes:[],

      isprofileImageUpdate:false,
      isMedicalProfileUpdate:false,

      invalidFileds:{
        doctor_id:'',
        first_name:'',
        last_name:'',
        email:'',
        contact_no:'',
        gender:'',
        experience:'',
        profile_img:'',
        medical_license:'',
        doctor_fee:''
      }
    }
  },

  methods: {

    getDoctorTypes(){

      axios
        .get('/doctor/doctorTypes')
        .then(r => {

          this.isLoading = false
          this.Doctortypes = r.data
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
          this.formData.first_name = r.data.data[0].first_name;
          this.formData.last_name = r.data.data[0].last_name;
          this.formData.email = r.data.data[0].email;
          this.formData.contact_no = r.data.data[0].contact_no;
          this.formData.age = r.data.data[0].age;
          this.formData.gender = r.data.data[0].gender;
          this.formData.experience_status = r.data.data[0].experience_status;
          this.formData.experience = r.data.data[0].experience;
          this.formData.profile_img_status = r.data.data[0].profile_img_status;
          this.formData.medical_license_status = r.data.data[0].medical_license_status;
          this.formData.profile_status = r.data.data[0].status
          this.formData.profile_img = r.data.data[0].profile_img;
          this.formData.profile_img_path = r.data.data[0].profile_img;
          this.formData.medical_license = r.data.data[0].medical_license_doc;
          this.formData.medical_license_path = r.data.data[0].medical_license_doc;
          this.formData.comment = r.data.data[0].comment;
          this.formData.doctor_type = r.data.data[0].doctor_type;


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

      validateForm:function(){

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

        if(this.formData.experience== '' || this.formData.experience == null){
          this.invalidFileds.experience = 'This field cannot left blank'
          formIsValid = false
        }

        if(this.formData.profile_img == null){
          this.invalidFileds.profile_img = 'This field cannot left blank'
          formIsValid = false
        }

        if(this.formData.medical_license == null ){
          this.invalidFileds.medical_license = 'This field cannot left blank'
          formIsValid = false
        }

         if(this.formData.doctor_fee == null ){
          this.invalidFileds.doctor_fee = 'This field cannot left blank'
          formIsValid = false
        }else if(this.formData.doctor_fee < 2000){
           this.invalidFileds.doctor_fee = "Doctor's fee should be more than LKR.2000"
          formIsValid = false
        }

        return formIsValid;

      },

      validateAndSubmit(){

        if( this.validateForm()){
          this.submitForm();
        }

      },

      submitForm(){
        this.isLoading = true

        var formData = new FormData();
        formData.append('doctor_id', this.userId);
        formData.append('first_name', this.formData.first_name);
        formData.append('last_name', this.formData.last_name);
        formData.append('email', this.formData.email);
        formData.append('contact_no', this.formData.contact_no);
        formData.append('gender', this.formData.gender);
        formData.append('experience', this.formData.experience);
        formData.append('profile_img', this.formData.profile_img);
        formData.append('medical_license', this.formData.medical_license);
        formData.append('doctor_type', this.formData.doctor_type);
        formData.append('doctor_fee',this.formData.doctor_fee);
        if(this.isprofileImageUpdate){
          formData.append('profile_img_updated', this.isprofileImageUpdate)
        }
        if(this.isMedicalProfileUpdate){
          formData.append('medical_license_updated', this.isMedicalProfileUpdate)
        }



        axios
        .post('/doctor/updateProfile',formData,{
          headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(r => {

          this.isLoading = false

          if(r.data.success == true){

            this.$buefy.toast.open({
              message: r.data.message,
              type: 'is-success',
              queue: false
            })

            this.$router.push({name:'home'})

          }else{
            this.$buefy.toast.open({
              message: r.data.message,
              type: 'is-danger',
              queue: false
            })
            this.$router.push({name:'home'})
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

  mounted (){
    this.getDoctorTypes()
    this.getData()

  }


}
</script>

<style scoped>

.flex-container{
  justify-content: flex-end;
}


</style>
