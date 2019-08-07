<template>
  <div class="container">
    <div class="files">
      <form ref="uploadForm" id="uploadForm" enctype="multipart/form-data">
        <label for="file1">
          EPUB
          <input type="file" id="file1" ref="file1" />
        </label>

        <label for="file2">
          PHOTO
          <input type="file" id="file2" ref="file2" />
        </label>

        <button class="button" @click="uploadBook">Upload Book</button>
      </form>
    </div>

    <div class="form">
      <h2>Book data</h2>
      <form ref="uploadForm2" id="uploadForm2" enctype="multipart/form-data">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" />
        <label for="gener">Gener</label>
        <adminTagsBottom :sendLike="getLikes"></adminTagsBottom>
        <label for="author">Author</label>
        <input type="text" id="author" v-model="author" />
        <label for="publicationDate">Publication date</label>
        <input type="date" id="publicationDate" v-model="publicationDate" />
        <label for="rating">Rating</label>
        <input type="text" id="rating" v-model="rating" />
        <label for="price">Price</label>
        <input type="text" id="price" v-model="price" />
        <label for="description">description</label>
        <textarea id="description" v-model="description" />
      </form>
    </div>
  </div>
</template>

<script>
import FormData from 'form-data'
import adminTagsBottom from '../components/AdminPage/adminComponents/adminTagsBottom'

export default {
  data: () => {
    return {
      epubFile: '',
      imageFile: '',
      title: '',
      gener: '',
      author: '',
      rating: 1,
      publicationDate: '',
      price: 1,
      description: '',
    }
  },
  methods: {
    uploadBook() {
      this.epubFile = this.$refs.file1.files[0]
      this.imageFile = this.$refs.file2.files[0]
      let data = new FormData()
      data.append('epubFile', this.epubFile, this.epubFile.fileName)
      data.append('imageFile', this.imageFile, this.imageFile.fileName)
      data.append('title', this.title)
      data.append('gener', this.gener)
      data.append('author', this.author)
      data.append('rating', this.rating)
      data.append('publicationDate', this.publicationDate)
      data.append('price', this.price)
      data.append('description', this.description)
      this.$http
        .post('https://bookcloud.me/api/books/upload', data, {
          headers: {
            'Content-Type': this.epubFile.type,
          },
        })
        .then(response => {
          console.log(response.data)
        })
    },
    getLikes(likes) {
      this.gener = likes
    },
  },
  components: { adminTagsBottom },
}
</script>

<style scoped>
.container {
  height: 800px;
  width: 1000px;
  display: flex;
  margin: auto;
  flex-direction: row;
}

.files {
  width: 48%;
  height: 70%;
  background-color: #fb3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 48%;
  height: 70%;
  background-color: #fb3;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px;
}

#uploadForm2 {
  height: 90%;
}

[type='date'] {
  font-size: 15px;
  padding: 5px;
}

input {
  font-family: 'Raleway', sans-serif;
  margin: 5px;
}

h2 {
  font-family: 'Raleway', sans-serif;
}

.button {
  height: 90%;
  width: 48%;
  border: 1px solid black;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  background-color: #fb4;
  margin: 2px;
}

.button:hover {
  border-color: red;
  background-color: #fb3;
}

textarea {
  height: 100%;
}
</style>