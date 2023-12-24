<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    RouterView,
  },
};
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style></style>
