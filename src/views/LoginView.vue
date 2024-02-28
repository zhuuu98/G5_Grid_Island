<template>
    <div class="login">
        <div class="login_main">
            <div class="login_main_griddy"></div>
            <h2>會員登入</h2>
            <form action="" class="login_form" methods="post">
                <input type="email" placeholder="請輸入帳號" v-model="accName">
                <input :type="showPsw ? 'text' : 'password'" placeholder="請輸入密碼" v-model="au4a83">
                <input type="submit" value="登入" class="signBtn" @click.prevent="login" @keyup.enter="login">
            </form>
            <p class="login_signUp_text">還不是會員嗎？<RouterLink to="./Signup">點我註冊</RouterLink>
            </p>
            <!-- @click="isPswShowed" -->
            <font-awesome-icon v-show="!showPsw" @mousedown="showPsw = !showPsw" :icon="['fas', 'eye']" class="pswEye"/>
            <font-awesome-icon v-show="showPsw"  @mouseup="showPsw = !showPsw" @mouseleave="showPsw = false" :icon="['fas', 'eye-slash']" class="pswEye" />
            <div class="login_icon">
                <i class="fa-brands fa-line fa-2xl" @click="lineLogin"></i>
                <i class="fa-brands fa-google fa-2xl" @click="googleLogin"></i>
            </div>
        </div>
        <!-- 燈箱 -->
        <div class="alert_bg" v-show="showAlert" @click.self="closeAlert">
            <div class="alert_main">
                <button @click="closeAlert">
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </button>
                <div class="alert_main_content">
                    <div class="content" v-for="content in alertContent">{{ content }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'pinia';
import userStore from '@/stores/user'
import apiInstance from '@/plugins/auth'
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default {
    data() {
        return {
            accName: '',
            au4a83: '',
            alertContent: [],
            showAlert: false,
            line_channel_id: '2003767814',    // Line Channel ID
            line_channel_secret: '5afb1c4a45fa1728f965b4f29c28952d',// Line Channel Secret
            line_redirect_uri: 'https://tibamef2e.com/chd104/g5/front/login',  // Line developer Callback URL
            line_idToken: '',
            line_accessToken: '',
            showPsw: false
        }
    },
    created() {
        if (this.$route.query.code && this.$route.query.state) {
            this.getLineToken();
        }
    },
    methods: {
        ...mapActions(userStore, ['updateToken', 'updateName', 'checkLogin', 'updateUserData']),

        login() {
            if (this.accName == "" || this.au4a83 == "") {
                document.body.classList.add('body-overflow-hidden');
                this.alertContent.push('帳號或密碼不得為空')
                this.showAlert = true;
                return;
            }
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
                        if (res.data.memInfo.mem_state == 0) {
                            this.alertContent.push('登入失敗，請聯繫客服人員。')
                            this.showAlert = true;
                            document.body.classList.add('body-overflow-hidden');
                        } else {
                            this.updateToken(true)
                            this.updateUserData(res.data.memInfo)
                            const redirect = this.$route.query.redirect
                            if (this.$route.query.redirect) {
                                this.$router.push(redirect)
                            } else {
                                this.$router.go(-1)
                            }
                        }
                    } else {
                        this.alertContent.push('登入失敗，請檢查帳號密碼是否正確。')
                        this.showAlert = true;
                        document.body.classList.add('body-overflow-hidden');
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        },
        async googleLogin() {
            const auth = getAuth();
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);
            const userName = result.user.displayName;
            const userEmail = result.user.email

            apiInstance({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}/googleLogin.php`,
                headers: { "Content-Type": "multipart/form-data" },
                data: {
                    mem_account: userEmail,
                    mem_name: userName
                }
            }).then(res => {
                if (res.data.memInfo.mem_state == 0) {
                    this.alertContent.push('登入失敗，請聯繫客服人員。')
                    this.showAlert = true;
                    document.body.classList.add('body-overflow-hidden');
                } else {
                    this.updateToken(true)
                    this.updateUserData(res.data.memInfo)
                    const redirect = this.$route.query.redirect
                    if (this.$route.query.redirect) {
                        this.$router.push(redirect)
                    } else {
                        this.$router.go(-1)
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        },
        lineLogin() {
            let url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${this.line_channel_id}&redirect_uri=${this.line_redirect_uri}&state=avesd&scope=profile%20openid%20email`

            window.location.href = url;

        },
        closeAlert() {
            this.showAlert = false;
            this.alertContent = [];
            document.body.classList.remove('body-overflow-hidden');
        },
        getLineToken() {
            const params = {
                grant_type: 'authorization_code', // 固定值
                code: this.$route.query.code, // 从 LINE 平台收到的授权码
                client_id: this.line_channel_id,
                client_secret: this.line_channel_secret,
                redirect_uri: this.line_redirect_uri, // 与授权请求redirect_uri中指定的值相同
                scope: 'openid email'
            }

            let urlencoded = new URLSearchParams(params);

            let url = `https://api.line.me/oauth2/v2.1/token`;
            fetch(url, {
                method: "post",
                "content-type": "application/x-www-form-urlencoded",
                body: urlencoded
            })
                .then(response => response.json())
                .then(result => {
                    if (!result.error) {
                        this.line_idToken = result.id_token
                        this.line_accessToken = result.access_token

                        const idParams = {
                            id_token: result.id_token,
                            client_id: this.line_channel_id,
                            access_token: result.access_token
                        }

                        let idUrlencoded = new URLSearchParams(idParams);
                        let getEmailUrl = 'https://api.line.me/oauth2/v2.1/verify'
                        fetch(getEmailUrl, {
                            method: "post",
                            "content-type": "application/x-www-form-urlencoded",
                            body: idUrlencoded,
                        })
                        .then(response => response.json())
                        .then(result => {
                            const userEmail = result.email
                            const userName = result.name

                            apiInstance({
                                method: 'post',
                                url: `${import.meta.env.VITE_API_URL}/googleLogin.php`,
                                headers: { "Content-Type": "multipart/form-data" },
                                data: {
                                    mem_account: userEmail,
                                    mem_name: userName
                                }
                            }).then(res => {
                                if (res.data.memInfo.mem_state == 0) {
                                    this.alertContent.push('登入失敗，請聯繫客服人員。')
                                    this.showAlert = true;
                                    document.body.classList.add('body-overflow-hidden');
                                } else {
                                    this.updateToken(true)
                                    this.updateUserData(res.data.memInfo)
                                    const redirect = this.$route.query.redirect
                                    if (this.$route.query.redirect) {
                                        this.$router.push(redirect)
                                    } else {
                                        this.$router.push('/')
                                    }
                                }
                            }).catch(error => {
                                console.log(error);
                            })
                        })
                        .catch(error => console.log(error))
                    }
                })
                .catch(error => console.log(error))
        },
        isPswShowed(){
            this.showPsw = !this.showPsw
        }
    }
}
</script>
<style lang="scss"></style>
