<template>
  <main class="product">
    <section class="hotProductBackground">
      <div class="hotProduct">
        <div class="hotTitle">
          <div class="hotTitleDash">——————</div>
          <div class="hotTitleText">熱銷商品</div>
          <div class="hotTitleDash">——————</div>
        </div>

        <Carousel v-model="value" loop>
          <CarouselItem
            v-for="(item, index) in displayData"
            :key="item.prod_id"
          >
            <div class="hotProductBody">
              <div class="top">
                <p>Top {{ index + 1 }}</p>
              </div>
              <div class="hotProductGroup">
                <router-link
                  :to="{
                    name: 'productInfo',
                    params: { id: item.prod_id },
                  }"
                >
                  <div class="hotProductImg">
                    <img
                      :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
                    />
                  </div>
                </router-link>
                <div class="hotproductInfo">
                  <router-link
                    :to="{
                      name: 'productInfo',
                      params: { id: item.prod_id },
                    }"
                  >
                    <h3>{{ item.prod_name }}</h3>
                  </router-link>
                  <!-- <div class="hotproductTag">
                    <span>1-5人</span>
                    <span>益智遊戲</span>
                    <span>團隊合作</span>
                  </div> -->
                  <div class="hotproductIntro">
                    {{ item.prod_des1 }}
                  </div>
                  <div class="hotProductPrice">
                    <span>$ {{ item.prod_price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </section>

    <section class="productList">
      <div class="searchCatBar">
        <div class="searchBar">
          <input type="text" id="" v-model="search" />
          <button @click="handleSearch">搜尋</button>
        </div>
        <button>按分類篩選</button>
      </div>

      <div class="productTitle">
        <div class="productTitleDash">——————</div>
        <div class="productTitleText">所有商品</div>
        <div class="productTitleDash">——————</div>
      </div>
      <div class="productBackgruond">
        <div class="noDataWarning" v-if="nodata">
          <p>無資料，請輸入正確的資料</p>
        </div>
        <div class="productListContent">
          <div class="productSelect">
            <select id="Select">
              <option value="">-請選擇-</option>
              <option value="">價格由高至低</option>
            </select>
          </div>
          <div class="productItem">
            <ProductCard
              v-for="item in displayData"
              :key="item.prod_id"
              :productTitle="item.prod_name"
              :imgUrl="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
              :productPrice="item.prod_price"
              :productId="item.prod_id"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {
      search: "",
      respondData: [],
      displayData: [],
      value: 0,
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    nodata() {
      return this.displayData.length == 0;
    },
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          console.log(res.data);
          this.respondData = res.data;
          this.displayData = res.data;
        });
    },
    handleSearch() {
      this.displayData = this.respondData.filter((item) => {
        return item.prod_name.includes(this.search);
      });
    },
  },
  watch: {
    search(newSearch, oldSearch) {
      // console.log("new:" + newSearch);
      // console.log("old:" + oldSearch);
      // 可以調用 methods
    },
    respondData(newData) {
      // console.log(newData.length);
    },
    // 如果畫面一開始要監聽要設成 true
    // immediate: true,
    // 如果要監聽陣列或物件要設稱 true
    // deep: true,
  },
  mounted() {},
};
</script>

<style lang="scss">
//
</style>
