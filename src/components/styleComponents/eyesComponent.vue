<template>
    <div class="componentsarea">
        <div id="eyes-staff-box" class="staff-box">
            <h4>眼睛造型</h4>
            <ul class="eyes-options options-staff">
                <button v-for="(eyesStaff, index) in eyesStaffs" :key="eyesStaff.staff"
                    @click="handleEyesStaffChange(eyesStaff.staff)" :class="{ active: selectedEyesStaff === eyesStaff.staff }">
                    {{ eyesStaff.name }}
                </button>
            </ul>

        </div>
        <div id="eyes-colors-box" class="colors-box">
            <h4>眼睛顏色</h4>
            <ul class="eyes-options options-colors">
                <li v-for="eyesColor in eyesColors" :key="eyesColor" :style="{ backgroundColor: eyesColor }"
                    @click="handleEyesColorChange(eyesColor)" :class="{ active: selectedEyesColor === eyesColor }">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { ref, reactive } from 'vue';
    import { eyesStaff1 } from "@/policy/color.js"
    import { eyesStaff2 } from "@/policy/color.js"
    import { eyesStaff3 } from "@/policy/color.js"
    import { eyesStaff4 } from "@/policy/color.js"
    import { eyesStaff5 } from "@/policy/color.js"
    import { eyesStaff6 } from "@/policy/color.js"
    import { eyesStaff7 } from "@/policy/color.js"
    import { eyesStaff8 } from "@/policy/color.js"
    import { eyesStaff9 } from "@/policy/color.js"
    import { eyesStaff10 } from "@/policy/color.js"
    import { unifiedColors } from "@/policy/color.js";

    export default {
        name: 'eyesComponent',
        props: {
            currentTab: String, // 假設currentColor是一個字符串類型的prop
            defaultEyesColor: String,
            defaultEyesStaff: String,
        },
        data() {
            return {
                eyesStaffs: [
                    { name: "眼鏡", staff: eyesStaff1 },
                    { name: "憨厚", staff: eyesStaff2 },
                    { name: "不懷好意", staff: eyesStaff3 },
                    { name: "哭哭", staff: eyesStaff4 },
                    { name: "水汪汪", staff: eyesStaff5 },
                    { name: "複眼", staff: eyesStaff6 },
                    { name: "疲憊", staff: eyesStaff7 },
                    { name: "舒眠", staff: eyesStaff8 },
                    { name: "愛戀", staff: eyesStaff9 },
                    { name: "少年", staff: eyesStaff10 },
                ],
                eyesColors: unifiedColors,
                selectedEyesColor: this.defaultEyesColor, // 初始化時從props接收的值
                selectedEyesStaff: this.defaultEyesStaff, // 初始化時從props接收的值
            };
        },
        methods: {
            handleEyesColorChange(eyesColor) {
                this.selectedEyesColor = eyesColor; // 更新選中的顏色
                this.$emit('eyes-color-selected', eyesColor);
                console.log("事件已發射，眼睛顏色：", eyesColor);
            },
            handleEyesStaffChange(eyesStaff) {
                this.selectedEyesStaff = eyesStaff;
                this.$emit('eyes-staff-selected', eyesStaff);
                console.log("事件已發射，眼睛圖片碼：", eyesStaff);
            },
        },

    };
</script>