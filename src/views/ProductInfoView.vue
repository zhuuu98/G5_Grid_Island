<template>
  <main class="productInfo">
    <h1>產品</h1>
    <h3>{{ $route.params.id }}</h3>
    <div v-if="!nodata">noData</div>
    <div v-else>
      {{ respondData }}
    </div>
  </main>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {
      search: "",
      respondData: {},
      displayData: [],
      value: 0,
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    nodata() {
      return this.respondData && this.respondData.prod_id;
    },
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      const pageId = this.$route.params.id;
      // axios.get(`https://fakestoreapi.com/products/${pageId}`).then((res) => {
      //   console.log(res.data);
      //   this.respondData = res.data;
      //   // this.displayData = res.data;
      // });
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          const allProduct = res.data;
          const result = allProduct.find((item) => {
            return item.prod_id == pageId;
          });
          console.log(result);
          this.respondData = result;
          // this.displayData = res.data;
        });
    },
    handleSearch() {
      this.displayData = this.respondData.filter((item) => {
        return item.prod_name.includes(this.search);
      });
    },
  },
  watch: {
    search(newSearch, oldSearch) {
      // console.log("new:" + newSearch);
      // console.log("old:" + oldSearch);
      // 可以調用 methods
    },
    respondData(newData) {
      // console.log(newData.length);
    },
    // 如果畫面一開始要監聽要設成 true
    // immediate: true,
    // 如果要監聽陣列或物件要設稱 true
    // deep: true,
  },
  mounted() {},
};
</script>

<style lang="scss">
//
</style>
