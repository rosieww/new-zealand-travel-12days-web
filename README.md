# 向南，去紐西蘭｜南島 12 天旅記

繁體中文的紐西蘭冬季自駕分享網站，包含每日行程、旅行花費、行前準備與旅途心得。

所有網站程式由此 repository 統一管理。`south-island-journal/` 是一般專案資料夾，不是另一個 Git repository。

## 本機預覽

需要 Node.js 22.13 以上版本。

```powershell
cd south-island-journal
npm ci
npm run dev
```

開啟終端機顯示的本機網址。修改並儲存後，預覽會自動更新。

## 修改內容

| 檔案 | 內容 |
| --- | --- |
| `south-island-journal/app/travel-page.tsx` | 首頁、每日摘要、參考行程、花費說明及頁尾 |
| `south-island-journal/app/timeline.json` | 每日活動與詳細敘述 |
| `south-island-journal/app/expenses.json` | 花費項目與原幣金額 |
| `south-island-journal/app/preparation.tsx` | 行前準備 |
| `south-island-journal/app/roadside-story.tsx` | 爆胎與道路救援心得 |
| `south-island-journal/app/globals.css` | 配色、字體與排版 |

## 圖片

首頁使用 `south-island-journal/public/hero-glacier.webp`；每日照片使用 `south-island-journal/public/daily/day-01.webp` 至 `day-12.webp`。

原始相機照片留在本機並由 `.gitignore` 排除，避免連同拍攝者、拍攝時間及相機序號等中繼資料公開。網站只需要已整理的 WebP 圖片。

## 公開與發布

原始記帳文件、舊發布封存檔、一次性修改程式及本機開發快取不納入 repository。線上網站的發布與 GitHub 原始碼推送是兩個步驟；更新 GitHub 不會自動更新既有 Sites 網站。
