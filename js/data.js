// ============================================================
// BALI 2026 — Itinerary data (IT / EN / ZH-Hans)
// Impersonal voice everywhere.
// ============================================================

const UI = {
  it: {
    appTitle: "Bali · 20–29 luglio 2026",
    days: "Giorni", packing: "Valigia", info: "Info", bookings: "Prenotazioni",
    home: "Home", day: "Giorno",
    chapters: "I tre capitoli", overviewTitle: "Il viaggio in breve",
    download: "Scaricare l'itinerario completo (.md)",
    openMap: "Maps", timeline: "La giornata", notes: "Note", transport: "Trasporti del giorno",
    mapTitle: "La mappa del viaggio", mapOpen: "Aprire in Google Maps",
    flightStatus: "Stato volo in tempo reale",
    stay: "Alloggio", checkout: "Check-out", planB: "Piano B",
    tips: "Consigli", when: "Quando", how: "Come", what: "Cosa",
    packingTitle: "Da mettere in valigia",
    bureaucracy: "Burocrazia d'arrivo (prima di partire)",
    health: "Salute & sicurezza",
    practical: "Note pratiche",
    flex: "Flessibilità: se un giorno salta",
    flexNote: "Ogni giornata ha una sola cosa principale + relax: se ne salta una, si sposta l'ancora e non crolla niente.",
    recovery: "Recupero possibile",
    bookWhen: "Quando prenotare",
    bookHow: "Come",
    driverGuide: "Autista vs app",
    langName: "Italiano",
    backHome: "Tutti i giorni",
    prevDay: "Precedente", nextDay: "Successivo",
  },
  en: {
    appTitle: "Bali · 20–29 July 2026",
    days: "Days", packing: "Packing", info: "Info", bookings: "Bookings",
    home: "Home", day: "Day",
    chapters: "The three chapters", overviewTitle: "The trip at a glance",
    download: "Download the full itinerary (.md)",
    openMap: "Maps", timeline: "The day", notes: "Notes", transport: "Transport for the day",
    mapTitle: "The trip map", mapOpen: "Open in Google Maps",
    flightStatus: "Live flight status",
    stay: "Stay", checkout: "Check-out", planB: "Plan B",
    tips: "Tips", when: "When", how: "How", what: "What",
    packingTitle: "Packing list",
    bureaucracy: "Arrival paperwork (before departure)",
    health: "Health & safety",
    practical: "Practical notes",
    flex: "Flexibility: if a day falls through",
    flexNote: "Each day has one main anchor + downtime: if one is missed, the anchor moves and nothing collapses.",
    recovery: "Possible recovery",
    bookWhen: "When to book",
    bookHow: "How",
    driverGuide: "Driver vs app",
    langName: "English",
    backHome: "All days",
    prevDay: "Previous", nextDay: "Next",
  },
  zh: {
    appTitle: "巴厘岛 · 2026年7月20–29日",
    days: "行程", packing: "行李", info: "信息", bookings: "预订",
    home: "首页", day: "第", 
    chapters: "三个篇章", overviewTitle: "行程概览",
    download: "下载完整行程 (.md)",
    openMap: "地图", timeline: "当日安排", notes: "备注", transport: "当日交通",
    mapTitle: "行程地图", mapOpen: "在Google Maps中打开",
    flightStatus: "实时航班状态",
    stay: "住宿", checkout: "退房", planB: "备选方案",
    tips: "提示", when: "时间", how: "方式", what: "内容",
    packingTitle: "行李清单",
    bureaucracy: "入境手续（出发前办理）",
    health: "健康与安全",
    practical: "实用信息",
    flex: "灵活安排：若某天计划取消",
    flexNote: "每天只安排一项主要活动，其余为休闲：错过一项，顺延即可，行程不受影响。",
    recovery: "可补救方案",
    bookWhen: "预订时间",
    bookHow: "预订方式",
    driverGuide: "包车 vs 打车软件",
    langName: "简体中文",
    backHome: "全部行程",
    prevDay: "上一天", nextDay: "下一天",
  }
};

const CHAPTERS = {
  it: [
    { n: "1", where: "Seminyak / Kerobokan", nights: "1 notte", vibe: "Recupero dal volo, spa, tramonto soft" },
    { n: "2", where: "Ubud & Tegallalang", nights: "4 notti", vibe: "Risaie, faccia di gorilla, snorkeling, cena nella giungla" },
    { n: "3", where: "Penisola di Bukit", nights: "4 notti", vibe: "Mare, scogliere, grotte, tramonti" },
  ],
  en: [
    { n: "1", where: "Seminyak / Kerobokan", nights: "1 night", vibe: "Flight recovery, spa, soft sunset" },
    { n: "2", where: "Ubud & Tegallalang", nights: "4 nights", vibe: "Rice terraces, gorilla face, snorkeling, jungle dinner" },
    { n: "3", where: "Bukit Peninsula", nights: "4 nights", vibe: "Sea, cliffs, caves, sunsets" },
  ],
  zh: [
    { n: "1", where: "水明漾 / 克罗博坎", nights: "1晚", vibe: "调整时差、SPA、轻松日落" },
    { n: "2", where: "乌布 & 特加拉朗", nights: "4晚", vibe: "梯田、大猩猩石雕、浮潜、丛林晚餐" },
    { n: "3", where: "布吉半岛", nights: "4晚", vibe: "大海、悬崖、洞穴、日落" },
  ]
};

// Helper for Google Maps links
const gm = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

// ============================================================
// DAYS — each: {num, date:{it,en,zh}, title:{}, hotel, hotelMap,
//   grad:[c1,c2], emoji, timeline:[{t, icon, title:{}, desc:{}, map?}],
//   notes:{it:[],en:[],zh:[]}, transport:{} }
// ============================================================

