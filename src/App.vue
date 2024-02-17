<!-- 由於目前用option API寫法，setup不要有(有時候會出錯) -->
<script>
import { RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import ChatBot from "./components/ChatBot.vue";

export default {
  data() {
    return {};
  },
  watch:{
    $route(to) {
      const siteName = this.$siteName || 'GridIsland';
      document.title = `${siteName + ' | ' }${to.meta.title ? to.meta.title : ''}`;
    }
  },
  components: {
    MainHeader,
    RouterView,
    MainFooter,
    ChatBot,
  },
  mounted() {},
};
</script>

<!-- <template>
  <MainHeader />
  <RouterView />
  <ChatBot />
  <MainFooter />
</template> -->
<template>
  <RouterView v-slot="{ Component, route }">
    <MainHeader v-if="route.meta.showHeader !== false" />
    <component :is="Component" />
    <ChatBot />
    <MainFooter/>
  </RouterView>
</template>
