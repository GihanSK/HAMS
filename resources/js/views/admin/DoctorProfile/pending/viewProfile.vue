<template>
  <div>
    <hero-bar>
      View Profile
      <router-link to="/pendinglist/index" class="button" slot="right">
        Pending List
      </router-link>
    </hero-bar>

    <section class="section is-main-section">
      <tiles>
        <card-component :loading="isLoading" :title="formCardTitle" icon="account-edit" class="tile is-child">
            <b-field label="Full Name" horizontal>
              <b-input  v-model="formData.name" disabled/>
            </b-field>

            <b-field label="First Name" horizontal>
              <b-input  v-model="formData.first_name" disabled/>
            </b-field>

             <b-field label="Last Name" horizontal>
              <b-input  v-model="formData.last_name" disabled/>
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

            <b-field label="Doctor Type" horizontal>
              <b-input  v-model="formData.doctor_type" disabled/>
            </b-field>


            <b-field  label="Experience" horizontal>
              <b-tag v-if="formData.experience_status == 0" type="is-danger">Not Complete</b-tag>
              <b-input v-else type="textarea" v-model="formData.experience" disabled/>
            </b-field>

            
             <b-field  label="Doctor Fee" horizontal >
              <b-input v-model="formData.doctor_fee" disabled/>
            </b-field>
        </card-component>
      </tiles>

     <tiles>
      <card-component :title="formCardTitle" icon="account-edit" class="tile is-child">
        <b-field  label="Cover Image" horizontal>
          <b-tag v-if="formData.profile_img_status == 0" type="is-danger">Not Upload</b-tag>
          <img v-else :src="'storage/'+formData.profile_img" width="200" alt="" style="border:1px solid rgb(176, 176, 176);border-radius: 10px;">
        </b-field>

        <b-field  label="Medical License" horizontal>
          <b-tag v-if="formData.medical_license_status == 0" type="is-danger">Not Upload</b-tag>
          <img v-else :src="'storage/'+formData.medical_license" width="1000" alt="" style="border:1px solid rgb(176, 176, 176);border-radius: 10px;">
        </b-field>

        <div style="display: flex;justify-content: flex-end;">
             <b-button style="margin-right: 10px;" type="is-dark" @click="$router.go(-1)">Cancel</b-button>
             <b-button style="margin-right: 10px;" type="is-danger" @click="openRejectModal()">Reject Profile</b-button>
             <b-button type="is-success" @click="showApproveModal = true">Approve Profile</b-button>
        </div>
      </card-component>
     </tiles>
    </section>

    <b-modal v-model="showApproveModal" :width="400" scroll="keep" :can-cancel="false">
      <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Confirmation</p>
                        <button
                            type="button"
                            class="delete"
                            @click="showApproveModal = false"/>
                    </header>
                    <section class="modal-card-body">

                      <p>Are you sure you want to approve this profile?</p>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="showApproveModal = false" />
                        <b-button
                            @click="approveprofile()"
                            label="Approve"
                            type="is-primary" />
                    </footer>
                </div>
      </b-modal>

      <b-modal v-model="showRejectModal" :width="400" scroll="keep" :can-cancel="false">
      <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Confirmation</p>
                        <button
                            type="button"
                            class="delete"
                            @click="showRejectModal = false"/>
                    </header>
                    <section class="modal-card-body">

                      <p>Are you sure you want to Reject this profile?</p>

                      <b-field :type="invalidFileds.comment == '' ? '' : 'is-danger'"
                               :message="invalidFileds.comment">
                            <b-input
                                type="textarea"
                                v-model="comment"
                                placeholder="Your Comment"
                                >
                            </b-input>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="showRejectModal = false" />
                        <b-button
                           :loading="isLoading"
                            @click="rejectProfile()"
                            label="Reject"
                            type="is-danger" />
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
      formCardTitle:"View Doctor's Profile",

      showApproveModal:false,
      showRejectModal:false,
      comment:"",

      invalidFileds:{
        comment:''
      },

      Doctortypes:[],

      formData:{
        doctor_id:'',
        first_name:'',
        last_name:'',
        name:'',
        email:'',
        contact_no:'',
        age:'',
        gender:'',
        experience_status:'',
        experience:'',
        experience_description:'',
        experience_start_date:'',
        profile_img_status:'',
        medical_license_status:'',
        profile_img:'',
        medical_license:'',
        doctor_type:'',
        doctor_fee:''
      }
    }
  },

  methods: {
    getData () {
      this.isLoading = true
      axios
        .post('/admin/viewRecord',{doctor_id:this.formData.doctor_id})
        .then(r => {

          this.isLoading = false
          console.log(r.data.data)
          this.formData.name = r.data.data[0].name;
          this.formData.first_name = r.data.data[0].first_name;
          this.formData.last_name = r.data.data[0].last_name;
          this.formData.email = r.data.data[0].email;
          this.formData.contact_no = r.data.data[0].contact_no;
          this.formData.gender = r.data.data[0].gender;
          this.formData.experience_status = r.data.data[0].experience_status;
          this.formData.experience = r.data.data[0].experience;
          this.formData.profile_img_status = r.data.data[0].profile_img_status;
          this.formData.medical_license_status = r.data.data[0].medical_license_status;
          this.formData.profile_img = r.data.data[0].profile_img;
          this.formData.medical_license = r.data.data[0].medical_license_doc
          this.formData.doctor_type = r.data.data[0].doctor_type;
          this.formData.doctor_fee =  r.data.data[0].doctor_fee;

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
    this.formData.doctor_id = this.$route.params.id


    this.getData()
  }


}
</script>

<style scoped>

.flex-container{
  justify-content: flex-end;
}


</style>
