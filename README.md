# 3D 列印參數建議

靜態網站（HTML + CSS + JavaScript），可直接放上 GitHub Pages。

## 檔案
- `index.html`：頁面結構（三大格）
- `style.css`：樣式
- `app.js`：選單連動與顯示邏輯（一般不需要改）
- `data.js`：**所有資料都在這裡**——材料、機器、建議參數、說明文字
- `images/`：機器圖片

## 怎麼更新資料
- 新增一筆參數：在 `data.js` 的 `RECORDS` 加一行，欄位跟現有的一樣。值寫 `"default"` 會顯示成「機器預設值」。
- 新增材料：`MATERIALS` 加一項，`value` 要和 `RECORDS` 的 `material` 相同。
- 新增機器：`MACHINES` 加一項並把圖片放到 `images/`。機器選單會依材料自動只列出有資料的機器。
- 第三格說明：編輯 `NOTES`，key 可以是 `"材料|機器|任務"`、`"材料|機器"`、`"材料"` 或 `"*"`（越具體越優先），內容可寫 HTML。

## 部署到 GitHub Pages
1. 把整個資料夾的檔案推到 repo 根目錄（`index.html` 要在根目錄）。
2. repo → Settings → Pages → Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾 `/ (root)`，存檔。
3. 幾分鐘後網址會是 `https://<帳號>.github.io/<repo 名稱>/`。
