<template>
    <div class="Member">
        <PageTitle :pageTitle="'會員中心'" />
        <div class="container">
            <div class="memberMain row">
                <MemberCard class="col-T-3 col-PC-3"/>
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
                        <div class="memberBooklog" v-for="date in orderDate">
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
            </div>
        </div>
    </div>
</template>

<script>
import MemberCard from "../components/MemberCard.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
    data() {
        return {
            memID:['啊人家家就笨壓'],
            orderDate:['2024/02/02','2023/12/24'],
            selectedTime:{
                timePeriod:['上午','下午','下午','晚上'],
                hours:['09:00~12:00','12:00~15:00','15:00~18:00','18:00~21:00']
            },
            isChoose:true,
            numPeople:['4人','6人']
            ,
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
        }
    },

};
</script>