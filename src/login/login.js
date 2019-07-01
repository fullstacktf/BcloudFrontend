import axios from "axios";
import cabecera from "../js/Vue/header";
import piePagina from "../js/Vue/footer";
import Vue from "vue";
require("../css/login.css");
const send = document.querySelector("#send");
send.addEventListener("click", () => {
  const email = document.querySelector("#email");
  const passw = document.querySelector("#passw");
  var info = {
    email: email.value,
    passw: passw.value
  };

  axios.post("http://localhost:8081/signup", info).then(response => {
    console.log(response.data);
    localStorage["token"] = response.data.token;
    let a = localStorage["token"];
    console.log(a);
  });
});

let app = new Vue({
  el: "#cabecera",
  render: h => h(cabecera)
});

app = new Vue({
  el: "#piePagina",
  render: h => h(piePagina)
});
