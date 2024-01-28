<template>
  <main class="news">
    <div class="newsTitle">
      <h1>
        <PageTitle :pageTitle="'最新消息'" />
      </h1>
    </div>
    <div class="content">

      <div v-for="(item, index) in respondData" :key="index" class="newCard">
        <div class="newsImg">
          <img :src="`https://tibamef2e.com/chd103/g5/img/${item.prod_img1}`">
        </div>
        <div class="text">
          <div class="title">
            <h2 class="pc-h4">{{ item.prod_name }}</h2>
          </div>
          <div class="date pc-h5">2024年1月20日</div>
        </div>
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
  computed: {
  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      axios
        .get("https://tibamef2e.com/chd103/g5/phps/ProductM.php")
        .then((res) => {
          console.log(res.data);
          this.respondData = res.data;
        });
    },
  },
  mounted() {},
};
</script>