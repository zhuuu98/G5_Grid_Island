<template>
  <main class="news">
    <transition name="fade">
      <div class="loadingMask" v-if="loading" name="fade">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </transition>
    <div class="newsTitle">
      <h1>
        <PageTitle :pageTitle="'最新消息'" />
      </h1>
    </div>
    <div class="breadcrumb">
      <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
        <BreadcrumbItem to="/">首頁</BreadcrumbItem>
        <BreadcrumbItem to="/news">最新消息</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <div class="content">
      <div class="btn">
        <div class="thBtn" @click="addListClassName">
          <font-awesome-icon :icon="['fas', 'th']" />
        </div>
        <div class="listBtn" @click="removeListClassName">
          <font-awesome-icon :icon="['fas', 'th-list']" />
        </div>
      </div>
      <div class="cardList">

        <NewsCard
          v-for="(item, index) in newsData"
          :key="item.news_id"
          :newsTitle="item.news_title"
          :newsDate="item.news_date"
          :imgUrl="`https://tibamef2e.com/chd104/g5/image/news/${item.news_image}`"
          :newsId="item.news_id"
          :newsContent="item.news_content"
          :newsCategory="item.news_category"
          :class="{ noneShow: !noneShow }"
        />
        <NewsRow
          v-for="(item, index) in newsData"
          :key="item.news_id"
          :newsTitle="item.news_title"
          :newsDate="item.news_date"
          :imgUrl="`https://tibamef2e.com/chd104/g5/image/news/${item.news_image}`"
          :newsId="item.news_id"
          :newsContent="item.news_content"
          :newsCategory="item.news_category"
          :class="{ noneShow: noneShow }"
        />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
import NewsCard from "../components/NewsCard.vue";
import NewsRow from "../components/NewsRow.vue";


export default {
  data() {
    return {
      respondData: [],
      noneShow: false,
      newsData:[],
    };
  },
  components: {
    PageTitle,
    NewsCard,
    NewsRow,

  },
  computed: {
    loading() {
      return this.newsData.length == 0;
    },
  },
  created() {
    this.fetchNews();
  },
  methods: {
    addListClassName() {
      this.noneShow = true;
    },
    removeListClassName() {
      this.noneShow = false;
    },
    fetchNews() {
      let url = `${import.meta.env.VITE_API_URL}/getNews.php`;
      console.log(url);
      axios
        .get(url, {})
        .then(res => {
          console.log(res.data.news);
          this.newsData = res.data.news;
        })
        .catch(error => console.error('發生錯誤:',error))
    },
  },
  mounted() {},
};
</script>
