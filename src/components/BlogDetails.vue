<template>
  <div>
    <main>
      <article>
        <header class="mx-auto max-w-screen-xl pt-28 text-center">
          <p class="text-gray-500">Published April 4, 2022</p>
          <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
            7 rules of effective marketing
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
          <strong class="text-2xl font-medium"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi
            modi officia mollitia doloribus tenetur consectetur quae?</strong
          >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim
            maxime sit laudantium! Dolore atque, maxime iusto ut quas distinctio
            reiciendis animi voluptatibus soluta molestias, mollitia officiis
            laboriosam illum earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique reiciendis et recusandae provident repellendus rem
            doloremque eaque error assumenda?
          </p>
        </div>
      </article>
    </main>

    <div class="w-fit mx-auto mt-10 flex space-x-2">
      <div class="h-0.5 w-2 bg-gray-600"></div>
      <div class="h-0.5 w-32 bg-gray-600"></div>
      <div class="h-0.5 w-2 bg-gray-600"></div>
    </div>
    <MoreBlogs />
  </div>
</template>

<script>
import { db } from "../../firebase.config";
import MoreBlogs from "./MoreBlogs.vue";
import { doc, getDoc } from "firebase/firestore";
import { ref, onMounted } from "vue";

export default {
  components: {
    MoreBlogs,
  },
  setup() {
    const blog = ref(null);
    const getBlog = async () => {
      const docRef = doc(db, "blogs", "fxapbTnxVwvXjdifG794");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        blog.value = docSnap.data();
        console.log("Document data:", docSnap.data().title);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    onMounted(getBlog);
    return {
      blog,
    };
  },
};
</script>

<style lang="scss" scoped></style>
