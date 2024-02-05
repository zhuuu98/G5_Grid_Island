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
        customHeaderPosition: true, // 新增標記
      },
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title:"關於我們",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      meta: {
        title:"最新消息",
      },
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/newsArticle/:id",
      name: "newsArticle",
            meta: {
        title:"最新消息",
      },
      component: () => import("../views/NewsArticleView.vue"),
    },
    {
      path: "/product",
      name: "product",
            meta: {
        title:"所有商品",
      },
      component: () => import("../views/Product1View.vue"),
    },
    {
      path: "/productInfo/:id",
      name: "productInfo",
            meta: {
        title:"所有商品",
      },
      component: () => import("../views/ProductInfoView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
            meta: {
        title:"購物車",
      },
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/orderInfo",
      name: "orderInfo",
            meta: {
        title:"訂單資訊",
      },
      component: () => import("../views/OrderInfoView.vue"),
    },
    {
      path: "/orderSuccess",
      name: "orderSuccess",
            meta: {
        title:"訂購成功",
      },
      component: () => import("../views/OrderSuccessView.vue"),
    },
    {
      path: "/login",
      name: "login",
            meta: {
        title:"登入",
      },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
            meta: {
        title:"註冊",
      },
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/prebook",
      name: "prebook",
            meta: {
        title:"預約須知",
      },
      component: () => import("../views/PreBookView.vue"),
    },
    {
      path: "/book",
      name: "book",
            meta: {
        title:"現場預約",
      },
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/board",
      name: "board",
            meta: {
        title:"留言區",
      },
      component: () => import("../views/BoardView.vue"),
    },
    {
      path: "/team",
      name: "team",
            meta: {
        title:"報隊區",
      },
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/member",
      name: "member",
            meta: {
        title:"會員中心",
      },
      component: () => import("../views/MemberView.vue"),
    },
    {
      path: "/griddy-style",
      name: "griddy-style",
            meta: {
        title:"造型屋",
      },
      component: () => import("../views/griddyStyleView.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
            meta: {
        title:"隱私權政策",
      },
      component: () => import("../views/PrivacyPolicyView.vue"),
    },
    {
      path: "/test",
      name: "test",
            meta: {
        title:"劉書院",
        showHeader: false, //打開這個即可不顯示header
      },
      component: () => import("@/components/Banner.vue"),
    },
    {
      path: "/test2",
      name: "test2",
            meta: {
        title:"劉冠珍",
        showHeader: false, //打開這個即可不顯示header
      },
      component: () => import("@/views/HomeView_v2.vue"),
    },
    // 404要寫在最下面
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
            meta: {
        title:"404",
      },
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
