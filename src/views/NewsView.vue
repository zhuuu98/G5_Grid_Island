<template>
  <main class="news">
    <transition name="fade">
      <div class="loadingMask" v-if="loading" name="fade">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </transition>
    <!-- <div class="newsTitle">
      <h1>
        <PageTitle :pageTitle="'最新消息'" />
      </h1>
    </div> -->
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

      <div class="index_products">
        <div class="index_row">
          <h2>服務項目</h2>
          <!-- 寫這邊 -->
          <div class="prodBackground">
            <div class="prodBreif">
              <!-- <p>
                　　我們精選了3000種桌上遊戲，涵蓋了從熱門到冷門的各種類型。
                即使你不熟悉遊戲規則，也無需擔心，因為我們會親自指導你如何遊玩，
                一起加入桌遊的行列吧！
              </p> -->
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

    <div class="content">
      <div class="btn">
        <div class="thBtn" @click="romoveListClassName">
          <font-awesome-icon :icon="['fas', 'th']" />
        </div>
        <div class="listBtn" @click="addListClassName">
          <font-awesome-icon :icon="['fas', 'th-list']" />
        </div>
      </div>
      <div class="cardList">
        <NewsCard
          v-for="(item, index) in respondData"
          :key="item.news_id"
          :newsTitle="item.news_title"
          :newsDate="item.news_date"
          :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"
          :newsId="item.news_id"
          :class="{ noneShow: noneShow }"
        />

        <NewsRow
          v-for="(item, index) in respondData"
          :key="item.news_id"
          :newsTitle="item.news_title"
          :newsDate="item.news_date"
          :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"
          :newsId="item.news_id"
          :newsContent="item.news_content"
          :class="{ noneShow: !noneShow }"
        />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
import NewsCard from "../components/NewsCard.vue";
import NewsRow from "../components/NewsRow.vue";

export default {
  data() {
    return {
      respondData: [],
      noneShow: false,
      productData: [],
    };
  },
  components: {
    PageTitle,
    NewsCard,
    NewsRow,
  },
  computed: {
    loading() {
      return this.respondData.length == 0;
    },
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g1/phps/news_fetch.php")
        .then((res) => {
          console.log(res.data);
          this.respondData = res.data;
        });
    },
    addListClassName() {
      this.noneShow = true;
    },
    romoveListClassName() {
      this.noneShow = false;
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
    getImageUrl(paths) {
      //取得圖片路徑
      return new URL(`../assets/images/${paths}`, import.meta.url).href;
    },
  },
  mounted() {},
};
</script>
