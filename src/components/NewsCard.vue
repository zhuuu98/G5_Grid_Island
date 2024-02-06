<template>
      <router-link
      :to="{
        name: 'newsArticle',
        params: { id: newsId },
      }"
    >   
  <div class="newsCard">

    <div class="newsImg">
      <img :src="imgUrl" :alt="newsTitle">
    </div>
    
    <div class="text">
      <div class="title">
        <h2 class="pc-h4">{{ newsTitle }}</h2>
      </div>
      <div class="date pc-h5">{{ formattedDate }}</div>
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
  props: ["imgUrl", "newsTitle", "newsDate", "newsId"],
  methods: {
  },
  computed: {
    formattedDate() {
      const date = new Date(this.newsDate);
      return date.toISOString().split('T')[0];
    },
  },
  mounted() {},
};
</script>