const DAYS = [
// ---------------------------------------------------------- DAY 1
{
  num: 1,
  date: { it: "Lunedì 20 luglio", en: "Monday 20 July", zh: "7月20日 星期一" },
  title: { it: "Arrivo & relax", en: "Arrival & unwind", zh: "抵达与放松" },
  area: { it: "Kerobokan / Umalas", en: "Kerobokan / Umalas", zh: "克罗博坎 / 乌马拉斯" },
  hotel: "Dewani Villa Resort",
  hotelMap: gm("Dewani Villa Resort Bali"),
  grad: ["#2A7F8E", "#F2B33D"], emoji: "🛬",
  intro: {
    it: "Volo notturno alle spalle: giornata tutta in zona villa, a ritmo lentissimo.",
    en: "After the overnight flight: a whole day around the villa, at the slowest pace.",
    zh: "红眼航班之后：全天在别墅周边度过，节奏极其舒缓。"
  },
  timeline: [
    { t: "00:00", icon: "🛫", title: { it: "Aeroporto di Shenzhen (SZX · T3)", en: "Shenzhen Airport (SZX · T3)", zh: "深圳宝安机场 (SZX · T3)" },
      desc: { it: "Arrivo in aeroporto e imbarco. Il check-in Malaysia Airlines chiude 60 min prima del volo: essere ai gate con margine.", en: "Arrive at the airport and board. Malaysia Airlines check-in closes 60 min before departure: be at the gate with a buffer.", zh: "抵达机场并办理登机。马航值机在起飞前60分钟关闭：请预留时间到达登机口。" } },
    { t: "02:45", icon: "✈️", title: { it: "Volo MH523 · Shenzhen → Kuala Lumpur", en: "Flight MH523 · Shenzhen → Kuala Lumpur", zh: "航班 MH523 · 深圳 → 吉隆坡" },
      desc: { it: "Boeing 737-8, ~4h. Arrivo a Kuala Lumpur (KUL) alle 06:45.", en: "Boeing 737-8, ~4h. Arrives Kuala Lumpur (KUL) at 06:45.", zh: "波音737-8，约4小时。06:45抵达吉隆坡 (KUL)。" }, flightStatus: "https://www.flightradar24.com/data/flights/mh523" },
    { t: "06:45", icon: "🔄", title: { it: "Scalo a Kuala Lumpur (KUL · T1)", en: "Layover in Kuala Lumpur (KUL · T1)", zh: "吉隆坡转机 (KUL · T1)" },
      desc: { it: "~2h15 di attesa, stesso terminal: caffè, sgranchirsi le gambe, niente fretta.", en: "~2h15 wait, same terminal: coffee, stretch your legs, no rush.", zh: "约2小时15分，同一航站楼：喝杯咖啡、活动一下、不必赶时间。" } },
    { t: "09:00", icon: "✈️", title: { it: "Volo MH715 · Kuala Lumpur → Bali", en: "Flight MH715 · Kuala Lumpur → Bali", zh: "航班 MH715 · 吉隆坡 → 巴厘岛" },
      desc: { it: "Airbus A330-300, ~3h05.", en: "Airbus A330-300, ~3h05.", zh: "空客A330-300，约3小时05分。" }, flightStatus: "https://www.flightradar24.com/data/flights/mh715" },
    { t: "11:47", icon: "🛬", title: { it: "Atterraggio a Bali (DPS)", en: "Landing in Bali (DPS)", zh: "抵达巴厘岛 (DPS)" },
      desc: { it: "Terminal Internazionale. Attivare subito la eSIM: serve per Grab e per il delivery del pranzo.", en: "International Terminal. Activate the eSIM right away: needed for Grab and lunch delivery.", zh: "国际航站楼。立即激活eSIM：Grab打车和外卖都需要它。" }, map: gm("Ngurah Rai International Airport Bali") },
    { t: "13:00", icon: "🚗", title: { it: "Transfer alla Dewani (~35 min)", en: "Transfer to Dewani (~35 min)", zh: "前往Dewani别墅 (~35分钟)" },
      desc: { it: "Transfer privato prenotato = zero pensieri; Grab più economico ma con ~400 m a piedi fino alla lounge e-hailing.", en: "Pre-booked private transfer = zero hassle; Grab is cheaper but requires a ~400 m walk to the e-hailing lounge.", zh: "预订接机=省心；Grab更便宜但需步行约400米到网约车候车区。" } },
    { t: "14:00", icon: "🏡", title: { it: "Check-in, doccia, piscina", en: "Check-in, shower, pool", zh: "入住、洗漱、泳池" },
      desc: { it: "Niente fretta: recupero dal volo.", en: "No rush: flight recovery.", zh: "不必着急：好好休整。" }, map: gm("Dewani Villa Resort Bali") },
    { t: "14:30", icon: "🍛", title: { it: "Pranzo facile", en: "Easy lunch", zh: "轻松午餐" },
      desc: { it: "Delivery in villa (GoFood/GrabFood, ~30 min) oppure Warung Nads: nasi campur eccezionale, 4 min in taxi.", en: "Delivery at the villa (GoFood/GrabFood, ~30 min) or Warung Nads: exceptional nasi campur, 4 min by taxi.", zh: "别墅外卖（GoFood/GrabFood，约30分钟）或Warung Nads：出色的杂拌饭，打车4分钟。" }, map: gm("Warung Nads Kerobokan Bali") },
    { t: "16:00", icon: "💆", title: { it: "Massaggio di coppia · Svaha Spa Umalas", en: "Couples massage · Svaha Spa Umalas", zh: "双人按摩 · Svaha Spa Umalas" },
      desc: { it: "\"Balinese Couple Massage\", 4 min in taxi. Prenotare prima via WhatsApp: il modo migliore per smaltire il volo.", en: "\"Balinese Couple Massage\", 4 min by taxi. Book ahead via WhatsApp: the best way to shake off the flight.", zh: "\"巴厘岛双人按摩\"，打车4分钟。提前通过WhatsApp预订：缓解飞行疲劳的最佳方式。" }, map: gm("Svaha Spa Umalas Bali") },
    { t: "19:00", icon: "🍷", title: { it: "Cena · Uma Garden", en: "Dinner · Uma Garden", zh: "晚餐 · Uma Garden" },
      desc: { it: "Steakhouse con giardino, curata ma rilassata, 5 min in taxi. Prenotare un tavolo all'aperto. Poi rientro e a letto presto.", en: "Garden steakhouse, polished but relaxed, 5 min by taxi. Book an outdoor table. Then back and early to bed.", zh: "花园牛排馆，精致而放松，打车5分钟。建议预订户外座位。之后返回别墅早点休息。" }, map: gm("Uma Garden Seminyak") },
  ],
  notes: {
    it: ["Alternative cibo in zona: Mamasan (fusion elegante), Kilo Kitchen (creativa), KAMA Warung (indonesiano, calmo).", "Il delivery resta sempre l'asso nella manica."],
    en: ["Food alternatives nearby: Mamasan (elegant fusion), Kilo Kitchen (creative), KAMA Warung (Indonesian, calm).", "Delivery is always the ace up the sleeve."],
    zh: ["附近餐饮备选：Mamasan（精致融合菜）、Kilo Kitchen（创意菜）、KAMA Warung（印尼菜，安静）。", "外卖永远是备用方案。"]
  },
  transport: {
    it: "Aeroporto→villa: transfer privato (IDR 150–250k) o Grab (~100–150k, con camminata). Pomeriggio/sera: micro-tratte Grab da 4–5 min (~IDR 20–40k). Niente autista oggi.",
    en: "Airport→villa: private transfer (IDR 150–250k) or Grab (~100–150k, with a walk). Afternoon/evening: 4–5 min Grab hops (~IDR 20–40k). No driver today.",
    zh: "机场→别墅：接机（15–25万印尼盾）或Grab（约10–15万，需步行）。下午/晚上：Grab短途4–5分钟（约2–4万）。今天不需要包车。"
  }
},
// ---------------------------------------------------------- DAY 2
{
  num: 2,
  date: { it: "Martedì 21 luglio", en: "Tuesday 21 July", zh: "7月21日 星期二" },
  title: { it: "Trasferimento a Ubud", en: "Transfer to Ubud", zh: "前往乌布" },
  area: { it: "Ubud", en: "Ubud", zh: "乌布" },
  hotel: "The Sakara Ubud Villas",
  hotelMap: gm("The Sakara Ubud Villas"),
  grad: ["#1F5137", "#7FB069"], emoji: "🌿",
  intro: {
    it: "Dalla costa alla giungla di Ubud: pranzo tra le risaie e passeggiata sul crinale all'ora dorata.",
    en: "From the coast to Ubud's jungle: lunch among rice fields and a ridge walk at golden hour.",
    zh: "从海岸到乌布丛林：稻田间的午餐与黄金时刻的山脊漫步。"
  },
  timeline: [
    { t: "9:30", icon: "☕", title: { it: "Colazione veloce in villa", en: "Quick breakfast at the villa", zh: "别墅内简易早餐" },
      desc: { it: "Poi si parte.", en: "Then off.", zh: "然后出发。" } },
    { t: "10:00", icon: "🧳", title: { it: "Check-out dalla Dewani", en: "Check-out from Dewani", zh: "从Dewani退房" },
      desc: { it: "Bagagli in auto: si parte per Ubud.", en: "Luggage in the car: off to Ubud.", zh: "行李上车：出发前往乌布。" } },
    { t: "10:30", icon: "🚗", title: { it: "Trasferimento a Ubud (~1h15–1h45)", en: "Transfer to Ubud (~1h15–1h45)", zh: "前往乌布 (~1小时15分–1小时45分)" },
      desc: { it: "Con autista, bagagli a bordo.", en: "With driver, luggage on board.", zh: "包车前往，行李随车。" } },
    { t: "12:00", icon: "🧳", title: { it: "Arrivo alla Sakara", en: "Arrival at Sakara", zh: "抵达Sakara别墅" },
      desc: { it: "Check-in se la camera è pronta, altrimenti deposito bagagli alla reception (prassi normale).", en: "Check-in if the room is ready, otherwise luggage storage at reception (standard practice).", zh: "若房间已备好则办理入住，否则先寄存行李（常规操作）。" }, map: gm("The Sakara Ubud Villas") },
    { t: "12:30", icon: "🍽️", title: { it: "Pranzo · NEUN at Bali Nguni", en: "Lunch · NEUN at Bali Nguni", zh: "午餐 · NEUN at Bali Nguni" },
      desc: { it: "A 3 min dalla villa, in mezzo alle risaie, con piscina e gazebo.", en: "3 min from the villa, set in rice fields, with pool and gazebos.", zh: "距别墅3分钟，坐落于稻田中，设有泳池和凉亭。" }, map: gm("NEUN at Bali Nguni Ubud") },
    { t: "14:00", icon: "🏊", title: { it: "Relax in villa nelle ore calde", en: "Villa downtime in the hot hours", zh: "炎热时段在别墅休息" },
      desc: { it: "Check-in se non ancora fatto, piscina, riposo.", en: "Check-in if not done yet, pool, rest.", zh: "如未入住先办理，然后泳池、休息。" } },
    { t: "16:00", icon: "🚶", title: { it: "Campuhan Ridge Walk", en: "Campuhan Ridge Walk", zh: "坎普罕山脊步道" },
      desc: { it: "Passeggiata facile sul crinale, 1h–1h30 a/r, splendida e fresca all'ora dorata. A 15–20 min dalla villa.", en: "Easy ridge walk, 1h–1h30 return, gorgeous and cool at golden hour. 15–20 min from the villa.", zh: "轻松的山脊步道，往返1–1.5小时，黄金时刻风景绝美且凉爽。距别墅15–20分钟。" }, map: gm("Campuhan Ridge Walk Ubud") },
    { t: "18:00", icon: "🍷", title: { it: "Cena · Amsterdam Restaurant", en: "Dinner · Amsterdam Restaurant", zh: "晚餐 · Amsterdam Restaurant" },
      desc: { it: "Ubud centro: formula \"scegli 3/5 piattini\". Poi rientro in villa e relax.", en: "Ubud centre: \"pick 3/5 small plates\" formula. Then back to the villa.", zh: "乌布市中心：可自选3或5道小食拼盘。之后返回别墅休息。" }, map: gm("Amsterdam Restaurant Ubud") },
  ],
  notes: {
    it: ["Trovare oggi un autista fidato (tramite la villa) e tenerlo su WhatsApp per tutte le gite."],
    en: ["Find a trusted driver today (via the villa) and keep him on WhatsApp for every excursion."],
    zh: ["今天最好通过别墅找到可靠的包车司机，保存其WhatsApp，后续出行都可联系。"]
  },
  transport: {
    it: "Trasferimento villa→Ubud con autista (IDR 350–500k). Spostamenti locali (NEUN, Campuhan, cena) = Grab brevi.",
    en: "Villa→Ubud transfer with driver (IDR 350–500k). Local hops (NEUN, Campuhan, dinner) = short Grabs.",
    zh: "别墅→乌布包车（35–50万印尼盾）。本地短途（NEUN、山脊步道、晚餐）用Grab。"
  }
},
// ---------------------------------------------------------- DAY 3
{
  num: 3,
  date: { it: "Mercoledì 22 luglio", en: "Wednesday 22 July", zh: "7月22日 星期三" },
  title: { it: "Ubud centro + spostamento alla Nau", en: "Ubud centre + move to Nau", zh: "乌布市区 + 移居Nau别墅" },
  area: { it: "Ubud → Tegallalang", en: "Ubud → Tegallalang", zh: "乌布 → 特加拉朗" },
  hotel: "Nau Villa Ubud",
  hotelMap: gm("Nau Villa Ubud Tegallalang"),
  grad: ["#1F5137", "#2A7F8E"], emoji: "🛕",
  intro: {
    it: "Giornata leggera: palazzo, mercato d'arte e tempio, poi risalita verso Tegallalang. La Sakara è di strada per riprendere i bagagli.",
    en: "Light day: palace, art market and temple, then up to Tegallalang. Sakara is on the way to collect the luggage.",
    zh: "轻松的一天：王宫、艺术市场和神庙，然后北上特加拉朗。回程顺路在Sakara取行李。"
  },
  timeline: [
    { t: "8:30", icon: "☕", title: { it: "Colazione in hotel (Sakara)", en: "Breakfast at the hotel (Sakara)", zh: "酒店早餐 (Sakara)" }, desc: { it: "", en: "", zh: "" } },
    { t: "10:30", icon: "🧳", title: { it: "Check-out, bagagli alla reception", en: "Check-out, luggage at reception", zh: "退房，行李寄存前台" },
      desc: { it: "Si ripassano a prendere nel pomeriggio: la Sakara è sulla strada per la Nau.", en: "To be collected in the afternoon: Sakara is on the way to Nau.", zh: "下午返程时取行李：Sakara就在去Nau的路上。" } },
    { t: "11:00", icon: "🛕", title: { it: "Ubud centro, a scelta", en: "Ubud centre, pick & mix", zh: "乌布市中心（自选）" },
      desc: { it: "Ubud Palace + Ubud Art Market (Pasar Seni, di fronte al Palace: artigianato, sarong, dipinti — si contratta) + tempio Saraswati (ninfee): tutti a due passi. Oppure il Green Tunnel, oppure spa di coppia a INKA Ubud.", en: "Ubud Palace + Ubud Art Market (Pasar Seni, opposite the Palace: crafts, sarongs, paintings — haggling expected) + Saraswati temple (lotus ponds): all steps apart. Or the Green Tunnel, or a couples spa at INKA Ubud.", zh: "乌布王宫 + 乌布艺术市场（Pasar Seni，王宫对面：手工艺品、纱笼、绘画——可讲价）+ 莲花庙：彼此步行可达。或选绿色隧道，或到INKA Ubud做双人SPA。" }, map: gm("Ubud Palace") },
    { t: "13:00", icon: "🍽️", title: { it: "Pranzo a Ubud", en: "Lunch in Ubud", zh: "乌布午餐" },
      desc: { it: "Tropical Restaurant – Ubud oppure Sala Bistro Ubud.", en: "Tropical Restaurant – Ubud or Sala Bistro Ubud.", zh: "Tropical Restaurant – Ubud 或 Sala Bistro Ubud。" }, map: gm("Tropical Restaurant Ubud") },
    { t: "14:30", icon: "🚗", title: { it: "Ritiro bagagli → Nau Villa", en: "Collect luggage → Nau Villa", zh: "取行李 → Nau别墅" },
      desc: { it: "Sosta alla Sakara, poi dritti a Tegallalang.", en: "Stop at Sakara, then straight to Tegallalang.", zh: "在Sakara停留取行李，然后直达特加拉朗。" } },
    { t: "15:30", icon: "🏊", title: { it: "Check-in alla Nau, piscina privata", en: "Check-in at Nau, private pool", zh: "入住Nau，私人泳池" },
      desc: { it: "Relax nelle ore calde.", en: "Downtime through the hot hours.", zh: "炎热时段泳池放松。" }, map: gm("Nau Villa Ubud Tegallalang") },
    { t: "19:00", icon: "🍷", title: { it: "Cena vicino alla villa", en: "Dinner near the villa", zh: "别墅附近晚餐" },
      desc: { it: "Mimpi Manis Restaurant o Yamuna by Dewi Kunti, oppure delivery se non va di uscire. Serata rilassante in villa.", en: "Mimpi Manis Restaurant or Yamuna by Dewi Kunti, or delivery if staying in. Relaxing evening at the villa.", zh: "Mimpi Manis或Yamuna by Dewi Kunti餐厅，不想出门可点外卖。晚上在别墅放松。" }, map: gm("Mimpi Manis Restaurant Tegallalang") },
  ],
  notes: {
    it: ["Ricordare alla Nau la prenotazione della floating breakfast per il Giorno 5."],
    en: ["Remind Nau about the floating-breakfast booking for Day 5."],
    zh: ["提醒Nau别墅预订第5天的漂浮早餐。"]
  },
  transport: {
    it: "Centro Ubud a piedi (è compatto) + Grab dove serve. Bagagli + trasferimento alla Nau: Grab auto o breve tratta con l'autista.",
    en: "Ubud centre on foot (it's compact) + Grab where needed. Luggage + transfer to Nau: Grab car or short driver leg.",
    zh: "乌布市中心步行即可（很紧凑），必要时用Grab。取行李和前往Nau：Grab或短途包车。"
  }
},
// ---------------------------------------------------------- DAY 4
{
  num: 4,
  date: { it: "Giovedì 23 luglio", en: "Thursday 23 July", zh: "7月23日 星期四" },
  title: { it: "Snorkeling a Blue Lagoon", en: "Snorkeling at Blue Lagoon", zh: "蓝湖浮潜" },
  area: { it: "Padangbai (costa est)", en: "Padangbai (east coast)", zh: "帕当拜（东海岸）" },
  hotel: "Nau Villa Ubud",
  hotelMap: gm("Nau Villa Ubud Tegallalang"),
  grad: ["#2A7F8E", "#65C3D0"], emoji: "🤿",
  intro: {
    it: "Barca privata prenotata (Lagonara, 12:00): baia protetta, tragitto in barca di 5 minuti — la formula giusta col mal di mare. Bagagli al sicuro in villa: oggi non si cambia alloggio.",
    en: "Private boat booked (Lagonara, 12:00): sheltered bay, 5-minute boat ride — the right formula for seasickness. Luggage safe at the villa: no hotel change today.",
    zh: "已预订私人船只（Lagonara，12:00）：海湾避风，乘船仅5分钟——晕船者的最佳选择。行李安全留在别墅：今天不换住宿。"
  },
  timeline: [
    { t: "9:00", icon: "☕", title: { it: "Sveglia + colazione · Capung Coffee & eatery", en: "Wake-up + breakfast · Capung Coffee & eatery", zh: "起床+早餐 · Capung Coffee & eatery" },
      desc: { it: "A 250 m dalla Nau (anche a piedi), apre alle 7: uova benedict, French toast, smoothie bowl. Alternativa zero-spostamenti: GoFood in villa.", en: "250 m from Nau (walkable), opens at 7: eggs benedict, French toast, smoothie bowls. Zero-effort alternative: GoFood at the villa.", zh: "距Nau仅250米（可步行），7点营业：班尼迪克蛋、法式吐司、思慕雪碗。省事之选：别墅点GoFood外卖。" }, map: gm("Capung Coffee and eatery Tegallalang") },
    { t: "10:00", icon: "🚗", title: { it: "Partenza verso est (~1h30)", en: "Departure east (~1h30)", zh: "向东出发 (~1.5小时)" },
      desc: { it: "Arrivo a Padangbai ~11:30, con margine sullo slot delle 12. Pastiglia anti-nausea verso le 11:00 (30–60 min prima della barca).", en: "Arrival in Padangbai ~11:30, with margin before the 12:00 slot. Anti-nausea tablet around 11:00 (30–60 min before the boat).", zh: "约11:30抵达帕当拜，距12点预约留有余量。11点左右服用晕船药（上船前30–60分钟）。" } },
    { t: "12:00", icon: "🤿", title: { it: "Snorkeling · Lagonara Tours (prenotato ✅)", en: "Snorkeling · Lagonara Tours (booked ✅)", zh: "浮潜 · Lagonara Tours（已预订 ✅）" },
      desc: { it: "Barca privata + guida, 2 ore: Blue Lagoon + Tanjung Jepun. Il Blue Lagoon è a 5 min dal molo; con la barca privata si può restare solo lì se il mare disturba. Gomme allo zenzero, Sea-Band, orizzonte.", en: "Private boat + guide, 2 hours: Blue Lagoon + Tanjung Jepun. Blue Lagoon is 5 min from the pier; with a private boat it's fine to stay there only if the sea bothers. Ginger gum, Sea-Bands, watch the horizon.", zh: "私人船只+向导，2小时：蓝湖+Tanjung Jepun。蓝湖距码头仅5分钟；包船可视情况只留在蓝湖。备好姜糖、防晕手环，多看地平线。" }, map: gm("Blue Lagoon Beach Padangbai") },
    { t: "14:00", icon: "🐟", title: { it: "Pranzo a Padangbai", en: "Lunch in Padangbai", zh: "帕当拜午餐" },
      desc: { it: "Warung Bu Jero o Warung Sari Laut (pesce grigliato freschissimo, vista porto) · Mama Salty (tranquillo).", en: "Warung Bu Jero or Warung Sari Laut (super-fresh grilled fish, harbour view) · Mama Salty (quiet).", zh: "Warung Bu Jero或Warung Sari Laut（新鲜烤鱼，海港景观）· Mama Salty（安静）。" }, map: gm("Warung Bu Jero Padangbai") },
    { t: "15:00", icon: "🚗", title: { it: "Rientro alla Nau (~1h30)", en: "Back to Nau (~1h30)", zh: "返回Nau (~1.5小时)" },
      desc: { it: "Opzionale, quasi sulla strada: sosta a Goa Gajah, la grotta storica con la faccia scolpita (~45 min).", en: "Optional, almost on the way: stop at Goa Gajah, the historic carved-face cave (~45 min).", zh: "可选顺路一站：象窟Goa Gajah，入口为雕刻面孔的古迹洞穴（约45分钟）。" }, map: gm("Goa Gajah Ubud") },
    { t: "19:00", icon: "🍷", title: { it: "Cena vicino alla villa", en: "Dinner near the villa", zh: "别墅附近晚餐" },
      desc: { it: "Mimpi Manis / Yamuna / Warung D'Uma Sari.", en: "Mimpi Manis / Yamuna / Warung D'Uma Sari.", zh: "Mimpi Manis / Yamuna / Warung D'Uma Sari。" } },
  ],
  planB: {
    it: "Se il mare è mosso: giornata cascate — Tibumana + Kanto Lampo (facili, fotogeniche). Scrivere a Lagonara su WhatsApp la sera del 22/7 per la conferma delle condizioni del mare: la decisione si prende comodi in villa, non al molo.",
    en: "If the sea is rough: waterfall day — Tibumana + Kanto Lampo (easy, photogenic). Message Lagonara on WhatsApp on the evening of 22/7 to confirm sea conditions: the call gets made comfortably at the villa, not at the pier.",
    zh: "若海况不佳：改为瀑布日——Tibumana + Kanto Lampo（轻松且出片）。7月22日晚通过WhatsApp向Lagonara确认海况：在别墅从容决定，而非到码头再说。"
  },
  notes: {
    it: ["Giornata più cara sul fronte trasporti (autista tutto il giorno, IDR 800–900k ≈ €48–53), ma divisa in due è poco."],
    en: ["Priciest transport day (driver all day, IDR 800–900k ≈ €48–53), but split in two it's little."],
    zh: ["今天交通花费最高（全天包车80–90万印尼盾，约€48–53），两人分摊并不贵。"]
  },
  transport: {
    it: "Autista privato tutto il giorno (Nau → Padangbai → Nau; aspetta durante lo snorkeling). Bagagli al sicuro in villa.",
    en: "Private driver all day (Nau → Padangbai → Nau; waits during the snorkel). Luggage safe at the villa.",
    zh: "全天包车（Nau→帕当拜→Nau；浮潜期间司机等候）。行李安全留在别墅。"
  }
},
// ---------------------------------------------------------- DAY 5
{
  num: 5,
  date: { it: "Venerdì 24 luglio", en: "Friday 24 July", zh: "7月24日 星期五" },
  title: { it: "Alas Harum (faccia di gorilla) + cena romantica", en: "Alas Harum (gorilla face) + romantic dinner", zh: "Alas Harum（大猩猩石雕）+ 浪漫晚餐" },
  area: { it: "Tegallalang → Ubud sud", en: "Tegallalang → South Ubud", zh: "特加拉朗 → 乌布南部" },
  hotel: "Mahajiva (Sibang Kaja)",
  hotelMap: gm("Mahajiva Villa Sibang Kaja Ubud"),
  grad: ["#7FB069", "#F2B33D"], emoji: "🦍",
  intro: {
    it: "Il \"must\" del viaggio: la faccia di gorilla, a piedi, nel parco di Alas Harum — con le risaie che si godono da lì, senza discese faticose. E la sera, cena nella giungla ad Arcadia.",
    en: "The trip's one \"must\": the gorilla face, on foot, inside Alas Harum park — with the rice terraces enjoyed from there, no strenuous descents. In the evening, jungle dinner at Arcadia.",
    zh: "本次旅行的\"必去\"：步行游览Alas Harum园区的大猩猩石雕——梯田美景尽收眼底，无需辛苦下坡。晚上在Arcadia享用丛林晚餐。"
  },
  timeline: [
    { t: "8:30", icon: "🛟", title: { it: "Colazione \"Floating Tray\" in piscina", en: "\"Floating Tray\" breakfast in the pool", zh: "泳池\"漂浮早餐\"" },
      desc: { it: "Vassoio galleggiante nella piscina della Nau: inizio lento e romantico. Da prenotare alla villa in anticipo (a pagamento).", en: "Floating tray in Nau's pool: a slow, romantic start. To be booked with the villa in advance (paid extra).", zh: "Nau泳池中的漂浮托盘早餐：浪漫的慢节奏开场。需提前向别墅预订（额外收费）。" } },
    { t: "9:45", icon: "🧳", title: { it: "Check-out, bagagli in auto", en: "Check-out, luggage in the car", zh: "退房，行李上车" },
      desc: { it: "L'autista resta con l'auto: esposizione minima, tutto vicino.", en: "The driver stays with the car: minimal exposure, everything nearby.", zh: "司机守车：风险极低，且各点都很近。" } },
    { t: "10:00", icon: "🦍", title: { it: "Alas Harum, a piedi (1–1,5h)", en: "Alas Harum, on foot (1–1.5h)", zh: "Alas Harum步行游览 (1–1.5小时)" },
      desc: { it: "Faccia di gorilla, glass floor, dancing bridge, vista sulle risaie, caffè luwak. Ingresso ~IDR 50k a testa (altalene/zipline extra opzionali). Mattina = ancora fresco. Le risaie si vedono già da qui: niente discesa nella valle.", en: "Gorilla face, glass floor, dancing bridge, rice-terrace views, luwak coffee. Entry ~IDR 50k each (swings/zipline optional extras). Morning = still cool. The terraces are visible from here: no valley descent needed.", zh: "大猩猩石雕、玻璃地板、摇摆桥、梯田景观、麝香猫咖啡。门票约每人5万印尼盾（秋千/滑索为可选付费项目）。上午天气尚凉爽。梯田在园内即可观赏，无需下谷。" }, map: gm("Alas Harum Bali Tegallalang") },
    { t: "12:00", icon: "🍽️", title: { it: "Pranzo · Tis Cafe", en: "Lunch · Tis Cafe", zh: "午餐 · Tis Cafe" },
      desc: { it: "A 2 min: terrazza all'ombra sulle risaie, proprio nell'ora più calda.", en: "2 min away: shaded terrace over the rice fields, right through the hottest hour.", zh: "2分钟即到：稻田上的遮荫露台，正好避开最热时段。" }, map: gm("Tis Cafe Tegallalang") },
    { t: "13:15", icon: "🚗", title: { it: "Trasferimento al Mahajiva (~45 min)", en: "Transfer to Mahajiva (~45 min)", zh: "前往Mahajiva (~45分钟)" }, desc: { it: "", en: "", zh: "" } },
    { t: "14:00", icon: "🏊", title: { it: "Check-in + piscina nelle ore calde (14–17)", en: "Check-in + pool through the hot hours (14–17)", zh: "入住 + 炎热时段泳池休息 (14–17点)" },
      desc: { it: "Doccia, riposo, si arriva freschi alla sera.", en: "Shower, rest, arriving fresh for the evening.", zh: "洗漱休息，以最佳状态迎接夜晚。" }, map: gm("Mahajiva Villa Sibang Kaja Ubud") },
    { t: "18:45", icon: "🥂", title: { it: "CENA ROMANTICA · Arcadia", en: "ROMANTIC DINNER · Arcadia", zh: "浪漫晚餐 · Arcadia" },
      desc: { it: "Fine dining nella giungla (~25 min): menù degustazione \"The Arcadia\", musica dal vivo soft. Prenotare via WhatsApp segnalando l'occasione speciale: sono noti per servizio e piccole sorprese. Rientro ~21:00–21:30.", en: "Fine dining in the jungle (~25 min): \"The Arcadia\" tasting menu, soft live music. Book via WhatsApp mentioning the special occasion: known for service and small surprises. Back ~21:00–21:30.", zh: "丛林精致餐厅（约25分钟车程）：\"The Arcadia\"品鉴菜单，轻柔现场音乐。通过WhatsApp预订并注明特殊纪念日：以贴心服务和小惊喜著称。约21:00–21:30返回。" }, map: gm("Arcadia Ubud restaurant") },
  ],
  notes: {
    it: ["Caricare i bagagli in auto al check-out evita di tornare alla Nau dopo pranzo (~25 min risparmiati)."],
    en: ["Loading luggage at check-out avoids returning to Nau after lunch (~25 min saved)."],
    zh: ["退房时行李直接上车，午餐后无需折返Nau（节省约25分钟）。"]
  },
  transport: {
    it: "Autista per la mattina (Nau → Alas Harum/Tis → Mahajiva, aspetta tra le tappe). Cena ad Arcadia: stesso autista o Grab (a Ubud funziona).",
    en: "Driver for the morning (Nau → Alas Harum/Tis → Mahajiva, waits between stops). Arcadia dinner: same driver or Grab (works in Ubud).",
    zh: "上午包车（Nau→Alas Harum/Tis→Mahajiva，各站等候）。Arcadia晚餐：同一司机或Grab（乌布市区可用）。"
  }
},
// ---------------------------------------------------------- DAY 6
{
  num: 6,
  date: { it: "Sabato 25 luglio", en: "Saturday 25 July", zh: "7月25日 星期六" },
  title: { it: "Ubud → penisola di Bukit", en: "Ubud → Bukit Peninsula", zh: "乌布 → 布吉半岛" },
  area: { it: "Ungasan", en: "Ungasan", zh: "乌干沙" },
  hotel: "Nunamkhalu Private Villas & Spa",
  hotelMap: gm("Nunamkhalu Private Villa and Spa Nusa Dua"),
  grad: ["#1F5137", "#FF7A48"], emoji: "🏝️",
  intro: {
    it: "Dalla giungla al mare: pranzo farm-to-table a due passi dal Mahajiva, poi il grande sud. Pomeriggio e sera aperti, con un menù di idee pronte.",
    en: "From jungle to sea: farm-to-table lunch steps from Mahajiva, then the deep south. Afternoon and evening open, with a menu of ready ideas.",
    zh: "从丛林到大海：Mahajiva旁的农场餐厅午餐，随后南下。下午和晚上自由安排，备有多个现成方案。"
  },
  timeline: [
    { t: "9:00", icon: "☕", title: { it: "Colazione · Taani Farm to Table (o in villa)", en: "Breakfast · Taani Farm to Table (or at the villa)", zh: "早餐 · Taani Farm to Table（或别墅内）" },
      desc: { it: "A 1 min a piedi dal Mahajiva, ristorante in bambù con cucina dall'orto, apre alle 7. In alternativa: delivery GoFood.", en: "1 min on foot from Mahajiva, bamboo restaurant with garden-grown food, opens at 7. Alternative: GoFood delivery.", zh: "距Mahajiva步行1分钟，竹制餐厅，食材来自自家菜园，7点营业。备选：GoFood外卖。" }, map: gm("Taani Farm to Table Bali") },
    { t: "10:00", icon: "🏊", title: { it: "Relax in villa", en: "Villa downtime", zh: "别墅休闲" }, desc: { it: "Piscina, con calma.", en: "Pool, unhurried.", zh: "泳池，不慌不忙。" } },
    { t: "12:00", icon: "🧳", title: { it: "Check-out + pranzo da Taani", en: "Check-out + lunch at Taani", zh: "退房 + Taani午餐" },
      desc: { it: "Bagagli lasciati in villa, pranzo a due passi, poi recupero bagagli e partenza.", en: "Luggage left at the villa, lunch steps away, then collect and go.", zh: "行李寄存别墅，就近午餐，然后取行李出发。" } },
    { t: "13:15", icon: "🚗", title: { it: "Trasferimento al Bukit (~1h30–2h)", en: "Transfer to the Bukit (~1h30–2h)", zh: "前往布吉半岛 (~1.5–2小时)" }, desc: { it: "", en: "", zh: "" } },
    { t: "15:00", icon: "🏡", title: { it: "Check-in a Nunamkhalu", en: "Check-in at Nunamkhalu", zh: "入住Nunamkhalu" },
      desc: { it: "", en: "", zh: "" }, map: gm("Nunamkhalu Private Villa and Spa Nusa Dua") },
    { t: "16:00", icon: "🏖️", title: { it: "Pomeriggio a scelta", en: "Afternoon, pick one", zh: "下午自选" },
      desc: { it: "Melasti (sabbia bianca tra falesie, strada scenografica scavata nella roccia) o Pandawa (statue nella parete, acqua riparata, warung sulla sabbia) — lettino, bagno, cocco. Oppure snorkeling da riva a Geger Beach (piano B se Padangbai è saltato: attrezzatura ~IDR 50k, si entra dalla riva).", en: "Melasti (white sand between cliffs, scenic rock-cut road) or Pandawa (statues in the cliff wall, sheltered water, sand-side warungs) — sunbed, swim, coconut. Or shore snorkeling at Geger Beach (plan B if Padangbai fell through: gear ~IDR 50k, entry from the shore).", zh: "美拉斯蒂海滩（悬崖间的白沙滩，岩石凿出的景观公路）或潘达瓦海滩（崖壁石像、平静海水、沙滩小馆）——躺椅、游泳、椰子。或到Geger海滩岸边浮潜（若帕当拜未成行的备选：装备约5万印尼盾，从岸边下水）。" }, map: gm("Melasti Beach Ungasan") },
    { t: "19:00", icon: "🍷", title: { it: "Cena: 1ª scelta Oliverra, 2ª WAATU", en: "Dinner: 1st pick Oliverra, 2nd WAATU", zh: "晚餐：首选Oliverra，次选WAATU" },
      desc: { it: "Oliverra: mediterraneo vicino a Melasti, romantico. WAATU: su scogliera, elegante. Prenotare in anticipo. Informali: Ohana (pizza), Artisan, Ayu Seafood (gemma locale, andarci presto).", en: "Oliverra: Mediterranean near Melasti, romantic. WAATU: clifftop, elegant. Book ahead. Casual: Ohana (pizza), Artisan, Ayu Seafood (local gem, go early).", zh: "Oliverra：美拉斯蒂附近的地中海餐厅，浪漫。WAATU：悬崖之上，优雅。需提前预订。休闲选择：Ohana（披萨）、Artisan、Ayu Seafood（本地宝藏，宜早去）。" }, map: gm("Oliverra Ungasan Bali") },
  ],
  notes: {
    it: ["Anche la caletta di Sundays (G7) offre snorkeling calmo da riva: al sud lo snorkeling è comunque coperto."],
    en: ["Sundays' cove (D7) also offers calm shore snorkeling: the south has snorkeling covered anyway."],
    zh: ["Sundays海湾（第7天）同样可从岸边平静浮潜：南部浮潜有保障。"]
  },
  transport: {
    it: "Mattina a piedi (Taani). Trasferimento al Bukit: autista, bagagli a bordo. Poi Grab brevi.",
    en: "Morning on foot (Taani). Transfer to the Bukit: driver, luggage on board. Then short Grabs.",
    zh: "上午步行（Taani）。前往布吉半岛：包车带行李。之后短途用Grab。"
  }
},
// ---------------------------------------------------------- DAY 7
{
  num: 7,
  date: { it: "Domenica 26 luglio", en: "Sunday 26 July", zh: "7月26日 星期日" },
  title: { it: "Sundays Beach Club", en: "Sundays Beach Club", zh: "Sundays海滩俱乐部" },
  area: { it: "Ungasan", en: "Ungasan", zh: "乌干沙" },
  hotel: "Nunamkhalu Private Villas & Spa",
  hotelMap: gm("Nunamkhalu Private Villa and Spa Nusa Dua"),
  grad: ["#65C3D0", "#F2B33D"], emoji: "⛱️",
  intro: {
    it: "Giornata intera di mare calmo: caletta privata, kayak e snorkel inclusi, falò al tramonto. I posti non si prenotano: arrivare alle 10 è la strategia.",
    en: "A full day of calm sea: private cove, kayaks and snorkels included, bonfire at sunset. Seats can't be reserved: arriving at 10 is the strategy.",
    zh: "全天静海时光：私人海湾，含皮划艇和浮潜装备，日落篝火。座位不可预订：10点到达是关键。"
  },
  timeline: [
    { t: "9:00", icon: "☕", title: { it: "Colazione in villa (inclusa)", en: "Breakfast at the villa (included)", zh: "别墅早餐（含）" }, desc: { it: "", en: "", zh: "" } },
    { t: "9:30", icon: "🚗", title: { it: "Trasferimento a Sundays (~16 min)", en: "Transfer to Sundays (~16 min)", zh: "前往Sundays (~16分钟)" }, desc: { it: "", en: "", zh: "" } },
    { t: "10:00", icon: "⛱️", title: { it: "Sundays Beach Club — tutta la giornata", en: "Sundays Beach Club — the whole day", zh: "Sundays海滩俱乐部——全天" },
      desc: { it: "Discesa in funicolare nella scogliera; lettini/beanbag e kayak, SUP e snorkel inclusi nel pass (acqua calma da riva). Pranzo e cena lì in spiaggia. Attrezzatura legata alle maree e con possibili code: portare la propria maschera. Tariffe: entry base o day pass ~IDR 800k con credito cibo/bevande.", en: "Cliff funicular down; sunbeds/beanbags plus kayaks, SUP and snorkels included in the pass (calm water from shore). Lunch and dinner right on the beach. Gear is tide-dependent with possible queues: bring a personal mask. Rates: base entry or day pass ~IDR 800k with F&B credit.", zh: "乘崖壁缆车下行；躺椅/懒人沙发，通行证含皮划艇、桨板和浮潜装备（岸边海水平静）。午餐和晚餐都在沙滩解决。装备供应受潮汐影响且可能排队：建议自带面镜。价格：基础门票或约80万印尼盾的日票（含餐饮额度）。" }, map: gm("Sundays Beach Club Ungasan Bali") },
    { t: "12:30", icon: "🍽️", title: { it: "Pranzo in spiaggia", en: "Lunch on the beach", zh: "沙滩午餐" },
      desc: { it: "Menù: linktr.ee/sundaysmenu", en: "Menu: linktr.ee/sundaysmenu", zh: "菜单：linktr.ee/sundaysmenu" } },
    { t: "18:30", icon: "🔥", title: { it: "Falò in spiaggia + tramonto", en: "Beach bonfire + sunset", zh: "沙滩篝火+日落" },
      desc: { it: "Marshmallow, musica dal vivo, tramonto dalla caletta: il momento più bello della giornata. Cena lì.", en: "Marshmallows, live music, sunset from the cove: the best moment of the day. Dinner there.", zh: "棉花糖、现场音乐、海湾日落：一天中最美的时刻。晚餐就在这里。" } },
    { t: "20:00", icon: "🌙", title: { it: "Rientro in villa", en: "Back to the villa", zh: "返回别墅" },
      desc: { it: "Farsi chiamare un taxi dal club (i Grab serali lì scarseggiano) o tenere pronto l'autista.", en: "Have the club call a taxi (evening Grabs are scarce there) or keep the driver on standby.", zh: "请俱乐部叫出租车（晚间那里Grab很少）或提前联系包车司机。" } },
  ],
  notes: {
    it: ["Niente armadietti: valori grossi in cassaforte in villa, telefono/carta/chiave in dry bag da portare in acqua.", "Posti generali first-come, first-served (si prenotano solo le aree VIP): arrivare alle 10, specie di domenica."],
    en: ["No lockers: big valuables in the villa safe, phone/card/key in a dry bag taken into the water.", "General seating is first-come, first-served (only VIP areas are reservable): arrive at 10, especially on a Sunday."],
    zh: ["无储物柜：贵重物品放别墅保险箱，手机/银行卡/钥匙装防水袋随身下水。", "普通座位先到先得（仅VIP区可预订）：10点到达，周日尤其重要。"]
  },
  transport: {
    it: "Grab all'andata (~16 min); ritorno serale = taxi chiamato dal club o autista concordato.",
    en: "Grab on the way there (~16 min); evening return = club-called taxi or pre-arranged driver.",
    zh: "去程Grab（约16分钟）；晚间返程=俱乐部叫车或事先约好的司机。"
  }
},
// ---------------------------------------------------------- DAY 8
{
  num: 8,
  date: { it: "Lunedì 27 luglio", en: "Monday 27 July", zh: "7月27日 星期一" },
  title: { it: "Suluban Beach + tramonto + Akasa", en: "Suluban Beach + sunset + Akasa", zh: "苏鲁班海滩+日落+Akasa" },
  area: { it: "Balangan / Uluwatu", en: "Balangan / Uluwatu", zh: "巴兰甘 / 乌鲁瓦图" },
  hotel: "Bombora Balangan Resort",
  hotelMap: gm("Bombora Balangan Resort"),
  grad: ["#16261D", "#FF7A48"], emoji: "🕳️",
  intro: {
    it: "L'ultima base, sul mare. Nel pomeriggio la spiaggia-grotta di Suluban con la marea giusta, poi tramonto dalla falesia e cena elegante ad Akasa.",
    en: "The final base, by the sea. In the afternoon Suluban's cave beach at the right tide, then a clifftop sunset and an elegant dinner at Akasa.",
    zh: "最后一站，海边。下午趁低潮探索苏鲁班洞穴海滩，随后悬崖日落，晚上在Akasa享用精致晚餐。"
  },
  timeline: [
    { t: "9:00", icon: "☕", title: { it: "Colazione in villa (inclusa), mattinata lenta", en: "Breakfast at the villa (included), slow morning", zh: "别墅早餐（含），慵懒的上午" }, desc: { it: "", en: "", zh: "" } },
    { t: "10:45", icon: "🧳", title: { it: "Check-out dalla Nunamkhalu", en: "Check-out from Nunamkhalu", zh: "从Nunamkhalu退房" },
      desc: { it: "Bagagli in auto per l'ultimo trasferimento.", en: "Luggage in the car for the last transfer.", zh: "行李上车，进行最后一段转移。" } },
    { t: "11:00", icon: "🚗", title: { it: "Transfer al Bombora (~25 min)", en: "Transfer to Bombora (~25 min)", zh: "前往Bombora (~25分钟)" },
      desc: { it: "Check-in, o deposito bagagli se la camera non è pronta.", en: "Check-in, or luggage storage if the room isn't ready.", zh: "办理入住，房间未备好则先寄存行李。" }, map: gm("Bombora Balangan Resort") },
    { t: "12:30", icon: "🍽️", title: { it: "Pranzo · Bombora Sunset Bar & Cafe", en: "Lunch · Bombora Sunset Bar & Cafe", zh: "午餐 · Bombora Sunset Bar & Cafe" },
      desc: { it: "Nel resort: zero spostamenti.", en: "Inside the resort: zero travel.", zh: "就在度假村内：零移动。" } },
    { t: "13:15", icon: "😴", title: { it: "Relax in camera (fino alle 14:45)", en: "Room downtime (until 14:45)", zh: "客房休息（至14:45）" },
      desc: { it: "Piscina, pisolino, calma piena.", en: "Pool, nap, full calm.", zh: "泳池、小憩、彻底放松。" } },
    { t: "14:45", icon: "🕳️", title: { it: "Suluban Beach / Blue Point (~40 min di strada)", en: "Suluban Beach / Blue Point (~40 min drive)", zh: "苏鲁班海滩 / Blue Point (~40分钟车程)" },
      desc: { it: "Scalinata di ~100 gradini tra bar e botteghe, poi la grande grotta tra pareti a picco, acqua turchese, surfisti. Esplorazione con calma 1h–1h15. Bassa marea stimata ~14:00 (verificare sull'app).", en: "A ~100-step stairway past bars and stalls, then the great cave between sheer walls, turquoise water, surfers. Unhurried exploring 1h–1h15. Estimated low tide ~14:00 (verify on a tide app).", zh: "约100级台阶穿过酒吧和小店，然后进入峭壁间的大洞穴，碧绿海水，冲浪者穿梭。从容探索1–1.25小时。预计低潮约14:00（请用潮汐App核实）。" }, map: gm("Suluban Beach Uluwatu") },
    { t: "16:45", icon: "🍹", title: { it: "Drink al Delphi Cafe + tramonto (~18:10)", en: "Drink at Delphi Cafe + sunset (~18:10)", zh: "Delphi Cafe小酌+日落 (~18:10)" },
      desc: { it: "Mini beach club su un masso sopra la spiaggia, vista pazzesca. Suluban guarda a ovest: uno dei sunset migliori del Bukit.", en: "Mini beach club perched on a boulder above the beach, insane view. Suluban faces west: one of the Bukit's best sunsets.", zh: "建在海滩巨石上的迷你海滩俱乐部，景观绝佳。苏鲁班朝西：布吉半岛最美日落之一。" }, map: gm("Delphi Cafe Uluwatu") },
    { t: "18:25", icon: "🚗", title: { it: "Rientro al Bombora (~40 min), doccia", en: "Back to Bombora (~40 min), shower", zh: "返回Bombora (~40分钟)，洗漱" }, desc: { it: "", en: "", zh: "" } },
    { t: "19:45", icon: "🥂", title: { it: "CENA · AKASA (Jumeirah Bali)", en: "DINNER · AKASA (Jumeirah Bali)", zh: "晚餐 · AKASA (Jumeirah Bali)" },
      desc: { it: "Ristorante del resort Jumeirah sulla scogliera, elegante: smart casual e prenotare. Piano stanchezza: di nuovo Sunset Bar o delivery, e Akasa si sposta a pranzo del G9.", en: "The Jumeirah resort's clifftop restaurant, elegant: smart casual and book ahead. Tiredness plan: Sunset Bar again or delivery, and Akasa moves to Day 9 lunch.", zh: "Jumeirah度假村的悬崖餐厅，格调优雅：着装Smart Casual，需预订。疲劳预案：改回Sunset Bar或点外卖，Akasa顺延至第9天午餐。" }, map: gm("Akasa Jumeirah Bali") },
  ],
  notes: {
    it: ["Marea in risalita dalle 14: grotta e Blue Point restano godibilissimi; il varco verso la spiaggia nascosta va passato solo se chiaramente asciutto — mai restare oltre il varco con marea che sale.", "Niente bagno (correnti, zona surf): esplorare e sguazzare dove è basso.", "Sandali con grip, dry bag; il varco richiede di abbassarsi.", "Al parcheggio di Suluban i Grab non possono riprendere i passeggeri: ritorno con autista o taxi chiamato dal bar."],
    en: ["Tide rising from 14:00: the cave and Blue Point stay fully enjoyable; the rock gap to the hidden beach only if clearly dry — never linger beyond the gap on a rising tide.", "No swimming (currents, surf zone): explore and paddle where it's shallow.", "Grippy sandals, dry bag; the gap requires crouching.", "Grab drivers can't pick up at the Suluban car park: return with the driver or a bar-called taxi."],
    zh: ["14点后涨潮：主洞穴和Blue Point依然可尽情游览；通往隐藏海滩的岩缝仅在明显干燥时通过——涨潮时切勿滞留岩缝外侧。", "禁止游泳（暗流，冲浪区）：只在浅水区探索戏水。", "防滑凉鞋、防水袋；过岩缝需弯腰。", "苏鲁班停车场Grab无法接客：返程用包车或请酒吧叫车。"]
  },
  transport: {
    it: "Transfer mattina: Grab/breve autista (con bagagli). Suluban: autista andata+ritorno concordato. Akasa la sera: Grab breve.",
    en: "Morning transfer: Grab/short driver leg (with luggage). Suluban: pre-arranged driver both ways. Akasa in the evening: short Grab.",
    zh: "上午转移：Grab或短途包车（带行李）。苏鲁班：包车往返。晚上Akasa：Grab短途。"
  }
},
// ---------------------------------------------------------- DAY 9
{
  num: 9,
  date: { it: "Martedì 28 luglio", en: "Tuesday 28 July", zh: "7月28日 星期二" },
  title: { it: "Giorno libero (+ snorkeling di riserva)", en: "Free day (+ backup snorkeling)", zh: "自由日（+备用浮潜）" },
  area: { it: "Balangan e dintorni", en: "Balangan & around", zh: "巴兰甘及周边" },
  hotel: "Bombora Balangan Resort",
  hotelMap: gm("Bombora Balangan Resort"),
  grad: ["#F2B33D", "#FF7A48"], emoji: "🌅",
  intro: {
    it: "Giorno cuscinetto, senza orari: un menù di idee da cui pescare in base a umore e marea. Se lo snorkeling di Padangbai è saltato, qui c'è la carta di riserva.",
    en: "Buffer day, no schedule: a menu of ideas to pick from by mood and tide. If Padangbai's snorkeling fell through, the backup card is here.",
    zh: "缓冲日，无固定日程：根据心情和潮汐从备选清单中挑选。若帕当拜浮潜未成行，备用方案在此。"
  },
  timeline: [
    { t: "—", icon: "🤿", title: { it: "Riserva snorkeling · Tanjung Benoa / Nusa Dua (~45 min)", en: "Backup snorkeling · Tanjung Benoa / Nusa Dua (~45 min)", zh: "备用浮潜 · Tanjung Benoa / 努沙杜瓦 (~45分钟)" },
      desc: { it: "L'unico punto decente del sud: acqua calma protetta dal reef, beginner-friendly, attrezzatura inclusa (~IDR 200–400k). Vita marina modesta rispetto a Padangbai. Barchetta breve; alternative senza onde: Seawalker (casco sul fondale) o snorkeling da riva a Geger Beach. Prenotare su GetYourGuide/Viator/Klook o via villa.", en: "The south's only decent spot: calm reef-protected water, beginner-friendly, gear included (~IDR 200–400k). Modest marine life vs Padangbai. Short boat ride; wave-free alternatives: Seawalker (helmet walk on the seabed) or shore snorkeling at Geger Beach. Book on GetYourGuide/Viator/Klook or via the villa.", zh: "南部唯一像样的浮潜点：礁石保护的平静海水，适合新手，含装备（约20–40万印尼盾）。海洋生物比帕当拜逊色。乘船时间很短；无浪替代方案：Seawalker海底漫步（戴头盔）或Geger海滩岸边浮潜。可在GetYourGuide/Viator/Klook或通过别墅预订。" }, map: gm("Tanjung Benoa snorkeling Bali") },
    { t: "—", icon: "🏖️", title: { it: "Balangan Beach, sotto la villa", en: "Balangan Beach, below the villa", zh: "巴兰甘海滩，别墅楼下" },
      desc: { it: "Passeggiata, bagno, lettino.", en: "Stroll, swim, sunbed.", zh: "漫步、游泳、躺椅。" }, map: gm("Balangan Beach Bali") },
    { t: "—", icon: "💆", title: { it: "Spa di coppia / piscina", en: "Couples spa / pool", zh: "双人SPA / 泳池" }, desc: { it: "", en: "", zh: "" } },
    { t: "—", icon: "🪨", title: { it: "Tegal Wangi Beach (~20 min)", en: "Tegal Wangi Beach (~20 min)", zh: "Tegal Wangi海滩 (~20分钟)" },
      desc: { it: "Caletta con piscine naturali nella roccia — solo con marea bassa (il 28/7 stimata ~14:45–15:45, verificare sull'app). Discesa breve ma ripida, sandali con grip. Combinabile con El Kabron o Jimbaran in un'unica uscita.", en: "Cove with natural rock pools — low tide only (est. ~14:45–15:45 on 28/7, verify on the app). Short but steep descent, grippy sandals. Combinable with El Kabron or Jimbaran in a single outing.", zh: "有天然岩石泳池的小海湾——仅限低潮（7月28日预计14:45–15:45，请用App核实）。下坡短但陡，需防滑凉鞋。可与El Kabron或金巴兰合并为一次出行。" }, map: gm("Tegal Wangi Beach Jimbaran") },
    { t: "—", icon: "🗿", title: { it: "GWK Cultural Park (~30 min)", en: "GWK Cultural Park (~30 min)", zh: "GWK文化公园 (~30分钟)" },
      desc: { it: "La statua di Vishnu su Garuda, 121 m — la più alta dell'Indonesia — con viali monumentali nella roccia calcarea. Si gira a piedi senza fatica: un \"luogo\" più che uno spettacolo.", en: "The 121 m Vishnu-on-Garuda statue — Indonesia's tallest — with monumental limestone avenues. Effortless on foot: a \"place\" rather than a show.", zh: "121米高的毗湿奴骑迦楼罗雕像——印尼最高——石灰岩巨道气势恢宏。步行游览毫不费力：是\"景点\"而非表演。" }, map: gm("GWK Cultural Park Bali") },
    { t: "—", icon: "🌅", title: { it: "Combo Tegal Wangi + Jimbaran Bay", en: "Combo Tegal Wangi + Jimbaran Bay", zh: "Tegal Wangi + 金巴兰湾组合" },
      desc: { it: "Pozze a bassa marea → tramonto → cena di pesce grigliato con i tavoli sulla sabbia (Made Bagus Cafe, honeymoon package; tavolo in spiaggia via WhatsApp). L'alternativa ruspante e romantica a El Kabron.", en: "Rock pools at low tide → sunset → grilled-seafood dinner with tables on the sand (Made Bagus Cafe, honeymoon package; beach table via WhatsApp). The rustic-romantic alternative to El Kabron.", zh: "低潮岩池→日落→沙滩餐桌上的烤海鲜晚餐（Made Bagus Cafe，蜜月套餐；沙滩桌位WhatsApp预订）。是El Kabron的质朴浪漫替代方案。" }, map: gm("Made Bagus Cafe Jimbaran") },
    { t: "—", icon: "🥂", title: { it: "El Kabron, tramonto e/o cena", en: "El Kabron, sunset and/or dinner", zh: "El Kabron，日落和/或晚餐" },
      desc: { it: "Restaurant Area = tavolo normale (sito \"Book Now\" o Chope); Sunset Theater = area romantica a bordo oceano, a pagamento per il posto. Non rimborsabile, +10% servizio +10% tasse.", en: "Restaurant Area = regular table (site \"Book Now\" or Chope); Sunset Theater = romantic ocean-edge area, paid seating. Non-refundable, +10% service +10% tax.", zh: "餐厅区=普通订位（官网\"Book Now\"或Chope）；Sunset Theater=海边浪漫区，座位收费。不可退款，另加10%服务费+10%税。" }, map: gm("El Kabron Bali Pecatu") },
    { t: "—", icon: "🐟", title: { it: "Riserve seafood in zona", en: "Seafood fallbacks nearby", zh: "附近海鲜备选" },
      desc: { it: "Bagus Warung (su Balangan, accanto al resort) o Ulu Fishmarket (~15 min).", en: "Bagus Warung (on Balangan, next to the resort) or Ulu Fishmarket (~15 min).", zh: "Bagus Warung（巴兰甘海滩，度假村旁）或Ulu Fishmarket（约15分钟）。" }, map: gm("Bagus Warung Balangan") },
  ],
  notes: {
    it: ["Al Sundays (G7) lo snorkeling da riva è già coperto: questo giorno è la versione \"reef vero\", non l'unica occasione."],
    en: ["Shore snorkeling was already covered at Sundays (D7): this day is the \"real reef\" version, not the only chance."],
    zh: ["Sundays（第7天）已含岸边浮潜：今天是\"真正珊瑚礁\"版本，并非唯一机会。"]
  },
  transport: {
    it: "Giornata a Grab/spostamenti brevi. Tegal Wangi + El Kabron/Jimbaran: autista per un'unica uscita pomeridiana. Eventuale Tanjung Benoa: autista mezza giornata o tour con pickup.",
    en: "A Grab/short-hop day. Tegal Wangi + El Kabron/Jimbaran: driver for a single afternoon outing. Possible Tanjung Benoa: half-day driver or tour with pickup.",
    zh: "全天Grab短途。Tegal Wangi+El Kabron/金巴兰：下午一次性包车。若去Tanjung Benoa：半天包车或含接送的团。"
  }
},
// ---------------------------------------------------------- DAY 10
{
  num: 10,
  date: { it: "Mercoledì 29 luglio", en: "Wednesday 29 July", zh: "7月29日 星期三" },
  title: { it: "Partenza", en: "Departure", zh: "启程回国" },
  area: { it: "Balangan → aeroporto DPS", en: "Balangan → DPS airport", zh: "巴兰甘 → DPS机场" },
  hotel: "—",
  hotelMap: gm("Ngurah Rai International Airport"),
  grad: ["#16261D", "#2A7F8E"], emoji: "✈️",
  intro: {
    it: "Ultima mattina con calma e margini larghi in aeroporto: oggi zero esperimenti.",
    en: "A calm last morning with wide airport margins: zero experiments today.",
    zh: "最后一个从容的早晨，机场时间留足余量：今天不冒任何险。"
  },
  timeline: [
    { t: "8:30", icon: "☕", title: { it: "Colazione + ultimo caffè su Balangan", en: "Breakfast + one last coffee on Balangan", zh: "早餐+巴兰甘最后一杯咖啡" }, desc: { it: "", en: "", zh: "" } },
    { t: "11:00", icon: "🧳", title: { it: "Check-out", en: "Check-out", zh: "退房" },
      desc: { it: "Chiedere il late check-out qualche giorno prima; in alternativa bagagli alla reception e ancora un po' di spiaggia.", en: "Ask for late check-out a few days ahead; otherwise luggage at reception and a little more beach.", zh: "提前几天申请延迟退房；否则行李寄存前台，再享受一会儿海滩。" } },
    { t: "12:00", icon: "🍽️", title: { it: "Pranzo leggero e presto", en: "Light, early lunch", zh: "提早的清淡午餐" },
      desc: { it: "Al Sunset Bar o in zona: meglio mangiare prima di partire.", en: "At the Sunset Bar or nearby: better to eat before leaving.", zh: "在Sunset Bar或附近：出发前先吃好。" } },
    { t: "12:45", icon: "🚗", title: { it: "Partenza per l'aeroporto (~25–30 min)", en: "Departure for the airport (~25–30 min)", zh: "出发前往机场 (~25–30分钟)" },
      desc: { it: "Margine largo: il traffico di Bali è imprevedibile.", en: "Wide margin: Bali traffic is unpredictable.", zh: "留足余量：巴厘岛交通难以预测。" } },
    { t: "13:30", icon: "🛫", title: { it: "Aeroporto DPS — 3 ore prima del volo", en: "DPS airport — 3 hours before the flight", zh: "DPS机场——起飞前3小时" },
      desc: { it: "La finestra consigliata per gli internazionali in alta stagione. Check-in Malaysia Airlines chiude 60 min prima: cuscino enorme anche con code.", en: "The recommended window for international flights in high season. Malaysia Airlines check-in closes 60 min before: huge cushion even with queues.", zh: "旺季国际航班的推荐时间窗。马航值机于起飞前60分钟截止：即使排队也绰绰有余。" }, map: gm("Ngurah Rai International Airport") },
    { t: "16:25", icon: "✈️", title: { it: "Volo MH850 · Bali → Kuala Lumpur", en: "Flight MH850 · Bali → Kuala Lumpur", zh: "航班 MH850 · 巴厘岛 → 吉隆坡" },
      desc: { it: "Boeing 737 MAX 8, ~3h10. Arrivo a Kuala Lumpur (KUL) alle 19:35.", en: "Boeing 737 MAX 8, ~3h10. Arrives Kuala Lumpur (KUL) at 19:35.", zh: "波音737 MAX 8，约3小时10分。19:35抵达吉隆坡 (KUL)。" }, flightStatus: "https://www.flightradar24.com/data/flights/mh850" },
    { t: "19:35", icon: "🔄", title: { it: "Scalo a Kuala Lumpur (KUL · T1)", en: "Layover in Kuala Lumpur (KUL · T1)", zh: "吉隆坡转机 (KUL · T1)" },
      desc: { it: "~1h30 di attesa. Bagaglio di norma imbarcato fino a destinazione: confermarlo al check-in di Bali.", en: "~1h30 wait. Luggage normally checked through to destination: confirm at Bali check-in.", zh: "约1小时30分。行李通常直挂目的地：在巴厘岛值机时确认。" } },
    { t: "21:05", icon: "✈️", title: { it: "Volo MH522 · Kuala Lumpur → Shenzhen", en: "Flight MH522 · Kuala Lumpur → Shenzhen", zh: "航班 MH522 · 吉隆坡 → 深圳" },
      desc: { it: "Boeing 737 MAX 8, ~4h10.", en: "Boeing 737 MAX 8, ~4h10.", zh: "波音737 MAX 8，约4小时10分。" }, flightStatus: "https://www.flightradar24.com/data/flights/mh522" },
    { t: "01:15", icon: "🛬", title: { it: "Arrivo a Shenzhen (SZX · T3)", en: "Arrival in Shenzhen (SZX · T3)", zh: "抵达深圳 (SZX · T3)" },
      desc: { it: "01:15 di giovedì 30 lug (+1 giorno). Fine del viaggio.", en: "01:15 on Thursday 30 Jul (+1 day). End of the trip.", zh: "7月30日 星期四 凌晨01:15（+1天）。旅程结束。" }, map: gm("Shenzhen Bao'an International Airport") },
  ],
  notes: {
    it: ["Transfer prenotato il giorno prima (villa o autista di fiducia). Niente Grab con le valigie e un volo da prendere."],
    en: ["Transfer booked the day before (villa or trusted driver). No Grab with luggage and a flight to catch."],
    zh: ["前一天预订好送机（别墅或信任的司机）。带着行李赶飞机，不用Grab。"]
  },
  transport: {
    it: "Transfer privato con bagagli (IDR 150–250k), prenotato il giorno prima.",
    en: "Private transfer with luggage (IDR 150–250k), booked the day before.",
    zh: "含行李的专车送机（15–25万印尼盾），前一天预订。"
  }
},
];

