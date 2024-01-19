<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {
      respondData: [],
      displayData: [],
      value: 0,
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
    <div class="hotProductBackground">
      <div class="hotProduct">
        <div class="hotTitle">
          <div class="hotTitleDash">——————</div>
          <div class="hotTitleText">熱銷商品</div>
          <div class="hotTitleDash">——————</div>
        </div>

        <Carousel v-model="value" loop>
          <CarouselItem v-for="item in displayData">
            <div class="hotProductBody">
              <div class="hotProductImg">
                <img
                  :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
                />
              </div>
              <div class="hotproductInfo">
                <a href="#">
                  <h3>{{ item.prod_name }}</h3>
                </a>
                <div class="hotproductTag">
                  <span>1-5人</span>
                  <span>益智遊戲</span>
                  <span>團隊合作</span>
                </div>
                <div class="hotProductPrice">
                  <span>${{ item.prod_price }}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <!-- <CarouselItem>
            <div class="hotProductBody">
              <div class="hotProductImg">
                <img src="https://fakeimg.pl/415x355/200" />
              </div>
              <div class="hotproductInfo">
                <a href="#">
                  <h3>阿瓦蟲</h3>
                </a>
                <div class="hotproductTag">
                  <span>1-5人</span>
                  <span>益智遊戲</span>
                  <span>團隊合作</span>
                </div>
                <div class="hotProductPrice">
                  <span>$500</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="hotProductBody">
              <div class="hotProductImg">
                <img src="https://fakeimg.pl/415x355/200" />
              </div>
              <div class="hotproductInfo">
                <a href="#">
                  <h3>阿瓦蟲</h3>
                </a>
                <div class="hotproductTag">
                  <span>1-5人</span>
                  <span>益智遊戲</span>
                  <span>團隊合作</span>
                </div>
                <div class="hotProductPrice">
                  <span>$500</span>
                </div>
              </div>
            </div>
          </CarouselItem> -->
        </Carousel>
      </div>
    </div>

    <div class="productBackground">
      <div class="product">
        <ProductCard
          v-for="item in displayData"
          :productTitle="item.prod_name"
          :imgUrl="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`"
          :productPrice="item.prod_price"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
//
</style>
