<template>
    <div class="modal-container" v-if="isModalVisible">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <p>您的大頭貼已成功設定！</p>
        <div class="modal-actions">
          <button @click="remainOnPage">停留在此頁面</button>
          <button @click="navigateToMemberCenter">前往會員中心</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SetMemPic",
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      remainOnPage() {
        this.closeModal();
        // 留在當前頁面的操作
      },
      navigateToMemberCenter() {
        this.closeModal();
        // 使用vue-router導航到會員中心的操作
        this.$router.push('/member');
      }
    }
  };
  </script>
  