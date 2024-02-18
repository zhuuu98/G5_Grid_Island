<template>
  <div class="componentsarea">
      <div id="accessories-staff-box">
          <h4>配件</h4>
          <ul class="accessories-options options-staff">
              <button v-for="(accessoriesStaff, index) in accessoriesStaffs" :key="accessoriesStaff.staff"
                  @click="handleAccessoriesStaffChange(accessoriesStaff.staff)">
                  {{ accessoriesStaff.label }}
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

  export default {
      name: 'accessoriesComponent',
      data() {
          return {
              accessoriesStaffs: [
                  { label: "無", staff: accessoriesStaff1 },
                  { label: "寒冬", staff: accessoriesStaff2 },
                  { label: "貓貓拳", staff: accessoriesStaff3 },
                  { label: "鬍鬚", staff: accessoriesStaff4 },
                  { label: "芬芳", staff: accessoriesStaff5 },
                  { label: "大手大腳", staff: accessoriesStaff6 },
                  
              ]
          };
      },
      methods: {
          selectAccessoriesStaff(selectedAccessoriesStaff) {
              this.$emit('accessories-staff-selected', selectedAccessoriesStaff);
          }
      },

      setup(props, context) {
          // 使用reactive代替ref，创建一个反应性的state对象

          const handleAccessoriesStaffChange = (accessoriesStaff) => {
              context.emit('accessories-staff-selected', accessoriesStaff);
              console.log("事件已發射，配件圖片碼：", accessoriesStaff);
          };
          return {
            handleAccessoriesStaffChange




          };
      },

  };
</script>