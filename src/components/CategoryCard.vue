<template>
  <div>
    <!-- Card -->
    <RouterLink
    :to="`/categories/${category.id}`"
      class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div>
            <h3
              class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              {{ category.name }}
            </h3>
            <p class="text-sm text-gray-500">4 job positions</p>
          </div>
          <div class="ps-3">
            <svg
              class="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </RouterLink>
    <!-- End Card -->
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "CategoryCard",
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
    components: { RouterLink }
};
</script>

<style lang="scss" scoped></style>
