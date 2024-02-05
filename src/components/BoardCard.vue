<template>
    <div class="board_card">
      <div class="board_info">
        <div class="board_id">
          <div class="board_id_img">
            <img :src="item.id_img" :alt="item.id_img_alt">
          </div>
          <div class="board_id_info">
            <div class="board_memId">{{ item.memId }}</div>
            <div class="board_time">{{ item.time }}</div>
          </div>
        </div>
        <div class="board_msg">
          <p>{{ item.msg }}</p>
        </div>
        <div class="board_re_type">
          <p>回覆留言</p>
          <input type="text" placeholder="輸入回覆內容...">
        </div>
        <div class="board_all_re" @click="toggleReply">
          {{ item.re_amount > 0 ? '共有' + item.re_amount + '則回覆' : '尚無回覆' }}
          <font-awesome-icon v-if="item.re_amount > 0" :class="{ 'board_rotate': item.isReplyOpen }" icon="angle-down" />
        </div>
        <div class="board_report" @click="open_light_box_report">
          <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
        </div>
      </div>
      <!-- 留言區 -->
      <div class="board_re" v-if="item.isReplyOpen">
        <div class="board_re_card" v-for="reItem in item.re" :key="reItem.id">
          <div class="board_re_id">
            <div class="board_re_id_img">
              <img :src="reItem.img" :alt="reItem.alt">
            </div>
            <div class="board_re_id_info">
              <div class="board_re_memId">{{ reItem.memId }}</div>
              <div class="board_re_time">{{ reItem.time }}</div>
            </div>
          </div>
          <div class="board_re_msg">
            <p>{{ reItem.msg }}</p>
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
    methods: {
      toggleReply() {
        if (this.item.re.length > 0) {
          const cardli = document.querySelector('.card-' + this.item.id);
          const downElements = cardli.getElementsByClassName('board_re');
  
          for (let i = 0; i < downElements.length; i++) {
            if (downElements[i].classList.contains('hide')) {
              downElements[i].classList.remove('hide');
            } else {
              downElements[i].classList.add('hide');
            }
          }
  
          this.$set(this.item, 're_amount', this.item.re.length);
          this.$set(this.item, 'isReplyOpen', !this.item.isReplyOpen);
        }
      },
      open_light_box_report() {
        this.re_submit_show = true;
        this.selectedOption = this.reports[0].value;
        this.re_submit_disable = false;
        this.open_re_text = false;
        this.board_light_box_report = true;
        document.body.classList.add('body-overflow-hidden');
      },
    },
  };
  </script>