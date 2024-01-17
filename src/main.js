// 套件
import { createApp } from "vue";
import { createPinia } from "pinia";

// 樣式
import "./assets/main.css";

// 引入主程式
import App from "./App.vue";
import router from "./router";

import { Button, Carousel, CarouselItem } from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Button", Button);

app.mount("#app");
