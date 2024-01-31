<template>
    <div id="style-body">
        <div class="style-operate">
            <!-- 預覽區組件，顯示選擇的零件以及操作按鈕 -->
            <div class="style-view">
                <!-- 傳遞顏色到SVG組件 -->
                <div id="viewimagebox">
                    <originalGriddySrc :current-color="currentColor" :selectedColor="currentSelectedColor"
                        :id="viewimage" />
                </div>
            </div>
            <div class="style-btn">
                <!-- 操作按鈕 (如果有的話) -->
            </div>
        </div>
        <!-- 選項區，含頁籤 -->
        <div class="stylearea">
            <div class="tabs">
                <button v-for="tab in tabs" :key="tab.name" :class="{ active: currentTab === tab.component }"
                    @click="currentTab = tab.component">
                    {{ tab.title }}
                </button>
            </div>
            <div class="tab-content">
                <component :is="currentTab" @change-color="changeColor" :current-color="currentColor"></component>
                <!-- 確保SkinComponent在這裡，並且可以發送顏色改變事件 -->
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import eyesComponent from '../components/styleComponents/eyesComponent.vue';
    import antennaComponent from '../components/styleComponents/antennaComponent.vue';
    import accessoriesComponent from '../components/styleComponents/accessoriesComponent.vue';
    import backgroundComponent from '../components/styleComponents/backgroundComponent.vue';
    import originalGriddySrc from '../components/styleComponents/noneGriddy.vue';
    import skinComponent from '../components/styleComponents/skinComponent.vue';

    import { spotColors } from "@/policy/color.js"
    export default {
        components: {
            originalGriddySrc, // svg組件，顯示選擇的變化
            skinComponent, // 膚色區組件，用來切換膚色區的選擇
            eyesComponent,
            antennaComponent,
            accessoriesComponent,
            backgroundComponent,

        },

        setup() { // 頁籤相關代碼
            const tabs = [
                { name: 'tab1', title: '膚色', component: skinComponent },
                { name: 'tab2', title: '眼睛', component: eyesComponent },
                { name: 'tab3', title: '耳朵', component: antennaComponent },
                { name: 'tab4', title: '配件', component: accessoriesComponent },
                { name: 'tab5', title: '背景', component: backgroundComponent },
            ];
            const currentTab = ref(tabs[0].component);  // 設置初始顯示的組件
            // 用於存儲從SkinComponent選擇的顏色
            const currentSelectedColor = ref('#d2eb86'); // 預設顏色

            // 處理從SkinComponent發出的顏色更改事件
            const handleColorChange = (newColor) => {
                console.log("updateSkinColor called");
                console.log("Selected Color: ", newColor);
                currentSelectedColor.value = newColor;
            };

            const currentColor = ref(spotColors[0])

            const changeColor = (color) => {
                console.log(color)
                currentColor.value = color
            }

            return { tabs, currentTab, currentSelectedColor, handleColorChange, currentColor, changeColor };
        },
    };
</script>