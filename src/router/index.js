import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from 'firebase/auth';
import app from '@/lib/firebase';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true },
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

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

export default router
