<template>
  <main>
    <!-- banner -->
    <div class="header_banner" ref="bannerContainer">
      <img :src="bannerImage" alt="Home Banner" id="main-banner" />
      <router-link to="product">
        <img
          :src="games"
          alt="Banner games"
          id="games"
          @mouseenter="showGamesCard = true"
          @mouseleave="showGamesCard = false"
        />
      </router-link>
      <div v-if="showGamesCard" id="gamesCard" class="showCard">
        <p class="card-title">所有商品</p>
        <div class="card-line"></div>
        <p class="card-text">櫃中珍藏匯聚天下桌遊，於此揀選，尋心之所向。</p>
      </div>
      <img :src="roof" alt="Banner roof" id="roof" />
      <router-link to="member">
        <img
          :src="treeSvg"
          alt="Banner Tree"
          id="tree-svg"
          @mouseenter="showTreeCard = true"
          @mouseleave="showTreeCard = false"
        />
      </router-link>
      <div v-if="showTreeCard" id="treeCard" class="showCard">
        <p class="card-title">會員中心</p>
        <div class="card-line"></div>
        <p class="card-text">毛毛蟲之歸屬，於此粉墨衣裝、查看遊歷紀錄。</p>
      </div>
      <router-link to="board">
        <img
          :src="comment"
          alt="Banner comments"
          id="comment"
          @mouseenter="showCommentCard = true"
          @mouseleave="showCommentCard = false"
        />
      </router-link>
      <div v-if="showCommentCard" id="commentCard" class="showCard">
        <p class="card-title">留言板</p>
        <div class="card-line"></div>
        <p class="card-text">玩家交流之地，分享桌遊經驗，結織世界友誼。</p>
      </div>
      <router-link to="news">
        <img
          :src="news"
          alt="Banner News"
          id="news"
          @mouseenter="showNewsCard = true"
          @mouseleave="showNewsCard = false"
        />
      </router-link>
      <div v-if="showNewsCard" id="newsCard" class="showCard">
        <p class="card-title">最新消息</p>
        <div class="card-line"></div>
        <p class="card-text">板上新蹤，於此發掘格線島之近況與盛事。</p>
      </div>
      <router-link to="about">
        <img
          :src="sign"
          alt="Banner Sign"
          id="sign"
          @mouseenter="showSignCard = true"
          @mouseleave="showSignCard = false"
        />
      </router-link>
      <div v-if="showSignCard" id="signCard" class="showCard">
        <p class="card-title">關於我們</p>
        <div class="card-line"></div>
        <p class="card-text">格間交織於此島，譜寫桌遊新篇章。</p>
      </div>
      <router-link to="prebook">
        <img
          :src="reserve"
          alt="Banner Reserve"
          id="reserve"
          @mouseenter="showReserveCard = true"
          @mouseleave="showReserveCard = false"
        />
      </router-link>
      <div v-if="showReserveCard" id="reserveCard" class="showCard">
        <p class="card-title">預約場地</p>
        <div class="card-line"></div>
        <p class="card-text">墨書登記，備以預約遊戲之地，選擇良辰與桌戲。</p>
      </div>
      <!-- 蟲 -->
      <img :src="bug" alt="Banner Bug" id="bug" />
      <img :src="lEye" id="lEye" ref="leftEyeRef" />
      <img :src="rEye" id="rEye" ref="rightEyeRef" />
      <!-- 蟲 -->
      <img :src="bar" alt="Banner Bar" id="bar" />
      <router-link to="cart">
        <img
          :src="cart"
          alt="Banner Cart"
          id="cart"
          @mouseenter="showCartCard = true"
          @mouseleave="showCartCard = false"
        />
      </router-link>
      <div v-if="showCartCard" id="cartCard" class="showCard">
        <p class="card-title">購物車</p>
        <div class="card-line"></div>
        <p class="card-text">車中積載，點金訂物，妙趣橫生隨囊歸。</p>
      </div>
      <img :src="headerWave" id="headerWave" />
    </div>

    <MainHeader />
    <!-- 內容 -->
    <div class="index">
      <!-- 所有商品 -->
      <div class="index_products">
        <div class="index_row">
          <h2>所有商品</h2>
          <!-- 寫這邊 -->
          <div class="prodBackground">
            <div class="prodBreif">
              <p>
                　　我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。
                即使你不熟悉遊戲規則，也無需擔心，因為我們會親自指導你如何遊玩，
                一起加入桌遊的行列吧！
              </p>
            </div>
            <div class="prodMarquee">
              <div class="marqueeAnimation">
                <div class="productCard" v-for="item in productData">
                  <router-link
                    :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }"
                  >
                    <div class="productImg">
                      <img
                        :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
                      />
                    </div>
                    <div class="productName">
                      <p>{{ item.prod_name }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="productCard" v-for="item in productData">
                  <router-link
                    :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }"
                  >
                    <div class="productImg">
                      <img
                        :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
                      />
                    </div>
                    <div class="productName">
                      <p>{{ item.prod_name }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="productCard" v-for="item in productData">
                  <router-link
                    :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }"
                  >
                    <div class="productImg">
                      <img
                        :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
                      />
                    </div>
                    <div class="productName">
                      <p>{{ item.prod_name }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="searchArea">
            <div class="searchGroup">
              <div class="searchTitle">
                <label for="productSearch">搜尋遊戲</label>
              </div>
              <div class="searchInput">
                <input
                  type="text"
                  id="productSearch"
                  @input="handleSearch"
                  @focus="searchResultDisplay = true"
                  @blur="searchResultClose"
                  v-model="gameSearch"
                />
              </div>
              <div class="searchResult" v-show="searchResultDisplay">
                <p v-for="item in displayProdData">
                  <router-link
                    :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }"
                    >{{ item.prod_name }}</router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="prodBtn">
            <button class="btn_lg" @click="toProduct">所有商品</button>
          </div>
        </div>
      </div>

      <!-- <div class="wave">
        <img :src="wave" alt="bgcwave" id="wave1" />
      </div> -->

      <div class="home_ocean">
        <img src="/images/home/home_ocean_1.svg" alt="home_ocean_1">
      </div>

      <!-- 服務項目 -->
      <div class="index_service">
        <div class="index_row container">
          <!-- 寫這邊 -->
          <h2>服務項目</h2>
            <div class="serviceMarqueeContent" >
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_1.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>桌游販售</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_2.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>桌游販售</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_3.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>桌游遊玩教學</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_4.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>各式場地租借</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_1.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>桌游販售</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_2.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>桌游販售</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_3.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>桌游遊玩教學</p>
                  </div>
              </div>
              <div class="marqueePic">
                  <img src="../assets/images/home/servicePic_4.svg" alt="首頁服務項目">
                  <div class="marqueeText">
                    <p>各式場地租借</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div class="home_ocean">
        <img src="/images/home/home_ocean_2.svg" alt="home_ocean_2">
      </div>

      <!-- 預約方式 -->
      <div class="index_reserve">
        <div class="index_row container">
          <!-- 寫這邊 -->
          <h2>預約方式</h2>
          <div class="reserveInfo row">
            <div class="reserveContent col-6 col-T-10 col-PC-10">
              <!-- <img v-for="num in 3" :src="getImageUrl(`home/reserveInfo_${num}.png`)" alt="預約方式"> -->
              <div class="reserveStep1">
                <img src="../assets/images/home/reserveInfo_1.png" alt="" />
                <span>確認預約須知</span>
              </div>
              <div class="reserveStep2">
                <img src="../assets/images/home/reserveInfo_2.png" alt="" />
                <span>選擇人數、日期、時段</span>
              </div>
              <div class="reserveStep3">
                <img src="../assets/images/home/reserveInfo_3.png" alt="" />
                <span>選擇桌號，預約完成！</span>
              </div>
            </div>
          </div>
          <button class="btn_lg" @click="goBook()">預約場地</button>
        </div>
      </div>

      <!-- Griddy造型屋 -->
      <!-- <div class="index_griddy">
        <div class="index_row"></div>
      </div> -->

      <div class="home_ocean">
        <img src="/images/home/home_ocean_temp.svg" alt="home_ocean_temp">
      </div>

      <!-- 最新消息 -->
      <div class="index_news">
        <div class="index_row">
          <h2 class="h2" >最新消息</h2>
          <div class="news_card_content">
            <NewsCard
              v-for="(item, index) in latestData"
              :key="item.news_id"
              :newsTitle="item.news_title"
              :newsDate="item.news_date"
              :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"
              :newsId="item.news_id"
            />
          </div>
          <div class="news_button">
            <button class="btn_lg" @click="goNews()">所有最新消息</button>
          </div>
        </div>
      </div>

      <!-- 一起遊樂 IG API -->
      <!-- <div class="index_insta">
        <div class="index_row"> -->
          <!-- 寫這邊 -->
        <!-- </div>
      </div> -->

      <div class="home_ocean">
        <img src="/images/home/home_ocean_temp2.svg" alt="home_ocean_temp2">
      </div>

      <!-- Grid Island 關於我們 -->
      <div class="index_about">
        <div class="index_row">
          <!-- 寫這邊 -->
          <h2>Grid Island</h2>
          <!-- 中間圖片的外框 -->
          <div class="aboutContent">
            <!-- 桌機板的文字 -->
            <div class="aboutContentTxt">
              <p>
                　　我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。即使你不熟悉遊戲規則，也無需擔心，因為我們會親自指導你如何遊玩，一起加入桌遊的行列吧！
              </p>
            </div>
            <!-- 放圖片的地方 -->
            <div class="aboutContentImg">
              <img
                v-for="num in 3"
                :src="getImageUrl(`home/homeAbout_${num}.svg`)"
                alt="首頁關於我們"
              />
            </div>
          </div>
          <button class="btn_lg" @click="goAbout()">關於我們</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import bannerImage from "../assets/images/banner/gi_banner.png";
