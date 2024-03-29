import { defineStore } from "pinia";
export default defineStore("cartStore", {
  // 對應 data
  state: () => ({
    cartData: [],
    deliveryPrice: 0,
    discountPrice: 0,
    validDiscountCodes: [],
  }),
  getters: {
    subTotalPrice() {
      // 使用 computed 屬性計算總價
      return this.cartData.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
    deliveryAmount() {
      return this.deliveryPrice;
    },
    discountAmount() {
      return this.discountPrice;
    },
    totalPrice() {
      return this.subTotalPrice + this.deliveryAmount - this.discountAmount;
    },
  },
  actions: {
    getLocalCartData() {
      let localCartData = localStorage["cartData"];
      let localDelPrice = localStorage["deliveryPrice"];
      let localDiscPrice = localStorage["discountPrice"];
      if (localCartData) {
        this.cartData = JSON.parse(localCartData);
      }
      if (localDelPrice) {
        this.deliveryPrice = parseInt(localDelPrice);
      }
      if (localDiscPrice) {
        this.discountPrice = parseInt(localDiscPrice);
      }
    },
    addCartData(product, addCount = 1) {
      const resultIndex = this.cartData.findIndex((item) => {
        // 如果報錯需要確認資料來源的key是什麼
        return item.id == product.prod_id;
      });
      if (resultIndex < 0) {
        this.cartData.push({
          id: product.prod_id,
          name: product.prod_name,
          price: product.prod_discount_price
            ? product.prod_discount_price
            : product.prod_price,
          img: product.prod_img1,
          count: addCount,
        });
      } else {
        // 購物車裡面有這筆資料，要把count+addcount
        const oldCount = this.cartData[resultIndex]["count"];
        this.cartData[resultIndex] = {
          ...this.cartData[resultIndex],
          count: oldCount + addCount,
        };
      }
      localStorage["cartData"] = JSON.stringify(this.cartData);
      console.log(this.cartData);
    },
    deliveryMethodChange(method) {
      if (method === "homeDelivery") {
        this.deliveryPrice = 80;
      } else if (method === "pickup" || method === "init") {
        this.deliveryPrice = 0;
      }
      localStorage["deliveryPrice"] = this.deliveryPrice;
    },
    discountCodeCheck(discountCode) {
      const matchedCode = this.validDiscountCodes.find(
        (item) => item.promo_code == discountCode
      );
      const discountAmount = matchedCode ? matchedCode.promo_amount : 0;
      this.discountPrice = discountAmount;
      localStorage["discountPrice"] = this.discountPrice;
    },
    reduceFromCart(product) {
      const productIndex = this.cartData.findIndex(
        (item) => item.id == product.id
      );
      if (this.cartData[productIndex]) {
        if (this.cartData[productIndex]["count"] > 1) {
          this.cartData[productIndex] = {
            ...this.cartData[productIndex],
            count: this.cartData[productIndex]["count"] - 1,
          };
        }
      }
      localStorage["cartData"] = JSON.stringify(this.cartData);
    },
    increaseFromCart(product) {
      const productIndex = this.cartData.findIndex(
        (item) => item.id == product.id
      );
      if (this.cartData[productIndex]) {
        this.cartData[productIndex] = {
          ...this.cartData[productIndex],
          count: this.cartData[productIndex]["count"] + 1,
        };
      }
      localStorage["cartData"] = JSON.stringify(this.cartData);
    },
    itemDelFormCart(product) {
      const productIndex = this.cartData.findIndex(
        (item) => item.id == product.id
      );
      if (this.cartData[productIndex]) {
        this.cartData.splice(productIndex, 1);
      }
      if (this.cartData.length == 0) {
        this.deliveryPrice = 0;
        this.discountPrice = 0;
      }
      localStorage["deliveryPrice"] = this.deliveryPrice;
      localStorage["discountPrice"] = this.discountPrice;
      localStorage["cartData"] = JSON.stringify(this.cartData);
    },
    clearCartData() {
      this.cartData = [];
      this.deliveryPrice = 0;
      this.discountPrice = 0;
    },
    setPromoData(promo) {
      this.validDiscountCodes = promo;
    },
  },
});
