<template>
    <div class="preWrapper">
        <PageTitle :pageTitle="'預約須知'" />
        <div class="breadcrumb">
            <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
            <BreadcrumbItem to="/">首頁</BreadcrumbItem>
            <BreadcrumbItem>預約須知</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="preBook">
            <h3 class="preTitle">預約前請詳閱以下事項</h3>
            <h3>{{ bookFee.title }}</h3>
            <p v-for="paragraph in bookFee.content">{{ paragraph }}</p>
            <div class="fee_detail">
                <div class="fee_detail_grid" v-for="item in feeDetails">
                    <!-- 平日、假日 -->
                    <div class="fee_detail_weekday" ><p>{{ item.day }}</p></div>
                    <div class="fee_content" v-for="item in item.times">
                        <!-- 上、中、晚 -->
                        <div class="fee_detail_time" >
                            <p>{{ item.period }}</p>
                        </div>
                        <!-- 價格 -->
                        <div class="fee_detail_price" >
                            <p>{{ item.fee }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3>{{ bookDirection.title }}</h3>
            <p v-for="paragraph in bookDirection.content">{{ paragraph }}</p>
            <h3>{{ bookNotice.title }}</h3>
            <p v-for="paragraph in bookNotice.content">{{ paragraph }}</p>
        </div>
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
                bookFee: {
                    title: '收費方式',
                    content: ['預約時段分為上午、下午及晚上，以人數計費，費用有平假日之分，請參下表。', '時段說明：上午(09:00-12:00)、下午(12:00-15:00及15:00-18:00)、晚上(18:00-21:00)。', '本店提供餐點及飲料，全面禁止攜帶外食。', '3歲以下不另行收費，請勿使用桌遊；12歲以下，須由大人陪同入場。', '提供包場服務，請直接洽詢客服人員。', '若需取消預約，請於預約開始12小時前取消，預約兩次未到將停權六個月。']
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
