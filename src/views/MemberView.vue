<template>
    <div>
        <PageTitle :pageTitle="'會員中心'" />

        <MemberCard />
    </div>
</template>

<script>
import MemberCard from "../components/MemberCard.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
    data() {
        return {
            
        };
    },
    components:{
        MemberCard,
        PageTitle,
    },

    mounted() {
        
    },

    methods: {
        
    },

};
</script>