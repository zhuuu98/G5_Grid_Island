<template>
  <!-- header -->
  <header>
    <div class="wrapper">
      <div class="header_logo">
        <a href="#">
          <img src="../assets/images/header-logo.png" alt="header_logo">
        </a>
      </div>

      <div class="header_icons">
        <nav>
          <ul>
            <RouterLink to="#" class="nav_link">預約場地</RouterLink>
            
            <RouterLink to="#" class="nav_link">
              <div class="header_icon"><img src="../assets/images/header-cart.svg" alt="header-cart"></div>
            </RouterLink>

            <RouterLink to="/login" class="nav_link">
              <div class="header_icon"><img src="../assets/images/header-member.svg" alt="header-member"></div>
            </RouterLink>

          </ul>
        </nav>

        <!-- 漢堡 -->
        <input type="checkbox" id="hamburger">
        <label class="ham" id="ham" for="hamburger">
            <span class="ham-bar" id="hamBar1"></span>
            <span class="ham-bar" id="hamBar2"></span>
            <span class="ham-bar" id="hamBar3"></span>
        </label>

        <!-- 漢堡內頁 -->
        <nav class="ham-menu">
          <ul class="ham-menu-nav">

            <RouterLink to="#">預約場地</RouterLink>
            <RouterLink to="#">所有商品</RouterLink>
            <RouterLink to="#">最新消息</RouterLink>

            <li class="products-li">
              <a href="#">玩家社群</a>
              <input type="checkbox"  id="sub-switch">
                <label for="sub-switch" class="icon">
                  <img src="../assets/images/header-ham-bug.png" alt="header-ham-bug">
                </label>
                <ul class="ham-dropdown">
                    <li><a href="#">留言區</a></li>
                    <li><a href="#">報隊區</a></li>
                </ul>
            </li>

            <RouterLink to="#">關於我們</RouterLink>
            <RouterLink to="#">購物車</RouterLink>
            <RouterLink to="#">會員中心</RouterLink>
          </ul>
        </nav>
        
      </div>

    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>

