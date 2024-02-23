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
        <BreadcrumbItem>{{ prodData.prod_name }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="productAllInfo">
      <section class="productInfoArea">
        <div class="productInfoBackground">
          <div class="productPicInfoArea">
            <div class="productPicArea">
              <div class="productMainPic">
                <img
                  :src="`http://localhost/image/prod/${
                  prodData['prod_img' + mainPic]}`"
                  :alt="prodData.prod_name"
                />
              </div>
              <div class="productPicList">
                <div
                  v-for="num in 3"
                  class="productPic"
                  @click="changeMainPic(num)"
                >
                  <img
                    v-if="prodData['prod_img' + num]"
                    :src="`http://localhost/image/prod/${
                      prodData['prod_img' + num]
                    }`"
                    :alt="prodData.prod_name"
                  />
                </div>
              </div>
            </div>

            <div class="productBuyingArea">
              <div class="productName">
                <h3>{{ prodData.prod_name }}</h3>
              </div>
              <div class="productTag">
                <span v-for="item in prodData.tags">{{ item }}</span>
              </div>
              <div class="productBrief">
                <p>{{ prodData.prod_brief }}</p>
              </div>
              <div class="productPriceQuantity">
                <div class="productPriceQuantityArea">
                  <div class="priceArea">
                    <div
                      :class="{ productPrice: prodData.prod_discount_price }"
                    >
                      <h3>$ {{ prodData.prod_price }}</h3>
                    </div>
                    <div
                      v-if="prodData.prod_discount_price"
                      class="productDiscountPrice"
                    >
                      <h3>$ {{ prodData.prod_discount_price }}</h3>
                    </div>
                  </div>
                  <div class="productQuantity">
                    <button @click="quantityChange('minus')">
                      <span>-</span>
                    </button>
                    <input type="number" :value="productQuantity" readonly />
                    <button @click="quantityChange('plus')">
                      <span>+</span>
                    </button>
                  </div>
                </div>
                <div class="productBuyingButton">
                  <button class="cartBtn" @click="addCart(prodData)">
                    加入購物車
                  </button>
                  <router-link class="bookBtn" to="/prebook"
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
            <span>產品說明</span>
          </div>
        </div>
        <div class="productDescBackground">
          <div class="productDesc">
            <div class="productDescTitle">
              <h3 v-if="desc == 1">遊戲介紹</h3>
              <h3 v-if="desc == 2">產品說明</h3>
            </div>
            <div class="productDesc">
              <p v-if="desc == 1">{{ prodData.prod_intro }}</p>
              <p v-else>{{ prodData.prod_desc }}</p>
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
import PreBook from "@/components/PreBook.vue";
// 引入stores
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cart";
export default {
  data() {
    return {
      search: "",
      respondData: {},
      prodData: {},
      value: 0,
      prodDiscountPrice: "",
      desc: 1,
      mainPic: 1,
      productQuantity: 1,
      prebookModel: false,
    };
  },
  components: {
    ProductCard,
    PreBook,
  },
  computed: {
    nodata() {
      return this.prodData && this.prodData.prod_id;
    },
  },
  created() {
    this.fetchProd();
  },
  methods: {
    ...mapActions(cartStore, ["addCartData"]),
    fetchProd() {
      const pageId = this.$route.params.id;
      axios
        .post(`${import.meta.env.VITE_API_URL}/getProduct.php`)
        .then((res) => {
          const allProduct = res.data.products;
          const result = allProduct.find((item) => {
            return item.prod_id == pageId;
          });
          this.prodData = result;
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
    addCart(product) {
      this.addCartData(product, this.productQuantity);
      alert("已加入購物車");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss"></style>
