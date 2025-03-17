import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* User */
    userName: null,
    userRole:null,
    userEmail: null,
    userAvatar: null,
    userId :null,

    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideMobileExpanded: false
  },
  mutations: {
    /* A fit-them-all commit */
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user (state, payload) {
      console.log('paylod')
      console.log(payload)
      if (payload.name) {
        state.userName = payload.name
      }

      if(payload.id){
        state.userId = payload.id
      }

      if(payload.roles){
        payload.roles.forEach(element => {
          console.log(element.name)
          state.userRole = element.name
        });
      }

      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.profile_img) {
        state.userAvatar = payload.profile_img
      }else{
        state.userAvatar = false
      }
    },

    /* Aside Mobile */
    asideMobileStateToggle (state, payload = null) {
      const htmlClassName = 'has-aside-mobile-expanded'

      let isShow

      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideMobileExpanded
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideMobileExpanded = isShow
    }
  },
  actions: {

  }
})
