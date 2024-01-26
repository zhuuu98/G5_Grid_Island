<template>
  <div class="about">
    <PageTitle :pageTitle="'關於我們'" />
    <div class="container">
      <div class="row">
        <div class="col-PC-12 col-T-10 col-12">

          <div class="about_gi">
            <div class="teeth"></div>
              <div class="about_gi_intro">

              </div>
          </div>
          <div class="about_en"></div>
          <div class="about_griddy"></div>
          <div class="about_info"></div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
export default {
  data() {
    return { 
      card:[],
    };
  },
  computed: {
    
  },
  components: {
    PageTitle,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">

</style>
