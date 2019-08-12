<template>
  <div>
    <form action method="post" class="form">
      <div class="form__field">
        <input type="name" placeholder="Juanito Pérez" v-model="name" />
      </div>
      <div class="form__field">
        <input type="email" placeholder="info@mailaddress.com" v-model="email" />
      </div>
      <div class="form__field">
        <input type="password" placeholder="••••••••••••" v-model="password" />
      </div>
      <registerTagsBottom :sendLike="getLikes"></registerTagsBottom>
    </form>
    <div class="buttonsField">
      <registerButtonsBottom @send="sendData"></registerButtonsBottom>
    </div>
  </div>
</template>

<script>
import registerTagsBottom from './registerTagsBottom'
import registerButtonsBottom from './registerButtonsBottom'
import FormData from 'form-data'
export default {
  data: () => {
    return {}
  },
  name: 'registerForm',
  components: { registerTagsBottom, registerButtonsBottom },

  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      gustos: '',
      likes: [],
      error_: '',
    }
  },

  methods: {
    getLikes(likes) {
      this.likes = likes
    },

    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },

    verifyForm() {
      if (this.email == '') this.error_ = 'Escribe un e-mail'
      else if (!this.validateEmail(this.email))
        this.error_ = 'Formato de e-mail inválido'
      else if (this.password == '') this.error_ = 'Escribe una contraseña'
      else {
        this.error_ = ''
        return true
      }
    },

    sendData() {
      if (this.verifyForm());
      let data = new FormData()
      data.append('name', this.name)
      data.append('email', this.email)
      data.append('passw', this.password)
      data.append('likes', this.likes)
      this.$http.post('/api/users/signup', data)

      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
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

input:focus {
  outline: 1px solid white;
}

p {
  color: $base-color;
}

a {
  color: $base-color;
}
</style>
