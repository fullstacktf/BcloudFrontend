<template>
<body>
  <cabecera></cabecera>
  <div class="contenedorGrande">
    <div class="contenedorModal">
      <div class="modal">
        <registerLetrasTop></registerLetrasTop>
        <registerForm></registerForm>
      </div>
    </div>
  </div>
  <foot></foot>
</body>
</template>


<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import registerLetrasTop from '../components/RegisterPage/registerComponents/registerLetrasTop'
import registerForm from '../components/RegisterPage/registerComponents/registerForm'

export default {
  components: { registerLetrasTop, registerForm, cabecera, foot },
}
</script>

<style scoped>
.contenedorModal {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 750px;
  height: 700px;
  display: grid;
  grid-template-columns: 750px;
  grid-template-rows: 100px 100px 100px 100px 100px 500px;
  grid-template-areas:
    'frase'
    'nameField'
    'emailField'
    'passwordField'
    'tagsInputField'
    'buttonsField';
}
</style>
