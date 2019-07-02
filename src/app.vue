<template>
  <div>
    <cabecera></cabecera>
    <contenedorImagenes></contenedorImagenes>
    <foot></foot>
  </div>
  

  
</template>

<script>
import cabecera from "./Vue/header"
import foot from "./Vue/footer"
import login from "./Vue/login";
import contenedorImagenes from "./Vue/contenedorImages"

export default {
  name: 'app',
  
  components:{
    cabecera,
    foot,
    contenedorImagenes,
    login
  }
}
</script>

<style>

</style>
