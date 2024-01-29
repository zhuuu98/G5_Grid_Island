<template>
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
</template>

<script>
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
            mobileIcon:['Griddy造型屋','會員資料修改','訂單資訊','預約紀錄','報隊管理','會員登出'],


        };
    },

    mounted() {
        
    },

    methods: {
        getImageUrl(paths){ //取得圖片路徑
        return new URL(`../assets/images/${paths}`, import.meta.url).href
            },
    },
};
</script>