<template>
  <div>
    <cabecera></cabecera>
    <div class="contenedorPortadas">
      <div v-for="(portada, i) in portadas" :key="i" class="imagenes">
        <img @click="book(books[i],i)" class="portadas" :src="books[i].imageUrl" />
      </div>
    </div>

    <div class="containerCarousel">
      <carousel-3d :width="300" :height="460" :count="3" :autoplay="true">
        <slide v-for="(recommendedBook, i) in 3" :key="i" :index="i">
          <img
            @click="book(recommendedBooks[i])"
            class="imageneses"
            :src="recommendedBooks[i].imageUrl"
          />
        </slide>
      </carousel-3d>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { setTimeout } from 'timers'

export default {
  name: 'contenedorImages',
  components: { tilt, cabecera, foot, Carousel3d, Slide },
  data: function() {
    return {
      recommendedBooks: [],
      portadas: 0,
      slides: 0,
      books: [],
      img: '',
      a: '',
    }
  },

  mounted() {
    this.tilteo()
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

  created() {
    this.$http
      .get('/api/books/getallbooks')
      .then(response => {
        for (let d of response.data) {
          this.books.push(d)
        }
        this.slides = this.recommendedBooks.length
        this.portadas = this.books.length
      })
      .then(() => {
        this.tilteo()
      })

    if (localStorage.getItem('email') != null) {
      // setTimeout(() => {
      //   this.tilteo()
      //   tilteo()
      // }, 750)
      this.tilteo()
      const user = { email: localStorage.getItem('email') }
      this.tilteo()
      this.$http.post('/api/users/getlikes', user).then(response => {
        const data = { likes: response.data }
        this.$http.post('/api/books/getbookslikes', data).then(response => {
          this.recommendedBooks = response.data
        })
      })
    } else {
      this.slides = this.recommendedBooks.length
      this.recommendedBooks = this.books
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

/* .carousel-3d-slider .carousel-3d-slide {
  opacity: 1;
  overflow: visible;
} */

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
