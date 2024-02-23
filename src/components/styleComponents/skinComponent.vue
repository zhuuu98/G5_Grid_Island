<template>
    <div class="componentsarea">
        <div id="body-colors-box" class="colors-box">
            <h4>軀幹</h4>
            <ul class="body-options options-colors">
                <li v-for="bodyColor in bodyColors" :key="bodyColor" :style="{ backgroundColor: bodyColor }"
                    @click="handleBodyColorChange(bodyColor)" :class="{ active: selectedBodyColor === bodyColor }">
                </li>
            </ul>
        </div>
        <div id="belly-colors-box" class="colors-box">
            <h4>肚肚</h4>
            <ul class="belly-options options-colors">
                <li v-for="bellyColor in bellyColors" :key="bellyColor" :style="{ backgroundColor: bellyColor }"
                    @click="handleBellyColorChange(bellyColor)" :class="{ active: selectedBellyColor === bellyColor }">
                </li>
            </ul>
        </div>
        <div id="spot-colors-box" class="colors-box">
            <h4>斑點</h4>
            <ul class="spot-options options-colors">
                <li v-for="spotColor in spotColors" :key="spotColor" :style="{ backgroundColor: spotColor }"
                    @click="handleSpotColorChange(spotColor)" :class="{ active: selectedSpotColor === spotColor }">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { unifiedColors } from "@/policy/color.js";

    export default {
        name: 'SkinComponent',
        props: {
            currentTab: String, // 假設currentColor是一個字符串類型的prop
            defaultBodyColor: String,
            defaultBellyColor: String,
            defaultSpotColor: String,
        },
        data() {
            return {
                bodyColors: unifiedColors,
                bellyColors: unifiedColors,
                spotColors: unifiedColors,
                selectedBodyColor: this.defaultBodyColor, // 初始化時從props接收的值
                selectedBellyColor: this.defaultBellyColor,
                selectedSpotColor: this.defaultSpotColor,
            };
        },
        methods: {
            handleBodyColorChange(bodyColor) {
                this.selectedBodyColor = bodyColor; // 更新選中的顏色
                this.$emit('body-color-selected', bodyColor);
                console.log("事件已發射，軀幹顏色：", bodyColor);
            },
            handleBellyColorChange(bellyColor) {
                this.$emit('belly-color-selected', bellyColor);
                this.selectedBellyColor = bellyColor; // 更新選中的顏色
                console.log("事件已發射，肚肚顏色：", bellyColor);
            },
            handleSpotColorChange(spotColor) {
                this.$emit('spot-color-selected', spotColor);
                this.selectedSpotColor = spotColor; // 更新選中的顏色
                console.log("事件已發射，斑點顏色：", spotColor);
            },
        },
        watch: {
            defaultBodyColor(newVal) {
                this.selectedBodyColor = newVal;
            },
            defaultBellyColor(newVal) {
                this.selectedBellyColor = newVal;
            },
            defaultSpotColor(newVal) {
                this.selectedSpotColor = newVal;
            },
        }

    };
</script>