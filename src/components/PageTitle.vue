<template>
  <main class="pageTitle">
    <div class="pageTitleBackground">
      <div class="pageTitle">
        <h1>{{ pageTitle }}</h1>
      </div>
    </div>
    <div class="pageTitleWaveImg">
      <img src="@/assets/images/pageTitle/Wave.svg" alt="" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["pageTitle"],
  methods: {},
  mounted() {},
};
</script>
