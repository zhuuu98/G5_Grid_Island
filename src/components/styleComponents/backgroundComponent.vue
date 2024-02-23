<template>
    <div class="componentsarea">
        <div id="background-color-box" class="colors-box">
            <h4>背景顏色</h4>
            <ul class="background-options options-colors">
                <li v-for="backgroundColor in backgroundColors" :key="backgroundColor"
                    :style="{ backgroundColor: backgroundColor }" @click="handleBackgroundColorChange(backgroundColor)"
                    :class="{ active: selectedBackgroundColor === backgroundColor }">
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
            currentTab: String, // 假設currentColor是一個字符串類型的prop
            defaultBackgroundColor: String,
        },
        data() {
            return {
                backgroundColors: unifiedColors,
                selectedBackgroundColor: this.defaultBackgroundColor, // 初始化時從props接收的值
            }
        },

        methods: {
            handleBackgroundColorChange(backgroundColor) {
                this.selectedBackgroundColor = backgroundColor; // 更新選中的顏色
                this.$emit('background-color-selected', backgroundColor);
                console.log("事件已發射，背景顏色：", backgroundColor);
            },
        },
        watch: {
            defaultBackgroundColor(newVal) {
                this.selectedBackgroundColor = newVal;
            }
        }

    };
</script>