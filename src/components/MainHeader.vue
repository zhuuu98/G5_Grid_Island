<template>
  <!-- header -->
  <header>
    <div>
      <div class="wrapper">
        <div class="header_logo">
          <RouterLink to="/" class="nav_link">
            <img src="../assets/images/header-logo.png" alt="header_logo">
          </RouterLink>
        </div>
        <!-- <RouterLink to="/product" class="nav_link">商品</RouterLink> -->
        <div class="header_icons">
          <nav>
            <ul>
              <li>
                <RouterLink to="#" class="nav_link">預約場地</RouterLink>
              </li>
      
              <li>
                <RouterLink to="#" class="nav_link">
                  <div class="header_icon"><img src="../assets/images/header-cart.svg" alt="header-cart"></div>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/login" class="nav_link">
                  <div class="header_icon"><img src="../assets/images/header-member.svg" alt="header-member"></div>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      
          <!-- 漢堡 -->
          <!-- <input type="checkbox" id="hamburger">
          <label class="ham" id="ham" for="hamburger">
              <span class="ham-bar" id="hamBar1"></span>
              <span class="ham-bar" id="hamBar2"></span>
              <span class="ham-bar" id="hamBar3"></span>
          </label> -->
          <!-- 漢堡圖標 -->
            <div>
              <!-- 漢堡圖標 -->
              <button @click="toggleMenu">
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
              </button>

              <!-- 選單內容 -->
              <div v-if="menuOpen" class="menu-content">
                <!-- 選單項目 -->
                <RouterLink to="/reserve" class="nav_link">預約場地</RouterLink>
                <RouterLink to="/products" class="nav_link">所有商品</RouterLink>
                <RouterLink to="/news" class="nav_link">最新消息</RouterLink>

                <!-- 玩家社群，含子階層 -->
                <div class="nav_link" @click="togglesubMenuOpen">
                  玩家社群
                  <ul class="submenu" v-show="subMenuOpen">
                    <li><RouterLink to="#">留言區</RouterLink></li>
                    <li><RouterLink to="#">報隊區</RouterLink></li>
                  </ul>
                </div>

                <RouterLink to="/about" class="nav_link">關於我們</RouterLink>
                <RouterLink to="/cart" class="nav_link">購物車</RouterLink>
                <RouterLink to="/member" class="nav_link">會員中心</RouterLink>
              </div>
            </div>
            

          
          <!-- 漢堡內頁 -->
          <nav class="ham-menu">
            <ul class="ham-menu-nav">
              <li>
                <RouterLink to="#">預約場地</RouterLink>
              </li>
              <li>
                <RouterLink to="#">所有商品</RouterLink>
              </li>
              <li>
                <RouterLink to="#">最新消息</RouterLink>
              </li>
              <li class="products-li">
                <input type="checkbox" id="sub-switch">
                <RouterLink to="#">
                  <label for="sub-switch" class="icon">
                    玩家社群
                  </label>
                  <img src="../assets/images/header-ham-bug.png" alt="header-ham-bug">
                    <ul class="ham-dropdown">
                        <li><a href="#">留言區</a></li>
                        <li><a href="#">報隊區</a></li>
                    </ul>
                </RouterLink>
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
      menuOpen: false, // 添加這個屬性
      subMenuOpen: false,
      value: 0,
    };
  },
  methods: {
    toggleMenu() {
    this.menuOpen = !this.menuOpen;
    },
    togglesubMenuOpen() {
    this.subMenuOpen = !this.subMenuOpen;
  },
  },
  mounted() {},
};
</script>

