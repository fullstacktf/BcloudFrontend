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
          <div class="prices genericStyle">
            <h2>
              Price: Now: ${{price}} &nbsp;
              before: &nbsp;
              <span
                class="tachado"
              >${{price + 5}}</span>
            </h2>
          </div>

          <div class="buttons">
            <button id="like" @click="like">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button id="dislike" @click="dislike">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <bookButtons :messages="['Click Here to Buy','✔']" class="buttonToBuy">Buy</bookButtons>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import bookButtons from '../components/BookPage/bookButtons'
import { constants } from 'crypto'
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
  components: { cabecera, foot, bookButtons },

  methods: {
    like() {
      let like = document.querySelector('#like')
      let dislike = document.querySelector('#dislike')
      like.classList.toggle('liked')
      like.classList.add('animated', 'bounceIn')

      if (dislike.classList.contains('liked')) {
        dislike.classList.toggle('liked')
        dislike.classList.remove('animated', 'bounceIn')
      }
      if (like.classList.contains('liked')) {
        const data = { email: localStorage.getItem('email'), title: this.title }
        this.$http.post('/api/users/like', data)
      }
    },
    tilteo() {
      tilt.init(document.querySelectorAll('.photoContainer'), {
        scale: '1.05',
        glare: true,
        maxGlare: '0.3',
      })
    },

    dislike() {
      let dislike = document.querySelector('#dislike')
      let like = document.querySelector('#like')
      dislike.classList.toggle('liked')
      dislike.classList.add('animated', 'bounceIn')
      if (like.classList.contains('liked')) {
        like.classList.toggle('liked')
        like.classList.remove('animated', 'bounceIn')
      }
      const data = { email: localStorage.getItem('email'), title: this.title }
      this.$http.post('/api/users/dislike', data)
    },
  },
  mounted() {
    const data = { email: localStorage.getItem('email') }
    this.$http.post('/api/users/booksUser', data).then(response => {
      this.booksUser = response.data.librosFavoritos
      console.log(this.booksUser)
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
    localStorage.setItem('bookToBuy', this.title)
    this.tilteo()
  },
}
</script>

<style scoped>
#dislike.liked {
  transition: color 0.3s ease-out;
  color: #eb4c38;
}

#dislike {
  width: 30px;
  color: #fb1;
  background-color: transparent;
  border: 0;
  font-size: 40px;
}

#dislike:hover {
  color: white;
}

#like.liked {
  transition: color 0.3s ease-out;
  color: #6deb1c;
}

#like {
  width: 30px;
  color: #fb1;
  background-color: transparent;
  border: 0;
  font-size: 40px;
}

#like:hover {
  color: white;
}

.buttonToBuy {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #fb1;
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  color: black;
}

.genericStyle {
  color: #fb1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #fb1;
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
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}

.prices {
  width: 400px;
  grid-area: price;
  margin-bottom: 20px;
}

.backgroundContent {
  display: flex;
  justify-content: center;
  height: 800px;
}

.container {
  height: 700px;
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
  grid-template-rows: 1fr 80px 80px 1fr 80px 80px 80px;
  grid-template-areas:
    'titulo'
    'rating'
    'PublDate'
    'description'
    'author'
    'price'
    'buttons';
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

button:hover {
  background-color: green;
}
</style>
