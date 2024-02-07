<template>
    <div class="about_2">
        <PageTitle :pageTitle="'關於我們'" />
        <div id="mixinTry">
            <div id="tryH1">噴火龍噴火</div>
            <div id="tryH2">水箭龜噴水</div>
            <div id="tryH3">妙蛙花噴花<br>妙蛙花噴花妙蛙花噴花</div>
            <div id="tryH4">土台龜噴土<br>土台龜噴土土台龜噴土</div>
            <div id="tryText">孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息孔子周遊列國，孔乙己充滿快活的氣息</div>




        </div>
        <!-- <div class="container"> -->
        <div class="row">
            <!-- 內容區 -->
            <!-- GridIsland簡介 -->
            <div class="about_gi">
                <div class="about_row">
                    <!-- 麵包屑 -->
                    <div class="breadcrumb">
                        <Breadcrumb separator="<b class='breadcrumb-separator'></b>">
                            <BreadcrumbItem to="/">首頁</BreadcrumbItem>
                            <BreadcrumbItem to="/about">關於我們</BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <div class="about_gi_intro">
                        <!-- 手機版title -->
                        <div class="about_gi_text_title_m">
                            <p>Grid Island</p>
                        </div>
                        <div class="about_gi_text">
                            <div class="about_gi_text_title">
                                <!-- <h3>Grid Island</h3> -->
                                <h3>Grid Island</h3>
                            </div>
                            <div class="about_gi_text_content">
                                <p>歡迎來到Grid Island！我們是一家充滿活力的桌遊店，店裡的吉祥物是一隻可愛的小蟲。提供絕佳聚會空間和最新桌遊，讓你與家人、朋友或同事盡情玩樂。<br>想擴充收藏或找尋新遊戲？我們有多樣選擇！在溫馨舒適的環境中，你將享受無盡的遊戲樂趣。Grid
                                    Island期待為你打造愉快的遊戲時光！</p>
                            </div>
                        </div>
                        <div class="about_gi_img">
                            <img src="../assets/images/about/about_intro.svg" alt="about_intro">
                        </div>
                    </div>
                </div>
            </div>

            <!-- ocean1 -->
            <div class="ocean_1 about_ocean">
                <img src="../../src/assets/images/about/about-ocean-1.svg" alt="about_ocean1">
            </div>

            <!-- 環境介紹 -->
            <div class="about_en">
                <div class="about_row">
                    <div class="about_en_section">
                        <!-- 輪播圖 -->
                        <div class="about_en_imgs">
                            <Carousel v-model="value" :autoplay="true" :autoplay-speed="2000" :dots="outside"
                                :radius-dot="true" :trigger="click" :arrow="false">
                                <!-- 輪播圖一 -->
                                <CarouselItem>
                                    <div class="about_demo-carousel">
                                        <img class="is_m" src="../assets/images/about/about_en_1_m.jpg" alt="en_1">
                                        <img class="is_d" src="../assets/images/about/about_en_1.jpg" alt="en_1">
                                    </div>
                                </CarouselItem>
                                <!-- 輪播圖二 -->
                                <CarouselItem>
                                    <div class="about_demo-carousel">
                                        <img class="is_m" src="../assets/images/about/about_en_3_m.jpg" alt="en_3">
                                        <img class="is_d" src="../assets/images/about/about_en_3.jpg" alt="en_3">
                                    </div>
                                </CarouselItem>
                                <!-- 輪播圖三 -->
                                <CarouselItem>
                                    <div class="about_demo-carousel">
                                        <img class="is_m" src="../assets/images/about/about_en_5_m.jpg" alt="en_5">
                                        <img class="is_d" src="../assets/images/about/about_en_5.jpg" alt="en_5">
                                    </div>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <!-- 環境敘述 -->
                        <div class="about_en_text">
                            <div class="about_en_text_title">
                                店內環境
                            </div>
                            <div class="about_en_text_content">
                                <p>
                                    我們擁有多種遊戲和豐富的場地設施，無論你是想和三五好友玩遊戲、舉辦大型派對，還是享受私密包廂，我們都能滿足你的需求。
                                </p>
                                <p>
                                    在這裡，你可以找到四人桌、八人桌和十二人包廂，適合各種不同大小的團體聚會。超過200款遊戲等著你來挑選，涵蓋策略、派對、家庭等各式各樣的遊戲，讓你盡情享受遊戲的樂趣。
                                </p>
                                <p>
                                    除了遊戲，我們還提供各種美食、飲料和酒精飲料，讓你在遊戲間隙能品嘗美味的炸物或餐飲，提振精神。
                                </p>
                                <p>
                                    此外，如果你計畫舉辦派對或特殊活動，我們也能提供場地包場服務，打造專屬於你的派對體驗。
                                </p>
                            </div>

                            <!-- <div class="about_re_btn"> -->
                            <div class="btn_lg">
                                <RouterLink to="/prebook">立即預約</RouterLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="ocean_2 about_ocean">
                <img src="../../src/assets/images/about/about-ocean-2.svg" alt="ocean_2">
            </div>

            <!-- griddy介紹 -->
            <div class="about_griddy">
                <div class="about_row">
                    <div class="about_griddy_section">

                        <div class="about_griddy_img">
                            <img src="../assets/images/about/about_card.svg" class="rotate-image" alt="ocean_2">
                        </div>

                        <div class="about_griddy_text">
                            <div class="about_griddy_title">
                                <h3>Griddy</h3>
                            </div>
                            <div class="about_griddy_content">
                                <p>
                                    這是Grid Island的可愛吉祥物 -
                                    <br>Griddy(小蟲)！<br>活潑好動的他總是迎接每一位遊客，帶來歡樂和笑容。他是我們店裡的快樂使者，喜歡玩遊戲、結交新朋友。與小蟲一起，遊戲永遠充滿驚喜和趣味！
                                </p>
                            </div>
                            <div class="btn_lg">
                                <RouterLink to="/griddy-style">
                                    創造專屬蟲蟲
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ocean_3 about_ocean">
                <img src="../../src/assets/images/about/about-ocean-3.svg" alt="ocean_3">
            </div>

            <!-- 店鋪資訊 -->
            <div class="about_info">
                <div class="about_row">
                    <div class="about_info_section">
                        <div class="about_info_text">
                            <div class="about_info_title">
                                <h3>店鋪資訊</h3>
                            </div>
                            <div class="about_info_content">
                                <p>
                                    Grid Island 座落在桃園市中壢區復興路46號9樓，是一個充滿活力的桌遊天堂。<br>
                                    營業時間自周一至周日，早上9點至晚上9點，絕對是發揮你遊戲技巧的最佳去處。無論是和好友輕鬆一局，還是舉辦派對聚會，我們都是你的最佳選擇。<br>
                                    有任何疑問或特殊需求，請隨時撥打我們的專線<br>
                                    03-4251108，我們隨時為您服務。
                                </p>
                            </div>
                        </div>
                        <div class="about_info_map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2490359444596!2d121.22244777538359!3d24.957640341361998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1706431161266!5m2!1szh-TW!2stw"
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <!-- width="600" height="450" style="border:0; -->
                        </div>
                    </div>
                </div>


            </div>



        </div>
        <!-- </div> -->
    </div>
    <!-- </div> -->
</template>


<script>
    // import axios from "axios";
    import PageTitle from "../components/PageTitle.vue";
    export default {
        data() {
            return {
                value: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                }
            };
        },
        computed: {

        },
        components: {
            PageTitle,
        },
        created() { },
        mounted() { },
        methods: {},
    };
</script>

<style lang="scss">

</style>