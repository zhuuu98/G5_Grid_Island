<template>
  <main class="cartItem">
    <div class="cartItemBackground">
      <div class="deleteBtn">
        <font-awesome-icon :icon="['fas', 'xmark']" class="xMark" />
      </div>
      <div class="cartItemContent">
        <router-link
          :to="{
            name: 'productInfo',
            params: { id: itemId },
          }"
        >
          <div class="cartItemPic">
            <img :src="itemPicUrl" :alt="itemName" />
          </div>
        </router-link>
        <div class="cartItemInfo">
          <router-link
            :to="{
              name: 'productInfo',
              params: { id: itemId },
            }"
          >
            <div class="cartItemName">
              <h3>{{ itemName }}</h3>
            </div>
          </router-link>
          <div class="cartItemPriceQuantity">
            <div class="cartItemPrice">
              <div class="cartItemDiscountPrice" v-if="itemDiscountPrice">
                <h3>{{ itemDiscountPrice }}</h3>
              </div>
              <div class="cartItemPrice">
                <h3>$ {{ itemPrice }}</h3>
              </div>
            </div>
            <div class="cartItemQuantity">
              <button @click="quantityChange('minus')">
                <span>-</span>
              </button>
              <input type="number" :value="productQuantity" />
              <button @click="quantityChange('plus')">
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productQuantity: 1,
    };
  },
  props: ["itemPicUrl", "itemName", "itemDiscountPrice", "itemPrice", "itemId"],
  methods: {
    quantityChange(method) {
      if (method == "plus") {
        this.productQuantity += 1;
      } else {
        if (this.productQuantity > 1) {
          this.productQuantity -= 1;
        }
      }
    },
  },
  mounted() {},
};
</script>
