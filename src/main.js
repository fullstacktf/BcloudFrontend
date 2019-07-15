import Vue from "vue";
import Carousel3d from "vue-carousel-3d";
import app from "./app"
import login from "./Vue/login";
import book from "./Vue/book";
import buy from "./Vue/buy";
import admin from "./Vue/admin";
import contenedorImagenes from "./Vue/contenedorImages"
import VueRouter from "vue-router";

Vue.use(Carousel3d);
Vue.use(VueRouter);

const routes = [
  { path: '/login', component:login },
  { path: '/book', component:book },
  { path: '/buy/:title', component:buy },
  { path: '/admin', component: admin },
  { path: '/', component:contenedorImagenes }
]

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router, 
  components:{ app },
  template:'<app/>'
});

