<template>
  <div>
    <cabecera></cabecera>
    <div class="container">
      <explorerContenedorPortadas></explorerContenedorPortadas>
      <explorerCarouselPortadas></explorerCarouselPortadas>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import { setTimeout } from 'timers'
import explorerContenedorPortadas from '../components/ExplorerPage/explorerContenedorPortadas'
import explorerCarouselPortadas from '../components/ExplorerPage/explorerCarouselPortadas'

export default {
  name: 'contenedorImages',
  components: {
    tilt,
    cabecera,
    foot,
    explorerContenedorPortadas,
    explorerCarouselPortadas,
  },
}
</script>

<style scoped>
.container {
  height: 1100px;
}

.imagenes {
  cursor: pointer;
  display: inline-block;
  width: 150px;
  height: 230px;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
}

.portadas {
  width: 100%;
  height: 100%;
}

.imageneses {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
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
