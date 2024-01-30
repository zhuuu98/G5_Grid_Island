<template>
  <main class="newsArticle">
    <div class="title">
      <h1>text</h1>
      <h1>{{ $route.params.id }}</h1>
    </div>
    <div class="newsImg">
      <img
        :src="`https://tibamef2e.com/chd103/g1/image/news/${respondData.news_img}`"
      />
    </div>
    <div class="content">
      <div class="title">
        <h1>桌遊夜：每週五晚上，來店體驗最新的桌遊大作！</h1>
        <h1>{{ respondData.news_title }}</h1>
      </div>
      <div class="newsImg">
        <img
          :src="`https://tibamef2e.com/chd103/g1/image/news/${respondData.news_img}`"
        />
        <img src="https://fakeimg.pl/1064x425/200" />
      </div>
      <div class="textContent">
        <span>{{ respondData.news_content }}</span>
        <span>
          隱藏在城市內的片段線索... 這是給那些人的活動訊息！
          「週五的桌遊之夜」laboriosam vero magni! Corrupti quia dolorem numquam
          magni molestiae aspernatur quos fuga, aut dolorum architecto Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Magni alias
          doloribus delectus aperiam beatae rem totam sit, ex, adipisci
          cupiditate id possimus, accusantium quis quibusdam! Eaque incidunt,
          ullam deleniti quod, ipsa veritatis eum pariatur eius quae sunt
          dolores ipsam ipsum possimus. Minus nihil voluptates porro repellat,
          neque est? Voluptatibus sint sunt asperiores in illo? Ipsam a ullam
          reprehenderit pariatur dolorum dolor architecto voluptate, sapiente
          totam sint facere vitae autem quam saepe itaque voluptas explicabo,
          animi quo alias, magni enim esse cumque? Maiores commodi accusamus
          harum minus suscipit optio, at deleniti inventore exercitationem
          aliquam natus ullam provident mollitia neque vel aspernatur, soluta
          quidem maxime! Rerum laboriosam officia nulla repudiandae excepturi
          architecto maiores! Placeat praesentium repellat rerum nesciunt,
          impedit voluptatibus, corporis a illo dolores eius, quae molestias
          necessitatibus. Sit ipsa ab recusandae sed vero vel qui! Alias officia
          pariatur culpa libero, voluptatem ut incidunt modi ratione quo labore
          ipsam sapiente eius fugit sequi facilis? Hic illum, odit sint, quos
          repudiandae soluta ratione ex temporibus eius adipisci accusantium
          quia sequi praesentium neque doloribus deleniti asperiores quo!
          Facere, id quam. Excepturi voluptate molestias aperiam a. Optio earum
          magnam quos labore debitis pariatur officia quo reiciendis, sequi
          mollitia excepturi consequatur, quisquam ratione necessitatibus
          quidem! Soluta commodi, magni eos quas laudantium id vitae consequatur
          rem illo dolor minima corporis dignissimos, tenetur quaerat. In omnis
          ullam eius nihil blanditiis ex velit quo reprehenderit. Perspiciatis
          error exercitationem alias fuga odio architecto id? Est corrupti hic
          aliquam quasi, labore alias optio harum iste repudiandae ipsam
          assumenda minus nobis illum ad ullam sunt cum maiores perferendis
          inventore repellat possimus voluptas amet blanditiis? Reiciendis, quae
          magnam, quos blanditiis cupiditate animi fuga ipsa aut earum, error
          eos totam. Veritatis voluptate repellendus delectus explicabo, dolore
          alias. Optio, repellat esse qui vitae mollitia, ullam nostrum
          explicabo dolorem cumque hic repudiandae laborum accusamus. Minima
          aperiam autem maxime, sequi perferendis quaerat qui odio amet debitis
          numquam commodi suscipit cupiditate quisquam unde sint corporis
          consectetur tempora ad, dolor sapiente maiores magni illo porro
          laudantium? Omnis magni quo repellendus dicta dolor odit temporibus
          tempore illo, sit aspernatur atque, error aut dolores eos in
          exercitationem mollitia odio vel architecto velit fugiat dolorem
          dolorum consequuntur voluptas? Tempora laboriosam nostrum impedit
          distinctio, commodi nihil cumque saepe, architecto expedita minima ab
          quia quam! Alias hic dolor et impedit soluta repellat. Consectetur
          adipisci esse officia totam quis deserunt illo labore, dolores
          aspernatur et laudantium doloremque corporis corrupti, enim
          voluptatibus quibusdam? Laborum incidunt corporis asperiores quo
          pariatur eaque animi eos, eligendi nemo laudantium ab, dicta totam
          illo consectetur adipisci facilis quisquam quod iure aspernatur
          commodi officiis consequatur cupiditate. Libero magnam tempore
          exercitationem fuga deserunt possimus omnis consequatur sit maxime,
          magni qui quidem eum molestias. Fuga quidem eius illo ipsa, sint ea!
          Cupiditate vel minus optio labore, vitae odio consequatur rem magni,
          adipisci aliquam repudiandae, nesciunt quam esse assumenda illo?
          Tempore aperiam odio doloribus laborum totam, voluptatem doloremque
          iste quam sapiente debitis. Blanditiis quasi obcaecati, provident
          nostrum quas quam, consequatur animi quis, facere illo ea qui eligendi
          porro quae quod fugit cupiditate. Voluptatum, quo nostrum.
        </span>
      </div>
      <div class="date">
        <span>{{ respondData.news_date }}</span>
        <span>2025-10-10測試</span>
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
