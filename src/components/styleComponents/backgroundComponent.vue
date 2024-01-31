<template>
  <div class="componentsarea">
      <div id="background-color-box">
          <h3>背景顏色</h3>
          <ul class="background-options options-colors">
              <li v-for="backgroundColor in backgroundColors" :key="backgroundColor" :style="{ backgroundColor: backgroundColor }"
                  @click="handleBackgroundColorChange(backgroundColor)" :class="{ selected: selectedBackgroundColor === backgroundColor }">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  export default {
      name: 'backgroundComponent',
      data() {
      },

      setup(props, context) {
          // 使用reactive代替ref，创建一个反应性的state对象
          const backgroundState = reactive({
              selectedbackgroundColor: props.currentColor
          });
          const backgroundColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9'];

          // 更新選中的颜色
          const handleBackgroundColorChange = (backgroundColor) => {
              context.emit('background-color-selected', backgroundColor);
              console.log("事件已發射，背景顏色：", backgroundColor);
          };

          return {
              backgroundColors, selectedBackgroundColor: backgroundState.selectedBackgroundColor,
              handleBackgroundColorChange, 



          };
      },

  };
</script>