// ============================================================
// PACKING
// ============================================================
const PACKING = {
  it: [
    { h: "Per le attività specifiche", items: [
      "Sandali/scarpe con grip — Suluban, Tegal Wangi, discese alle spiagge",
      "Dry bag da collo/vita — telefono, carta e chiave in acqua (Sundays è senza armadietti)",
      "Maschera + boccaglio propri — a Sundays l'attrezzatura dipende dalle maree e ha code",
      "Xamamina + gomme allo zenzero + Sea-Band — per la barca del G4",
      "Cambio completo in borsa nei giorni \"bagnati\" (G4, G7, G8)",
      "Costumi ×2/3 (con l'umidità non asciugano in una notte)",
    ]},
    { h: "Sole & caldo", items: [
      "Crema solare 50+ da casa (lì costa cara) — meglio reef-safe",
      "Doposole, cappello, occhiali da sole",
      "Rash guard / maglietta anti-UV per lo snorkeling",
      "Repellente zanzare (sera, soprattutto a Ubud)",
    ]},
    { h: "Abbigliamento", items: [
      "Tutto leggero e traspirante; un capo smart casual a testa (Akasa/Arcadia/Oliverra)",
      "Pareo/sarong leggero (spiaggia, templi, aria condizionata)",
      "Felpa leggera per le sere (a Ubud rinfresca)",
      "Poncho pioggia tascabile",
    ]},
    { h: "Kit salute", items: [
      "Fermenti, loperamide, sali reidratanti, paracetamolo, cerotti, disinfettante, antistaminico",
    ]},
    { h: "Tecnologia & documenti", items: [
      "eSIM installata prima di partire + power bank",
      "Adattatore prese universale (spine tipo C/F)",
      "Passaporti (6+ mesi validità) + QR salvati offline: e-VOA, e-CD, Love Bali, voucher Lagonara",
      "Contanti in € da cambiare o carta per ATM (banche note)",
    ]},
    { h: "💡 Comprare lì, non portare", items: [
      "Pareo di scorta, infradito da spiaggia, souvenir — al mercato di Ubud costa poco (e si contratta)",
    ]},
  ],
  en: [
    { h: "For the specific activities", items: [
      "Grippy sandals/shoes — Suluban, Tegal Wangi, beach descents",
      "Neck/waist dry bag — phone, card and key into the water (Sundays has no lockers)",
      "Personal mask + snorkel — Sundays gear is tide-dependent with queues",
      "Motion-sickness tablets + ginger gum + Sea-Bands — for the Day 4 boat",
      "Full change of clothes in the bag on \"wet\" days (D4, D7, D8)",
      "Swimsuits ×2/3 (humidity means nothing dries overnight)",
    ]},
    { h: "Sun & heat", items: [
      "SPF 50+ sunscreen from home (pricey there) — reef-safe preferred",
      "After-sun, hat, sunglasses",
      "Rash guard / UV shirt for snorkeling",
      "Mosquito repellent (evenings, especially Ubud)",
    ]},
    { h: "Clothing", items: [
      "Everything light and breathable; one smart-casual outfit each (Akasa/Arcadia/Oliverra)",
      "Light sarong (beach, temples, car AC)",
      "Light jumper for evenings (Ubud cools down)",
      "Pocket rain poncho",
    ]},
    { h: "Health kit", items: [
      "Probiotics, loperamide, rehydration salts, paracetamol, plasters, disinfectant, antihistamine",
    ]},
    { h: "Tech & documents", items: [
      "eSIM installed before departure + power bank",
      "Universal plug adapter (type C/F sockets)",
      "Passports (6+ months validity) + QR codes saved offline: e-VOA, e-CD, Love Bali, Lagonara voucher",
      "Cash to exchange or card for ATMs (major banks)",
    ]},
    { h: "💡 Buy there, don't pack", items: [
      "Spare sarong, beach flip-flops, souvenirs — cheap at Ubud market (and haggling is expected)",
    ]},
  ],
  zh: [
    { h: "针对特定活动", items: [
      "防滑凉鞋/鞋——苏鲁班、Tegal Wangi、海滩下坡路",
      "挂脖/腰式防水袋——手机、银行卡、钥匙随身下水（Sundays无储物柜）",
      "自备面镜+呼吸管——Sundays装备受潮汐影响且需排队",
      "晕船药+姜糖+防晕手环——第4天乘船用",
      "\"湿身日\"（第4、7、8天）包里备全套换洗衣物",
      "泳衣×2/3（潮湿环境一夜晾不干）",
    ]},
    { h: "防晒与炎热", items: [
      "自带SPF50+防晒霜（当地很贵）——最好是珊瑚友好型",
      "晒后修复、帽子、太阳镜",
      "浮潜用防晒衣/UV上衣",
      "驱蚊液（傍晚，尤其乌布）",
    ]},
    { h: "衣物", items: [
      "全部轻薄透气；每人一套Smart Casual（Akasa/Arcadia/Oliverra用）",
      "轻薄纱笼（海滩、神庙、车内空调）",
      "薄外套备晚间（乌布夜晚偏凉）",
      "便携雨披",
    ]},
    { h: "健康药包", items: [
      "益生菌、止泻药、补液盐、扑热息痛、创可贴、消毒液、抗组胺药",
    ]},
    { h: "电子与证件", items: [
      "出发前装好eSIM + 充电宝",
      "万能转换插头（C/F型插座）",
      "护照（有效期6个月以上）+ 离线保存二维码：e-VOA、e-CD、Love Bali、Lagonara凭证",
      "备兑换现金或银行卡（选大银行ATM取现）",
    ]},
    { h: "💡 当地买，不用带", items: [
      "备用纱笼、沙滩拖鞋、纪念品——乌布市场很便宜（可讲价）",
    ]},
  ],
};

