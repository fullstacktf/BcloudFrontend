<template>
  <div>
    <cabecera></cabecera>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import cabecera from './components/Header/header'
import foot from './components/Footer/footer'
import contenedorImagenes from './views/explorer'

export default {
  name: 'app',

  components: {
    cabecera,
    foot,
  },
}
</script>

<style>
body {
  margin: 0;
}

.contenedormasgrande {
  background-size: cover;
  background-image: url('./img/libros.jpg');
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -9;
}

.contenedorgrande {
  background-color: rgba(0, 0, 0, 0.78);
  width: 100%;
}
</style>
