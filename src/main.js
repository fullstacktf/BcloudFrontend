import Vue from "vue";
import Carousel3d from "vue-carousel-3d";
import app from "./app"
import login from "./Vue/login";
import VueRouter from "vue-router";

Vue.use(Carousel3d);
Vue.use(VueRouter);

const routes = [
  { path: '/login', component:login },
  { path: '/', component:app }
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