// ============================================================
// INFO (bureaucracy / health / practical / driver guide)
// ============================================================
const INFO = {
  it: {
    bureaucracy: [
      "e-VOA (visto on arrival elettronico) — compilare e pagare online su molina.imigrasi.go.id qualche giorno prima: all'arrivo si salta la coda del visto (~IDR 500k a testa, 30 giorni).",
      "e-CD (dichiarazione doganale elettronica) — da compilare online nelle 72h prima dell'arrivo; QR da mostrare in dogana.",
      "Tassa turistica di Bali — ~IDR 150k a testa, online sul portale Love Bali (conservare il QR).",
      "Passaporti validi almeno 6 mesi dall'ingresso, con pagine libere.",
      "eSIM comprata/installata prima di partire (es. Telkomsel/Airalo), da attivare all'atterraggio.",
      "Copie digitali di passaporti, prenotazioni e voli (telefono + cloud).",
    ],
    health: [
      "Assicurazione viaggio con copertura medica: verificarla prima di partire (le cliniche private si pagano care).",
      "\"Bali belly\": solo acqua in bottiglia/filtrata (anche per i denti); occhio a ghiaccio dubbio e cibo crudo. Kit: fermenti, loperamide, sali reidratanti, paracetamolo.",
      "Scimmie (Monkey Forest e dintorni dei templi): niente contatto, niente cibo in mano — piccolo rischio rabbia: in caso di morso/graffio, pulire subito e andare in clinica.",
      "Sole: crema 50+, cappello, acqua sempre.",
      "Mal di mare (G4): pastiglie da casa + gomme allo zenzero + Sea-Band.",
      "Numeri emergenze: 112 (generale) / 118 (ambulanza).",
    ],
    practical: [
      "Meteo: fine luglio = stagione secca, il periodo migliore (sole, sere fresche).",
      "Templi e siti sacri (Goa Gajah; a Melasti la spiaggia è di un villaggio tradizionale): spalle/ginocchia coperte, sarong in prestito dove richiesto.",
      "Soldi: contanti in IDR per warung/mercati/ingressi; carta in hotel e locali grandi. Prelievi da ATM di banche note.",
      "Dry bag: telefono, carta e chiave vengono in acqua (Sundays è senza armadietti; i valori grossi in cassaforte in villa).",
      "Costi indicativi (cambio ~IDR 17.000 = €1), da concordare sempre prima con l'autista.",
    ],
    driver: [
      "AUTISTA a giornata (8–10h): trasferimenti tra zone con bagagli; gite con più tappe e attese (Alas Harum, Padangbai, Suluban/Tegal Wangi); posti remoti senza Grab al ritorno. Costo ~IDR 600–750k locale, 800–900k gite lunghe.",
      "GRAB/GOJEK: spostamenti brevi nella stessa zona (villa→ristorante→spiaggia). 5–15 min ≈ IDR 25–60k. Auto, non scooter.",
      "Nel centro di Ubud e in certe spiagge del Bukit i Grab serali scarseggiano: farsi chiamare un taxi dal locale o tenere il numero WhatsApp dell'autista.",
    ],
  },
  en: {
    bureaucracy: [
      "e-VOA (electronic visa on arrival) — fill in and pay online at molina.imigrasi.go.id a few days ahead: skip the visa queue on arrival (~IDR 500k each, 30 days).",
      "e-CD (electronic customs declaration) — to be filled online within 72h of arrival; QR shown at customs.",
      "Bali tourist levy — ~IDR 150k each, online on the Love Bali portal (keep the QR).",
      "Passports valid 6+ months from entry, with free pages.",
      "eSIM bought/installed before departure (e.g. Telkomsel/Airalo), activated on landing.",
      "Digital copies of passports, bookings and flights (phone + cloud).",
    ],
    health: [
      "Travel insurance with medical cover: check it before leaving (private clinics are expensive).",
      "\"Bali belly\": bottled/filtered water only (teeth included); beware of dubious ice and raw food. Kit: probiotics, loperamide, rehydration salts, paracetamol.",
      "Monkeys (Monkey Forest and temple surroundings): no contact, no food in hand — small rabies risk: if bitten/scratched, clean at once and go to a clinic.",
      "Sun: SPF 50+, hat, water always.",
      "Seasickness (D4): tablets from home + ginger gum + Sea-Bands.",
      "Emergency numbers: 112 (general) / 118 (ambulance).",
    ],
    practical: [
      "Weather: late July = dry season, the best window (sun, cool evenings).",
      "Temples and sacred sites (Goa Gajah; Melasti beach belongs to a traditional village): shoulders/knees covered, sarongs lent where required.",
      "Money: IDR cash for warungs/markets/entries; card at hotels and larger venues. ATMs of major banks.",
      "Dry bag: phone, card and key go into the water (Sundays has no lockers; big valuables in the villa safe).",
      "Costs are indicative (rate ~IDR 17,000 = €1), always agreed with the driver beforehand.",
    ],
    driver: [
      "Day DRIVER (8–10h): transfers between areas with luggage; multi-stop outings with waits (Alas Harum, Padangbai, Suluban/Tegal Wangi); remote spots with no Grab for the return. Cost ~IDR 600–750k local, 800–900k long trips.",
      "GRAB/GOJEK: short hops within the same area (villa→restaurant→beach). 5–15 min ≈ IDR 25–60k. Car, not scooter.",
      "In Ubud centre and at some Bukit beaches evening Grabs are scarce: have the venue call a taxi or keep the driver's WhatsApp.",
    ],
  },
  zh: {
    bureaucracy: [
      "e-VOA电子落地签——出发前几天在 molina.imigrasi.go.id 在线填写并付款：抵达后免排签证队（约每人50万印尼盾，30天有效）。",
      "e-CD电子海关申报——抵达前72小时内在线填写；过关时出示二维码。",
      "巴厘岛旅游税——约每人15万印尼盾，在Love Bali官网在线缴纳（保存二维码）。",
      "护照自入境起有效期需6个月以上，且有空白页。",
      "出发前购买/安装eSIM（如Telkomsel/Airalo），落地激活。",
      "护照、预订和机票的电子备份（手机+云端）。",
    ],
    health: [
      "含医疗保障的旅行保险：出发前确认（当地私立诊所收费高）。",
      "\"巴厘肚\"：只喝瓶装/过滤水（刷牙也是）；当心可疑冰块和生食。药包：益生菌、止泻药、补液盐、扑热息痛。",
      "猴子（猴林及神庙周边）：不接触、手上不拿食物——有轻微狂犬病风险：若被咬/抓伤，立即清洗并就医。",
      "防晒：SPF50+、帽子、随时补水。",
      "晕船（第4天）：自备药片+姜糖+防晕手环。",
      "急救电话：112（综合）/ 118（救护车）。",
    ],
    practical: [
      "天气：7月下旬=旱季，最佳时节（晴朗，夜晚凉爽）。",
      "神庙及圣地（象窟；美拉斯蒂海滩属传统村落）：遮盖肩膀/膝盖，需要时入口处可借纱笼。",
      "钱：小馆/市场/门票用印尼盾现金；酒店和大型场所可刷卡。选大银行ATM取现。",
      "防水袋：手机、银行卡、钥匙随身下水（Sundays无储物柜；贵重物品放别墅保险箱）。",
      "费用为参考值（汇率约17,000印尼盾=1欧元），包车价务必事先谈好。",
    ],
    driver: [
      "全天包车（8–10小时）：跨区域带行李转移；多站点含等候的出行（Alas Harum、帕当拜、苏鲁班/Tegal Wangi）；返程打不到Grab的偏远地点。价格：本地约60–75万印尼盾，长途80–90万。",
      "GRAB/GOJEK：同区域短途（别墅→餐厅→海滩）。5–15分钟约2.5–6万印尼盾。选汽车，不选摩托。",
      "乌布市中心和布吉部分海滩晚间Grab稀少：请店家叫车或保存包车司机WhatsApp。",
    ],
  },
};

