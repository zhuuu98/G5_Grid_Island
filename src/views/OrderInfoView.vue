<template>
  <main class="orderItemInfo">

    <div class="orderInfoTitle" @click="toggleContent">
      <h2 class="pc-h3">訂單資訊</h2>

      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </div>

    <transition name="fade">
      <div v-show="showContent" class="content">
        <div v-for="(item, index) in respondData" :key="item.prod_id" class="orderItem">
      <div class="itemImg">
        <img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`">
      </div>
      <div class="orderItemDetail">
        <div class="orderItemArea">
          <div class="name">
            <h2>{{ item.prod_name }}</h2>
          </div>
          <div class="price">
            <h2>{{ item.prod_price }}</h2>
          </div>
        </div>
      </div>
      <span class="amount">
        x
        {{ item.prod_status }}
      </span>
    

        </div>
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
        <tr v-for="(item, index) in respondData" :key="item.prod_id">
          <td class="prod_img">
            <img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"  :alt="item.prod_name"/>
          </td>
          <td class="prod_name"><h3>{{ item.prod_name }}</h3></td>
          <td class="prod_status">{{ item.prod_status }}</td>
          <td class="prod_price">$ {{ item.prod_price }}</td>
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
              <h3 class="pc-h3">總金額</h3>
            </div>
            <div class="totalPriceAmount">
              <h3 class="pc-h3">$ {{ totalPriceCount }}</h3>
            </div>
          </div>
        </div>
    </div>
      </div>
    </transition>
      



    

   
    
    
    <form action="">
      
      <div class="orderPayment">
        <div class="orderInfo">
          <h2 class="pc-h3">訂購人資料</h2>
          <div class="name">
            <label for="memName">姓名</label>
            <input type="text" name="mem_name" id="memName" value="古迪錐" readonly>
          </div>
          <div class="phone">
            <label for="memTel">手機號碼</label>
            <input type="tel" name="mem_tel" id="memTel" value="0912345678" readonly>
          </div>
          <div class="adress">
            <label for="memAddr">地址</label>
            <input type="text" name="mem_addr" id="memAddr" value="桃園市中壢區古迪路123號" readonly>
          </div>
          <div class="email">
            <label for="memEmail">電子信箱</label>
            <input type="email" name="mem_email" id="memEmail" value="griddy@griddy.com" readonly>
          </div>
        </div>
        <div class="paymentInfo">
          <h2 class="pc-h3">付款資料</h2>
          <div class="payment">
            <label for="ordPayment">付款方式</label>
            <select name="ord_payment" id="ordPayment">
              <option value="">--請選擇--</option>
              <option value="">線上刷卡</option>
              <option value="">匯款轉帳</option>
              <option value="">貨到付款</option>
            </select>
          </div>
          <div class="bill">
            <lable for="memBill">發票</lable>
            <select type="tel" name="mem_bill" id="memBill">
              <option value="">--請選擇--</option>
              <option value="">電子發票</option>
              <option value="">紙本發票</option>
              <option value="">捐出發票</option>
            </select>
          </div>
        </div>
      </div>
      <div class="checkOutBtn_m">
        <button class="bookBtn" type="submit">
          送出訂單
        </button>
      </div>
      <div class="checkOutBtn_pc">
        <button class="btn_lg_orange" type="submit">
          送出訂單
        </button>
      </div>
    </form>
    


  </main>
</template>

<script>
import axios from "axios";
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
      cartData: [],
      discountCode: "",
      deliveryMethod: "init",
      subTotalAmount: 1300,
      deliveryAmount: 0,
      discountAmount: 0,
      showContent: true,
    };
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
    cart() {
      return this.userStore.getCart;
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
    toggleContent(e) {
      this.showContent = !this.showContent;
    },

  },
  mounted() {},
};
</script>
