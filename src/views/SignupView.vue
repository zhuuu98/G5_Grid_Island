<template>
    <div class="signup">
        <div class="signup_main">
            <div class="signup_title">
                <div class="signup_main_griddy"></div>
                <h2>註冊會員</h2>
            </div>
            <form action="" class="signup_form">
                <input type="text" v-model="memName" placeholder="姓名">
                <input type="email" v-model="memEmail" placeholder="電子信箱（作為帳號使用）">
                <input type="password" v-model="a83au4" placeholder="密碼" minlength="8" maxlength="20">
                <input type="password" v-model="a83au5" placeholder="再次輸入密碼" minlength="8" maxlength="20">
                <input type="submit" value="註冊" class="signBtn" @click.prevent="handleSignUp">
            </form>
        </div>

        <!-- 燈箱 -->
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
export default {
    data() {
        return {
            memName: '',
            memEmail: '',
            a83au4: '',
            a83au5: '',
            showAlert: false,
            alertContent: '',
        };
    },
    created() {
    },
    methods: {
        handleSignUp(){
            //電子信箱驗證
            if(this.memEmail == "") {
                document.body.classList.add('body-overflow-hidden');
                this.alertContent = '請填寫正確的電子信箱'
                this.showAlert = true;
                return; 
            };
            
            // 姓名是否為空
            let hasnum;
            for(let i=0; i<this.memName.length; i++){
                let char = this.memName.charAt(i);
                if (char>='0' && char<='9'){
                    hasnum = true;
                }
            }
            if(this.memName == "" || hasnum == true) {
                document.body.classList.add('body-overflow-hidden');
                this.alertContent = '請輸入正確姓名'
                this.showAlert = true;
                return;
            }

            // 比對密碼
            if(this.a83au4.length < 6 || this.a83au5.length < 6){
                document.body.classList.add('body-overflow-hidden');
                this.alertContent = '密碼長度至少六碼'
                this.showAlert = true;
                return;
            }
            else if(this.a83au4 != this.a83au5){
                document.body.classList.add('body-overflow-hidden');
                this.alertContent = '密碼不一致，請重新輸入'
                this.showAlert = true;
                return;
            }
            document.body.classList.add('body-overflow-hidden');
            this.alertContent = '註冊成功，即將前往會員中心'
            this.showAlert = true;
            //跳轉回會員中心
            setTimeout(()=>{
                this.$router.replace('/member')
            }, 2000)
        },
        closeAlert(){
            this.showAlert = false;
            this.alertContent = '';
            document.body.classList.remove('body-overflow-hidden');
        },
        // addMemToDb(){

        // }
    },
};
</script>

<style lang="scss">
//
</style>