import treeSvg from "../assets/images/banner/centree.svg";
import news from "../assets/images/banner/news.svg";
import comment from "../assets/images/banner/comment.svg";
import roof from "../assets/images/banner/roof.svg";
import sign from "../assets/images/banner/sign.svg";
import games from "../assets/images/banner/games.svg";
import reserve from "../assets/images/banner/reserve.svg";
import cart from "../assets/images/banner/cart.svg";
import bar from "../assets/images/banner/bar.svg";
import bug from "../assets/images/banner/bug.svg";
import lEye from "../assets/images/banner/lEye.svg";
import rEye from "../assets/images/banner/rEye.svg";
import wave from "../assets/images/wave/wave.svg";
import { ref, onMounted, onUnmounted } from "vue";
import MainHeader from "../components/MainHeader.vue";
import headerWave from "../assets/images/header/headerWave.svg";

import NewsCard from "../components/NewsCard.vue";

export default {
  name: "HomeView",
  components: {
    MainHeader,
    NewsCard,
  },
  data() {
    return {
      bannerImage: bannerImage,
      treeSvg: treeSvg,
      news: news,
      comment: comment,
      roof: roof,
      sign: sign,
      games: games,
      reserve: reserve,
      cart: cart,
      bar: bar,
      bug: bug,
      showTreeCard: false, //會員中心，樹的卡片
      showSignCard: false, //關於我們，招牌
      showCommentCard: false, //留言板，留言板
      showNewsCard: false, //最新消息，最新消息
      showReserveCard: false, //場地預約，石檯
      showGamesCard: false, //所有商品，遊戲櫃
      showCartCard: false, //購物車，購物車
      wave: wave,
      lEye: lEye,
      rEye: rEye,
      headerWave: headerWave,
      respondData: [],
      latestData: [],
      productData: [],
      displayProdData: [],
      gameSearch: "",
      searchResultDisplay: false,
      serviceText:['桌遊販售','精釀啤酒與飲料','桌上遊戲遊玩與教學','各式場地租借']
    };
  },
  setup() {
    const leftEyeRef = ref(null);
    const rightEyeRef = ref(null);

    const moveEye = (
      eye,
      mouseX,
      mouseY,
      initialLeft,
      initialTop,
      maxMovementX,
      maxMovementY
    ) => {
      if (!eye.value) return;

      const eyeRect = eye.value.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      let deltaX = ((mouseX - eyeCenterX) / window.innerWidth) * 100;
      let deltaY = ((mouseY - eyeCenterY) / window.innerHeight) * 100;

      // 检查是否在椭圆形轨迹内
      if (
        (deltaX * deltaX) / (maxMovementX * maxMovementX) +
          (deltaY * deltaY) / (maxMovementY * maxMovementY) >
        1
      ) {
        const angle = Math.atan2(deltaY, deltaX);
        deltaX = maxMovementX * Math.cos(angle);
        deltaY = maxMovementY * Math.sin(angle);
      }

      eye.value.style.left = `calc(${initialLeft}% + ${deltaX}%)`;
      eye.value.style.top = `calc(${initialTop}% + ${deltaY}%)`;
    };

    const handleMouseMove = (event) => {
      requestAnimationFrame(() => {
        moveEye(
          leftEyeRef,
          event.clientX,
          event.clientY,
          51.0,
          38.5,
          0.51,
          1.36
        );
        moveEye(
          rightEyeRef,
          event.clientX,
          event.clientY,
          52.9,
          37.9,
          0.35,
          1.14
        );
      });
    };

    onMounted(() => {
      document.addEventListener("mousemove", handleMouseMove);
    });

    onUnmounted(() => {
      document.removeEventListener("mousemove", handleMouseMove);
    });

    return {
      leftEyeRef,
      rightEyeRef,
    };
  },
  created() {
    this.axiosGetData();
    this.axiosGetProductData();
  },
  mounted() {
    // 为整个容器添加事件监听器
    this.$refs.bannerContainer.addEventListener("mousedown", this.preventDrag);
  },
  beforeDestroy() {
    // 在组件销毁时移除事件监听器
    this.$refs.bannerContainer.removeEventListener(
      "mousedown",
      this.preventDrag
    );
  },
  methods: {
    preventDrag(event) {
      // 检查事件的目标是否是您想阻止拖拽的图像
      if (event.target.tagName === "IMG") {
        event.preventDefault();
      }
    },
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g1/phps/news_fetch.php")
        .then((res) => {
          this.respondData = res.data;
          // 將數據按日期降序排序
          // const sortedData = allData.sort((a, b) => new Date(b.date) - new Date(a.date));
          // 取得日期最新的4筆資料
          this.latestData = this.respondData.slice(0, 4);
          // 在這裡處理latest4Data，例如打印出來或進行其他操作
          // console.log('最新的4筆資料:', this.latestData);
        });
    },
    axiosGetProductData() {
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          this.productData = res.data;
          this.displayProdData = res.data;
          console.log(this.displayProdData);
        });
    },
    goNews() {
      this.$router.push("/news");
    },
    getImageUrl(paths) {
      //取得圖片路徑
      return new URL(`../assets/images/${paths}`, import.meta.url).href;
    },
    goBook() {
      this.$router.push("/PreBook");
    },
    toProduct() {
      this.$router.push("/product");
    },
    goAbout() {
      this.$router.push("/About");
    },
    handleSearch() {
      console.log(this.productData);
      this.displayProdData = this.productData.filter((item) => {
        return item.prod_name.includes(this.gameSearch);
      });
      console.log(this.displayProdData);
    },
    searchResultClose() {
      setTimeout(() => {
        // 关闭搜索建议列表的逻辑
        this.searchResultDisplay = false;
      }, 100);
    },
  },
};
</script>
