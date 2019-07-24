<template>
  <div class="wrapper">
    <div class="bg">
      <div class="content">
        <p>This is some text to go along with the button!</p>
      </div>
    </div>
    <div class="btn-wrapper">
      <div
        class="cube spin"
        v-on:click="botonActivo"
        v-bind:class="[isActive ? '':[efectoClick2,efectoClick1]]"
      >
        <div class="face front text">Click Me!</div>
        <div class="face back text">
          <div class="msg success">Wewt!</div>
          <div class="msg fail">Fail =/</div>
        </div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerButtonsBottom',
  data: function() {
    return {
      cube: document.querySelector('.cube'),
      success: true,
      messageClass: '',
      isActive: false,
      spiin: 'spin',
      efectoClick1: 'cube-ani',
      efectoClick2: 'show-success',
    }
  },
  methods: {
    botonActivo: function(e) {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'https://fonts.googleapis.com/css?family=Permanent+Marker';
$width: 180px;
$height: 90px;
$depth: 90px;
$rotY: 15deg;

$yellow: #ecd078;
$orange: #d95b43;
$red: #c02942;
$purple: #542437;
$blue: #53777a;
$green: #5faf62;

html,
body {
  background: $yellow;
  color: mix($yellow, white, 30%);
  font-size: 1.1em;
  font-family: 'Permanent Marker', cursive;
}

.wrapper {
  position: relative;
  width: 400px;
  height: 300px;
  margin: auto;
  margin-top: 150px;
  perspective: 800px;
  perspective-origin: 10% -10%;
}

.bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: $blue;
  border-radius: 5px;
  transform: rotateY(-10deg);
  box-shadow: 20px -5px 30px rgba(0, 0, 0, 0.4);
}

.content {
  position: absolute;
  right: -40px;
  top: 20px;
  width: 350px;
  height: 300px;
  background: lighten($orange, 5%);
  border-radius: 50%;
  text-align: center;
  transform: perspective(800px) translateZ(20px);
  box-shadow: 10px -5px 20px rgba(0, 0, 0, 0.2);
  p {
    position: relative;
    margin: auto;
    top: 30%;
    width: 60%;
  }
}

div.btn-wrapper {
  position: absolute;
  top: 50px;
  left: -40px;
}

div.cube {
  height: $height;
  width: $width;
  transform: rotateY($rotY);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  font-size: 1.5em;
  .msg {
    position: absolute;
  }
  .success {
    background: $green;
    display: none;
  }
  .fail {
    background: $red;
    display: block;
  }
  &.show-success {
    .back {
      background: $green;
    }
    .success {
      display: block;
    }
    .fail {
      display: none;
    }
  }
}

.cube-ani {
  animation: press 0.5s ease, spin 0.35s ease 0.5s, show-top 1.5s ease 0.85s;
}

.spin {
  animation: spin-up 1s ease-out 0s 1;
}

.face {
  position: absolute;
  height: $height;
  width: $depth;
  backface-visibility: true;
  background: darken($orange, 5%);
}

.face.front {
  height: $height;
  width: $width;
  background: $orange;
  transform: translateZ($depth / 2);
}

.face.back {
  height: $height;
  width: $width;
  background: $red;
  transform: rotateX(-180deg) translateZ($depth / 2);
}

.face.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  transform: rotateY(90deg) translateZ($width / 4 * 3);
}

.left {
  transform: rotateY(-90deg) translateZ($width / 4);
}

.top {
  width: $width;
  height: $depth;
  background: lighten($orange, 3%);
  transform: rotateX(90deg) translateZ($height / 2);
}

.bottom {
  width: $width;
  height: $depth;
  transform: rotateX(-90deg) translateZ($height / 2);
}

@keyframes press {
  0% {
    transform: rotateY($rotY) translateZ(0);
  }
  50% {
    transform: rotateY($rotY) translateZ(-25px);
  }
  100% {
    transform: rotateY($rotY) translateZ(0);
  }
}

@keyframes spin {
  from {
    transform: rotateY($rotY) rotateX(0deg);
  }
  to {
    transform: rotateY($rotY) rotateX(360deg);
  }
}

@keyframes show-top {
  0% {
    transform: rotateY($rotY) rotateX(0deg);
  }
  20% {
    transform: rotateY($rotY) rotateX(-190deg);
  }
  25% {
    transform: rotateY($rotY) rotateX(-180deg);
  }
  80% {
    transform: rotateY($rotY) rotateX(-180deg);
  }
  100% {
    transform: rotateY($rotY) rotateX(0deg);
  }
}

@keyframes spin-up {
  0% {
    transform: translateY($height - 20px) rotateY(0deg) scale3d(0, 0, 0);
  }
  70% {
    transform: translateY(-20px) rotateY(1024deg) scale3d(1, 1, 1);
  }
  100% {
    transform: translateY(0) rotateY(1024deg + $rotY * 5) scale3d(1, 1, 1);
  }
}
</style>