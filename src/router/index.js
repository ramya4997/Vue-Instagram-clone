import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../pages/SignUp.vue")
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../pages/SignIn.vue")
  },
  {
    path: "/",
    name: "Homepage",
    component: () => import("../pages/Homepage.vue"),
    meta: { requireAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);

  if (requireAuth && !isAuthenticated) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
