<template>
  <div>
    <main>
      <article>
        <header class="mx-auto max-w-screen-xl pt-28 text-center">
          <p class="text-gray-500">Published April 4, 2022</p>
          <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
            {{ blog.title }}
          </h1>
          <p class="mt-6 text-lg text-gray-700">
            You're doing marketing the wrong way
          </p>
          <div
            class="mt-6 flex flex-wrap justify-center gap-2"
            aria-label="Tags">
            <button
              class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Marketing
            </button>
            <button
              class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Branding
            </button>
            <button
              class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Digital
            </button>
            <button
              class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Identity
            </button>
          </div>
          <img
            class="sm:h-[34rem] mt-10 w-full object-contain"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Featured Image" />
        </header>

        <div
          class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
          <strong class="text-2xl font-medium">
            {{ blog.body }}
          </strong>
          <p>
            {{ blog.body }}
          </p>
        </div>
      </article>
    </main>

    <div class="w-fit mx-auto mt-10 flex space-x-2">
      <div class="h-0.5 w-2 bg-gray-600"></div>
      <div class="h-0.5 w-32 bg-gray-600"></div>
      <div class="h-0.5 w-2 bg-gray-600"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetails",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
