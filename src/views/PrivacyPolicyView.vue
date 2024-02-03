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
                <li v-for="(item, index) in sub" :key="index">
                    <span class="pc-h5">
                        {{ item.title }}
                    </span>
                    <ul>
                        <li>
                            {{ item.content }}
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="fee_detail">
            </div>
            <h3>{{ bookDirection.title }}</h3>
            <p v-for="paragraph in bookDirection.content">{{ paragraph }}</p>
            <h3>{{ bookNotice.title }}</h3>
            <p v-for="paragraph in bookNotice.content">{{ paragraph }}</p>
        </main>
        <div class="preCheck">
            <input type="checkbox" id="agree" v-model="ischecked">
            <label for="agree">本人已詳閱並同意遵守以上事項
            </label>
        </div>
        <div class="preBtn">
            <button class="btn_sm_1" @click="goReserve()" >前往預約</button>
        </div>

        <div class="alert_bg" v-show="showAlert">
            <div class="alert_main">
                <button @click="closeAlert">
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </button>
                <p>{{ alertContent }}</p>
            </div>
        </div>
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
                        content:'當您使用我們的服務時，我們可能會收集以下類型的信息：',
                    },{
                        title:'信息使用',
                        content:'我們可能使用收集的信息來：',
                    },{
                        title:'信息分享',
                        content:'我們不會出售、出租或交換您的個人信息給第三方。我們僅在以下情況下分享您的信息：',
                    },{
                        title:'安全性',
                        content:'我們致力於保護您的信息安全。我們採取合理的技術和組織措施來保護您的個人信息免受未經授權的訪問、使用或泄漏。',
                    },{
                        title:'連結到第三方網站',
                        content:'我們的服務可能包含指向第三方網站的連結。我們對這些網站的隱私慣例不負責任。',
                    },{
                        title:'隱私權政策的變更',
                        content:'我們保留修改本隱私權政策的權利。任何修改都會在生效前通知您。',
                    },{
                        title:'聯絡我們',
                        content:'如果您對本隱私權政策有任何疑問或疑慮，請通過下方資訊與我們聯繫(請看頁底聯絡資訊)。感謝您的信任。',
                    }

                ],
                bookFee: {
                    title: '生效日期',
                    content: ['歡迎使用我們的服務！我們尊重並保護您的隱私。為了提供更好的服務，我們可能需要收集一些關於您的信息。請閱讀以下隱私權政策，了解我們如何處理您的個人資訊。',]
                },
                bookDirection: {
                    title: '預約方式',
                    content: ['進入本站預約頁面直接線上預約。依序選擇入場日期、時段、人數及桌型。可即時查詢並預訂。若桌型無法選擇，代表此種桌型已被預約完畢，請點選其他桌型或時間。', '預約相關問題請撥打客服專線，我們將盡快為您服務。']
                },
                bookNotice: {
                    title: '注意事項',
                    content: ['場域均為自助模式。若需要教學服務，請向客服人員或現場服務人員詢問。', '有額外需求，請詢問客服人員，可額外定制服務。', '禁止烹飪、點燃明火、吸菸、毒品、妨礙風化、攜帶寵物 (導盲犬不在此限)、危險物品，以及賭博等違反法令規定、公共秩序或善良風俗的行為。']
                },
                feeDetails:[
                    {
                        day: '平日',
                        times: [
                        { period: '上午', fee: '100 元 / 人' },
                        { period: '下午', fee: '120 元 / 人' },
                        { period: '晚上', fee: '130 元 / 人' }
                        ]
                    },
                    {
                        day: '假日',
                        times: [
                        { period: '上午', fee: '120 元 / 人' },
                        { period: '下午', fee: '150 元 / 人' },
                        { period: '晚上', fee: '160 元 / 人' }
                        ]
                    }
                ]
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
