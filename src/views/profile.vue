<template>
  <div>
    <cabecera></cabecera>
    <sideMenu></sideMenu>
    <foot></foot>
  </div>
</template>

<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footerProfile'
import sideMenu from '../components/ProfilePage/sidemenu/sidemenu'

export default {
  name: 'profile',
  components: { cabecera, foot, sideMenu },
}
</script>

<style scoped>
</style>
