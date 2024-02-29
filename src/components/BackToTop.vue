<template>
    <div class="backToTop">
        <div class="openChat" @click="scrollToTop">
            <!-- <font-awesome-icon icon="fa-solid fa-caret-up topIcon" />
            <font-awesome-icon icon="caret-up" /> -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg> -->
            <img src="../assets/images/chatbot/banana.webp" alt="">
            <!-- <span class="goTopText">Top</span> -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo({
                top: 0,
                behavior: "smooth"})
            },
        },
        mounted() {
            document.addEventListener('click', this.ClickChatBox);
        },
    }
</script>
<style lang="scss" scoped>
    //
</style>