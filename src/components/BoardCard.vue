<template>
  <div class="board_card" :class="'card-' + item.msg_id" v-if="item.report_state == 0 || item.report_state == null">
    <div class="board_info">
      <div class="board_id">
        <div class="board_id_img">
          <img :src="fullImageUrl(item.mem_profile)" alt="會員頭貼">
        </div>
        <div class="board_id_info">
          <div class="board_memId">{{ item.mem_nickname == null || item.mem_nickname == "" ? item.mem_name :
            item.mem_nickname }}</div>
          <!-- <div class="board_memId" v-if="item.mem_nickname !== null">{{ item.mem_name }}</div>
          <div class="board_memId" v-else>{{ item.mem_nickname }}</div> -->
          <div class="board_time">{{ item.msg_datetime }}</div>
        </div>
      </div>
      <div class="board_msg">
        <p>{{ item.msg_content }}</p>
      </div>
      <div class="board_re_type">
        <div class="reply_subtitle">回覆留言</div>
        <div class="board_re_input">
          <input type="text" placeholder="輸入回覆內容..." v-model="re_text" class="re_area">
          <div class="board_re_send" @click="replyArticle">
            <font-awesome-icon :icon="['fas', 'circle-up']" />
          </div>
        </div>
      </div>
      <div class="board_all_re" @click="toggleReply" v-if="item.re_amount > 0">
        共有 {{ item.re_amount }} 則回覆
        <font-awesome-icon v-if="item.re_amount > 0" :class="{ 'board_rotate': item.isReplyOpen }" icon="angle-down" />
      </div>
      <div class="board_all_re" v-else style="cursor: default;">尚無回覆</div>
      <div class="board_report" @click="open_light_box_report">
        <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
      </div>
    </div>
    <!-- 留言區 -->
    <div class="board_re" :class="{ hide: !isOpen }">
      <div class="board_re_card" v-for="( reItem, reIndex ) in  item.replies " :key="reIndex">
        <div class="board_re_id">
          <div class="board_re_id_img">
            <img :src="fullImageUrl(reItem.reply_memProfile)" alt="會員頭貼">
          </div>
          <div class="board_re_id_info">
            <div class="board_memId">{{ reItem.reply_nickName == null || reItem.reply_nickName == "" ?
              reItem.reply_memName : reItem.reply_nickName }}</div>

            <!-- <div class="board_re_memId" v-if="reItem.reply_nickName == null || reItem.reply_nickName == '' ">{{ reItem.reply_memName }}</div>
            <div class="board_re_memId" v-else>{{ reItem.reply_nickName }}</div> -->
            <div class="board_re_time">{{ reItem.reply_time }}</div>
          </div>
        </div>
        <div class="board_re_msg">
          <p>{{ reItem.reply_content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      isOpen: false,
      re_text: "",
    }
  },
  methods: {
    //留言開關
    toggleReply() {
      this.isOpen = !this.isOpen
    },
    open_light_box_report() {
      this.$emit('open-report');
    },
    //判斷是否登入，有登入才可以留言
    replyArticle() {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        this.$emit('sent-reply', this.item.msg_id, this.re_text);
        this.re_text = "";
      } else {
        alert('登入後即可回覆！');
      }
    },
    fullImageUrl(memProfile) {
      return `${import.meta.env.VITE_API_URL}/images/mem/${memProfile}`;
    },
  },
};
</script>
