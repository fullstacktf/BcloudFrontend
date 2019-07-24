<template>
  <div>
    <div class="contenedorPortadas">
      <div class="imagenes img1"></div>
      <div class="imagenes img2"></div>
      <div class="imagenes img3"></div>
      <div class="imagenes img4"></div>
      <div class="imagenes img5"></div>
      <div class="imagenes img6"></div>
      <div class="imagenes img7"></div>
      <div class="imagenes img8"></div>
      <div class="imagenes img4"></div>
      <div class="imagenes img5"></div>
      <div class="imagenes img6"></div>
      <div class="imagenes img7"></div>
      <div class="imagenes img6"></div>
      <div class="imagenes img7"></div>
      <div class="imagenes img8"></div>
      <div class="imagenes img4"></div>
      <div class="imagenes img5"></div>
      <div class="imagenes img6"></div>
      <div class="imagenes img7"></div>
      <div class="imagenes img8"></div>
    </div>
    <div class="containerCarousel">
      <carousel-3d :width="300" :height="460">
        <slide v-for="(slide, i) in slides" :index="i">
          <img class="imageneses" :src="images" />
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import tilt from "vanilla-tilt";

export default {
  name: "contenedorImages",
  data: function() {
    return {
      slides: 8,
      images: "portada1.jpg"
    };
  },

  mounted() {
    tilt.init(document.querySelectorAll(".imagenes"), {
      scale: "1.05",
      glare: true,
      maxGlare: "0.3"
    });
  }
};
</script>

<style scoped>
.imagenes {
  display: inline-block;
  width: 150px;
  height: 230px;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
}

.imageneses {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
}

.img1 {
  background-image: url('../img/portada1.jpg');
}

.img2 {
  background-image: url('../img/portada2.jpg');
}

.img3 {
  background-image: url('../img/portada3.jpg');
}

.img4 {
  background-image: url('../img/portada4.jpg');
}

.img5 {
  background-image: url('../img/portada5.jpg');
}

.img6 {
  background-image: url('../img/portada6.jpg');
}

.img7 {
  background-image: url('../img/portada7.jpg');
}

.img8 {
  background-image: url('../img/portada8.jpg');
}

.contenedorPortadas {
  max-width: 920px;
  max-height: 500px;
  margin: 0 auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.contenedorPortadas::-webkit-scrollbar {
  display: none;
}
</style>
