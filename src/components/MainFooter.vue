<template>
  <footer class="mainFooter">
    <img class="mOcean" src="../assets/images/footer/m_ocean.svg">
    <img class="pcOcean" src="../assets/images/footer/pc_ocean.svg">
    <div class="footer">
      <div class="footer_info">
        <div class="footer_menu">
          <span class="title">格線島</span>
          <div class="menu">
            <RouterLink :to="item.link" v-for="(item, index) in menu" :class="{first: index === 0}" class="item">{{item.title}}</RouterLink>
          </div>
        </div>
        <div class="footer_logo">
          <img class="img" src="../assets/images/footer/footer_logo.svg">
          <div class="social_logo">
            <a href="https://www.facebook.com/TibaMe/?locale=zh_TW">
              <font-awesome-icon class="logo fb" :icon="['fab', 'facebook']" />
            </a>
            <a href="https://www.instagram.com/tibame_wiedu/">
              <font-awesome-icon class="logo" :icon="['fab', 'instagram']" />
            </a>
            <a href="https://www.youtube.com/channel/UClhecf7eOGHwbKW5e7l_pTA">
              <font-awesome-icon class="logo youtube" :icon="['fab', 'youtube']" />
            </a>
          </div>
        </div>
        <div class="footer_officeInfo">
          <span class="title">聯絡資訊</span>
          <span v-for="item in officeInfo">{{ item.content }}</span>
        </div>
      </div>
      <div class="copyright">
        <span v-for="(item, index) in statement" :class="{ first: index === 0 }" class="statement">{{ item.content }}
        </span>
      </div>
    </div>
</footer>

</template>
<script>
export default {
  data() {
    return {
      value: 0,
      menu: [
        {
          title: '我的帳號',
          link: '/member'
        },
        {
          title: '關於我們',
          link: '/about'
        },
        {
          title: '預約須知',
          link: '/prebook'
        },
        {
          title: '隱私政策',
          link: '/privacy-policy'
        },
        {
          title: '最新消息',
          link: '/news'
        }
      ],
      statement:[{
        content:'本網站為緯育TibaMe前端工程師班第88期學員專題作品，本網站僅供學習、展示之用。若有侵權將立刻下架，請聯絡@wiedu.com'
      },{
        content:'The website is a project work of the 88th batch of front-end engineer students from TibaMe. This website is for learning and demonstration purposes only. If any infringement occurs, it will be taken down immediately. Please contact @wiedu.com'
      }
      ],
      officeInfo:[{
        content:'客服專線  0800-231-099'
      },{
        content:'客服時間  週一至週五9:00-20:00 週六日9:00-18:00',
      },{
        content:'電子信箱  service.taiwan@gridisland.com',
      }
      ]
    };
  },
  methods: {},
  mounted() {},
};
</script>

