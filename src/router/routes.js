const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
  },
  {
    path: "/CesiemEarth",
    name: "CesiemEarth",
    component: () => import("../components/CesiemEarth.vue"),
  },
  {
    path: "/test1",
    name: "test1",
    component: () => import("@/views/Test/test1.vue"),
  },  {
    path: "/test2",
    name: "test2",
    component: () => import("@/views/Test/test2.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("../components/Page404.vue"),
  },
];
export default routes;
