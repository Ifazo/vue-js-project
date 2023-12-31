<template>
  <div>
    <BlogDetails :blog="blog"/>
  </div>
</template>

<script>
import BlogDetails from "@/components/BlogDetails.vue";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

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
    async getBlog() {
      try {
        const blog = await getDoc(doc(db, "blogs", this.$route.params.id));
        this.blog = blog.data();
        console.log(this.blog);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBlog();
  },
};
</script>

<style lang="scss" scoped></style>
