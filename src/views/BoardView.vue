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
                  <input type="text">
                </div>
                <div class="board_all_re">
                  共有{{item.re_amount}}則回覆
                  <font-awesome-icon icon="angle-down" />
                </div>
                <div class="board_report">
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


    <div class="light_box" v-show="board_ligth_box_open">
      <div class="overlay"></div>
      <div class="box">
        <form action="">
          <h2>我要發文</h2>
          <div>
            <p>留言內容</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <input type="checkbox" name="" id="check">
            <label for="check">我已確認文章內容不包含不當內文及攻擊字眼。</label>
            <button class="btn_sm_1">送出</button>
          </div>
          <div class="board_close_light_box" @click="light_box_close">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
        </form>
      </div>
    </div>
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
              memId:'啊笨壓',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉事嗎？',
            },
            {
              id:2,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'啊人家壓',
              time:'2023/12/30 20:25',
              msg:'一般人這種事嗎？',
            }
          ]
        },
        {
          id: 2,
          id_img:'/src/assets/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'啊人家笨壓',
          time:'2023/12/30 20:25',
          msg:'在遊戲貪婪之島中，只賽中答對最多問者的祝福。',
          re_amount:2,
          re:[
            {
              id:1,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'家就笨壓',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉這嗎？',
            },
            {
              id:2,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'啊人笨壓',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉這種事嗎？',
            },
            {
              id:3,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'啊人家',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉這種事嗎？',
            }
          ]
        },
        {
          id: 3,
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
              memId:'啊笨壓',
              time:'2023/12/30 20:25',
              msg:'一般人會忘掉事嗎？',
            },
            {
              id:2,
              img:'/src/assets/images/board/board_id_img.svg',
              alt:'board_id_img',
              memId:'啊人家壓',
              time:'2023/12/30 20:25',
              msg:'一般人這種事嗎？',
            }
          ]
        },
      ],
      board_ligth_box_open: false,
    };
  },
  components: {
    // BoardTag,
  },
  created() {},
  mounted() {},
  methods: {
    open_light_box(){
      this.board_ligth_box_open = true;
    },
    light_box_close(){
      this.board_ligth_box_open = false;
    }
  
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
