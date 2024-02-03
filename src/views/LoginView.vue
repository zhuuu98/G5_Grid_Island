<template>
    <div class="login">
        <div class="login_main">
            <div class="login_main_griddy"></div>
            <h2>會員登入</h2>
            <form action="" class="login_form">
                <input type="email" placeholder="請輸入帳號" v-model="accName">
                <input type="password" placeholder="請輸入密碼" v-model="au4a83">
                <RouterLink to="#" class="login_forget_password">忘記密碼？</RouterLink>

                <input type="submit" value="登入" class="signBtn" @click.prevent="signin">
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
export default {
    data() {
        return {
            accName: '',
            au4a83: '',
            // accName: 'mor_2314',
            // au4a83: '83r5^_',
        }
    },
    methods: {
        ...mapActions(userStore, ['updateToken']),
        signin() {
            axios.post(`${import.meta.env.VITE_API_URL}/ssss.php`, {
            // axios.post('https://fakestoreapi.com/auth/login', {
                username: this.accName,
                password: this.au4a83
            })
            .then(response => {
                if (response.data && response.data.token) {
                    this.updateToken(response.data.token)
                    // console.log('login')
                    // console.log(response.data.token);
                }
            })
            .catch(error => console.error(error))
            //登入失敗
            //系統維護中
        }
    }
}
</script>
<style lang="scss">
//
</style>
