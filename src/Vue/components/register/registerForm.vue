<template>
  <div>
    <form action method="post" class="form">
      <div class="form__field">
        <input type="name" placeholder="Juanito Pérez" />
      </div>
      <div class="form__field">
        <input type="email" placeholder="info@mailaddress.com" />
      </div>
      <div class="form__field">
        <input type="password" placeholder="••••••••••••" />
      </div>
      <registerTagsBottom></registerTagsBottom>
    </form>
    <div class="buttonsField">
      <registerButtonsBottom @send="sendData"></registerButtonsBottom>
    </div>
  </div>
</template>

<script>
import registerTagsBottom from './registerTagsBottom'
import registerButtonsBottom from './registerButtonsBottom'
export default {
  name: 'registerForm',
  components: { registerTagsBottom, registerButtonsBottom },
  methods: {
    sendData() {
      console.log('hola')
    },
  },
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

$base-color: #fb1;
$base-font-weight: 300;
$base-font-size: 1rem;
$base-line-height: 1.5;
$base-font-family: 'Raleway', sans-serif;
$base-font-family-fallback: 'Raleway', sans-serif;

.nameField {
  grid-area: frase;
}

.emailField {
  grid-area: emailField;
}

.passwordField {
  grid-area: passwordField;
}

.buttonsField {
  display: flex;
  justify-content: center;
  grid-area: buttonsField;
}

input {
  color: $base-color;
  border: 0;
  font-family: $base-font-family;
  font-size: $base-font-size;
  &::placeholder {
    color: $base-color;
  }
}

.form {
  margin-top: 40px;
  &__field {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  input {
    font-family: 'Raleway', sans-serif;
    height: 30px;
    outline: 0;
    padding: 0.5rem 1rem;
    border: 1px solid $base-color;
    background-color: transparent;
    text-align: center;
    &[type='email'],
    &[type='password'],
    &[type='name'] {
      width: 60%;
    }
  }
}

h2 {
  font-weight: bold;
  letter-spacing: 3px;
  font-family: 'Raleway', sans-serif;
  color: $base-color;
  font-size: 2.75rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

p {
  color: $base-color;
}

a {
  color: $base-color;
}
</style>
