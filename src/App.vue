<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <h1 class="text-3xl font-bold text-center">Hello world!</h1>
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
