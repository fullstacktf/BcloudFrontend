<template>
  <div class="contenedorPortadas">
    <div v-for="(portada, i) in portadas" :key="i" class="imagenes">
      <img @click="book(books[i],i)" class="portadas" :src="books[i].imageUrl" />
    </div>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'
export default {
  name: 'explorerContenedorPortadas',
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

.contenedorPortadas {
  max-width: 920px;
  max-height: 500px;
  margin: 0 auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.portadas {
  width: 100%;
  height: 100%;
}

.contenedorPortadas::-webkit-scrollbar {
  display: none;
}
</style>
