<template>
  <div class="containerProfile">
    <nav class="nav__cont">
      <ul class="nav">
        <li class="nav__items homeClass">
          <i class="fas fa-home"></i>
          <a href="#">Home</a>
        </li>
        <li class="nav__items searchClass">
          <i class="fas fa-search"></i>
          <a href="#">Search</a>
        </li>
        <li class="nav__items friendsClass">
          <i class="fas fa-user-friends"></i>
          <a href="#">Friends</a>
        </li>
        <li class="nav__items logoutClass">
          <i class="fas fa-sign-out-alt"></i>
          <a href="#">LogOut</a>
        </li>
      </ul>
    </nav>
    <main>
      <yourBooks></yourBooks>
      <containerBookFront></containerBookFront>
      <yourFavouriteBooks></yourFavouriteBooks>
      <containerBookFrontLiked></containerBookFrontLiked>
    </main>
  </div>
</template>

<script>
import yourBooks from './yourBooks'
import yourFavouriteBooks from './yourFavouriteBooks'
import containerBookFront from './containerBookFront'
import containerBookFrontLiked from './containerBookFrontLiked'
export default {
  name: 'sideMenu',
  components: {
    containerBookFront,
    containerBookFrontLiked,
    yourFavouriteBooks,
    yourBooks,
  },
  methods: {},
}
</script>

<style scoped>
.homeClass {
  grid-area: home;
}

.searchClass {
  grid-area: search;
}

.friendsClass {
  grid-area: friends;
}

.logoutClass {
  grid-area: logout;
}

.containerProfile {
  width: 100%;
  height: 900px;
}

.nav__cont {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'home'
    'search'
    'friends'
    'logout';
  position: fixed;
  width: 60px;
  height: calc(100vh);
  top: 150px;
  z-index: 100;
  background-color: #000;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
}

.nav__cont:hover {
  width: 200px;
}
@media screen and (min-width: 600px) {
  .nav__cont {
    width: 80px;
  }
}

.nav {
  list-style-type: none;
  color: white;
}

.nav:first-child {
  padding-top: 1.5rem;
}

.nav__items {
  padding-bottom: 4rem;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  color: #fb4;
}

.nav__items a {
  position: relative;
  display: block;
  top: -28px;
  padding-left: 25px;
  padding-right: 15px;
  transition: all 0.3s ease;
  margin-left: 25px;
  margin-right: 10px;
  text-decoration: none;
  color: #fb1;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 1.35em;
}

.nav__items a::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  background-color: radial-gradient(
    circle at 94.02% 88.03%,
    #54a4ff,
    transparent 100%
  );
  transition: all 0.5s ease;
  z-index: -10;
}

.nav__items:hover a::after {
  opacity: 1;
}

.nav__items svg {
  width: 26px;
  height: 26px;
  position: relative;
  left: -25px;
  cursor: pointer;
}

@media screen and (min-width: 600px) {
  .nav__items svg {
    width: 32px;
    height: 32px;
    left: -15px;
  }
}

h1 {
  margin-top: 6rem;
  margin-left: 80px;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 4rem;
  text-transform: uppercase;
  color: white;
  letter-spacing: 6px;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
