import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "首頁",
        showHeader: false, //打開這個即可不顯示header
        customHeaderPosition: true,  // 新增标记

      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Product1View.vue"),
    },
    {
      path: "/productInfo/:id",
      name: "productInfo",
      component: () => import("../views/ProductInfoView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/orderInfo",
      name: "orderInfo",
      component: () => import("../views/OrderInfoView.vue"),
    },
    {
      path: "/orderSuccess",
      name: "orderSuccess",
      component: () => import("../views/OrderSuccessView.vue"),
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
      path: "/prebook",
      name: "prebook",
      component: () => import("../views/PreBookView.vue"),
    },
    {
      path: "/book",
      name: "book",
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/BoardView.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/member",
      name: "member",
      component: () => import("../views/MemberView.vue"),
    },
    {
      path: "/griddy-style",
      name: "griddy-style",
      component: () => import("../views/griddyStyleView.vue"),
    },
    // 404要寫在最下面
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始終滾動到頂部
    return { top: 0 };
  },
});

router.beforeEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});
export default router;
