<template>
  <div>
    <article
      class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <RouterLink
        :to="`/blogs/${blog.id}`"
       class="block h-full w-full">
        <img
          class="max-h-40 w-full object-cover"
          alt="featured image"
          :src="blog.image" />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">
            {{ blog.category }}
          </p>
          <p class="mb-2 text-xl font-medium text-gray-800">
            {{ blog.title }}
          </p>
          <p class="text-md font-light text-gray-400">
            {{ blog.body }}
          </p>
          <div class="justify-between mt-4 flex flex-wrap items-center">
            <div
              class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
              {{ blog.author }}
            </div>
            <div
              class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
              {{ blog.date }}
            </div>
          </div>
        </div>
      </RouterLink>
    </article>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        blog: {
            type: Object,
            required: true,
        },
    },
    components: { RouterLink }
};
</script>

<style lang="scss" scoped></style>
