<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  title: process.env.VUE_APP_TITLE,
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";

#app {
  font-family: "Lato", sans-serif;
}
</style>
