<template>
  <main>
    <div class="header_banner">
      <img :src="bannerImage" alt="Home Banner" id="main-banner" />
      <img :src="games" alt="Banner games" id="games" />
      <img :src="roof" alt="Banner roof" id="roof" />
      <img :src="treeSvg" alt="Banner Tree" id="tree-svg" @mouseenter="showTreeCard = true" @mouseleave="showTreeCard = false"/>
      <div v-if="showTreeCard" class="card">
        <p class="card-title">會員中心</p>
        <p>毛毛蟲之歸屬，於此粉墨衣裝、查看遊歷紀錄。</p>
      </div>
      <img :src="comment" alt="Banner comments" id="comment" />
      <img :src="news" alt="Banner News" id="news" />
      <img :src="sign" alt="Banner Sign" id="sign" />
      <img :src="reserve" alt="Banner Reserve" id="reserve" />
      <img :src="bug" alt="Banner Bug" id="bug" />
      <img :src="bar" alt="Banner Bar" id="bar" />
      <img :src="cart" alt="Banner Cart" id="cart" />
    </div>
  </main>
</template>

<script>
  import bannerImage from '../assets/images/banner/gi_banner.png';
  import treeSvg from '../assets/images/banner/centree.svg';
  import news from '../assets/images/banner/news.svg';
  import comment from '../assets/images/banner/comment.svg';
  import roof from '../assets/images/banner/roof.svg';
  import sign from '../assets/images/banner/sign.svg';
  import games from '../assets/images/banner/games.svg';
  import reserve from '../assets/images/banner/reserve.svg';
  import cart from '../assets/images/banner/cart.svg';
  import bar from '../assets/images/banner/bar.svg';
  import bug from '../assets/images/banner/bug.svg';

  export default {
    name: 'HomeView',
    components: {},
    data() {
      return {
        bannerImage: bannerImage,
        treeSvg: treeSvg,
        news: news,
        comment: comment,
        roof: roof,
        sign: sign,
        games: games,
        reserve: reserve,
        cart: cart,
        bar: bar,
        bug: bug,
        showTreeCard: false,
      };
    },
  };
</script>

<style lang="scss">
  .header_banner {
    width: 100%;
    background-color: blue;
    display: flex;

    position: relative;

    #main-banner {
      width: 72%;
      margin: auto;
    }

    #tree-svg {
      width: 13.84%;
      position: absolute;
      left: 28.15%;
      top: 3.5%;
      /* display: none; */
    }

    #tree-svg:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }
    .card {
    position: absolute;
    left: 30%; /* 根據需要調整位置 */
    top: 10%;  /* 根據需要調整位置 */
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    /* 添加更多樣式以適應您的設計 */
  }

    #news {
      width: 8.43%;
      position: absolute;
      left: 33.9%;
      top: 43.28%;
    }
    
    #news:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }

    #comment {
      width: 8.26%;
      position: absolute;
      left: 37.62%;
      top: 34.2%;
    }
    #comment:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }
    #roof {
      width: 24.3%;
      position: absolute;
      left: 38.4%;
      top: 19.5%;
    }
    #sign {
      width: 15.88%;
      position: absolute;
      left: 43.8%;
      top: 15%;
    }
    #sign:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }
    #games {
      width: 12.2%;
      position: absolute;
      left: 53.8%;
      top: 32.55%;
    }
    #games:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }
    #reserve {
      width: 10.715%;
      position: absolute;
      left: 64.2%;
      top: 43.2%;
    }
    #reserve:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }
    #cart {
      width: 7.75%;
      position: absolute;
      left: 41.7%;
      top: 62%;
    }
    #cart:hover {
      filter: drop-shadow(0px 0px 4px #fff)
      drop-shadow(0px 0px 12px #fff);
    }
    #bar {
      width: 9.57%;
      position: absolute;
      left: 44.33%;
      top: 54.55%;
    }
    #bug {
      width: 9.65%;
      position: absolute;
      left: 45.32%;
      top: 33.2%;

    }
  }
</style>