<template>
    <div class="book">
        <div class="book_notice">
            <p>請依序選擇日期、桌型、時段及人次。</p>
            <p>若日期、桌型或時段無法選擇，代表當日、該桌型、或該時段預約已額滿。</p>
        </div>
        <form action="">
        <h2>請選擇日期</h2>
        <input type="date" v-model="dateChosen" @input="tableAble" required="required">
        <h2>請選擇桌型</h2>
        <div class="book_table_option">
            <div class="book_options" v-for="table in tableType">
                <input type="radio" name="table" :value="table.value" :id="table.typeId" :disabled="tableTypeStatus" v-model="tableChosen" @input="timeAble" required>
                <label :for="table.typeId">{{ table.label }}</label>
            </div>
        </div>
        <h2>請選擇時段</h2>
        <div class="book_time_option">
            <div class="book_options" v-for="time in timePeriod"  >
                <input type="radio" name="time" :value="time.value" :id="time.timeId" :disabled="timeStatus" v-model="timeChosen" required>
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
    export default{
        data() {
            return {
                tableTypeStatus: true,
                timeStatus: true,
                // v-model綁定
                dateChosen: '',
                tableChosen:'',
                timeChosen: '',
                count: 1,
                tableType: [{
                        value: '四人桌',
                        label: '4人桌',
                        typeId: 'type_four'
                    },{
                        value: '八人桌',
                        label: '8人桌',
                        typeId: 'type_eight'
                    },{
                        value: '十二人桌',
                        label: '12人桌',
                        typeId: 'type_twelve'
                    }],
                timePeriod: [{
                        value: '上午時段',
                        period: '上午',
                        time: '09:00-12:00',
                        timeId: 'book_morning',
                    },{
                        value: '下午時段',
                        period: '下午',
                        time: '12:00-15:00',
                        timeId: 'book_afternoon',
                    },{
                        value: '傍晚時段',
                        period: '傍晚',
                        time: '15:00-18:00',
                        timeId: 'book_dusk',
                    },{
                        value: '晚上時段',
                        period: '晚上',
                        time: '18:00-21:00',
                        timeId: 'book_evening',
                    }]

            }
        },
        computed:{

        },
        methods:{
            minusPer(){
                if(this.count>1){
                    this.count --
                }else{
                    this.count = 1
                }
                console.log(this.count)
            },
            plusPer(){
                if(this.count<12){
                    this.count ++
                }else{
                    this.count = 12
                }
                console.log(this.count)
            },
            tableAble(){
                this.tableTypeStatus = false
            },
            timeAble(){
                this.timeStatus = false
            },
            handleInput(){
                if(this.dateChosen == '' || this.tableChosen == '' || this.timeChosen == ''){
                    alert('請填寫完整預定資訊')
                }else{
                    alert(
                        `選擇日期：${this.dateChosen}\n選擇桌型：${this.tableChosen}\n選擇時段：${this.timeChosen}\n預定人數：${this.count}人`
                    )
                }
            }
        }
    }
</script>