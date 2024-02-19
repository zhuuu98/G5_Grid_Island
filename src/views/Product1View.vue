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
    <PageTitle :pageTitle="'所有商品'" />
    <section class="productTopBackground">
      <div class="breadcrumb">
        <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
          <BreadcrumbItem to="/">首頁</BreadcrumbItem>
          <BreadcrumbItem>所有商品</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <section class="hotProductBackground">
        <div class="hotProduct">
          <div class="hotTitle">
            <div class="hotTitleDash">———</div>
            <div class="hotTitleText">熱銷商品</div>
            <div class="hotTitleDash">———</div>
          </div>
          <Carousel v-model="value" loop>
            <CarouselItem
              v-for="(item, index) in prodResData.slice(0, 3)"
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
                        :src="`https://tibamef2e.com/chd104/g5/image/prod/${item.prod_img1}`"
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
                      <span v-for="item in item.tags">{{ item }}</span>
                    </div>
                    <div class="hotproductIntro">
                      {{ item.prod_breif }}
                    </div>
                    <div class="hotProductPrice">
                      <span :class="{ ordinaryPrice: item.prod_discount_price }"
                        >${{ item.prod_price }}</span
                      >
                      <span v-if="item.prod_discount_price"
                        >$ {{ item.prod_discount_price }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </section>
    </section>
    <section class="wave">
      <div class="waveImg">
        <img src="@/assets/images/product/productWave.svg" alt="wave" />
      </div>
    </section>
    <section class="productList" ref="productListContainer">
      <div class="searchCatBar">
        <div class="searchBar">
          <input
            type="text"
            id=""
            v-model="search"
            placeholder="請輸入關鍵字"
          />
        </div>
        <div class="innerSearch">
          <button class="searchBtn catBtn" @click="catExpand">
            按分類篩選
          </button>
          <div class="productSelect">
            <select class="select" v-model="sortMethod" @change="sort">
              <option value="priceAsc">價格由低至高</option>
              <option value="priceDesc">價格由高至低</option>
              <option value="idAsc">商品編號由低至高</option>
              <option value="idDesc">商品編號由高至低</option>
            </select>
          </div>
        </div>
      </div>
      <div class="gap"></div>
      <transition name="expandLg">
        <div class="productCat" v-show="productCat">
          <div class="productCatBackground">
            <div class="resetCat" @click="resetFilter">
              <p>清除搜尋條件</p>
            </div>
            <div class="gameType">
              <div class="catGroup">
                <div class="gameTypeTitle catTitle" @click="tagToggle('type')">
                  <h4>類別</h4>
                </div>
                <transition name="expandSm">
                  <div class="gameTypeTags catTags" v-show="gameType">
                    <div class="tagGroup" v-for="item in gameTypeTags">
                      <input
                        type="checkbox"
                        :name="item"
                        :id="item"
                        :ref="item"
                        @change="handleCheckBoxValue"
                      />
                      <label :for="item">{{ item }}</label>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="playerCount">
              <div class="catGroup">
                <div
                  class="playerCountTitle catTitle"
                  @click="tagToggle('count')"
                >
                  <h4>人數</h4>
                </div>
                <transition name="expandSm">
                  <div class="playerCountTags catTags" v-show="playerCount">
                    <div class="tagGroup" v-for="item in playerCountTags">
                      <input
                        type="checkbox"
                        :name="item"
                        :id="item"
                        :ref="item"
                        @change="handleCheckBoxValue"
                      />
                      <label :for="item">{{ item }}</label>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="difficulty">
              <div class="catGroup">
                <div
                  class="difficultyTitle catTitle"
                  @click="tagToggle('difficulty')"
                >
                  <h4>難易度</h4>
                </div>
                <transition name="expandSm">
                  <div class="difficultyTags catTags" v-show="difficulty">
                    <div class="tagGroup" v-for="item in difficultyTags">
                      <input
                        type="checkbox"
                        :name="item"
                        :id="item"
                        :ref="item"
                        @change="handleCheckBoxValue"
                      />
                      <label :for="item">{{ item }}</label>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="enterBtn" @click="handleFilter">
              <p>送出</p>
            </div>
          </div>
        </div>
      </transition>

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
              <option value="init">-請選擇-</option>
              <option value="priceAsc">價格由低至高</option>
              <option value="priceDesc">價格由高至低</option>
              <option value="idAsc">商品編號由低至高</option>
              <option value="idDesc">商品編號由高至低</option>
            </select>
          </div>
          <div class="productItem">
            <ProductCard
              v-for="item in currentProducts"
              :key="item.prod_id"
              :productTitle="item.prod_name"
              :imgUrl="`https://tibamef2e.com/chd104/g5/image/prod/${item.prod_img1}`"
              :productPrice="item.prod_price"
              :productDiscountPrice="item.prod_discount_price"
              :productId="item.prod_id"
              :tags="item.tags"
              @addCartData="addCart(item)"
            />
          </div>
        </div>
        <div class="pageBtnList" v-if="!nodata">
          <button
            class="pageBtn pageBtncursor"
            @click="nextPrevPage('prev')"
            v-if="currentPage != 1"
          >
            ＜
          </button>
          <button
            class="pageBtn"
            v-for="page in totalPages"
            :key="page"
            @click="currentPage !== page ? changePage(page) : null"
            :class="{
              pageBtncursor: currentPage != page,
              currPageBtn: currentPage == page,
            }"
          >
            {{ page }}
          </button>
          <button
            class="pageBtn pageBtncursor"
            @click="nextPrevPage('next')"
            v-if="currentPage != totalPages"
          >
            ＞
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import PageTitle from "../components/PageTitle.vue";
// 引入stores
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cart";
export default {
  data() {
    return {
      search: "",
      prodResData: [],
      prodDisData: [],
      sortMethod: "idAsc",
      value: 0,
      gameTypeTags: ["策略", "紙牌", "經營"],
      playerCountTags: ["2-4人", "5-8人", ">8人"],
      difficultyTags: ["簡單", "中等", "困難"],
      productCat: false,
      gameType: false,
      playerCount: false,
      difficulty: false,
      itemsPerPage: 6,
      currentPage: 1,
      checkboxValue: [],
    };
  },
  components: {
    ProductCard,
    PageTitle,
  },
  computed: {
    //使用 mapState 輔助函數將/src/stores/cart裡的state/data 映射在這裡
    // !!!要寫在computed
    ...mapState(cartStore, ["cartData"]),
    loading() {
      return this.prodResData.length == 0;
    },
    nodata() {
      return this.prodDisData.length == 0;
    },
    totalPages() {
      return Math.ceil(this.prodDisData.length / this.itemsPerPage);
    },
    currentProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.prodDisData.slice(start, end);
    },
  },
  created() {
    this.fetchProd();
  },
  methods: {
    //使用 mapActions 輔助函數將/src/stores/cart裡的methods 映射在這裡
    ...mapActions(cartStore, ["addCartData"]),
    handleSearch() {
      this.prodDisData = this.prodResData.filter((item) => {
        return item.prod_name.includes(this.search);
      });
      this.currentPage = 1;
    },
    sort() {
      // 幫我和同學講一下怎麼寫排序
      switch (this.sortMethod) {
        case "priceAsc":
          this.prodDisData = this.prodDisData.sort((a, b) => {
            const priceA = a.prod_discount_price || a.prod_price;
            const priceB = b.prod_discount_price || b.prod_price;
            return priceA - priceB;
          });
          break;
        case "priceDesc":
          this.prodDisData = this.prodDisData.sort((a, b) => {
            const priceA = a.prod_discount_price || a.prod_price;
            const priceB = b.prod_discount_price || b.prod_price;
            return priceB - priceA;
          });
          break;
        case "idAsc":
          this.prodDisData = this.prodDisData.sort(
            (a, b) => a.prod_id - b.prod_id
          );
          break;
        case "idDesc":
          this.prodDisData = this.prodDisData.sort(
            (a, b) => b.prod_id - a.prod_id
          );
          break;
      }
    },
    catExpand() {
      this.productCat = !this.productCat;
    },
    tagToggle(tagtype) {
      switch (tagtype) {
        case "type":
          this.gameType = !this.gameType;
          break;
        case "count":
          this.playerCount = !this.playerCount;
          break;
        case "difficulty":
          this.difficulty = !this.difficulty;
          break;
      }
    },
    resetFilter() {
      this.gameTypeTags.forEach((item) => {
        const checkboxes = this.$refs[item];
        if (checkboxes && checkboxes.length > 0) {
          checkboxes.forEach((checkboxRef) => {
            if (checkboxRef) {
              checkboxRef.checked = false;
            }
          });
        }
      });
      this.playerCountTags.forEach((item) => {
        const checkboxes = this.$refs[item];
        if (checkboxes && checkboxes.length > 0) {
          checkboxes.forEach((checkboxRef) => {
            if (checkboxRef) {
              checkboxRef.checked = false;
            }
          });
        }
      });
      this.difficultyTags.forEach((item) => {
        const checkboxes = this.$refs[item];
        if (checkboxes && checkboxes.length > 0) {
          checkboxes.forEach((checkboxRef) => {
            if (checkboxRef) {
              checkboxRef.checked = false;
            }
          });
        }
      });
      this.checkboxValue = [];
    },
    changePage(page) {
      this.currentPage = page;
      this.scrollToTop();
    },
    nextPrevPage(method) {
      if (method == "prev") {
        this.currentPage -= 1;
      } else {
        this.currentPage += 1;
      }
      this.scrollToTop();
    },
    scrollToTop() {
      const productListContainer = this.$refs.productListContainer;
      // 確保 productListContainer 不為空
      if (productListContainer) {
        // 使用 scrollIntoView 方法將商品列表的頂部滾動到最上面
        productListContainer.scrollIntoView({
          behavior: "smooth", // 讓滾動具有平滑效果
        });
      }
    },
    addCart(product) {
      this.addCartData(product);
    },
    fetchProd() {
      axios
        .post(`${import.meta.env.VITE_API_URL}/getProduct.php`)
        .then((res) => {
          this.prodResData = res.data.products;
          this.prodDisData = res.data.products;
        });
    },
    // 將選取標籤放入陣列裡
    handleCheckBoxValue(e) {
      if (e.target.checked) {
        this.checkboxValue.push(e.target.name);
        console.log(this.checkboxValue);
      } else {
        const valueIndex = this.checkboxValue.indexOf(e.target.name);
        if (valueIndex != -1) {
          this.checkboxValue.splice(valueIndex, 1);
        }
      }
    },
    // 判斷選取標籤陣列是否與商品標籤相同
    handleFilter() {
      if (this.checkboxValue.length > 0) {
        this.prodDisData = this.prodResData.filter((item) => {
          return this.checkboxValue.some((value) => {
            return item.tags.includes(value);
          });
        });
        this.currentPage = 1;
      } else {
        this.prodDisData = this.prodResData;
        this.currentPage = 1;
      }
    },
  },
  watch: {
    search(newSearch, oldSearch) {
      // console.log("new:" + newSearch);
      // console.log("old:" + oldSearch);
      // 可以調用 methods
      this.handleSearch();
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
