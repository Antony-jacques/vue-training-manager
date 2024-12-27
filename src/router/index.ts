import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/CustomTraining.vue"),
  },
  {
    path: "/target",
    name: "Target",
    component: () => import("@/views/TargetView.vue"),
    meta: {
      title: "Targeted muscle",
    },
  },
  {
    path: "/my-training",
    name: "MyTraining",
    component: () => import("@/views/CustomTraining.vue"),
    beforeEnter(to, from) {
      console.log("TODO: check if user is connected");
    },
  },
  {
    path: "/about",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "About Page",
    },
  },
  {
    path: "/SingleBodyPart/:bodyPart",
    name: "SingleBodyPartView",
    component: () => import("@/views/SingleBodyPartView.vue"),
    props: true,
  },
  {
    path: "/define-your-objectives",
    name: "Objectives",
    component: () => import("@/views/ObjectivesView.vue")
  },
  {
    path: "/:unknown(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: "smooth",
      };
    }
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from) => {
  console.log({
    to: to.path,
    from: from.path,
  });
});

export default router;
