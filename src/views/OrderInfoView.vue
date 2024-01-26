<template>
  <main class="orderInfo">

    <div class="orderInfoTitle">
      <h2>訂單資訊</h2>
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </div>

    <div>
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
