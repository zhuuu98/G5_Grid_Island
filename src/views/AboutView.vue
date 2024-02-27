<template>
  <div class="about">
    <PageTitle :pageTitle="'關於我們'" />
    <div class="row">

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

          <div class="about_gi_intro" data-aos="fade-left" data-aos-mirror="true" data-aos-delay="200"
            data-aos-once="true" data-aos-duration="600" data-aos-offset="130">
            <!-- 手機版title -->
            <div class="about_gi_text_title_m">
              <h2>Grid Island</h2>
            </div>
            <div class="about_gi_text">
              <div class="about_gi_text_title">
                <h3>Grid Island</h3>
              </div>
              <div class="about_gi_text_content">
                <p>歡迎來到Grid
                  Island！我們是一家充滿活力的桌遊店，店裡的吉祥物是一隻可愛的小蟲。提供絕佳聚會空間和最新桌遊，讓你與家人、朋友或同事盡情玩樂。<br>想擴充收藏或找尋新遊戲？我們有多樣選擇！在溫馨舒適的環境中，你將享受無盡的遊戲樂趣。Grid
                  Island期待為你打造愉快的遊戲時光！</p>
              </div>
            </div>
            <div class="about_gi_img">
              <img src="../assets/images/about/about_intro.png" alt="about_intro">
            </div>
          </div>
        </div>
      </div>

      <!-- 環境介紹 -->
      <div class="about_en">
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
        <div class="about_row">
          <div class="about_en_section" data-aos="fade-right" data-aos-mirror="true" data-aos-delay="200"
            data-aos-once="true" data-aos-duration="600" data-aos-offset="180">
            <!-- 輪播圖 -->
            <div class="about_en_imgs">
              <Carousel v-model="value" :autoplay="true" :autoplay-speed="2000" :radius-dot="true">
                <!-- :dots="outside"  -->
                <!-- :trigger="click"  -->
                <!-- :arrow="false" -->
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
                  我們擁有多種遊戲和豐富的場地設施，無論你是想和三五好友玩遊戲、舉辦大型派對，還是享受私密包廂，我們都能滿足你的需求。
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
              <div class="btn_lg">
                <RouterLink to="/prebook">立即預約</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- griddy介紹 -->
      <div class="about_griddy">
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
        <div class="about_row">
          <div class="about_griddy_section">
            <div class="about_griddy_img">
              <img src="../assets/images/about/about_card.png" class="rotate-image" alt="ocean_2" data-aos="flip-left"
                data-aos-once="true" data-aos-duration="800" data-aos-offset="100">
            </div>
            <div class="about_griddy_text" data-aos="zoom-in" data-aos-once="true" data-aos-delay="400"
              data-aos-duration="600" data-aos-offset="0">
              <div class="about_griddy_title">
                <h3>Griddy</h3>
              </div>
              <div class="about_griddy_content">
                <p>
                  這是Grid Island的可愛吉祥物 -
                  <br>Griddy(小蟲)！<br>活潑好動的他總是迎接每一位遊客，帶來歡樂和笑容。他是我們店裡的快樂使者，喜歡玩遊戲、結交新朋友。與小蟲一起，遊戲永遠充滿驚喜和趣味！
                </p>
              </div>
              <div class="btn_lg">
                <RouterLink to="/griddy-style">
                  創造專屬蟲蟲
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 店鋪資訊 -->
      <div class="about_info">
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
        <div class="about_row">
          <div class="about_info_section" data-aos="fade-left" data-aos-once="true" data-aos-duration="600"
            data-aos-offset="400">
            <div class="about_info_text">
              <div class="about_info_title">
                <h3>店鋪資訊</h3>
              </div>
              <div class="about_info_content">
                <p>
                  Grid Island 座落在桃園市中壢區復興路46號9樓，是一個充滿活力的桌遊天堂。<br><br>
                  營業時間自周一至周日，早上9點至晚上9點，絕對是發揮你遊戲技巧的最佳去處。無論是和好友輕鬆一局，還是舉辦派對聚會，我們都是你的最佳選擇。<br><br>
                  有任何疑問或特殊需求，請隨時撥打我們的專線<br>
                  03-4251108，我們隨時為您服務。
                </p>
              </div>
            </div>
            <div class="about_info_map">
              <div id="shopMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import PageTitle from "../components/PageTitle.vue";
import { wave } from "../policy/wave.js";
export default {
  data() {
    return {
      zoom: 19,
      value: 0,
      wave: wave,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover',
      }
    };
  },
  components: {
    PageTitle,
  },
  methods: {
    // 取得leaflet marker圖片的路徑函式
    getMarkerSrc(imgName) {
      return new URL(`../assets/images/about/${imgName}`, import.meta.url).href
    },
  },
  mounted() {
    //leftlet
    const map = L.map('shopMap').setView([24.957672860339283, 121.22503247550222], 16)
    const blackIcon = new L.Icon({
      iconUrl: this.getMarkerSrc('marker.png'),
      iconSize: [70, 70],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: ''
    }).addTo(map);
    var marker = new L.marker([24.957672860339283, 121.22503247550222], { icon: blackIcon }).addTo(map);
    marker.bindPopup("<b>Grid Island 格線島</b><br>桃園市中壢區復興路46號8樓").openPopup();
  },
};
</script>

<style lang="scss">
//
</style>
