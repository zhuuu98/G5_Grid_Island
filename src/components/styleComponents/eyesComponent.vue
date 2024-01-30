<template>
    <div class="skin-component componentsarea">
      <h3>眼睛</h3>
      <ul class="skin-colors">
        <li
          v-for="color in skinColors"
          :key="color"
          :style="{ backgroundColor: color }"
          @click="selectedSkinColor = color"
          :class="{ selected: selectedSkinColor === color }"
        >
          {{ color }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'SkinComponent',
    setup() {
      const skinColors = ['#FBE9E7', '#FFCCBC', '#8D6E63', '#4E342E']; // 這些值代表不同的膚色
      const selectedSkinColor = ref(skinColors[0]); // 預設選擇第一個膚色
  
      return { skinColors, selectedSkinColor };
    }
  };
  </script>
  
  <style scoped>
  .skin-component {
    /* 根據需要添加樣式 */
  }
  
  .skin-colors {
    list-style-type: none;
    padding: 0;
  }
  
  .skin-colors li {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 5px;
    border: 2px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .skin-colors li.selected {
    border-color: #000;
  }
  </style>
  