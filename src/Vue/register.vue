<template>
  <body>
    <div class="contenedorGrande">
      <div class="contenedorModal">
        <div class="modal">
          <div class="frase">
            <p aria-label="Registro">
              <span data-text="R">R</span>
              <span data-text="E">E</span>
              <span data-text="G">G</span>
              <span data-text="I">I</span>
              <span data-text="S">S</span>
              <span data-text="T">T</span>
              <span data-text="E">E</span>
              <span data-text="R">R</span>
            </p>
          </div>
          <div class="wrapper">
            <form>
              <div class="group nameField flex">
                <input type="text" required="required" /><span
                  class="highlight"
                ></span
                ><span class="bar"></span><label>Name</label>
              </div>
              <div class="group emailField flex">
                <input type="text" required="required" /><span
                  class="highlight"
                ></span
                ><span class="bar"></span><label>Email</label>
              </div>
              <div class="group passwordField flex">
                <input type="password" required="required" /><span
                  class="highlight"
                ></span
                ><span class="bar"></span><label>Password</label>
              </div>
              <div class="tagsInputField">
                <Multiselect></Multiselect>
              </div>
              </div>
              <div class="btn-box buttonsField">
                <span>AQUI VAN LOS BOTONES</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ]
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>

<style>
.contenedorGrande {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.78);
}

.contenedorModal {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frase {
  grid-area: frase;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

.tagsInputField {
  grid-area: tagsInputField;
}

.modal {
  width: 750px;
  height: 700px;
  display: grid;
  grid-template-columns: 750px;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  grid-template-areas:
    "frase"
    "nameField"
    "emailField"
    "passwordField"
    "tagsInputField"
    "buttonsField";
}

p {
  color: #fff;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  font-size: 0.5em;
}

p span {
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  perspective: 500;
  -webkit-font-smoothing: antialiased;
}

p span::before,
p span::after {
  display: none;
  position: absolute;
  top: 0;
  left: -1px;
  transform-origin: left top;
  transition: all ease-out 0.3s;
  content: attr(data-text);
}

p span::before {
  z-index: 1;
  color: rgba(0, 0, 0, 0.2);
  transform: scale(1.1, 1) skew(0deg, 20deg);
}

p span::after {
  z-index: 2;
  color: #fb4;
  text-shadow: -1px 0 1px #fb4, 1px 0 1px rgba(0, 0, 0, 0.8);
  transform: rotateY(-40deg);
}

p span:hover::before {
  transform: scale(1.1, 1) skew(0deg, 5deg);
}

p span:hover::after {
  transform: rotateY(-10deg);
}

p span + span {
  margin-left: 0;
}

@media (min-width: 20em) {
  p {
    font-size: 2em;
  }

  p span::before,
  p span::after {
    display: block;
  }
}

@media (min-width: 10em) {
  p {
    font-size: 1em;
  }
}

@media (min-width: 20em) {
  p {
    font-size: 3em;
  }
}

@media (min-width: 30em) {
  p {
    font-size: 4em;
  }
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
  color: #c6c6c6;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
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
  content: "";
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

input[type="password"] {
  letter-spacing: 0.3em;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
