import Vue from "vue";
import Carousel3d from "vue-carousel-3d";
import app from "./app";
import login from "./Vue/login";
import contenedorImagenes from "./Vue/contenedorImages";
import profile from  "./Vue/profile";
import register from "./Vue/register";
import VueRouter from "vue-router";

Vue.use(Carousel3d);
Vue.use(VueRouter);

const routes = [
  { path: "/profile", component: profile },
  { path: "/explorer", component: contenedorImagenes },
  { path: "/register", component: register },
  { path: "/login", component: login },
  { path: "/", component: contenedorImagenes }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { app },
  template: "<app/>"
});
