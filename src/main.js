import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import app from './app'
import login from './Vue/login'
import contenedorImagenes from './Vue/contenedorImages'
import register from './Vue/register'
import VueRouter from 'vue-router'
import book from './Vue/book'
import buy from './Vue/buy'
import admin from './Vue/admin'
import profile from './Vue/profile'
import axios from 'axios'

Vue.use(Carousel3d)
Vue.use(VueRouter)
Vue.prototype.$http = axios

const routes = [
  { path: '/explorer', component: contenedorImagenes },
  { path: '/register', component: register },
  { path: '/login', component: login },
  { path: '/book', component: book },
  { path: '/buy/:title', component: buy },
  { path: '/admin', component: admin },
  { path: '/', component: contenedorImagenes },
  { path: '/profile', component: profile },
]

const router = new VueRouter({
  routes,
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>',
})

