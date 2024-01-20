<template>
  <div>404 Not found</div>
  <button @click="goHome">回首頁</button>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
