<template>
  <div class="board">
    <PageTitle :pageTitle="'玩家社群'" />
    <!-- <div class="banner"></div> -->
    <div class="container">
      <div class="row">
        <div class="col-PC-10 col-T-10 col-10">
          <!-- 麵包屑 -->
          <div class="board_breadcrumb">
              <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
                <BreadcrumbItem to="/">首頁</BreadcrumbItem>
                <BreadcrumbItem to="/board">玩家社群</BreadcrumbItem>
                <BreadcrumbItem to="/board">留言區</BreadcrumbItem>
              </Breadcrumb>
            </div>
          <!-- 牙齒區 -->
          <div class="board_tag">
            <div class="board_tag_btn">
              <RouterLink to="/board" class="btn_secondary">留言區</RouterLink>
              <RouterLink to="/team" class="btn_secondary">報隊區</RouterLink>
            </div>
            <div class="board_article">
              <div class="btn_lg_orange" @click="open_light_box">我要發文</div>
              <select>
                <option value="" selected>從新至舊</option>
                <option value="">從舊至新</option>
              </select>
            </div>
          </div>

          <!-- 內容區 -->
          <div class="board_area">

              <!-- 文章區1 -->
              <div class="board_card_col">
                <div class="board_card" v-for="item in firstCol" :key="'area1-' + item.id" :class="'card-' + item.id">
                <!-- <div class="board_card" v-for="(item, index) in firstCol" :key="item.id"> -->

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
                    {{ item.re_amount > 0 ? '共有' + item.re_amount + '則回覆' : '尚無回覆' }}
                    <!-- <font-awesome-icon v-if="item.re_amount > 0" icon="angle-down" /> -->
                    <font-awesome-icon v-if="item.re_amount > 0" :class="{ 'board_rotate': isReplyOpen }" icon="angle-down" />
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
                        <img src="/images/board/board_id_img.svg" :alt="reItem.alt">
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

<!-- <BoardCard/> -->
              <!-- 文章區2 -->
              <div class="board_card_col">
                <!-- <div class="board_card" v-for="item in secondCol" :key="item.id" :class="'card-' + item.id"> -->
                  <div class="board_card" v-for="item in secondCol" :key="'area2-' + item.id" :class="'card-' + item.id">
                  
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
                  <!-- <div class="board_all_re" @click="toggleReply(item.id)">
                    共有{{item.re_amount}}則回覆
                    <font-awesome-icon icon="angle-down" />
                  </div> -->
                  <div class="board_all_re" @click="toggleReply(item.id)">
                    {{ item.re_amount > 0 ? '共有' + item.re_amount + '則回覆' : '尚無回覆' }}
                    <font-awesome-icon v-if="item.re_amount > 0" icon="angle-down" />
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
                        <img src="/images/board/board_id_img.svg" :alt="reItem.alt">
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


              <!-- 文章區3 -->
              <!-- <div class="board_card_col">
                  <div class="board_card" v-for="item in modifiedCard" :key="'area3-' + item.id" :class="'card-' + item.id">
                  
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
                    共有{{ item.re_amount }}則回覆
                    <font-awesome-icon icon="angle-down" />
                  </div>
                  <div class="board_report" @click="open_light_box_report">
                    <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
                  </div>
                </div> -->
                <!-- 留言區 -->
                <!-- <div class="board_re hide">
                  <div class="board_re_card" v-for="reItem in item.re" :key="reItem.id">
                    <div class="board_re_id">
                      <div class="board_re_id_img">
                        <img src="/images/board/board_id_img.svg" :alt="reItem.alt">
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
            </div> -->








          </div>
        </div>
      </div>
    </div>


    <!-- 發文燈箱 -->
    <div class="light_box" v-show="board_light_box_open">
      <div class="overlay" @click="light_box_close"></div>
      <div class="box">
        <form action="post" v-if="article_send_succ">
          <p class="board_lb_title ">我要發文</p>
          <div>
            <p class="board_lb_subTitle">留言內容</p>
            <textarea name="" id="" cols="35" rows="10" placeholder="輸入文章內容..." @keyup="article_send"></textarea>
          </div>
          <div class="board_light_box_send">
            <div>
              <input type="checkbox" id="check" v-model="cb_check" @change="article_send">
              <label for="check">我已確認文章內容不包含不當內文及攻擊字眼。</label>
            </div>
            <button class="btn_sm_1" v-if="!cb_submit" disabled>送出</button>
            <button class="btn_sm_1" v-else @click="article_send_btn">送出</button>
          </div>
        </form>
        <div v-else>
          <h3>已成功送出文章！</h3>
          <button class="btn_sm_1" @click="light_box_close">關閉</button>
        </div>
        <div class="board_close_light_box" @click="light_box_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>

    <!-- 檢舉燈箱 -->
    <div class="board_lb_re" v-show="board_light_box_report">
      <div class="board_lb_re_overlay" @click="light_box_re_close"></div>
      <div class="board_lb_re_box">
        <form action="" v-if="re_submit_show">
          <div class="board_lb_re_title">
            <p>請問您要檢舉的項目是...</p>
          </div>
          <select id="re_option" v-model="selectedOption" @change="updateReTextVisibility">
            <option v-for="(report,index) in reports" :key="index" :value="report.value" :disabled="report.disabled" :selected="report.selected">{{ report.reason }}</option>
            <!-- <option>廣告</option>
            <option>帶有攻擊性言論</option>
            <option>暴力或危險組織</option>
            <option>我就是不喜歡</option>
            <option>仇恨言論或象徵符號</option>
            <option>不實資訊</option>
            <option value="lb_re_other">其他</option> -->
          </select>
          <textarea cols="30" rows="10" v-show="open_re_text" placeholder="請敘述檢舉理由" @keyup="updateReTextVisibility"></textarea>
          <button class="btn_sm_1" v-if="!re_submit_disable" disabled>送出</button>
          <button class="btn_sm_1" v-else @click.prevent="re_submit">送出</button>
        </form>
        <div v-else>
          <h3>已成功檢舉，謝謝您！</h3>
          <button @click="light_box_re_close" class="btn_sm_1">關閉</button>
        </div>
        <div class="board_close_light_box" @click="light_box_re_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>
    
      
    


  </div> 
