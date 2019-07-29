<template>
  <div class="align body">
    <div class="grid align__item">
      <div class="register">
        <h2>Login</h2>
        <form class="form" enctype="multipart/form-data">
          <div class="form__field">
            <input type="email" placeholder="info@mailaddress.com" v-model="email"/>
          </div>
          <div class="form__field">
            <input type="password" placeholder="••••••••••••" v-model="password"/>
          </div>
          <div class="form__field">
            <!-- <input type="submit" value="Log In" @click="login" /> -->
          </div>
          <button @click="login">login</button>
        </form>
        <p>
          Don´t you have an accout?
          <router-link to="/register" class="link">Register Here</router-link>
        </p>
        <p>{{error}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import FormData from 'form-data';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password:'',
      error:''
    }
  },
  methods: {
    login(){

      let data = {"email":this.email, "passw":this.password}
       this.$http.post('http://localhost:8081/users/login', data).then( response => {
        if(response.data.token != undefined ){
          localStorage.setItem('email', this.email);
          localStorage.setItem('jwt', response.data.token);
          const dummy = localStorage.getItem('jwt');
          setTimeout(() =>{ this.$router.push("/") }, 5000);
          this.error = "Logeado con éxito. Se le redirigirá a la página principal";
        }
        else {
          this.error = response.data.message;
        }
      })
    }
  }
  
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Cookie|Kaushan+Script|Pacifico|Permanent+Marker|Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff&display=swap');
$base-bgcolor: #354152;
$base-color: #fb1;
$base-font-weight: 300;
$base-font-size: 1rem;
$base-line-height: 1.5;
$base-font-family: 'Raleway', sans-serif;
$base-font-family-fallback: 'Raleway', sans-serif;

* {
  box-sizing: border-box;
}

.align {
  align-items: center;
  display: flex;
  flex-direction: row;
  &__item {
    &--start {
      align-self: flex-start;
    }
    &--end {
      align-self: flex-end;
    }
  }
}

.site {
  &__logo {
    margin-bottom: 2rem;
  }
}

$input-placeholder-color: #fb1;

input {
  color: #fb1;
  border: 0;
  font: inherit;
  &::placeholder {
    color: $input-placeholder-color;
  }
}

.form {
  &__field {
    margin-bottom: 1rem;
  }
  input {
    font-family: 'Raleway', sans-serif;
    outline: 0;
    padding: 0.5rem 1rem;
    &[type='email'],
    &[type='password'] {
      width: 100%;
    }
  }
}

$grid-max-width: 25rem;
$grid-width: 100%;

.grid {
  margin: 0 auto;
  max-width: $grid-max-width;
  width: $grid-width;
}

h2 {
  font-weight: bold;
  letter-spacing: 3px;
  font-family: 'Raleway', sans-serif;
  color: #fb1;
  font-size: 2.75rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

p {
  color: #fb1;
}

$link-color: #fb1;

.link {
  color: $link-color;
}

.register {
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  margin-top: 0px;
  margin-bottom: 80px;
  padding: 4rem 2rem;
  input {
    border: 1px solid #fb1;
    border-radius: 999px;
    background-color: transparent;
    text-align: center;
    &[type='email'],
    &[type='password'] {
      background-repeat: no-repeat;
      background-size: 1.5rem;
      background-position: 1rem 50%;
    }
    &[type='email'] {
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#242c37"><path d="M256.017 273.436l-205.17-170.029h410.904l-205.734 170.029zm-.034 55.462l-205.983-170.654v250.349h412v-249.94l-206.017 170.245z"/></svg>');
    }
    &[type='password'] {
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#242c37"><path d="M195.334 223.333h-50v-62.666c0-61.022 49.645-110.667 110.666-110.667 61.022 0 110.667 49.645 110.667 110.667v62.666h-50v-62.666c0-33.452-27.215-60.667-60.667-60.667-33.451 0-60.666 27.215-60.666 60.667v62.666zm208.666 30v208.667h-296v-208.667h296zm-121 87.667c0-14.912-12.088-27-27-27s-27 12.088-27 27c0 7.811 3.317 14.844 8.619 19.773 4.385 4.075 6.881 9.8 6.881 15.785v22.942h23v-22.941c0-5.989 2.494-11.708 6.881-15.785 5.302-4.93 8.619-11.963 8.619-19.774z"/></svg>');
    }
    &[type='submit'] {
      background-image: linear-gradient(160deg, #ffeb05 0%, #ff7e05 100%);
      color: #fff;
      margin-bottom: 1rem;
      width: 100%;
    }
  }
}
</style>
