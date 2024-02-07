<template>
    <div class="login">
        <div class="login_main">
            <div class="login_main_griddy"></div>
            <h2>會員登入</h2>
            <form action="" class="login_form" methods="post">
                <input type="email" placeholder="請輸入帳號" v-model="accName">
                <input type="password" placeholder="請輸入密碼" v-model="au4a83">
                <RouterLink to="#" class="login_forget_password">忘記密碼？</RouterLink>

                <input type="submit" value="登入" class="signBtn" @click.prevent="login">
            </form>
            <p class="login_signUp_text">還不是會員嗎？<RouterLink to="./Signup">點我註冊</RouterLink>
            </p>
            <div class="login_icon">
                <i class="fa-brands fa-line fa-2xl"></i>
                <i class="fa-brands fa-google fa-2xl"></i>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'pinia';
import userStore from '@/stores/user'
import apiInstance from '@/plugins/auth'

export default {
    data() {
        return {
            accName: 'griddy@griddy.com',
            au4a83: 'griddy123'
            // accName: 'mor_2314',
            // au4a83: '83r5^_',
        }
    },
    created(){

    },
    methods: {
        // ...mapActions(userStore, ['updateToken']),
        // signin() {
        //     axios.post(`${import.meta.env.VITE_API_URL}/ssss.php`, {
        //     // axios.post('https://fakestoreapi.com/auth/login', {
        //         username: this.accName,
        //         password: this.au4a83
        //     })
        //     .then(response => {
        //         if (response.data && response.data.token) {
        //             this.updateToken(response.data.token)
        //             // console.log('login')
        //             // console.log(response.data.token);
        //         }
        //     })
        //     .catch(error => console.error(error))
        //     //登入失敗
        //     //系統維護中
        // }
        ...mapActions(userStore, ['updateToken', 'updateName', 'checkLogin', 'updateUserData']),

        login() {
            const bodyFormData = new FormData();
            bodyFormData.append('mem_account', this.accName);
            bodyFormData.append('mem_psw', this.au4a83);

            // 請記得將php埋入跨域
            apiInstance({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}/loginCheck.php`,
                headers: { "Content-Type": "multipart/form-data" },
                data: bodyFormData
            }).then(res => {
                console.log(res);
                if (res && res.data) {
                    if (res.data.code == 1) {
                        this.updateToken(res.data.session_id)
                        this.updateUserData(res.data.memInfo)
                        // this.$router.push('/member')
                        const redirect = this.$route.query.redirect
                        this.$router.push(redirect)
                    } else {
                        alert('登入失敗，請檢查帳號密碼是否正確。')
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        },
    }
}
</script>
<style lang="scss">
//
</style>
