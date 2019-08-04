<template>
  <div>
    <cabecera></cabecera>
    <div class="container">
      <div class="login">
        <loginLetrasTop></loginLetrasTop>
        <form class="form" enctype="multipart/form-data">
          <div class="form__field">
            <input type="email" placeholder="info@mailaddress.com" v-model="email" />
          </div>
          <div class="form__field">
            <input type="password" placeholder="••••••••••••" v-model="password" />
          </div>
        </form>
        <loginButtonsBottom @click.native="incrementStep"></loginButtonsBottom>
        <p>
          Don´t you have an accout?
          <router-link to="/register" class="link">Register Here</router-link>
        </p>
        <p>{{message}}</p>
      </div>
    </div>
    <foot></foot>
  </div>
</template>


<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import loginLetrasTop from '../components/LoginPage/loginComponents/loginLetrasTop'
import loginButtonsBottom from '../components/LoginPage/loginComponents/loginButtonsBottom'
import { setTimeout } from 'timers';
export default {
  name: 'login',
  components: { loginLetrasTop, loginButtonsBottom, cabecera, foot },
  data() {
    return {
      email: '',
      password: '',
      message: '',
      step: 0
    }
  },
  methods: {
    login() {
      let data = { email: this.email, passw: this.password }
      this.$http
        .post('http://localhost:8081/users/login', data)
        .then(response => {
          if (response.data.token != undefined) {
            localStorage.setItem('email', this.email);
            localStorage.setItem('jwt', response.data.token);
            this.$router.push('/');
          } 
          else
            this.message = response.data.message
        });
    },
    incrementStep(){
      if(this.step < 1)
        this.step++;
      else
        this.login();
    }
    
  },
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Cookie|Kaushan+Script|Pacifico|Permanent+Marker|Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff&display=swap');

$base-color: #fb1;
$base-font-weight: 300;
$base-font-size: 1rem;
$base-line-height: 1.5;
$base-font-family: 'Raleway', sans-serif;
$base-font-family-fallback: 'Raleway', sans-serif;

input {
  color: #fb1;
  border: 0;
  font: inherit;
  &::placeholder {
    color: $base-color;
  }
}

.container {
  display: flex;
  justify-content: center;
}

.form {
  margin-top: 20px;
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
    &[type='password'] {
      width: 484px;
    }
  }
}

p {
  font-family: 'Raleway', sans-serif;
  color: $base-color;
}

.link {
  color: $base-color;
}

.frase {
  height: 100px;
}

.login {
  display: flex;
  text-align: center;
  width: 750px;
  height: 500px;
  flex-direction: column;
  align-items: center;
  input {
    border: 1px solid #fb1;
    background-color: transparent;
    text-align: center;
    &[type='email'],
    &[type='password'] {
      background-repeat: no-repeat;
      background-size: 1.5rem;
      background-position: 1rem 50%;
    }
  }
}
</style>
