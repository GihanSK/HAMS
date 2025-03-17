<template>
  <div class="is-user-avatar">
   
    <img v-if="UserAvatar == false" src="https://avatars.dicebear.com/v2/initials/tharindu dasun.svg" alt="">
     <img :src="'/storage/'+newUserAvatar" :alt="userName" v-else >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserAvatar',
  props: {
    avatar: {
      type: String,
      default: null
    }
  },
  computed: {
    newUserAvatar () {
      if (this.avatar) {
        return this.avatar
      }

      if (this.userAvatar) {
        return this.userAvatar
      }
    },
    ...mapState([
      'userAvatar',
      'userName'
    ])
  }
}
</script>
