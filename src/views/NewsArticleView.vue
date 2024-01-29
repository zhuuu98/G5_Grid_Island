<template>
  <main class="newsArticle">
    <div class="title">
      <h1>text</h1>
      <h1>{{ respondData.news_title }}</h1>
    </div>
    <div class="newsImg">
      <img :src="`https://tibamef2e.com/chd103/g1/image/news/${respondData.news_img}`">
    </div>
    <div class="content">
      <span>{{ respondData.news_content }}</span>
    </div>
  </main>
</template>


<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";


export default {
  data() {
    return {
      respondData: [],

    };
  },
  components: {
    PageTitle,
  },
  computed: {
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g1/phps/news_fetch.php")
        .then((res) => {
          console.log(res.data);
          this.respondData = res.data;
        });
    },
  },
  mounted() {},
};
</script>