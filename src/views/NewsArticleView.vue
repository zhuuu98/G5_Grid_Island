<template>
  <main class="newArticle">
    <div class="newArticleTitle">
      <h1>{{ item.prod_title }}</h1>
    </div>
    
    <div class="content">
      <div class="btn">
        <font-awesome-icon :icon="['fas', 'th']" />
        <font-awesome-icon :icon="['fas', 'th-list']" />
    </div>

      <div class="cardList">
       
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