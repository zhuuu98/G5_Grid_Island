<script setup></script>

<script>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    MainHeader,
    MainFooter,
  },
  mounted() {},
};
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>
