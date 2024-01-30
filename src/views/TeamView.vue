<template>
  <div class="team">
    <PageTitle :pageTitle="'玩家社群'" />
        <div class="container">
          <div class="row">
            <div class="col-PC-10 col-T-10 col-10">
              <!-- 麵包屑 -->
              <div class="team_breadcrumb">
                <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
                  <BreadcrumbItem to="/">首頁</BreadcrumbItem>
                  <BreadcrumbItem to="/board">玩家社群</BreadcrumbItem>
                  <BreadcrumbItem to="/board">報隊區</BreadcrumbItem>
                </Breadcrumb>
              </div>
              <!-- 牙齒區 -->
              <div class="team_tag">
                <div class="team_tag_btn">
                  <RouterLink to="/board" class="btn_secondary">留言區</RouterLink>
                  <RouterLink to="/team" class="btn_secondary">報隊區</RouterLink>
                </div>
                <div class="team_article">
                  <div class="btn_lg_orange" @click="open_light_box">我要組隊</div>
                  <select>
                    <option value="" selected>從新至舊</option>
                    <option value="">從舊至新</option>
                  </select>
                </div>
              </div>

              <div class="main">
                <!-- 卡片區 -->
                <div class="team_card" v-for="item in card" :key="item.id">
                  <!-- 身分區 -->
                  <div class="team_card_id">
                    <div class="team_card_img">
                      <img :src="item.id_img" :alt="item.id_img_alt">
                    </div>
                    <div class="team_card_id_info">
                      <div class="team_card_name">
                        <h4>{{ item.memName }}</h4>
                      </div>
                      <div class="team_card_memId">
                        <p>#{{ item.memId }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- 時間 -->
                  <div class="team_card_time">
                    <p>{{ item.date }}</p>
                    <p>{{ item.time }}</p>
                  </div>
                  <!-- 標籤 -->
                  <div class="team_card_tag_area">
                    <div class="team_card_tags" v-for="(tag, index) in item.tags" :key="index">
                      <div class="team_card_tag">{{ tag }}</div>
                      <!-- <div class="team_card_tag1">{{ item.tag1 }}</div> -->
                      <!-- <div class="team_card_tag2">{{ item.tag2 }}</div>
                      <div class="team_card_tag3">{{ item.tag3 }}</div>
                      <div class="team_card_tag4">{{ item.tag4 }}</div> -->
                    </div>
                  </div>
                  <!-- 揪團文 -->
                  <div class="team_card_article">
                    <p>{{ item.article }}</p>
                  </div>
                  <!-- 報團按鈕 -->
                  <div class="team_card_btn">
                    <div class="btn_secondary" @click="join_team">
                      我要加入
                    </div>
                  </div>
                
                </div>
              </div>




          </div>
        </div>
      </div>

      <!-- 發文燈箱 -->
    <div class="light_box" v-show="team_lb">
      <div class="overlay" @click="team_lb_close"></div>
      <div class="box">
        <form action="post" v-if="article_send_succ">
          <p class="team_lb_title">我要組隊</p>
          <div>
            <p class="team_lb_subTitle">組隊宣言</p>
            <textarea name="" id="" cols="35" rows="10" placeholder="輸入文章內容..." @keyup="article_send"></textarea>
          </div>
          <div class="team_light_box_send">
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
          <button class="btn_sm_1" @click="team_lb_close">關閉</button>
        </div>
        <div class="team_close_light_box" @click="team_lb_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>

      <!-- 報團燈箱 -->
    <div class="join_light_box" v-show="team_join_lb">
      <div class="overlay" @click="team_join_lb_close"></div>
      <div class="box">

        <!-- <form action="post" v-if="join_succ"> -->
        <form action="post" v-if="join_succ">
          <h3 class="team_join_lb_title">是否確認報隊？</h3>

          <div class="team_light_box_send" >
            <button class="btn_default" @click.prevent="team_join_lb_close">取消</button>
            <button class="btn_default" @click="join_send_btn">確認</button>
          </div>
        </form>

        <div v-else>
          <h3>已成功向團主報團！</h3>
          <button class="btn_default" @click="team_join_lb_close">關閉</button>
        </div>

        <div class="team_close_light_box" @click="team_join_lb_close">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>

        
      



  </div>
</template>



