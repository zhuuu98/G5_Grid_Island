<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProductCard,
  },
  created() {},
  mounted() {},
};
</script>
<template>
  <div class="product">
    <ProductCard :productTitle="'Hello'" />
  </div>
</template>

<style lang="scss"></style>
