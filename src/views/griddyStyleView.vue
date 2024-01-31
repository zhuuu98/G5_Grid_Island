<template>
    <div id="style-body">
        <div class="style-operate">
            <!-- 預覽區組件，顯示選擇的零件以及操作按鈕 -->
            <div class="style-view">
                <!-- 傳遞顏色到SVG組件 -->
                <div id="viewimagebox">
                    <originalGriddySrc :selectedSpotColor="selectedSpotColor" :selectedBodyColor="selectedBodyColor"
                        :selectedBellyColor="selectedBellyColor" 
                        :selectedEyesStaff="selectedEyesStaff"
                        :selectedEyesColor="selectedEyesColor"
                        :selectedEarsStaff="selectedEarsStaff" 
                        :selectedEarsColor="selectedEarsColor" />
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
                <component :is="currentTab" @spot-color-selected="handleSpotColorChange"
                    @body-color-selected="handleBodyColorChange" @belly-color-selected="handleBellyColorChange"
                    @eyes-color-selected="handleEyesColorChange" @eyes-staff-selected="handleEyesStaffChange"
                    @ears-color-selected="handleEarsColorChange" @ears-staff-selected="handleEarsStaffChange">
                </component>

            </div>
        </div>

    </div>
</template>

<script>
    import { ref } from 'vue';
    import eyesComponent from '../components/styleComponents/eyesComponent.vue';
    import earsComponent from '../components/styleComponents/earsComponent.vue';
    import accessoriesComponent from '../components/styleComponents/accessoriesComponent.vue';
    import backgroundComponent from '../components/styleComponents/backgroundComponent.vue';
    import originalGriddySrc from '../components/styleComponents/noneGriddy.vue';
    import skinComponent from '../components/styleComponents/skinComponent.vue';
    import { bodyColors } from "@/policy/color.js"
    import { bellyColors } from "@/policy/color.js"
    import { spotColors } from "@/policy/color.js"
    import { eyesColors } from "@/policy/color.js"
    import { eyesStaffs } from "@/policy/color.js"
    import { earsColors } from "@/policy/color.js"
    import { earsStaffs } from "@/policy/color.js"


    export default {
        components: {
            originalGriddySrc, // svg組件，顯示選擇的變化
            skinComponent, // 膚色區組件，用來切換膚色區的選擇
            eyesComponent, //眼睛區
            earsComponent, //耳朵區
            accessoriesComponent, //配件區
            backgroundComponent, //背景顏色區
            
            
        },
        
        setup() {
            const tabs = [
                { name: 'tab1', title: '膚色', component: skinComponent },
                { name: 'tab2', title: '眼睛', component: eyesComponent },
                { name: 'tab3', title: '耳朵', component: earsComponent },
                { name: 'tab4', title: '配件', component: accessoriesComponent },
                { name: 'tab5', title: '背景', component: backgroundComponent },
            ];
            const currentTab = ref(tabs[0].component);  // 初始顯示第一張頁籤
            const selectedBodyColor = ref(bodyColors[0]);
            const selectedBellyColor = ref(bellyColors[3]);
            const selectedSpotColor = ref(spotColors[9]);
            const selectedEyesStaff = ref(eyesStaffs[0]);
            const selectedEyesColor = ref(eyesColors[9]);
            const selectedEarsStaff = ref(earsStaffs[0]);
            const selectedEarsColor = ref(earsColors[0]);


            return {
                tabs, currentTab, selectedBodyColor, selectedBellyColor, selectedSpotColor, selectedBellyColor,
                selectedEyesColor, selectedEyesStaff, selectedEarsColor, selectedEarsStaff,
            };
        },
        methods: {
            handleBodyColorChange(bodyColor) {
                console.log("接收到子組件的軀幹顏色：", bodyColor);
                this.selectedBodyColor = bodyColor;
                console.log("被選擇的軀幹顏色：", this.selectedBodyColor);
            },
            handleBellyColorChange(bellyColor) {
                console.log("接收到子組件的肚肚顏色：", bellyColor);
                this.selectedBellyColor = bellyColor;
                console.log("被選擇的肚肚顏色：", this.selectedBellyColor);
            },
            handleSpotColorChange(spotColor) {
                console.log("接收到子組件的斑點顏色：", spotColor);
                this.selectedSpotColor = spotColor;
                console.log("被選擇的的斑點顏色：", this.selectedSpotColor);
            },
            handleEyesStaffChange(eyesStaff) {
                console.log("接收到子組件的眼鏡零件：", eyesStaff);
                this.selectedEyesStaff = eyesStaff;
                console.log("被選擇的的眼鏡零件：", this.selectedEyesStaff);
            },
            handleEyesColorChange(eyesColor) {
                console.log("接收到子組件的眼鏡顏色：", eyesColor);
                this.selectedEyesColor = eyesColor;
                console.log("被選擇的的眼鏡顏色：", this.selectedEyesColor);
            },
            handleEarsStaffChange(earsStaff) {
                console.log("接收到子組件的耳朵零件：", earsStaff);
                this.selectedEarsStaff = earsStaff;
                console.log("被選擇的的耳朵零件：", this.selectedEarsStaff);
            },
            handleEarsColorChange(earsColor) {
                console.log("接收到子組件的耳朵顏色：", earsColor);
                this.selectedEarsColor = earsColor;
                console.log("被選擇的的耳朵顏色：", this.selectedEarsColor);
            },
        },
    };
</script>