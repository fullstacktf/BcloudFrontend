<template>
<body>
  <div class="contenedorGrande">
    <div class="contenedorModal">
      <div class="modal">
        <registerLetrasTop></registerLetrasTop>
        <registerForm></registerForm>
      </div>
    </div>
  </div>
</body>
</template>


<script>
import registerLetrasTop from './components/register/registerLetrasTop'
import registerForm from './components/register/registerForm'

export default {
  components: { registerLetrasTop, registerForm },
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
