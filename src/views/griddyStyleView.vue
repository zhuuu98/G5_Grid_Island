<template>
    <div id="style-body">
        <!-- 預覽區組件，顯示選擇的零件以及操作按鈕 -->
         <!-- 選項區，含頁籤 -->
        <div class="stylearea">
          <div class="tabs">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              :class="{ active: currentTab === tab.component }"
              @click="currentTab = tab.component">
              {{ tab.title }}
            </button>
          </div>
          <div class="tab-content">
            <component :is="currentTab"></component>
          </div>
        </div>
    </div>
  </template>
  
  <script>
    import { ref } from 'vue';
    import SkinComponent from '../components/styleComponents/skinComponent.vue';
    import EyesComponent from '../components/styleComponents/eyesComponent.vue';
    import AntennaComponent from '../components/styleComponents/antennaComponent.vue';
    import AccessoriesComponent from '../components/styleComponents/accessoriesComponent.vue';
    import BackgroundComponent from '../components/styleComponents/backgroundComponent.vue';
    
    export default {
      components: {
        SkinComponent,
        EyesComponent,
        AntennaComponent,
        AccessoriesComponent,
        BackgroundComponent
      },
      setup() {
        const tabs = [
          { name: 'tab1', title: '膚色', component: SkinComponent },
          { name: 'tab2', title: '眼睛', component: EyesComponent },
          { name: 'tab3', title: '耳朵', component: AntennaComponent },
          { name: 'tab4', title: '配件', component: AccessoriesComponent },
          { name: 'tab5', title: '背景', component: BackgroundComponent },
        ];
        const currentTab = ref(tabs[0].component);  // 設置初始顯示的組件
    
        return { tabs, currentTab };
      }
    };
    </script>

  
  