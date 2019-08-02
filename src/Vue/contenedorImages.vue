<template>
  <div>
    <div class="contenedorPortadas">
      <div v-for="(portada, i) in portadas" :key="i" class="imagenes">
        <img @click="book(books[i],i)" class="portadas" :src="books[i].imageUrl" />
      </div>
    </div>

    <div class="containerCarousel">
      <carousel-3d :width="300" :height="460">
        <slide v-for="(slide, i) in slides" :index="i">
          <img
            @click="book(recommendedBooks[i])"
            class="imageneses"
            :src="recommendedBooks[i].imageUrl"
          />
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import tilt from 'vanilla-tilt'

export default {
  name: 'contenedorImages',
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

/* .img1 {
  background-image: url('../img/portada1.jpg');
}

.img2 {
  background-image: url('../img/portada2.jpg');
}

.img3 {
  background-image: url('../img/portada3.jpg');
}

.img4 {
  background-image: url('../img/portada4.jpg');
}

.img5 {
  background-image: url('../img/portada5.jpg');
}

.img6 {
  background-image: url('../img/portada6.jpg');
}

.img7 {
  background-image: url('../img/portada7.jpg');
}

.img8 {
  background-image: url('../img/portada8.jpg');
} */

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
