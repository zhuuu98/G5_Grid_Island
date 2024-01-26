import { defineStore } from "pinia";
export default defineStore("cartStore", {
  // 對應 data
  state: () => ({
    cartData: [],
  }),
  getters: {
    totalPrice() {
      // 使用 computed 屬性計算總價
      return this.cartData.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
  },
  actions: {
    addCartData(product, addCount = 1) {
      const resultIndex = this.cartData.findIndex((item) => {
        // 如果報錯需要確認資料來源的key是什麼
        return item.id == product.prod_id;
      });
      if (resultIndex < 0) {
        console.log("hi");
        this.cartData.push({
          id: product.prod_id,
          name: product.prod_name,
          price: product.prod_price,
          img: product.prod_img1,
          count: addCount,
        });
      } else {
        console.log("Hello");
        // 購物車裡面有這筆資料，要把count+1
        const oldCount = this.cartData[resultIndex]["count"];
        this.cartData[resultIndex] = {
          ...this.cartData[resultIndex],
          count: oldCount + addCount,
        };
      }
      console.log(this.cartData);
    },
  },
});
