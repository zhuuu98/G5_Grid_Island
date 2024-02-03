<template>
    <div id="style-body">
        <div id="style-play-zone" v-show="currentZone === 'style-play-zone'">
            <div id="style-operate">
                <!-- 預覽區組件，顯示選擇的零件以及操作按鈕 -->
                <div class="style-view">
                    <!-- 傳遞顏色到SVG組件 -->
                    <div class="viewimagebox">
                        <originalGriddySrc :selectedSpotColor="selectedSpotColor" :selectedBodyColor="selectedBodyColor"
                            :selectedBellyColor="selectedBellyColor" :selectedEyesStaff="selectedEyesStaff"
                            :selectedEyesColor="selectedEyesColor" :selectedEarsStaff="selectedEarsStaff"
                            :selectedEarsColor="selectedEarsColor" :selectedAccessoriesStaff="selectedAccessoriesStaff"
                            :selectedBackgroundColor="selectedBackgroundColor" />
                    </div>
                    <button id="setphoto" @click="toggleZone">確認送出</button>
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
                        @ears-color-selected="handleEarsColorChange" @ears-staff-selected="handleEarsStaffChange"
                        @accessories-staff-selected="handleAccessoriesStaffChange"
                        @background-color-selected="handleBackgroundColorChange">
                    </component>

                </div>
            </div>
        </div>
        <div id="show-zone" v-show="currentZone === 'show-zone'">
            <div class="final-show">
                <!-- 傳遞顏色到SVG組件 -->
                <div id="finalimagebox">
                    <originalGriddySrc :selectedSpotColor="selectedSpotColor" :selectedBodyColor="selectedBodyColor"
                        :selectedBellyColor="selectedBellyColor" :selectedEyesStaff="selectedEyesStaff"
                        :selectedEyesColor="selectedEyesColor" :selectedEarsStaff="selectedEarsStaff"
                        :selectedEarsColor="selectedEarsColor" :selectedAccessoriesStaff="selectedAccessoriesStaff"
                        :selectedBackgroundColor="selectedBackgroundColor" />
                </div>
                <p>最棒的Griddy粉墨登場！</p>
                <img v-if="griddyImage" :src="griddyImage" alt="Captured Griddy Content">
                <button @click="griddyToImage">下載圖片</button>
                <button id="goback" @click="toggleZone">回上頁</button>
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
    import { accessoriesStaffs } from "@/policy/color.js"
    import { backgroundColors } from "@/policy/color.js"
    import html2canvas from 'html2canvas';


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
            const selectedAccessoriesStaff = ref(accessoriesStaffs[0]);
            const selectedBackgroundColor = ref(backgroundColors[4]);
            const currentZone = ref('style-play-zone');
            const toggleZone = () => {
                currentZone.value = currentZone.value === 'style-play-zone' ? 'show-zone' : 'style-play-zone';
            };
            const griddyImage = ref(null); // 存储转换后的图像
            const griddyToImage = () => {
                const elementToCapture = document.getElementById('finalimagebox');
                // 设置画布分辨率增加的倍数，例如 2 表示 2x 分辨率
                const scale = 4;

                // 设置 html2canvas 选项
                const options = {
                    scale: scale,
                    width: elementToCapture.offsetWidth,
                    height: elementToCapture.offsetHeight,
                    useCORS: true // 允许加载跨域图片
                };



                html2canvas(elementToCapture, options).then(canvas => {
                    const downloadLink = document.createElement('a');
                    // 使用当前日期和时间来生成唯一的文件名
                    const date = new Date();
                    const timestamp = date.getFullYear().toString() +
                        (date.getMonth() + 1).toString().padStart(2, '0') +
                        date.getDate().toString().padStart(2, '0') + '_' +
                        date.getHours().toString().padStart(2, '0') +
                        date.getMinutes().toString().padStart(2, '0') +
                        date.getSeconds().toString().padStart(2, '0');
                    const filename = `OMG${timestamp}.png`;

                    downloadLink.href = canvas.toDataURL('image/png');
                    downloadLink.download = filename; // 图片文件名

                    // 模拟点击链接以触发下载
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                });
            };

            const handleBodyColorChange = (bodyColor) => {
                console.log("接收到子組件的軀幹顏色：", bodyColor);
                selectedBodyColor.value = bodyColor;
                console.log("被選擇的軀幹顏色：", selectedBodyColor.value);
            };
            const handleBellyColorChange = (bellyColor) => {
                console.log("接收到子組件的肚肚顏色：", bellyColor);
                selectedBellyColor.value = bellyColor;
                console.log("被選擇的肚肚顏色：", selectedBellyColor.value);
            };
            const handleSpotColorChange = (spotColor) => {
                console.log("接收到子組件的斑點顏色：", spotColor);
                selectedSpotColor.value = spotColor;
                console.log("被選擇的的斑點顏色：", selectedSpotColor.value);
            };
            const handleEyesStaffChange = (eyesStaff) => {
                console.log("接收到子組件的眼鏡零件：", eyesStaff);
                selectedEyesStaff.value = eyesStaff;
                console.log("被選擇的的眼鏡零件：", selectedEyesStaff.value);
            };
            const handleEyesColorChange = (eyesColor) => {
                console.log("接收到子組件的眼鏡顏色：", eyesColor);
                selectedEyesColor.value = eyesColor;
                console.log("被選擇的的眼鏡顏色：", selectedEyesColor.value);
            };

            const handleEarsStaffChange = (earsStaff) => {
                console.log("接收到子組件的耳朵零件：", earsStaff);
                selectedEarsStaff.value = earsStaff;
                console.log("被選擇的的耳朵零件：", selectedEarsStaff.value);
            };

            const handleEarsColorChange = (earsColor) => {
                console.log("接收到子組件的耳朵顏色：", earsColor);
                selectedEarsColor.value = earsColor;
                console.log("被選擇的的耳朵顏色：", selectedEarsColor.value);
            };

            const handleAccessoriesStaffChange = (accessoriesStaff) => {
                console.log("接收到子組件的配件零件：", accessoriesStaff);
                selectedAccessoriesStaff.value = accessoriesStaff;
                console.log("被選擇的的配件零件：", selectedAccessoriesStaff.value);
            };

            const handleBackgroundColorChange = (backgroundColor) => {
                console.log("接收到子組件的背景顏色：", backgroundColor);
                selectedBackgroundColor.value = backgroundColor;
                console.log("被選擇的的背景顏色：", selectedBackgroundColor.value);
            };






            return {
                currentZone, toggleZone, tabs, currentTab, selectedBodyColor, selectedBellyColor, selectedSpotColor, selectedBellyColor,
                selectedEyesColor, selectedEyesStaff, selectedEarsColor, selectedEarsStaff,
                selectedAccessoriesStaff, selectedBackgroundColor,
                griddyToImage,
                handleBodyColorChange,
                handleBellyColorChange,
                handleSpotColorChange,
                handleEyesStaffChange,
                handleEyesColorChange,
                handleEarsStaffChange,
                handleEarsColorChange,
                handleAccessoriesStaffChange,
                handleBackgroundColorChange
            };
        },
        methods: {

        },
    };
</script>