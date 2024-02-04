<template>
    <div class="componentsarea">
        <div id="ears-staff-box">
            <h3>耳朵造型</h3>
            <ul class="ears-options options-staff">
                <button v-for="(earsStaff, index) in earsStaffs" :key="earsStaff.staff"
                    @click="handleEarsStaffChange(earsStaff.staff)">
                    {{ earsStaff.label }}
                </button>
            </ul>

        </div>
        <div id="ears-color-box">
            <h3>耳朵顏色</h3>
            <ul class="ears-options options-colors">
                <li v-for="earsColor in earsColors" :key="earsColor" :style="{ backgroundColor: earsColor }"
                    @click="handleEarsColorChange(earsColor)" :class="{ selected: selectedEarsColor === earsColor }">
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
    data() {
        return {
            earsStaffs: [
                { label: "普通觸角", staff: earsStaff1 },
                { label: "長觸角", staff: earsStaff2 },
                { label: "光環", staff: earsStaff3 },
                { label: "犄角", staff: earsStaff4 },
                { label: "獸耳", staff: earsStaff5 },
                { label: "蓬鬆", staff: earsStaff6 },
                // { label: "搖滾", staff: earsStaff7 },
                // { label: "哥布林", staff: earsStaff8 },
            ]
        };
    },
    methods: {
        selectEarsStaff(selectedEarsStaff) {
            this.$emit('ears-staff-selected', selectedEarsStaff);
        }
    },

    setup(props, context) {
        // 使用reactive代替ref，创建一个反应性的state对象
        const earsState = reactive({
            selectedearsColor: props.currentColor
        });
        const earsColors = unifiedColors;

        // 更新選中的颜色
        const handleEarsColorChange = (earsColor) => {
            context.emit('ears-color-selected', earsColor);
            console.log("事件已發射，耳朵顏色：", earsColor);
        };

        const handleEarsStaffChange = (earsStaff) => {
            context.emit('ears-staff-selected', earsStaff);
            console.log("事件已發射，耳朵圖片碼：", earsStaff);
        };
        return {
            earsColors, selectedEarsColor: earsState.selectedEarsColor,
            handleEarsColorChange, handleEarsStaffChange




        };
    },

};
</script>