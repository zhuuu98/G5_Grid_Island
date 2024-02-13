<template>
    <div class="signup">
        <div class="signup_main">
            <div class="signup_title">
                <div class="signup_main_griddy"></div>
                <h2>註冊會員</h2>
            </div>
            <form action="" class="signup_form">
                <input type="text" v-model="memName" placeholder="姓名">
                <input type="email" v-model="memEmail" placeholder="電子信箱（作為帳號使用）" autocomplete="username">
                <input type="password" v-model="au4a83" placeholder="密碼（請輸入至少8碼）" minlength="8" maxlength="20"
                    autocomplete="new-password">
                <input type="password" v-model="au4a83again" placeholder="再次輸入密碼" minlength="8" maxlength="20"
                    autocomplete="new-password">
                <input type="submit" value="註冊" class="signBtn" @click="register">
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
import apiInstance from '../plugins/auth'
export default {
    data() {
        return {
            memName: '',
            memEmail: '',
            au4a83: '',
            au4a83again: '',
            showAlert: false,
            alertContent: '',
        };
    },
    created() {
    },
    methods: {
        // handleSignUp() {
        //電子信箱驗證
        // if (this.memEmail == "") {
        //     document.body.classList.add('body-overflow-hidden');
        //     this.alertContent = '請填寫正確的電子信箱'
        //     this.showAlert = true;
        //     return;
        // };

        // 姓名是否為空
        // let hasnum;
        // for (let i = 0; i < this.memName.length; i++) {
        //     let char = this.memName.charAt(i);
        //     if (char >= '0' && char <= '9') {
        //         hasnum = true;
        //     }
        // }
        // if (this.memName == "" || hasnum == true) {
        //     // document.body.classList.add('body-overflow-hidden');
        //     // this.alertContent = '請輸入正確姓名'
        //     // this.showAlert = true;
        //     // return;
        //     alert('請輸入正確姓名');
        // }

        // 比對密碼
        // if (this.a83au4.length < 8 || this.a83au5.length < 8) {
        //     document.body.classList.add('body-overflow-hidden');
        //     this.alertContent = '密碼長度至少六碼'
        //     this.showAlert = true;
        //     return;
        // }
        // else if (this.a83au4 != this.a83au5) {
        //     document.body.classList.add('body-overflow-hidden');
        //     this.alertContent = '密碼不一致，請重新輸入'
        //     this.showAlert = true;
        //     return;
        // }
        //     document.body.classList.add('body-overflow-hidden');
        //     // this.alertContent = '註冊成功，登入前往會員中心'
        //     this.showAlert = true;
        //     //跳轉回會員中心
        //     setTimeout(() => {
        //         this.$router.replace('/login')
        //     }, 2000)
        // },
        // check_email(memEmail) {
        //     // 定義 email 格式的正規表達式
        //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     // 使用正規表達式測試 email
        //     return regex.test(memEmail);
        // },
        // 測試驗證函數
        // const memEmail = "example@example.com";
        // if (validateEmail(memEmail)) {
        // console.log("Email 格式正確");
        // } else {
        // console.log("請填寫正確的 Email 地址");
        // },
        closeAlert() {
            this.showAlert = false;
            this.alertContent = '';
            document.body.classList.remove('body-overflow-hidden');
        },
        // register() {
        //     //驗證姓名是否包含數字
        //     let hasnum;
        //     for (let i = 0; i < this.memName.length; i++) {
        //         let char = this.memName.charAt(i);
        //         if (char >= '0' && char <= '9') {
        //             hasnum = true;
        //             break;
        //         }
        //     }
        //     //驗證姓名是否包含數字或為空值
        //     if (this.memName == "" || hasnum == true) {
        //         alert('請輸入正確姓名');
        //         return;
        //     }
        //     //驗證密碼是否輸入一致
        //     if (this.au4a83 !== this.au4a83again) {
        //         alert('密碼不一致，請重新輸入')
        //         return;
        //     //驗證密碼是否大於八碼
        //     } else if (this.au4a83.length < 8 && this.au4a83.length < 8) {
        //         alert('密碼至少8個字')
        //         return;
        //     //驗證電子信箱是否為空值
        //     } else if (this.memEmail == "") {
        //         alert('請填寫電子信箱');
        //         return;
        //     }

        //     else {
        //         const bodyFormData = new FormData();
        //         bodyFormData.append('mem_name', this.memName);
        //         bodyFormData.append('mem_email', this.memEmail);
        //         bodyFormData.append('mem_psw', this.au4a83);


        //         apiInstance({
        //             method: 'post',
        //             url: `${import.meta.env.VITE_API_URL}/signup.php`,
        //             headers: { "Content-Type": "multipart/form-data" },
        //             data: bodyFormData
        //         }).then(res => {
        //             console.log(res);
        //             if (res && res.data && res.data.msg === 'success') {
        //                 alert("註冊成功，登入前往會員中心")
        //                 setTimeout(() => {
        //                 this.$router.replace('/login')
        //                 }, 1000)
        //             } else {
        //                 alert('註冊失敗');
        //             }
        //         }).catch(error => {
        //             console.log(error);
        //         })
        //     }
        // }
        register() {
            // 驗證姓名是否包含數字
            let hasNum = false;
            for (let i = 0; i < this.memName.length; i++) {
                let char = this.memName.charAt(i);
                if (char >= '0' && char <= '9') {
                    hasNum = true;
                    break; // 若發現數字，即可跳出迴圈
                }
            }

            // 驗證姓名是否包含數字或為空值
            if (this.memName === "" || hasNum) {
                alert('請輸入正確姓名');
                // console.log('請輸入正確姓名');
                return; // 不執行表單提交相關的程式碼，保持在原本的網頁上
            }

            // 驗證密碼是否輸入一致
            if (this.au4a83 !== this.au4a83again) {
                alert('密碼不一致，請重新輸入');
                // console.log('密碼不一致');
                return;
            }

            // 驗證密碼是否大於八碼
            if (this.au4a83.length < 8) {
                alert('密碼至少8個字');
                return;
            }

            // 驗證電子信箱是否為空值
            if (this.memEmail === "") {
                alert('請填寫電子信箱');
                return;
            }

            // 驗證電子信箱格式是否正確
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.memEmail)) {
                alert('請填寫正確格式的電子信箱');
                return;
            }

            // 若通過所有驗證，則執行表單提交相關的程式碼
            const bodyFormData = new FormData();
            bodyFormData.append('mem_name', this.memName);
            bodyFormData.append('mem_email', this.memEmail);
            bodyFormData.append('mem_psw', this.au4a83);
            
            apiInstance({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}/signup.php`,
                headers: { "Content-Type": "multipart/form-data" },
                data: bodyFormData,
            }).then(res => {
                // alert('aa');
                // console.log("註冊成功");
                // console.log(res);
                if (res && res.data && res.data.msg === 'success') {
                    alert("註冊成功，登入前往會員中心");
                    setTimeout(() => {
                        this.$router.replace('/login');
                    }, 1000);
                } else {
                    alert('註冊失敗');
                }
            }).catch(error => {
                console.log(error);
            });
        }

        // addMemToDb(){

        // }
    },

};
</script>

<style lang="scss">
//
</style>
