<template>
  <div class="footer">
    <div class="containerFooter">
      <div class="twitter iconos fab fa-lg fa-twitter"></div>
      <div class="facebook iconos fab fa-lg fa-facebook-f"></div>
      <a class="avisoLegal textFooter">Aviso Legal</a>
      <a class="politicaCookies textFooter">Politica de Cookies</a>
      <a class="politicaPrivacidad textFooter">Politica de Privacidad</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'piePagina',
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 150px;
  background-color: black;
  display: flex;
  align-items: center;
}

.containerFooter {
  background-color: black;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70px 1fr 40px 50px 120px 120px 150px 70px;
  grid-template-areas: '. . facebook twitter avisoLegal politicaCookies politicaPrivacidad';
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.iconos {
  background-size: contain;
  background-repeat: no-repeat;
  color: #fb4;
  align-self: center;
  width: 30px;
  height: 30px;
  padding-bottom: 30px;
}

.twitter {
  grid-area: twitter;
}

.facebook {
  grid-area: facebook;
}

.politicaPrivacidad {
  grid-area: politicaPrivacidad;
}

.politicaCookies {
  grid-area: politicaCookies;
}

.avisoLegal {
  grid-area: avisoLegal;
  letter-spacing: 2px;
}

a:hover {
  color: #fff;
}

.textFooter {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 3px;
  color: #fb4;
  display: flex;
  align-self: center;
  justify-self: center;
  text-decoration: none;
  text-align: center;
  font-size: 13px;
  height: 40%;
  width: 100px;
  border-radius: 10%;
}
</style>

