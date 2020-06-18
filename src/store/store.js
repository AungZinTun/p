import Vue from 'vue'
import Vuex from 'vuex'
import * as bookings from '@/store/modules/bookings.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bookings,
  },
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: false,
    snackbar: false,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_SNACKBAR (state, payload) {
      state.snackbar = payload
    },
  },
  actions: {

  },
})
