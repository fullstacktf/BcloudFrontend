<template>
  <div class="container">
    <div class="photoContainer">
      <img :src="imageUrl" />
    </div>

    <div class="contenido">
      <h1>{{title}}</h1>
      <h3>Author: {{autor}}</h3>
      <h3>Rating: {{valoracion}}/10</h3>
      <h3>Publication date: {{publicationDate}}</h3>
      <h4>Description: {{descripcion}}</h4>
      <div class="prices">
        <h2>Price: Now: ${{price}} &nbsp;</h2>
        <h3>before: &nbsp;</h3>
        <h3 id="tachado">${{price + 5}}</h3>
      </div>

      <div class="buttons">
        <button id="like" @click="like">
          <i class="fa fa-heart"></i>&nbsp;Like
        </button>
        <button id="dislike" @click="dislike">
          <i class="far fa-thumbs-down"></i>&nbsp;Dislike
        </button>
        <button @click="buy">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      imageUrl: 'portada1.jpg',
      title: 'El Secreto de la sirena',
      autor: 'Sergio Puto Amo del Pino Hernández',
      publicationDate: '20-07-2014',
      descripcion:
        'Lorem Ipsum es simplemente el orem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas',
      valoracion: 10,
      price: 19.9,
      booksUser:[]
    }
  },

  methods: {
    like() {
      let like = document.querySelector('#like');
      like.classList.toggle('liked');
      if(like.classList.contains('liked')){
        const data = { email: localStorage.getItem('email'), title: this.title }
        this.$http.post('http://localhost:8081/users/like', data);
      }
    },

    dislike(){
      let dislike = document.querySelector('#dislike');
      let like = document.querySelector('#like');
      dislike.classList.toggle('liked');
      like.classList.toggle('liked');
      const data = { email: localStorage.getItem('email'), title: this.title }
      this.$http.post('http://localhost:8081/users/dislike', data);
    },

    buy() {
      localStorage.setItem('bookToBuy',this.title);
      this.$router.push('/buy/');
    },

  },
  mounted(){
    const data = { email: localStorage.getItem('email')};
    this.$http.post("http://localhost:8081/users/booksUser", data).then(response =>{
      this.booksUser = response.data.librosFavoritos;
      let getter = localStorage.getItem('book');
      
      for (const book of this.booksUser){
        if(getter == JSON.stringify(book)){
          let like = document.querySelector('#like');
          like.classList.add('liked');
        }
      }
      
      if(this.booksUser.includes(book))
        console.log("le gusta");
    })
    let getter = localStorage.getItem('book');
    const book = JSON.parse(getter);
    this.imageUrl = book.imageUrl;
    this.title = book.titulo;
    this.autor = book.autor;
    this.publicationDate = book.fechaPublicacion;
    this.descripcion = book.descripcion;
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
  font-family: 'Raleway', sans-serif;
  background-color: red;
  height: 70%;
  width: 30%;
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
  background-color: rgba(0, 0, 0, 0.7);
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
  background-color: green;
  margin: 2px;
}

* {
  color: #fb1;
}

.liked {
  background-color: blue;
}

button:hover {
  border-color: blue;
  background-color: green;
}

img {
  display: inline-block;
  width: 70%;
  height: 70%;
  background-size: cover;
}
</style>
