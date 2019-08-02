<template>
  <div>
    <cabecera></cabecera>
    <div class="contenedorPortadas">
      <div v-for="(portada, i) in portadas" :key="i" class="imagenes">
        <img @click="book(books[i],i)" class="portadas" :src="books[i].imageUrl" />
      </div>
    </div>

    <div class="containerCarousel"></div>
    <foot></foot>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'

export default {
  name: 'contenedorImages',
  components: { tilt, cabecera, foot },
  data: function() {
    return {
      recommendedBooks: [],
      portadas: 0,
      slides: 5,
      books: [],
      img: '',
      a: '',
    }
  },

  methods: {
    tilteo() {
      tilt.init(document.querySelectorAll('.imagenes'), {
        scale: '1.05',
        glare: true,
        maxGlare: '0.3',
      })
    },

    book(book) {
      localStorage.setItem('book', JSON.stringify(book))
      this.$router.push('/book')
    },
  },

  mounted() {
    return
    this.$http.get('http://localhost:8081/books/getallbooks').then(response => {
      for (let d of response.data) {
        this.books.push(d)
      }
      this.slides = this.recommendedBooks.length
      this.portadas = this.books.length
      console.log(response.data)
      console.log('Aqui está la tal')
    })

    if (localStorage.getItem('email') != null) {
      const user = { email: localStorage.getItem('email') }
      this.$http
        .post('http://localhost:8081/users/getlikes', user)
        .then(response => {
          const data = { likes: response.data }
          this.$http
            .post('http://localhost:8081/books/getbookslikes', data)
            .then(response => {
              console.log(response.data)
              this.recommendedBooks = response.data
            })
        })
    } else {
      this.slides = this.recommendedBooks.length
      this.recommendedBooks = this.books
      console.log(this.recommendedBooks)
    }
  },
}
</script>

<style scoped>
.imagenes {
  cursor: pointer;
  display: inline-block;
  width: 150px;
  height: 230px;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
}

.portadas {
  width: 100%;
  height: 100%;
}

.imageneses {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
}

.contenedorPortadas {
  max-width: 920px;
  max-height: 500px;
  margin: 0 auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.contenedorPortadas::-webkit-scrollbar {
  display: none;
}
</style>
