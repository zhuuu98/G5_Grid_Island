<template>
  <!-- header -->
  <header>
    <div>
      <div class="wrapper">
        <div class="logo_box">
          <RouterLink to="/" class="nav_link">
            <img src="../assets/images/header/gdidlogobox.svg" alt="header_logo">
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
                  <div class="nav_cart"><img src="../assets/images/header/header-cart.svg" alt="header-cart"></div>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/login" class="nav_link ">
                  <div class="nav_member"><img src="../assets/images/header/header-member.svg" alt="header-member"></div>
                </RouterLink>
              </li>



              <!-- 漢堡圖標 -->
              <li>
                <button @click="toggleMenu" class="ham_btn">
                  <div class="ham_btn_line"></div>
                  <div class="ham_btn_line2"></div>
                  <div class="ham_btn_line"></div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <transition name="slide-fade">
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
                <li>
                  <RouterLink to="#">留言區</RouterLink>
                </li>
                <li>
                  <RouterLink to="#">報隊區</RouterLink>
                </li>
              </ul>
            </div>

            <RouterLink to="/about" class="ham_link">關於我們</RouterLink>
            <RouterLink to="/cart" class="ham_link">購物車</RouterLink>
            <RouterLink to="/member" class="ham_link">會員中心</RouterLink>
          </div>
        </transition>

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
      menuOpen: false, //漢堡開關
      subMenuOpen: false, //玩家社群子階層
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
  mounted() { },
};
</script>

