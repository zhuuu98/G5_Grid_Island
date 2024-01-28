<template>
    <div class="memberAside ">
        <div class="memberContent">
            <aside class="memAside ">
                <!-- 會員暱稱 -->
                <div class="memID" v-for="items in memID">
                        <img src="../assets/images/member/member_photo.svg" alt="會員頭貼">
                        <h3>{{ items }}</h3>
                </div>
                    <!-- 會員側邊攔 -->
                <ul class="asideList" >
                    <!-- 這裡等頁面做出來要記得放routerLink -->
                    <li class="asideListitem" v-for="(items,index) in AsideItem" :key="index">
                        <img 
                        :src="getImageUrl(`member/memberAsideIcon_${index+1}.svg`)">
                        <p>{{ items }}</p>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
        
</template>

<script>
    export default {
        data() {
            return {
                AsideItem: ['Griddy造型屋','會員資料修改','訂單資訊','預約紀錄','報隊管理','會員登出'],
                memID:['啊人家家就笨壓'],
                num:0,
            };
        },
        methods:{
            getImageUrl(paths){ //取得圖片路徑
        return new URL(`../assets/images/${paths}`, import.meta.url).href
            },
        }
    };


</script>

<style lang="scss" scoped>
//
</style>