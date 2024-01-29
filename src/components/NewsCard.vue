<template>
  <div class="newsCard">
    <router-link
      :to="{
        name: 'productInfo',
        params: { id: productId },
      }"
    >   
    <div class="newsImg">
      <img :src="imgUrl" :alt="productTitle">
    </div>
    </router-link>
    <div class="text">
      <div class="title">
        <router-link
      :to="{
        name: 'productInfo',
        params: { id: productId },
      }"
    >   
          <h2 class="pc-h4">{{ productTitle }}</h2>
        </router-link>
      </div>
      <div class="date pc-h5">2024年1月20日</div>
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
  props: ["imgUrl", "productTitle", "productId"],
  methods: {
  },
  mounted() {},
};
</script>
