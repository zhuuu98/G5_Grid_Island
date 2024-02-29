<template>
    <div class="componentsarea">
        <div id="accessories-staff-box" class="staff-box">
            <h4>配件造型</h4>
            <ul class="accessories-options options-staff">
                <button v-for="(accessoriesStaff, index) in accessoriesStaffs" :key="accessoriesStaff.staff"
                    @click="handleAccessoriesStaffChange(accessoriesStaff.staff)"
                    :class="{ active: selectedAccessoriesStaff === accessoriesStaff.staff }">
                    {{ accessoriesStaff.name }}
                </button>
            </ul>
        </div>
        <div id="accessories-color-box" class="colors-box" v-if="showColorSelector">
            <h4>配件顏色</h4>
            <ul class="accessories-options options-colors">
                <li v-for="accessoriesColor in accessoriesColors" :key="accessoriesColor"
                    :style="{ backgroundColor: accessoriesColor }"
                    @click="handleAccessoriesColorChange(accessoriesColor)"
                    :class="{ active: selectedAccessoriesColor === accessoriesColor }">
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import { ref, reactive } from 'vue';
    import { accessoriesStaff1 } from "@/policy/color.js"
    import { accessoriesStaff2 } from "@/policy/color.js"
    import { accessoriesStaff3 } from "@/policy/color.js"
    import { accessoriesStaff4 } from "@/policy/color.js"
    import { accessoriesStaff5 } from "@/policy/color.js"
    import { accessoriesStaff6 } from "@/policy/color.js"
    import { accessoriesStaff7 } from "@/policy/color.js"
    import { accessoriesStaff8 } from "@/policy/color.js"

    import { unifiedColors } from "@/policy/color.js";

    export default {
        name: 'accessoriesComponent',
        props: {
            currentTab: String, // 假設currentColor是一個字符串類型的prop
            defaultAccessoriesStaff: String,
            defaultAccessoriesColor: String,
        },
        data() {
            return {
                accessoriesStaffs: [
                    { name: "無", staff: accessoriesStaff1, canChangeColor: false },
                    { name: "寒冬", staff: accessoriesStaff2, canChangeColor: true }, // 可以更改顏色
                    { name: "貓", staff: accessoriesStaff3, canChangeColor: false },
                    { name: "鬍鬚", staff: accessoriesStaff4, canChangeColor: false },
                    { name: "芬芳", staff: accessoriesStaff5, canChangeColor: false },
                    { name: "大手大腳", staff: accessoriesStaff6, canChangeColor: false },
                    { name: "經典造型", staff: accessoriesStaff7, canChangeColor: true }, // 可以更改顏色
                    { name: "爪", staff: accessoriesStaff8, canChangeColor: true }, // 可以更改顏色

                ],
                accessoriesColors: unifiedColors,
                selectedAccessoriesColor: this.defaultAccessoriesColor,
                selectedAccessoriesStaff: this.defaultAccessoriesStaff, // 初始化時從props接收的值
            };
        },
        computed: {
            showColorSelector() {
                // 找到當前選中的配件對象
                const selectedStaffObj = this.accessoriesStaffs.find(staff => staff.staff === this.selectedAccessoriesStaff);
                // 如果找到了對象，並且該對象的 canChangeColor 為 true，則顯示顏色選擇器
                return selectedStaffObj ? selectedStaffObj.canChangeColor : false;
            },
        },
        methods: {


            handleAccessoriesStaffChange(accessoriesStaff) {
                this.selectedAccessoriesStaff = accessoriesStaff;
                this.$emit('accessories-staff-selected', accessoriesStaff);
                console.log("事件已發射，配件圖片碼：", accessoriesStaff);
            },
            handleAccessoriesColorChange(accessoriesColor) {
                this.selectedAccessoriesColor = accessoriesColor; // 更新選中的顏色
                this.$emit('accessories-color-selected', accessoriesColor);
                console.log("事件已發射，配件顏色：", accessoriesColor);
            },
        },
        watch: {
            defaultAccessoriesColor(newVal) {
                this.selectedAccessoriesColor = newVal;
            },
            defaultAccessoriesStaff(newVal) {
                this.selectedAccessoriesStaff = newVal;
            },
        }

    };
</script>