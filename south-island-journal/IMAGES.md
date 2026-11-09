# 更換網站圖片

圖片放在本專案的 `public` 資料夾。

目前使用（皆為網站需要的輕量圖片）：

| 檔名 | 顯示位置 |
| --- | --- |
| `hero-glacier.webp` | 首頁大圖 |
| `daily/day-01.webp` 至 `daily/day-12.webp` | 對應 Day 1 至 Day 12 每日行程 |

直接用同樣檔名與副檔名覆蓋圖片，即可沿用目前設定。圖片更新後需要重新發布，線上網站才會更新。

若使用新檔名，請同步修改 `app/travel-page.tsx` 中的圖片路徑。例如 `public/lake.webp` 在程式中寫成 `/lake.webp`。

原始 JPG、JPEG 與 DNG 照片只留在本機，已由根目錄 `.gitignore` 排除。公開前應去除圖片中繼資料，並確認願意分享照片中的人物及其他可辨識內容。

建議使用清晰的 JPG 或 WebP，檔案盡量小於 1 MB；首頁大圖建議使用橫式照片。
