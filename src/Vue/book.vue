<template>
  <div class="container">
    <div class="photoContainer">
      <div class="photo">
      <img :src="image">
      </div>
    </div>
    
    <div class="contenido">
      <h1>{{title}}</h1>
      <h3> Author: {{autor}} </h3>
      <h3> Rating: {{valoracion}}/10</h3> 
      <h4> Description: {{descripcion}}</h4>
      <div class="prices">
        <h2>Price: Now: ${{price}} &nbsp;</h2> <h3> before: &nbsp;</h3> <h3  id="tachado"> ${{price + 5}}</h3>
      </div>

      <div class="buttons">
        <button id="like" @click="like"> <i class="fa fa-heart"></i>&nbsp;Like</button>
        <button @click="buy">Buy</button>
      </div>
      
    </div>

    
  </div>
</template>

<script>

export default {
  data: () => {
    return{
      image: 'portada1.jpg',
      title: "El Secreto de la sirena",
      autor: "Sergio Puto Amo del Pino Hernández",
      descripcion: "Lorem Ipsum es simplemente el orem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
      valoracion: 10,
      url: "",
      price: 19.90
    }
  },

  methods: {
    like(){
      let like = document.querySelector('#like');
      console.log(like)
      like.classList.toggle('liked');
    },
    buy(){
      this.$router.push('/buy/' + this.title);
    }
  }
}
</script>

<style scoped>
  .container {
    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .contenido {
    font-family: "Raleway", sans-serif;
    height: 70%;
    width: 30%;
    background-color: #fb4;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .photoContainer {
    height: 70%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb4;
  }

  .prices {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #tachado {
    text-decoration: line-through;
    text-decoration-color: red;
    color: red;
  }

  .photo {
    height: 90%;
    width: 90%;
  }

  .buttons {
    height: 5%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    height: 90%;
    width: 48%;
    border: 1px solid black;
    vertical-align: middle;
    text-align: center;
    display: inline-block;
    background-color: #fb4;
    margin: 2px;
  }

  .liked {
    background-color: red;
  }

  button:hover {
    border-color: red;
    background-color: #fb3;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

</style>
