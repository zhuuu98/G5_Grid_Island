<template>
    <div class="login">
        <div class="login_main">
            <div class="login_main_griddy"></div>
            <h2>會員登入</h2>
            <form action="">
                <input type="email" name="" id="" placeholder="請輸入帳號">
                <input type="password" placeholder="請輸入密碼">
                <RouterLink to="#" class="login_forget_password">忘記密碼？</RouterLink>
                <!-- <Icon type="logo-google" /> -->
                <input type="submit" value="登入" class="btn_default">
                <p class="login_signUp_text">還不是會員嗎？<RouterLink to ="./Signup">點我註冊</RouterLink></p>
            </form>
        </div>
    </div>
</template>
<style lang="scss">
//
</style>
