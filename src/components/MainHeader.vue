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
                <RouterLink to="/prebook" class="nav_link">預約場地</RouterLink>
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
              <RouterLink to="/prebook" class="ham_link ham_prebook">預約場地</RouterLink>
              <p class="ham_hover_prebook ham_hover">Reservation</p>

              <RouterLink to="/product" class="ham_link ham_products">所有商品</RouterLink>
              <p class="ham_hover_products ham_hover">Products</p>

              <RouterLink to="/news" class="ham_link ham_news">最新消息</RouterLink>
              <p class="ham_hover_news ham_hover">NEWS</p>

              <!-- 玩家社群，含子階層 -->
              <div class="ham_comm" @click="toggleSubMenuOpen">
                <div class="ham_link ham_comm">玩家社群
                  <font-awesome-icon :icon="['fas', 'angle-right']" class="ham_angle_right"/>
                </div>
                <p class="ham_hover_comm ham_hover">Community</p>

                <ul class="submenu" v-show="subMenuOpen">
                  <li class="ham_sub_bug">
                    <img src="../assets/images//header/griddy_orange.png" alt="am_sub_bug" class="running">
                  </li>
                  <div>
                    <li class="ham_sub_comm">
                      <RouterLink to="/board">留言區</RouterLink>
                    </li>
                    <li class="ham_sub_comm">
                      <RouterLink to="/team">報隊區</RouterLink>
                    </li>
                  </div>
                </ul>
              </div>
              <RouterLink to="/about" class="ham_link ham_about">關於我們</RouterLink>
              <p class="ham_hover_about ham_hover">About Us</p>

              <RouterLink to="/cart" class="ham_link ham_cart">購物車</RouterLink>
              <p class="ham_hover_cart ham_hover">Cart</p>

              <RouterLink to="/member" class="ham_link ham_member">會員中心</RouterLink>
              <p class="ham_hover_member ham_hover">Member</p>
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
      // 切換 menuOpen 的值
      this.menuOpen = !this.menuOpen;
      // 如果 toggleMenu 為 true，同步將 subMenuOpen 設為 false
      if (this.toggleMenu) {
        this.subMenuOpen = false;
      };
      // 打開漢堡選單後，隱藏卷軸。
      // if(this.menuOpen === true){
      //   document.body.classList.add('body-overflow-hidden');
      // }else if(this.menuOpen === false){
      //   document.body.classList.remove('body-overflow-hidden');
      // }

      if (this.menuOpen) {
        document.body.classList.add('body-overflow-hidden');
      } else {
        document.body.classList.remove('body-overflow-hidden');
      }
    },
    toggleSubMenuOpen() {
    this.subMenuOpen = !this.subMenuOpen;
    },
  },
  mounted() {
    this.$router.afterEach(() => {
    this.menuOpen = false; // 關閉漢堡選單
  });

   // 在路由切換後執行的邏輯
    this.$router.afterEach(() => {
      // 關閉漢堡選單
      this.menuOpen = false;
      // 恢復卷軸
      document.body.classList.remove('body-overflow-hidden');
    });
  
  },
};
</script>

