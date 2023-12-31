import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";
import app from "@/firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/BlogsView.vue"),
    },
    {
      path: "/blogs/:id",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    // {
    //   path: "/blogs/:id/edit",
    //   name: "edit-blog",
    //   component: () => import("../views/EditBlogView.vue"),
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: "/create-blog",
    //   name: "create-blog",
    //   component: () => import("../views/CreateBlogView.vue"),
    //   meta: { requiresAuth: true },
    // },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/:id",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/features",
      name: "features",
      component: () => import("../views/FeaturesView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const auth = getAuth(app);
    if (auth.currentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
