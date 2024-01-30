<div class="board_card_col">
    <div class="board_card" v-for="item in firstCol" :key="item.id" :class="'card-' + item.id">
    <div class="board_info">
      <div class="board_id">
        <div class="board_id_img">
          <img src="/images/board/board_id_img.svg" :alt="item.id_img_alt">
        </div>
        <div class="board_id_info">
          <div class="board_memId">{{item.memId}}</div>
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
      <div class="board_all_re" @click="toggleReply(item.id)">
        共有{{item.re_amount}}則回覆
        <font-awesome-icon icon="angle-down" />
      </div>
      <div class="board_report" @click="open_light_box_report">
        <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
      </div>
    </div>
    <!-- 留言區 -->
    <div class="board_re hide">
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
  </div>