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
            <!-- 使用模板字串動態生成每行的 ID -->
            <!-- <div v-for="(row, rowIndex) in griddyPicsChunks" :key="`row-${rowIndex}`"
              :id="`griddyPic-row${rowIndex + 1}`" class="griddyPic-row">
              <div class="imagebox" v-for="(pic, picIndex) in row" :key="`pic-${picIndex}`">
                <img :src="pic" alt="">

              </div>
            </div> -->
            <div class="griddyPic-row" id="griddyPic-row1">
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/1.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/2.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/3.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/4.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/5.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/6.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/7.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/8.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/9.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/10.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/11.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/12.png" alt="">
              </div>
            </div>
            <div class="griddyPic-row" id="griddyPic-row2">
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/13.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/14.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/15.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/16.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/17.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/18.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/19.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/20.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/21.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/22.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/23.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/24.png" alt="">
              </div>
            </div>
            <div class="griddyPic-row" id="griddyPic-row3">
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/25.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/26.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/27.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/28.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/29.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/30.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/31.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/32.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/33.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/34.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/35.png" alt="">
              </div>
              <div class="imagebox">
                <img src="../assets/images/home/griddyPic/36.png" alt="">
              </div>
            </div>
          </div>


          <div id="griddystyle-btnbox">
            <button class="btn_lg" @click="goGriddyStyle">
              設計<span>Griddy</span>
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

      <!-- 預約方式 -->
      <!-- <div class="indexContainer" id="indexContainer_griddystyle"> -->
      <div class="indexContainer" id="indexContainer_reserve">
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
        <div class="index_row">
          <!-- 預約方式內容 -->
          <h1 data-stroke="預約方式">預約方式</h1>


          <div class="reserveInfo">
            <!-- <div class="reserveContent col-6 col-T-10 col-PC-10"> -->

            <div class="reserveContent">
              <!-- <img v-for="num in 3" :src="getImageUrl(`home/reserveInfo_${num}.png`)" alt="預約方式"> -->
              <div class="reserveStep1 reserveStep">
                <img src="../assets/images/home/reserveInfo_1.png" alt="" />
                <span>確認預約須知</span>
              </div>
              <div class="reserveStep2 reserveStep">
                <img src="../assets/images/home/reserveInfo_2.png" alt="" />
                <span>選擇日期、桌型、時段</span>
              </div>
              <div class="reserveStep3 reserveStep">
                <img src="../assets/images/home/reserveInfo_3.png" alt="" />
                <span>選擇人數，預約完成！</span>
              </div>
            </div>
          </div>
          <button class="btn_lg" @click="goBook()">預約場地</button>
        </div>
      </div>

      <!-- 最新消息 -->
      <div class="indexContainer" id="indexContainer_news">
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
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

      <!-- Grid Island 關於我們 -->
      <div class="indexContainer" id="indexContainer_about">
        <div class="wave-imagebox">
          <div v-html="wave" class="wave"></div>
        </div>
        <div class="index_row">
          <!-- 寫這邊 -->
          <span data-stroke="Grid Island">Grid Island</span>
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
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  gsap.registerPlugin(ScrollTrigger);

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
        // griddyPics: [], // 存儲後端返回的圖片數據
        // totalPicsNeeded: 36, // 希望展示的图片总数
      };
    },
    created() {
      this.fetchNews();
      this.fetchProd();
    },
    mounted() {
      // this.initLocomotiveScroll();
      this.setupGriddyPicAnimation();
      // this.griddyAnimations();
      // this.fetchGriddyPicData();
    },
    // computed: {
    //   griddyPicsChunks() {
    //     const picsPerRow = 12; // 每行圖片數量，可根據需求調整
    //     return this.griddyPics.reduce((acc, pic, index) => {
    //       const rowIndex = Math.floor(index / picsPerRow);
    //       if (!acc[rowIndex]) {
    //         acc[rowIndex] = [];
    //       }
    //       acc[rowIndex].push(pic);
    //       return acc;
    //     }, []);
    //   },
    // },
    methods: {
      // fetchGriddyPicData() {
      //   const apiUrl = import.meta.env.VITE_API_URL;
      //   fetch(`${import.meta.env.VITE_API_URL}/getGriddyPic.php`, {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     }
      //   })
      //     .then(response => response.json())
      //     .then(data => {
      //       const numberOfDefaultPicsNeeded = this.totalPicsNeeded - data.data.length;
      //       const updatedData = data.data.map(picRelativePath => `${apiUrl}/${picRelativePath}`);
      //       const defaultPics = this.getDefaultPics(numberOfDefaultPicsNeeded);

      //       this.griddyPics = [...updatedData, ...defaultPics];
      //       this.$nextTick(() => {
      //         this.setupGriddyPicAnimation();
      //       });
      //     })
      //     .catch(error => console.error('请求失败:', error));
      // },
      // getDefaultPics(numberOfPics) {
      //   // 假设 defaultPicsArray 是一个包含大量默认图片 URL 的数组
      //   const defaultPicsArray = [
      //     'src/assets/images/home/griddyPic/1.png',
      //     'src/assets/images/home/griddyPic/2.png',
      //     'src/assets/images/home/griddyPic/3.png',
      //     'src/assets/images/home/griddyPic/4.png',
      //     'src/assets/images/home/griddyPic/5.png',
      //     'src/assets/images/home/griddyPic/6.png',
      //     'src/assets/images/home/griddyPic/7.png',
      //     'src/assets/images/home/griddyPic/8.png',
      //     'src/assets/images/home/griddyPic/9.png',
      //     'src/assets/images/home/griddyPic/10.png',
      //     'src/assets/images/home/griddyPic/11.png',
      //     'src/assets/images/home/griddyPic/12.png',
      //     'src/assets/images/home/griddyPic/13.png',
      //     'src/assets/images/home/griddyPic/14.png',
      //     'src/assets/images/home/griddyPic/15.png',
      //     'src/assets/images/home/griddyPic/16.png',
      //     'src/assets/images/home/griddyPic/17.png',
      //     'src/assets/images/home/griddyPic/18.png',
      //     'src/assets/images/home/griddyPic/19.png',
      //     'src/assets/images/home/griddyPic/20.png',
      //     'src/assets/images/home/griddyPic/21.png',
      //     'src/assets/images/home/griddyPic/22.png',
      //     'src/assets/images/home/griddyPic/23.png',
      //     'src/assets/images/home/griddyPic/24.png',
      //     'src/assets/images/home/griddyPic/25.png',
      //     'src/assets/images/home/griddyPic/26.png',
      //     'src/assets/images/home/griddyPic/27.png',
      //     'src/assets/images/home/griddyPic/28.png',
      //     'src/assets/images/home/griddyPic/29.png',
      //     'src/assets/images/home/griddyPic/30.png',
      //     'src/assets/images/home/griddyPic/31.png',
      //     'src/assets/images/home/griddyPic/32.png',
      //     'src/assets/images/home/griddyPic/33.png',
      //     'src/assets/images/home/griddyPic/34.png',
      //     'src/assets/images/home/griddyPic/35.png',
      //     'src/assets/images/home/griddyPic/36.png',
      //     // 确保这个数组有足够的默认图片
      //   ];
      //   return defaultPicsArray.slice(0, numberOfPics);
      // },


      setupGriddyPicAnimation() {
        // #griddyPic-row1 的動畫設置
        gsap.to("#griddyPic-row1", {
          x: 420, // 向左移動
          ease: "none",
          scrollTrigger: {
            trigger: "#griddyPic-row1",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
            duration: 1,

          },
        });

        // #griddyPic-row2 的動畫設置，反向移動
        gsap.to("#griddyPic-row2", {
          x: -600, // 向右移動，反方向
          ease: "none",
          scrollTrigger: {
            trigger: "#griddyPic-row2",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
            duration: 1,

          },
        });

        // #griddyPic-row3 的動畫設置
        gsap.to("#griddyPic-row3", {
          x: 1000, // 向左移動
          ease: "none",
          scrollTrigger: {
            trigger: "#griddyPic-row3",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
            duration: 1,
          },
        });
      },






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