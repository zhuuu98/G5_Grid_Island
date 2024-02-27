<template>
    <div id="griddystyle-contentbox">
      <div class="griddyPic-row" v-for="(row, index) in griddyRows" :key="index">
        <div class="imagebox" v-for="image in row" :key="image.id">
          <img :src="image.src" :alt="image.alt">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GriddyPictures',
    data() {
      return {
        // 假設每個row有12個圖片，這是圖片數據的示例
        griddyRows: [
          [
            { id: 1, src: '../assets/images/home/griddyPic/1.png', alt: '' },
            { id: 2, src: '../assets/images/home/griddyPic/2.png', alt: '' },
            // 省略其他圖片數據...
          ],
          // 更多rows...
        ],
      };
    },
  };
  </script>
  
  <style>
  /* 您的樣式 */
  </style>
  