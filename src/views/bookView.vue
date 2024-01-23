<template>
    <div class="book">
        <div class="book_notice">
            <p>可預訂日期為不含預訂當日之十五日內。</p>
            <p>請依序選擇日期、桌型、時段及人次。</p>
            <p>若日期、桌型或時段無法選擇，代表當日、該桌型、或該時段預約已額滿。</p>
        </div>
        <form action="">
            <h2>請選擇日期</h2>
            <input type="date"  v-model="dateChosen" @input="tableAble" required="required">

            <!--以下是月曆-->
            <div class="book_cal">
            <div class="book_cal_nav">
                <button data-direction="prev" @click.prevent="prevMonth" :disabled="isCurrentMonth">
                    &larr;
                </button>
                <div class="book_cal_nav_title">
                    <div>{{ selectedYear }} 年</div>
                    <div>{{ selectedMonth + 1 }} 月</div>
                </div>
                <button data-direction="next" @click.prevent="nextMonth" :disabled="isMaxMonth">
                    &rarr;
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
                    <button v-if="num" :disabled="isCurrentMonth && num <= today.getDate() || num > today.getDate() + 5" :current="selectedDate &&
                            selectedDate.toLocaleDateString() ==
                            new Date(selectedYear, selectedMonth, num).toLocaleDateString()
                            ? 'date'
                            : false
                        " @click.prevent="selectDay(num), tableAble()">
                        {{ num }}
                    </button>
                </div>
            </div>
        </div>
            <!--以上是月曆-->

            <h2>請選擇桌型</h2>
            <div class="book_table_option">
                <div class="book_options" v-for="table in tableType">
                    <input type="radio" name="table" :value="table.value" :id="table.typeId" :disabled="tableTypeStatus"
                        v-model="tableChosen" @input="timeAble" required>
                    <label :for="table.typeId">{{ table.label }}</label>
                </div>
            </div>
            <h2>請選擇時段</h2>
            <div class="book_time_option">
                <div class="book_options" v-for="time in timePeriod">
                    <input type="radio" name="time" :value="time.value" :id="time.timeId" :disabled="timeStatus"
                        v-model="timeChosen" required>
                    <label :for="time.timeId">{{ time.period }}<br>{{ time.time }}</label>
                </div>
            </div>
            <h2>預定人數</h2>
            <div>
                人數<button @click.prevent="minusPer">-</button>
                <input type="number" v-model="count" disabled>
                <button @click.prevent="plusPer">+</button>
            </div>
            <div class="book_submit">
                <input type="submit" name="" id="" value="確認預約" @click.prevent="handleInput">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableTypeStatus: true,
            timeStatus: true,
            // v-model綁定
            dateChosen: '',
            tableChosen: '',
            timeChosen: '',
            count: 1,
            tableType: [{
                value: '四人桌',
                label: '4人桌',
                typeId: 'type_four'
            }, {
                value: '八人桌',
                label: '8人桌',
                typeId: 'type_eight'
            }, {
                value: '十二人桌',
                label: '12人桌',
                typeId: 'type_twelve'
            }],
            timePeriod: [{
                value: '上午時段',
                period: '上午',
                time: '09:00-12:00',
                timeId: 'book_morning',
            }, {
                value: '下午時段',
                period: '下午',
                time: '12:00-15:00',
                timeId: 'book_afternoon',
            }, {
                value: '傍晚時段',
                period: '傍晚',
                time: '15:00-18:00',
                timeId: 'book_dusk',
            }, {
                value: '晚上時段',
                period: '晚上',
                time: '18:00-21:00',
                timeId: 'book_evening',
            }],
            //以下是日曆用
            dayNames: ["日", "一", "二", "三", "四", "五", "六"],
            selectedMonth: new Date().getMonth(),
            selectedYear: new Date().getFullYear(),
            selectedDate: null,
            // 以上是日曆用
        }
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
        isMaxMonth(){
            return this.selectedMonth == new Date().getMonth() + 1 && this.isCurrentYear;
        },
        daysInMonth() {
            return new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
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
                this.count --
            } else {
                this.count = 1
            }
            console.log(this.count)
        },
        plusPer() {
            if (this.count < 12) {
                this.count ++
            } else {
                this.count = 12
            }
            console.log(this.count)
        },
        tableAble() {
            this.tableTypeStatus = false;
        },
        timeAble() {
            this.timeStatus = false
        },
        handleInput() {
            if (this.dateChosen == '' || this.tableChosen == '' || this.timeChosen == '') {
                alert('請填寫完整預訂資訊')
            } else {
                alert(
                    `選擇日期：${this.dateChosen}\n選擇桌型：${this.tableChosen}\n選擇時段：${this.timeChosen}\n預定人數：${this.count}人`
                )
            }
        },
        // 以下是日曆用
        prevMonth() {
            if (this.selectedMonth == 0) {
                this.selectedMonth = 11;
                this.selectedYear --;
            } else {
                this.selectedMonth --;
            }
        },
        nextMonth() {
            if (this.selectedMonth == 11) {
                this.selectedMonth = 0;
                this.selectedYear ++;
            } else {
                this.selectedMonth ++;
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
        // isDisable(num){
        //     if(daysInMonth)
        // }
        // 以上是日曆用
    }
}
</script>
<style lang="scss">

</style>