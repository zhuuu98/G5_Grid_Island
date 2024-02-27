<template>
  <div class="board">
    <PageTitle :pageTitle="'玩家社群'" />
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
              <select id="select" v-model="sortMethod" @change="sort">
                <option value="timeDesc" selected>從新至舊</option>
                <option value="timeAsc">從舊至新</option>
              </select>
            </div>
          </div>

          <!-- 內容區 -->
          <div class="board_area">
            <!-- 文章區一 -->
            <div class="board_card_col --desktop">
              <!-- 抓到文章id、:item的item是抓card陣列 -->
              <BoardCard v-for="item in firstCol" :key="'area1-' + item.msg_id" :item="item"
                @open-report="open_light_box_report(item.msg_id)" @sent-reply="replyArticle" />
            </div>
            <!-- 文章區二 -->
            <div class="board_card_col --desktop">
              <BoardCard v-for="item in secondCol" :key="'area2-' + item.msg_id" :item="item"
                @open-report="open_light_box_report(item.msg_id)" @sent-reply="replyArticle" />
            </div>
            <!-- 文章區三 -->
            <div class="board_card_col --mobile">
              <BoardCard v-for="item in modifiedCard" :key="'area3-' + item.msg_id" :item="item"
                @open-report="open_light_box_report(item.msg_id)" @sent-reply="replyArticle" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 發文燈箱 -->
    <div class="light_box" v-show="board_light_box_open">
      <div class="overlay" @click="light_box_close"></div>
      <div class="box" v-if="userData && userData.mem_profile">
        <form @submit.prevent="article_send_btn" v-if="article_send_succ">
          <h3 class="board_lb_title">我要發文</h3>
          <div>
            <textarea name="" id="" cols="35" rows="10" placeholder="輸入文章內容..." @keyup="article_send"></textarea>
          </div>
          <div class="board_light_box_send">
            <div>
              <input type="checkbox" id="check" v-model="cb_check" @change="article_send">
              <label for="check">我已確認文章內容不包含不當內文及攻擊字眼。</label>
            </div>
            <button class="btn_sm_1" v-if="!cb_submit" disabled>送出</button>
            <button class="btn_sm_1" type="submit" v-else>送出</button>
          </div>
        </form>
        <div v-else>
          <h3>已成功送出文章！</h3>
          <button class="btn_sm_1" @click="reload">關閉</button>
        </div>
        <div class="board_close_light_box" @click="reload" v-if="run">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
        <div class="board_close_light_box" @click="light_box_close" v-else>
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
      <!-- 未登入不可發文 -->
      <div class="box" v-else>
        <h3>登入後即可發文</h3>
        <RouterLink to="/login" class="btn_secondary">立即登入</RouterLink>
        <div class="board_close_light_box" @click="light_box_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>

    <!-- 檢舉燈箱 -->
    <div class="board_lb_re" v-show="board_light_box_report">
      <div class="board_lb_re_overlay" @click="light_box_re_close"></div>
      <div class="board_lb_re_box" v-if="userData && userData.mem_profile">
        <form action="" v-if="re_submit_show">
          <div class="board_lb_re_title">
            <h4>請問您要檢舉的項目是...</h4>
          </div>
          <select id="re_option" v-model="selectedOption" @change="updateReTextVisibility">
            <option v-for="(report, index) in reports" :key="index" :value="report.value" :disabled="report.disabled"
              :selected="report.selected">{{ report.reason }}</option>
          </select>
          <textarea cols="30" rows="10" v-show="open_re_text" placeholder="請敘述檢舉理由" @keyup="updateReTextVisibility"
            v-model="re_text_other"></textarea>
          <button class="btn_sm_1" v-if="!re_submit_disable" disabled>送出</button>
          <button class="btn_sm_1" v-else @click.prevent="re_submit">送出</button>
        </form>
        <div v-else>
          <h4>已成功檢舉，謝謝您！</h4>
          <button @click="light_box_re_close" class="btn_sm_1">關閉</button>
        </div>
        <div class="board_close_light_box" @click="light_box_re_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
      <div class="board_lb_re_box" v-else>
        <h4>請先登入Grid Island！</h4>
        <div class="board_close_light_box" @click="light_box_re_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
