const bookings=[
 ['01','機票｜紐西蘭航空','在 Trip.com 買外站四段票，去程搭 NZ78、NZ539，回程搭 NZ584、NZ77。這是我們當次的訂票方式與班次，之後安排行程仍要重新確認航班。'],
 ['02','住宿｜官網與 Booking.com','隱士飯店 The Hermitage 直接在官網預訂，其餘住宿使用 Booking.com。每天的住宿和實際入住心得，整理在行程表裡。'],
 ['03','租車｜Ezi Car Rental','透過 Booking.com 選 Ezi Car Rental。當時覺得價格有優勢，並搭配第三方保險公司的全險；但發生事故時，要自行向第三方保險公司申請理賠，處理起來比較麻煩。保險範圍與理賠程序仍要看自己的訂單條款。'],
 ['04','體驗預訂｜Klook、KKday','遊船、冰川健行等體驗在 Klook、KKday 預訂。這趟也買了選三個景點的通票，可以先看看想參加的活動是否包含在內；冬季遇上天氣取消的機會，也讓我們體會到行程需要留彈性。'],
 ['05','網路｜eSIM 加當地電話號碼','除了行動網路，我很推薦選含當地電話號碼的方案。這趟爆胎時，需要打給租車公司聯絡道路救援，才發現能直接打電話有多重要。'],
 ['06','旅遊保險｜挑適合自己的保障','這趟有另外準備旅遊保險。依自己的活動與需求選擇，尤其有滑雪、健行等安排時，出發前先讀清楚相關保障、除外條款與理賠文件。']
];
const apps=[
 ['Google Maps 離線地圖','這趟把整個南島的離線地圖先下載好。有些路段完全沒網路，人生地不熟，手上有導航真的很重要。','https://www.google.com/maps','開啟 Google Maps'],
 ['NZTA Journey Planner','每天出發前先看路況，留意封路、交通管制及雪鏈要求，再決定怎麼走。','https://www.journeys.nzta.govt.nz/highway-conditions/west-coast','查詢官方路況'],
 ['Gaspy & ParkMate','行前看過不少人分享這兩個 App，但我們這趟從頭到尾都沒開過；實際找加油站、廁所主要靠 Google Maps。先列給有需要的人參考。','',''],
 ['MetService 天氣預報','這趟查看天氣會用 MetService，搭配路況與活動業者通知，決定當天怎麼安排。','https://www.metservice.com/','查看天氣預報']
];
export default function Preparation(){return <section id="panel-preparation" role="tabpanel" aria-labelledby="tab-preparation" className="wrap preparation">
 <div className="prep-intro"><p className="eyebrow">BEFORE THE JOURNEY</p><h2>出發前，先把這些準備好。</h2><p>從機票、租車到離線地圖，整理這趟南島自駕用過的預訂方式與工具，也記下旅途中才發現重要的小事。</p></div>
 <h3 className="prep-heading">訂票、住宿與旅途保障</h3><div className="prep-grid">{bookings.map(([n,title,body])=><article className="prep-card" key={n}><small>BEFORE YOU GO</small><h3>{title}</h3><p>{body}</p></article>)}</div>
 <section className="prep-network"><p className="eyebrow">STAY CONNECTED</p><h3>這趟用過的兩家電信</h3><div className="prep-grid"><article><h4>Spark</h4><p>男友使用這家。以這趟的使用感受來說，訊號與覆蓋表現不錯，但價格也高一些，我們把它想成紐西蘭的「中華電信」。</p></article><article><h4>One NZ</h4><p>我選這家含電話號碼的方案，使用起來網速也不錯，有點像我們心中的「台灣大哥大」。不過到了偏遠山區，像米爾福德峽灣就沒有訊號。</p></article></div><p className="fine">以上是當次旅途的個人感受，實際訊號仍會因地點、裝置與方案而不同；離線地圖最好先備妥。</p></section>
 <h3 className="prep-heading">入境文件、藥品與食品</h3><div className="prep-grid"><article className="prep-card"><small>ENTRY DOCUMENTS</small><h3>NZeTA 與 NZTD 分開準備</h3><p>NZeTA 是電子旅行授權，是否適用需依護照與旅行方式確認；NZTD 則是入境申報，兩者不是同一件事，也不能互相取代。</p><div className="prep-links"><a href="https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/" target="_blank" rel="noreferrer">NZeTA 官方資訊 ↗</a><a href="https://www.travellerdeclaration.govt.nz/" target="_blank" rel="noreferrer">NZTD 官方申報 ↗</a></div></article><article className="prep-card"><small>PACKING LIST</small><h3>藥品、食品清單先整理好</h3><p>出發前知道紐西蘭檢疫嚴格，所以有把藥品與食品整理成清單。這次海關只有口頭詢問，沒有翻行李，但這是當次經驗，不能當成不需申報的依據。</p><p>可以拍下外包裝與成分，請 ChatGPT 協助排成表格再印出來；可否攜入仍要核對官方規定，不能只靠 AI 判斷。</p><a href="https://www.customs.govt.nz/travel-to-and-from-new-zealand/prohibited-and-restricted-items" target="_blank" rel="noreferrer">查詢藥品、食品與受限制物品 ↗</a></article></div>
 <aside className="prep-medicine"><strong>含「偽麻黃鹼」的感冒藥，先查攜入條件</strong><p>這類藥品受到管制，不能直接以「一律禁止」概括。依紐西蘭衛生部資訊，在海外合法取得、供本人治療使用的藥品，可依條件隨身攜入最多一個月用量；不能替親友攜帶，並須確認申報與所需證明文件。</p><a href="https://www.health.govt.nz/regulation-legislation/medicines-control/controlled-drugs/pseudoephedrine-cold-and-flu-medicines" target="_blank" rel="noreferrer">紐西蘭衛生部：偽麻黃鹼藥品規定 ↗</a></aside>
 <h3 className="prep-heading">必備 App 與網站</h3><div className="prep-grid">{apps.map(([title,body,url,label])=><article className="prep-card" key={title}><h3>{title}</h3><p>{body}</p>{url&&<a href={url} target="_blank" rel="noreferrer">{label} ↗</a>}</article>)}</div>
 <section className="prep-luggage"><p className="eyebrow">A NOTE FROM OUR ROAD TRIP</p><h3>關於車窗與車內行李</h3><p>出發前看過車窗遭砸的分享，我們準備了黑色大垃圾袋，也帶了可以把兩個行李箱鎖在一起的鐵鍊。實際上，後座清空、後車廂行李蓋住後，從外面比較看不出來有東西，這趟鐵鍊最後沒有派上用場。</p><p>這是我們當次的做法，遮住或鎖住行李都不代表能防止失竊。旅途中我們也盡量不在外面打開行李箱，避免讓人注意到車內有行李。</p></section>
 <p className="fine prep-ending">預訂方式、電信與防竊做法為當次旅行經驗；入境及藥品說明依官方資訊整理，出發前請再確認連結中的現行規定。</p>
 </section>}
