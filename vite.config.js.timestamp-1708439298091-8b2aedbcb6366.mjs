// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/T14%20Gen%203/Desktop/%E4%B8%8A%E8%AA%B2%E6%AA%94%E6%A1%88/G5_Grid_Island/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/T14%20Gen%203/Desktop/%E4%B8%8A%E8%AA%B2%E6%AA%94%E6%A1%88/G5_Grid_Island/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/T14%20Gen%203/Desktop/%E4%B8%8A%E8%AA%B2%E6%AA%94%E6%A1%88/G5_Grid_Island/vite.config.js";
var vite_config_default = defineConfig({
  base: process.env.NODE_ENV === "production" ? "/chd104/g5/front/" : "/",
  build: {
    outDir: "front"
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUMTQgR2VuIDNcXFxcRGVza3RvcFxcXFxcdTRFMEFcdThBQjJcdTZBOTRcdTY4NDhcXFxcRzVfR3JpZF9Jc2xhbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFQxNCBHZW4gM1xcXFxEZXNrdG9wXFxcXFx1NEUwQVx1OEFCMlx1NkE5NFx1Njg0OFxcXFxHNV9HcmlkX0lzbGFuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVDE0JTIwR2VuJTIwMy9EZXNrdG9wLyVFNCVCOCU4QSVFOCVBQSVCMiVFNiVBQSU5NCVFNiVBMSU4OC9HNV9HcmlkX0lzbGFuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbi8vIGltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJzsgLy9zdmcgXHU1QzBFXHU1MTY1XHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIi9jaGQxMDQvZzUvZnJvbnQvXCIgOiBcIi9cIixcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiBcImZyb250XCIsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbdnVlKCksIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgLy8gaG9zdDogJzE5Mi4xNjguMC4xNTUnIC8vXHU4QUNCXHU4RjM4XHU1MTY1XHU4MUVBXHU1REYxXHU3Njg0SVBcclxuICAgIC8vIGhvc3Q6ICcxOTIuMTY4LjUuMTM2J1xyXG4gICAgLy8gaG9zdDogJzEwLjEuMTQuMjA5JywgLy9cdTUyODlcdTY2RjhcdTk2NjJcdTc2ODRUaWJhTWVfR3Vlc3RcclxuICAgIC8vIGhvc3Q6ICcxMC4xLjE5LjgnLCAvL1x1NTI4OVx1NjZGOFx1OTY2Mlx1NzY4NFRpYmFNZV9HdWVzdFxyXG4gICAgLy8gaG9zdDogJzE5Mi4xNjguMC4yMDQnLCAvL1x1NTI4OVx1NjZGOFx1OTY2Mlx1NUJCNlx1NzY4NElQXHJcbiAgICAvLyBob3N0OiAnMTcyLjIwLjEwLjgnLCAvL1x1NTI4OVx1NjZGOFx1NjI0Qlx1NkE1Rlx1NzFCMVx1OUVERVx1NzY4NElQXHJcbiAgICAvLyBob3N0OiAnMTkyLjE2OC4xLjExNicsIC8vXHU1Mjg5XHU2NkY4XHU5NjYyXHU3Njg0XHU4QzkzXHU3Njg0SVBcclxuICAgIHByb3h5OiB7XHJcbiAgICAgIC8vIFx1NUUyNlx1OTAwOVx1OTg3OVx1NTE5OVx1NkNENVx1RkYxQWh0dHA6Ly9sb2NhbGhvc3Q6NTE3My9hcGkvYmFyLnBocCAtPiBodHRwczovL3RpYmFtZWYyZS5jb20vY2dkMTAzL2cxL2FwaS9iYXIucGhwXHJcbiAgICAgIC8vICcvYXBpJzoge1xyXG4gICAgICAvLyAgIHRhcmdldDogJ2h0dHBzOi8vdGliYW1lZjJlLmNvbS9jaGQxMDQvZzUvcGhwJyxcclxuICAgICAgLy8gICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIC8vICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcclxuICAgICAgLy8gfSxcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRXLFNBQVMsZUFBZSxXQUFXO0FBRS9ZLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUgrTCxJQUFNLDJDQUEyQztBQVFoUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLFFBQVEsSUFBSSxhQUFhLGVBQWUsc0JBQXNCO0FBQUEsRUFDcEUsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUc7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPUDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
