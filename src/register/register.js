import cabecera from "../Vue/header";
import piePagina from "../Vue/footer";
import Vue from "vue";

let app = new Vue({
  el: "#cabecera",
  render: h => h(cabecera)
});

app = new Vue({
  el: "#piePagina",
  render: h => h(piePagina)
});
