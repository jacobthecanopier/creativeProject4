import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import AdminView from "../views/AdminView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/experiences",
    name: "experiences",
    component: ExperienceView,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: ReviewsView,
  },
  {
    path: "/admin-view",
    name: "adminView",
    component: AdminView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
