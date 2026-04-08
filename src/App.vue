<template>
  <!-- 這是「畫面」：別人看到的樣子 -->
  <div class="container">
    <h1>GitHub 偵察機</h1>
    
    <!-- 這是一個「名字輸入框」，用來打要找的專案名稱 -->
    <input 
      v-model="searchName" 
      type="text" 
      placeholder="輸入 GitHub 專案名稱..."
    />
    
    <!-- 這是一個「送出按鈕」，按下時執行 searchGitHub -->
    <button @click="searchGitHub">搜尋</button>

    <!-- 如果正在打電話，就顯示「載入中...」 -->
    <p v-if="loading" class="loading">打電話中...</p>

    <!-- 如果搜尋完了、而且沒有找到任何結果，就顯示「查無此人」 -->
    <p v-if="!loading && repos.length === 0 && searched" class="no-result">
      查無此人
    </p>

    <!-- 如果打完電話有結果，就顯示出來 -->
    <div v-if="repos.length > 0" class="results">
      <div v-for="repo in repos" :key="repo.id" class="repo-card">
        <!-- 顯示專案主人的大頭照 -->
        <img :src="repo.owner.avatar_url" class="avatar" />
        <!-- 顯示專案的名字 -->
        <h3>{{ repo.name }}</h3>
        <!-- 顯示專案的描述 -->
        <p>{{ repo.description }}</p>
        <!-- 顯示有多少人按星星 -->
        <span>⭐ {{ repo.stargazers_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 這是「行為」：這個零件會做的事情
export default {
  data() {
    return {
      searchName: '',    // 建立一個盒子叫 searchName，用來「記住」你打的字
      repos: [],        // 建立一個盒子叫 repos，用來「裝」 GitHub 回傳的結果
      loading: false,   // 建立一個盒子叫 loading，一開始是「否」（不是正在打電話）
      searched: false   // 建立一個盒子叫 searched，用來「記住」是否搜尋過
    }
  },
  methods: {
    // 這個 function 會去問 GitHub：「有沒有人知道這個名字的專案？」
    async searchGitHub() {
      // 如果輸入框是空的，就不要浪費時間打電話
      if (!this.searchName.trim()) {
        alert('請先輸入專案名稱！')
        return
      }

      // 告訴網頁：「我要開始打電話了」（顯示 loading）
      this.loading = true

      // 用 fetch 打電話給 GitHub
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${this.searchName}`
      )

      // 把 GitHub 回傳的資料轉換成可以用的格式
      const data = await response.json()

      // 把找到的結果放進 repos 盒子裡
      this.repos = data.items || []

      // 告訴網頁：「電話打完了」（隱藏 loading）
      this.loading = false

      // 告訴網頁：「我已經搜尋過了」（用來顯示「查無此人」）
      this.searched = true
    }
  }
}
</script>

<style>
/* 這是「打扮」：讓東西看起來更好看 */

/* 讓整個頁面變成深色背景 */
body {
  background-color: #0d1117;
  color: #ffffff;
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 200px;
  border: 1px solid #30363d;
  border-radius: 6px;
  background-color: #0d1117;
  color: #ffffff;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  background-color: #238636;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2ea043;
}

.results {
  margin-top: 30px;
  text-align: left;
}

.repo-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}

.repo-card h3 {
  margin: 0 0 10px 0;
  color: #0969da;
}

.repo-card p {
  margin: 0 0 10px 0;
  color: #57606a;
}

.repo-card span {
  background: #f1f8ff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
}

.repo-card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;   /* 變成完美圓形！ */
  border: 3px solid #30363d;
  flex-shrink: 0;       /* 不要讓照片被擠壓變形 */
}

.loading {
  color: #8b949e;
  font-size: 18px;
}

.no-result {
  color: #f85149;
  font-size: 20px;
  margin-top: 30px;
}

/* 深色主題的卡片 */
.repo-card {
  background-color: #161b22;
  border: 1px solid #30363d;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}

/* 深色主題的連結文字 */
.repo-card h3 {
  color: #58a6ff;
}

/* 深色主題的描述文字 */
.repo-card p {
  color: #8b949e;
}

/* 深色主題的星星標籤 */
.repo-card span {
  background-color: #1f6feb;
  color: #ffffff;
}
</style>
