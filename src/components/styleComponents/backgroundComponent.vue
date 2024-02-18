<template>
    <div class="componentsarea">
        <div id="background-color-box">
            <h4>背景顏色</h4>
            <ul class="background-options options-colors">
                <li v-for="backgroundColor in backgroundColors" :key="backgroundColor"
                    :style="{ backgroundColor: backgroundColor }" @click="handleBackgroundColorChange(backgroundColor)"
                    :class="{ selected: selectedBackgroundColor === backgroundColor }">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { unifiedColors } from "@/policy/color.js";

export default {
    name: 'backgroundComponent',
    props: {
      currentColor: String, // 宣告接收currentColor这个prop
    },

    setup(props, context) {
        // 使用reactive代替ref，创建一个反应性的state对象
        const backgroundState = reactive({
            selectedbackgroundColor: props.currentColor // 使用props初始化状态
        });
        const backgroundColors = unifiedColors;

        // 更新選中的颜色
        const handleBackgroundColorChange = (backgroundColor) => {
            backgroundState.selectedBackgroundColor = backgroundColor; // 更新反应性状态
            context.emit('background-color-selected', backgroundColor);
            console.log("事件已發射，背景顏色：", backgroundColor);
        };

        return {
            backgroundColors, 
            selectedBackgroundColor: backgroundState.selectedBackgroundColor,
            handleBackgroundColorChange,



        };
    },

};
</script>