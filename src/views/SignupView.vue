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
    <div class="signup container">
        <div class="signup_main">
            <div class="signup_main_griddy">
            </div>
            <h2>註冊會員</h2>
            <form action="">
                <RouterLink v-for="item in signupButton" :to ="item.link" class="signBtn">
                    <font-awesome-icon :icon="['fab', 'line']" />
                    {{item.title}}
                </RouterLink>
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
