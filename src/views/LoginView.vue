<template>
  <div>
    <form
      class="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10">
      <h1 class="text-center text-xl font-semibold lg:text-2xl">Login</h1>
      <p class="text-center pb-4 text-gray-500">
        Do not have an account
        <span class="text-blue-600">
          <RouterLink to="/signup">Sign up</RouterLink>
        </span>
      </p>

      <div>
        <label class=""> Email Address </label>
        <input
          type="email"
          placeholder="Info@example.com"
          v-model="email"
          class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
      </div>
      <div>
        <label class=""> Password </label>
        <input
          type="password"
          placeholder="******"
          v-model="password"
          class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
      </div>
      <div v-show="error">{{ this.errorMessage }}</div>
      <div>
        <button
          @click.prevent="login()"
          type="button"
          class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">
          Log in
        </button>
      </div>
      <div>
        <button
          @click.prevent="googleLogin()"
          type="button"
          class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">
          Google sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorCode: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          console.log(this.user);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
        });
    },

    googleLogin() {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((userCredential) => {
          this.user = userCredential.user;
          console.log(this.user);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
          console.log(error.code, error.message);
        });
    },
  },
};
</script>

<style lang="scss"></style>
