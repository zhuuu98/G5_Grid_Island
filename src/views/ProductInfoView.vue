<template>
  <main class="productInfo">
    <!-- <h3>{{ $route.params.id }}</h3> -->
    <transition name="fade">
      <div class="loadingMask" v-if="!nodata" name="fade">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </transition>
    <div class="breadcrumb">
      <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
        <BreadcrumbItem to="/">首頁</BreadcrumbItem>
        <BreadcrumbItem to="/product">所有商品</BreadcrumbItem>
        <BreadcrumbItem>{{ respondData.prod_name }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="productAllInfo">
      <section class="productInfoArea">
        <div class="productInfoBackground">
          <div class="productPicInfoArea">
            <div class="productPicArea">
              <div class="productMainPic">
                <img
                  :src="`https://tibamef2e.com/chd103/g5/img/${
                    respondData['prod_img' + mainPic]
                  }`"
                  :alt="respondData.prod_name"
                />
              </div>
              <div class="productPicList">
                <div
                  v-for="num in 4"
                  class="productPic"
                  @click="changeMainPic(num)"
                >
                  <img
                    v-if="respondData['prod_img' + num]"
                    :src="`https://tibamef2e.com/chd103/g5/img/${
                      respondData['prod_img' + num]
                    }`"
                    :alt="respondData.prod_name"
                  />
                </div>
              </div>
            </div>

            <div class="productBuyingArea">
              <div class="productName">
                <h3>{{ respondData.prod_name }}</h3>
              </div>
              <div class="productTag">
                <span>1-5人</span>
                <span>益智遊戲</span>
                <span>團隊合作</span>
              </div>
              <div class="productBrief">
                <p>{{ respondData.prod_des1 }}</p>
              </div>
              <div class="productPriceQuantity">
                <div class="productPriceQuantityArea">
                  <div v-if="prodDiscountPrice" class="productPrice">
                    <h3>{{ prodDiscountPrice }}</h3>
                  </div>
                  <div class="productDiscountPrice">
                    <h3>$ {{ respondData.prod_price }}</h3>
                  </div>
                  <div class="productQuantity">
                    <button @click="quantityChange('minus')">
                      <span>-</span>
                    </button>
                    <input type="number" :value="productQuantity" />
                    <button @click="quantityChange('plus')">
                      <span>+</span>
                    </button>
                  </div>
                </div>
                <div class="productBuyingButton">
                  <button class="btn_default">直接購買</button>
                  <button class="btn_default">加入購物車</button>
                </div>
                <div class="productBook">
                  <router-link class="btn_default" to="/prebook"
                    >預約遊玩</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="productDescArea">
        <div class="productDescTab">
          <div
            class="introTab tab"
            @click="selectTab(1)"
            :class="{ active: desc === 1 }"
          >
            <span>遊戲介紹</span>
          </div>
          <div
            class="descTab tab"
            @click="selectTab(2)"
            :class="{ active: desc === 2 }"
          >
            <span>產品規格</span>
          </div>
        </div>
        <div class="productDescBackground">
          <div class="productDesc">
            <div class="productDescTitle">
              <h3 v-if="desc == 1">遊戲介紹</h3>
              <h3 v-if="desc == 2">產品規格</h3>
            </div>
            <div class="productDesc" v-for="num in 2">
              <p v-if="desc == num">{{ respondData["prod_des" + num] }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {
      search: "",
      respondData: {},
      value: 0,
      prodDiscountPrice: "",
      desc: 1,
      mainPic: 1,
      productQuantity: 1,
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    nodata() {
      return this.respondData && this.respondData.prod_id;
    },
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      const pageId = this.$route.params.id;
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          const allProduct = res.data;
          const result = allProduct.find((item) => {
            return item.prod_id == pageId;
          });
          console.log(result);
          this.respondData = result;
        });
    },
    selectTab(tab) {
      this.desc = tab;
    },
    changeMainPic(num) {
      this.mainPic = num;
    },
    quantityChange(method) {
      if (method == "plus") {
        this.productQuantity += 1;
      } else {
        if (this.productQuantity > 1) {
          this.productQuantity -= 1;
        }
      }
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
