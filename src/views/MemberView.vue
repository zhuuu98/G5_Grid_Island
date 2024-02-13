<template>
    <div class="Member">
        <PageTitle :pageTitle="'會員中心'" />
        <div class="container">
            <div class="memberMain row">
                <!-- 左側選單 -->
                <MemberCard class="col-T-3 col-PC-3" @changeMemberInfo="changeMember"
                @orderInfo="order"
                @bookInfo="book" 
                @backToIndex="backToMemIndex"
                />
                <!-- 右側主要內容 -->
                <!-- 會員中心首頁 -->
                <div class="memberContentIndex col-T-7 col-PC-7"  v-show="isChoosedIndex_PC">
                    <h3 class="hello">
                        您好，{{ memberData[0].mem_nickname }}，歡迎入島遊玩！</h3>
                    
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
                        <div class="memberBooklog" v-for="date in bookDate">
                            <div class="dateAndCancel">
                                <p>{{ date }}</p>
                                <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(date) }"
                                    @click="cancelReservation(date)">取消預約</button>
                            </div>
                            <div class="selectedTime">
                                <button class="chooseTime" v-for="(choose, index) in selectedTime.timePeriod" :key="index">
                                    <p>{{ choose }}</p>
                                    <p>{{ selectedTime.hours[index] }}</p>
                                </button>
                                <div class="numPeople">
                                    <p>人數：{{ numPeople[0] }}</p>
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
                        <form action="" class="dataContent" method="post" >
                            <label for="memName">姓名</label>
                            <input type="text" :placeholder="memberData[0].mem_name" id="memName" name="mem_name">
                            
                            <label for="memNickname">暱稱</label>
                            <input type="text" :placeholder="memberData[0].mem_nickname" id="memNickname" name="mem_nickname" >
                            <label for="memEmail">電子信箱</label>
                                <input type="email" :placeholder="memberData[0].mem_email" id="memEmail" name="mem_email" readonly class="email">
                            <label for="memTel">連絡電話</label>
                            <input type="tel" :placeholder="memberData[0].mem_tel" id="memTel" name="mem_tel" >
                            <div class="inputGender">
                                <span>性別</span>
                                <div class="genderRadio">
                                    <input type="radio" id="female" name="mem_gender" value="0" :checked="memberData[0].mem_gender == 0">
                                    <label for="female">女性</label>
                                    <input type="radio" id="male" name="mem_gender" value="1" :checked="memberData[0].mem_gender == 1">
                                    <label for="male">男性</label>
                                    <input type="radio" id="they" name="mem_gender" value="2" :checked="memberData[0].mem_gender == 2">
                                    <label for="they">其他</label>
                                </div>
                            </div>
                            <label for="memBirth">生日</label>
                                <input type="date" :value="memberData[0].mem_birthday" id="memBirth" name="mem_birth" >
                            <label for="memAddr">收件地址</label>
                                <input type="text" :placeholder="memberData[0].mem_addr" id="memAddr" name="mem_addr">
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
                                <p></p>
                            </div>
                            <div class="PC_orderMain">
                                <div class="PC_OrderDataList" v-for="(items, index) in orderList" :key="index">
                                    <div class="PC_orderSimple">
                                        <div class="PC_orderListText">
                                            <p>{{ items.orderDate }}</p>
                                            <p>{{ items.orderNum }}</p>
                                            <p>${{ items.orderTotal }}</p>
                                            <p>{{ items.orderState }}</p>
                                        </div>
                                        <button class="btn_sm_1" @click="mobileOpenList(index)">訂單明細</button>
                                    </div>
                                    <div class="PC_OrderDataDetail" v-show="items.isOpen">
                                        <div v-for="(name, nameIndex) in items.orderItems" class="PC_NameTotal">
                                            <img :src="getImageUrl(`member/memberOrderProducts_${nameIndex + 1}.svg`)" alt="商品">
                                            <div class="PC_orderPriceNumTotal">
                                                <p>{{ name }}</p>
                                                <p>${{ items.orderItemsPrice[nameIndex] }}</p>
                                                <p>{{ items.orderItemsNum[nameIndex] }}</p>
                                                <p>${{ items.orderItemsTotal[nameIndex] }}</p>
                                            </div>
                                        </div>
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
                            <div class="memberBooklog" v-for="date in bookDate">
                                <div class="dateAndCancel">
                                    <p>{{ date }}</p>
                                    <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(date) }"
                                        @click="cancelReservation(date)">取消預約</button>
                                </div>
                                <div class="selectedTime">
                                    <button class="chooseTime" v-for="(choose, index) in selectedTime.timePeriod" :key="index">
                                        <p>{{ choose }}</p>
                                        <p>{{ selectedTime.hours[index] }}</p>
                                    </button>
                                    <div class="numPeople">
                                        <p>人數：{{ numPeople[0] }}</p>
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
            <div class="mobileMember " v-for="items in memID">
                <img src="../assets/images/member/member_photo.svg">
                {{ items }}
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
                    <h3 class="pc-h4" >會員資料修改</h3>
                </div>
                <form action="" class="content">
                    <label for="memName">姓名</label>
                    <input type="text" value="小J" id="memName" name="mem_name">
                    <label for="memNickname">暱稱</label>
                    <input type="text" placeholder="請輸入暱稱" id="memNickname" name="mem_nickname"  value="啊人家家就笨壓">
                    <label for="memEmail">電子信箱</label>
                        <input type="email" value="griddy@griddy.com" id="memEmail" name="mem_email" readonly class="email">
                    <label for="memTel">連絡電話</label>
                    <input type="tel" placeholder="請輸入連絡電話" id="memTel" name="mem_tel" >
                    <div class="inputGender">
                        <span>性別</span>
                        <div class="genderRadio">
                            <input type="radio" id="femaleMb" name="mem_gender" value="0">
                            <label for="femaleMb">女性</label>
                            <input type="radio" id="maleMb" name="mem_gender" value="1">
                            <label for="maleMb">男性</label>
                            <input type="radio" id="theyMb" name="mem_gender" value="2">
                            <label for="theyMb">其他</label>
                        </div>
                    </div>
                    <label for="memBirth">生日</label>
                        <input type="date" placeholder="YYYY/MM/DD" id="memBirth" name="mem_birth" >
                    <label for="memAddr">收件地址</label>
                        <input type="text" placeholder="請輸入收件地址" id="memAddr" name="mem_addr">
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
                    <!-- 手機板沒有標題 -->
                    <!-- <div class="ContentTitle" >
                        <p v-for="title in orderTitle">{{ title }}</p>
                        <button class="btn_sm_1">訂單明細</button>
                    </div> -->
                    <div class="orderMain">
                        <div class="OrderDataList" v-for="(items, index) in orderList" :key="index">
                            <div class="orderSimple">
                                <div class="orderListText">
                                    <p>{{ items.orderDate }}</p>
                                    <p>{{ items.orderNum }}</p>
                                    <p>${{ items.orderTotal }}</p>
                                    <p>{{ items.orderState }}</p>
                                </div>
                                <button class="btn_sm_1" @click="mobileOpenList(index)">訂單明細</button>
                            </div>
                            <div class="OrderDataDetail" v-show="items.isOpen">
                                <div v-for="(name, nameIndex) in items.orderItems" class="NameTotal">
                                    <img :src="getImageUrl(`member/memberOrderProducts_${nameIndex + 1}.svg`)" alt="商品">
                                    <div class="orderItem">
                                        <div class="orderName">{{ name }}</div>
                                        <div class="orderPriceNumTotal">
                                            <p>${{ items.orderItemsPrice[nameIndex] }}</p>
                                            <p>{{ items.orderItemsNum[nameIndex] }}</p>
                                            <p>${{ items.orderItemsTotal[nameIndex] }}</p>
                                        </div>
                                    </div>
                                </div>
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
                <div class="bookDataContent" v-for="date in bookDate">
                    <div class="mobileBookDateCancel">
                        <p>{{ date }}</p>
                        <button :class="{ 'btn_sm_1': true, 'disabled': isPastDate(date) }"
                            @click="cancelReservation(date)">取消預約</button>
                    </div>
                    <p>時段：</p>
                    <div class="mobileBookTime">
                        <button class="chooseTime" v-for="(choose, index) in selectedTime.timePeriod" :key="index">
                            <p>{{ choose }}</p>
                            <p>{{ selectedTime.hours[index] }}</p>
                        </button>
                    </div>
                    <p>人數：{{ numPeople[0] }}</p>
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

            memberData: [],
            userdata: {},
            
            bookInfo:[],

            bookDate: ['2024/02/02', '2023/12/24'], //預約資訊-日期
            selectedTime: {
                timePeriod: ['上午', '下午', '下午', '晚上'],
                hours: ['09:00~12:00', '12:00~15:00', '15:00~18:00', '18:00~21:00']
            },
            numPeople: ['4人', '6人'],//預約資訊-人數
            mobileIcon: ['Griddy造型屋', '會員資料修改', '訂單資訊', '預約紀錄', '報隊管理', '會員登出'],//手機板ICON名字

            //訂單資訊
            orderTitle: ['訂單日期', '訂單編號', '總計', '訂單狀況'],
            orderList: [
                {
                    orderDate: '2023/12/21',
                    orderNum: 1,
                    orderTotal: 9000,
                    orderState: '未完成',
                    orderItems: ['阿瓦蟲', '貓與城之內豪華精裝版'],
                    orderItemsPrice: [500, 8000],
                    orderItemsNum: [2, 1],
                    orderItemsTotal: [1000, 8000],
                    isOpen: false,
                },
                {
                    orderDate: '2023/12/11',
                    orderNum: 2,
                    orderTotal: 500,
                    orderState: '已完成',
                    orderItems: ['阿瓦蟲'],
                    orderItemsPrice: [500],
                    orderItemsNum: [1],
                    orderItemsTotal: [500],
                    isOpen: false,
                },

            ],

            isChoosedEditData: false,//會員資料修改被選擇
            isChoosedOrderData: false,//訂單紀錄被選擇
            isChoosedBookData: false,//預約紀錄被選擇
            openOrderList: false,

            isChoosedEditData_PC: false,//會員資料修改被選擇
            isChoosedOrderData_PC: false,//訂單紀錄被選擇
            isChoosedBookData_PC: false,//預約紀錄被選擇
            isChoosedIndex_PC: true,
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
                mem_id:memid
            })
            .then(res => {
            // 成功接收後端返回的資料
            // console.log(res.data);
                this.memberData = res.data;
            })
            .catch(error => console.error('發生錯誤:',error));


        // this.fetchMem()
        this.isLogin()
    },
    mounted(){
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
        mobileOpenList(index) { //訂單打開明細
            this.orderList[index].isOpen = !this.orderList[index].isOpen
            console.log(index)

        },
        handleButtonClick(index) { //手機板選單
            this.isChoosedEditData = false
            this.isChoosedOrderData = false
            this.isChoosedBookData = false
            this.mobileListIsChoosed=false
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
        changeMember(){
            this.isChoosedEditData_PC = true;
            this.isChoosedOrderData_PC= false;
            this.isChoosedBookData_PC= false;
            this.isChoosedIndex_PC=false;
        },
        order(){
            this.isChoosedEditData_PC = false;
            this.isChoosedOrderData_PC= true;
            this.isChoosedBookData_PC= false;
            this.isChoosedIndex_PC=false;
        },
        book(){
            this.isChoosedEditData_PC = false;
            this.isChoosedOrderData_PC= false;
            this.isChoosedBookData_PC= true;
            this.isChoosedIndex_PC=false;
        },
        backToMemIndex(){
            this.isChoosedEditData_PC = false;
            this.isChoosedOrderData_PC= false;
            this.isChoosedBookData_PC= false;
            this.isChoosedIndex_PC=true;
        },
        isLogin(){
            const userToken = localStorage.getItem("userToken")
            // return userToken? true: false
            if(userToken){
                console.log("已經登入")
            }else{
                console.log("你沒登入欸")
            }
        },
        fetchMem(){
        },

    },

};
</script>