// ============================================================
// BOOKINGS checklist
// ============================================================
const BOOKING_CATS = {
  it: [
    { id: "alloggi",    icon: "🏨", label: "Alloggi" },
    { id: "voli",       icon: "✈️", label: "Voli" },
    { id: "ristoranti", icon: "🍽️", label: "Ristoranti" },
    { id: "attivita",   icon: "🎟️", label: "Attività" },
    { id: "trasporti",  icon: "🚗", label: "Trasporti" },
  ],
  en: [
    { id: "alloggi",    icon: "🏨", label: "Stays" },
    { id: "voli",       icon: "✈️", label: "Flights" },
    { id: "ristoranti", icon: "🍽️", label: "Restaurants" },
    { id: "attivita",   icon: "🎟️", label: "Activities" },
    { id: "trasporti",  icon: "🚗", label: "Transport" },
  ],
  zh: [
    { id: "alloggi",    icon: "🏨", label: "住宿" },
    { id: "voli",       icon: "✈️", label: "航班" },
    { id: "ristoranti", icon: "🍽️", label: "餐厅" },
    { id: "attivita",   icon: "🎟️", label: "活动" },
    { id: "trasporti",  icon: "🚗", label: "交通" },
  ],
};

const BOOKINGS = {
  it: [
    // ---- ALLOGGI (tutti già prenotati · check-in dalle 14:00 · check-out entro le 12:00) ----
    { cat: "alloggi", s: "🏝️", what: "Dewani Villa Resort", sub: "Kerobokan / Umalas", map: gm("Dewani Villa Resort Bali"), rows: [
      ["Soggiorno", "20 → 21 lug · 1 notte"], ["Check-in / out", "dalle 14:00 / entro le 12:00"], ["Colazione", "Inclusa"], ["Stato", "Prenotato ✓"] ] },
    { cat: "alloggi", s: "🌿", what: "The Sakara Ubud Villas", sub: "Ubud", map: gm("The Sakara Ubud Villas"), rows: [
      ["Soggiorno", "21 → 22 lug · 1 notte"], ["Check-in / out", "dalle 14:00 / entro le 12:00"], ["Colazione", "Inclusa"], ["Stato", "Prenotato ✓"] ] },
    { cat: "alloggi", s: "🛕", what: "Nau Villa Ubud", sub: "Tegallalang", map: gm("Nau Villa Ubud Tegallalang"), rows: [
      ["Soggiorno", "22 → 24 lug · 2 notti"], ["Check-in / out", "dalle 14:00 / entro le 12:00"], ["Colazione", "Non inclusa (Capung Coffee a ~250 m; oppure floating breakfast a pagamento)"], ["Stato", "Prenotato ✓"] ] },
    { cat: "alloggi", s: "🌾", what: "Mahajiva", sub: "Sibang Kaja (Ubud sud)", map: gm("Mahajiva Sibang Kaja Bali"), rows: [
      ["Soggiorno", "24 → 25 lug · 1 notte"], ["Check-in / out", "dalle 14:00 / entro le 12:00"], ["Colazione", "Non inclusa (Taani a ~1 min; oppure delivery)"], ["Stato", "Prenotato ✓"] ] },
    { cat: "alloggi", s: "🌺", what: "Nunamkhalu Private Villas & Spa", sub: "Ungasan (Bukit)", map: gm("Nunamkhalu Private Villas Spa Ungasan"), rows: [
      ["Soggiorno", "25 → 27 lug · 2 notti"], ["Check-in / out", "dalle 14:00 / entro le 12:00"], ["Colazione", "Inclusa"], ["Stato", "Prenotato ✓"] ] },
    { cat: "alloggi", s: "🌊", what: "Bombora Balangan Resort", sub: "Balangan (Bukit)", map: gm("Bombora Balangan Resort"), rows: [
      ["Soggiorno", "27 → 29 lug · 2 notti"], ["Check-in / out", "dalle 14:00 / entro le 12:00"], ["Colazione", "Inclusa"], ["Stato", "Prenotato ✓"] ] },

    // ---- VOLI (Malaysia Airlines · Shenzhen ⇄ Kuala Lumpur ⇄ Bali) ----
    { cat: "voli", s: "🛫", what: "MH523 · Shenzhen → Kuala Lumpur", rows: [
      ["Data", "Lun 20 lug"], ["Orari", "02:45 → 06:45 (SZX → KUL)"], ["Aereo", "Boeing 737-8 · ~4h"], ["Scalo", "A Kuala Lumpur, ~2h15 prima del volo per Bali"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh523" },
    { cat: "voli", s: "🛬", what: "MH715 · Kuala Lumpur → Bali", rows: [
      ["Data", "Lun 20 lug"], ["Orari", "09:00 → 11:47 (KUL → DPS)"], ["Aereo", "Airbus A330-300 · ~3h05"], ["Arrivo", "Denpasar (DPS), Terminal Internazionale"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh715" },
    { cat: "voli", s: "🛫", what: "MH850 · Bali → Kuala Lumpur", rows: [
      ["Data", "Mer 29 lug"], ["Orari", "16:25 → 19:35 (DPS → KUL)"], ["Aereo", "Boeing 737 MAX 8 · ~3h10"], ["Scalo", "A Kuala Lumpur (T1), ~1h30 prima del volo per Shenzhen"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh850" },
    { cat: "voli", s: "🛬", what: "MH522 · Kuala Lumpur → Shenzhen", rows: [
      ["Data", "Mer 29 lug"], ["Orari", "21:05 → 01:15 +1 (KUL → SZX)"], ["Aereo", "Boeing 737 MAX 8 · ~4h10"], ["Note", "Bagaglio di norma imbarcato fino a destinazione: confermare al check-in"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh522" },

    // ---- RISTORANTI ----
    { cat: "ristoranti", s: "🥂", what: "Arcadia (G5, ~18:45)", rows: [
      ["Quando", "Appena possibile (spesso caparra)"], ["Come", "WhatsApp — segnalare l'occasione speciale"] ] },
    { cat: "ristoranti", s: "🍷", what: "Uma Garden (G1, cena ~19:00)", rows: [
      ["Quando", "Qualche giorno prima"], ["Come", "WhatsApp/sito — tavolo in giardino"] ] },
    { cat: "ristoranti", s: "🍽️", what: "AKASA – Jumeirah (G8, cena ~19:45)", rows: [
      ["Quando", "2–3 giorni prima"], ["Come", "Sito/WhatsApp — smart casual"] ] },
    { cat: "ristoranti", s: "🍽️", what: "Oliverra (G6, ~19:00; riserva WAATU)", rows: [
      ["Quando", "2–3 giorni prima"], ["Come", "WhatsApp/Instagram"] ] },
    { cat: "ristoranti", s: "🌅", what: "El Kabron (G9, se scelto)", rows: [
      ["Quando", "2–3 giorni prima"], ["Come", "Restaurant Area: sito \"Book Now\" o Chope. Sunset Theater: posto a pagamento. Non rimborsabile, +10%+10%"] ] },

    // ---- ATTIVITÀ ----
    { cat: "attivita", s: "✅", what: "Lagonara Snorkeling (G4, 12:00, barca privata 2h)", rows: [
      ["Quando", "Fatto"], ["Come", "WhatsApp — riconferma condizioni mare la sera del 22/7"] ] },
    { cat: "attivita", s: "💆", what: "Svaha Spa Umalas (G1, ~16:00)", rows: [
      ["Quando", "Qualche giorno prima della partenza"], ["Come", "WhatsApp — \"Balinese Couple Massage\""] ] },
    { cat: "attivita", s: "🛟", what: "Floating breakfast alla Nau (G5, 8:30)", rows: [
      ["Quando", "Al check-in alla Nau (G3) o prima"], ["Come", "Direttamente con la villa (a pagamento)"] ] },
    { cat: "attivita", s: "🏖️", what: "Sundays (G7)", rows: [
      ["Quando", "Non prenotabile (solo VIP)"], ["Come", "Posti first-come → arrivare alle 10:00"] ] },
    { cat: "attivita", s: "🌊", what: "Verifica maree (G8 Suluban, G9 Tegal Wangi)", rows: [
      ["Quando", "Qualche giorno prima + il giorno stesso"], ["Come", "App maree (Tide Charts) o sundaysbeachclub.com/bali-tide-chart"] ] },

    // ---- TRASPORTI ----
    { cat: "trasporti", s: "✈️", what: "Transfer aeroporto (G1 e G10)", rows: [
      ["Quando", "Prima della partenza / il giorno prima"], ["Come", "Villa o servizio transfer"] ] },
    { cat: "trasporti", s: "🚗", what: "Autista fidato", rows: [
      ["Quando", "Dal G2, poi su WhatsApp"], ["Come", "Tramite la villa o recensioni"] ] },
  ],

  en: [
    // ---- STAYS (all booked · check-in from 14:00 · check-out by 12:00) ----
    { cat: "alloggi", s: "🏝️", what: "Dewani Villa Resort", sub: "Kerobokan / Umalas", map: gm("Dewani Villa Resort Bali"), rows: [
      ["Stay", "20 → 21 Jul · 1 night"], ["Check-in / out", "from 14:00 / by 12:00"], ["Breakfast", "Included"], ["Status", "Booked ✓"] ] },
    { cat: "alloggi", s: "🌿", what: "The Sakara Ubud Villas", sub: "Ubud", map: gm("The Sakara Ubud Villas"), rows: [
      ["Stay", "21 → 22 Jul · 1 night"], ["Check-in / out", "from 14:00 / by 12:00"], ["Breakfast", "Included"], ["Status", "Booked ✓"] ] },
    { cat: "alloggi", s: "🛕", what: "Nau Villa Ubud", sub: "Tegallalang", map: gm("Nau Villa Ubud Tegallalang"), rows: [
      ["Stay", "22 → 24 Jul · 2 nights"], ["Check-in / out", "from 14:00 / by 12:00"], ["Breakfast", "Not included (Capung Coffee ~250 m; or paid floating breakfast)"], ["Status", "Booked ✓"] ] },
    { cat: "alloggi", s: "🌾", what: "Mahajiva", sub: "Sibang Kaja (South Ubud)", map: gm("Mahajiva Sibang Kaja Bali"), rows: [
      ["Stay", "24 → 25 Jul · 1 night"], ["Check-in / out", "from 14:00 / by 12:00"], ["Breakfast", "Not included (Taani ~1 min; or delivery)"], ["Status", "Booked ✓"] ] },
    { cat: "alloggi", s: "🌺", what: "Nunamkhalu Private Villas & Spa", sub: "Ungasan (Bukit)", map: gm("Nunamkhalu Private Villas Spa Ungasan"), rows: [
      ["Stay", "25 → 27 Jul · 2 nights"], ["Check-in / out", "from 14:00 / by 12:00"], ["Breakfast", "Included"], ["Status", "Booked ✓"] ] },
    { cat: "alloggi", s: "🌊", what: "Bombora Balangan Resort", sub: "Balangan (Bukit)", map: gm("Bombora Balangan Resort"), rows: [
      ["Stay", "27 → 29 Jul · 2 nights"], ["Check-in / out", "from 14:00 / by 12:00"], ["Breakfast", "Included"], ["Status", "Booked ✓"] ] },

    // ---- FLIGHTS ----
    { cat: "voli", s: "🛫", what: "MH523 · Shenzhen → Kuala Lumpur", rows: [
      ["Date", "Mon 20 Jul"], ["Times", "02:45 → 06:45 (SZX → KUL)"], ["Aircraft", "Boeing 737-8 · ~4h"], ["Layover", "In Kuala Lumpur, ~2h15 before the Bali flight"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh523" },
    { cat: "voli", s: "🛬", what: "MH715 · Kuala Lumpur → Bali", rows: [
      ["Date", "Mon 20 Jul"], ["Times", "09:00 → 11:47 (KUL → DPS)"], ["Aircraft", "Airbus A330-300 · ~3h05"], ["Arrival", "Denpasar (DPS), International Terminal"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh715" },
    { cat: "voli", s: "🛫", what: "MH850 · Bali → Kuala Lumpur", rows: [
      ["Date", "Wed 29 Jul"], ["Times", "16:25 → 19:35 (DPS → KUL)"], ["Aircraft", "Boeing 737 MAX 8 · ~3h10"], ["Layover", "In Kuala Lumpur (T1), ~1h30 before the Shenzhen flight"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh850" },
    { cat: "voli", s: "🛬", what: "MH522 · Kuala Lumpur → Shenzhen", rows: [
      ["Date", "Wed 29 Jul"], ["Times", "21:05 → 01:15 +1 (KUL → SZX)"], ["Aircraft", "Boeing 737 MAX 8 · ~4h10"], ["Note", "Luggage usually checked through to destination: confirm at check-in"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh522" },

    // ---- RESTAURANTS ----
    { cat: "ristoranti", s: "🥂", what: "Arcadia (D5, ~18:45)", rows: [
      ["When", "As soon as possible (deposit likely)"], ["How", "WhatsApp — mention the special occasion"] ] },
    { cat: "ristoranti", s: "🍷", what: "Uma Garden (D1, dinner ~19:00)", rows: [
      ["When", "A few days ahead"], ["How", "WhatsApp/site — garden table"] ] },
    { cat: "ristoranti", s: "🍽️", what: "AKASA – Jumeirah (D8, dinner ~19:45)", rows: [
      ["When", "2–3 days ahead"], ["How", "Site/WhatsApp — smart casual"] ] },
    { cat: "ristoranti", s: "🍽️", what: "Oliverra (D6, ~19:00; WAATU backup)", rows: [
      ["When", "2–3 days ahead"], ["How", "WhatsApp/Instagram"] ] },
    { cat: "ristoranti", s: "🌅", what: "El Kabron (D9, if chosen)", rows: [
      ["When", "2–3 days ahead"], ["How", "Restaurant Area: site \"Book Now\" or Chope. Sunset Theater: paid seating. Non-refundable, +10%+10%"] ] },

    // ---- ACTIVITIES ----
    { cat: "attivita", s: "✅", what: "Lagonara Snorkeling (D4, 12:00, private boat 2h)", rows: [
      ["When", "Done"], ["How", "WhatsApp — reconfirm sea conditions on the evening of 22/7"] ] },
    { cat: "attivita", s: "💆", what: "Svaha Spa Umalas (D1, ~16:00)", rows: [
      ["When", "A few days before departure"], ["How", "WhatsApp — \"Balinese Couple Massage\""] ] },
    { cat: "attivita", s: "🛟", what: "Floating breakfast at Nau (D5, 8:30)", rows: [
      ["When", "At Nau check-in (D3) or earlier"], ["How", "Directly with the villa (paid)"] ] },
    { cat: "attivita", s: "🏖️", what: "Sundays (D7)", rows: [
      ["When", "Not bookable (VIP only)"], ["How", "First-come seating → arrive at 10:00"] ] },
    { cat: "attivita", s: "🌊", what: "Tide check (D8 Suluban, D9 Tegal Wangi)", rows: [
      ["When", "A few days ahead + same day"], ["How", "Tide app (Tide Charts) or sundaysbeachclub.com/bali-tide-chart"] ] },

    // ---- TRANSPORT ----
    { cat: "trasporti", s: "✈️", what: "Airport transfers (D1 and D10)", rows: [
      ["When", "Before departure / the day before"], ["How", "Villa or transfer service"] ] },
    { cat: "trasporti", s: "🚗", what: "Trusted driver", rows: [
      ["When", "From D2, then on WhatsApp"], ["How", "Via the villa or reviews"] ] },
  ],

  zh: [
    // ---- 住宿（全部已预订 · 14:00起入住 · 12:00前退房） ----
    { cat: "alloggi", s: "🏝️", what: "Dewani Villa Resort", sub: "克罗博坎 / 乌马拉斯", map: gm("Dewani Villa Resort Bali"), rows: [
      ["入住时段", "7月20 → 21日 · 1晚"], ["入住 / 退房", "14:00起 / 12:00前"], ["早餐", "含"], ["状态", "已预订 ✓"] ] },
    { cat: "alloggi", s: "🌿", what: "The Sakara Ubud Villas", sub: "乌布", map: gm("The Sakara Ubud Villas"), rows: [
      ["入住时段", "7月21 → 22日 · 1晚"], ["入住 / 退房", "14:00起 / 12:00前"], ["早餐", "含"], ["状态", "已预订 ✓"] ] },
    { cat: "alloggi", s: "🛕", what: "Nau Villa Ubud", sub: "特加拉朗", map: gm("Nau Villa Ubud Tegallalang"), rows: [
      ["入住时段", "7月22 → 24日 · 2晚"], ["入住 / 退房", "14:00起 / 12:00前"], ["早餐", "不含（Capung Coffee约250米；或付费漂浮早餐）"], ["状态", "已预订 ✓"] ] },
    { cat: "alloggi", s: "🌾", what: "Mahajiva", sub: "Sibang Kaja（乌布南部）", map: gm("Mahajiva Sibang Kaja Bali"), rows: [
      ["入住时段", "7月24 → 25日 · 1晚"], ["入住 / 退房", "14:00起 / 12:00前"], ["早餐", "不含（Taani约1分钟；或外卖）"], ["状态", "已预订 ✓"] ] },
    { cat: "alloggi", s: "🌺", what: "Nunamkhalu Private Villas & Spa", sub: "乌干沙（布吉）", map: gm("Nunamkhalu Private Villas Spa Ungasan"), rows: [
      ["入住时段", "7月25 → 27日 · 2晚"], ["入住 / 退房", "14:00起 / 12:00前"], ["早餐", "含"], ["状态", "已预订 ✓"] ] },
    { cat: "alloggi", s: "🌊", what: "Bombora Balangan Resort", sub: "巴兰甘（布吉）", map: gm("Bombora Balangan Resort"), rows: [
      ["入住时段", "7月27 → 29日 · 2晚"], ["入住 / 退房", "14:00起 / 12:00前"], ["早餐", "含"], ["状态", "已预订 ✓"] ] },

    // ---- 航班 ----
    { cat: "voli", s: "🛫", what: "MH523 · 深圳 → 吉隆坡", rows: [
      ["日期", "7月20日 周一"], ["时间", "02:45 → 06:45 (SZX → KUL)"], ["机型", "波音737-8 · 约4小时"], ["中转", "吉隆坡，距飞巴厘岛航班约2小时15分"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh523" },
    { cat: "voli", s: "🛬", what: "MH715 · 吉隆坡 → 巴厘岛", rows: [
      ["日期", "7月20日 周一"], ["时间", "09:00 → 11:47 (KUL → DPS)"], ["机型", "空客A330-300 · 约3小时05分"], ["抵达", "登巴萨 (DPS)，国际航站楼"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh715" },
    { cat: "voli", s: "🛫", what: "MH850 · 巴厘岛 → 吉隆坡", rows: [
      ["日期", "7月29日 周三"], ["时间", "16:25 → 19:35 (DPS → KUL)"], ["机型", "波音737 MAX 8 · 约3小时10分"], ["中转", "吉隆坡（T1），距飞深圳航班约1小时30分"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh850" },
    { cat: "voli", s: "🛬", what: "MH522 · 吉隆坡 → 深圳", rows: [
      ["日期", "7月29日 周三"], ["时间", "21:05 → 01:15 +1 (KUL → SZX)"], ["机型", "波音737 MAX 8 · 约4小时10分"], ["备注", "行李通常直挂目的地：值机时确认"] ], flightStatus: "https://www.flightradar24.com/data/flights/mh522" },

    // ---- 餐厅 ----
    { cat: "ristoranti", s: "🥂", what: "Arcadia（第5天，约18:45）", rows: [
      ["时间", "尽快（通常需订金）"], ["方式", "WhatsApp——注明特殊纪念日"] ] },
    { cat: "ristoranti", s: "🍷", what: "Uma Garden（第1天，晚餐约19:00）", rows: [
      ["时间", "提前几天"], ["方式", "WhatsApp/官网——花园座位"] ] },
    { cat: "ristoranti", s: "🍽️", what: "AKASA – Jumeirah（第8天，晚餐约19:45）", rows: [
      ["时间", "提前2–3天"], ["方式", "官网/WhatsApp——Smart Casual着装"] ] },
    { cat: "ristoranti", s: "🍽️", what: "Oliverra（第6天，约19:00；备选WAATU）", rows: [
      ["时间", "提前2–3天"], ["方式", "WhatsApp/Instagram"] ] },
    { cat: "ristoranti", s: "🌅", what: "El Kabron（第9天，若选择）", rows: [
      ["时间", "提前2–3天"], ["方式", "餐厅区：官网\"Book Now\"或Chope。Sunset Theater：座位收费。不可退款，+10%+10%"] ] },

    // ---- 活动 ----
    { cat: "attivita", s: "✅", what: "Lagonara浮潜（第4天，12:00，私人船2小时）", rows: [
      ["时间", "已完成"], ["方式", "WhatsApp——7月22日晚再次确认海况"] ] },
    { cat: "attivita", s: "💆", what: "Svaha Spa Umalas（第1天，约16:00）", rows: [
      ["时间", "出发前几天"], ["方式", "WhatsApp——\"巴厘岛双人按摩\""] ] },
    { cat: "attivita", s: "🛟", what: "Nau漂浮早餐（第5天，8:30）", rows: [
      ["时间", "第3天入住时或更早"], ["方式", "直接向别墅预订（收费）"] ] },
    { cat: "attivita", s: "🏖️", what: "Sundays（第7天）", rows: [
      ["时间", "不可预订（仅VIP区）"], ["方式", "先到先得→10:00到达"] ] },
    { cat: "attivita", s: "🌊", what: "查潮汐（第8天苏鲁班，第9天Tegal Wangi）", rows: [
      ["时间", "提前几天+当天"], ["方式", "潮汐App（Tide Charts）或 sundaysbeachclub.com/bali-tide-chart"] ] },

    // ---- 交通 ----
    { cat: "trasporti", s: "✈️", what: "机场接送（第1天和第10天）", rows: [
      ["时间", "出发前/前一天"], ["方式", "别墅或接送服务"] ] },
    { cat: "trasporti", s: "🚗", what: "可靠包车司机", rows: [
      ["时间", "第2天起，保存WhatsApp"], ["方式", "通过别墅或查评价"] ] },
  ],
};

// ============================================================
// FLEX table
// ============================================================
const FLEX = {
  it: [
    ["🤿 Snorkeling Padangbai", "G4", "Caletta del Sundays (G7, da riva); reef di Tanjung Benoa (G9); o piano B \"cascate\""],
    ["🦍 Faccia di gorilla — Alas Harum (unico must)", "G5", "Spostabile a un altro momento a Tegallalang (es. G3); aperto ogni giorno"],
    ["🥂 Cena romantica (Arcadia)", "G5", "Qualsiasi sera a Ubud (G2–G5); in alternativa Oliverra/WAATU al Bukit"],
    ["🕳️ Suluban Beach", "G8", "Le pozze a bassa marea hanno il gemello a Tegal Wangi (G9); Suluban vale anche solo per grotta+tramonto"],
  ],
  en: [
    ["🤿 Padangbai snorkeling", "D4", "Sundays cove (D7, from shore); Tanjung Benoa reef (D9); or the \"waterfalls\" plan B"],
    ["🦍 Gorilla face — Alas Harum (the one must)", "D5", "Movable to another Tegallalang moment (e.g. D3); open daily"],
    ["🥂 Romantic dinner (Arcadia)", "D5", "Any Ubud evening (D2–D5); alternatively Oliverra/WAATU on the Bukit"],
    ["🕳️ Suluban Beach", "D8", "Low-tide pools have a twin at Tegal Wangi (D9); Suluban is worth it for cave+sunset alone"],
  ],
  zh: [
    ["🤿 帕当拜浮潜", "第4天", "Sundays海湾（第7天，岸边）；Tanjung Benoa礁（第9天）；或备选\"瀑布\"方案"],
    ["🦍 大猩猩石雕——Alas Harum（唯一必去）", "第5天", "可改至特加拉朗的其他时段（如第3天）；每日开放"],
    ["🥂 浪漫晚餐（Arcadia）", "第5天", "乌布任一晚（第2–5天）；或改布吉的Oliverra/WAATU"],
    ["🕳️ 苏鲁班海滩", "第8天", "低潮岩池在Tegal Wangi（第9天）有\"孪生版\"；仅为洞穴+日落也值得"],
  ],
};
