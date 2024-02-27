<template>
  <!-- header -->
  <header :class="headerClass">
    <div>
      <div class="wrapper">
        <div class="logo_box">
          <RouterLink to="/" class="nav_link">
            <img src="../assets/images/header/gdidlogobox.png" alt="header_logo">
          </RouterLink>
        </div>
        <div class="header_icons">
          <nav>
            <ul>
              <li>
                <RouterLink to="/prebook" class="nav_link">預約場地</RouterLink>
              </li>
              <li>
                <RouterLink to="/cart" class="nav_link">
                  <div class="nav_cart"><img src="../assets/images/header/header-cart.svg" alt="header-cart"></div>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/login" class="nav_link ">
                  <div class="nav_member_login" v-if="userData && userData.mem_profile">
                    <img class="header_login_profile" :src="fullImageUrl(userData.mem_profile)" alt="會員頭貼">
                  </div>
                  <div class="nav_member" v-else>
                    <img src="../assets/images/header/header-member.svg" alt="header-member">
                  </div>
                </RouterLink>
              </li>
              <!-- 漢堡圖標 -->
              <li>
                <button @click="toggleMenu" class="ham_btn">
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
            <div class="ham_menu_bg">
              <!-- 漢堡內圖標 -->
              <li class="inside_ham_btn">
                <button @click="toggleMenu" class="ham_btn2">
                  <div :class="{ 'active-line1': menuOpen }" class="ham_btn2_line1"></div>
                  <div :class="{ 'active-line3': menuOpen }" class="ham_btn2_line3"></div>
                </button>
              </li>
              <RouterLink to="/" class="ham_logo">
                <img src="../assets/images/header/gdidlogobox.png" alt="gdidlogobox">
              </RouterLink>
              <!-- 選單項目 -->
              <div class="ham_links">
                <RouterLink to="/prebook" class="ham_link ham_prebook">預約場地</RouterLink>
                <div class="ham_hover_prebook ham_hover">Reservation</div>
                <RouterLink to="/product" class="ham_link ham_products">所有商品</RouterLink>
                <div class="ham_hover_products ham_hover">Products</div>
                <RouterLink to="/news" class="ham_link ham_news">最新消息</RouterLink>
                <div class="ham_hover_news ham_hover">NEWS</div>
                <!-- 玩家社群，含子階層 -->
                <div class="ham_comm" @click="toggleSubMenuOpen">
                  <div class="ham_link ham_comm">玩家社群
                    <font-awesome-icon :icon="['fas', 'angle-right']" class="ham_angle_right" />
                  </div>
                  <div class="ham_hover_comm ham_hover">Community</div>
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
                <div class="ham_hover_about ham_hover">About Us</div>
                <RouterLink to="/cart" class="ham_link ham_cart">購物車</RouterLink>
                <div class="ham_hover_cart ham_hover">Cart</div>
                <RouterLink to="/member" class="ham_link ham_member">會員中心</RouterLink>
                <div class="ham_hover_member ham_hover">Member</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import userStore from '@/stores/user'
import { mapActions } from 'pinia';
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      menuOpen: false, //漢堡開關
      subMenuOpen: false, //玩家社群子階層
      hamX: false,
      userStoreData: userStore()
    };
  },
  computed: {
    headerClass() {
      return {
        'sticky-header': this.$route.path === '/' // 如果是首頁，添加 sticky-header
      };
    },
    // 登入的會員資料
    userData() {
      return this.userStoreData.userData || {}
    },
  },
  methods: {
    ...mapActions(userStore, ['updateUserData']),
    getProfile() {
      axios
        .post(`${import.meta.env.VITE_API_URL}/headerProfile.php`, {})
        .then(res => {
          // console.log(res.data);
          this.reData = res.data.Report;
        })
        .catch(error => console.error('發生錯誤:', error))
    },
    toggleMenu() {
      // 切換 menuOpen 的值
      this.menuOpen = !this.menuOpen;
      // 如果 toggleMenu 為 true，同步將 subMenuOpen 設為 false
      if (this.toggleMenu) {
        this.subMenuOpen = false;
      };
      if (this.menuOpen) {
        document.body.classList.add('body-overflow-hidden');
      } else {
        document.body.classList.remove('body-overflow-hidden');
      }
    },
    toggleSubMenuOpen() {
      this.subMenuOpen = !this.subMenuOpen;
    },
    //登入後更換大頭貼
    fullImageUrl(memProfile) {
      return `${import.meta.env.VITE_API_URL}/images/mem/${memProfile}`;
    },
  },
  mounted() {
    // 監聽路由切換
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
    //將登入的會員資料由json改為陣列
    const userData = JSON.parse(localStorage.getItem("userDataStr"));
    this.updateUserData(userData);
  },
};
</script>