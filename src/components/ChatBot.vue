<template>
    <div class="chatbot" ref="closeBot">

        <div class="chatContent" v-if="openChatContent">
            <div class="contentTop">
                <div class="imagebox">
                    <img src="../assets/images/chatbot/chatbot_btn3.png" alt="線上客服">
                </div>
            </div>
            <div class="contentBody" ref="chatContent">
                <div v-for="chat in chatList" :class="chat.sendFrom">{{ chat.text }}</div>
            </div>

            <div class="contentChoose">
                <div class="FirstChoose">
                    <button v-for="(choice, index) in questionType" @click="SelectTypeClick(index)"
                        v-show="isFirstLabelShow">{{ choice }}</button>
                </div>
                <div class="SecondChoose" v-for="(item, index) in question">
                    <div class="SecondDiv" v-if="index == typeIndex ">
                        <button v-for="(detail, index) in item" @click="showAnswer(index)">{{ detail }}</button>
                    </div>
                </div>
                <button v-show="!isFirstLabelShow" @click="reChoose" class="reChoose">重新選擇問題類型</button>
            </div>
        </div>

        <div class="openChat" @click="openChat">
            <div class="imagebox">
                <img src="../assets/images/chatbot/chatbot_btn3.png" alt="線上客服" class="openChatBtn">
            </div>
            <span>線上客服</span>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                openChatContent: false,
                isFirstLabelShow: true,
                typeIndex: -1,
                chatList: [
                    {
                        text: '您好，有什麼需要Griddy幫忙的嗎？',
                        sendFrom: 'chatLeft'
                    },
                ],
                questionType: ['訂位相關', '會員相關', '購物相關', '其他問題'],
                question: [
                    ['請問如何預約遊玩？', '預約現場需要訂金嗎？', '一次可以預訂幾個時段？'],
                    ['如何註冊成為會員？', '如何更新我的會員資料？', '如何更新我的Griddy頭像？'],
                    ['有哪些支付方式可供選擇？', '是否提供禮品包裝服務？', '如何追蹤我的訂單？'],
                    ['我可以在網站上提供遊戲評論嗎？', '是否有定期舉辦桌遊活動或比賽？', '如何成為桌遊店的合作夥伴？']
                ],
                answer: [
                    ['請到預約頁面進行訂位唷！', '預約並不需要訂金唷！', '一次只能預約一個時段唷！若需訂位多時段請分兩筆以上訂位。'],
                    ['請至會員登入點擊連結進行註冊', '請至會員中心進行更改', '請至會員中心，選擇Griddy造型屋進行更改'],
                    ['目前提供信用卡支付以及轉帳支付唷！', '當然，我們會幫您包裝的漂漂亮亮，讓您送人自用沒煩惱！', '請到會員中心查看您的訂單明細'],
                    ['當然可以，請到社群中心裡的留言板提供您的想法', '是的，我們會不定期舉辦各種桌遊活動和比賽。歡迎到我們的最新消息頁面來看看。', '如果您有合作意向，請通過我們的聯繫方式與我們取得聯繫，我們的合作團隊將與您進行進一步的討論。']
                ]
            }
        },
        methods: {
            openChat() {
                this.openChatContent = !this.openChatContent
                this.scrollToBottom();
            },
            SelectTypeClick(index) {
                this.isFirstLabelShow = false;
                this.chatList.push({
                    text: `${this.questionType[index]}`,
                    sendFrom: 'chatRight'
                })
                setTimeout(() => {
                    this.chatList.push({
                        text: `好的，您想詢問什麼問題呢？`,
                        sendFrom: 'chatLeft'
                    })
                    this.scrollToBottom();
                }, 1000)

                this.typeIndex = index
                this.scrollToBottom();
            },
            showAnswer(index) {
                this.chatList.push({
                    text: `${this.question[this.typeIndex][index]}`,
                    sendFrom: 'chatRight'
                })
                this.scrollToBottom();
                setTimeout(() => {
                    this.chatList.push({
                        text: `${this.answer[this.typeIndex][index]}`,
                        sendFrom: 'chatLeft'
                    })
                    this.scrollToBottom();
                }, 1000)
            },
            reChoose() {
                this.typeIndex = -1
                this.isFirstLabelShow = true
            },
            scrollToBottom() { //讓訊息會一直在最下面
                // 使用 $nextTick 確保在 DOM 更新後執行
                this.$nextTick(() => {
                    // 取得對話框的 DOM 元素
                    const chatContent = this.$refs.chatContent;

                    // 捲動到最底部
                    chatContent.scrollTop = chatContent.scrollHeight;
                });
            },
            ClickChatBox(event) {
                // 檢查點擊事件是否發生在 chatbot 之外
                const chatbotElement = this.$refs.closeBot;
                if (chatbotElement && !chatbotElement.contains(event.target)) {
                    // 如果點擊事件不在 chatbot 元素內，則關閉 chatbot
                    this.closeChatbot();
                }
            },
            closeChatbot() {
                // 關閉 chatbot 的邏輯
                this.openChatContent = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.ClickChatBox);
        },
    }
</script>
<style lang="scss" scoped>
    //
</style>