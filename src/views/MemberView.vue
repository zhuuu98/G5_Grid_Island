<template>
    <div class="Member">
        <PageTitle :pageTitle="'會員中心'" />
        <div class="container">
            <div class="memberMain row">
                <!-- 左側選單 -->
                <div class="memberAside col-T-3 col-PC-3">
                    <div class="memberContent">
                        <aside class="memAside ">
                            <!-- 會員暱稱 -->
                            <div class="memID" v-for="memID in memberData" @click="backToMemIndex">
                                <img :src="`https://tibamef2e.com/chd104/g5/image/mem/${memID.mem_profile}`" alt="會員頭貼">
                                <h3 class="pc-h4" v-if="memberData[0].mem_nickname">{{ memID.mem_nickname }}</h3>
                                <h3 class="pc-h4" v-else>{{ memID.mem_name }}</h3>
                            </div>
                            <!-- 會員側邊攔 -->
                            <ul class="asideList">
                                <li class="asideListitem" v-for="(items, index) in AsideItem" :key="index"
                                    @click="openList_PC(index)">
                                    <img :src="getImageUrl(`member/memberAsideIcon_${index + 1}.svg`)">
                                    <span>{{ items }}</span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>

                <!-- 右側主要內容 -->
                <!-- 會員中心首頁 -->
                <div class="memberContentIndex col-T-7 col-PC-7" v-show="isChoosedIndex_PC">
                    <!-- <h3 v-if="memberData[0]" class="hello">
                        您好，{{ memberData[0].mem_nickname }}，歡迎入島遊玩！</h3> -->
                    <h3 class="hello" v-for="nickname in memberData">
                        <p v-if="nickname.mem_nickname">您好，{{ nickname.mem_nickname }}，歡迎入島遊玩！</p>
                        <p v-else>您好，{{ nickname.mem_name }}，歡迎入島遊玩！</p>
                    </h3>

                    <!-- 訂單資訊 -->
                    <div class="memberOrder">
                        <div class="memberOrderTitle">
                            <img src="../assets/images/member/memberAsideIcon_3.svg" alt="訂單資訊ICON">
                            <p>訂單資訊</p>
                        </div>
                        <div class="memberOrderNotFin">
                            <span>{{ undoneOrder }}</span>
                            <span>未完成</span>
                        </div>
                        <div class="memberOrderFinished">
                            <span>{{ completedOrder }}</span>
                            <span>已完成</span>
                        </div>
                        <button class="memberLookOrder btn_lg_orange" @click="order">查看訂單</button>
                    </div>
                    <!-- 預約紀錄 -->
                    <div class="memberBook">
                        <div class="membertop">
                            <div class="memberBookTitle">
                                <img src="../assets/images/member/memberAsideIcon_4.svg" alt="預約紀錄icon">
                                <p>預約紀錄</p>
                            </div>
                            <button class="memberLookBook btn_lg_orange" @click="book">查看預約</button>
                        </div>
                        <div class="memberBooklog" v-for="data in bookInfo">
                            <div class="dateAndCancel">
                                <p>{{ data.book_date }}</p>
                                <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(data.book_date) }"
                                    @click="alertCancelbox(data.book_date)">取消預約</button>
                            </div>
                            <div class="TimeAndPeople">
                                <p>時段：</p>
                                <div class="selectedTime">
                                    <div class="chooseTime">
                                        <p>{{ data.book_time }}{{ data.book_start_time }}~{{ data.book_end_time }}</p>

                                    </div>
                                </div>
                                <div class="numPeople">
                                    <p>人數：{{ data.book_people }}人</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- PC會員資料修改 -->
                <div class="PC_EditData col-T-7 col-PC-7" v-show="isChoosedEditData_PC">
                    <div class="content">
                        <div class="title">
                            <img src="../assets/images/member/memberAsideIcon_2.svg" alt="會員資料修改icon">
                            <h3 class="pc-h4">會員資料修改</h3>
                        </div>
                        <!-- <form action="" class="dataContent" method="post" v-if="memberData[0]"> -->
                        <form action="" class="dataContent" method="post" v-for="data in memberData">
                            <label for="memName">姓名</label>
                            <input type="text" :placeholder="data.mem_name" id="memName" name="mem_name">

                            <label for="memNickname">暱稱</label>
                            <input type="text" :placeholder="data.mem_nickname" id="memNickname" name="mem_nickname">
                            <label for="memEmail">電子信箱</label>
                            <input type="email" :placeholder="data.mem_email" id="memEmail" name="mem_email" readonly
                                class="email">
                            <label for="memTel">連絡電話</label>
                            <input type="tel" :placeholder="data.mem_tel" id="memTel" name="mem_tel">
                            <div class="inputGender">
                                <span>性別</span>
                                <div class="genderRadio">
                                    <input type="radio" id="female" name="mem_gender" value="0"
                                        :checked="data.mem_gender == 0">
                                    <label for="female">女性</label>
                                    <input type="radio" id="male" name="mem_gender" value="1"
                                        :checked="data.mem_gender == 1">
                                    <label for="male">男性</label>
                                    <input type="radio" id="they" name="mem_gender" value="2"
                                        :checked="data.mem_gender == 2">
                                    <label for="they">其他</label>
                                </div>
                            </div>
                            <label for="memBirth">生日</label>
                            <input type="date" :value="data.mem_birthday" id="memBirth" name="mem_birth">
                            <label for="memAddr">收件地址</label>
                            <input type="text" :placeholder="data.mem_addr" id="memAddr" name="mem_addr">
                            <input type="submit" class="searchBtn" value="儲存設定">
                        </form>
                    </div>
                </div>
                <!-- PC訂單資訊 -->
                <div class="PC_OrderData col-T-7 col-PC-7" v-show="isChoosedOrderData_PC">
                    <div class="content">
                        <div class="PC_OrderDataTitle">
                            <img :src="getImageUrl(`member/memberAsideIcon_3.svg`)">
                            <h3 class="pc-h4">訂單資訊</h3>
                        </div>
                        <div class="PC_OrderDataContent">
                            <div class="PC_ContentTitle">
                                <p v-for="title in orderTitle">{{ title }}</p>

                            </div>
                            <div class="PC_orderMain">
                                <div class="PC_OrderDataList" v-for="(items, index) in orderInfo" :key="index">
                                    <div class="PC_orderSimple">
                                        <div class="PC_orderListText">
                                            <p>{{ items.ord_date }}</p>
                                            <p>{{ items.ord_id }}</p>
                                            <p>${{ items.ord_sum }}</p>
                                            <p>{{ items.ord_state === 0 ? '未完成' : '已完成'  }}</p>
                                        </div>
                                        <button class="btn_sm_1" @click="OpenList(index)">訂單明細</button>

                                    </div>
                                    <div class="PC_OrderDataDetail" v-for="(prod, prodIndex) in items.orderListInfo"
                                        v-show="items.openOrderList">

                                        <img :src="`https://tibamef2e.com/chd104/g5/image/prod/${prod.prod_img1}`"
                                            :alt="prod.prod_name">
                                        <p>{{ prod.prod_name }}</p>
                                        <p>${{ prod.ord_item_price }}</p>
                                        <p>{{ prod.ord_item_qty }}個</p>
                                        <p>${{ prod.ord_item_total }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- PC預約紀錄 -->
                <div class="PC_BookData col-T-7 col-PC-7" v-show="isChoosedBookData_PC">
                    <div class="content">
                        <div class="memberBook">
                            <div class="membertop">
                                <div class="memberBookTitle">
                                    <img src="../assets/images/member/memberAsideIcon_4.svg" alt="預約紀錄icon">
                                    <h3 class="pc-h4">預約紀錄</h3>
                                </div>
                            </div>
                            <div class="memberBooklog" v-for="data in bookInfo">
                                <div class="dateAndCancel">
                                    <p>{{ data.book_date }}</p>
                                    <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(data.book_date) }"
                                        @click="alertCancel(data.book_date)">取消預約
                                    </button>
                                    <!-- 取消預約燈箱-->
                                    <div class="alertCancel_bg" v-show="alertCancel">
                                        <div class="alertCancel_main">
                                            <div class="alertCancel_content">
                                                <p>您確定要取消
                                                </p>
                                                <p>{{ data.book_date }}</p>
                                                <p>
                                                    {{
                                                    data.book_time +
                                                    data.book_start_time+`~`+data.book_end_time
                                                    }}
                                                </p>
                                                <p>人數：{{ data.book_people }}人</p>
                                                <p>
                                                    這筆預約嗎？
                                                </p>
                                            </div>
                                            <button>確定</button>
                                            <button>取消</button>

                                        </div>
                                    </div>

                                </div>
                                <div class="TimeAndPeople">
                                    <p>時段：</p>
                                    <div class="selectedTime">
                                        <div class="chooseTime">
                                            <p>{{ data.book_time }}</p>
                                            <p>{{ data.book_start_time }}~{{ data.book_end_time }}</p>
                                        </div>
                                    </div>
                                    <div class="numPeople">
                                        <p>人數：{{ data.book_people }}人</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 手機板選單 -->
        <div class="memberMobile container">
            <div class="mobileMember " v-for="item in memberData">
                <img :src="`https://tibamef2e.com/chd104/g5/image/mem/${item.mem_profile}`" alt="會員頭貼">
                <p v-if="item.mem_nickname">{{ item.mem_nickname }}</p>
                <p v-else>{{ item.mem_name }}</p>
            </div>
            <div class="memberMainMobile ">
                <button class="mobileContent" v-for="(iconName, index) in mobileIcon" @click="handleButtonClick(index)">
                    <img :src="getImageUrl(`member/memberAsideIcon_${index + 1}.svg`)">
                    <p>{{ iconName }}</p>
                </button>
            </div>
        </div>

        <!-- 手機板會員資料修改 -->
        <div class="mobileEditData" v-show="isChoosedEditData">
            <div class="wrapper">
                <div class="title">
                    <img src="../assets/images/member/memberAsideIcon_2.svg" alt="會員資料修改icon">
                    <h3 class="pc-h4">會員資料修改</h3>
                </div>
                <!-- <form action="" class="content" v-if="memberData[0]"> -->
                <form action="" class="content" v-for="data in memberData">
                    <label for="memName">姓名</label>
                    <input type="text" :placeholder="data.mem_name" id="memName" name="mem_name">
                    <label for="memNickname">暱稱</label>
                    <input type="text" :placeholder="data.mem_nickname" name="mem_nickname">
                    <label for="memEmail">電子信箱</label>
                    <input type="email" :placeholder="data.mem_email" id="memEmail" name="mem_email" readonly class="email">
                    <label for="memTel">連絡電話</label>
                    <input type="tel" :placeholder="data.mem_tel" id="memTel" name="mem_tel">
                    <div class="inputGender">
                        <span>性別</span>
                        <div class="genderRadio">
                            <input type="radio" id="femaleMb" name="mem_gender" value="0" :checked="data.mem_gender == 0">
                            <label for="femaleMb">女性</label>
                            <input type="radio" id="maleMb" name="mem_gender" value="1" :checked="data.mem_gender == 1">
                            <label for="maleMb">男性</label>
                            <input type="radio" id="theyMb" name="mem_gender" value="2" :checked="data.mem_gender == 2">
                            <label for="theyMb">其他</label>
                        </div>
                    </div>
                    <label for="memBirth">生日</label>
                    <input type="date" :value="data.mem_birthday" id="memBirth" name="mem_birth">
                    <label for="memAddr">收件地址</label>
                    <input type="text" :placeholder="data.mem_addr" id="memAddr" name="mem_addr">
                    <input type="submit" class="searchBtn submit" value="儲存設定">
                </form>
            </div>
        </div>
        <!-- 手機板會員訂單資訊 -->
        <div class="mobileOrderData" v-show="isChoosedOrderData">
            <div class="wrapper">
                <div class="OrderDataTitle">
                    <img :src="getImageUrl(`member/memberAsideIcon_3.svg`)">
                    <h3 class="pc-h4">訂單資訊</h3>
                </div>
                <div class="OrderDataContent">
                    <div class="orderMain">
                        <div class="OrderDataList" v-for="(items, index) in orderInfo" :key="index">
                            <div class="orderSimple">
                                <div class="orderListText">
                                    <p>{{ items.ord_date }}</p>
                                    <p>{{ items.ord_id }}</p>
                                    <p>${{ items.ord_pay }}</p>
                                    <p>{{ items.ord_state === 0 ? '未完成' : '已完成' }}</p>
                                </div>
                                <button class="btn_sm_1" @click="OpenList(index)">訂單明細</button>
                            </div>
                            <div class="OrderDataDetail" v-for="(prod, prodIndex) in items.orderListInfo"
                                v-show="prod.openOrderList">
                                <img :src="`https://tibamef2e.com/chd104/g5/image/prod/${prod.prod_img1}`"
                                    :alt="prod.prod_name">
                                <p>{{ prod.prod_name }}</p>
                                <p>${{ prod.ord_item_price }}</p>
                                <p>{{ prod.ord_item_qty }}個</p>
                                <p>${{ prod.ord_item_total }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 手機板會員預約紀錄 -->
        <div class="mobileBookData" v-show="isChoosedBookData">
            <div class="wrapper">
                <div class="bookDataTitle">
                    <img :src="getImageUrl(`member/memberAsideIcon_4.svg`)" alt="預約紀錄icon">
                    <h3 class="pc-h4">{{ mobileIcon[3] }}</h3>
                </div>
                <div class="bookDataContent" v-for="data in bookInfo">
                    <div class="mobileBookDateCancel">
                        <p>{{ data.book_date }}</p>
                        <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(data.book_date) }"
                            @click="alertCancelbox()">取消預約</button>
                            <!-- 取消預約燈箱 -->
                            <div class="alertCancel_bg" v-if="alertCancel">
                                <div class="alertCancel_main">
                                    <div class="alertCancel_content">
                                        <button @click="closeAlert()">
                                            <i class="fa-solid fa-xmark fa-2x" ></i>
                                        </button>
                                        
                                        <p>您確定要取消
                                        </p>

                                        <p>{{ data.book_date }}</p>
                                        <p>
                                            {{
                                            data.book_time +
                                            data.book_start_time+`~`+data.book_end_time
                                            }}
                                        </p>
                                        <p>人數：{{ data.book_people }}人</p>
                                        <p>
                                            這筆預約嗎？
                                        </p>
                                    </div>
                                    <div class="cancelBtns">
                                        <button>確定</button>
                                        <button>取消</button>
                                    </div>
                                    
                                </div>
                            </div>

                    </div>
                    <div class="TimeAndPeople">
                        <p>時段：</p>
                        <div class="selectedTime">
                            <div class="chooseTime">
                                <p>{{ data.book_time }}{{ data.book_start_time }}~{{ data.book_end_time }}</p>

                            </div>
                        </div>
                        <div class="numPeople">
                            <p>人數：{{ data.book_people }}人</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- 手機板會員報隊管理 -->

    </div>
