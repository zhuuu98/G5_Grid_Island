<template>
  <main class="orderItemInfo">
    <div class="orderInfoTitle" @click="toggleContent">
      <h2 class="pc-h3">訂單資訊</h2>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        :style="{ transform: rotateIcon, transition: 'transform 0.5s' }"
      />
    </div>

    <transition name="fade">
      <div v-show="showContent" class="content">
        <OrderItem
          v-for="(item, index) in cartData"
          :key="item.prod_id"
          :productTitle="item.name"
          :imgUrl="`https://tibamef2e.com/chd104/g5/image/prod/${item.img}`"
          :productPrice="item.price"
          :productId="item.id"
          :productStatus="item.count"
        >
        </OrderItem>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="showContent" class="content">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>商品名稱</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartData" :key="item.id">
              <td class="prod_img">
                <img
                  :src="`https://tibamef2e.com/chd104/g5/image/prod/${item.img}`"
                  :alt="item.name"
                />
              </td>
              <td class="prod_name">
                <h3>{{ item.name }}</h3>
              </td>
              <td class="prod_status">{{ item.count }}</td>
              <td class="prod_price">$ {{ item.price }}</td>
            </tr>
          </tbody>
        </table>
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
                <span v-if="discountAmount != 0">-</span>
                <p>$ {{ discountAmount }}</p>
              </div>
            </div>
            <div class="totalPrice">
              <div class="totalPriceTitle">
                <h3 class="pc-h3">總金額</h3>
              </div>
              <div class="totalPriceAmount">
                <h3 class="pc-h3">$ {{ totalPrice }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <form action="" method="post">
      <div class="orderPayment">
        <div class="orderInfo">
          <h2 class="pc-h3">訂購人資料</h2>
          <div class="name">
            <label for="memName">姓名</label>
            <input type="text" name="mem_name" id="memName" v-model="memName" />
          </div>
          <div class="phone">
            <label for="memTel">手機號碼</label>
            <input type="tel" name="mem_tel" id="memTel" v-model="memTel" />
          </div>
          <div class="adress">
            <label for="memAddr">地址</label>
            <input type="text" name="mem_addr" id="memAddr" v-model="memAddr" />
          </div>
          <div class="email">
            <label for="memEmail">電子信箱</label>
            <input
              type="email"
              name="mem_email"
              id="memEmail"
              v-model="memEmail"
            />
          </div>
        </div>
        <div class="paymentInfo">
          <h2 class="pc-h3">付款資訊</h2>
          <div class="payment">
            <div class="text">
              <label for="ordPayment">付款方式</label>
              <div v-if="showWarning" class="warning">
                *請選擇一個有效的選項
              </div>
            </div>
            <select
              name="ord_payment"
              id="ordPayment"
              v-model="selectedValue"
              @change="handleSelectChange"
              @focus="handlePaymentFocus"
              @blur="handlePaymentBlur"
            >
              <option value="0">--請選擇--</option>
              <option value="option1">線上刷卡</option>
              <option value="option2">匯款轉帳</option>
              <option value="option3">貨到付款</option>
            </select>
          </div>
          <div class="bill">
            <div class="text">
              <label for="memBill">發票</label>
              <div v-if="showWarning1" class="warning">
                *請選擇一個有效的選項
              </div>
            </div>
            <select
              name="mem_bill"
              id="memBill"
              v-model="selectedValue1"
              @change="handleSelectChange1"
              @focus="handlePaymentFocus1"
              @blur="handlePaymentBlur1"
            >
              <option value="0">--請選擇--</option>
              <option value="option1">電子發票</option>
              <option value="option2">紙本發票</option>
              <option value="option3">捐出發票</option>
            </select>
          </div>
        </div>
      </div>
      <div class="checkOutBtn_m">
        <button
          class="bookBtn"
          type="button"
          @click="submitOrder"
          :class="{ disableBtn: optionSelect }"
        >
          送出訂單
        </button>
      </div>
      <div class="checkOutBtn_pc">
        <button
          class="btn_lg_orange"
          type="button"
          @click="sendOrdertoDB"
          :class="{ disableBtn: optionSelect }"
        >
          送出訂單
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import OrderItem from "../components/OrderItem.vue";
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cart";
export default {
  data() {
    return {
      discountCode: "",
      deliveryMethod: "init",
      showContent: true,
      isRotated: true,
      selectedValue: "0",
      selectedValue1: "0",
      showWarning: false,
      showWarning1: false,
      promoCodeList: [],
      memName: "",
      memTel: "",
      memAddr: "",
      memEmail: "",
    };
  },
  components: {
    OrderItem,
  },
  computed: {
    ...mapState(cartStore, [
      "cartData",
      "subTotalPrice",
      "deliveryAmount",
      "discountAmount",
      "totalPrice",
    ]),
    totalPriceCount() {
      return this.subTotalAmount + this.deliveryAmount - this.discountAmount;
    },
    rotateIcon() {
      return this.isRotated ? "rotate(-180deg)" : "";
    },
    optionSelect() {
      return (
        this.selectedValue == 0 ||
        this.selectedValue1 == 0 ||
        this.memName == "" ||
        this.memAddr == "" ||
        this.memEmail == "" ||
        this.memTel == ""
      );
    },
  },
  created() {
    this.axiosGetData();
    this.getLocalCartData();
    this.fetchPromoCode();
    this.autoFillData();
  },
  methods: {
    ...mapActions(cartStore, ["getLocalCartData", "clearCartData"]),
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          this.respondData = res.data;
        });
    },
    toggleContent(e) {
      this.showContent = !this.showContent;
      this.isRotated = !this.isRotated;
    },
    handlePaymentFocus() {
      // 在 select 元素被聚焦時，將 showWarning 設為 false
      this.showWarning = false;
    },
    handlePaymentBlur() {
      // 在 select 元素失去焦點時，檢查選擇的值，根據需要更新 showWarning
      if (this.selectedValue === "0") {
        this.showWarning = true;
      } else {
        this.showWarning = false;
      }
    },
    handleSelectChange() {
      // 在選擇發生變化時檢查選擇的值，根據需要更新 showWarning
      if (this.selectedValue === "0") {
        this.showWarning = true;
      } else {
        this.showWarning = false;
      }
    },
    handlePaymentFocus1() {
      // 在 select 元素被聚焦時，將 showWarning 設為 false
      this.showWarning1 = false;
    },
    handlePaymentBlur1() {
      // 在 select 元素失去焦點時，檢查選擇的值，根據需要更新 showWarning1
      if (!this.selectedValue1 || this.selectedValue1 === "0") {
        this.showWarning1 = true;
      } else {
        this.showWarning1 = false;
      }
    },

    handleSelectChange1() {
      // 在選擇發生變化時檢查選擇的值，根據需要更新 showWarning1
      if (!this.selectedValue1 || this.selectedValue1 === "0") {
        this.showWarning1 = true;
      } else {
        this.showWarning1 = false;
      }
    },
    fetchPromoCode() {
      axios
        .post(`${import.meta.env.VITE_API_URL}/getPromoCode.php`, {})
        .then((res) => {
          this.promoCodeList = res.data.promos;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    paymentExchange(value) {
      if (value == "option1") {
        return "線上刷卡";
      } else if (value == "option2") {
        return "匯款轉帳";
      } else if (value == "option3") {
        return "貨到付款";
      }
    },
    promoIdCheck() {
      const promoCode = localStorage["discCode"];
      if (promoCode) {
        const promos = this.promoCodeList.find((item) => {
          return item.promo_code == promoCode;
        });
        if (promos) {
          return promos.promo_id;
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
    sendOrdertoDB() {
      const cartInfo = this.cartData;
      const orderData = {
        mem_id: JSON.parse(localStorage["userDataStr"]).mem_id,
        ord_sum: this.subTotalPrice,
        ord_promo: this.discountAmount,
        ord_delivery: this.deliveryAmount,
        ord_pay: this.totalPrice,
        ord_addr: this.memAddr,
        ord_name: this.memName,
        ord_tel: this.memTel,
        promo: this.promoIdCheck() ? this.promoIdCheck() : null,
        ord_payment: this.paymentExchange(this.selectedValue),
      };
      const allOrderData = { cart: cartInfo, order: orderData };
      const jsonData = JSON.stringify(allOrderData);
      axios
        .post(`${import.meta.env.VITE_API_URL}/sendOrderInfo.php`, { jsonData })
        .then((res) => {
          this.clearCartData();
          localStorage.removeItem("cartData");
          localStorage.removeItem("discountPrice");
          localStorage.removeItem("delMethod");
          localStorage.removeItem("discCode");
          localStorage.removeItem("deliveryPrice");
          this.$router.push("/orderSuccess");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    autoFillData() {
      const userData = JSON.parse(localStorage["userDataStr"]);
      if (userData) {
        if (userData.mem_name) {
          this.memName = userData.mem_name;
        }
        if (userData.mem_addr) {
          this.memAddr = userData.mem_addr;
        }
        if (userData.mem_email) {
          this.memEmail = userData.mem_email;
        }
        if (userData.mem_tel) {
          this.memTel = userData.mem_tel;
        }
      }
    },
  },

  mounted() {},
};
</script>
