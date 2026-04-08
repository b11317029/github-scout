import { defineConfig } from 'vite'           // 載入 Vite 的設定工具
import vue from '@vitejs/plugin-vue'          // 載入 Vue 外掛，讓 Vite 看得懂 .vue 檔案

export default defineConfig({                // 匯出 Vite 的設定
  plugins: [vue()]                           // 啟用 Vue 外掛
})
