<template>
  <div>
    <cabecera></cabecera>
    <div class="backgroundContent">
      <div class="container">
        <img class="photoContainer" :src="imageUrl" />
        <div class="contenido">
          <h1 class="titulo genericStyle">{{title}}</h1>
          <h3 class="author genericStyle">Author: {{autor}}</h3>
          <h3 class="rating genericStyle">Rating: {{valoracion}}/10</h3>
          <h3 class="PublDate genericStyle">Publication date: {{publicationDate}}</h3>
          <h4 class="description genericStyle">Description: {{descripcion}}</h4>
          <div class="prices">
            <h2 class="genericStyle">
              Price: Now: ${{price}} &nbsp;
              before: &nbsp;
              <span
                class="tachado"
              >${{price + 5}}</span>
            </h2>
          </div>

          <div class="buttons">
            <button id="like" class="genericStyle" @click="like">
              <i class="fa fa-heart"></i>&nbsp;Like
            </button>
            <button id="dislike" class="genericStyle" @click="dislike">
              <i class="far fa-thumbs-down"></i>&nbsp;Dislike
            </button>
            <button class="genericStyle" @click="buy">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
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
      booksUser: [],
    }
  },
  components: { cabecera, foot },

  methods: {
    like() {
      let like = document.querySelector('#like')
      like.classList.toggle('liked')
      if (like.classList.contains('liked')) {
        const data = { email: localStorage.getItem('email'), title: this.title }
        this.$http.post('http://localhost:8081/users/like', data)
      }
    },

    dislike() {
      let dislike = document.querySelector('#dislike')
      let like = document.querySelector('#like')
      dislike.classList.toggle('liked')
      like.classList.toggle('liked')
      const data = { email: localStorage.getItem('email'), title: this.title }
      this.$http.post('http://localhost:8081/users/dislike', data)
    },

    buy() {
      localStorage.setItem('bookToBuy', this.title)
      this.$router.push('/buy/')
    },
  },
  mounted() {
    const data = { email: localStorage.getItem('email') }
    this.$http
      .post('http://localhost:8081/users/booksUser', data)
      .then(response => {
        this.booksUser = response.data.librosFavoritos
        let getter = localStorage.getItem('book')

        for (const book of this.booksUser) {
          if (getter == JSON.stringify(book)) {
            let like = document.querySelector('#like')
            like.classList.add('liked')
          }
        }

        if (this.booksUser.includes(book)) console.log('le gusta')
      })
    let getter = localStorage.getItem('book')
    const book = JSON.parse(getter)
    this.imageUrl = book.imageUrl
    this.title = book.titulo
    this.autor = book.autor
    this.publicationDate = book.fechaPublicacion
    this.descripcion = book.descripcion
  },
}
</script>

<style scoped>
.genericStyle {
  text-align: center;
  border: 1px solid #fb1;
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
  width: 100%;
}

.titulo {
  grid-area: titulo;
}

.rating {
  grid-area: rating;
}

.PublDate {
  grid-area: PublDate;
}

.description {
  grid-area: description;
}

.author {
  grid-area: author;
}

.buttons {
  grid-area: buttons;
  display: flex;
  flex-direction: column;
}

.prices {
  width: 400px;
  grid-area: price;
}

.backgroundContent {
  display: flex;
  justify-content: center;
}

.container {
  height: 600px;
  width: 700px;
  display: flex;
  justify-content: center;
}

.contenido {
  font-family: 'Raleway', sans-serif;
  height: 700px;
  width: 350px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'titulo'
    'rating'
    'PublDate'
    'description'
    'author'
    'buttons'
    'price';
}

.photoContainer {
  margin-top: 20px;
  margin-right: 50px;
  grid-area: photoContainer;
  max-height: 559px;
  width: 100%;
}

.tachado {
  text-decoration: line-through;
  text-decoration-color: red;
  color: red;
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
</style>
