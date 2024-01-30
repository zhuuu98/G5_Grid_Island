<template>
    <div class="componentsarea">
        <div id="skin-box">
            <h3>膚色</h3>
            <ul class="skin-options options-colors">
                <li v-for="color in skinColors" :key="color" :style="{ backgroundColor: color }"
                    @click="selectedSkinColor = color" :class="{ selected: selectedSkinColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
        <div id="abdomen-box">
            <h3>腹部</h3>
            <ul class="abdomen-options options-colors">
                <li v-for="color in abdomenColors" :key="color" :style="{ backgroundColor: color }"
                    @click="selectedSkinColor = color" :class="{ selected: selectedSkinColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
        <div id="spot-box">
            <h3>斑紋</h3>
            <ul class="spot-options options-colors">
                <li v-for="color in skinColors" :key="color" :style="{ backgroundColor: color }"
                    @click="selectedSkinColor = color" :class="{ selected: selectedSkinColor === color }">
                    {{ color }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'SkinComponent',
        setup() {
            const skinColors = ['#FBE9E7', '#FFCCBC', '#8D6E63', '#4E342E']; // 這些值代表不同的膚色
            const abdomenColors = ['#FBE9E7', '#FFCCBC', '#8D6E63', '#4E342E']; // 這些值代表不同的膚色
            const selectedSkinColor = ref(skinColors[0]); // 預設選擇第一個膚色
            const selectedAbdomenColor = ref(abdomenColors[0]); // 預設選擇第一個膚色

            return { skinColors, selectedSkinColor, abdomenColors, selectedAbdomenColor};
        },
    };
</script>
