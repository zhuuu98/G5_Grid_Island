<template>
  <div class="about">
    <PageTitle :pageTitle="'關於我們'" />
    <!-- <div class="container"> -->
      <div class="row">
        <!-- <div class="col-PC-12 col-T-10 col-12"> -->

          
          <!-- 內容區 -->
          <!-- GridIsland簡介 -->
          <div class="about_gi">
            <div class="about_row">
              <!-- 麵包屑 -->
              <div class="breadcrumb">
                <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
                  <BreadcrumbItem to="/">首頁</BreadcrumbItem>
                  <BreadcrumbItem to="/about">關於我們</BreadcrumbItem>
                </Breadcrumb>
              </div>

              <div class="about_gi_intro">
                <!-- 手機版title -->
                <div class="about_gi_text_title_m">
                  <p>Grid Island</p>
                </div>
                <div class="about_gi_text">
                  <div class="about_gi_text_title">
                    <!-- <h3>Grid Island</h3> -->
                    <h3>Grid Island</h3>
                  </div>
                  <div class="about_gi_text_content">
                    <p>歡迎來到Grid Island！我們是一家充滿活力的桌遊店，店裡的吉祥物是一隻可愛的小蟲。提供絕佳聚會空間和最新桌遊，讓你與家人、朋友或同事盡情玩樂。<br>想擴充收藏或找尋新遊戲？我們有多樣選擇！在溫馨舒適的環境中，你將享受無盡的遊戲樂趣。Grid Island期待為你打造愉快的遊戲時光！</p>
                  </div>
                </div>
                <div class="about_gi_img">
                  <img src="../assets/images/about/about_intro.svg" alt="about_intro">
                </div>
              </div>
            </div>
          </div>
          <!-- 環境介紹 -->
          <div class="about_en">
            <div class="about_row">
              <div class="about_en_section">
                <!-- 輪播圖 -->
                <div class="about_en_imgs">
                  <Carousel
                    v-model="value"
                    :autoplay="true"
                    :autoplay-speed="2000"
                    :dots="outside"
                    :radius-dot="true"
                    :trigger="click"
                    :arrow="false">
                    <!-- 輪播圖一 -->
                    <CarouselItem>
                        <div class="about_demo-carousel">
                          <img class="is_m" src="../assets/images/about/about_en_1_m.jpg" alt="en_1">
                          <img class="is_d" src="../assets/images/about/about_en_1.jpg" alt="en_1">
                        </div>
                      </CarouselItem>
                      <!-- 輪播圖二 -->
                      <CarouselItem>
                        <div class="about_demo-carousel">
                          <img class="is_m" src="../assets/images/about/about_en_3_m.jpg" alt="en_3">
                          <img class="is_d" src="../assets/images/about/about_en_3.jpg" alt="en_3">
                        </div>
                      </CarouselItem>
                      <!-- 輪播圖三 -->
                      <CarouselItem>
                        <div class="about_demo-carousel">
                          <img class="is_m" src="../assets/images/about/about_en_5_m.jpg" alt="en_5">
                          <img class="is_d" src="../assets/images/about/about_en_5.jpg" alt="en_5">
                        </div>
                    </CarouselItem>
                  </Carousel>
                </div>
                <!-- 環境敘述 -->
                <div class="about_en_text">
                  <div class="about_en_text_title">
                    <h3>店內環境</h3>
                  </div>
                  <div class="about_en_text_content">
                    <p>
                      歡迎來到Grid Island！我們擁有多種遊戲和豐富的場地設施，無論你是想和三五好友玩遊戲、舉辦大型派對，還是享受私密包廂，我們都能滿足你的需求。
                    </p>
                    <p>
                      在這裡，你可以找到四人桌、八人桌和十二人包廂，適合各種不同大小的團體聚會。超過200款遊戲等著你來挑選，涵蓋策略、派對、家庭等各式各樣的遊戲，讓你盡情享受遊戲的樂趣。
                    </p>
                    <p>
                      除了遊戲，我們還提供各種美食、飲料和酒精飲料，讓你在遊戲間隙能品嘗美味的炸物或餐飲，提振精神。
                    </p>
                    <p>
                      此外，如果你計畫舉辦派對或特殊活動，我們也能提供場地包場服務，打造專屬於你的派對體驗。
                    </p>
                  </div>
                
                  <div class="about_re_btn">
                    <RouterLink to="/prebook" class="btn_lg">立即預約</RouterLink>
                  </div>
                
                </div>
              </div>
            </div>
          </div>

          <!-- griddy介紹 -->
          <div class="about_griddy">
            <div class="about_row">
              <div class="about_griddy_section">
                <div class="about_griddy_img">
                  <img src="../assets/images/about/about_card.svg" alt="">
                </div>
                <div class="about_griddy_text">
                  <div class="about_griddy_title">
                    <h3>Griddy</h3>
                  </div>
                  <div class="about_griddy_content">
                    <p>
                      這裡是Grid Island的可愛吉祥物 - 小蟲！活潑好動的他總是迎接每一位遊客，帶來歡樂和笑容。他是我們店裡的快樂使者，喜歡玩遊戲、結交新朋友。與小蟲一起，遊戲永遠充滿驚喜和趣味！
                    </p>
                  </div>
                  <div class="about_griddy_btn">
                    <RouterLink to="/login" class="btn_lg">
                      創造專屬蟲蟲
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 店鋪資訊 -->
          <div class="about_info"></div>



        </div>
      <!-- </div> -->
    </div>
  <!-- </div> -->
</template>


<script>
// import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
export default {
  data() {
    return { 
      value: 0,
      setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
      }
    };
  },
  computed: {
    
  },
  components: {
    PageTitle,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">

</style>
