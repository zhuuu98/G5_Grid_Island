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
                  <!-- <div class="ham_btn_line1"></div>
                  <div class="ham_btn_line2"></div>
                  <div class="ham_btn_line3"></div> -->
                  <div :class="{ 'active-line1': menuOpen }" class="ham_btn_line1"></div>
                  <div :class="{ 'active-line2': menuOpen }" class="ham_btn_line2"></div>
                  <div :class="{ 'active-line3': menuOpen }" class="ham_btn_line3"></div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <transition name="ham_menu">
          <!-- 選單內容 -->
          <div v-if="menuOpen" class="ham_menu">

            <RouterLink to="/" class="ham_logo">
              <img src="../assets/images/header/gdidlogobox.svg" alt="">
            </RouterLink>

            <!-- 選單項目 -->
            <div class="ham_links">
              <RouterLink to="/reserve" class="ham_link">預約場地</RouterLink>
              <RouterLink to="/product" class="ham_link">所有商品</RouterLink>
              <RouterLink to="/news" class="ham_link">最新消息</RouterLink>
              <!-- 玩家社群，含子階層 -->
              <div class="ham_comm" @click="toggleSubMenuOpen">
                <div class="ham_link">玩家社群
                  <font-awesome-icon :icon="['fas', 'angle-right']" class="ham_angle_right"/>
                </div>
                <ul class="submenu" v-show="subMenuOpen">
                  <li class="ham_sub_bug">
                    <img src="../assets/images//header/griddy_orange.png" alt="am_sub_bug" class="running">
                  </li>
                  <div>
                    <li class="ham_sub_comm">
                      <RouterLink to="#">留言區</RouterLink>
                    </li>
                    <li class="ham_sub_comm">
                      <RouterLink to="#">報隊區</RouterLink>
                    </li>
                  </div>
                </ul>
              </div>
              <RouterLink to="/about" class="ham_link">關於我們</RouterLink>
              <RouterLink to="/cart" class="ham_link">購物車</RouterLink>
              <RouterLink to="/member" class="ham_link">會員中心</RouterLink>
            </div>
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
      hamX: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleSubMenuOpen() {
      this.subMenuOpen = !this.subMenuOpen;
    },
  },
  mounted() {
    this.$router.afterEach(() => {
    this.menuOpen = false; // 關閉漢堡選單
  });
  },
};
</script>