import BoardCard from "../components/BoardCard.vue";
import userStore from '@/stores/user'
import { mapActions } from 'pinia';
export default {
  data() {
    return {
      card: [],
      reports: [{
        reason: '-請選擇檢舉項目-',
        value: '',
        disabled: true,
        selected: true,
      }, {
        reason: '廣告',
        value: '廣告'
      }, {
        reason: '帶有攻擊性言論',
        value: '帶有攻擊性言論'
      }, {
        reason: '暴力或危險組織',
        value: '暴力或危險組織'
      }, {
        reason: '我就是不喜歡',
        value: '我就是不喜歡'
      }, {
        reason: '仇恨言論或象徵符號',
        value: '仇恨言論或象徵符號'
      }, {
        reason: '不實資訊',
        value: '不實資訊'
      }, {
        reason: '其他',
        value: 'lb_re_other'
      }],
      //排序
      sortMethod: "timeDesc",
      resData: [],
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
      isReplyOpen: false,
      userStoreData: userStore(),
      run: false,
      activeReportMsgId: -1,
      re_text_other: '',
    };
  },
  created() {
    this.getCard();
  },
  computed: {
    userData() {
      return this.userStoreData.userData || {};
    },
    modifiedCardUnique() {
      return this.card.reduce((acc, cur) => {
        if (acc.findIndex(v => v.msg_id === cur.msg_id) === -1) {
          acc.push(cur)
        }
        return acc
      }, []);
    },
    modifiedCard() {
      return this.modifiedCardUnique.map(item => ({
        ...item,
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
    BoardCard,
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    ...mapActions(userStore, ['updateUserData']),
    //頁面渲染
    getCard() {
      axios
        .post(`${import.meta.env.VITE_API_URL}/board.php`, {})
        .then((res) => {
          this.card = res.data.board;
          this.resData = res.data.board;
          //跑迴圈渲染子陣列
          for (let i = 0; i < this.card.length; i++) {
            let item = this.card[i];
            //把json變成陣列
            let jsondata = JSON.parse(item.replies);
            //把陣列內容渲染到頁面上
            item.replies = jsondata;
            //有留言才會計算有幾則留言
            if (jsondata != null) {
              item.re_amount = jsondata.length;
              for (let j = 0; j < jsondata.length; j++) {
                let reitem = jsondata[j];
                reitem.reply_time = reitem.reply_time.split('.')[0];
              }
            }
          }
        })
        .catch(error => console.error('發生錯誤:', error))
    },
    //發文PHP
    postArticle() {
      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/boardArticle.php`,
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          mem_id: this.userData.mem_id,
          msg_content: document.querySelector('.light_box textarea').value,
        }
      })
        .then((res) => {
          this.run = true;
        })
        .catch((err) => {
          console.log(err)
        }
        );
    },
    //回覆PHP
    replyArticle(msg_id, re_text) {
      //有輸入回覆內容才可以送出
      if (re_text.trim() === "") {
        alert("請輸入留言內容");
        return; // 如果為空，則不執行後續的動作
      }

      let desktop = document.querySelector('.--desktop .card-' + msg_id);
      let mobile = document.querySelector('.--mobile .card-' + msg_id);
      let pic = document.querySelector('.header_login_profile').attributes.src.value;

      let now = new Date();
      // 從 Date 對象中獲取年、月、日、時、分、秒
      let y = now.getFullYear(); // 年
      let m = (now.getMonth() + 1).toString().padStart(2, '0'); // 月 (JavaScript 中月份從 0 開始，所以需要加 1)
      let d = now.getDate().toString().padStart(2, '0'); // 日
      let h = now.getHours().toString().padStart(2, '0'); // 時
      let min = now.getMinutes().toString().padStart(2, '0'); // 分
      let s = now.getSeconds().toString().padStart(2, '0'); // 秒

      let time = y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
      let memId = this.userData.mem_nickname ? this.userData.mem_nickname : this.userData.mem_name;

      let html = '<div class="board_re_card"><div class="board_re_id">'
        + '<div class="board_re_id_img"><img src="' + pic + '"></div>'
        + '<div class="board_re_id_info"><P class="board_re_memId">' + memId
        + '</P><div class="board_re_time">' + time + '</div></div></div>'
        + '<div class="board_re_msg"><p>' + re_text + '</p></div></div>';

      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/boardReply.php`,
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          mem_id: this.userData.mem_id,
          msg_id: msg_id,
          reply_content: re_text,
        }
      })
        .then((res) => {
          // 清空回覆內容
          this.re_text = "";
          // 加留言
          if (window.innerWidth >= 768) {
            desktop.querySelector('.board_re').insertAdjacentHTML('beforeend', html);
          } else {
            mobile.querySelector('.board_re').insertAdjacentHTML('beforeend', html);
          }
          // 加留言數
          // 找到那個 id 的卡片
          var cardWithIdOne = this.card.find(function (item) {
            return item.msg_id == msg_id;
          });
          // 如果找到了對應的卡片，則 re_amount 初始化為 1 
          if (cardWithIdOne && !cardWithIdOne.hasOwnProperty('re_amount')) {
            cardWithIdOne.re_amount = 1;
          } else {// 如果找到了對應的卡片，則將 re_amount 加 1
            cardWithIdOne.re_amount += 1;
          }
        })
        .catch((err) => {
          console.log(err)
        }
        );
    },
    //檢舉
    reportArticle() {
      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/boardReport.php`,
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          msg_id: this.activeReportMsgId,
          report_reason: this.selectedOption === 'lb_re_other' ? this.re_text_other : this.selectedOption,
        }
      })
        .then((res) => {
          console.log(res.data);
          console.log('修改成功');
        })
        .catch((err) => {
          console.log(err)
        }
        );
    },
    // 發文
    // 打開發文燈箱
    open_light_box() {
      this.article_send_succ = true;
      this.cb_check = false;
      this.cb_submit = false;
      this.board_light_box_open = true;
      document.body.classList.add('body-overflow-hidden');
    },
    // 發文燈箱關閉
    light_box_close() {
      this.board_light_box_open = false;
      document.body.classList.remove('body-overflow-hidden');
    },
    // 有輸入內容才可以送出
    article_send() {
      if (this.cb_check == true && document.querySelector('.light_box textarea').value != '') {
        this.cb_submit = true;
      } else {
        this.cb_submit = false;
      }
    },
    // 送出按鈕導向確認畫面
    article_send_btn() {
      this.article_send_succ = false;
      this.postArticle();
    },

    // 檢舉
    // 打開檢舉燈箱
    open_light_box_report(msg_id) {
      this.activeReportMsgId = msg_id
      this.re_submit_show = true;
      this.selectedOption = this.reports[0].value;
      this.re_submit_disable = false;
      this.open_re_text = false;
      this.board_light_box_report = true;
      document.body.classList.add('body-overflow-hidden');
      this.re_text_other = '';
    },
    // 關閉檢舉燈箱
    light_box_re_close() {
      this.board_light_box_report = false;
      document.body.classList.remove('body-overflow-hidden');
    },
    // 判斷如果選擇其他必須輸入內容及勾選且不得為預設請選擇才可以送出
    updateReTextVisibility() {
      this.open_re_text = this.selectedOption === "lb_re_other";
      if ((this.selectedOption === "lb_re_other" && document.querySelector('.board_lb_re_box textarea').value == '') || this.selectedOption == "") {
        this.re_submit_disable = false;
      } else if (this.selectedOption === "lb_re_other" && document.querySelector('.board_lb_re_box textarea').value != '') {
        this.re_submit_disable = true;
      } else {
        this.re_submit_disable = true;
      }
    },
    //送出檢舉彈窗
    re_submit() {
      this.re_submit_show = false;
      this.reportArticle();
      //重整頁面
    },
    reload() {
      window.location.reload();
    },
    //排序
    sort() {
      switch (this.sortMethod) {
        case "timeAsc":
          this.resData = this.resData.sort((a, b) => {
            const timeA = a.msg_id;
            const timeB = b.msg_id;
            return timeA - timeB;
          });
          break;
        case "timeDesc":
          this.resData = this.resData.sort((a, b) => {
            const timeA = a.msg_id;
            const timeB = b.msg_id;
            return timeB - timeA;
          });
          break;
      }
    },
  },
  mounted() {
    //將登入的會員資料由json改為陣列
    const userData = JSON.parse(localStorage.getItem("userDataStr"));
    this.updateUserData(userData)
  },
};
</script>

