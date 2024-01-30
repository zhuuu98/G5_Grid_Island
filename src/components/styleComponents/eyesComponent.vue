<template>
    <div class="componentsarea">
        <div id="eyes-box">
            <h3>眼睛</h3>
            <ul class="eyes-options options-colors">
                <li v-for="color in eyesColors" :key="color" :style="{ backgroundColor: color }"
                    @click="selectedEyesColor = color" :class="{ selected: selectedEyesColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'EyesComponent',
        setup() {
            const eyesColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9']; // 這些值代表不同的膚色
            const selectedEyesColor = ref(eyesColors[0]); // 預設選擇第一個膚色

            return { eyesColors, selectedEyesColor };
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
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .skin-colors li.selected {
        border-color: #000;
    }
</style>