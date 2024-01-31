<template>
    <div id="style-body">
        <div class="style-operate">
            <!-- 預覽區組件，顯示選擇的零件以及操作按鈕 -->
            <div class="style-view">
                <!-- 傳遞顏色到SVG組件 -->
                <div id="viewimagebox">
                    <originalGriddySrc :selectedSpotColor="selectedSpotColor" :selectedBodyColor="selectedBodyColor" />
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
            <!-- 頁籤內容 -->
            <div class="tab-content">
                <component :is="currentTab" 
                @spot-color-selected="handleSpotColorChange" 
                @body-color-selected="handleBodyColorChange">

                </component>

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
    import { bodyColors } from "@/policy/color.js"
    export default {
        components: {
            originalGriddySrc, // svg組件，顯示選擇的變化
            skinComponent, // 膚色區組件，用來切換膚色區的選擇
            eyesComponent, //眼睛區
            antennaComponent, //觸角區
            accessoriesComponent, //配件區
            backgroundComponent, //背景顏色區
        },
        setup() {
            const tabs = [
                { name: 'tab1', title: '膚色', component: skinComponent },
                { name: 'tab2', title: '眼睛', component: eyesComponent },
                { name: 'tab3', title: '耳朵', component: antennaComponent },
                { name: 'tab4', title: '配件', component: accessoriesComponent },
                { name: 'tab5', title: '背景', component: backgroundComponent },
            ];
            const currentTab = ref(tabs[0].component);  // 初始顯示第一張頁籤
            const selectedSpotColor = ref(spotColors[0]);
            const selectedBodyColor = ref(bodyColors[0]);


            return { tabs, currentTab, selectedSpotColor, selectedBodyColor };
        },
        methods: {
            handleSpotColorChange(spotColor) {
                console.log("接收到子組件的斑點顏色：", spotColor);
                this.selectedSpotColor = spotColor;
                console.log("被選擇的的斑點顏色：", this.selectedSpotColor);
            },
            handleBodyColorChange(bodyColor) {
                console.log("接收到子組件的軀幹顏色：", bodyColor);
                this.selectedBodyColor = bodyColor;
                console.log("被選擇的軀幹顏色：", this.selectedBodyColor);
            },
        }
    };
</script>