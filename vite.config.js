import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import svgLoader from 'vite-svg-loader'; //svg 導入


// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/chd104/g5/front/" : "/",
  build: {
    outDir: "front",
  },
  plugins: [vue(), ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // host: '192.168.0.155' //請輸入自己的IP
    // host: '192.168.5.136'
    // host: '10.1.14.209', //劉書院的TibaMe_Guest
    // host: '10.1.19.8', //劉書院的TibaMe_Guest
    // host: '192.168.0.204', //劉書院家的IP
    // host: '172.20.10.8', //劉書手機熱點的IP
    // host: '192.168.1.116', //劉書院的貓的IP
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar.php -> https://tibamef2e.com/cgd103/g1/api/bar.php
      // '/api': {
      //   target: 'https://tibamef2e.com/chd104/g5/php',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    }
  }
});
