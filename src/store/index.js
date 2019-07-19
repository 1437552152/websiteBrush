import Vue from 'vue'
import Vuex from 'vuex'

import Login from './modules/login.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login
  },
  strict: process.env.NODE_ENV !== 'production'
})
