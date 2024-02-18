<template>
    <div class="book">
        <PageTitle :pageTitle="'現場預約'" />
        <div class="breadcrumb">
            <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
                <BreadcrumbItem to="/">首頁</BreadcrumbItem>
                <BreadcrumbItem to="/prebook">預約須知</BreadcrumbItem>
                <BreadcrumbItem>現場預約</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="book_notice">
            <h4>請依序選擇日期、桌型、時段及人次。</h4>
            <h4>若日期、桌型或時段無法選擇，代表當日、該桌型、或該時段預約已額滿。</h4>
        </div>
        <button @click="isDateFull()">click</button>
        <form action="" class="bookTableForm">
            <div class="book_date_select">
                <h2>請選擇日期</h2>
                <input type="date" v-model="dateChosen" @input="tableAble" required="required">
            </div>

            <!--以下是月曆-->
            <div class="book_cal">
                <div class="book_cal_nav">
                    <button data-direction="prev" @click.prevent="prevMonth" :disabled="isCurrentMonth">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <div class="book_cal_nav_title">
                        <div>{{ selectedYear }} 年</div>
                        <div>{{ selectedMonth + 1 }} 月</div>
                    </div>
                    <button data-direction="next" @click.prevent="nextMonth" :disabled="isMaxMonth">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div class="book_cal_weekdays">
                    <div v-for="name in dayNames">{{ name }}</div>
                </div>
                <div class="book_cal_grid">
                    <div v-for="num in days" class="book_cal_day" :class="{
                        blank: !num,
                        today: isCurrentMonth && num && num == today.getDate()
                    }">
                        <button v-if="num" :disabled="isDisabled(num)" :current="selectedDate && selectedDate.toLocaleDateString() ==
                            new Date(selectedYear, selectedMonth, num).toLocaleDateString()
                            ? 'date' : false" @click.prevent="selectDay(num), tableAble()">
                            {{ num }}
                        </button>
                    </div>
                </div>
            </div>
            <!--以上是月曆-->

            <div class="book_table_select">
                <h2>請選擇桌型</h2>
                <div class="book_table_option">
                    <div class="book_options" v-for="table in tableType">
                        <input type="radio" name="table" :value="table.value" :id="table.typeId" :disabled="table.disabled"
                            v-model="tableChosen" @input="timeAble" required>
                        <label :for="table.typeId" class="disable_choose" :disabled="table.disabled">{{ table.label
                        }}</label>
                    </div>
                </div>
            </div>
            <div class="book_time_select">
                <h2>請選擇時段</h2>
                <div class="book_time_option">
                    <div class="book_options" v-for="(time,index) in timePeriod">
                        <input type="radio" name="time" :value="time.period" :id="time.timeId" :disabled="timeStatus"
                            v-model="timeChosen" @input="timeSet(index)" required>
                        <label :for="time.timeId" :disabled="timeStatus">{{ time.period }}<br>{{ time.timeFrom }}-{{ time.timeTo }}</label>
                    </div>
                </div>
            </div>
            <div class="book_select_NumOfPeo">
                <h2>預定人數</h2>
                <div class="bookPeople">
                    <p>人數</p>
                    <div class="minusPlus">
                        <button @click.prevent="minusPer" class="btnMinus">-</button>
                        <input type="number" v-model="count" disabled>
                        <button @click.prevent="plusPer" class="btnPlus">+</button>
                    </div>
                </div>
            </div>
            <!-- 預約按鈕 -->
            <div class="book_submit">
                <input type="submit" class="btn_sm_1" id="" value="確認預約" @click.prevent="handleInput">
            </div>
        </form>
        <!-- 燈箱 -->
        <div class="alert_bg" v-show="showAlert">
            <div class="alert_main">
                <button @click="closeAlert">
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </button>
                <div class="alert_main_content">
                    <p v-for="content in alertContent">{{ content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import PageTitle from "../components/PageTitle.vue";
export default {
    data() {
        return {
            showAlert: false,
            alertContent: [],
            tableTypeStatus: true,
            timeStatus: true,
            // v-model綁定
            dateChosen: '',
            tableChosen: '',
            tableName: '',
            timeChosen: '',
            chosentimeFrom: '',
            chosentimeTo: '',
            bookingData: [],
            disableDate: [],
            count: 1,
            tableType: [{
                value: 1,
                label: '4人桌',
                typeId: 'type_four',
                disabled: true
            }, {
                value: 2,
                label: '8人桌',
                typeId: 'type_eight',
                disabled: true
            }, {
                value: 3,
                label: '12人桌',
                typeId: 'type_twelve',
                disabled: true
            }],
            timePeriod: [{
                value: '上午時段',
                period: '上午',
                timeFrom: '09:00',
                timeTo: '12:00',
                timeId: 'bookAM'
            }, {
                value: '下午時段',
                period: '下午',
                timeFrom: '12:00',
                timeTo: '15:00',
                timeId: 'bookAF'
            }, {
                value: '傍晚時段',
                period: '傍晚',
                timeFrom: '15:00',
                timeTo: '18:00',
                timeId: 'bookEVE'
            }, {
                value: '晚上時段',
                period: '晚上',
                timeFrom: '18:00',
                timeTo: '21:00',
                timeId: 'bookPM'
            }],
            //以下是日曆用
            dayNames: ["日", "一", "二", "三", "四", "五", "六"],
            selectedMonth: new Date().getMonth(),
            selectedYear: new Date().getFullYear(),
            selectedDate: null,
            // 以上是日曆用
            userData: {},
        }
    },
    components: {
        PageTitle
    },
    created(){
        this.createTables()
    },
    mounted() {
        this.userData = JSON.parse(localStorage.getItem("userDataStr"))
    },
    beforeUpdate(){
        this.dateDisabled()
    },
    computed: {
        //以下是日曆用
        today() {
            return new Date();
        },
        isCurrentYear() {
            return this.selectedYear == new Date().getFullYear();
        },
        isCurrentMonth() {
            return this.selectedMonth == new Date().getMonth() && this.isCurrentYear;
        },
        isMaxMonth() {
            if (this.daysInMonth - this.today.getDate() > 15) {
                return this.selectedMonth == new Date().getMonth() && this.isCurrentYear;
            } else {
                return this.selectedMonth == new Date().getMonth() + 1 && this.isCurrentYear;
            }
        },
        daysInMonth() {
            return new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
        },
        daysInLastMonth() {
            return new Date(this.selectedYear, this.selectedMonth, 0).getDate();
        },
        firstDayOffset() {
            return new Date(this.selectedYear, this.selectedMonth, 1).getDay();
        },
        days() {
            return Array.from(
                Array(this.firstDayOffset + this.daysInMonth).keys()
            ).map((pos) => (pos >= this.firstDayOffset ? (pos - this.firstDayOffset) + 1 : 0));
        },
        years() {
            return Array.from({ length: 2 }, (value, index) => this.today.getFullYear() + index)
        }
        // 以上是日曆用
    },
    methods: {
        minusPer() {
            if (this.count > 1) {
                this.count--
            } else {
                this.count = 1
            }
        },
        plusPer() {
            if (this.count < 12) {
                this.count++
            } else {
                this.count = 12
            }
        },
        createTables(){
            axios({
                    method: 'post',
                    url: `${import.meta.env.VITE_API_URL}/buildTables.php`,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((res) =>{
                    this.bookingData = res.data.returnTables
                    // console.log(res.data.returnTables)
                    // console.log(this.bookingData)
                    // console.log(this.bookingData[0])
                    // console.log(this.bookingData[0].tables_type)
                })
                .catch((err) => {
                    console.log(err)}
                );
        },
        tableAble() {
            // console.log(typeof this.tableType[0].value)
            for(i=0; i<this.tableType.length; i++){
                this.tableType[i].disabled = true
            }
            let selectedDateTables = [];
            for(i=0; i<this.bookingData.length; i++){
                let tablesTotal = this.bookingData[i].tables_total
                let amBooked = this.bookingData[i].tables_am_booked
                let afBooked = this.bookingData[i].tables_af_booked
                let eveBooked = this.bookingData[i].tables_eve_booked
                let pmBooked = this.bookingData[i].tables_pm_booked
                if(this.bookingData[i].tables_date == this.dateChosen && 
                    (tablesTotal - amBooked > 0 ||
                    tablesTotal - afBooked > 0 ||
                    tablesTotal - eveBooked > 0 ||
                    tablesTotal - pmBooked > 0 )
                ){
                    selectedDateTables.push(this.bookingData[i].tables_type)
                    this.tableType[this.bookingData[i].tables_type -1].disabled = false
                }
            }
        },
        timeAble() {
            this.timeStatus = false
        },
        timeSet(index){
            this.chosentimeFrom = this.timePeriod[index].timeFrom
            this.chosentimeTo = this.timePeriod[index].timeTo
        },
        handleInput() {
            if (this.dateChosen == '' || this.tableChosen == '' || this.timeChosen == '') {
                this.alertContent.push('請填寫完整預訂資訊') 
                this.showAlert = true;
            } else {
                //向後端傳送資料
                axios({
                    method: 'post',
                    url: `${import.meta.env.VITE_API_URL}/writeBook.php`,
                    headers: { "Content-Type": "multipart/form-data" },
                    data: {
                        mem_id: this.userData.mem_id,
                        book_date: this.dateChosen,
                        book_time: this.timeChosen,
                        book_start_time: this.chosentimeFrom,
                        book_end_time: this.chosentimeTo,
                        book_people: this.count,
                        tables_type: this.tableChosen,
                    }
                })
                .then((res) =>{
                    let tableName = ''
                    switch (this.tableChosen){
                        case '1' : 
                            tableName = '四人桌';
                            break;
                        case '2' : 
                            tableName = '八人桌'
                            break;
                        case '3' : 
                            tableName = '十二人桌'
                    }
                    this.alertContent.push(`預約成功！以下是您的預約資訊`, `選擇日期：${this.dateChosen}`, `選擇桌型：${tableName}`, `選擇時段：${this.timeChosen}`, `預定人數：${this.count}人`)
                    this.showAlert = true;
                    this.dateChosen = '';
                    this.tableChosen = '';
                    this.timeChosen = '';
                    this.count = 1
                    })
                .catch((err) => {
                    console.log(err)}
                );
            }
        },
        closeAlert() {
            if (this.alertContent.length <= 1) {
                this.showAlert = false;
                this.alertContent = [];
                document.body.classList.remove('body-overflow-hidden');
            } else {
                this.$router.push('/member') //跳回會員中心
            }
        },
        // 以下是日曆用
        prevMonth() {
            if (this.selectedMonth == 0) {
                this.selectedMonth = 11;
                this.selectedYear--;
            } else {
                this.selectedMonth--;
            }
        },
        nextMonth() {
            if (this.selectedMonth == 11) {
                this.selectedMonth = 0;
                this.selectedYear++;
            } else {
                this.selectedMonth++;
            }
        },
        selectDay(day) {
            // set and emit selected date
            this.selectedDate = new Date(this.selectedYear, this.selectedMonth, day);
            this.$emit("dateSelected", this.selectedDate);
            this.dateChosen = this.selectedDate.toLocaleDateString("zh-Hans-CN", {
                year: "numeric",
                month: '2-digit',
                day: '2-digit'
            }).replaceAll('/', '-')
        },
        isDisabled(num) {
            let restDay = 15 - (this.daysInLastMonth - this.today.getDate())

            let month = new Date().getMonth()+1
            if(month<10){
                month = '0' + month
            }
            let date = `${new Date().getFullYear()}-${month}-${num}`
            if(this.bookingData.length > 0){
                let result;
                for(i=0; i<this.disableDate.length; i++){
                    if(this.disableDate == date){
                        result = true
                    }
                }
                return (
                    ((this.isCurrentMonth && num <= this.today.getDate()) 
                    || 
                    (this.isCurrentMonth && num > this.today.getDate() + 15)
                    || 
                    (!this.isCurrentMonth && num > restDay))
                    ||
                    result
                );
            }
        },
        dateDisabled(){
            for(i=0; i<this.bookingData.length; i=i+3){
                let tablesType = this.bookingData[i].tables_type
                let tablesTotal = this.bookingData[i].tables_total
                let amBooked = this.bookingData[i].tables_am_booked
                let afBooked = this.bookingData[i].tables_af_booked
                let eveBooked = this.bookingData[i].tables_eve_booked
                let pmBooked = this.bookingData[i].tables_pm_booked
                let hasFalse = true;
                for(let j=1; j<=3; j++){
                    if(tablesTotal - amBooked <= 0 && tablesTotal - afBooked <= 0 && tablesTotal - eveBooked <= 0 && tablesTotal - pmBooked <= 0){
                        hasFalse = false
                        break;
                    }
                }
                if(hasFalse == false && !this.disableDate.includes(this.bookingData[i].tables_date)){
                        this.disableDate.push(this.bookingData[i].tables_date)
                    }
            }
        },
        isDateFull(num){
            // if(bookingData)
            // this.bookingData
            // let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${num}`
            // let month = new Date().getMonth()+1
            // if(month<10){
            //     month = '0' + month
            // }
            // let date = `${new Date().getFullYear()}-${month}-17`
            
            // console.log(this.bookingData)
            // console.log(date)
            // console.log(this.bookingData[13].tables_date)
            // if(this.bookingData[0].tables_date == date){
            //     console.log(true)
            // }else{
            //     console.log(false)
            // }
            // for(i=0; i<this.bookingData.length; i++){
            //     let tablesTotal = this.bookingData[i].tables_total
            //     let amBooked = this.bookingData[i].tables_am_booked
            //     let afBooked = this.bookingData[i].tables_af_booked
            //     let eveBooked = this.bookingData[i].tables_eve_booked
            //     let pmBooked = this.bookingData[i].tables_pm_booked
            //     if(tablesTotal - amBooked == 0 && tablesTotal - afBooked == 0 && tablesTotal - eveBooked == 0 && tablesTotal - pmBooked == 0){
            //         if(!this.disableDate.includes(this.bookingData[i].tables_date)){
            //             this.disableDate.push(this.bookingData[i].tables_date)
            //         }
            //     }
            // }
            // if(this.bookingData[i].tables_date == ``)
            // console.log(this.disableDate)
        }
        // 以上是日曆用
}
}
</script>
<style lang="scss"></style>