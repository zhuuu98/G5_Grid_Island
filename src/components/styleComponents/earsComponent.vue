<template>
    <div class="componentsarea">
        <div id="ears-staff-box" class="staff-box">
            <h4>耳朵造型</h4>
            <ul class="ears-options options-staff">
                <button v-for="(earsStaff, index) in earsStaffs" :key="earsStaff.staff"
                    @click="handleEarsStaffChange(earsStaff.staff)" :class="{ active: selectedEarsStaff === earsStaff.staff }">
                    {{ earsStaff.name }}
                </button>
            </ul>

        </div>
        <div id="ears-color-box" class="colors-box">
            <h4>耳朵顏色</h4>
            <ul class="ears-options options-colors">
                <li v-for="earsColor in earsColors" :key="earsColor" :style="{ backgroundColor: earsColor }"
                    @click="handleEarsColorChange(earsColor)" :class="{ active: selectedEarsColor === earsColor }">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue';
    import { earsStaff1 } from "@/policy/color.js"
    import { earsStaff2 } from "@/policy/color.js"
    import { earsStaff3 } from "@/policy/color.js"
    import { earsStaff4 } from "@/policy/color.js"
    import { earsStaff5 } from "@/policy/color.js"
    import { earsStaff6 } from "@/policy/color.js"
    import { earsStaff7 } from "@/policy/color.js"
    import { earsStaff8 } from "@/policy/color.js"
    import { unifiedColors } from "@/policy/color.js";

    export default {
        name: 'earsComponent',
        props: {
            currentTab: String, // 假設currentColor是一個字符串類型的prop
            defaultEarsColor: String,
            defaultEarsStaff: String,
        },
        data() {
            return {
                earsStaffs: [
                    { name: "觸角", staff: earsStaff1 },
                    { name: "長觸角", staff: earsStaff2 },
                    { name: "光環", staff: earsStaff3 },
                    { name: "犄角", staff: earsStaff4 },
                    { name: "獸耳", staff: earsStaff5 },
                    { name: "蓬鬆", staff: earsStaff6 },
                    { name: "搖滾", staff: earsStaff7 },
                    { name: "光滑", staff: earsStaff8 },
                ],
                earsColors: unifiedColors,
                selectedEarsColor: this.defaultEarsColor, // 初始化時從props接收的值
                selectedEarsStaff: this.defaultEarsStaff, // 初始化時從props接收的值
            };
        },
        methods: {
            handleEarsColorChange(earsColor) {
                this.selectedEarsColor = earsColor; // 更新選中的顏色
                this.$emit('ears-color-selected', earsColor);
                console.log("事件已發射，耳朵顏色：", earsColor);
            },
            handleEarsStaffChange(earsStaff) {
                this.selectedEarsStaff = earsStaff;
                this.$emit('ears-staff-selected', earsStaff);
                console.log("事件已發射，耳朵圖片碼：", earsStaff);
            },
        },
    };
</script>