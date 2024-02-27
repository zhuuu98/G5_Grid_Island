<template>
  <main class="cartItem">
    <div class="cartItemBackground">
      <div class="deleteBtn" @click="itemChangeDel">
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
          <div class="cartItemName">
            <router-link
              :to="{
                name: 'productInfo',
                params: { id: itemId },
              }"
            >
              <h4>{{ itemName }}</h4>
            </router-link>
          </div>

          <div class="cartItemPriceQuantity">
            <div class="cartItemPrice">
              <div class="cartItemDiscountPrice" v-if="itemDiscountPrice">
                <h4>{{ itemDiscountPrice }}</h4>
              </div>
              <div class="cartItemPrice">
                <h4>$ {{ itemPrice }}</h4>
              </div>
            </div>
            <div class="cartItemQuantity">
              <button @click="quantityChangeMinus">
                <span>-</span>
              </button>
              <input type="number" :value="itemCount" readonly />
              <button @click="quantityChangePlus">
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
  props: [
    "itemPicUrl",
    "itemName",
    "itemDiscountPrice",
    "itemPrice",
    "itemId",
    "itemCount",
  ],
  methods: {
    quantityChangePlus() {
      this.$emit("quantityPlus");
    },
    quantityChangeMinus() {
      this.$emit("quantityMinus");
    },
    itemChangeDel() {
      console.log("del");
      this.$emit("itemDel");
    },
  },
  mounted() {},
};
</script>
