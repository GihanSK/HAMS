import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    //admin routes
    {
      path: '/approvedList/index',
      name: 'approved.index',
      component: () => import('./views/admin/DoctorProfile/approved/approvedList.vue'),
    },
    {
      path: '/approvedList/:id',
      name: 'approved.view',
      component: () => import('./views/admin/DoctorProfile/approved/viewProfile.vue'),
    },

    {
      path: '/pendinglist/index',
      name: 'pending.index',
      component: () => import('./views/admin/DoctorProfile/pending/pendingList.vue'),
    },

    {
      path: '/pendinglist/:id',
      name: 'pending.view',
      component: () => import('./views/admin/DoctorProfile/pending/viewProfile.vue'),
    },

    {
      path: '/rejectedList/index',
      name: 'rejected.index',
      component: () => import('./views/admin/DoctorProfile/rejected/rejectedList.vue'),
    },

    {
      path: '/doctorTypes/index',
      name: 'doctorTypes.index',
      component: () => import('./views/admin/DoctorTypes/list.vue'),
    },

    {
      path: '/rejectedList/:id',
      name: 'rejected.view',
      component: () => import('./views/admin/DoctorProfile/rejected/viewProfile.vue'),
    },

    //doctor routes
    {
      path: '/doctor/myprofile',
      name: 'doctor.myprofile',
      component: () => import('./views/doctor/MyProfile.vue'),
    },

    {
      path: '/doctor/routine',
      name: 'doctor.routine',
      component: () => import('./views/doctor/Routine.vue'),
    },
    {
      path: '/doctor/appoinments',
      name: 'doctor.appoinments',
      component: () => import('./views/doctor/Appoinments/List.vue'),
    },
    {
      path: '/doctor/appoinments/:id',
      name: 'doctor.viewAppoinments',
      component: () => import('./views/doctor/Appoinments/View.vue'),
    },

     //pending appoinments for patient
    {
      path: '/patient/pendingAppoinments',
      name: 'patient.Pendingappoinments',
      component: () => import('./views/patient/Appoinments/pending/List.vue'),
    },

    //completed appoinments for patient
    {
      path: '/patient/completedAppoinments',
      name: 'patient.Completedappoinments',
      component: () => import('./views/patient/Appoinments/completed/List.vue'),
    },

    //expired appoinments for patient
    {
      path: '/patient/expiredAppoinments',
      name: 'patient.ExpiredAppoinments',
      component: () => import('./views/patient/Appoinments/expired/List.vue'),
    },

    //medicine tracker for patient
    {
      path: '/patient/medicineTracker/:id',
      name: 'patient.medicineTracker.view',
      component: () => import('./views/patient/MedicineTracker/View.vue'),
    },

    {
      path: '/patient/medicineTracker',
      name: 'patient.medicineTracker',
      component: () => import('./views/patient/MedicineTracker/List.vue'),
    },

    //admin user list
    {
      path: '/admin/userList/:id',
      name: 'admin.viewProfile',
      component: () => import('./views/admin/PatientProfile/viewProfile.vue'),
    },

    {
      path: '/admin/userList',
      name: 'admin.userList',
      component: () => import('./views/admin/PatientProfile/list.vue'),
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },

    {
      path: '/admin/payments',
      name: 'payments',
      component: () => import('./views/admin/Payments/List.vue'),
    }


  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