</template>

<script>
import axios from 'axios';
import MemberCard from "../components/MemberCard.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
    data() {
        return {

            memberData: [],//會員資料
            bookInfo: [],//預約資料
            orderInfo: [],//訂單資料
            orderListInfo: [],//訂單明細
            undoneOrder: 0,//未完成訂單
            completedOrder: 0,//已完成訂單

            userdata: {},

            //電腦側邊欄
            AsideItem: ['Griddy造型屋','會員資料修改','訂單資訊','預約紀錄','報隊管理','會員登出'],


            mobileIcon: ['Griddy造型屋', '會員資料修改', '訂單資訊', '預約紀錄', '報隊管理', '會員登出'],//手機板ICON名字

            //訂單資訊
            orderTitle: ['訂單日期', '訂單編號', '總計', '訂單狀況'],

            isChoosedEditData: false,//會員資料修改被選擇
            isChoosedOrderData: false,//訂單紀錄被選擇
            isChoosedBookData: false,//預約紀錄被選擇
            openOrderList: false,

            isChoosedEditData_PC: false,//電腦會員資料修改被選擇
            isChoosedOrderData_PC: false,//電腦訂單紀錄被選擇
            isChoosedBookData_PC: false,//電腦預約紀錄被選擇
            isChoosedIndex_PC: true,

            alertCancel:true,//取消預約燈箱開關
        };
    },
    components: {
        MemberCard,
        PageTitle,
    },
    created() {
        // 從localstorage中獲取mem_id
        const userData = JSON.parse(localStorage.getItem("userDataStr"));
        const memid = userData.mem_id;
        // console.log(memid)
        // 發送POST請求到後端的PHP程式
        axios.post(`${import.meta.env.VITE_API_URL}/getMember.php`, {
            mem_id: memid
        })
            .then(res => {
                // 成功接收後端返回的資料
                // console.log(res.data.undoneOrder[0]['count(*)']);
                // console.log(res.data.undoneOrder);
                this.memberData = res.data.memberData;
                this.bookInfo = res.data.bookInfo;
                this.undoneOrder = res.data.undoneOrder;
                this.completedOrder = res.data.completedOrder;
                this.orderInfo = res.data.orderInfo;
                //跑迴圈渲染子陣列
                for (let i = 0; i < this.orderInfo.length; i++) {
                    let item = this.orderInfo[i];
                    //把json變成陣列
                    let jsondata = JSON.parse(item.orderListInfo);
                    //把陣列內容渲染到頁面上
                    // 在每個物件中新增一個布林值屬性 openOrderList
                    item.openOrderList = false;

                    // console.log(this.orderInfo[i]);


                    item.orderListInfo = jsondata;

                    // console.log(jsondata);
                }


            })
            .catch(error => console.error('發生錯誤:', error));


        this.isLogin()
    },
    mounted() {
        this.userData = JSON.parse(localStorage.getItem("userDataStr"))
    },
    methods: {
        isPastDate(date) {
            const today = new Date();
            const selectedDate = new Date(date);
            return selectedDate < today;
        },
        getImageUrl(paths) { //取得圖片路徑
            return new URL(`../assets/images/${paths}`, import.meta.url).href
        },
        OpenList(orderIndex) { //訂單打開明細
            // 取得特定索引的訂單資料
            const order = this.orderInfo[orderIndex];
            //看看值對不對
            // console.log(this.orderInfo[orderIndex].openOrderList);

            // 開關訂單明細
            this.orderInfo[orderIndex].openOrderList = !this.orderInfo[orderIndex].openOrderList


        },
        openList_PC(index){//電腦版選單
            this.isChoosedEditData_PC = false
            this.isChoosedOrderData_PC = false
            this.isChoosedBookData_PC = false
            this.isChoosedIndex_PC=true

            switch (index) {
                case 0: //griddy
                    this.$router.push("/griddy-style");
                    this.$emit("griddy-style");
                    break;
                case 1: //會員資料修改
                    this.isChoosedIndex_PC=!this.isChoosedIndex_PC
                    this.isChoosedEditData_PC = !this.isChoosedEditData_PC
                    break;
                case 2: //訂單紀錄
                    this.isChoosedIndex_PC=!this.isChoosedIndex_PC
                    this.isChoosedOrderData_PC = !this.isChoosedOrderData_PC
                    break;
                case 3: //預約紀錄
                    this.isChoosedIndex_PC=!this.isChoosedIndex_PC
                    this.isChoosedBookData_PC = !this.isChoosedBookData_PC
                    break;
                case 5: //登出
                    localStorage.removeItem('userToken')
                    localStorage.removeItem('userDataStr')
                    this.$router.push('/')
                    break;
                }
            },

        
        handleButtonClick(index) { //手機板選單
            this.isChoosedEditData = false
            this.isChoosedOrderData = false
            this.isChoosedBookData = false
            this.mobileListIsChoosed = false
            switch (index) {
                case 0: //griddy
                    this.$router.push("/griddy-style");
                    this.$emit("griddy-style");
                    break;

                case 1: //會員資料修改
                    this.isChoosedEditData = !this.isChoosedEditData
                    break;
                case 2: //訂單紀錄
                    this.isChoosedOrderData = !this.isChoosedOrderData
                    break;
                case 3: //預約紀錄
                    this.isChoosedBookData = !this.isChoosedBookData
                    break;
                case 4: //報隊管理

                    break;
                case 5: //登出
                    localStorage.removeItem('userToken')
                    localStorage.removeItem('userDataStr')
                    this.$router.push('/')
                    break;

            }
            console.log(`Button at index ${index} clicked`);
        },
        changeMember() {
            this.isChoosedEditData_PC = true;
            this.isChoosedOrderData_PC = false;
            this.isChoosedBookData_PC = false;
            this.isChoosedIndex_PC = false;
        },
        order() {
            this.isChoosedEditData_PC = false;
            this.isChoosedOrderData_PC = true;
            this.isChoosedBookData_PC = false;
            this.isChoosedIndex_PC = false;
        },
        book() {
            this.isChoosedEditData_PC = false;
            this.isChoosedOrderData_PC = false;
            this.isChoosedBookData_PC = true;
            this.isChoosedIndex_PC = false;
        },
        backToMemIndex() {
            this.isChoosedEditData_PC = false;
            this.isChoosedOrderData_PC = false;
            this.isChoosedBookData_PC = false;
            this.isChoosedIndex_PC = true;
        },
        isLogin() {
            const userToken = localStorage.getItem("userToken")
            // return userToken? true: false
            if (userToken) {
                console.log("已經登入")
            } else {
                console.log("你沒登入欸")
            }
        },
        alertCancelbox() {
            this.alertCancel=true
        },
        closeAlert(){
            this.alertCancel=false
            console.log(this.alertCancel);
        },

    },

};
</script>