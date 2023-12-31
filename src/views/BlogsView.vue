<template>
  <div>
    <section class="py-20">
      <h1 class="mb-12 text-center font-sans text-5xl font-bold">
        Recent Posts
      </h1>
      <div
        class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </section>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import { blogsRef } from "@/firebase";
import { getDocs } from "firebase/firestore";

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogs: [],
    };
  },
  computed: {},
  methods: {
    async getBlogs() {
      try {
        const blogs = await getDocs(blogsRef);
        blogs.forEach((doc) => {
          this.blogs.push(
            doc.exists() && {
              id: doc.id,
              ...doc.data(),
            }
          );
          console.log(this.blogs);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBlogs();
  },
};
</script>

<style lang="scss" scoped></style>
