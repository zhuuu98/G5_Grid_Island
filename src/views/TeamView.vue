<template>
  <div class="team">
    <PageTitle :pageTitle="'玩家社群'" />
      <div class="team">
        <div class="container">
          <div class="row">
            <div class="col-PC-12 col-T-6 col-12">
              <!-- 牙齒區 -->
              <div class="board_tag">
                <div class="board_tag_btn">
                  <RouterLink to="/board" class="btn_secondary">留言區</RouterLink>
                  <RouterLink to="/team" class="btn_secondary">報隊區</RouterLink>
                </div>
                <div class="board_article">
                  <div class="btn_lg" @click="open_light_box">我要發文</div>
                  <select>
                    <option value="" selected>從新至舊</option>
                    <option value="">從舊至新</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
export default {
  data() {
    return { 
      card:[
        {
          id: 1,
          id_img:'/src/assets/images/board/board_id_img.svg',
          id_img_alt:'board_id_img',
          memId:'1啊人家家就笨壓',
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
          memId:'2大傑',
          time:'2023/12/30 20:25',
          msg:'有人看到我爸嗎？',
          re_amount: 2,
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
      ],
    };
  },
  computed: {
    
  },
  components: {
    PageTitle,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>




<style lang="scss">

</style>
