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
      <div class="btn">
        <button class="btn_lg_orange" @click="shareOnFacebook">Facebook分享</button>
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
      netData:{
        news_id: null,
      }
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
          this.netData= result;
        });
    },
    shareOnFacebook() {
      // 檢查 netData 是否存在並且有 news_id 屬性
      if (this.netData && this.netData.news_id) {
        // 使用 Facebook SDK 的功能
        FB.ui({
          method: 'share',
          href: `https://tibamef2e.com/chd104/g5/front/newsArticle/${this.netData.news_id}`,
        });
      } else {
        console.log('連結無效');
      }
    },
  },

  mounted() {},
};
</script>
