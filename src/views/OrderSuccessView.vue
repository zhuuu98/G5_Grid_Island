<template>
  <main class="orderSuccess">
    <font-awesome-icon :icon="['far', 'check-circle']" spin size="sm" />
    <div class="text">
      <span class="title pc-h2">訂購成功</span>
      <span class="detail pc-h3">您已訂購成功，我們將盡快為您出貨</span>
    </div>
    <div class="link">
      <router-link to="./" class="btn_secondary_border">回到首頁</router-link>
      <router-link to="" class="btn_secondary">訂單資訊</router-link>
    </div>



  </main>
</template>

<script>
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
  },
  created() {
  },
  methods: {
  },
  mounted() {},
};
</script>
