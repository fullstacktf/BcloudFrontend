<template>
<div>
  <main class="main-content">
    <div class="">
      <div class="user-container">
        <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" class="profile">
        <p>Mr. Gato</p>
      </div>
      <div class="options-container">
        <form>            
            <div class="group emailField flex">
              <input type="text" required="required" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group passwordField flex">
              <input type="password" required="required" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
             <div class="button-container">
              <button>Guardar</button>
            </div>
          </form>
      </div>
    </div>
    <div class="user-books-container">
      <div class="user-filter-books">
        <span>Tus libros</span>
        <select name="" id="">
          <option value="">Precio</option>
          <option value="">Año</option>
        </select>
      </div>
      <div class="user-books">
        <div class="book-row mt-3">
          <div class="book-item">
            <img
              src="https://www.lahiguera.net/musicalia/artistas/john_williams/disco/5868/john_williams_the_book_thief-portada.jpg"
              alt="">
          </div>
          <div class="book-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayr56OpSDtxU9xw9B6R3eF1zhIk79wsJUi7tgp2zRxonzBlOs3Q"
              alt="">
          </div>
          <div class="book-item">
            <img
              src="https://2.bp.blogspot.com/-pDsTtASllcw/V4JTYdU6cKI/AAAAAAAABGg/-wx4xmpipfcfdAoPETYz8vGGJMcmyCi0gCLcB/s1600/5ey5x3.jpg"
              alt="">
          </div>
          <div class="book-item">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81gvkSxKoAL.jpg" alt="">
          </div>
        </div>
        <div class="book-row mt-3">
          <div class="book-item">
            <img
              src="https://www.lahiguera.net/musicalia/artistas/john_williams/disco/5868/john_williams_the_book_thief-portada.jpg"
              alt="">
          </div>
          <div class="book-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayr56OpSDtxU9xw9B6R3eF1zhIk79wsJUi7tgp2zRxonzBlOs3Q"
              alt="">
          </div>
          <div class="book-item">
            <img
              src="https://2.bp.blogspot.com/-pDsTtASllcw/V4JTYdU6cKI/AAAAAAAABGg/-wx4xmpipfcfdAoPETYz8vGGJMcmyCi0gCLcB/s1600/5ey5x3.jpg"
              alt="">
          </div>
          <div class="book-item">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81gvkSxKoAL.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "profile"
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1200px;
}

.profile {
  width: 100px;
}

.user-container {
  text-align: center;
}

.user-books-container {
  width: 80%;
}

.user-filter-books span {
  color: white;
}

.book-row {
  display: flex;
  justify-content: space-between;
}

.book-item {
  width: 180px;
  height: 180px;
}

.group {
  position: relative;
  margin: 45px 0;
}

.book-item img {
  width: 100%;
  height: 100%;
}

.mt-3 {
  margin-top: 3rem;
}

.button-container {
  text-align: center;
}
</style>
