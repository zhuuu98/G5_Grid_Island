// 套件
import { createApp } from "vue";
import { createPinia } from "pinia";

// 樣式
import "./assets/scss/style.scss";

// 引入主程式
import App from "./App.vue";
import router from "./router";

import { Button, Carousel, CarouselItem, Icon, Breadcrumb, BreadcrumbItem } from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";


// 引入Vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 引入需要的FontAwesome圖標
import { library, config  } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

// 设置 FontAwesome 默认样式，如果需要的话
config.autoAddCss = false;





const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Button", Button);
app.component("Carousel", Carousel)
app.component("CarouselItem", CarouselItem)
app.component("Icon", Icon)
app.component("Breadcrumb", Breadcrumb)
app.component("BreadcrumbItem", BreadcrumbItem)

// 在全局註冊FontAwesomeIcon組件，這樣你就可以在整個應用中使用
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
