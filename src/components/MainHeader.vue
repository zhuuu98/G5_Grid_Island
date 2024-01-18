<template>
  <header>
    <div class="wrapper">

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/News">News</RouterLink>
        <img src="../assets/images/header-logo.png" alt="header-logo">
      </nav> -->

      <div class="header-logo">
        <a href="#">
          <img src="../assets/images/header-logo.png" alt="header_logo">
        </a>
      </div>
      <div class="title">
        <nav>
          <ul>
            <li><a href="#">預約場地</a></li>
            <li><a href="#">
              <img src="../assets/images/header-cart.svg" alt="header-cart">
            </a></li>
            <li><a href="#">
              <img src="../assets/images/header-member.svg" alt="header-member">
            </a></li>
          </ul>
        </nav>
            
        <input type="checkbox" id="hamburger">
        <label class="ham" id="ham" for="hamburger">
            <span class="ham-bar" id="hamBar1"></span>
            <span class="ham-bar" id="hamBar2"></span>
            <span class="ham-bar" id="hamBar3"></span>
        </label>

        <nav class="ham-menu">
          <ul class="ham-menu-nav">

            <li><a href="#">預約場地</a></li>
            <li><a href="#">所有商品</a></li>
            <li><a href="#">最新消息</a></li>

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

            <li><a href="#">關於我們</a></li>
            <li><a href="#">購物車</a></li>
            <li><a href="#">會員中心</a></li>
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

