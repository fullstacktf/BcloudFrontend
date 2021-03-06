import Vue from 'vue'
import App from './app'
import axios from 'axios'
import router from './routes/index'

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<app/>',
})
