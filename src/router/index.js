import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: () => import("../views/MovieDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
