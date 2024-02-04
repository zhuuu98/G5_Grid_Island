<template>
    <bannerComponent/>
</template>
<script>
    import bannerComponent from "@/components/Banner.vue";
    export default {
        name: 'bannerComponent', // 組件名稱
        data() {
            // 定義組件的數據
            return {
                bannerComponent,
            };
        },
    }
</script>