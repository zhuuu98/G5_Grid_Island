<template>
    <div class="privacyPolicy">
        <PageTitle :pageTitle="'隱私權政策'" />
        <div class="breadcrumb">
            <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
            <BreadcrumbItem to="/">首頁</BreadcrumbItem>
            <BreadcrumbItem>隱私權政策</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <main class="policy">
            <h1 class="preTitle">
                <span>生效日期</span>
                <span>2023-01-31</span>
            </h1>
            <span class="detail" >
            玩家您好，歡迎使用我們的服務！我們尊重並保護您的隱私。為了提供更好的服務，我們可能需要收集一些關於您的信息。請閱讀以下隱私權政策，了解我們如何處理您的個人資訊。
            </span>
            <ul>
                <li v-for="(item, index) in sub" :key="subIndex">
                    <span class="pc-h5">
                        {{ item.title }}
                    </span>
                    <ul>
                        <li>
                            {{ item.content[0].subTitle }}
                            <ul v-for="(subItem, subIndex) in item.content" :key="subIndex" >
                                <li>
                                    {{ subItem.subContent }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </main>
    </div>
</template>
<script>
    import PageTitle from "../components/PageTitle.vue";
    export default {
        data() {
            return {
                ischecked: false,
                alertContent: '請同意預約須知',
                showAlert: false,
                sub:[
                    {
                    title:'資訊收集',
                    content:[
                        {subTitle:'當您使用我們的服務時，我們可能會收集以下類型的信息：',
                        subContent:'使用者提供的信息： 當您進行第三方登入（例如，使用 Google 帳戶、Line帳戶、Facebook帳戶），我們可能會收到您授權的相關信息，如您的姓名、電子郵件地址等。'},{
                        subTitle:'',
                        subContent:'自動收集的信息： 我們的服務可能會自動收集某些信息，包括但不限於 IP 地址、設備類型、瀏覽器類型、使用時間等。'},{  
                        }]
                    },{
                        title:'信息使用',
                        content:[
                            {subTitle:'我們可能使用收集的信息來：',
                            subContent:'提供、維護和改進我們的服務。'},{
                            subContent:'執行我們的合同與您，包括提供客戶支持和處理付款。'
                            },{
                            subContent:'向您發送相關通知，如服務公告、技術通知和行政消息。'},{
                            subContent:'遵從法律法規。'}]
                    },{
                        title:'信息分享',
                        content:[
                            {subTitle:'我們不會出售、出租或交換您的個人信息給第三方。我們僅在以下情況下分享您的信息：',
                            subContent:'經過您的明確同意。'},{
                            subContent:'為了履行合同或提供所要求的服務。'},{
                            subContent:'根據法律要求或法院命令。'}
                        ]
                    },{
                        title:'安全性',
                        content:[
                        {subTitle:'我們致力於保護您的信息安全。我們採取合理的技術和組織措施來保護您的個人信息免受未經授權的訪問、使用或泄漏。'}],
                    },{
                        title:'連結到第三方網站',
                        content:[
                            {subTitle:'我們的服務可能包含指向第三方網站的連結。我們對這些網站的隱私慣例不負責任。',}]
                    },{
                        title:'隱私權政策的變更',
                        content:[
                            {subTitle:'我們保留修改本隱私權政策的權利。任何修改都會在生效前通知您。'}],
                    },{
                        title:'聯絡我們',
                        content:[
                            {subTitle:'如果您對本隱私權政策有任何疑問或疑慮，請通過下方資訊與我們聯繫(請查看頁底聯絡資訊)。感謝您的信任。',}]
                    }

                ],
            }
        },
        components:{
            PageTitle
        },
        mounted() {
        },
        methods:{
            goReserve(){
                if (this.ischecked == true) {
                    this.$router.push('/book')
                }else{
                    this.showAlert = true;
                    document.body.classList.add('body-overflow-hidden');
                }
            },
            closeAlert(){
                this.showAlert = false;
                document.body.classList.remove('body-overflow-hidden');
            }
        }
    }
</script>
<style lang="scss">
//
</style>
