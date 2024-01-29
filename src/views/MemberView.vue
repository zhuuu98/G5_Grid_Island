<template>
    <div class="Member">
        <PageTitle :pageTitle="'會員中心'" />
        <div class="container">
            <div class="memberMain row">
                <!-- 左側選單 -->
                <MemberCard class="col-T-3 col-PC-3"/>
                <!-- 右側主要內容 -->
                <!-- 會員中心首頁 -->
                <div class="memberContent col-T-7 col-PC-7" v-for="id in memID">
                    <h3>您好，{{id}}，歡迎入島遊玩！</h3>
                    <!-- 訂單資訊 -->
                    <div class="memberOrder">
                        <div class="memberOrderTitle">
                            <img src="../assets/images/member/memberAsideIcon_3.svg" alt="訂單資訊ICON">
                            <p>訂單資訊</p>
                        </div>
                        <div class="memberOrderNotFin">
                            <span>0</span>
                            <span>未完成</span>
                        </div>
                        <div class="memberOrderFinished">
                            <span>0</span>
                            <span>已完成</span>
                        </div>
                        <button class="memberLookOrder btn_lg_orange">查看訂單</button>
                    </div>
                    <!-- 預約紀錄 -->
                    <div class="memberBook">
                        <div class="membertop">
                            <div class="memberBookTitle">
                                <img src="../assets/images/member/memberAsideIcon_4.svg" alt="預約紀錄icon">
                                <p>預約紀錄</p>
                            </div>
                            <button class="memberLookBook btn_lg_orange">查看預約</button>
                        </div>
                        <div class="memberBooklog" v-for="date in bookDate">
                            <div class="dateAndCancel" >
                                <p>{{ date }}</p>
                                <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(date) }" @click="cancelReservation(date)">取消預約</button>
                            </div>
                            <div class="selectedTime" >
                                <button class="chooseTime"
                                v-for="(choose,index) in selectedTime.timePeriod" :key="index"
                                >
                                <p>{{ choose }}</p>
                                <p>{{ selectedTime.hours[index] }}</p>
                                </button>
                                <div class="numPeople" >
                                    <p>人數：{{ numPeople[0] }}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!-- 會員資料修改 -->
            </div>
        </div>
        <!-- 手機板選單 -->
        <div class="memberMobile container">
            <div class="mobileMember " v-for="items in memID">
                <img src="../assets/images/member/member_photo.svg" >
                {{ items }}
            </div>
            <div class="memberMainMobile ">
                <button class="mobileContent" v-for="(iconName,index) in mobileIcon">
                    <img
                    :src="getImageUrl(`member/memberAsideIcon_${index+1}.svg`)">
                    <p>{{ iconName }}</p>
                </button>
            </div>
        </div>
        <!-- 手機板會員資料修改 -->
        <div class="mobileEditData">
            <div class="editDataTitle">
                <img src="../assets/images/member/memberAsideIcon_2.svg" alt="會員資料修改icon">
                <h3>會員資料修改</h3>
            </div>
            <form action="" class="editDataContent">
                <label for="inputName">
                    <p>姓名：</p>
                    <input type="text" placeholder="請輸入姓名" id="inputName">
                </label>
                <label for="inputNickName">
                    <p>暱稱：</p>
                    <input type="text" placeholder="請輸入暱稱" id="inputNickName">
                </label>
                <label for="inputEmail">
                    <p>電子信箱：</p>
                    <input type="email" placeholder="請輸入電子信箱" id="inputEmail">
                </label>
                <label for="inputTel">
                    <p>連絡電話：</p>
                    <input type="tel" placeholder="請輸入連絡電話" id="inputTel">
                </label>
                <div class="inputSexual">
                    <p>性別：</p>
                    <div class="sexualRadio">
                        <label for="Men">
                            <input type="radio" id="Men" name="sexual">
                            男性
                        </label>
                        <label for="Women">
                            <input type="radio" id="Women" name="sexual">
                            女性
                        </label>
                        <label for="sexualOthers">
                            <input type="radio" id="sexualOthers" name="sexual">
                            其他
                        </label>
                    </div>
                </div>
                <label for="inputBirth">
                    <p>生日：</p>
                    <input type="date" placeholder="YYYY/MM/DD" id="inputBirth">
                </label>
                <label for="inputAdress">
                    <p>收件地址：</p>
                    <input type="text" placeholder="請輸入收件地址" id="inputAdress">
                </label>
                <input type="submit" class="searchBtn" value="儲存設定">
            </form>
        </div>
        <!-- 手機板會員訂單資訊 -->
        <div class="mobileOrderData">
            <div class="OrderDataTitle">
                <img :src="getImageUrl(`member/memberAsideIcon_3.svg`)">
                <h3>訂單資訊</h3>
            </div>
            <div class="OrderDataContent" v-for="(items,index) in orderList" :key="index">
                <div class="ContentTitle" v-for="title in items">
                    {{ title }}
                </div>

            </div>
        </div>
        <!-- 手機板會員預約紀錄 -->
        <div class="mobileBookData">
            <div class="bookDataTitle">
                <img :src="getImageUrl(`member/memberAsideIcon_4.svg`)" alt="預約紀錄icon">
                <p>{{ mobileIcon[3] }}</p>
            </div>
            <div class="bookDataContent" v-for="date in bookDate">
                <div class="mobileBookDateCancel" >
                    <p>{{ date }}</p>
                    <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(date) }" @click="cancelReservation(date)">取消預約</button>
                </div>
                <p>時段：</p>
                <div class="mobileBookTime">
                    <button class="chooseTime"
                    v-for="(choose,index) in selectedTime.timePeriod" :key="index"
                    >
                    <p>{{ choose }}</p>
                    <p>{{ selectedTime.hours[index] }}</p>
                    </button>
                </div>
                <p>人數：{{ numPeople[0] }}</p>

            </div>

        </div>
        <!-- 手機板會員報隊管理 -->

    </div>
</template>

<script>
import MemberCard from "../components/MemberCard.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
    data() {
        return {
            memID:['啊人家家就笨壓'], //會員暱稱
            bookDate:['2024/02/02','2023/12/24'], //預約資訊-日期
            selectedTime:{
                timePeriod:['上午','下午','下午','晚上'],
                hours:['09:00~12:00','12:00~15:00','15:00~18:00','18:00~21:00']
            },
            isChoose:true,
            numPeople:['4人','6人'],//預約資訊-人數
            mobileIcon:['Griddy造型屋','會員資料修改','訂單資訊','預約紀錄','報隊管理','會員登出'],//手機板ICON名字

            //訂單資訊
            orderList:{
                orderTitle:['訂單日期','訂單編號','總計'],
                orderDate:['2023/12/21','2023/12/11'],//訂單日期
                orderNum:[1,2],//訂單編號
                orderTotal:[9000,500],//訂單總計
                orderState:['未完成','已完成'], //訂單狀況
                orderItems:['阿瓦蟲','貓與城之內豪華精裝版'],//購買項目
                orderItemsPrice:[500,8000],//購買項目的單價
                orderItemsNum:[2,1],//購買項目的數量
                orderItemsTotal:[2,1],//購買項目的數量*單價=小計

            }
        };
    },
    components:{
        MemberCard,
        PageTitle,
    },

    mounted() {
        
    },

    methods: {
        isPastDate(date) {
        const today = new Date();
        const selectedDate = new Date(date);
        return selectedDate < today;
        },
        getImageUrl(paths){ //取得圖片路徑
        return new URL(`../assets/images/${paths}`, import.meta.url).href
            },
    },

};
</script>