<script>
// import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
export default {
  data() {
    return { 
      card:[
        {
          id: 1,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'窩金',
          memId: '202312300001',
          date: '2023/3/9',
          time:'20:30',
          tags: ['阿瓦蟲', '2人', '限女'],
          article:'徵求一起玩阿瓦蟲的夥伴，目前有我跟我朋友兩個男生，希望再找兩個重度玩家。',
        },
        {
          id: 2,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'甘舒',
          memId: '202312300002',
          date: '2023/3/11',
          time:'10:00',
          tags: ['貓嶼成之內', '4人'],
          article:'徵求一起玩貓嶼成之內的玩家，目前有我跟我朋友兩個男生，希望再找兩個重度玩家。',
        },
        {
          id: 3,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'金',
          memId: '202312300003',
          date: '2023/3/12',
          time:'09:00',
          tags: ['蟲蟲殺', '1人', '重度玩家'],
          article:'三缺一',
        },
        {
          id: 4,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'大傑',
          memId: '202312300004',
          date: '2023/3/12',
          time:'09:30',
          tags: ['蟲蟲殺', '1人','重度玩家'],
          article:'徵求一起玩桌遊的人，目前有我跟我朋友兩個人，希望再找多找幾個人。',
        },
        {
          id: 5,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'酷逼',
          memId: '202312300005',
          date: '2023/3/15',
          time:'12:30',
          tags: ['阿瓦蟲', '3人', '新手玩家'],
          article:'歡迎新手玩家！不論你是初次嘗試還是已經是輕度玩家，我們期待與你一同探索阿瓦蟲的奇妙世界。最適合3到5人，讓我們一同組隊，共同面對這場策略與冒險的旅程！',
        },
        {
          id: 6,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'奇牙',
          memId: '202312300005',
          date: '2023/3/17',
          time:'18:30',
          tags: ['屋蟲', '1-6人','重度玩家'],
          article:'揪團啟動！無論你是新手或者是屋蟲的忠實愛好者，這是個適合所有玩家的桌遊。想要挑戰建造最獨特的房屋嗎？快來加入我們，1到6人都能盡情參與！',
        },
        {
          id: 7,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'灰傑克',
          memId: '202312300007',
          date: '2023/3/21',
          time:'20:00',
          tags: ['貓與城之內', '2-4人'],
          article:'揪團！重度玩家快來，新手也別怕，我們會用最簡單的方式介紹貓與城之內。這個遊戲適合2到4人，快來參與這場貓咪與城堡的冒險吧！',
        },
        {
          id: 8,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'皮諾渴',
          memId: '202312300008',
          date: '2023/3/24',
          time:'09:30',
          tags: ['星際大戰局', '6人'],
          article:'想要一場宇宙級的戰鬥嗎？星際大戰局等著你！無論你是新手還是老玩家，快來加入這場2到6人的星際冒險！',
        },
        {
          id: 9,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'明人',
          memId: '202312300009',
          date: '2023/3/24',
          time:'10:00',
          tags: ['莎士比亞悲喜劇', '3人', '新手'],
          article:'這是一場文學與戲劇的交融，無論你對莎士比亞是否熟悉，我們都歡迎你參與這場3到7人的文藝遊戲。新手玩家也能輕鬆上手，一同演繹屬於你的悲喜劇！',
        },
        {
          id: 10,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'酷喇皮卡',
          memId: '202312300010',
          date: '2023/3/25',
          time:'10:00',
          tags: [' 海盜與寶藏', '4人'],
          article:'航向未知的海域，挑戰海盜與寶藏的命運！這款遊戲適合2到5人，無論你是初次冒險還是經驗豐富，都歡迎一同參與這場海上歷險！',
        },
        {
          id: 11,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'大傑',
          memId: '202312300011',
          date: '2023/3/26',
          time:'12:30',
          tags: [' 大富翁列車之旅', '3人'],
          article:'換乘你的骰子，展開大富翁列車之旅！這是一場適合2到4人的資源管理遊戲，新手們不用擔心，我們會有老手陪伴你一同體驗經濟策略的樂趣。',
        },
        {
          id: 12,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'啊人家家就笨壓',
          memId: '202312300012',
          date: '2023/3/28',
          time:'16:00',
          tags: ['神秘探案：禁忌之夜'],
          article:'進入禁忌之夜，化身為偵探！這款推理遊戲適合4到6人，無論你是新手還是已經深獲其樂，快來參與這場神秘的探案之旅。',
        },
        {
          id: 13,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'那美',
          memId: '202312300013',
          date: '2023/3/29',
          time:'18:30',
          tags: ['海底城市建設者', '3人', '新手友善'],
          article:'融入海洋深處，建設你的海底城市！這款建設遊戲適合2到5人，讓我們一同探索海底奇觀，新手們也能輕鬆上手！',
        },
        {
          id: 14,
          id_img:'./src/assets/images/team/team_id_img.svg',
          id_img_alt:'team_id_img',
          memName:'海綿小寶',
          memId: '202312300014',
          date: '2023/3/29',
          time:'18:00',
          tags: ['仙境奇蹟', '2人', '新手友善'],
          article:'踏入仙境，一同體驗奇蹟的魔法！這是一場2到7人的奇幻遊戲，無論你是新手還是老玩家，都歡迎加入這場令人陶醉的冒險之旅！',
        },
        
      ],
      // 發文
      team_lb: false,
      article_send_succ: true,
      cb_submit: false,
      cb_check: false,
      // 報團
      team_join_lb: false,
      join_succ: true,
    };
  },
  computed: {
    
  },
  components: {
    PageTitle,
  },
  created() {},
  mounted() {},
  methods: {
    // 發文燈箱
    // 打開發文燈箱
    open_light_box(){
      this.team_lb = true;
      this.cb_check = false;
      this.cb_submit = false;
      this.article_send_succ = true;
      document.body.classList.add('body-overflow-hidden');
    },
    // 關閉發文燈箱
    team_lb_close(){
      this.team_lb = false;
      document.body.classList.remove('body-overflow-hidden');
    },
    article_send_btn(){
      this.article_send_succ = false;
    },
    article_send(){
      if(this.cb_check == true && document.querySelector('.light_box textarea').value != ''){
        this.cb_submit = true;
      }else{
        this.cb_submit = false;
      }
    },
    // 打開報團燈箱
    join_team(){
      this.team_join_lb = true;
      this.join_succ = true;
      document.body.classList.add('body-overflow-hidden');
    },
    team_join_lb_close(){
      this.team_join_lb = false;
      document.body.classList.remove('body-overflow-hidden');
    },
    join_send_btn(){
      this.join_succ = false;
    },
  },
};
</script>



