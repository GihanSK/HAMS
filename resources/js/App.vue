<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu"/>
    <router-view/>
    <!-- <footer-bar/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Dashboard',
            role:'all'
          }
        ],

        [

          {
            to: '/doctor/myprofile',
            label: 'My Profile',
            icon: 'folder-account',
            role:'doctor'
          },
          {
            to: '/doctor/routine',
            label: 'Manage Routine',
            icon: 'folder-account',
            role:'doctor'
          },

          {
            to: '/doctor/appoinments',
            label: 'Manage Appoinments',
            icon: 'folder-account',
            role:'doctor'
          },

          {
            to: '/doctorTypes/index',
            label: 'Doctor Types',
            icon: 'doctor',
            role:'admin'
          },

          {
            to: '/admin/userList',
            label: "Patient's Profiles",
            icon: 'account-circle',
            role:'admin'
          },

          {
            label: "Doctor's Profiles",
            icon: 'view-list',
            role:'admin',
            menu: [
              {
                to: '/approvedList/index',
                label: 'Approved List',
                icon: 'account-check',
                role:'admin'
              },
              {
                to: '/pendinglist/index',
                icon: 'account-check',
                label: 'Pending List',
                role:'admin',
              },
              {
                to: '/rejectedList/index',
                label: 'Rejected List',
                icon: 'account-check',
                role:'admin'
              },
            ]
          },

            {
            to: '/admin/payments',
            label: "Payments",
            icon: 'credit-card-outline',
            role:'admin'
          },

          {
            label: "My Appoinments",
            icon: 'view-list',
            role:'patient',
            menu: [
              {
                to: '/patient/pendingAppoinments',
                label: 'Pending Appoinments',
                role:'patient'
              },

              {
                to: '/patient/completedAppoinments',
                label: 'Completed Appoinments',
                role:'patient'
              },

              {
                to: '/patient/expiredAppoinments',
                label: 'Expired Appoinments',
                role:'patient'
              },
            ]
          },

          {
            to: '/patient/medicineTracker',
            label: 'Medicine Tracker',
            icon: 'file-clock',
            role:'patient'
          },
        ],
      ]
    }
  },
  created () {
    axios
      .get('/user')
      .then(r => {
        this.$store.commit('user', r.data.data)
      })
      .catch(err => {
        this.$buefy.toast.open({
          message: `Error: ${err.message}`,
          type: 'is-danger'
        })
      })
  }
}
</script>
