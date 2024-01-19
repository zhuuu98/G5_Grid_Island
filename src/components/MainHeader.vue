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
          
          <!-- 漢堡圖標 -->
          <!-- 漢堡圖標 -->
          <button @click="toggleMenu" class="ham_btn">
            <div class="ham_btn_line"></div>
            <div class="ham_btn_line"></div>
            <div class="ham_btn_line"></div>
          </button>
        </div>
          
        <!-- 選單內容 -->
        <div v-if="menuOpen" class="ham_menu">
          <!-- 選單項目 -->
          <RouterLink to="/reserve" class="ham_link">預約場地</RouterLink>
          <RouterLink to="/product" class="ham_link">所有商品</RouterLink>
          <RouterLink to="/news" class="ham_link">最新消息</RouterLink>

          <!-- 玩家社群，含子階層 -->
          <div class="ham_link" @click="togglesubMenuOpen">
            玩家社群
            <ul class="submenu" v-show="subMenuOpen">
              <li><RouterLink to="#">留言區</RouterLink></li>
              <li><RouterLink to="#">報隊區</RouterLink></li>
            </ul>
          </div>

          <RouterLink to="/about" class="ham_link">關於我們</RouterLink>
          <RouterLink to="/cart" class="ham_link">購物車</RouterLink>
          <RouterLink to="/member" class="ham_link">會員中心</RouterLink>
        </div>

      
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

