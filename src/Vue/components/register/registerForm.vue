<template>
  <form>
    <div class="group nameField flex">
      <input type="text" required="required" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
    </div>
    <div class="group emailField flex">
      <input type="text" required="required" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
    </div>
    <div class="group passwordField flex">
      <input type="password" required="required" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Password</label>
    </div>
    <registerTagsBottom></registerTagsBottom>
    <div class="buttonsField">
      <registerButtonsBottom></registerButtonsBottom>
    </div>
  </form>
</template>

<script>
import registerTagsBottom from './registerTagsBottom'
import registerButtonsBottom from './registerButtonsBottom'
export default {
  name: 'registerForm',
  components: { registerTagsBottom, registerButtonsBottom },
}
</script>

<style scoped>
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
  grid-area: buttonsField;
}

form {
  width: 320px;
  margin: 45px auto;
}

.group {
  position: relative;
  margin: 45px 0;
}

textarea {
  resize: none;
}

input,
textarea {
  background: none;
  color: #c6c6c6;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 350px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #fff;
}

input:focus,
textarea:focus {
  outline: none;
}

label {
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  color: #c6c6c6;
  font-size: 16px;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
}

input:focus ~ label,
textarea:focus ~ label,
input:valid ~ label,
textarea:valid ~ label {
  top: -14px;
  font-size: 12px;
  color: #fb3;
}

.bar::before {
  content: '';
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #fb3;
  transition: 300ms ease all;
  left: 0%;
}

input:focus ~ .bar::before,
textarea:focus ~ .bar::before {
  width: 320px;
}

input[type='password'] {
  letter-spacing: 0.3em;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
