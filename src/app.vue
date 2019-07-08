<template>
  <div>
    <cabecera></cabecera>
    <router-view></router-view>
    <foot></foot>
  </div>
 
</template>

<script>
import cabecera from "./Vue/header"
import foot from "./Vue/footer"
import contenedorImagenes from "./Vue/contenedorImages"

export default {
  name: 'app',
  
  components:{
    cabecera,
    foot
  }
}
</script>

