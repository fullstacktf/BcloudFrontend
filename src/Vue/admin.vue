<template>
  <div class="container">

    <div class="files">
      <form ref="uploadForm" id="uploadForm" enctype="multipart/form-data">

        <label for="file1">EPUB
          <input type="file" style="visibility: hidden;" id="file1" ref="file1" />
        </label> 

        <label for="file2">PHOTO
          <input type="file" id="file2" ref="file2" />
        </label> 

        <button class="button" @click="uploadBook">Upload Book</button>
      </form>
    </div>

    <div class="form">
      <h2>Book data</h2>
      <form ref="uploadForm2" id="uploadForm2" enctype="multipart/form-data">
        <label for="title">Title</label>
        <input type="text" id="title" v-bind="title" />
        <label for="gener">Gener</label>
        <input type="text" id="rating" v-bind="gener" />
        <label for="author">Author</label>
        <input type="text" id="author" v-bind="author" />
        <label for="publicationDate">Publication date</label>
        <input type="date" id="publicationDate" v-bind="publicationDate" />
        <label for="rating">Rating</label>
        <input type="text" id="rating" v-bind="rating"/>
        <label for="price">Price</label>
        <input type="text" id="price" v-bind="price"/>
        <label for="description">description</label>
        <textarea id="description" v-bind="price"/>
      </form>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import FormData from "form-data";

export default {
  data: () => {
    return {
      file: "",
      file2: "",
      title: "",
      gener: "",
      author:"",
      rating: "",
      publicationDate: "",
      price: "",
      description: ""
    };
  },
  methods: {
    uploadBook() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      let data = new FormData();
      data.append("file", this.file, this.file.fileName);
      axios
        .post("http://localhost:8081/upload", data, {
          headers: {
            "Content-Type": this.file.type
          }
        })
        .then(data => {
          console.log(data);
        });
    }
  }
};
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

[type=date] {
  font-size: 15px;
  padding: 5px;
}

input {
  font-family: "Raleway", sans-serif;
  margin: 5px;
}

h2 {
  font-family: "Raleway", sans-serif;
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