<template>
<div>
  <div id="cabecera"></div>
    <div class="bigContainer">
      <div class="container">
        <div class="imageLogin">
          <p class="split">
            Animation is the process of creating the illusion of motion and
            shape change by means of the rapid display of a sequence of static
            images that minimally differ from each other. The illusion—as in
            motion pictures in general—is thought to rely on the phi phenomenon.
            Animators are artists who specialize in the creation of animation.
          </p>
        </div>
        <div class="email">
          <span>Email</span>
          <input type="text" name="email" id="email" />
        </div>
        <div class="passw">
          <span>Contraseña</span>
          <input type="password" name="passw" id="passw" />
        </div>
        <div class="botons">
          <button id="send">Enviar</button>
          <button id="registrer">Registrarte</button>
        </div>
      </div>
    </div>
    <div id="piePagina"></div>
  </div>
</template>


<script>

export default {
  name: "login"
};

</script>

<style scoped>
.container {
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.imageLogin {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url('../img/libro2.png');
  background-repeat: no-repeat;
}

.bigContainer {
  height: 670px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.email {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.passw {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.botons {
  padding-top: 20px;
}

body {
  margin: 0;
  background-size: cover;
  background-image: url('../img/libros.jpg');
  background-repeat: no-repeat;
}

@media only screen and (max-width: 500px) {
  .imageLogin {
    background-color: lightblue;
  }
}
</style>
