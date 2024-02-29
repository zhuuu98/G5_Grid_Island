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
        <h4>{{ newsTitle }}</h4>
      </div>
      <div class="textContent">
        <span>{{ newsContent }}</span>
      </div>
      <div class="info">
        <div class="date">
          <p>{{ formattedDate }}</p>
        </div>
        <div class="category">
          <p>{{ newsCategory }}</p>
        </div>
      </div>
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
  props: ["imgUrl", "newsTitle", "newsDate", "newsId", "newsContent","newsCategory"],
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
