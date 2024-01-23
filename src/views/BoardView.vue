<template>
  <div class="board">
    <div class="banner"></div>
    <div class="container">
      <div class="row">
        <div class="col-PC-10 col-T-10 col-10">
          <!-- <BoardTag /> -->
          <!-- 牙齒區 -->
          <div class="board_tag">
            <div class="board_tag_btn">
              <RouterLink to="/board" class="btn_secondary">留言區</RouterLink>
              <RouterLink to="/team" class="btn_secondary">報隊區</RouterLink>
            </div>
            <div class="board_article">
              <!-- <div class="board_article_btn" @click="open_light_box">我要發文</div> -->
              <div class="btn_lg" @click="open_light_box">我要發文</div>
              <select>
                <option value="" selected>從新至舊</option>
                <option value="">從舊至新</option>
              </select>
            </div>
          </div>

          <!-- 內容區 -->
          <div class="board_area">
            <div class="board_card" v-for="item in card" :key="item.id">
              <!-- 文章區 -->
              <div class="board_info">
                <div class="board_id">
                  <div class="board_id_img">
                    <img :src="item.id_img" :alt="item.id_img_alt">
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
                <div class="board_all_re">
                  共有{{item.re_amount}}則回覆
                  <font-awesome-icon icon="angle-down" />
                </div>
                <div class="board_report" @click="open_light_box_report">
                  <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
                </div>
              </div>
              <!-- 留言區 -->
              <div class="board_re">

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
        </div>
      </div>
    </div>


    <!-- 發文燈箱 -->
    <div class="light_box" v-show="board_light_box_open">
      <div class="overlay" @click="light_box_close"></div>
      <div class="box">
        <form action="post">
          <p class="board_lb_title">我要發文</p>
          <div>
            <p class="board_lb_subTitle">留言內容</p>
            <textarea name="" id="" cols="35" rows="10" placeholder="輸入文章內容..."></textarea>
          </div>
          <div class="board_light_box_send">
            <div>
              <input type="checkbox" name="" id="check">
              <label for="check">我已確認文章內容不包含不當內文及攻擊字眼。</label>
            </div>
            <button class="btn_sm_1">送出</button>
          </div>
          <div class="board_close_light_box" @click="light_box_close">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
        </form>
      </div>
    </div>

    <!-- 檢舉燈箱 -->
    <div class="board_lb_re" v-show="board_light_box_report">
      <div class="board_lb_re_overlay" @click="light_box_re_close"></div>
      <div class="board_lb_re_box">
        <form action="">
          <div class="board_lb_re_title">
            <p>請問您要檢舉的項目是...</p>
          </div>
          <select id="re_option" v-model="selectedOption" @change="updateReTextVisibility">
            <option selected>廣告</option>
            <option>帶有攻擊性言論</option>
            <option>暴力或危險組織</option>
            <option>我就是不喜歡</option>
            <option>仇恨言論或象徵符號</option>
            <option>不實資訊</option>
            <option value="lb_re_other">其他</option>
          </select>
          <textarea cols="30" rows="10" v-show="open_re_text" placeholder="請敘述檢舉理由"></textarea>
          <button class="btn_sm_1">送出</button>
          <div class="board_close_light_box" @click="light_box_re_close">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
        </form>
        </div>
    </div> //board_lb_re_box
    
      
    


  </div> 
</template>

<script>
import axios from "axios";
import BoardTag from "../components/BoardTag.vue";
export default {
  data() {
    return { 
      card:[
        {
          id: 1,
          id_img:'/src/assets/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'啊人家家就笨壓',
          time:'2023/12/30 20:25',
          msg:'在遊戲貪婪之島中，只要在問答大賽中答對最多問題，就能獲得統治者的祝福。',
          re_amount:2,
          re:[
            {
              id:1,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'萵金',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉這種事嗎？只要喊出"book"就可以叫出卡冊，裡面存放所有目前收集到的卡片，可以取出卡片使用。',
            },
            {
              id:2,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'金',
              time:'2023/12/30 20:25',
              msg:'你是一般人嗎？',
            }
          ]
        },
        {
          id: 2,
          id_img:'/src/assets/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'大傑',
          time:'2023/12/30 20:25',
          msg:'有人看到我爸嗎？',
          re_amount:2,
          re:[
            {
              id:1,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'灰傑克',
              time:'2023/12/30 20:25',
              msg:'皮諾渴，這個直接電死。',
            },
            {
              id:2,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'皮諾渴',
              time:'2023/12/30 20:25',
              msg:'是的醫生！',
            },
            {
              id:3,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'奇牙',
              time:'2023/12/30 20:25',
              msg:'我們一定會找到的。',
            }
          ]
        },
        {
          id: 3,
          id_img:'/src/assets/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'酷B',
          time:'2023/12/30 20:25',
          msg:'使用同行，前往瑪莎多啦。',
          re_amount:2,
          re:[
            {
              id:1,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'酷喇皮卡',
              time:'2023/12/30 20:25',
              msg:'我快下船了。',
            },
            {
              id:2,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'明人',
              time:'2023/12/30 20:25',
              msg:'樓上也有血輪眼？',
            }
          ]
        },
      ],
      board_light_box_open: false,
      board_light_box_report: false,
      open_re_text: false,
      selectedOption: "",
    };
  },
  components: {
    
  },
  created() {},
  mounted() {},
  methods: {
    open_light_box(){
      this.board_light_box_open = true;
      document.body.classList.add('body-overflow-hidden');
    },
    light_box_close(){
      // this.board_light_box_open = false;
      this.board_light_box_open = false;
      document.body.classList.remove('body-overflow-hidden');
    },
    open_light_box_report(){
      this.board_light_box_report = true;
      document.body.classList.add('body-overflow-hidden');

    },
    light_box_re_close(){
      this.board_light_box_report = false;
      document.body.classList.remove('body-overflow-hidden');

    },
    updateReTextVisibility() {
      this.open_re_text = this.selectedOption === "lb_re_other";
    },
  },



};
</script>



<style lang="scss" scoped>
  .banner{
    width: 100%;
    background-color: #ccc;
    height: 300px;
  }

</style>
