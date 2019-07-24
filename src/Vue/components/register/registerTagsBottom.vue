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
.tagsInputField {
  grid-area: tagsInputField;
}

div.multiselect__content-wrapper {
  background: white;
}

input.multiselect__input {
  color: #c6c6c6;
  background: none;
}

div.multiselect.multiselect--active {
  color: #555;
}

input.multiselect__input::placeholder {
  font-weight: normal;
  color: #c6c6c6;
}

span.multiselect__tag {
  background: #fb1;
  color: #000;
}

span.multiselect__option--selected.multiselect__option--highlight {
  background: #e8bf05;
  color: #fff;
}

span.multiselect__option--selected.multiselect__option--highlight::after {
  background: #e8bf05;
  content: attr(data-deselect);
  color: #fff;
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
  background: none;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #fff;
  font-family: 'Times', 'New Roman', serif;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 10px 5px 5px;
}

div.multiselect__tags > .multiselect__placeholder {
  color: #c6c6c6;
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
  border-radius: 5px;
}

i.multiselect__tag-icon::after {
  content: '\D7';
  color: #000;
  font-size: 14px;
}

i.multiselect__tag-icon:focus,
i.multiselect__tag-icon:hover {
  background: #e89105;
}

i.multiselect__tag-icon:focus::after,
i.multiselect__tag-icon:hover::after {
  color: #fff;
}
</style>
