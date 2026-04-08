import { createApp } from 'vue'    // 從 Vue 家族引進「創建應用」的工具
import App from './App.vue'         // 引進主要的零件：App.vue

createApp(App).mount('#app')        // 把 App 這個零件，放進 id="app" 的盒子裡
