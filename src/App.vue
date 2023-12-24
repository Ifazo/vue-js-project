<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { VueFire, VueFireAuth } from "vuefire";
import { app } from "../firebase.config";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    RouterView,
  },
  // app.use(VueFire, {
  //   firebase: app,
  //   modules: [
  //     VueFireAuth()
  //   ]
  // })
};
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style></style>
