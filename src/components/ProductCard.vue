<template>
  <div class="productCard">
    <router-link
      :to="{
        name: 'productInfo',
        params: { id: productId },
      }"
    >
      <div class="productPic">
        <img :src="imgUrl" :alt="productTitle" />
        <div class="productPic_Mask">
          <font-awesome-icon
            class="searchIcon"
            :icon="['fas', 'magnifying-glass']"
          />
        </div></div
    ></router-link>
    <div class="productInfo">
      <div class="productTag">
        <span v-for="item in tags">
          {{ item }}
        </span>
      </div>
      <router-link
        :to="{
          name: 'productInfo',
          params: { id: productId },
        }"
      >
        <h3>{{ productTitle }}</h3>
      </router-link>
      <div class="price">
        <span :class="{ ordinaryPrice: productDiscountPrice }"
          >${{ productPrice }}</span
        >
        <span class="discountPrice" v-if="productDiscountPrice"
          >${{ productDiscountPrice }}</span
        >
      </div>
      <div class="addCart" @click="addCart">
        <font-awesome-icon icon="cart-shopping" class="cart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: [
    "imgUrl",
    "productTitle",
    "productPrice",
    "productDiscountPrice",
    "productId",
    "tags",
  ],
  methods: {
    addCart(info) {
      this.$emit("addCartData", info);
      alert("已增加至購物車");
    },
  },
  mounted() {},
};
</script>
