<template>
  <div class="header">
    <div class="headerIzq">
      <router-link to="/explorer">
        <div class="appName">
          <img src="../../img/color.svg" alt="Logo app" />
        </div>
      </router-link>
    </div>
    <div class="headerDer">
      <div class="explorador flexing">
        <router-link to="/explorer" class="textIndex">Explorer</router-link>
      </div>
      <div class="novedades flexing">
        <router-link to="/profile" class="textIndex">Profile</router-link>
      </div>
      <div class="contacto flexing">
        <router-link to="/contact" class="textIndex">Contact</router-link>
      </div>
      <div class="login flexing">
        <router-link to="/login" class="textIndex">Login</router-link>
      </div>
      <div class="register flexing">
        <router-link to="/register" class="textIndex">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cabecera',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.header {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 150px;
  z-index: 10;
}

img {
  height: 50%;
  width: 50%;
  margin-left: 50px;
}

.headerIzq {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}

.appName {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30%;
  height: 90%;
  /*background-image: url('../../img/color.svg')*/
}

.headerDer {
  padding: 0 70px;
  width: 40%;
  height: 100%;
  display: grid;
  grid-template-areas: 'explor nov cont log reg';
}

.explorador {
  grid-area: explor;
}

.novedades {
  grid-area: nov;
}

.contacto {
  grid-area: cont;
}

.login {
  grid-area: log;
}

.register {
  grid-area: reg;
}

a:hover {
  color: #fff;
}

.textIndex {
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 3px;
  color: #fb4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  height: 70%;
  width: 100px;
  border-radius: 10%;
}

.flexing {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
