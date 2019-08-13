<template>
  <div>
    <cabecera></cabecera>
    <div class="container">
      <explorerContenedorPortadas></explorerContenedorPortadas>
      <explorerCarouselPortadas></explorerCarouselPortadas>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import { setTimeout } from 'timers'
import explorerContenedorPortadas from '../components/ExplorerPage/explorerContenedorPortadas'
import explorerCarouselPortadas from '../components/ExplorerPage/explorerCarouselPortadas'

export default {
  name: 'contenedorImages',
  components: {
    tilt,
    cabecera,
    foot,
    explorerContenedorPortadas,
    explorerCarouselPortadas,
  },
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

  methods: {
    tilteo() {
      tilt.init(document.querySelectorAll('.imagenes'), {
        scale: '1.05',
        glare: true,
        maxGlare: '0.3',
      })
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
      setTimeout(() => {
        this.tilteo()
        tilteo()
      }, 750)
      const user = { email: localStorage.getItem('email') }
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
.container {
  height: 1400px;
}

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
