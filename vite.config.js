import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/chd104/g5/front/" : "/",
  build: {
    outDir: "front",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // host: '192.168.0.155' //請輸入自己的IP
    // host: '192.168.5.136'
    host: '10.1.19.8' //劉書院的IP
  }
});
