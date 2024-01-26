import { defineStore } from "pinia";
export default defineStore("cartStore", {
  // 對應 data
  state: () => ({
    cartData: [],
  }),
  actions: {
    addCartData(product) {
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
          count: 1,
        });
      } else {
        console.log("Hello");
        // 購物車裡面有這筆資料，要把count+1
        const oldCount = this.cartData[resultIndex]["count"];
        this.cartData[resultIndex] = {
          ...this.cartData[resultIndex],
          count: oldCount + 1,
        };
      }
      console.log(this.cartData);
    },
  },
});
