import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from '@/store'
import router from './router'
import http from '@/fetch/api'
import VueI18n from 'vue-i18n'
import fastclick from 'fastclick'
import {
  Alert,
  Confirm,
  Toast
} from 'wc-messagebox'

Vue.use(VueI18n)
Vue.use(Alert, {})
Vue.use(Toast, {})
Vue.use(Confirm, {})
if (localStorage.getItem('Languages') == null) {
  let browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
  switch (browserLanguage) {
    case "zh-cn":
      localStorage.setItem("Languages", "zh");
      break;
    case "zh-tw":
      localStorage.setItem("Languages", "tw");
      break;
    case "en-us":
      localStorage.setItem("Languages", "en");
      break;
    default:
      localStorage.setItem("Languages", "en");
      break;
  }
}
const i18n = new VueI18n({
  locale: localStorage.getItem("Languages"),
  messages: {
    'zh': require('./assets/lang/zh.js'),
    'en': require('./assets/lang/en.js'),
    'tw': require('./assets/lang/tw.js'),
    'pt': require('./assets/lang/pt.js'),
    'fr': require('./assets/lang/fr.js')
  }
})

Vue.prototype.$http = http
Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.config.debug = true
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    fastclick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
