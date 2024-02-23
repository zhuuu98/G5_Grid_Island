<template>
  <main id="scroll-zone">

    <!-- banner首圖 -->
    <bannerComponent />

    <!-- header -->
    <MainHeader />

    <!-- 跑馬燈 -->
    <cuppon v-if="showCuppon" @closeTab="marqueeClose" />

    <!-- ⬇ 各個區塊內容 ⬇ -->
    <div class="index">

      <!-- 所有商品 區塊 -->
      <div class="indexContainer" id="indexContainer_products">

        <!-- 區塊的padding區，內容滿版於此，它和父層間隔-->
        <div class="index_row">

          <!-- 區塊內容 -->
          <h1 data-stroke="所有商品">所有商品</h1>

          <!-- 白色區塊 -->
          <div class="prodBackground">
            <div class="prodBreif">
              <p>
                我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。
                即使您不熟悉遊戲規則，也無需擔心，因為我們會親自指導您如何遊玩，
                一起加入桌遊的行列吧！
              </p>
            </div>
            <!-- 商品跑馬燈 -->
            <div class="prodMarquee">
              <div class="marqueeAnimation">
                <div class="productCard" v-for="item in productData">
                  <router-link :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }">
                    <div class="productImg">
                      <img :src="`https://tibamef2e.com/chd104/g5/image/prod/${item.prod_img1}`" />
                    </div>
                    <div class="productName">
                      <p>{{ item.prod_name }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="productCard" v-for="item in productData">
                  <router-link :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }">
                    <div class="productImg">
                      <img :src="`https://tibamef2e.com/chd104/g5/image/prod/${item.prod_img1}`" />
                    </div>
                    <div class="productName">
                      <p>{{ item.prod_name }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="productCard" v-for="item in productData">
                  <router-link :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }">
                    <div class="productImg">
                      <img :src="`https://tibamef2e.com/chd104/g5/image/prod/${item.prod_img1}`" />
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
                <input type="text" id="productSearch" @input="handleSearch" @focus="searchResultDisplay = true"
                  @blur="searchResultClose" v-model="gameSearch" />
              </div>
              <div class="searchResult" v-show="searchResultDisplay && displayProdData.length != 0">
                <p v-for="item in displayProdData">
                  <router-link :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }">{{ item.prod_name }}</router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="prodBtn">
            <button class="btn_lg" @click="toProduct">所有商品</button>
          </div>
        </div>
      </div>


      <!-- Griddy造型屋 -->
      <div class="indexContainer" id="indexContainer_griddystyle">
        <!-- 波浪 -->
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
        <div class="index_row">
          <h1 data-stroke="Griddy 造型屋">Griddy 造型屋</h1>
          <div id="griddystyle-contentbox">

          </div>

          <div id="griddystyle-btnbox">
            <button class="btn_lg" @click="goGriddyStyle">
              設計<span>Griddy！</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 服務項目 區塊-->
      <div class="indexContainer" id="indexContainer_service">

        <!-- 波浪 -->
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>

        <!-- 區塊的padding區，內容滿版於此，它和父層間隔-->
        <div class="index_row">

          <!-- 寫這邊 -->
          <h1 data-stroke="服務項目">服務項目</h1>

          <!-- 白色區塊 -->
          <div class="servicebackground">

            <!-- 跑馬燈區 -->
            <div class="serviceMarqueeContent">
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_1.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>桌遊販售</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_2.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>精釀啤酒與飲料</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_3.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>桌上遊戲遊玩與教學</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_4.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>各式場地租借</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_1.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>桌遊販售</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_2.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>桌遊販售</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_3.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>桌遊遊玩教學</span>
                </div>
              </div>
              <div class="marqueePic">
                <img src="../assets/images/home/servicePic_4.svg" alt="首頁服務項目" />
                <div class="marqueeText">
                  <span>各式場地租借</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="home_ocean">
        <img src="/images/home/home_ocean_2.svg" alt="home_ocean_2" />
      </div>

      <!-- 預約方式 -->
      <div class="index_reserve">
        <div class="index_row container">
          <!-- 寫這邊 -->
          <h1 data-stroke="預約方式">預約方式</h1>
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
      
      <!-- 最新消息 -->
      <div class="index_news">
        <div class="index_row">
          <h1 data-stroke="最新消息">最新消息</h1>
          <div class="news_card_content">
            <NewsCard v-for="(item, index) in latestData" :key="item.news_id" :newsTitle="item.news_title"
              :newsDate="item.news_date" :imgUrl="`https://tibamef2e.com/chd104/g5/image/news/${item.news_image}`"
              :newsId="item.news_id" />
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
        <img src="/images/home/home_ocean_temp2.svg" alt="home_ocean_temp2" />
      </div>

      <!-- Grid Island 關於我們 -->
      <div class="index_about">
        <div class="index_row">
          <!-- 寫這邊 -->
          <h1 data-stroke="Grid Island">Grid Island</h1>
          <!-- 中間圖片的外框 -->
          <div class="aboutContent">
            <!-- 桌機板的文字 -->
            <div class="aboutContentTxt">
              <p>
                我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。即使您不熟悉遊戲規則，也無需擔心，因為我們會親自指導您如何遊玩，一起加入桌遊的行列吧！
              </p>
            </div>
            <!-- 放圖片的地方 -->
            <div class="imgWrapper">
              <div class="aboutContentImg">
                <img v-for="num in 3" :src="getImageUrl(`home/homeAbout_${num}.svg`)" alt="首頁關於我們" />
              </div>
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
  import { ref, onMounted, onUnmounted } from "vue";
  import MainHeader from "../components/MainHeader.vue";
  import headerWave from "../assets/images/header/headerWave.svg";
  import NewsCard from "../components/NewsCard.vue";
  import bannerComponent from "../components/Banner.vue";
  import cuppon from "../components/Cuppon.vue";
  import { wave } from "../policy/wave.js";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  export default {
    name: "HomeView",
    components: {
      bannerComponent,
      MainHeader,
      NewsCard,
      cuppon,
    },
    data() {
      return {
        latestData: [],
        productData: [],
        displayProdData: [],
        gameSearch: "",
        searchResultDisplay: false,
        serviceText: [
          "桌遊販售",
          "精釀啤酒與飲料",
          "桌上遊戲遊玩與教學",
          "各式場地租借",
        ],
        showCuppon: true,
        newsData: [],
        wave: wave,
      };
    },
    created() {
      this.fetchNews();
      this.fetchProd();
    },
    methods: {
      preventDrag(event) {
        // 检查事件的目标是否是您想阻止拖拽的图像
        if (event.target.tagName === "IMG") {
          event.preventDefault();
        }
      },
      fetchNews() {
        let url = `${import.meta.env.VITE_API_URL}/getNews.php`;
        console.log(url);
        axios
          .get(url, {})
          .then(res => {
            console.log(res.data.news);
            this.newsData = res.data.news;
            this.latestData = this.newsData.slice(0, 4);
          })
          .catch(error => console.error('發生錯誤:', error))
      },
      fetchProd() {
        axios
          .post(`${import.meta.env.VITE_API_URL}/getProduct.php`)
          .then((res) => {
            this.productData = res.data.products;
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
      goGriddyStyle() {
        this.$router.push("/griddy-style");
      },

      handleSearch() {
        this.displayProdData = this.productData.filter((item) => {
          return item.prod_name.includes(this.gameSearch);
        });
        if (this.gameSearch == "") {
          this.displayProdData = [];
        }
      },
      searchResultClose() {
        setTimeout(() => {
          // 关闭搜索建议列表的逻辑
          this.searchResultDisplay = false;
        }, 100);
      },
      marqueeClose() {
        this.showCuppon = false;
      }
    },
  };
</script>