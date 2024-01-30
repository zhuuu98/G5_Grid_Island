<template>
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
</template>

<script>
export default {
  data() {
    return { 
      card:[
        {
          id: 1,
          // id_img:'/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'1啊人家家就笨壓',
          time:'2023/12/30 20:25',
          msg:'在遊戲貪婪之島中，只要在問答大賽中答對最多問題，就能獲得統治者的祝福。',
          // re_amount:2,
          re:[
            {
              id:1,
              img:'/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'萵金',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉這種事嗎？只要喊出"book"就可以叫出卡冊，裡面存放所有目前收集到的卡片，可以取出卡片使用。',
            },
            {
              id:2,
              img:'/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'金',
              time:'2023/12/30 20:25',
              msg:'你是一般人嗎？',
            }
          ]
        },
        {
          id: 2,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'2大傑',
          time:'2023/12/30 20:25',
          msg:'有人看到我爸嗎？',
          re_amount: 2,
          re:[
            {
              id:1,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'灰傑克',
              time:'2023/12/30 20:25',
              msg:'皮諾渴，這個直接電死。',
            },
            {
              id:2,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'皮諾渴',
              time:'2023/12/30 20:25',
              msg:'是的醫生！',
            },
            {
              id:3,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'奇牙',
              time:'2023/12/30 20:25',
              msg:'我們一定會找到的。',
            }
          ]
        },
        {
          id: 3,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'3酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
          re_amount:2,
          re:[
            {
              id:1,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'酷喇皮卡',
              time:'2023/12/30 20:25',
              msg:'我快下船了。',
            },
            {
              id:2,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'明人',
              time:'2023/12/30 20:25',
              msg:'樓上也有血輪眼？',
            },
            {
              id:3,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'酷喇皮卡',
              time:'2023/12/30 20:25',
              msg:'我快下船了。',
            },
            {
              id:4,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'明人',
              time:'2023/12/30 20:25',
              msg:'樓上也有血輪眼？',
            }
          ]
        },
        {
          id: 4,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'4大傑',
          time:'2023/12/30 20:25',
          msg:'有人看到我爸嗎？',
          re_amount:2,
          re:[
            {
              id:1,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'灰傑克',
              time:'2023/12/30 20:25',
              msg:'皮諾渴，這個直接電死。',
            },
            {
              id:2,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'皮諾渴',
              time:'2023/12/30 20:25',
              msg:'是的醫生！',
            },
            {
              id:3,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'奇牙',
              time:'2023/12/30 20:25',
              msg:'我們一定會找到的。',
            }
          ]
        },
        {
          id: 5,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'5酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
          re_amount:2,
          re:[
            {
              id:1,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'酷喇皮卡',
              time:'2023/12/30 20:25',
              msg:'我快下船了。',
            },
            {
              id:2,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'明人',
              time:'2023/12/30 20:25',
              msg:'樓上也有血輪眼？',
            }
          ]
        },
        {
          id: 6,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'6酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
          re_amount:2,
          re:[
            {
              id:1,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'酷喇皮卡',
              time:'2023/12/30 20:25',
              msg:'我快下船了。',
            },
            {
              id:2,
              // img:'../../public/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'明人',
              time:'2023/12/30 20:25',
              msg:'樓上也有血輪眼？',
            }
          ]
        },
        {
          id: 7,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'7酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
          re_amount:2,
          re:[
          ]
        },
      ],
      // 發文
      board_light_box_open: false,
      board_light_box_report: false,
      cb_submit: false,
      cb_check: false,
      article_send_succ: true,
      // 檢舉
      open_re_text: false,
      selectedOption: "",
      re_submit_disable: false,
      re_submit_show: true,
    };
  },
  computed: {
    modifiedCard() {
    return this.card.map(item => ({
      ...item,
      re_amount: item.re.length,
    }));
    },
    firstCol() {
      return this.modifiedCard.filter((_, idx) => idx % 2 === 0);
    },
    secondCol() {
      return this.modifiedCard.filter((_, idx) => idx % 2 === 1);
    },
    },
  components: {
    PageTitle,
    // BoardCard,
  },
  methods: {
    // 發文
    // 打開發文燈箱
    open_light_box(){
      this.article_send_succ = true;
      this.cb_check = false;
      this.cb_submit = false;
      this.board_light_box_open = true;
      document.body.classList.add('body-overflow-hidden');
    },
    // 發文燈箱關閉
    light_box_close(){
      // this.board_light_box_open = false;
      this.board_light_box_open = false;
      document.body.classList.remove('body-overflow-hidden');
    },
    // 有輸入內容才可以送出
    article_send(){
      if(this.cb_check == true && document.querySelector('.light_box textarea').value != ''){
        this.cb_submit = true;
      }else{
        this.cb_submit = false;
      }
    },
    // 送出按鈕導向確認畫面
    article_send_btn(){
      this.article_send_succ = false;
    },

    // 檢舉
    // 打開檢舉燈箱
    open_light_box_report(){
      this.re_submit_show = true;
      this.selectedOption = this.reports[0].value;
      this.re_submit_disable = false;
      this.open_re_text = false;
      this.board_light_box_report = true;
      document.body.classList.add('body-overflow-hidden');
    },
    // 關閉檢舉燈箱
    light_box_re_close(){
      this.board_light_box_report = false;
      document.body.classList.remove('body-overflow-hidden');

    },
    // 判斷如果選擇其他必須輸入內容及勾選且不得為預設請選擇才可以送出
    updateReTextVisibility() {
      this.open_re_text = this.selectedOption === "lb_re_other";

      if((this.selectedOption === "lb_re_other" && document.querySelector('.board_lb_re_box textarea').value == '') || this.selectedOption == ""){
        this.re_submit_disable = false;
      }else if(this.selectedOption === "lb_re_other" && document.querySelector('.board_lb_re_box textarea').value != ''){
        this.re_submit_disable = true;
      }else{
        this.re_submit_disable = true;
      }
    },

    toggleReply(itemId) {
      // 檢查是否有回覆
      if (this.card.find(item => item.id === itemId).re.length > 0) {
        // 有回覆，執行你的 toggle 邏輯
        var cardli = document.querySelector('.card-' + itemId);
        var downElements = cardli.getElementsByClassName('board_re');

        for (var i = 0; i < downElements.length; i++) {
          if (downElements[i].classList.contains('hide')) {
              downElements[i].classList.remove('hide');
          } else {
              downElements[i].classList.add('hide');
          }
        }
      } else {
        // 沒有回覆，不執行 toggle 邏輯，或者執行其他你想要的操作
        // console.log("No replies available");
        downElements[i].classList.add('hide');
      }
       // 計算 re_amount 並觸發 Vue 的重新渲染
      const item = this.card.find(item => item.id === itemId);
      if (item) {
        Vue.set(item, 're_amount', item.re.length);
      }
    },

    //送出檢舉彈窗
    re_submit(){
      this.re_submit_show = false;
    },
  },
};
</script>
