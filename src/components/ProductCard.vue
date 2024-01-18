<template>
  <div class="productCard">
    <div class="productPic">
      <img :src="imgUrl" :alt="productTitle" />
    </div>
    <div class="productTag">
      <span>1-5人</span>
      <span>益智遊戲</span>
      <span>團隊合作</span>
    </div>
    <h3>{{ productTitle }}</h3>
    <div class="price">
      <span>{{ productPrice }}</span>
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
  props: ["imgUrl", "productTitle", "productPrice"],
  methods: {},
  mounted() {},
};
</script>
