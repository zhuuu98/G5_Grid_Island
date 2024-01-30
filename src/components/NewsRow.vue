<template>
      <router-link
      :to="{
        name: 'newsArticle',
        params: { id: newsId },
      }"
    >   
  <div class="newsRow">

    <div class="newsImg">
      <img :src="imgUrl" :alt="newsTitle">
    </div>
    
    <div class="text">
      <div class="title">
        <h2 class="pc-h4">{{ newsTitle }}</h2>
      </div>
      <div class="textContent">
        <span>{{ newsContent }}</span>
      </div>
      <div class="date pc-h5">{{ newsDate }}</div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: ["imgUrl", "newsTitle", "newsDate", "newsId", "newsContent"],
  methods: {
  },
  mounted() {},
};
</script>
