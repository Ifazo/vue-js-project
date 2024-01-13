<template>
  <div>
    <BlogDetails :blog="blog" />
  </div>
</template>

<script>
import BlogDetails from "@/components/BlogDetails.vue";
import axios from "axios";

export default {
  components: {
    BlogDetails,
  },
  data() {
    return {
      blog: {},
    };
  },
  computed: {},
  methods: {
    getBlog() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        )
        .then((res) => {
          this.blog = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getBlog();
  },
};
</script>

<style lang="scss" scoped></style>
