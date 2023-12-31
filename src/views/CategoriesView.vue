<template>
  <div>
    <!-- Card Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        <CategoryCard />
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Section -->
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  components: { CategoryCard },
};
</script>

<style lang="scss" scoped></style>
