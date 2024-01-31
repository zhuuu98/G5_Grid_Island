<template>
    <div class="componentsarea">
        <div id="spot-box">
            <h3>軀幹</h3>
            <ul class="body-options options-colors">
                <li v-for="bodyColor in bodyColors" :key="bodyColor" :style="{ backgroundColor: bodyColor }"
                    @click="handleBodyColorChange(bodyColor)" :class="{ selected: selectedBodyColor === bodyColor }">
                </li>
            </ul>
        </div>
    </div>
    <div class="componentsarea">
        <div id="spot-box">
            <h3>斑紋</h3>
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

    export default {
        name: 'SkinComponent',
        props: {
            spotColor: String
        },
        setup(props, context) {
            // 使用reactive代替ref，创建一个反应性的state对象
            const spotState = reactive({
                selectedSpotColor: props.currentColor
            });
            const bodyState = reactive({
                selectedBodyColor: props.currentColor
            });

            const spotColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9'];
            const bodyColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9'];

            // 更新選中的颜色
            const handleSpotColorChange = (spotColor) => {
                context.emit('spot-color-selected', spotColor);
                console.log("事件已發射，斑紋顏色：", spotColor);
            };
            const handleBodyColorChange = (bodyColor) => {
                console.log(bodyColor);
                context.emit('body-color-selected', bodyColor);
                console.log("事件已發射，軀幹顏色：", bodyColor);
            };

            return {
                spotColors, selectedSpotColor: spotState.selectedSpotColor, handleSpotColorChange,
                bodyColors, selectedBodyColor: bodyState.selectedBodyColor, handleBodyColorChange,


            };
        },
        
    };
</script>