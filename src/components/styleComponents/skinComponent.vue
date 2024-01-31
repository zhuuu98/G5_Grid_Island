<template>
    <div class="componentsarea">
        <div id="skin-box">
            <h3>膚色</h3>
            <ul class="skin-options options-colors">
                <li v-for="color in skinColors" :key="color" :style="{ backgroundColor: color }"
                    @click="updateSkinColor(color)" :class="{ selected: selectedSkinColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
        <div id="abdomen-box">
            <h3>腹部</h3>
            <ul class="abdomen-options options-colors">
                <li v-for="color in abdomenColors" :key="color" :style="{ backgroundColor: color }"
                    @click="selectedAbdomenColor = color" :class="{ selected: selectedAbdomenColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
        <div id="spot-box">
            <h3>斑紋</h3>
            <ul class="spot-options options-colors">
                <li v-for="color in spotColors" :key="color" :style="{ backgroundColor: color }"
                    @click="$emit('changeColor', color)" :class="{ selected: _selectedSpotColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref, computed } from 'vue';

    export default {
        name: 'SkinComponent',
        props: {
            currentColor: String
        },
        setup(props) {
            const _selectedSpotColor = computed(() => {
                return props.currentColor
            })
            const skinColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9']; // 這些值代表不同的膚色
            const selectedSkinColor = ref(skinColors[0]); // 預設選擇第一個膚色
            const abdomenColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9']; // 這些值代表不同的腹部
            const selectedAbdomenColor = ref(abdomenColors[3]); // 預設選擇第一個腹部顏色
            const spotColors = ['#d2eb86', '#1ca88e', '#fbb466', '#f9eaa7', '#f7f7f7', '#fb7676', '#ffdcdc', '#9dd0e1', '#a9aaff', '#c088f9']; // 這些值代表不同的斑紋
            // const selectedSpotColor = ref(spotColors[9]); // 預設選擇第一個斑紋顏色
            const updateSkinColor = (newColor) => {
                selectedSkinColor.value = newColor;
                console.log("Selected Color: ", newColor);
                // 發送事件，帶上選中的顏色
                // 注意: 在 setup() 中使用 this.$emit 是不合適的，應該返回一個提供給模板的方法
            };
            return {
                skinColors, selectedSkinColor, updateSkinColor, // 將此方法提供給模板
                abdomenColors, selectedAbdomenColor,
                spotColors, _selectedSpotColor

            };
        },

    };
</script>