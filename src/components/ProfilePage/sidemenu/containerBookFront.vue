 <template>
  <div class="contenedorPortadas">
    <div v-for="(book) in books" :key="book" class="imagenes">
      <img @click="goBook(book)" class="portadas" :src="book.imageUrl" />
    </div>
  </div>
</template>
<script>
import tilt from 'vanilla-tilt'
export default {
  name: 'containerBookFront',
  data: function() {
    return {
      books: []
    }
  },
  methods: {
    goBook(book) {
      this.$router.push('/epub')
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
    const data = { email: localStorage.getItem('email') }
    this.$http
      .post('http://localhost:8081/api/users/booksUser', data)
      .then(response => {
        this.books = response.data.librosAdquiridos;
        console.log(this.books);
        let getter = localStorage.getItem('book')

        for (const book of this.booksUser) {
          if (getter == JSON.stringify(book)) {
            let like = document.querySelector('#like')
            like.classList.add('liked')
          }
        }

        if (this.booksUser.includes(book)) console.log('le gusta')
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

.portadas {
  width: 100%;
  height: 100%;
}

.contenedorPortadas {
  max-width: 1200px;
  max-height: 230px;
  margin: 0 auto;

  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.contenedorPortadas::-webkit-scrollbar {
  display: none;
}
</style>
