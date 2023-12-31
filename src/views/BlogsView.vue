<template>
  <div>
    <section class="py-20">
      <h1 class="mb-12 text-center font-sans text-5xl font-bold">
        Recent Posts
      </h1>
      <div
        class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        <BlogsComponent />
      </div>
    </section>
  </div>
</template>

<script>
import BlogsComponent from "@/components/BlogsComponent.vue";
export default {
  components: {
    BlogsComponent,
  },
};
</script>

<style lang="scss" scoped></style>
