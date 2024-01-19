// 套件
import { createApp } from "vue";
import { createPinia } from "pinia";

// 樣式
import "./assets/scss/style.scss";

// 引入主程式
import App from "./App.vue";
import router from "./router";

import { Button, Carousel, CarouselItem, Icon } from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

// 引入需要的FontAwesome圖標
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// 在FontAwesome庫中添加圖標
library.add(faCoffee);

// 引入Vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Button", Button);
app.component("Carousel", Carousel)
app.component("CarouselItem", CarouselItem)
app.component("Icon", Icon)

// 在全局註冊FontAwesomeIcon組件，這樣你就可以在整個應用中使用
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
