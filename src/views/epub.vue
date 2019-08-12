<template>
  <div>
    <cabecera></cabecera>
    <div class="containerEpub">
      <BookReader
        :epub-url="url"
        :font-size="size"
        :themes="themes"
        :theme="currentTheme"
        :progress.sync="readingProgress"
        @toc="getContent"
        :contentBookModify="90"
      ></BookReader>
      <div class="optionsContainer">
        <PreferencesDropdown
          :themes="themes"
          :current-theme.sync="currentTheme"
          :font-size.sync="size"
          v-model="serchQuery"
          @searchResults="onSearchResults"
        ></PreferencesDropdown>
      </div>
    </div>

    <foot></foot>
  </div>
</template>
 
<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import { BookReader, PreferencesDropdown, TreeMenu } from 'vue-epub-reader'
import vueSlider from 'vue-slider-component'
export default {
  name: 'App',
  components: {
    BookReader,
    PreferencesDropdown,
    TreeMenu,
    vueSlider,
    cabecera,
    foot,
  },
  data() {
    return {
      url: 'https://s3.amazonaws.com/moby-dick/moby-dick.epub',
      size: 80,
      currentTheme: 'beige',
      themes: {
        white: {
          body: {
            color: '#000000',
            background: '#ffffff',
          },
          name: 'WHITE',
        },
        beige: {
          body: {
            color: '#000000',
            background: '#f3e8d2',
          },
          name: 'BEIGE',
        },
        night: {
          body: {
            color: '#ffffff',
            background: '#4a4a4a',
          },
          name: 'NIGHT',
        },
      },
      serchQuery: '',
      readingProgress: 20,
      openSearch: false,
      openContent: false,
      searchContent: [],
      toc: [],
    }
  },
  methods: {
    toggleSearchWidget() {
      this.openSearch = !this.openSearch
    },
    showContent() {
      this.openContent = !this.openContent
    },
    onSearchResults(value) {
      this.searchContent = value
    },
    getContent(value) {
      this.toc = value
    },
  },
  mounted() {
    this.$root.$on('toc', toc => {
      this.toc = toc
    })
    console.log(document.getElementsByClassName('buton').innerHTML)
    document.getElementsByClassName('buton').innerHTML = 'Hola'
    console.log(document.getElementsByClassName('buton').innerHTML)
  },
}
</script>

<style>
.containerEpub {
  height: 900px;
  width: 100%;
  background-color: #ff7e05;
}

div .epub-reading-progress-bar {
  background-color: transparent;
  position: relative;
  top: 720px;
  left: 50%;
  z-index: 1;
}

div #area {
  bottom: 100px;
}

div .optionsContainer {
  position: relative;
  top: 640px;
  left: 25%;
}

div div div .hover {
  position: relative;
  left: -150px;
  width: 300px;
  top: -50px;
}

div div button.my-find {
  display: none;
}
</style>