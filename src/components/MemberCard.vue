<template>
    <div class="memberAside ">
        <div class="memberContent">
            <aside class="memAside ">
                <!-- 會員暱稱 -->
                <div class="memID" v-for="items in memID" @click="backToMemIndex">
                        <img src="../assets/images/member/member_photo.svg" alt="會員頭貼">
                        <h3 class="pc-h4">{{ items }}</h3>
                </div>
                    <!-- 會員側邊攔 -->
                <ul class="asideList" >
                    <!-- 這裡等頁面做出來要記得放routerLink -->
                    <li class="asideListitem" v-for="(items,index) in AsideItem" :key="index" @click="openList_PC(index)">
                        <img
                        :src="getImageUrl(`member/memberAsideIcon_${index+1}.svg`)">
                        <span >{{ items }}</span>
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
            openList_PC(index){
                switch (index) {
                case 0: //griddy
                    this.$router.push("/griddy-style");
                    this.$emit("griddy-style");
                    break;
                case 1: //會員資料修改
                    this.isChoosedEditData_PC = !this.isChoosedEditData_PC
                    this.$emit("changeMemberInfo");
                    break;
                case 2: //訂單紀錄
                    this.isChoosedOrderData_PC = !this.isChoosedOrderData_PC
                    this.$emit("orderInfo")
                    break;
                case 3: //預約紀錄
                    this.isChoosedBookData_PC = !this.isChoosedBookData_PC
                    this.$emit("bookInfo")
                    break;
                case 5: //登出
                    localStorage.removeItem('userToken')
                    localStorage.removeItem('userDataStr')
                    this.$router.push('/')
                    break;
                }
            },
            backToMemIndex(){//點會員名稱返回會員中心首頁
                this.isChoosedEditData_PC = false;
                this.isChoosedOrderData_PC= false;
                this.isChoosedBookData_PC= false;
                this.isChoosedIndex_PC=true;
                this.$emit('backToIndex');
            },
        }
    };


</script>

<style lang="scss" scoped>

</style>