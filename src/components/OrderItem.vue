<template>
  <div class="orderItem">
    <router-link
      :to="{
        name: 'productInfo',
        params: { id: productId },
      }"
    >   
      <div class="itemImg">
        <img :src="imgUrl" :alt="productTitle">
      </div>
    </router-link>
      <div class="orderItemDetail">
        <div class="orderItemArea">
          <div class="name">
            <router-link :to="{ name: 'productInfo', params: { id: productId },}">
            <h4>{{ productTitle }}</h4>
            </router-link>
          </div>
          <div class="price">
            <h3>$ {{ productPrice }}</h3>
          </div>
        </div>
      </div>
      <span class="amount">
        x
        {{ productStatus }}
      </span>


        </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: ["imgUrl", "productTitle", "productPrice", "productStatus", "productId"],
  methods: {
  },
  mounted() {},
};
</script>
