# 向南，去紐西蘭｜南島 12 天旅記

繁體中文的紐西蘭冬季自駕分享網站，包含每日行程、旅行花費、行前準備與旅途心得。

網站連結：[向南，去紐西蘭｜南島 12 天旅記](https://rosieww.github.io/new-zealand-travel-12days-web/)

所有網站程式位於此 repository 根目錄，由同一個 Git repository 統一管理。

## 本機預覽

需要 Node.js 22.13 以上版本。

```powershell
cd D:\new-zealand-travel-12days-web
npm ci
npm run dev
```

開啟終端機顯示的本機網址。修改並儲存後，預覽會自動更新。

## 修改內容

| 檔案 | 內容 |
| --- | --- |
| `app/travel-page.tsx` | 首頁、每日摘要、參考行程、花費說明及頁尾 |
| `app/timeline.json` | 每日活動與詳細敘述 |
| `app/expenses.json` | 花費項目與原幣金額 |
| `app/preparation.tsx` | 行前準備 |
| `app/roadside-story.tsx` | 爆胎與道路救援心得 |
| `app/globals.css` | 配色、字體與排版 |

## 圖片

首頁使用 `public/hero-glacier.webp`；每日照片使用 `public/daily/day-01.webp` 至 `day-12.webp`。

原始相機照片留在本機並由 `.gitignore` 排除，避免連同拍攝者、拍攝時間及相機序號等中繼資料公開。網站只需要已整理的 WebP 圖片。

## 公開與發布

原始記帳文件、舊發布封存檔、一次性修改程式及本機開發快取不納入 repository。

推送至 `main` 後，GitHub Actions 會自動建置並部署至 GitHub Pages。手動建置可執行 `npm run build:pages`，輸出位於 `dist/pages`；僅打包網站需要的 WebP 圖片與圖示，不複製原始相機照片。

原本的 Sites 網站獨立發布，不受 GitHub Pages 部署影響。
