<template>
  <div>
    <div class="container">
      <BookReader
        :epub-url="url"
        :font-size="size"
        :themes="themes"
        :theme="currentTheme"
        :progress.sync="readingProgress"
        @toc="getContent"
        :contentBookModify="90"
      >
      </BookReader>
    </div>
    <div class="optionsContainer">
      <PreferencesDropdown
        :themes="themes"
        :current-theme.sync="currentTheme"
        :font-size.sync="size"
        v-model="serchQuery"
        @searchResults="onSearchResults"
      >
      </PreferencesDropdown>
    </div>
  </div>
</template>
 
<script>
import { BookReader, PreferencesDropdown, TreeMenu } from "vue-epub-reader";
import vueSlider from "vue-slider-component";
export default {
  name: "App",
  components: {
    BookReader,
    PreferencesDropdown,
    TreeMenu,
    vueSlider
  },
  data() {
    return {
      url: "https://s3.amazonaws.com/moby-dick/moby-dick.epub",
      size: 80,
      currentTheme: "beige",
      themes: {
        white: {
          body: {
            color: "#000000",
            background: "#ffffff"
          },
          name: "WHITE"
        },
        beige: {
          body: {
            color: "#000000",
            background: "#f3e8d2"
          },
          name: "BEIGE"
        },
        night: {
          body: {
            color: "#ffffff",
            background: "#4a4a4a"
          },
          name: "NIGHT"
        }
      },
      serchQuery: "",
      readingProgress: 20,
      openSearch: false,
      openContent: false,
      searchContent: [],
      toc: []
    };
  },
  methods: {
    toggleSearchWidget() {
      this.openSearch = !this.openSearch;
    },
    showContent() {
      this.openContent = !this.openContent;
    },
    onSearchResults(value) {
      this.searchContent = value;
    },
    getContent(value) {
      this.toc = value;
    }
  },
  mounted() {
    this.$root.$on("toc", toc => {
      this.toc = toc;
    });
  }
};
</script>

<style scoped>
.container {
  height: 1000px;
  width: 100%;
  background-color: brown;
}
</style>