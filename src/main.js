import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import app from './app'
import login from './Vue/components/Login/login'
import contenedorImagenes from './Vue/contenedorImages'
import register from './Vue/components/Register/register'
import VueRouter from 'vue-router'
import book from './Vue/components/BookPage/book'
import buy from './Vue/components/BuyPage/buy'
import admin from './Vue/components/AdminPage/admin'
import profile from './Vue/components/Profile/profile'
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
