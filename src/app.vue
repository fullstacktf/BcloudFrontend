<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
