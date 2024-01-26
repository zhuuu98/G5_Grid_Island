<template>
    <div class="memberCard ">
        <!-- 會員暱稱 -->
        <div class="breadcrumb">
            <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
            <BreadcrumbItem to="/">首頁</BreadcrumbItem>
            <BreadcrumbItem>會員中心</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="container">
            <div class="memberContent row">
                <aside class="memAside col-T-3 col-PC-3">
                    <div class="memID" v-for="items in memID">
                        <img src="../assets/images/member/member_photo.svg" alt="會員頭貼">
                        <h3>{{ items }}</h3>
                    </div>
                    <!-- 會員側邊攔 -->
                    <ul class="asidelist" >
                        <!-- 這裡等頁面做出來要記得放routerLink -->
                        <li v-for="items in AsideItem">
                            {{ items }}
                        </li>
                    </ul>
                </aside>
                <div class="memberMain col-T-7 col-PC-7">
            
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                AsideItem: ['Griddy造型屋','會員資料修改','訂單資訊','預約紀錄','報隊管理','會員登出'],
                memID:['啊人家家就笨壓'],
            };
        },
    };


</script>

<style lang="scss" scoped>
//
</style>