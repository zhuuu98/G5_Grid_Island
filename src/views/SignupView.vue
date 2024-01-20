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
        title:'使用Email登入',
        link:'./signup2',
        icon:'',
    }],
    };
  },
  created() {
  },
  methods: {
    mounted() {},
  },
};
</script>


<template>
    <Breadcrumb separator="<b class='breadcrumb-separator'>></b>">
        <BreadcrumbItem to="./Home">首頁</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>註冊會員</BreadcrumbItem>
    </Breadcrumb>

    <div class="signup" id="app">
        <div class="signup_main">
            <div class="signup_main_griddy">
                <!-- <img src="../assets/images/griddy_orange.png"> -->
            </div>
            <h2>註冊會員</h2>
            <form action="">
                <font-awesome-icon icon="instagram" />
                <font-awesome-icon icon="line" />
                <!-- <font-awesome-icon icon="coffee" /> -->
                <RouterLink v-for="item in signupButton" :to ="item.link" class="signBtn">{{item.title}}</RouterLink>
                <p class="signup_signUp_text">
                    已經是會員了?
                    <RouterLink to ="./login">點我登入</RouterLink>
                </p>
                

            </form>
        </div>
    </div>
</template>

<style lang="scss">
//

</style>
