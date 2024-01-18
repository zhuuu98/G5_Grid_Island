<template>
  <div class="productCard">
    <div class="productPic">
      <img :src="imgUrl" :alt="productTitle" />
    </div>
    <h3>{{ productTitle }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: ["imgUrl", "productTitle"],
  methods: {},
  mounted() {},
};
</script>
