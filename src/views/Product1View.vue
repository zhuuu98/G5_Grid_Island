<template>
  <main class="product">
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
    <div class="productTopBackground">
      <div class="breadcrumb">
        <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
          <BreadcrumbItem to="/">首頁</BreadcrumbItem>
          <BreadcrumbItem>所有商品</BreadcrumbItem>
        </Breadcrumb>
      </div>
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
                    <div class="hotproductTag">
                      <span>1-5人</span>
                      <span>益智遊戲</span>
                      <span>團隊合作</span>
                    </div>
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
    </div>

    <section class="productList">
      <div class="searchCatBar">
        <div class="searchBar">
          <input
            type="text"
            id=""
            v-model="search"
            placeholder="請輸入關鍵字"
          />
          <button @click="handleSearch" class="searchBtn">搜尋</button>
        </div>
        <button class="searchBtn catBtn">按分類篩選</button>
      </div>

      <div class="productTitle">
        <div class="productTitleDash">———</div>
        <div class="productTitleText">所有商品</div>
        <div class="productTitleDash">———</div>
      </div>
      <div class="productBackgruond">
        <div class="noDataWarning displayInfoText" v-if="nodata">
          <p>無資料，請輸入正確的資料</p>
        </div>
        <div class="productListContent">
          <div class="productSelect" v-if="!nodata">
            <select id="select" v-model="sortMethod" @change="sort">
              <option value="priceAsc">價格由低至高</option>
              <option value="priceDesc">價格由高至低</option>
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
              @addCartData="addCart(item)"
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
      cartData: [],
      sortMethod: "-請選擇-",
      value: 0,
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    loading() {
      return this.respondData.length == 0;
    },
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
    addCart(product) {
      const result = this.cartData.findIndex(
        (item) => item.id == product.prod_id
      );
      if (result >= 0) {
        this.cartData[result] = {
          ...this.cartData[result],
          count: this.cartData[result]["count"] + 1,
        };
      } else {
        this.cartData.push({
          id: product.prod_id,
          title: product.prod_name,
          price: product.prod_price,
          count: 1,
        });
      }
      console.log(this.cartData);
    },
    sort() {
      // console.log(this.sortMethod);
      // 幫我和同學講一下怎麼寫排序
      if (this.sortMethod == "priceAsc") {
        this.displayData = this.displayData.sort((a, b) => a.prod_price - b.prod_price)
        // alert("低到高");
      } else if (this.sortMethod == "priceDesc") {
        this.displayData = this.displayData.sort((a, b) => b.prod_price - a.prod_price)
        // alert("高到低");
      }
    },
  },
  watch: {
    search(newSearch, oldSearch) {
      // console.log("new:" + newSearch);
      // console.log("old:" + oldSearch);
      // 可以調用 methods
      this.handleSearch()
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

<!-- <style lang="scss">
//
</style> -->
