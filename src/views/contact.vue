<template>
  <div>
    <cabecera></cabecera>
    <libro></libro>
    <foot></foot>
  </div>
</template>

<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import libro from '../components/ContactPage/libro'

export default {
  name: 'contact',
  components: { cabecera, foot, libro },
}
</script>

<style scoped>
</style>
