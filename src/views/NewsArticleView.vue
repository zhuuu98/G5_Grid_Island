<template>
  <main class="newsArticle">
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
    <div class="newsImg"></div>

      <div class="content">
        <div class="articleContent">
        <div class="title">
          <h2>{{ newsData.news_title }}</h2>
        </div>
        <div class="newsImg">
          <img
            :src="
            `https://tibamef2e.com/chd104/g5/image/news/${newsData.news_image}`"
          />
        </div>
        <div class="textContent">
          <span>{{ newsData.news_content }}</span>
        </div>
        <div class="date">
          <span>{{ formattedDate }}</span>
        </div>
        <div class="bottomArea">
          <div class="category" title="消息分類">
            <router-link to="/news">
              <p>{{ newsData.news_category }}</p>
            </router-link>
          </div>
          <div class="btn">
            <div v-show="!share" class="tableDiv"></div>
            <table v-show="share">
              <th></th>
              <tbody>
                <tr>
                  <td class="copy" ref="copy"><p @click="setCopyTextAndCopyLink">複製文章網址</p></td>
                </tr>
                <tr>
                  <td><p @click="shareOnFacebook">分享到Facebook</p></td>
                </tr>
              </tbody>
            </table>
            <div class="shareBtn" @click="showShareList">
              <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
import Clipboard from 'clipboard';

export default {
  data() {
    return {
      newsData: {},
      singleNews: {
        news_id: null,
      },
      pageId: null,
      share: false,
      clipboard: null,
      copyText:``,
    };
  },
  components: {
    PageTitle,
  },
  computed: {
    loading() {
      return this.newsData.length == 0;
    },
  },
  created() {
    this.fetchNews();
    this.pageId = this.$route.params.id; // 將路由參數賦值給 pageId
  },
  methods: {
    setCopyTextAndCopyLink() {
      this.copyText = `https://tibamef2e.com/chd104/g5/front/newsArticle/${this.$route.params.id}`;
      this.copyLink();
    },
    copyLink() {
      if (this.clipboard && this.$refs.copy) {
      this.clipboard.click({ delegateTarget: this.$refs.copy });
      alert('已複製到剪貼板');
    }
      // this.clipboard.click({ delegateTarget: this.$refs.copy});
      // alert('已複製到剪貼板');
    },
    showShareList() {
      this.share = !this.share;
    },
    shareOnFacebook() {
      console.log('分享連結:', `https://tibamef2e.com/chd104/g5/front/newsArticle/${this.newsData.news_id}`);      
      // 檢查 netData 是否存在並且有 news_id 屬性
      if (this.newsData && this.newsData.news_id) {
        // 使用 Facebook SDK 的功能
        FB.ui({
          method: "share",
          href: `https://tibamef2e.com/chd104/g5/front/newsArticle/${this.newsData.news_id}`,
        }, function(response) {
          if (response && !response.error_message) {
            console.log('分享成功');
          } else {
            console.log('分享失敗或取消');
          }
        });
      } else {
        console.log("連結無效");
      }
    },
    fetchNews() {
        axios
          .post(`${import.meta.env.VITE_API_URL}/getNews.php`, {})
          .then(res => {
            const allNews = res.data.news;
            const result = allNews.find((item) => {
              return item.news_id == this.pageId;
            });
            // console.log(result);
            this.newsData = result;
            this.singleNews = result;
          })
          // .catch(error => console.error('發生錯誤:',error))
    }
  },
    computed: {
    formattedDate() {
      const date = new Date(this.newsData.news_date);
      return date.toISOString().split('T')[0];
    },
  },
  mounted() {
    this.clipboard = new Clipboard(this.$refs.copy, {
      text: () => this.copyText
    });

    this.clipboard.on('success', (e) => {
      console.log('已複製到剪貼板');
      e.clearSelection();
    });

    this.clipboard.on('error', (e) => {
      console.error('複製失敗');
    });
    window.fbAsyncInit = function() {
        FB.init({
          appId: '965775104890616',
          xfbml: true,
          version: 'v19.0'
        });
      };
    // window.fbAsyncInit = function () {
    //   FB.init({
    //     appId: '965775104890616',
    //     xfbml: true,
    //     version: 'v19.0'
    //   });
    //   FB.AppEvents.logPageView();
    // };

    // // 在這裡動態載入 Facebook SDK 腳本
    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
  },
  beforeUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  },
};
</script>
