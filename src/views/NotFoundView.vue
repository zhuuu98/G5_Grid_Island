<template>
  <div class="notFound">
    <div class="content">
      <div class="wrapper">
        <img src="../assets/images/404/404_emptyHouse.svg" alt="404-GridIsland-empty-House">
        <div class="textArea">
          <div class="text">
            <span>404</span><span>Not Found</span>
          </div>
          <button class="btn_secondary pc" @click="goHome">回首頁</button>
        </div>
      </div>
      <button class="btn_lg_orange mobile" @click="goHome">回首頁</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
