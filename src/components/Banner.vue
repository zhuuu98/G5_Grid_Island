<template>
    <div id="banner-container" ref="bannerContainer">
        <div id="banner-imagebox">
            <img :src="island" id="island-image" />
            <router-link to="/member">
                <img :src="islandTree" id="islandTree-image" />
            </router-link>
            <router-link to="/news">
                <img :src="islandNews" id="islandNews-image" />
            </router-link>

            <img :src="islandBar" id="islandBar-image" />

            <router-link to="/product">
                <img :src="islandGames" id="islandGames-image" 
                @mouseenter="showGamesCard = true"
                @mouseleave="showGamesCard = false" />
            </router-link>

            <img :src="islandRoof" id="islandRoof-image" />

            <router-link to="/board">
                <img :src="islandBoard" id="islandBoard-image" />
            </router-link>
            <router-link to="/griddy-style">
                <img :src="islandBug" id="islandBug-image" />
            </router-link>

            <img :src="islandBarup" id="islandBarup-image" />

            <router-link to="/book">
                <img :src="islandPrebook" id="islandPrebook-image" />
            </router-link>
            <router-link to="/cart">
                <img :src="islandCart" id="islandCart-image" />
            </router-link>
            <router-link to="/about">
                <img :src="islandAbout" id="islandAbout-image" />
            </router-link>

            <img :src="lEye" id="lEye" />
            <img :src="rEye" id="rEye" />

            <div id="banner-cardsbox">
                <div v-if="showGamesCard" id="gamesCard" class="showCard">
                    <p class="card-title">所有商品</p>
                    <div class="card-line"></div>
                    <p class="card-text">櫃中珍藏匯聚天下桌遊，於此揀選，尋心之所向。</p>
                </div>
            </div>
        </div>
        

        <img :src="roof" alt="Banner roof" id="roof" />
        <router-link to="member">
            <img :src="treeSvg" alt="Banner Tree" id="tree-svg" @mouseenter="showTreeCard = true"
                @mouseleave="showTreeCard = false" />
        </router-link>
        <div v-if="showTreeCard" id="treeCard" class="showCard">
            <p class="card-title">會員中心</p>
            <div class="card-line"></div>
            <p class="card-text">毛毛蟲之歸屬，於此粉墨衣裝、查看遊歷紀錄。</p>
        </div>
        <router-link to="board">
            <img :src="comment" alt="Banner comments" id="comment" @mouseenter="showCommentCard = true"
                @mouseleave="showCommentCard = false" />
        </router-link>
        <div v-if="showCommentCard" id="commentCard" class="showCard">
            <p class="card-title">留言板</p>
            <div class="card-line"></div>
            <p class="card-text">玩家交流之地，分享桌遊經驗，結織世界友誼。</p>
        </div>
        <router-link to="news">
            <img :src="news" alt="Banner News" id="news" @mouseenter="showNewsCard = true"
                @mouseleave="showNewsCard = false" />
        </router-link>
        <div v-if="showNewsCard" id="newsCard" class="showCard">
            <p class="card-title">最新消息</p>
            <div class="card-line"></div>
            <p class="card-text">板上新蹤，於此發掘格線島之近況與盛事。</p>
        </div>
        <router-link to="about">
            <img :src="sign" alt="Banner Sign" id="sign" @mouseenter="showSignCard = true"
                @mouseleave="showSignCard = false" />
        </router-link>
        <div v-if="showSignCard" id="signCard" class="showCard">
            <p class="card-title">關於我們</p>
            <div class="card-line"></div>
            <p class="card-text">格間交織於此島，譜寫桌遊新篇章。</p>
        </div>
        <router-link to="prebook">
            <img :src="reserve" alt="Banner Reserve" id="reserve" @mouseenter="showReserveCard = true"
                @mouseleave="showReserveCard = false" />
        </router-link>
        <div v-if="showReserveCard" id="reserveCard" class="showCard">
            <p class="card-title">預約場地</p>
            <div class="card-line"></div>
            <p class="card-text">墨書登記，備以預約遊戲之地，選擇良辰與桌戲。</p>
        </div>
        <!-- 蟲 -->

        <!-- 蟲 -->
        <img :src="bar" alt="Banner Bar" id="bar" />
        <router-link to="cart">
            <img :src="cart" alt="Banner Cart" id="cart" @mouseenter="showCartCard = true"
                @mouseleave="showCartCard = false" />
        </router-link>
        <div v-if="showCartCard" id="cartCard" class="showCard">
            <p class="card-title">購物車</p>
            <div class="card-line"></div>
            <p class="card-text">車中積載，點金訂物，妙趣橫生隨囊歸。</p>
        </div>
    </div>
</template>
<script>
    import island from "../assets/images/islandbanner/island.svg";
    import islandTree from "../assets/images/islandbanner/islandTree.svg";
    import islandNews from "../assets/images/islandbanner/islandNews.svg";
    import islandBar from "../assets/images/islandbanner/islandBar.svg";
    import islandGames from "../assets/images/islandbanner/islandGames.svg";
    import islandRoof from "../assets/images/islandbanner/islandRoof.svg";
    import islandBoard from "../assets/images/islandbanner/islandBoard.svg";
    import islandBug from "../assets/images/islandbanner/islandBug.svg";
    import islandBarup from "../assets/images/islandbanner/islandBarup.svg";
    import islandPrebook from "../assets/images/islandbanner/islandPrebook.svg";
    import islandCart from "../assets/images/islandbanner/islandCart.svg";
    import islandAbout from "../assets/images/islandbanner/islandAbout.svg";
    import lEye from "../assets/images/islandbanner/lEye.svg";
    import rEye from "../assets/images/islandbanner/rEye.svg";

    export default {
        name: 'bannerComponent', // 組件名稱
        data() {
            // 定義組件的數據
            return {
                title: '歡迎使用Vue 3',
                count: 0,
                island: island,
                islandTree: islandTree,
                islandNews: islandNews,
                islandBar: islandBar,
                islandGames: islandGames,
                islandRoof: islandRoof,
                islandBoard: islandBoard,
                islandBug: islandBug,
                islandBarup: islandBarup,
                islandPrebook: islandPrebook,
                islandCart: islandCart,
                islandAbout: islandAbout,
                lEye: lEye,
                rEye: rEye,
                showGamesCard: false, //所有商品，遊戲櫃
            };
        },
        methods: {
            // 定義組件的方法
            increment() {
                this.count++;
            },
        },
    };
</script>