import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import App from './App'
import axios from 'axios'
import router from './routes/index'

Vue.use(Carousel3d)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<app/>',
})
