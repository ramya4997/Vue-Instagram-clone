import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/SignUp.vue")
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/SignIn.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
