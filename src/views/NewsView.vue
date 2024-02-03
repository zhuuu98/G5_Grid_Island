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
		<MainHeader></MainHeader>
    <div class="cuppon"  v-if="cuppon">
			<div class="btn" @click="closeCuppon">
				<font-awesome-icon :icon="['fas', 'times']" />
			</div>
			<div class="subContent">
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
				<span>1/31 - 2/20 全館線上商品熱銷中，立即輸入優惠碼: GridIsland2023
					折抵🐛🐛🐛🐛🐛🐛🐛
				</span>
			</div>
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
import MainHeader from "../components/MainHeader.vue";


export default {
  data() {
    return {
      respondData: [],
      noneShow: false,
      cuppon: true

    };
  },
  components: {
    PageTitle,
    NewsCard,
    NewsRow,
    MainHeader,

  },
  computed: {
    loading() {
      return this.respondData.length == 0;
    },
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
    addListClassName() {
      this.noneShow = true;
    },
    romoveListClassName() {
      this.noneShow = false;
    },
    closeCuppon() {
      console.log("Button Clicked!");
				this.cuppon = false;
    },

  },
  mounted() {},
};
</script>
