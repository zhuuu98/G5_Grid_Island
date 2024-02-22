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

                </div>
                <div class="btnbox">
                    <button id="reset" @click="toggleZone" v-on:touchstart="">
                        隨機選擇
                    </button>
                    <button id="random" @click="toggleZone" v-on:touchstart="">
                        重置
                    </button>
                    <button id="setphoto" @click="toggleZone" v-on:touchstart="">
                        確認送出
                    </button>
                </div>
            </div>
            <!-- 選項區，含頁籤 -->
            <div class="stylearea">
                <div class="tabs">
                    <button v-for="tab in tabs" :key="tab.name" :class="{ active: currentTab === tab.component }"
                        @click="selectTab(tab.component)" v-on:touchstart="">
                        {{ tab.title }}
                    </button>
                </div>
                <!-- 頁籤內容 -->
                <div class="tab-content">
                    <component :is="currentTab" :default-body-color="selectedBodyColor"
                        :default-belly-color="selectedBellyColor" :default-spot-color="selectedSpotColor"
                        :default-eyes-color="selectedEyesColor" :default-eyes-staff="selectedEyesStaff"
                        :default-ears-color="selectedEarsColor" :default-ears-staff="selectedEarsStaff"
                        :default-accessories-staff="selectedAccessoriesStaff"
                        :default-background-color="selectedBackgroundColor" @body-color-selected="handleBodyColorChange"
                        @belly-color-selected="handleBellyColorChange" @spot-color-selected="handleSpotColorChange"
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
                <span>最棒的Griddy粉墨登場！</span>
                <!-- <img v-if="griddyImage" :src="griddyImage" alt="Captured Griddy Content"> -->
                <div class="finalbtnbox">
                    <button id="setPicture" @click="setProfilePicture">設為大頭貼</button>
                    <button id="goback" @click="toggleZone">回上頁</button>
                    <button id="download" @click="griddyToImage">下載圖片</button>
                </div>
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
    import { unifiedColors } from "@/policy/color.js"
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
        data() {
            return {
                tabs: [
                    { name: 'tab1', title: '膚色', component: 'skinComponent' },
                    { name: 'tab2', title: '眼睛', component: 'eyesComponent' },
                    { name: 'tab3', title: '耳朵', component: 'earsComponent' },
                    { name: 'tab4', title: '配件', component: 'accessoriesComponent' },
                    { name: 'tab5', title: '背景', component: 'backgroundComponent' },
                ],
                currentTab: 'skinComponent', // 使用字符串替代 ref
                selectedBodyColor: unifiedColors[0],
                selectedBellyColor: unifiedColors[3],
                selectedSpotColor: unifiedColors[8],
                selectedEyesStaff: eyesStaffs[0],
                selectedEyesColor: unifiedColors[8],
                selectedEarsStaff: earsStaffs[0],
                selectedEarsColor: unifiedColors[0],
                selectedAccessoriesStaff: accessoriesStaffs[0],
                selectedBackgroundColor: unifiedColors[18],
                currentZone: 'style-play-zone',
                griddyImage: null, // 存储转换后的图像
            };
        },
        methods: {
            selectTab(componentName) {
                this.currentTab = componentName;  // 更新當前標籤頁名稱
                console.log('標籤選擇:', componentName);
                // localStorage.removeItem('userId');
            },
            toggleZone() {
                this.currentZone = this.currentZone === 'style-play-zone' ? 'show-zone' : 'style-play-zone';
            },
            griddyToImage() {
                const elementToCapture = document.getElementById('finalimagebox');
                const scale = 4; // 設置畫布分辨率增加的倍數，例如 2 表示 2x 分辨率

                const options = {
                    scale: scale,
                    width: elementToCapture.offsetWidth,
                    height: elementToCapture.offsetHeight,
                    useCORS: true // 允許加載跨域圖片
                };

                html2canvas(elementToCapture, options).then(canvas => {
                    const downloadLink = document.createElement('a');
                    const date = new Date();
                    const timestamp = date.getFullYear().toString() +
                        (date.getMonth() + 1).toString().padStart(2, '0') +
                        date.getDate().toString().padStart(2, '0') + '_' +
                        date.getHours().toString().padStart(2, '0') +
                        date.getMinutes().toString().padStart(2, '0') +
                        date.getSeconds().toString().padStart(2, '0');
                    const filename = `OMG${timestamp}.png`;

                    downloadLink.href = canvas.toDataURL('image/png');
                    downloadLink.download = filename; // 圖片文件名

                    // 模擬點擊鏈接以觸發下載
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                });
            },
            setProfilePicture() {
                const elementToCapture = document.getElementById('finalimagebox');
                html2canvas(elementToCapture, { useCORS: true }).then(canvas => {
                    const imageData = canvas.toDataURL('image/png');
                    const userDataStr = localStorage.getItem('userDataStr'); // 从localStorage获取会员数据字符串

                    if (!userDataStr) {
                        alert('請先登入。'); // 如果userDataStr不存在，彈出提示
                        return; // 關鍵：提早返回以防止繼續向下運行
                    }

                    const userData = JSON.parse(userDataStr); // 解析成JSON对象

                    // 避免當userData或userData.mem_id為null時嘗試訪問屬性
                    if (!userData || !userData.mem_id) {
                        alert('請先登入。'); // 進ㄧ步檢查，彈出提示
                        return; // 關鍵：提早返回
                    }

                    const memId = userData.mem_id; // 從用戶資訊中解構mem_id

                    let formData = new FormData();
                    formData.append('profile_pic', imageData); // 将base64图片数据转换成Blob并添加
                    formData.append('user_id', memId); // 添加使用者ID

                    for (let [key, value] of formData.entries()) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log(userDataStr);
                    console.log(userData);


                    this.uploadProfilePic(formData); // 调用下面定义的方法来处理上传
                });

            },
            // 這個函數用來上傳圖片到網站上
            uploadProfilePic(formData) {
                // 使用fetch發送請求到指定的網址，並上傳一些資料
                fetch(`${import.meta.env.VITE_API_URL}/uploadProfilePic.php`, {
                    method: 'POST', // 表示這是一個"POST"請求，用來上傳資料
                    body: formData, // 把準備好的圖片資料發送出去
                })
                    .then(response => {
                        // .then()是用來處理伺服器回應的。當伺服器回應後，這裡的代碼就會執行。

                        if (!response.ok) {
                            // response.ok是一個布林值，如果伺服器回應的狀態碼是200-299之間，它就是true，表示"一切OK"
                            throw new Error('網絡響應非OK'); // 如果不是OK，就報錯
                        }
                        return response.json(); // 如果一切OK，就把伺服器回應的內容轉換成JavaScript對象，方便我們使用
                    })
                    .then(data => {
                        // "data" 是上一步轉換成JavaScript物件的伺服器回應內容。
                        // "data.error" 不是原生語法，而是伺服器設計者決定的一種方式，用來告訴我們請求是否在伺服器那邊處理成功。
                        if (data.error) { // 如果有錯誤
                            console.error('上傳失敗:', data.msg); // "console.error" 會在控制台顯示錯誤訊息。
                        } else { // 如果沒有錯誤
                            console.log('上傳成功:', data.msg); // "console.log" 會在控制台顯示成功訊息。
                            // "console.error" 和 "console.log" 都會在控制台顯示訊息，但"console.error" 通常用於錯誤訊息，會以紅色顯示，更容易讓開發者注意到錯誤。
                        }
                        
                    })
                    .catch(error => { // 如果在發送請求或處理回應的過程中出現任何錯誤
                        console.error('上傳錯誤:', error); // 就在控制台顯示出錯的訊息
                    });
            },


            handleBodyColorChange(bodyColor) {
                this.selectedBodyColor = bodyColor;
                console.log("被選擇的軀幹顏色：", this.selectedBodyColor);
            },
            handleBellyColorChange(bellyColor) {
                this.selectedBellyColor = bellyColor;
                console.log("被選擇的肚肚顏色：", this.selectedBellyColor);
            },
            handleSpotColorChange(spotColor) {
                this.selectedSpotColor = spotColor;
                console.log("被選擇的斑點顏色：", this.selectedSpotColor);
            },
            handleEyesStaffChange(eyesStaff) {
                this.selectedEyesStaff = eyesStaff;
                console.log("被選擇的眼鏡零件：", this.selectedEyesStaff);
            },
            handleEyesColorChange(eyesColor) {
                this.selectedEyesColor = eyesColor;
                console.log("被選擇的眼鏡顏色：", this.selectedEyesColor);
            },
            handleEarsStaffChange(earsStaff) {
                this.selectedEarsStaff = earsStaff;
                console.log("被選擇的耳朵零件：", this.selectedEarsStaff);
            },
            handleEarsColorChange(earsColor) {
                this.selectedEarsColor = earsColor;
                console.log("被選擇的耳朵顏色：", this.selectedEarsColor);
            },
            handleAccessoriesStaffChange(accessoriesStaff) {
                this.selectedAccessoriesStaff = accessoriesStaff;
                console.log("被選擇的配件零件：", this.selectedAccessoriesStaff);
            },
            handleBackgroundColorChange(backgroundColor) {
                this.selectedBackgroundColor = backgroundColor;
                console.log("被選擇的背景顏色：", this.selectedBackgroundColor);
            },
        }
    };
</script>