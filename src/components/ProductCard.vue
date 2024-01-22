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
        <span>1-5人</span>
        <span>益智遊戲</span>
        <span>團隊合作</span>
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
        <span>${{ productPrice }}</span>
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
  props: ["imgUrl", "productTitle", "productPrice", "productId"],
  methods: {
    addCart() {
      this.$emit("addCartData");
    },
  },
  mounted() {},
};
</script>
