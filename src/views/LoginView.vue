<template>
    <div class="login">
        <div class="login_main">
            <div class="login_main_griddy"></div>
            <h2>會員登入</h2>
            <form action="">
                <input type="email" placeholder="請輸入帳號" v-model="accName">
                <input type="password" placeholder="請輸入密碼" v-model="au4a83">
                <RouterLink to="#" class="login_forget_password">忘記密碼？</RouterLink>
                <div class="login_Icon">
                    <Icon type="logo-google" size="30" />
                    <Icon type="logo-google" size="30" />
                </div>
                <input type="submit" value="登入" class="btn_default" @click.prevent="signin">
                <p class="login_signUp_text">還不是會員嗎？<RouterLink to="./Signup">點我註冊</RouterLink>
                </p>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'pinia';
import userStore from '@/stores/user'
export default {
    components: {},
    data() {
        return {
            accName: 'mor_2314',
            au4a83: '83r5^_',
        }
    },
    methods: {
        ...mapActions(userStore, ['updateToken']),
        signin() {
            axios.post('https://fakestoreapi.com/auth/login', {
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
