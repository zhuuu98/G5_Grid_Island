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

    <div class="content">
      <div class="btn">
        <div class="thBtn" @click="romoveListClassName">
          <font-awesome-icon :icon="['fas', 'th']" />
        </div>
        <div class="listBtn" @click="addListClassName">
          <font-awesome-icon :icon="['fas', 'th-list']" />
        </div>
      </div>
      <div class="cardList">
        <NewsCard
          v-for="(item, index) in respondData"
          :key="item.news_id"
          :newsTitle="item.news_title"
          :newsDate="item.news_date"
          :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"
          :newsId="item.news_id"
          :class="{ noneShow: noneShow }"
        />

        <NewsRow
          v-for="(item, index) in respondData"
          :key="item.news_id"
          :newsTitle="item.news_title"
          :newsDate="item.news_date"
          :imgUrl="`https://tibamef2e.com/chd103/g1/image/news/${item.news_img}`"
          :newsId="item.news_id"
          :newsContent="item.news_content"
          :class="{ noneShow: !noneShow }"
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

    };
  },
  components: {
    PageTitle,
    NewsCard,
    NewsRow,

  },
  computed: {
    loading() {
      return this.respondData.length == 0;
    },
  },
  created() {
    this.axiosGetData();
    fetchTitle();
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
    addListClassName() {
      this.noneShow = true;
    },
    romoveListClassName() {
      this.noneShow = false;
    },
    fetchTitle() {
            axios.post(`${import.meta.env.VITE_API_URL}/ssss.php`, {
            // axios.post('https://fakestoreapi.com/auth/login', {
                username: this.accName,
                password: this.au4a83
            })
            .then(response => {
                if (response.data && response.data.token) {
                    this.updateToken(response.data.token)
                    // console.log('login')
                    // console.log(response.data.token);
                }
            })
            .catch(error => console.error(error))
            //登入失敗
            //系統維護中
        }
  },
  mounted() {},
};
</script>
