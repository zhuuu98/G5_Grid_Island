<!-- 由於目前用option API寫法，setup不要有(有時候會出錯) -->
<script>
import { RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import ChatBot from "./components/ChatBot.vue";
import BackToTop from "./components/BackToTop.vue";

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
    BackToTop,
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
    <!-- <ChatBot v-if="route.meta.showChatBot !== false" /> -->
    <ChatBot :class="{ 'home-chatbot-style': route.name === 'home' }" v-if="route.meta.showChatBot !== false" />
    <BackToTop v-if="route.meta.showBackToTop !== false" />
    <MainFooter/>
  </RouterView>
</template>
