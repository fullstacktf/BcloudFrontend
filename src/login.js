import axios from "axios";
require("../assets/login.css");
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
