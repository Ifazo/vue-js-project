<template>
  <div>
    <!-- Card Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category" />
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Section -->
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import { categoriesRef } from "@/lib/firebase";
import { getDocs } from "firebase/firestore";

export default {
  name: 'CategoriesView',
  components: { CategoryCard },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      try {
        const categories = await getDocs(categoriesRef);
        categories.forEach((doc) => {
          this.categories.push(
            doc.exists() && {
              id: doc.id,
              ...doc.data(),
            });
          console.log(this.categories);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped></style>
