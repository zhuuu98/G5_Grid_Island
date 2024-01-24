<template>
    <div class="chatbot">
        <div class="openChat">
            <button class="openChatBtn" @click="openChat" >
                <img src="../assets/images/chatbot/chatbot_btn.svg" alt="線上客服">
            </button>
        </div>

        <div class="chatContent" v-if="openChatContent">
            <!-- 寫一個空陣列來存放聊天的訊息，並且要用overflow:scroll -->
            <div class="contentTop">
                <img src="../assets/images/chatbot/chatboxIcon.svg" alt="線上客服">
            </div>
            <div class="contentBody">
                <div v-for="item in chatList" class="chatList">
                    <div v-if="item.isFromMe" class="chatLeft">{{ item.span }}</div>
                    <div v-else class="chatRight">{{ item.span }}</div>
                </div>
                <!-- <div v-for="item in chatList" class="chatList">
                    <div v-if="item.isFromMe" class="is-right">{{ item.span }}</div>
                    <div v-else class="is-left">{{ item.span }}</div>
                </div> -->
                <!-- <div class="chatApply">
                    <span>您好，有甚麼需要Griddy幫忙的嗎？</span>
                </div> -->
                <!-- <div class="chatApply" v-if="showChatApply">
                    <span>好的，請問您是想問以下的哪個問題呢？</span>
                </div> -->
            </div>
            <div class="contentChoose" v-if="disappearFirst">
                <div class="FirstChoose" >
                    <button v-for="(item, index) in SelectType" :key="index" @click="SelectTypeClick(index)">
                        {{item.label}}
                    </button>
                </div>
                <div class="SecondChoose" v-if="SelectType[selectedTypeIndex]">
                    <button v-for="(item,index) in SelectType[selectedTypeIndex].typeQuestion" :key="index">
                        {{ item }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openChatContent:false,
            showAns:false,
            showChatApply: false,
            disappearFirst:true,
            chatList: [
                {
                    span:'您好，有甚麼需要Griddy幫忙的嗎？'
                },
                {
                    //左邊訊息
                    text: 'hi',
                    isFromMe: true,
                },
                {
                    //右邊訊息
                    text: 'hi',
                    isFromMe: false,
                },
            ],
            SelectType: [
                {   label: '訂位相關', 
                    action: 'aboutBook' ,
                    typeQuestion:['請問如何預約遊玩？','有提供生日派對或特殊活動包場服務嗎？','預約現場需要訂金嗎？店內有消費限制嗎？','一次可以預訂幾個時段？','我已經預約現場座位，臨時有事無法到，或人數有更動怎麼辦？'],
                    typeAns:['請到預約頁面進行訂位唷！','有的，請再提前聯絡店員需要包場服務。','預約並不需要訂金，我們有最低消費一小時的金額限制唷！','一次只能預約一個時段唷！若需訂位多時段請分兩筆以上訂位。','請先電話通知我們，我們會為您處理。'],
                },
                {   label: '會員相關', 
                    action: 'aboutMem' ,
                    typeQuestion:['如何註冊成為會員？','如何更新我的會員資料？','如何更新我的Griddy頭像？'],
                    typeAns:['<a href="#">請按此進行註冊</a>','請至會員中心進行更改','請至會員中心，選擇Griddy造型屋進行更改'],
                },
                {   label: '購物相關', 
                    action: 'aboutShop' ,
                    typeQuestion:['有哪些支付方式可供選擇？','是否提供禮品包裝服務？','如何追蹤我的訂單？'],
                    typeAns:['目前提供信用卡支付以及轉帳支付唷！','當然，我們會幫您包裝的漂漂亮亮，讓您送人自用沒煩惱！','請到會員中心查看您的訂單明細'],
                },
                {   label: '其他問題', 
                    action: 'Others' ,
                    typeQuestion:['我可以在網站上提供遊戲評論嗎？','是否有定期舉辦桌遊活動或比賽？','如何成為桌遊店的合作夥伴？'],
                    typeAns:['當然可以，請到社群中心裡的留言板提供您的想法','是的，我們會不定期舉辦各種桌遊活動和比賽。歡迎到我們的最新消息頁面來看看。','如果您有合作意向，請通過我們的聯繫方式與我們取得聯繫，我們的合作團隊將與您進行進一步的討論。'],

                },
            ],
            selectedQuestion:'',
            selectedTypeLabel: '',
            selectedTypeIndex: null,
            chatApplies: [],
        }
    },
    methods: {
        openChat() {
            this.openChatContent=!this.openChatContent
        },
        SelectTypeClick(index){
            this.chatList.push({
                text: 'hi' + Date.now(),
                isFromMe: true,
            })
            this.chatList.push({
                text: 'aaa' + Date.now(),
                isFromMe: false,
            })
            this.selectedTypeIndex = index;
            this.showAns=true
            setTimeout(() => {
                this.showChatApply = true;
            }, 1500);
            switch (index) {
                case 0:
                    this.selectedTypeLabel =''
                    this.selectedTypeLabel = this.SelectType[index].label;
                    break;
                case 1:
                    this.selectedTypeLabel =''
                    this.selectedTypeLabel = this.SelectType[index].label;

                    break;
                case 2:
                    this.selectedTypeLabel =''
                    this.selectedTypeLabel = this.SelectType[index].label;

                    break;
                case 3:
                    this.selectedTypeLabel =''
                    this.selectedTypeLabel = this.SelectType[index].label;
                    break;
            }
            
        },
        
    },

};
</script>
<style lang="scss" scoped>
//
</style>