<template>
    <div id="banner-container" ref="bannerContainer">
        <div id="banner-imagebox">
            <img :src="island" id="island-image" />
            <div id="treeTag" class="itemTag">
                <span>會員中心</span>
            </div>
            <router-link to="/member">
                <img :src="islandTree" id="islandTree-image" @mouseenter="showTreeCard = true"
                    @mouseleave="showTreeCard = false" />
            </router-link>

            <div id="newsTag" class="itemTag">
                <span>最新消息</span>
            </div>
            <router-link to="/news">
                <img :src="islandNews" id="islandNews-image" @mouseenter="showNewsCard = true"
                    @mouseleave="showNewsCard = false" />
            </router-link>

            <img :src="islandBar" id="islandBar-image" />

            <div id="GamesTag" class="itemTag">
                <span>所有商品</span>
            </div>
            <router-link to="/product">
                <img :src="islandGames" id="islandGames-image" @mouseenter="showGamesCard = true"
                    @mouseleave="showGamesCard = false" />
            </router-link>
            <div id="aboutTag" class="itemTag">
                <span>關於我們</span>
            </div>
            <img :src="islandRoof" id="islandRoof-image" />
            <div id="boardTag" class="itemTag">
                <span>玩家社群</span>
            </div>
            <router-link to="/board">
                <img :src="islandBoard" id="islandBoard-image" @mouseenter="showBoardCard = true"
                    @mouseleave="showBoardCard = false" />
            </router-link>
            <div id="bugTag" class="itemTag">
                <span>Griddy<br>造型屋</span>
            </div>
            <router-link to="/griddy-style">
                <img :src="islandBug" id="islandBug-image" @mouseenter="showBugCard = true"
                    @mouseleave="showBugCard = false" />
            </router-link>

            <img :src="islandBarup" id="islandBarup-image" />

            <div id="prebookTag" class="itemTag">
                <span>場地預約</span>
            </div>
            <router-link to="/prebook">
                <img :src="islandPrebook" id="islandPrebook-image" @mouseenter="showPrebookCard = true"
                    @mouseleave="showPrebookCard = false" />
            </router-link>
            <div id="cartTag" class="itemTag">
                <span>購物車</span>
            </div>
            <router-link to="/cart">
                <img :src="islandCart" id="islandCart-image" @mouseenter="showCartCard = true"
                    @mouseleave="showCartCard = false" />
            </router-link>

            <router-link to="/about">
                <img :src="islandAbout" id="islandAbout-image" @mouseenter="showAboutCard = true"
                    @mouseleave="showAboutCard = false" />
            </router-link>

            <img :src="lEye" id="lEye" ref="leftEyeRef" />
            <img :src="rEye" id="rEye" ref="rightEyeRef" />
            <!-- ============================================= -->
            <div id="banner-cardsbox">
                <div v-if="showTreeCard" id="treeCard" class="showCard">
                    <span class="card-title">會員中心</span>
                    <div class="card-line"></div>
                    <p class="card-text">毛毛蟲之歸屬，於此粉墨衣裝、查看遊歷紀錄。</p>
                </div>
                <div v-if="showBoardCard" id="boardCard" class="showCard">
                    <span class="card-title">玩家社群</span>
                    <div class="card-line"></div>
                    <p class="card-text">玩家交流之地，分享桌遊經驗，結織世界友誼。</p>
                </div>
                <div v-if="showNewsCard" id="newsCard" class="showCard">
                    <span class="card-title">最新消息</span>
                    <div class="card-line"></div>
                    <p class="card-text">板上新蹤，於此發掘格線島之近況與盛事。</p>
                </div>
                <div v-if="showCartCard" id="cartCard" class="showCard">
                    <span class="card-title">購物車</span>
                    <div class="card-line"></div>
                    <p class="card-text">車中積載，點金訂物，妙趣橫生隨囊歸。</p>
                </div>
                <div v-if="showAboutCard" id="aboutCard" class="showCard">
                    <span class="card-title">關於我們</span>
                    <div class="card-line"></div>
                    <p class="card-text">格間交織於此島，譜寫桌遊新篇章。</p>
                </div>
                <div v-if="showGamesCard" id="gamesCard" class="showCard">
                    <span class="card-title">所有商品</span>
                    <div class="card-line"></div>
                    <p class="card-text">櫃中珍藏匯聚天下桌遊，於此揀選，尋心之所向。</p>
                </div>
                <div v-if="showBugCard" id="bugCard" class="showCard">
                    <span class="card-title">Griddy造型屋</span>
                    <div class="card-line"></div>
                    <p class="card-text">於此匯聚個性，繪製風采，粉墨登場。</p>
                </div>
                <div v-if="showPrebookCard" id="prebookCard" class="showCard">
                    <span class="card-title">預約場地</span>
                    <div class="card-line"></div>
                    <p class="card-text">墨書登記，備以預約遊戲之地，選擇良辰與桌戲。</p>
                </div>
            </div>
        </div>

        <div id="whiteWave-imagebox">
            <div v-html="whiteWaveSvg" id="whiteWave"></div>
            <div id="whitebox"></div>
        </div>
    </div>
