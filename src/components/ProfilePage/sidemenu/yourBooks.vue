<template>
  <div class="frase">
    <p aria-label="Registro">
      <span data-text="Y">Y</span>
      <span data-text="O">O</span>
      <span data-text="U">U</span>
      <span data-text="R">R</span>
      <span data-text=""></span>
      <span data-text="B">B</span>
      <span data-text="O">O</span>
      <span data-text="O">O</span>
      <span data-text="K">K</span>
      <span data-text="S">S</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'yourBooks',
}
</script>

<style scoped>
.frase {
  grid-area: frase;
  display: flex;
  justify-content: center;
}

p {
  color: transparent;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  font-size: 0.5em;
}

p span {
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  perspective: 500;
  -webkit-font-smoothing: antialiased;
}

p span::before,
p span::after {
  display: none;
  position: absolute;
  top: 0;
  left: -1px;
  transform-origin: left top;
  transition: all ease-out 0.3s;
  content: attr(data-text);
}

p span::before {
  z-index: 1;
  color: rgba(0, 0, 0, 0.2);
  transform: scale(1.1, 1) skew(0deg, 20deg);
}

p span::after {
  z-index: 2;
  color: #fb1;
  text-shadow: -1px 0 1px #fb4, 1px 0 1px rgba(0, 0, 0, 0.8);
  transform: rotateY(-40deg);
}

p span:hover::before {
  transform: scale(1.1, 1) skew(0deg, 5deg);
}

p span:hover::after {
  transform: rotateY(-10deg);
}

p span + span {
  margin-left: 0;
}

@media (min-width: 20em) {
  p {
    font-size: 2em;
  }
  p span::before,
  p span::after {
    display: block;
  }
}

@media (min-width: 10em) {
  p {
    font-size: 1em;
  }
}

@media (min-width: 20em) {
  p {
    font-size: 3em;
  }
}

@media (min-width: 30em) {
  p {
    font-size: 4em;
  }
}
</style>
