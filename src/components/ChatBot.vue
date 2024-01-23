<template>
    <div class="chatbot">
        <div class="chatContent" v-if="openChatContent">
            <div class="contentTop">
                <img src="../assets/images/chatbot/chatboxIcon.svg" alt="線上客服">
            </div>
            <div class="contentBody">
                <div class="chatApply">
                    <span>您好，有甚麼需要Griddy幫忙的嗎？</span>
                </div>
                <div class="chatQuestion">
                    <span>
                        {{ selectedTypeLabel }}
                    </span>
                </div>
            </div>
            <div class="contentChoose">
                <div class="FirstChoose" >
                    <button v-for="(item, index) in SelectType" :key="index" @click="SelectTypeClick(index)">
                        {{item.label}}
                    </button>
                </div>
                <div class="SecondChoose">
                    
                </div>
            </div>
        </div>
        <div class="openChat">
            <button class="openChatBtn" @click="openChat" >
                <img src="../assets/images/chatbot/chatbot_btn.svg" alt="線上客服">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openChatContent:false,
            SelectType: [
                {   label: '訂位相關', 
                    action: 'aboutBook' ,
                    typeQuestion:['請問如何預約遊玩？','有提供生日派對或特殊活動包場服務嗎？','預約現場需要訂金嗎？店內有消費限制嗎？','一次可以預訂幾個時段？','我已經預約現場座位，臨時有事無法到，或人數有更動怎麼辦？'],
                    typeAns:['請到預約頁面訂位','有的，請再提前聯絡店員需要包場服務。','預約並不需要訂金，我們有最低消費一小時的金額限制唷！','一次只能預約一個時段唷！若需訂位多時段請分兩筆以上訂位。','請先電話通知我們，我們會為您處理。'],
                },
                {   label: '會員相關', 
                    action: 'aboutMem' ,
                    typeQuestion:[],
                    typeAns:[],
                },
                {   label: '購物相關', 
                    action: 'aboutShop' ,
                    typeQuestion:[],
                    typeAns:[],
                },
                {   label: '其他問題', 
                    action: 'Others' ,
                    typeQuestion:[],
                    typeAns:[],

                },
            ],
            selectedQuestion:'',
            selectedTypeLabel: '',
            selectedTypeIndex: null,
        }
    },
    methods: {
        openChat() {
            this.openChatContent=!this.openChatContent
        },
        SelectTypeClick(index){
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
        }
    },

};
</script>
<style lang="scss" scoped>
//
</style>