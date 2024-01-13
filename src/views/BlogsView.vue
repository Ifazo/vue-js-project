<template>
  <div>
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import axios from "axios";

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
    getBlogs() {
      axios
        .get("https://dummyjson.com/posts")
        .then((res) => {
          this.blogs = res.data.posts;
          console.log(this.blogs);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getBlogs();
  },
};
</script>

<style lang="scss" scoped></style>