</template>

<script>
// import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
// import BoardCard from "../components/BoardCard.vue";

export default {
  data() {
    return { 
      card:[
        {
          id: 1,
          // id_img:'/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'啊人家家就笨壓',
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
          memId:'大傑',
          time:'2023/12/30 20:25',
          msg:'有人看到我爸嗎？',
          re:[]
        },
        {
          id: 3,
          // id_img:'../../public/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
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
          memId:'大傑',
          time:'2023/12/30 20:25',
          msg:'有人看到我爸嗎？',
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
          memId:'酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
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
          memId:'酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
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
          memId:'酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
          re:[
          ]
        },
      ],
      reports:[{
        reason: '-請選擇檢舉項目-',
        value: '',
        disabled: true,
        selected: true
      },{
        reason: '廣告',
        value: 'ad'
      },{
        reason: '帶有攻擊性言論',
        value: 'violent'
      },{
        reason: '暴力或危險組織',
        value: 'danger'
      },{
        reason: '我就是不喜歡',
        value: 'dislike'
      },{
        reason: '仇恨言論或象徵符號',
        value: 'hate'
      },{
        reason: '不實資訊',
        value: 'fake'
      },{
        reason: '其他',
        value: 'lb_re_other'
      }],
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
    // firstCol() {
    //   return this.card.reduce((acc, cur, idx) => {
    //     if (idx % 2 === 0) {
    //       acc.push(cur)
    //     }
    //     return acc
    //   }, [])
    // },
    // secondCol() {
    //   return this.card.reduce((acc, cur, idx) => {
    //     if (idx % 2 === 1) {
    //       acc.push(cur)
    //     }
    //     return acc
    //   }, [])
    // },
    // cardWithReAmount() {
    //   return this.card.map(item => ({
    //     ...item,
    //     re_amount: item.re.length,
    //   }));
    // },
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
  created() {},
  mounted() {},
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
    //控制展開留言區
    // 加上判斷是否有留言回覆的版本
    toggleReply(itemId) {
      // 檢查是否有回覆
      const item = this.card.find(item => item.id === itemId);

      if (item && item.re.length > 0) {
        // 有回覆，執行 toggle 邏輯
        const cardli = document.querySelector('.card-' + itemId);
        const downElements = cardli.getElementsByClassName('board_re');

        for (let i = 0; i < downElements.length; i++) {
          if (downElements[i].classList.contains('hide')) {
            downElements[i].classList.remove('hide');
          } else {
            downElements[i].classList.add('hide');
          }
        }

        // 計算 re_amount 並觸發 Vue 的重新渲染
        Vue.set(item, 're_amount', item.re.length);

        // 切換 isReplyOpen 狀態
        item.isReplyOpen = !item.isReplyOpen;
      } else {
        // 沒有回覆，不執行 toggle 邏輯，或者執行其他你想要的操作
        // console.log("No replies available");
      }
    },


    //送出檢舉彈窗
    re_submit(){
      this.re_submit_show = false;
    },
    

  },



};
</script>

