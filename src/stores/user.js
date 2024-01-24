import { defineStore } from "pinia";
export default defineStore("userStore", {
  // 對應 data
  state: () => ({
    token: "",
    userData: {
      name: 'aaa'
    },
    cart: [
      {
        id: '111',
        amount: 4
      },
      {
        id: '113',
        amount: 1
      }
    ],
  }),
  // 對應 computed (物件形式)
  getters: {
    getUserName: (state) => `歡迎 ${state.userData.name}`,
    getCart: (state) => state.cart
  },
  // 對應 methods (物件形式)
  actions: {
    updateToken(token) {
      console.log(token);
    },
  },
});
