<template>
  <main class="orderInfo">

    <h2>訂單資訊</h2>
    <font-awesome-icon :icon="['fas', 'chevron-down']" />


    <div class="orderItem">
      <img class="orderItemImg" src="../assets/images/footer/footer_logo.svg">
      <div class="orderItemInfo">
        <div class="orderItemArea">
          <div class="orderItemName">
            <h2>阿瓦蟲</h2>
          </div>
          <div class="orderItemPrice">
            <h2>$500</h2>
          </div>
        </div>
        <span class="orderItemAmount">
          x 1
        </span>
      </div>
      


    </div>
    <div class="orderItem">
      <img class="orderItemImg" src="../assets/images/footer/footer_logo.svg">
      <div class="orderItemInfo">
        <div class="orderItemArea">
          <div class="orderItemName">
            <h2>一瓶的海岸線</h2>
          </div>
          <div class="orderItemPrice">
            <h2>$500</h2>
          </div>
        </div>
        <span class="orderItemAmount">
          x 1
        </span>
      </div>
      


    </div>
    

    <div class="priceContent">
        <div class="priceArea">
          <div class="subtotal">
            <div class="subtotalTitle">
              <p>小計</p>
            </div>
            <div class="subtotalAmount">
              <p>$ {{ subTotalAmount }}</p>
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
              <span v-if="discountAmount != 0">-</span>
              <p>$ {{ discountAmount }}</p>
            </div>
          </div>
          <div class="totalPrice">
            <div class="totalPriceTitle">
              <h3>總金額</h3>
            </div>
            <div class="totalPriceAmount">
              <h3>$ {{ totalPriceCount }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="checkOutBtn">
            <button class="bookBtn">送出訂單</button>
          </div>




    
    <div class="cartInfoArea">
      <div class="cartContent">
        <div class="cartItemContent">
          <div class="cartItemTitle">
          </div>
          <div class="cartItemArea">
            <div
              class="cartItemBlock"
              v-for="item in displayData.slice(0, 6)"
              :key="item.prod_id"
            >
              <CartItem
                :itemPicUrl="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
                :itemName="item.prod_name"
                :itemDiscountPrice="item.prod_discount_price"
                :itemPrice="item.prod_price"
                :itemId="item.prod_id"
              />
            </div>
            <div class="continueShopping">
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
        <div class="buyingSelectArea">
          <div class="discountCode">
            <div class="discountCodeTitle">
              <h3>輸入折扣碼</h3>
            </div>
            <div class="discountCodeInputBtn">
              <div class="discountCodeInput">
                <input
                  type="text"
                  id="discountCode"
                  v-model="discountCode"
                  @input="discountCodeCheck()"
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
              <select v-model="deliveryMethod" @change="deliveryMethodChange">
                <option value="init">-請選擇-</option>
                <option value="homeDelivery">宅配到府</option>
                <option value="pickup">店內自取</option>
              </select>
            </div>
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
      cartData: [],
      discountCode: "",
      deliveryMethod: "init",
      subTotalAmount: 1300,
      deliveryAmount: 0,
      discountAmount: 0,
    };
  },
  components: {
    CartItem,
  },
  computed: {
    loading() {
      return this.respondData.length == 0;
    },
    nodata() {
      return this.displayData.length == 0;
    },
    totalPriceCount() {
      return this.subTotalAmount + this.deliveryAmount - this.discountAmount;
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
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          console.log(res.data);
          this.respondData = res.data;
          this.displayData = res.data;
        });
    },

    deliveryMethodChange() {
      if (this.deliveryMethod == "homeDelivery") {
        this.deliveryAmount = 80;
      } else if (this.deliveryMethod == "pickup") {
        this.deliveryAmount = 0;
      }
    },
    discountCodeCheck() {
      if (
        this.discountCode == "GridIsland" ||
        this.discountCode == "GridIsland2023"
      ) {
        this.discountAmount = 50;
      } else {
        this.discountAmount = 0;
      }
    },
  },
  mounted() {},
};
</script>
