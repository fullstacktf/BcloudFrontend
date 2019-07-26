<template>
  <div class="tagsInputField">
    <link
      rel="stylesheet"
      href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css"
    />
    <multiselect v-model="selected" :multiple="true" placeholder="Your tastes" :options="options"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name: 'registerTagsBottom',
  components: { Multiselect },
  data() {
    return {
      selected: null,
      options: [
        'Aventura',
        'Terror',
        'Romántica',
        'Ficción',
        'Investigación',
        'Biografía',
        'Infantil',
        'Autoayuda',
        'Erótica',
        'Hogar',
        'Enciclopedia',
        'Política',
        'Sociedad',
        'Viajes',
      ],
    }
  },
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

div.multiselect {
  width: 65%;
}

.tagsInputField {
  grid-area: tagsInputField;
  display: flex;
  justify-content: center;
}

div.multiselect__content-wrapper {
  background: white;
}

input.multiselect__input {
  color: #c6c6c6;
  background: none;
}

div.multiselect.multiselect--above--active {
  background-color: red;
}

div.multiselect.multiselect--active {
  color: #555;
}

input.multiselect__input::placeholder {
  font-weight: normal;
  color: transparent;
}

span.multiselect__tag {
  border-radius: 0;
  background-image: linear-gradient(160deg, #ffeb05 0%, #ff7e05 100%);
  color: #000;
}

span.multiselect__option--selected.multiselect__option--highlight {
  background: #e8bf05;
  color: #fff;
}

span.multiselect__option--selected.multiselect__option--highlight::after {
  background: #e8bf05;
  content: attr(data-deselect);
  color: rgba(0, 0, 0, 0);
}

span.multiselect__option--highlight {
  background: #ff7e05;
  outline: none;
  color: #fff;
}

span.multiselect__option--highlight::after {
  content: attr(data-select);
  background: #ff7e05;
  color: #fff;
}

div.multiselect__tags {
  border-radius: 0;
  border: 1px solid #fb1;
  background-color: transparent;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

div.multiselect__tags > .multiselect__placeholder {
  color: #fb1;
}

i.multiselect__tag-icon {
  cursor: pointer;
  margin-left: 7px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: normal;
  width: 22px;
  text-align: center;
  line-height: 22px;
  transition: all 0.2s ease;
}

i.multiselect__tag-icon:focus,
i.multiselect__tag-icon:hover {
  background: #e89105;
}

i.multiselect__tag-icon::after {
  color: #000;
}

i.multiselect__tag-icon:focus::after,
i.multiselect__tag-icon:hover::after {
  color: #fff;
}
</style>
