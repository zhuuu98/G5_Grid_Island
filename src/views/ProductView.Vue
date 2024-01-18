<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {
      respondData: [],
      displayData: [],
    };
  },
  components: {
    ProductCard,
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
          this.displayData = res.data;
        });
    },
    mounted() {},
  },
};
</script>
<template>
  <div class="product">
    <ProductCard
      v-for="item in displayData"
      :productTitle="item.prod_name"
      :imgUrl="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
      :productPrice="item.prod_price"
    />
  </div>
</template>

<style lang="scss"></style>
