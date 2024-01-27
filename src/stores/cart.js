import { defineStore } from "pinia";
export default defineStore("cartStore", {
  // 對應 data
  state: () => ({
    cartData: [],
    deliveryPrice: 0,
    discountPrice: 0,
    validDiscountCodes: ["GridIsland", "GridIsland2023"],
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
    addCartData(product, addCount = 1) {
      const resultIndex = this.cartData.findIndex((item) => {
        // 如果報錯需要確認資料來源的key是什麼
        return item.id == product.prod_id;
      });
      if (resultIndex < 0) {
        this.cartData.push({
          id: product.prod_id,
          name: product.prod_name,
          price: product.prod_price,
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
      console.log(this.cartData);
    },
    deliveryMethodChange(method) {
      if (method === "homeDelivery") {
        this.deliveryPrice = 80;
      } else if (method === "pickup") {
        this.deliveryPrice = 0;
      }
    },
    discountCodeCheck(discountCode) {
      if (this.validDiscountCodes.includes(discountCode)) {
        this.discountPrice = 50;
      } else {
        console.log("hi");
        this.discountPrice = 0;
      }
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
    },
    itemDelFormCart(product) {
      const productIndex = this.cartData.findIndex(
        (item) => item.id == product.id
      );
      if (this.cartData[productIndex]) {
        this.cartData.splice(productIndex, 1);
      }
    },
  },
});
