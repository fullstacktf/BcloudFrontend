<template>
  <div class="container">
    <div class="card">
      <div class="imgBox">
        <div class="bark"></div>
      </div>
      <div class="details">
        <h4 class="color1">Hey, We are BClouD Creators ♥!</h4>
        <h4 class="color2 margin">Do you wanna know more about us?</h4>
        <p>We are</p>
        <p>two students with</p>
        <p>a lot of eager to learn,</p>
        <p>our names are</p>
        <p>Sergio del Pino Hernández and</p>
        <p>Manuel Jesús Peraza Alonso.</p>
        <p>This page is born from a fullstack</p>
        <p>development course, so if you</p>
        <p>want to contact to give us suggestions</p>
        <p>or advice you can do it here</p>
        <p class="text-right">Bcloud@gmail.com</p>
        <p class="text-right">Bcloud Team :)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'libro',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

.container {
  height: 800px;
  width: 100%;
}

::selection {
  background: transparent;
}

h4 {
  font-size: 26px;
  line-height: 1px;
  font-family: 'Amatic SC', cursive;
}

.color1 {
  color: #fb1;
}

.color2 {
  color: #e89105;
}

.card {
  color: #013243;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 300px;
  height: 400px;
  background: #e0e1dc;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) perspective(2000px);
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5),
    20px 0 60px rgba(0, 0, 0, 0.5);
  transition: 1s;
}

.card:hover {
  transform: translate(-50%, -50%) perspective(2000px) rotate(15deg) scale(1.2);
  box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5),
    0 10px 100px rgba(0, 0, 0, 0.5);
}

.card::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 0;
  width: 100%;
  height: 5px;
  background: #bac1ba;
  transform-origin: bottom;
  transform: skewX(-45deg);
}

.card::after {
  content: '';
  position: absolute;
  top: 0;
  right: -5px;
  width: 5px;
  height: 100%;
  background: #92a29c;
  transform-origin: left;
  transform: skewY(-45deg);
}

.card .imgBox {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0%;
  transform-origin: left;
  transition: 0.7s;
  border-left: 30px solid #875a39;
  width: 270px;
  background-color: #fb1;
  background-image: url('../../img/Black.svg'), url('../../img/noise.png');
  background-repeat: no-repeat, repeat-y;
  background-size: 175px 175px, contain;
  background-position: center 50px, 0 0;
}

.card .bark {
  position: absolute;
  background: #fb1;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
}

.card:hover .imgBox {
  transform: rotateY(-135deg);
}

.card:hover .bark {
  opacity: 1;
  background-color: #875a39;
}

.card .details {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 0 0 10px;
  z-index: -1;
  margin-top: 70px;
}

.card .details p {
  font-size: 15px;
  line-height: 5px;
  transform: rotate(-10deg);
  padding: 0 0 0 20px;
}

.card .details h4 {
  text-align: center;
}

.text-right {
  text-align: right;
}
</style>
