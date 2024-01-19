<template>
    <div class="signup" id="app">
        <div class="signup_main">
            <div class="signup_main_griddy">
                <!-- <img src="../assets/images/griddy_orange.png"> -->
            </div>
            <h2>註冊會員</h2>
            <form action="">
                <font-awesome-icon icon="coffee" />
                <RouterLink v-for="item in signupButton" :to ="item.link" class="btn_lg">{{item.title}}</RouterLink>
                <!-- <a href="https://www.google.com/" title="請至手機裝置操作">使用Line註冊</a>
                <a href="">使用Email註冊</a> -->
                <p class="signup_signUp_text">
                    已經是會員了?
                    <RouterLink to ="./login">點我登入</RouterLink>
                </p>
                

            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      signupButton:[{
        title:'使用Gmail登入',
        link:'https://www.google.com/',
        icon:'',
    },{
        title:'使用Line登入',
        link:'https://www.line.com/',
        icon:'',
    },{
        title:'使用email登入',
        link:'./signup2',
        icon:'',
    }],
    };
  },
  methods: {},
  mounted() {},
  
}
</script>



<style lang="scss">
//
</style>
