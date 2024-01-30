<template>
  <main>
    <!-- banner -->
    <div class="header_banner" ref="bannerContainer">
      <img :src="bannerImage" alt="Home Banner" id="main-banner" />
      <router-link to="product">
        <img :src="games" alt="Banner games" id="games" @mouseenter="showGamesCard = true" 
          @mouseleave="showGamesCard = false" />
      </router-link>
      <div v-if="showGamesCard" id="gamesCard" class="showCard">
        <p class="card-title">所有商品</p>
        <div class="card-line"></div>
        <p class="card-text">櫃中珍藏匯聚天下桌遊，於此揀選，尋心之所向。</p>
      </div>
      <img :src="roof" alt="Banner roof" id="roof" />
      <router-link to="member">
        <img :src="treeSvg" alt="Banner Tree" id="tree-svg" @mouseenter="showTreeCard = true" 
          @mouseleave="showTreeCard = false" />
      </router-link>
      <div v-if="showTreeCard" id="treeCard" class="showCard">
        <p class="card-title">會員中心</p>
        <div class="card-line"></div>
        <p class="card-text">毛毛蟲之歸屬，於此粉墨衣裝、查看遊歷紀錄。</p>
      </div>
      <router-link to="board">
        <img :src="comment" alt="Banner comments" id="comment" @mouseenter="showCommentCard = true" 
          @mouseleave="showCommentCard = false" />
      </router-link>
      <div v-if="showCommentCard" id="commentCard" class="showCard">
        <p class="card-title">留言板</p>
        <div class="card-line"></div>
        <p class="card-text">玩家交流之地，分享桌遊經驗，結織世界友誼。</p>
      </div>
      <router-link to="news">
        <img :src="news" alt="Banner News" id="news" @mouseenter="showNewsCard = true"
          @mouseleave="showNewsCard = false" />
      </router-link>
      <div v-if="showNewsCard" id="newsCard" class="showCard">
        <p class="card-title">最新消息</p>
        <div class="card-line"></div>
        <p class="card-text">板上新蹤，於此發掘格線島之近況與盛事。</p>
      </div>
      <router-link to="about">
        <img :src="sign" alt="Banner Sign" id="sign" @mouseenter="showSignCard = true"
          @mouseleave="showSignCard = false" />
      </router-link>
      <div v-if="showSignCard" id="signCard" class="showCard">
        <p class="card-title">關於我們</p>
        <div class="card-line"></div>
        <p class="card-text">格間交織於此島，譜寫桌遊新篇章。</p>
      </div>
      <router-link to="prebook">
        <img :src="reserve" alt="Banner Reserve" id="reserve" @mouseenter="showReserveCard = true"
          @mouseleave="showReserveCard = false" />
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
        <img :src="cart" alt="Banner Cart" id="cart" @mouseenter="showCartCard = true"
          @mouseleave="showCartCard = false" />
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
              <p>所有商品</p>
              <!-- 寫這邊 -->

            </div>
          </div>
          <div class="wave">
            <img :src="wave" alt="bgcwave" id="wave1" />
          </div>
          <!-- 服務項目 -->
          <div class="index_service">
            <div class="index_row">
              <p>服務項目</p>
              <!-- 寫這邊 -->


            </div>
          </div>
          <!-- 預約方式 -->
          <div class="index_reserve">
            <div class="index_row">
            <!-- 寫這邊 -->


            </div>
          </div>
          <!-- Griddy造型屋 -->
          <div class="index_griddy">
            <div class="index_row">
              
            </div>
          </div>
          <!-- 最新消息 -->
          <div class="index_news">
            <div class="index_row" style="height:500px">
            <h1>最新消息</h1>
            <div class="news_card_content">
              <NewsCard v-for="(item, index) in latestData" :key="item.news_id" :newsTitle="item.news_title" :newsDate="item.news_date" :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`" :newsId="item.news_id" />
            </div>
              
            </div>
          </div>
          <!-- 一起遊樂 IG API -->
          <div class="index_insta">
            <div class="index_row">
            <!-- 寫這邊 -->

              
            </div>
          </div>
          <!-- Grid Island 關於我們 -->
          <div class="index_about">
            <div class="index_row">
            <!-- 寫這邊 -->

              
            </div>
          </div>


    </div>


  </main>

</template>

<script>
  import axios from "axios";
  import bannerImage from '../assets/images/banner/gi_banner.png';
  import treeSvg from '../assets/images/banner/centree.svg';
  import news from '../assets/images/banner/news.svg';
  import comment from '../assets/images/banner/comment.svg';
  import roof from '../assets/images/banner/roof.svg';
  import sign from '../assets/images/banner/sign.svg';
  import games from '../assets/images/banner/games.svg';
  import reserve from '../assets/images/banner/reserve.svg';
  import cart from '../assets/images/banner/cart.svg';
  import bar from '../assets/images/banner/bar.svg';
  import bug from '../assets/images/banner/bug.svg';
  import lEye from '../assets/images/banner/lEye.svg';
  import rEye from '../assets/images/banner/rEye.svg';
  import wave from '../assets/images/wave/wave.svg';
  import { ref, onMounted, onUnmounted } from 'vue';
  import MainHeader from '../components/MainHeader.vue';
  import headerWave from '../assets/images/header/headerWave.svg'

  import NewsCard from "../components/NewsCard.vue";

  export default {
    name: 'HomeView',
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
      };
    },
    setup() {
      const leftEyeRef = ref(null);
      const rightEyeRef = ref(null);

      const moveEye = (eye, mouseX, mouseY, initialLeft, initialTop, maxMovementX, maxMovementY) => {
        if (!eye.value) return;

        const eyeRect = eye.value.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        let deltaX = ((mouseX - eyeCenterX) / window.innerWidth) * 100;
        let deltaY = ((mouseY - eyeCenterY) / window.innerHeight) * 100;

        // 检查是否在椭圆形轨迹内
        if ((deltaX * deltaX) / (maxMovementX * maxMovementX) + (deltaY * deltaY) / (maxMovementY * maxMovementY) > 1) {
          const angle = Math.atan2(deltaY, deltaX);
          deltaX = maxMovementX * Math.cos(angle);
          deltaY = maxMovementY * Math.sin(angle);
        }

        eye.value.style.left = `calc(${initialLeft}% + ${deltaX}%)`;
        eye.value.style.top = `calc(${initialTop}% + ${deltaY}%)`;
      };

      const handleMouseMove = (event) => {
        requestAnimationFrame(() => {
          moveEye(leftEyeRef, event.clientX, event.clientY, 51.0, 38.5, 0.51, 1.36);
          moveEye(rightEyeRef, event.clientX, event.clientY, 52.9, 37.9, 0.35, 1.14);
        });
      };

      onMounted(() => {
        document.addEventListener('mousemove', handleMouseMove);
      });

      onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMove);
      });

      return {
        leftEyeRef,
        rightEyeRef
      };
    },
  created() {
    this.axiosGetData();
  },
  mounted() {
  // 为整个容器添加事件监听器
  // this.$refs.bannerContainer.addEventListener('mousedown', this.preventDrag);
  },
  beforeDestroy() {
    // 在组件销毁时移除事件监听器
    this.$refs.bannerContainer.removeEventListener('mousedown', this.preventDrag);
  },
  methods: {
    preventDrag(event) {
      // 检查事件的目标是否是您想阻止拖拽的图像
      if (event.target.tagName === 'IMG') {
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
  }
    




  };
</script>