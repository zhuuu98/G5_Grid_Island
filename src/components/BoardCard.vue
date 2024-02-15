<template>
  <div class="board_card" v-if="item.report_state == 0">
    <div class="board_info">
      <div class="board_id">
        <div class="board_id_img">
          <!-- <img :src="item.id_img" :alt="item.id_img_alt"> -->
          <img src="/images/board/board_id_img.svg" :alt="item.id_img_alt">
        </div>
        <div class="board_id_info">
          <div class="board_memId" v-if="item.mem_nickname == null">{{ item.mem_name }}</div>
          <div class="board_memId" v-else>{{ item.mem_nickname }}</div>
          <div class="board_time">{{ item.msg_datetime }}</div>
        </div>
      </div>
      <div class="board_msg">
        <p>{{ item.msg_content }}</p>
      </div>
      <div class="board_re_type">
        <div class="reply_subtitle">回覆留言</div>
        <!-- <input type="text" placeholder="輸入回覆內容..."> -->
        <div class="board_re_input">
          <input type="text" placeholder="輸入回覆內容...">
          <div class="board_re_send">
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
    <!-- <div class="board_re" :class="{hide: !isOpen || item.re.length === 0}"> -->
    <!-- <div class="board_re" :class="{ hide: !isOpen || item.re.length === 0, '--is-always-hide': item.re.length === 0 }"> -->
    <div class="board_re" :class="{ hide: !isOpen }">
      <div class="board_re_card" v-for="(reItem, reIndex) in item.replies" :key="reIndex">
        <div class="board_re_id">
          <div class="board_re_id_img">
            <img src="/images/board/board_id_img.svg" :alt="item.id_img_alt">
            <!-- <img :src="reItem.img" :alt="reItem.alt"> -->
          </div>
          <div class="board_re_id_info">
            <div class="board_re_memId">{{ reItem.reply_memName }}</div>
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
      isOpen: false
    }
  },
  methods: {
    //留言開關
    toggleReply() {
      this.isOpen = !this.isOpen
    },
    open_light_box_report() {
      this.$emit('open-report')
    },
  },
};
</script>
