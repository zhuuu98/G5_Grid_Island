<template>
    <div class="componentsarea">
        <div id="accessories-staff-box" class="staff-box">
            <h4>配件</h4>
            <ul class="accessories-options options-staff">
                <button v-for="(accessoriesStaff, index) in accessoriesStaffs" :key="accessoriesStaff.staff"
                    @click="handleAccessoriesStaffChange(accessoriesStaff.staff)"
                    :class="{ active: selectedAccessoriesStaff === accessoriesStaff.staff }">
                    {{ accessoriesStaff.name }}
                </button>
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

    export default {
        name: 'accessoriesComponent',
        props: {
            currentTab: String, // 假設currentColor是一個字符串類型的prop
            defaultAccessoriesStaff: String,
        },
        data() {
            return {
                accessoriesStaffs: [
                    { name: "無", staff: accessoriesStaff1 },
                    { name: "寒冬", staff: accessoriesStaff2 },
                    { name: "貓貓拳", staff: accessoriesStaff3 },
                    { name: "鬍鬚", staff: accessoriesStaff4 },
                    { name: "芬芳", staff: accessoriesStaff5 },
                    { name: "大手大腳", staff: accessoriesStaff6 },
                    { name: "經典造型", staff: accessoriesStaff7 },

                ],
                selectedAccessoriesStaff: this.defaultAccessoriesStaff, // 初始化時從props接收的值

            };
        },
        methods: {
            handleAccessoriesStaffChange(accessoriesStaff) {
                this.selectedAccessoriesStaff = accessoriesStaff;
                this.$emit('accessories-staff-selected', accessoriesStaff);
                console.log("事件已發射，配件圖片碼：", accessoriesStaff);
            }
        },
        watch: {
            defaultAccessoriesStaff(newVal) {
                this.selectedAccessoriesStaff = newVal;
            }
        }

    };
</script>