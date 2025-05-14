以下是你在整合前後端時針對 People Counting (peopleflow) 所遇到的問題與處理流程紀錄：

---

## 1. 問題：PeopleFlow 畫面無法顯示線圖

### 原因：

* `PeopleFlow.js` 中使用的 fetch URL 為 `/api/people`，但你的後端已切換至 `/api/compare?dataset=people`。
* 因此回傳的資料不是圖表預期的格式，或根本沒有打到正確 API。

### 解決方式：

* 修改 fetch 路徑如下：

```js
fetch('/api/compare?dataset=people&startDate=2025-05-01&endDate=2025-05-02&from=04:00&to=06:00&ch=1')
```

* 加上 `.then(data => console.log(data))` 檢查回傳資料格式是否為：

```json
{
  "gran": "raw",
  "rows": [
    {
      "date": "2025-05-01",
      "series": [
        { "time": "04:00", "total": 12 },
        { "time": "04:05", "total": 18 }
      ]
    },
    ...
  ]
}
```

* 修改 chart.js 畫圖邏輯，從這個資料結構中抓出 `labels` 和 `datasets`

---

## 2. i18next 顯示 "pages.peopleFlow\.noData" 的 key 缺失警告

### 解決方式：

* 在 `public/locales/en.json` 中加入：

```json
{
  "pages": {
    "peopleFlow": {
      "title": "People Flow Comparison",
      "subtitle": "Compare people counting between different dates",
      "dataDisplay": "Below is the chart of people flow comparison",
      "noData": "No data available"
    }
  }
}
```

* 同樣在 `zh_TW.json` 加入中文翻譯：

```json
{
  "pages": {
    "peopleFlow": {
      "title": "人流比對分析",
      "subtitle": "比對不同日期的指定時段人流數據",
      "dataDisplay": "以下為人流統計圖表",
      "noData": "查無資料"
    }
  }
}
```

---

## 3. 前端資料夾是否應併入 backend？

* 可以，但不是必要。
* 你目前是 frontend 與 backend 平行資料夾結構，只要 proxy 設定正確（已加到 frontend/package.json 中 `"proxy": "http://localhost:3000"`），即可成功轉發 API 請求。

---

## 4. 安裝 axios 時遇到 npm 相依性錯誤

### 原因：

* 你使用的是 `react-scripts@5.0.1`，這版本的 TypeScript 相依版本為 v3 或 v4
* 但你目前安裝的是 TypeScript v5.8，產生衝突

### 解決方式：

```bash
npm install axios --legacy-peer-deps
```

---

## 5. 其他觀察

* 出現 `304 Not Modified` 不影響資料呈現，只代表快取命中。
* `Uncaught (in promise) Error: A listener indicated an asynchronous response ...` 是 Chrome DevTools 插件的背景警告，與應用邏輯無關。

---

如果你之後要整合更多頁面（如 InterestByZoneView），也建議用同樣 `/api/compare?dataset=zone` 的格式呼叫。

如果要，我可以幫你寫一個完整 `PeopleFlow.js` 版本，以及協助你整理 router 對照表。