</template>
<script>
    import { ref, onMounted, onUnmounted } from "vue";
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
    import { whiteWave } from "../policy/wave.js";

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
                showTreeCard: false, //會員中心，樹
                showAboutCard: false, //關於我們，招牌
                showBoardCard: false, //玩家社群，留言板
                showPrebookCard: false, //預約場地，書桌
                showCartCard: false, //購物車，購物車
                showBugCard: false, //造型屋，蟲
                showNewsCard: false, //最新消息，佈告欄
                whiteWaveSvg: whiteWave,
            }
        },
        mounted() {
            // 为整个容器添加事件监听器
            this.$refs.bannerContainer.addEventListener("mousedown", this.preventDrag);
            document.addEventListener("mousemove", this.handleMouseMove);
            
        },
        beforeDestroy() {
            // 在组件销毁时移除事件监听器
            this.$refs.bannerContainer.removeEventListener(
                "mousedown",
                this.preventDrag
            );
            document.removeEventListener("mousemove", this.handleMouseMove);

        },
        methods: {
            // 定義組件的方法
            preventDrag(event) {
                // 检查事件的目标是否是您想阻止拖拽的图像
                if (event.target.tagName === "IMG") {
                    event.preventDefault();
                }
            },
            moveEye(
                eye,
                mouseX,
                mouseY,
                initialLeft,
                initialTop,
                maxMovementX,
                maxMovementY
            ) {
                if (!eye) return;

                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                let deltaX = ((mouseX - eyeCenterX) / window.innerWidth) * 200;
                let deltaY = ((mouseY - eyeCenterY) / window.innerHeight) * 200;

                // 检查是否在椭圆形轨迹内
                if (
                    (deltaX * deltaX) / (maxMovementX * maxMovementX) +
                    (deltaY * deltaY) / (maxMovementY * maxMovementY) >
                    1
                ) {
                    const angle = Math.atan2(deltaY, deltaX);
                    deltaX = maxMovementX * Math.cos(angle);
                    deltaY = maxMovementY * Math.sin(angle);
                }

                eye.style.left = `calc(${initialLeft}% + ${deltaX}%)`;
                eye.style.top = `calc(${initialTop}% + ${deltaY}%)`;
            },
            handleMouseMove(event) {
                requestAnimationFrame(() => {
                    this.moveEye(
                        this.$refs.leftEyeRef,
                        event.clientX,
                        event.clientY,
                        47.8,  // x軸定位點
                        43.2,   // y軸定位點
                        1, // x軸移動範圍
                        1.4 // y軸移動範圍
                    );
                    this.moveEye(
                        this.$refs.rightEyeRef,
                        event.clientX,
                        event.clientY,
                        51.75,  // x軸定位點
                        42.35,   // y軸定位點
                        0.8, // x軸移動範圍
                        1.28 // y軸移動範圍
                    );
                });
            }
        },
    };
</script>