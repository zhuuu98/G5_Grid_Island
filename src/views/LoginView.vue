<template>
    <div class="login">
        <div class="login_main">
            <div class="login_main_griddy"></div>
            <h2>會員登入</h2>
            <form action="">
                <input v-for="data in loginInput" :type="data.type" :name="data.name" :placeholder="data.placeholder">
                <!-- <input type="email" placeholder="請輸入帳號">
                <input type="password" placeholder="請輸入密碼"> -->
                <RouterLink to="#" class="login_forget_password">忘記密碼？</RouterLink>
                <div class="login_Icon">
                    <Icon type="logo-google" size="30"/>
                    <Icon type="logo-google" size="30"/>
                </div>
                <input type="submit" value="登入" class="btn_default">
                <p class="login_signUp_text">還不是會員嗎？<RouterLink to ="./Signup">點我註冊</RouterLink></p>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loginInput: [{
                    type: 'email',
                    name: 'accountNum',
                    placeholder: '請輸入帳號',
                    value: ''
                }, {
                    type: 'password',
                    name: 'accountPsw',
                    placeholder: '請輸入密碼',
                    value: ''
                }],
            }
        },
        mounted() {
        },
        methods:{
        }
    }
</script>
<style lang="scss">
//
</style>
