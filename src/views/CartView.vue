<template>
  <main class="cart">
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
    <div class="cartInfoArea">
      <div class="cartContent">
        <div class="cartItemContent">
          <div class="cartItemTitle">
            <h2>購物車</h2>
          </div>
          <div class="cartItemArea">
            <div
              class="cartItemBlock"
              v-for="item in cartData"
              :key="item.prod_id"
            >
              <CartItem
                :itemPicUrl="`https://tibamef2e.com/chd103/g5/img/${item.img}`"
                :itemName="item.name"
                :itemPrice="item.price"
                :itemId="item.id"
                :itemCount="item.count"
                @quantityPlus="quantityChangePlus(item)"
                @quantityMinus="quantityChangeMinus(item)"
                @itemDel="itemChangeDel(item)"
              />
            </div>
            <div class="emptyCart" v-show="cartData.length == 0">
              <div class="emptyCartIconArea">
                <font-awesome-icon
                  :icon="['fas', 'cart-arrow-down']"
                  class="emptyCartIcon"
                />
              </div>
              <div class="promptGroup">
                <div class="promptText">
                  <p>購物籃是空的</p>
                </div>
                <div class="goToShopBtn">
                  <router-link to="/product" class="cartBtn"
                    >前往購物</router-link
                  >
                </div>
              </div>
            </div>

            <div class="continueShopping" v-show="cartData.length != 0">
              <router-link to="/product">
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  class="leftArrow"
                />
                <p>繼續購物</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="buyingSelectArea" v-show="cartData.length != 0">
          <div class="discountCode">
            <div class="discountCodeTitle">
              <h3>輸入折扣碼</h3>
            </div>
            <div class="discountCodeInputBtn">
              <div class="discountCodeInput">
                <input
                  type="text"
                  id="discountCode"
                  placeholder="請輸入折扣碼"
                  v-model="discountCode"
                  @input="discountCodeCheckMethod()"
                />
              </div>
              <div class="discountCodeBtn">
                <button class="searchBtn" @click="discountCodeCheck">
                  使用折扣碼
                </button>
              </div>
            </div>
          </div>
          <div class="deliveryMethod">
            <div class="deliveryMethodTitle">
              <h3>配送方式</h3>
            </div>
            <div class="deliveryMethodSelect">
              <select
                v-model="deliveryMethod"
                @change="deliveryMethodChangeMethod"
              >
                <option value="init">-請選擇-</option>
                <option value="homeDelivery">宅配到府</option>
                <option value="pickup">店內自取</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="priceContent">
        <div class="priceArea">
          <div class="subtotal">
            <div class="subtotalTitle">
              <p>小計</p>
            </div>
            <div class="subtotalAmount">
              <p>$ {{ subTotalPrice }}</p>
            </div>
          </div>
          <div class="deliveryPrice">
            <div class="deliveryPriceTitle">
              <p>運費</p>
            </div>
            <div class="deleiveryPriceAmount">
              <p>$ {{ deliveryAmount }}</p>
            </div>
          </div>
          <div class="discount">
            <div class="discountTitle">
              <p>折扣</p>
            </div>
            <div class="discountAmount">
              <span v-show="discountAmount != 0">-</span>
              <p>$ {{ discountAmount }}</p>
            </div>
          </div>
          <div class="totalPrice">
            <div class="totalPriceTitle">
              <h3>總價</h3>
            </div>
            <div class="totalPriceAmount">
              <h3>$ {{ totalPrice }}</h3>
            </div>
          </div>
          <div
            class="checkOutBtn"
            v-show="cartData.length != 0 && deliveryMethod != 'init'"
          >
            <button class="bookBtn">前往結帳</button>
          </div>
        </div>
      </div>
    </div>
    <div class="recProduct">
      <div class="recProductTitle">
        <h3>您可能也會喜歡...</h3>
      </div>
      <div class="recProductList">
        <div
          class="recProductPic"
          v-for="(item, index) in displayData.slice(0, 4)"
          :key="index"
        >
          <router-link
            :to="{
              name: 'productInfo',
              params: { id: item.prod_id },
            }"
          >
            <img
              :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
              :alt="item.prod_name"
            />
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import CartItem from "../components/CartItem.vue";
import useUserStore from "../stores/user";
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cart";
export default {
  setup() {
    const user = useUserStore();
    return {
      userStore: user,
    };
  },
  data() {
    return {
      respondData: [],
      displayData: [],
      discountCode: "",
      deliveryMethod: "init",
      // deliveryAmount: 0,
      // discountAmount: 0,
    };
  },
  components: {
    CartItem,
  },
  computed: {
    //使用 mapState 輔助函數將/src/stores/cart裡的state/data 映射在這裡
    // !!!要寫在computed
    ...mapState(cartStore, [
      "cartData",
      "subTotalPrice",
      "deliveryAmount",
      "discountAmount",
      "totalPrice",
    ]),
    loading() {
      return this.respondData.length == 0;
    },
    nodata() {
      return this.displayData.length == 0;
    },
    totalPriceCount() {
      return this.subTotalPrice + this.deliveryAmount - this.discountAmount;
    },
    userName2() {
      return this.userStore.getUserName;
    },
    cart() {
      return this.userStore.getCart;
    },
    cartDetail() {
      const data = [
        {
          id: "111",
          isFav: true,
          imgUrl: `aaa/dd-aaa.jpg`,
        },
        {
          id: "113",
          isFav: false,
          imgUrl: `aaa/01.jpg`,
        },
      ];
      return this.cart.map((v, i) => {
        const obj = data.find((u) => u.id === v.id);
        return {
          ...v,
          ...obj,
        };
      });
    },
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    ...mapActions(cartStore, [
      "deliveryMethodChange",
      "discountCodeCheck",
      "reduceFromCart",
      "increaseFromCart",
      "itemDelFormCart",
    ]),
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          console.log(res.data);
          this.respondData = res.data;
          this.displayData = res.data;
        });
    },
    deliveryMethodChangeMethod() {
      this.deliveryMethodChange(this.deliveryMethod);
    },
    discountCodeCheckMethod() {
      this.discountCodeCheck(this.discountCode);
    },
    quantityChangePlus(product) {
      this.increaseFromCart(product);
    },
    quantityChangeMinus(product) {
      this.reduceFromCart(product);
    },
    itemChangeDel(product) {
      this.itemDelFormCart(product);
    },
  },
  mounted() {},
};
</script>
