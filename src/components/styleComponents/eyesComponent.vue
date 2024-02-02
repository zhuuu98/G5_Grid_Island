<template>
    <div class="componentsarea">
        <div id="eyes-staff-box">
            <h3>眼睛造型</h3>
            <ul class="eyes-options options-staff">
                <button v-for="(eyesStaff, index) in eyesStaffs" :key="eyesStaff.staff"
                    @click="handleEyesStaffChange(eyesStaff.staff)">
                    {{ eyesStaff.label }}
                </button>
            </ul>

        </div>
        <div id="eyes-color-box">
            <h3>眼睛顏色</h3>
            <ul class="eyes-options options-colors">
                <li v-for="eyesColor in eyesColors" :key="eyesColor" :style="{ backgroundColor: eyesColor }"
                    @click="handleEyesColorChange(eyesColor)" :class="{ selected: selectedEyesColor === eyesColor }">
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
        data() {
            return {
                eyesStaffs: [
                    { label: "粗框眼鏡", staff: eyesStaff1 },
                    { label: "憨厚", staff: eyesStaff2 },
                    { label: "不懷好意", staff: eyesStaff3 },
                    { label: "哭哭", staff: eyesStaff4 },
                    { label: "水汪汪", staff: eyesStaff5 },
                    { label: "複眼", staff: eyesStaff6 },
                    { label: "疲憊", staff: eyesStaff7 },
                    { label: "舒眠", staff: eyesStaff8 },
                    { label: "愛戀", staff: eyesStaff9 },
                    { label: "少年", staff: eyesStaff10 },
                ]
            };
        },
        methods: {
            selectEyesStaff(selectedEyesStaff) {
                this.$emit('eyes-staff-selected', selectedEyesStaff);
            }
        },

        setup(props, context) {
            // 使用reactive代替ref，创建一个反应性的state对象
            const eyesState = reactive({
                selectedeyesColor: props.currentColor
            });
            const eyesColors = unifiedColors;

            // 更新選中的颜色
            const handleEyesColorChange = (eyesColor) => {
                context.emit('eyes-color-selected', eyesColor);
                console.log("事件已發射，眼睛顏色：", eyesColor);
            };

            const handleEyesStaffChange = (eyesStaff) => {
                context.emit('eyes-staff-selected', eyesStaff);
                console.log("事件已發射，眼睛圖片碼：", eyesStaff);
            };
            return {
                eyesColors, selectedEyesColor: eyesState.selectedEyesColor,
                handleEyesColorChange, handleEyesStaffChange
            };
        },

    };
</script>