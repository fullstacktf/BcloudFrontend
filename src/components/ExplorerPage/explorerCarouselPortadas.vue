<template>
  <div class="containerCarousel">
    <carousel-3d :width="300" :height="460" :count="3" :autoplay="true">
      <slide v-for="(recommendedBook, i) in 5" :key="i" :index="i">
        <img
          @click="book(recommendedBooks[i])"
          class="imageneses"
          :src="recommendedBooks[i].imageUrl"
        />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import tilt from 'vanilla-tilt'
export default {
  name: 'explorerCarouselPortadas',
  components: {
    Carousel3d,
    Slide,
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
    book(book) {
      localStorage.setItem('book', JSON.stringify(book))
      this.$router.push('/book')
    },
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
.imageneses {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: initial;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
