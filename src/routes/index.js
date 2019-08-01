import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import book from '../views/book'
import buy from '../views/buy'
import admin from '../views/admin'
import profile from '../views/profile'
import login from '../views/login'
import contenedorImagenes from '../views/explorer'
import register from '../views/register'

Vue.use(VueRouter)

const routes = [
  { path: '/explorer', component: contenedorImagenes },
  { path: '/register', component: register },
  { path: '/login', component: login },
  { path: '/book', component: book },
  { path: '/buy/:title', component: buy },
  { path: '/admin', component: admin },
  { path: '/', component: contenedorImagenes },
  { path: '/profile', component: profile },
  // { path: '*', component: NotFoundPage },
]
export default new VueRouter({ routes })
