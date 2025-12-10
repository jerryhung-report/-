import { Question } from './types';

export const QUESTIONS: Question[] = [
  // I. 價值觀與生活節奏
  {
    id: 1,
    category: "I. 價值觀與生活節奏",
    text: "如果明天不用到果園種樹，你夢想中的一天會怎麼過？",
    options: [
      { label: "A", text: "睡到宇宙毀滅，起來就是美食" },
      { label: "B", text: "到處走走，展開旅遊" },
      { label: "C", text: "專心變強，把技能補滿" },
      { label: "D", text: "多花時間陪家人" }
    ]
  },
  {
    id: 2,
    category: "I. 價值觀與生活節奏",
    text: "你最願意花錢投資哪件事？ (可複選)",
    options: [
      { label: "A", text: "旅行" },
      { label: "B", text: "健康" },
      { label: "C", text: "孩子" },
      { label: "D", text: "朋友家人" }
    ]
  },
  {
    id: 3,
    category: "I. 價值觀與生活節奏",
    text: "你目前的存款狀態，感覺像哪一種？打開目前糧倉目前的樣子",
    options: [
      { label: "A", text: "不工作就沒錢花" },
      { label: "B", text: "可撐一小段時間" },
      { label: "C", text: "有存糧，可撐一兩年" },
      { label: "D", text: "這輩子夠用" }
    ]
  },
  {
    id: 4,
    category: "I. 價值觀與生活節奏",
    text: "每個月的錢，哪個項目是你「絕對不准動」的結界？",
    options: [
      { label: "A", text: "快樂美食" },
      { label: "B", text: "玩樂旅行" },
      { label: "C", text: "進修課程" },
      { label: "D", text: "育兒顧家" }
    ]
  },
  {
    id: 5,
    category: "I. 價值觀與生活節奏",
    text: "當你從搖錢樹收穫金幣時，腦中第一個想法是？",
    options: [
      { label: "A", text: "先還清債務" },
      { label: "B", text: "犒賞自己，買爆" },
      { label: "C", text: "再把金幣種下去" },
      { label: "D", text: "先放著，等一個宇宙靈感" }
    ]
  },
  {
    id: 6,
    category: "I. 價值觀與生活節奏",
    text: "在規劃旅遊行程時，你的風格偏向？",
    options: [
      { label: "A", text: "細節控，按表操課" },
      { label: "B", text: "大方向就好，保留彈性" },
      { label: "C", text: "隨興走，走到哪玩到哪" },
      { label: "D", text: "什麼都不查，到了當地再說" }
    ]
  },
  {
    id: 7,
    category: "I. 價值觀與生活節奏",
    text: "其他農夫都有幫他們的搖錢樹買保險，那你的想法是?",
    options: [
      { label: "A", text: "裝個最基本的防蟲網就好" },
      { label: "B", text: "全果園搭滿溫室，滴水不漏" },
      { label: "C", text: "只顧樹幹和樹根，其他隨意" },
      { label: "D", text: "我的樹是無敵神木，不需要防護" }
    ]
  },
  {
    id: 8,
    category: "I. 價值觀與生活節奏",
    text: "搖錢樹能長出金幣，你心裡對「金幣自由」的定義是？",
    options: [
      { label: "A", text: "樹上的錢會自己飛下來養我" },
      { label: "B", text: "顧樹只是興趣，可以選擇性工作" },
      { label: "C", text: "樹上的錢讓我買東西不用看標籤" },
      { label: "D", text: "這棵樹讓我能罩住全家人" }
    ]
  },
  // II. 樹種選擇與風險偏好
  {
    id: 9,
    category: "II. 樹種選擇與風險偏好",
    text: "你在宇宙農場看到喜歡的搖錢樹在特價，你會？",
    options: [
      { label: "A", text: "立刻搶樹苗" },
      { label: "B", text: "拍照下來，冷靜查評價" },
      { label: "C", text: "轉頭走，我不需要買那麼多樹" },
      { label: "D", text: "問問園友有沒有隱藏優惠" }
    ]
  },
  {
    id: 10,
    category: "II. 樹種選擇與風險偏好",
    text: "朋友推薦一棵很厲害的新品種搖錢樹，你的反應是？",
    options: [
      { label: "A", text: "馬上試種，相信園友" },
      { label: "B", text: "先化驗成分，確保無毒" },
      { label: "C", text: "聽聽就好，我的果園不需要外來種" },
      { label: "D", text: "吾乃種樹冠軍，何須他人建議" }
    ]
  },
  {
    id: 11,
    category: "II. 樹種選擇與風險偏好",
    text: "對於想要種一棵搖錢樹，你期盼什麼？",
    options: [
      { label: "A", text: "樹要長得快，金幣產量高" },
      { label: "B", text: "樹絕對不能被蟲吃，零損失" },
      { label: "C", text: "每天都穩穩地長一點點就好" },
      { label: "D", text: "看心情換肥料，隨興操作" }
    ]
  },
  {
    id: 12,
    category: "II. 樹種選擇與風險偏好",
    text: "樹上的金幣快要成熟了，你打算採用哪一種收穫方式？",
    options: [
      { label: "A", text: "用鼓風機吹：錢幣量多，但亂飛損耗大" },
      { label: "B", text: "用傳送帶：錢幣普通，但穩健到達，省時" },
      { label: "C", text: "用手慢慢撿：錢幣少，但極度安心，零損耗" },
      { label: "D", text: "報酬不重要，只要不要虧本就好" }
    ]
  },
  {
    id: 13,
    category: "II. 樹種選擇與風險偏好",
    text: "你的搖錢樹能抵抗多大的颱風？",
    options: [
      { label: "A", text: "我非常清楚它的能耐" },
      { label: "B", text: "無法很有把握，只有模糊概念" },
      { label: "C", text: "完全不知道" },
      { label: "D", text: "我無需知道，聽天由命就好" }
    ]
  },
  {
    id: 14,
    category: "II. 樹種選擇與風險偏好",
    text: "你是否希望聘請未來世界的機器人員工，幫你自動種樹？",
    options: [
      { label: "A", text: "是，我相信數據與演算法" },
      { label: "B", text: "考慮中，先讓 AI 跑個成績單給我看" },
      { label: "C", text: "否，我只相信自己的玄學判斷" },
      { label: "D", text: "不太懂，先不理它" }
    ]
  },
  {
    id: 15,
    category: "II. 樹種選擇與風險偏好",
    text: "宇宙農業部預言未來 3 年這棵樹種不一定會結出金幣，你會選擇？",
    options: [
      { label: "A", text: "持續耕種，累積它的營養" },
      { label: "B", text: "砍掉它，當柴賣了，落袋為安" },
      { label: "C", text: "不砍掉但停止耕種，觀望一下" },
      { label: "D", text: "改種其他短期作物" } // Added D to match structure, though missing in source text implies C or empty.
    ]
  },
  {
    id: 16,
    category: "II. 樹種選擇與風險偏好",
    text: "你目前的資金大多停泊在哪裡？",
    options: [
      { label: "A", text: "銀行定存/活存（超級安全區）" },
      { label: "B", text: "基金/股票（戰場中央）" },
      { label: "C", text: "儲蓄險/保單（防禦塔）" },
      { label: "D", text: "房地產/加密貨幣（神秘地帶）" }
    ]
  },
  // III. 執行紀律與危機應對
  {
    id: 17,
    category: "III. 執行紀律與危機應對",
    text: "興高采烈買了樹回家，種下的隔天它竟枯萎了十分之一葉子，此刻的你？",
    options: [
      { label: "A", text: "完蛋了，這是冰河時期的預兆嗎，快逃" },
      { label: "B", text: "喔，葉子會自己長回來，遲早要換季" },
      { label: "C", text: "太好了，可以找更多農藥來補位" },
      { label: "D", text: "沒感覺，反正我很少進果園看" }
    ]
  },
  {
    id: 18,
    category: "III. 執行紀律與危機應對",
    text: "種了三個月，看起來都沒長大，葉子也沒變多，你會？",
    options: [
      { label: "A", text: "繼續唱等一下，相信它會回春" },
      { label: "B", text: "逆勢加碼，多澆一點水讓它快動" },
      { label: "C", text: "考慮拔起來，換個品種或位置" },
      { label: "D", text: "打電話給農會，覺得這品種爛透了" }
    ]
  },
  {
    id: 19,
    category: "III. 執行紀律與危機應對",
    text: "你的樹被鄰居嘲笑「長得太慢又太小」，你會？",
    options: [
      { label: "A", text: "沒差，我的樹長得開心就好" },
      { label: "B", text: "內心不爽，但表面假裝大方" },
      { label: "C", text: "立刻買更多肥料證明自己" },
      { label: "D", text: "考慮換個新品種，重新開始" }
    ]
  },
  {
    id: 20,
    category: "III. 執行紀律與危機應對",
    text: "你是否有「每月固定」幫搖錢樹澆水施肥？",
    options: [
      { label: "A", text: "有，堅持先做完才去休息" },
      { label: "B", text: "有，忙完有時間才施一下肥" },
      { label: "C", text: "有，但施肥的份量和時間不太固定" },
      { label: "D", text: "沒有固定習慣，讓他野蠻生長" }
    ]
  },
  {
    id: 21,
    category: "III. 執行紀律與危機應對",
    text: "年末豐年祭要繳交土產，你的準備方式是？",
    options: [
      { label: "A", text: "提前開墾種新樹，等收穫" },
      { label: "B", text: "翻翻家裡存糧，現有物資撐一下" },
      { label: "C", text: "先跟朋友借果實，明年再還兩倍" },
      { label: "D", text: "沒有準備，等祭典當天看奇蹟" }
    ]
  },
  {
    id: 22,
    category: "III. 執行紀律與危機應對",
    text: "你對開墾新土地的熱情，通常可以維持多久？",
    options: [
      { label: "A", text: "半年內就覺得累，換跑道" },
      { label: "B", text: "一年左右，剛把雜草除完" },
      { label: "C", text: "兩三年沒問題，已經能蓋小木屋" },
      { label: "D", text: "持續至今，開墾已經是我的本能" }
    ]
  },
  {
    id: 23,
    category: "III. 執行紀律與危機應對",
    text: "灌溉系統設定：關於每週的例行灌溉任務，你的習慣是？",
    options: [
      { label: "A", text: "從不設定，完全看心情澆水" },
      { label: "B", text: "設好時間表，但常因下雨就偷懶" },
      { label: "C", text: "設好就絕不更動，規律第一" },
      { label: "D", text: "隨時監控天氣，主動增減水量" }
    ]
  },
  // IV. 長期目標與現狀
  {
    id: 24,
    category: "IV. 長期目標與現狀",
    text: "你希望自己在不久的將來，成為甚麼樣的搖錢樹農夫？",
    options: [
      { label: "A", text: "農莊之王：擁有整片山頭，還清所有土地貸款" },
      { label: "B", text: "桶金小農：用搖錢樹累積到第一桶金" },
      { label: "C", text: "神仙農夫：悠閒的半退休，可以選擇性耕作" },
      { label: "D", text: "富爸爸富媽媽：存夠養兒育女的資金" }
    ]
  },
  {
    id: 25,
    category: "IV. 長期目標與現狀",
    text: "你是否期待某一天可以完全不用賣力耕種，搖錢樹自然生長掉下來的錢，就夠你生活？",
    options: [
      { label: "A", text: "是，正朝目標努力中" },
      { label: "B", text: "是，但覺得離我非常遙遠" },
      { label: "C", text: "不期待，因我總怕哪天搖錢樹會枯掉" },
      { label: "D", text: "還沒仔細想過" }
    ]
  },
  {
    id: 26,
    category: "IV. 長期目標與現狀",
    text: "如果現在突然給你一筆 100 萬元，你會優先如何分配？",
    options: [
      { label: "A", text: "全部拿去買肥料、買樹苗" },
      { label: "B", text: "一半種樹，一半存起來" },
      { label: "C", text: "拿去開發土地或償還貸款" },
      { label: "D", text: "完成夢想清單" }
    ]
  },
  {
    id: 27,
    category: "IV. 長期目標與現狀",
    text: "你是否曾經嘗試過「每月種一棵」的定期定額種樹法？",
    options: [
      { label: "A", text: "沒試過" },
      { label: "B", text: "試過，但常因天氣不好而停耕" },
      { label: "C", text: "有阿，既然開始了就要堅持" },
      { label: "D", text: "試過，天氣好我還會自己加碼多種幾棵" }
    ]
  },
  {
    id: 28,
    category: "IV. 長期目標與現狀",
    text: "你目前收穫的果實大多存放在哪裡？",
    options: [
      { label: "A", text: "埋在沙灘下（超級安全區）" },
      { label: "B", text: "丟到市場上賣（戰場中央）" },
      { label: "C", text: "鎖進防禦塔裡（儲蓄保單）" },
      { label: "D", text: "藏在神秘地帶（房地產/加密幣）" }
    ]
  },
  {
    id: 29,
    category: "IV. 長期目標與現狀",
    text: "目前的金幣生長速度，能否支撐你心中理想生活？",
    options: [
      { label: "A", text: "我已過上了理想生活，不差這棵樹" },
      { label: "B", text: "金幣生長速度佳，我正朝目標飛奔" },
      { label: "C", text: "勉強可以，但需要很努力" },
      { label: "D", text: "差距很大，還看不到盡頭" }
    ]
  },
  {
    id: 30,
    category: "IV. 長期目標與現狀",
    text: "你希望宇宙農業部的專家能給你哪一類建議？",
    options: [
      { label: "A", text: "如何預測下一次的颱風" },
      { label: "B", text: "我所有搖錢樹的健檢" },
      { label: "C", text: "挑選更合適的樹種" },
      { label: "D", text: "穩定金幣生長速度" }
    ]
  }
];