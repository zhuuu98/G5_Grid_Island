<template>
  <div class="boardTag">
    <div class="board_tag_btn">
      <RouterLink to="/board" class="btn_secondary">留言區</RouterLink>
      <RouterLink to="/team" class="btn_secondary">報隊區</RouterLink>
    </div>
    <div class="board_article">
      <div class="board_article_btn">我要發文</div>
      <select>
        <option value="" selected>從新至舊</option>
        <option value="">從舊至新</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: [],
  methods: {
    
  },
  mounted() {},
};
</script>
