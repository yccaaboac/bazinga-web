import Vue from "vue";
import Router from "vue-router";
import Layout from "../layout";
import Welcome from "../components/Welcome";

Vue.use(Router);

// component里面还有<router-view />，才有children: [...]
export const constantRouterMap = [
  {
    path: "/welcome",
    component: Welcome,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/welcome",
    children: [
      {
        path: "home",
        component: (resolve) => require(["@/views/home"], resolve),
        name: "Home",
        meta: { title: "首页" },
      },
      {
        path: "blog",
        component: (resolve) => require(["@/views/blog"], resolve),
        name: "Blog",
        meta: { title: "博客详情" },
      },
      {
        path: "resource",
        component: (resolve) => require(["@/views/resource"], resolve),
        name: "Resource",
        meta: { title: "资源分享" },
      },
    ],
  },
];

export default new Router({
  mode: "history",
  routes: constantRouterMap,
});
