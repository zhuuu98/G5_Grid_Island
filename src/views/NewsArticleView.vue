<template>
  <main class="newsArticle">
    <div class="newsImg">
    </div>
    <div class="content">
      <div class="title">
        <h1>{{ respondData.news_title }}</h1>
      </div>
      <div class="newsImg">
        <img
        :src="`https://tibamef2e.com/chd103/g1/image/news/${respondData.news_img}`"
      />
      </div>
      <div class="textContent">
        <span>{{ respondData.news_content }}</span>
      </div>
      <div class="date">
        <span>{{ respondData.news_date }}</span>
      </div>
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
  computed: {},
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      const pageId = this.$route.params.id;
      axios
        .get("https://tibamef2e.com/chd103/g1/phps/news_fetch.php")
        .then((res) => {
          const allNews = res.data;
          const result = allNews.find((item) => {
            return item.news_id == pageId;
          });
          console.log(result);
          this.respondData = result;
        });
    },
  },
  mounted() {},
};
</script>
