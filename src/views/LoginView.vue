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
                <i class="fa-brands fa-google fa-2xl" @click="googleLogin"></i>
                <button @click="googleLogout">估狗登出</button>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import { ref } from 'vue'
import { mapActions } from 'pinia';
import userStore from '@/stores/user'
import apiInstance from '@/plugins/auth'
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default {
    data() {
        return {
            accName: 'griddy@griddy.com',
            au4a83: 'griddy123',
            // callback:(response)=>{
            //     console.log(response)
            // }
            googleAccessToken: null,
            googleUserInfo: null,
            userUid: null,
            userName: null,
            accountTypeID: null,
            userEmail: null
        }
    },
    methods: {
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
                if (res && res.data) {
                    if (res.data.code == 1) {
                        this.updateToken(res.data.session_id)
                        this.updateUserData(res.data.memInfo)
                        const redirect = this.$route.query.redirect
                        if (this.$route.query.redirect) {
                            this.$router.push(redirect)
                        } else {
                            this.$router.push('/member')
                        }
                    } else {
                        alert('登入失敗，請檢查帳號密碼是否正確。')
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        },
        async googleLogin(){
            const auth = getAuth();
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);
            const userUid = result.user.uid;
            const userName = result.user.displayName;
            const userEmail = result.user.email
            console.log(userUid)
            console.log(userName)
            console.log(userEmail)

            apiInstance({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}/googleLogin.php`,
                headers: { "Content-Type": "multipart/form-data" },
                data: {
                    mem_account: userEmail,
                    mem_name: userName
                }
            }).then(res => {
                // console.log(res);
                // if (res && res.data) {
                //     if (res.data.code == 1) {
                //         // this.updateToken(res.data.session_id)
                //         // this.updateUserData(res.data.memInfo)
                //         // // this.$router.push('/member')
                //         // const redirect = this.$route.query.redirect
                //         // if (this.$route.query.redirect) {
                //         //     this.$router.push(redirect)
                //         // } else {
                //         //     this.$router.push('/member')
                //         // }
                //         console.log('成功')
                //     } else {
                //         alert('登入失敗，請檢查帳號密碼是否正確。')
                //     }
                // }
                // console.log(res.data)
                this.updateToken(res.data.session_id)
                this.updateUserData(res.data.memInfo)
                const redirect = this.$route.query.redirect
                if (this.$route.query.redirect) {
                    this.$router.push(redirect)
                } else {
                    this.$router.push('/member')
                }
            }).catch(error => {
                console.log(error);
            })
        },
        googleLogout(){
            const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
                console.log('sign out')
            }).catch((error) => {
            // An error happened.
            });
        }
    }
}
</script>
<style lang="scss">
//
</style>
