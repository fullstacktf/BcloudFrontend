<template>
  <div class="container">
    <form ref='uploadForm' 
      id='uploadForm' 
      encType="multipart/form-data">
        <input type="file" id="file" ref="file"/>
        <button @click="uploadPhoto">ENVIAAAR<button/>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data'

export default {

  data: () => {
      return {
        file:""
      }
  },
  methods: {
    uploadPhoto(){
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      let data = new FormData();
      data.append('file', this.file, this.file.fileName);
      axios.post('http://localhost:8081/upload', data, {
      headers: {
        'Content-Type': this.file.type
        }
        }).then( data => {
        console.log(data);
      })
    }
  }
}
</script>

<style>

.container {
  height: 1000px;
  width: 500px;
  background-color: blue; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
}

</style>
