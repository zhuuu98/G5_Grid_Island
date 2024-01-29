<template>
  <main class="news">
    <div class="newsTitle">
      <h1>
        <PageTitle :pageTitle="'最新消息'" />
      </h1>
    </div>

    
    <div class="content">
      <div class="btn">
        <font-awesome-icon :icon="['fas', 'th']" />
        <font-awesome-icon :icon="['fas', 'th-list']" />
      </div>

      <div class="cardList">
        <NewsCard v-for="(item, index) in respondData" :key="item.news_id" :newsTitle="item.news_title" :newsDate="item.news_date" :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"/>
      </div>
   



    </div>
  </main>
</template>


<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
import NewsCard from "../components/NewsCard.vue";


export default {
  data() {
    return {
      respondData: [],

    };
  },
  components: {
    PageTitle,
    NewsCard,
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