# GitHub Scout (GitHub 偵察機) - 開發指南

## 專案身份

- 這是一個 **Vue 3** 網頁應用，用於搜尋和瀏覽 GitHub 倉庫
- 目標用戶：初學者（只懂 HTML）

## 重要約定

### 說話風格（對使用者解釋時）
- **禁止使用** Vue 專業術語：`ref`、`reactive`、`lifecycle hooks`、`computed`、`watch`、`composable`、等
- **必須使用** 生活比喻：
  - `ref` → 「盒子」（裝資料的盒子）
  - `reactive` → 「組合包」（多個相關的盒子）
  - `computed` → 「答案機」（自動計算答案）
  - `watch` → 「觀察員」（觀察資料變化）
  - `onMounted` → 「一開始就做」
  - `onUnmounted` → 「離開時做」
  - `lifecycle` → 「生命週期」→「流程」或「時間點」

### 程式碼寫作規範
1. **每次只寫一小段**（約 10-20 行）
2. **每行程式碼旁邊加上白話文註解**
3. 範例格式：
```javascript
const name = ref('小明')  // 建立一個叫 name 的盒子，裡面放 '小明'
```
4. 避免一次寫完整個檔案，分次完成讓使用者能跟上

## 技術堆疊

- **框架**: Vue 3 + Vite
- **語言**: JavaScript（不使用 TypeScript）
- **CSS**: 普通 CSS（不使用 SCSS）
- **API**: GitHub REST API

## 開發流程

1. `npm install` - 安裝工具
2. `npm run dev` - 啟動開發伺服器
3. `npm run build` - 打包專案

## 專案結構

```
github-scout/
├── index.html          # 網頁的入口（就像 HTML 的 <body>）
├── package.json        # 專案設定檔
├── vite.config.js      # Vite 設定
├── src/
│   ├── main.js         # 程式的入口點
│   ├── App.vue         # 主要的「畫布」
│   └── assets/         # 放圖片、樣式的地方
└── public/             # 放公開檔案的地方
```

## Vue 元件說明（用白話文）

在 Vue 裡，我們用 `.vue` 檔案來做網頁的每個「零件」：

- `<template>` → 「這是畫面」（HTML 的地方）
- `<script>` → 「這是行為」（JavaScript 的地方）
- `<style>` → 「這是打扮」（CSS 的地方）

## 與使用者互動的原則

1. **解釋時**：用生活比喻，不要用術語
2. **寫程式時**：分小段、加上白話文註解
3. **確認理解**：每完成一個小功能，問使用者「懂了嗎？」或「有問題嗎？」
4. **錯誤處理**：如果出錯，用簡單的話解釋問題

## GitHub API 使用

- 使用 GitHub REST API v3
- 不需要認證即可使用（有 rate limit）
- 重要端點：
  - 搜尋倉庫：`GET /search/repositories?q=關鍵字`
  - 取得倉庫詳情：`GET /repos/擁有者/倉庫名`

## VS Code 建議擴充套件

- Vue - Official (volar)
- ESLint
- Prettier
