<template>
    <div class="componentsarea">
        <div id="body-box">
            <h3>軀幹</h3>
            <ul class="body-options options-colors">
                <li v-for="bodyColor in bodyColors" :key="bodyColor" :style="{ backgroundColor: bodyColor }"
                    @click="handleBodyColorChange(bodyColor)" :class="{ selected: selectedBodyColor === bodyColor }">
                </li>
            </ul>
        </div>
        <div id="belly-box">
            <h3>肚肚</h3>
            <ul class="belly-options options-colors">
                <li v-for="bellyColor in bellyColors" :key="bellyColor" :style="{ backgroundColor: bellyColor }"
                    @click="handleBellyColorChange(bellyColor)" :class="{ selected: selectedBellyColor === bellyColor }">
                </li>
            </ul>
        </div>
        <div id="spot-box">
            <h3>斑點</h3>
            <ul class="spot-options options-colors">
                <li v-for="spotColor in spotColors" :key="spotColor" :style="{ backgroundColor: spotColor }"
                    @click="handleSpotColorChange(spotColor)" :class="{ selected: selectedSpotColor === spotColor }">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue';
    import { unifiedColors } from "@/policy/color.js";

    export default {
        name: 'SkinComponent',
        setup(props, context) {
            // 使用reactive代替ref，创建一个反应性的state对象
            const bodyState = reactive({
                selectedBodyColor: props.currentColor
            });
            const bellyState = reactive({
                selectedBellyColor: props.currentColor
            });
            const spotState = reactive({
                selectedSpotColor: props.currentColor
            });
            const bodyColors = unifiedColors;
            const bellyColors = unifiedColors;
            const spotColors = unifiedColors;

            // 更新選中的颜色
            const handleBodyColorChange = (bodyColor) => {
                context.emit('body-color-selected', bodyColor);
                console.log("事件已發射，軀幹顏色：", bodyColor);
            };
            const handleBellyColorChange = (bellyColor) => {
                context.emit('belly-color-selected', bellyColor);
                console.log("事件已發射，肚肚顏色：", bellyColor);
            };
            const handleSpotColorChange = (spotColor) => {
                context.emit('spot-color-selected', spotColor);
                console.log("事件已發射，斑點顏色：", spotColor);
            };

            return {
                bodyColors, selectedBodyColor: bodyState.selectedBodyColor, handleBodyColorChange,
                bellyColors, selectedBellyColor: bellyState.selectedBellyColor, handleBellyColorChange,
                spotColors, selectedSpotColor: spotState.selectedSpotColor, handleSpotColorChange,


            };
        },
        
    };
</script>