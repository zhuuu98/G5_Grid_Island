<template>
  <main class="productInfo">
    <!-- <h3>{{ $route.params.id }}</h3> -->
    <div class="breadcrumb">
      <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
        <BreadcrumbItem to="/">首頁</BreadcrumbItem>
        <BreadcrumbItem to="/product">所有商品</BreadcrumbItem>
        <BreadcrumbItem>{{ respondData.prod_name }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div v-if="!nodata">noData</div>
    <section class="productInfoArea" v-else>
      <div class="productInfoBackground">
        <div class="productPicArea">
          <div class="productMainPic">
            <img
              :src="`https://tibamef2e.com/chd103/g5/img/${respondData.prod_img1}`"
              :alt="respondData.prod_name"
            />
          </div>
          <div class="productPicList">
            <div v-for="num in 4" class="productPic">
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
            <div class="productPrice">
              <h3>{{ respondData.prod_price }}</h3>
            </div>
            <div class="productQuantity">
              <button>+</button>
              <input type="number" />
              <button>-</button>
            </div>
            <div class="productBuyingArea">
              <button>直接購買</button>
              <button>加入購物車</button>
            </div>
            <div class="productBook">
              <button>預約遊玩</button>
            </div>
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
      respondData: {},
      displayData: [],
      value: 0,
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
      // axios.get(`https://fakestoreapi.com/products/${pageId}`).then((res) => {
      //   console.log(res.data);
      //   this.respondData = res.data;
      //   // this.displayData = res.data;
      // });
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          const allProduct = res.data;
          const result = allProduct.find((item) => {
            return item.prod_id == pageId;
          });
          console.log(result);
          this.respondData = result;
          // this.displayData = res.data;
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
