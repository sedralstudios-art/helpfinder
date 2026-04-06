// ============================================
// CHUNK_11_V2: src/components/HelpFinder.jsx
// Complete rebuild. Clean. No merge required.
// 231 programs. Redesigned UI. Legal cross-links.
// Municipality-aware. 8 languages. Private.
// ============================================

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import {
  C, FONT, RADIUS, MAX_WIDTH,
  HELP_LANGUAGES,
  QUICK_EXIT_URL,
} from '../constants'
import { useMunicipalityDetect } from '../hooks/useCountyDetect'
import MunicipalityPrompt from './MunicipalityPrompt'

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────

const T = {
  en: {
    title: 'Free Help Near You',
    sub: 'No account. No data. No cost.',
    searchPlaceholder: 'Describe what you need — we\'ll find the right help',
    searchBtn: 'Search',
    quickTiles: 'What do you need?',
    tileFood: 'Food', tileFoodSub: 'Food pantries, meal programs, SNAP',
    tileHousing: 'Housing', tileHousingSub: 'Emergency shelter, rental help, eviction',
    tileCrisis: 'Crisis', tileCrisisSub: 'Mental health, hotlines, immediate help',
    tileHealth: 'Healthcare', tileHealthSub: 'Medical, dental, mental health',
    seeAll: 'See all categories',
    hideAll: 'Hide categories',
    results: 'resources found',
    noResults: 'No results found. Try different words.',
    callNow: 'Call',
    website: 'Website',
    hours: 'Hours',
    eligibility: 'Who qualifies',
    documents: 'What to bring',
    note: 'Note',
    legalLinks: 'Know your rights in this situation',
    legalLinksSub: 'Related legal information — free',
    viewLegal: 'Read your rights →',
    nearMe: 'Near Me',
    nearMeActive: 'Sorted by distance',
    interpreterNotice: 'Free interpreter available — ask when you call',
    dvSafety: 'If you are in danger, call 911. Quick Exit button above.',
    crisisNote: 'If you are in crisis right now, call or text 988.',
    privacyNote: 'Sensitive category — this page leaves no trace on your device.',
    quickExit: 'Quick Exit',
    back: '← Back',
    allCategories: 'All Categories',
    filterWho: 'Who needs help?',
    filterHow: 'Income level',
    anyone: 'Anyone',
    noIncome: 'No income required',
    lowIncome: 'Low income',
    footer: 'Built with nothing. Built for everyone.',
    footerNote: 'Sedral Studios · Named for Steven.',
  },
  es: {
    title: 'Ayuda Gratis Cerca de Ti',
    sub: 'Sin cuenta. Sin datos. Sin costo.',
    searchPlaceholder: 'Describe lo que necesitas',
    searchBtn: 'Buscar',
    quickTiles: '¿Qué necesitas?',
    tileFood: 'Comida', tileFoodSub: 'Despensas, programas de comidas, SNAP',
    tileHousing: 'Vivienda', tileHousingSub: 'Refugio de emergencia, ayuda de renta',
    tileCrisis: 'Crisis', tileCrisisSub: 'Salud mental, líneas de ayuda',
    tileHealth: 'Salud', tileHealthSub: 'Médico, dental, salud mental',
    seeAll: 'Ver todas las categorías',
    hideAll: 'Ocultar categorías',
    results: 'recursos encontrados',
    noResults: 'No se encontraron resultados.',
    callNow: 'Llamar',
    website: 'Sitio web',
    hours: 'Horario',
    eligibility: 'Quién califica',
    documents: 'Qué traer',
    note: 'Nota',
    legalLinks: 'Conoce tus derechos en esta situación',
    legalLinksSub: 'Información legal relacionada — gratis',
    viewLegal: 'Leer tus derechos →',
    nearMe: 'Cerca de mí',
    nearMeActive: 'Ordenado por distancia',
    interpreterNotice: 'Intérprete gratuito disponible — pregunte al llamar',
    dvSafety: 'Si está en peligro, llame al 911.',
    crisisNote: 'Si está en crisis ahora mismo, llame o envíe un mensaje al 988.',
    privacyNote: 'Categoría sensible — esta página no deja rastro.',
    quickExit: 'Salida Rápida',
    back: '← Atrás',
    allCategories: 'Todas las Categorías',
    filterWho: '¿Quién necesita ayuda?',
    filterHow: 'Nivel de ingresos',
    anyone: 'Cualquier persona',
    noIncome: 'Sin requisito de ingresos',
    lowIncome: 'Bajos ingresos',
    footer: 'Construido con nada. Construido para todos.',
    footerNote: 'Sedral Studios · En nombre de Steven.',
  },
  ne: {
    title: 'नजिकमा नि:शुल्क सहायता',
    sub: 'कुनै खाता छैन। कुनै डाटा छैन। कुनै शुल्क छैन।',
    searchPlaceholder: 'तपाईंलाई के चाहिन्छ वर्णन गर्नुहोस्',
    searchBtn: 'खोज्नुहोस्',
    quickTiles: 'तपाईंलाई के चाहिन्छ?',
    tileFood: 'खाना', tileFoodSub: 'खाद्य बैंक, खाना कार्यक्रम',
    tileHousing: 'आवास', tileHousingSub: 'आपतकालीन आश्रय, भाडा सहायता',
    tileCrisis: 'संकट', tileCrisisSub: 'मानसिक स्वास्थ्य, हटलाइन',
    tileHealth: 'स्वास्थ्य', tileHealthSub: 'चिकित्सा, दन्त, मानसिक स्वास्थ्य',
    seeAll: 'सबै श्रेणीहरू हेर्नुहोस्',
    hideAll: 'श्रेणीहरू लुकाउनुहोस्',
    results: 'स्रोतहरू फेला परे',
    noResults: 'कुनै नतिजा फेला परेन।',
    callNow: 'कल गर्नुहोस्',
    website: 'वेबसाइट',
    hours: 'समय',
    eligibility: 'को योग्य छ',
    documents: 'के ल्याउने',
    note: 'नोट',
    legalLinks: 'यस अवस्थामा आफ्नो अधिकार जान्नुहोस्',
    legalLinksSub: 'सम्बन्धित कानुनी जानकारी — नि:शुल्क',
    viewLegal: 'आफ्नो अधिकार पढ्नुहोस् →',
    nearMe: 'नजिकमा',
    nearMeActive: 'दूरीद्वारा क्रमबद्ध',
    interpreterNotice: 'नि:शुल्क दोभाषे उपलब्ध — कल गर्दा सोध्नुहोस्',
    dvSafety: 'यदि तपाईं खतरामा हुनुहुन्छ भने 911 मा कल गर्नुहोस्।',
    crisisNote: 'यदि तपाईं अहिले संकटमा हुनुहुन्छ भने 988 मा कल वा सन्देश गर्नुहोस्।',
    privacyNote: 'संवेदनशील श्रेणी — यो पृष्ठले तपाईंको यन्त्रमा कुनै निशान छोड्दैन।',
    quickExit: 'द्रुत निकास',
    back: '← फिर्ता',
    allCategories: 'सबै श्रेणीहरू',
    filterWho: 'कसलाई सहायता चाहिन्छ?',
    filterHow: 'आय स्तर',
    anyone: 'जो कोही',
    noIncome: 'कुनै आय आवश्यक छैन',
    lowIncome: 'कम आय',
    footer: 'केहि पनि बिना बनाइएको। सबैका लागि बनाइएको।',
    footerNote: 'Sedral Studios · Steven को नाममा।',
  },
  ar: {
    title: 'مساعدة مجانية بالقرب منك',
    sub: 'بدون حساب. بدون بيانات. بدون تكلفة.',
    searchPlaceholder: 'صف ما تحتاج إليه',
    searchBtn: 'بحث',
    quickTiles: 'ماذا تحتاج?',
    tileFood: 'طعام', tileFoodSub: 'مصارف الغذاء، برامج الوجبات، SNAP',
    tileHousing: 'إسكان', tileHousingSub: 'مأوى طارئ، مساعدة الإيجار',
    tileCrisis: 'أزمة', tileCrisisSub: 'الصحة النفسية، خطوط المساعدة',
    tileHealth: 'الرعاية الصحية', tileHealthSub: 'طبي، أسنان، الصحة النفسية',
    seeAll: 'عرض جميع الفئات',
    hideAll: 'إخفاء الفئات',
    results: 'موارد وجدت',
    noResults: 'لم يتم العثور على نتائج.',
    callNow: 'اتصل',
    website: 'موقع إلكتروني',
    hours: 'ساعات العمل',
    eligibility: 'من يستحق',
    documents: 'ما يجب إحضاره',
    note: 'ملاحظة',
    legalLinks: 'اعرف حقوقك في هذا الوضع',
    legalLinksSub: 'معلومات قانونية ذات صلة — مجانية',
    viewLegal: 'اقرأ حقوقك ←',
    nearMe: 'بالقرب مني',
    nearMeActive: 'مرتبة حسب المسافة',
    interpreterNotice: 'مترجم مجاني متاح — اسأل عند الاتصال',
    dvSafety: 'إذا كنت في خطر، اتصل بـ 911.',
    crisisNote: 'إذا كنت في أزمة الآن، اتصل أو أرسل رسالة إلى 988.',
    privacyNote: 'فئة حساسة — هذه الصفحة لا تترك أثراً على جهازك.',
    quickExit: 'خروج سريع',
    back: '← رجوع',
    allCategories: 'جميع الفئات',
    filterWho: 'من يحتاج المساعدة?',
    filterHow: 'مستوى الدخل',
    anyone: 'أي شخص',
    noIncome: 'لا يتطلب دخلاً',
    lowIncome: 'دخل منخفض',
    footer: 'بُني من لا شيء. بُني للجميع.',
    footerNote: 'Sedral Studios · تيمناً بذكرى ستيفن.',
  },
  sw: {
    title: 'Msaada wa Bure Karibu Nawe',
    sub: 'Hakuna akaunti. Hakuna data. Hakuna gharama.',
    searchPlaceholder: 'Elezea unachohitaji',
    searchBtn: 'Tafuta',
    quickTiles: 'Unahitaji nini?',
    tileFood: 'Chakula', tileFoodSub: 'Benki za chakula, programu za milo',
    tileHousing: 'Makazi', tileHousingSub: 'Makazi ya dharura, msaada wa kodi',
    tileCrisis: 'Dharura', tileCrisisSub: 'Afya ya akili, simu za msaada',
    tileHealth: 'Afya', tileHealthSub: 'Madaktari, meno, afya ya akili',
    seeAll: 'Angalia kategoria zote',
    hideAll: 'Ficha kategoria',
    results: 'rasilimali zimepatikana',
    noResults: 'Hakuna matokeo.',
    callNow: 'Piga simu',
    website: 'Tovuti',
    hours: 'Masaa ya kufanya kazi',
    eligibility: 'Nani anastahili',
    documents: 'Nini kuleta',
    note: 'Kumbuka',
    legalLinks: 'Jua haki zako katika hali hii',
    legalLinksSub: 'Taarifa za kisheria zinazohusiana — bure',
    viewLegal: 'Soma haki zako →',
    nearMe: 'Karibu nami',
    nearMeActive: 'Imepangwa kwa umbali',
    interpreterNotice: 'Mkalimani wa bure anapatikana — uliza unapopiga simu',
    dvSafety: 'Ukiwa katika hatari, piga simu 911.',
    crisisNote: 'Ukiwa katika dharura sasa hivi, piga simu au tuma ujumbe 988.',
    privacyNote: 'Kategoria nyeti — ukurasa huu hauhifadhi chochote.',
    quickExit: 'Toka Haraka',
    back: '← Rudi',
    allCategories: 'Kategoria Zote',
    filterWho: 'Nani anahitaji msaada?',
    filterHow: 'Kiwango cha mapato',
    anyone: 'Mtu yeyote',
    noIncome: 'Hakuna mapato yanayohitajika',
    lowIncome: 'Mapato ya chini',
    footer: 'Ilijengwa kwa chochote. Ilijengwa kwa kila mtu.',
    footerNote: 'Sedral Studios · Kwa kumbukumbu ya Steven.',
  },
  my: {
    title: 'သင့်နီးပါးတွင် အခမဲ့အကူအညီ',
    sub: 'အကောင့်မလိုပါ။ ဒေတာမလိုပါ။ အခကြေးငွေမလိုပါ။',
    searchPlaceholder: 'သင်လိုအပ်သည်ကို ဖော်ပြပါ',
    searchBtn: 'ရှာဖွေ',
    quickTiles: 'သင်ဘာလိုအပ်သနည်း?',
    tileFood: 'အစားအသောက်', tileFoodSub: 'အစားအသောက်ဘဏ်များ',
    tileHousing: 'နေအိမ်', tileHousingSub: 'အရေးပေါ်နေရာ',
    tileCrisis: 'အကျပ်အတည်း', tileCrisisSub: 'စိတ်ကျန်းမာရေး',
    tileHealth: 'ကျန်းမာရေး', tileHealthSub: 'ဆေးကုသမှု',
    seeAll: 'အမျိုးအစားများကြည့်ရှုရန်',
    hideAll: 'အမျိုးအစားများဖျောက်ရန်',
    results: 'အရင်းအမြစ်များတွေ့ရှိသည်',
    noResults: 'ရလဒ်မတွေ့ပါ။',
    callNow: 'ဖုန်းခေါ်ဆိုရန်',
    website: 'ဝဘ်ဆိုဒ်',
    hours: 'ဖွင့်ချိန်',
    eligibility: 'ဘယ်သူ အဆင်ပြေသလဲ',
    documents: 'ဘာယူလာရမလဲ',
    note: 'မှတ်ချက်',
    legalLinks: 'ဤအခြေအနေတွင် သင့်အခွင့်အရေးများသိရှိပါ',
    legalLinksSub: 'သက်ဆိုင်ရာ ဥပဒေဆိုင်ရာ သတင်းအချက်အလက် — အခမဲ့',
    viewLegal: 'သင့်အခွင့်အရေးများဖတ်ရှုရန် →',
    nearMe: 'ကျွန်ုပ်နီးတွင်',
    nearMeActive: 'အကွာအဝေးအလိုက်စီထားသည်',
    interpreterNotice: 'အခမဲ့စကားပြန် ရနိုင်သည် — ဖုန်းဆက်သောအခါ မေးပါ',
    dvSafety: 'အန္တရာယ်ရှိလျှင် 911 သို့ ဖုန်းခေါ်ပါ။',
    crisisNote: 'အကျပ်အတည်းဖြစ်နေလျှင် 988 သို့ ဖုန်းခေါ်ပါ။',
    privacyNote: 'အထိခိုက်မခံသောအမျိုးအစား — ဤစာမျက်နှာသည် ဒေတာမသိမ်းဆည်းပါ။',
    quickExit: 'အမြန်ထွက်ရန်',
    back: '← နောက်သို့',
    allCategories: 'အမျိုးအစားများ',
    filterWho: 'ဘယ်သူ အကူအညီလိုသလဲ?',
    filterHow: 'ဝင်ငွေအဆင့်',
    anyone: 'မည်သူမဆို',
    noIncome: 'ဝင်ငွေမလိုအပ်ပါ',
    lowIncome: 'ဝင်ငွေနည်းသူ',
    footer: 'ဘာမှမပါဘဲ တည်ဆောက်သည်။ လူတိုင်းအတွက် တည်ဆောက်သည်။',
    footerNote: 'Sedral Studios · Steven ၏အမှတ်တရ။',
  },
  so: {
    title: 'Gargaar Bilaash ah Agagaarka',
    sub: 'Akoon ma ahan. Xog ma ahan. Lacag ma ahan.',
    searchPlaceholder: 'Sharax waxa aad u baahan tahay',
    searchBtn: 'Raadi',
    quickTiles: 'Maxaad u baahan tahay?',
    tileFood: 'Cunto', tileFoodSub: 'Kaydka cuntada, barnaamijyada cuntada',
    tileHousing: 'Guriyeysi', tileHousingSub: 'Deganaanshaha xaaladda degdegga',
    tileCrisis: 'Xaaladda Degdeg', tileCrisisSub: 'Caafimaadka maskaxda',
    tileHealth: 'Caafimaad', tileHealthSub: 'Dhakhtarka, ilkaha, caafimaadka maskaxda',
    seeAll: 'Arag dhammaan qaybaha',
    hideAll: 'Qari qaybaha',
    results: 'kheyraadka la helay',
    noResults: 'Natiijo lama helin.',
    callNow: 'Wac',
    website: 'Websaydhka',
    hours: 'Saacadaha',
    eligibility: 'Cid ku habboon',
    documents: 'Maxaa keeni',
    note: 'Xusuusin',
    legalLinks: 'Ogow xuquuqdaada xaaladdan',
    legalLinksSub: 'Macluumaadka sharciga la xiriira — bilaash',
    viewLegal: 'Akhri xuquuqdaada →',
    nearMe: 'Agagaarka',
    nearMeActive: 'La kala soocay masaafada',
    interpreterNotice: 'Turjubaan bilaash ah ayaa diyaar ah — weydii markaad wacdo',
    dvSafety: 'Haddaad halis ku jirto, wac 911.',
    crisisNote: 'Haddaad xaaladda degdeg ku jirto, wac ama fariin u dir 988.',
    privacyNote: 'Qaybta xasaasiga ah — boggan ma kaabin waxba.',
    quickExit: 'Ka Bax Degdeg',
    back: '← Dib',
    allCategories: 'Dhammaan Qaybaha',
    filterWho: 'Cid u baahan gargaar?',
    filterHow: 'Heerka dakhliga',
    anyone: 'Qof kasta',
    noIncome: 'Dakhli laguma baahna',
    lowIncome: 'Dakhli yar',
    footer: 'Waxba kama dhisna. Dadka oo dhan ayaa loogu dhisay.',
    footerNote: 'Sedral Studios · Xusuusta Steven.',
  },
  zh: {
    title: '附近的免费帮助',
    sub: '无需账户。无需数据。无费用。',
    searchPlaceholder: '描述您需要什么',
    searchBtn: '搜索',
    quickTiles: '您需要什么?',
    tileFood: '食物', tileFoodSub: '食品银行，餐饮计划，SNAP',
    tileHousing: '住房', tileHousingSub: '紧急庇护所，租金援助',
    tileCrisis: '危机', tileCrisisSub: '心理健康，热线电话',
    tileHealth: '医疗保健', tileHealthSub: '医疗，牙科，心理健康',
    seeAll: '查看所有类别',
    hideAll: '隐藏类别',
    results: '找到资源',
    noResults: '未找到结果。',
    callNow: '致电',
    website: '网站',
    hours: '工作时间',
    eligibility: '谁有资格',
    documents: '需要带什么',
    note: '注意',
    legalLinks: '了解您在此情况下的权利',
    legalLinksSub: '相关法律信息 — 免费',
    viewLegal: '阅读您的权利 →',
    nearMe: '附近',
    nearMeActive: '按距离排序',
    interpreterNotice: '提供免费口译员 — 致电时询问',
    dvSafety: '如果您有危险，请拨打911。',
    crisisNote: '如果您现在处于危机中，请拨打或发短信至988。',
    privacyNote: '敏感类别 — 此页面不会在您的设备上留下任何痕迹。',
    quickExit: '快速退出',
    back: '← 返回',
    allCategories: '所有类别',
    filterWho: '谁需要帮助?',
    filterHow: '收入水平',
    anyone: '任何人',
    noIncome: '无收入要求',
    lowIncome: '低收入',
    footer: '一无所有地建造。为所有人而建。',
    footerNote: 'Sedral Studios · 纪念Steven。',
  },
}

function t(lang, key) {
  return (T[lang] || T.en)[key] || T.en[key] || key
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

const CATEGORIES = {
  crisis:       { label: 'Crisis & Emergency',        icon: '🆘', sensitive: true,  crisis: true  },
  food:         { label: 'Food & Nutrition',           icon: '🥫', sensitive: false, crisis: false },
  housing:      { label: 'Housing & Shelter',          icon: '🏠', sensitive: false, crisis: false },
  health:       { label: 'Healthcare',                 icon: '🏥', sensitive: false, crisis: false },
  mental:       { label: 'Mental Health',              icon: '🧠', sensitive: true,  crisis: true  },
  employment:   { label: 'Employment & Training',      icon: '💼', sensitive: false, crisis: false },
  childcare:    { label: 'Childcare & Youth',          icon: '👶', sensitive: false, crisis: false },
  education:    { label: 'Education & Literacy',       icon: '📚', sensitive: false, crisis: false },
  legal:        { label: 'Legal Aid',                  icon: '⚖️', sensitive: false, crisis: false },
  transport:    { label: 'Transportation',             icon: '🚌', sensitive: false, crisis: false },
  disabilitySvc:{ label: 'Disability Services',        icon: '♿', sensitive: false, crisis: false },
  seniorSvc:    { label: 'Senior Services',            icon: '👴', sensitive: false, crisis: false },
  veteranSvc:   { label: 'Veteran Services',           icon: '🎖️', sensitive: false, crisis: false },
  refugeeSvc:   { label: 'Refugee & Immigrant Svcs',   icon: '🌐', sensitive: false, crisis: false },
  lgbtq:        { label: 'LGBTQ+ Services',            icon: '🌈', sensitive: true,  crisis: false },
  reentry:      { label: 'Reentry & Justice',          icon: '🔓', sensitive: false, crisis: false },
  domestic:     { label: 'Domestic Violence',          icon: '🛡️', sensitive: true,  crisis: true  },
  internet:     { label: 'Internet & Tech Access',     icon: '💻', sensitive: false, crisis: false },
  financial:    { label: 'Financial Assistance',       icon: '💰', sensitive: false, crisis: false },
  prescriptions:{ label: 'Prescriptions & Meds',      icon: '💊', sensitive: false, crisis: false },
  vision:       { label: 'Vision Care',                icon: '👁️', sensitive: false, crisis: false },
  documents:    { label: 'ID & Documents',             icon: '📄', sensitive: false, crisis: false },
  pets:         { label: 'Pet Assistance',             icon: '🐾', sensitive: false, crisis: false },
  funeral:      { label: 'Funeral Assistance',         icon: '🕊️', sensitive: true,  crisis: false },
  caregiver:    { label: 'Caregiver Support',          icon: '🤝', sensitive: false, crisis: false },
  dental:       { label: 'Dental Care',                icon: '🦷', sensitive: false, crisis: false },
  parentalProtection: { label: 'Family Court & Safety', icon: '👨‍👩‍👧', sensitive: false, crisis: false },
  domesticSvc:  { label: 'Domestic Violence Services', icon: '🛡️', sensitive: true,  crisis: true  },
  youth:        { label: 'Youth Services',             icon: '👦', sensitive: false, crisis: false },
}

// Quick tile category mapping
const QUICK_TILES = [
  { key: 'food',    titleKey: 'tileFood',    subKey: 'tileFoodSub',    color: '#e8f5e9' },
  { key: 'housing', titleKey: 'tileHousing', subKey: 'tileHousingSub', color: '#e3f2fd' },
  { key: 'crisis',  titleKey: 'tileCrisis',  subKey: 'tileCrisisSub',  color: '#fce4ec' },
  { key: 'health',  titleKey: 'tileHealth',  subKey: 'tileHealthSub',  color: '#f3e5f5' },
]

// WHO filters
const WHO_FILTERS = [
  { id: 'any',      label: 'Anyone' },
  { id: 'family',   label: 'Families' },
  { id: 'senior',   label: 'Seniors 60+' },
  { id: 'dis',      label: 'Disability' },
  { id: 'veteran',  label: 'Veterans' },
  { id: 'refugee',  label: 'Immigrants/Refugees' },
  { id: 'lgbtq',    label: 'LGBTQ+' },
  { id: 'reentry',  label: 'Justice-Involved' },
  { id: 'youth',    label: 'Youth' },
  { id: 'kids',     label: 'Children' },
]

// Legal cross-links by category
const LEGAL_CROSSLINKS = {
  food: [
    { id: 'snap-rights-ny',           title: 'SNAP — Your Rights and How to Apply' },
    { id: 'benefits-denial-appeal-ny', title: 'Benefits Denied — How to Appeal' },
    { id: 'fair-hearing-ny',           title: 'Fair Hearing — Your Right to Fight Any Denial' },
  ],
  housing: [
    { id: 'tenant-habitability-ny',   title: 'Your Right to a Livable Home' },
    { id: 'eviction-process-ny',      title: 'How Eviction Works — and How to Fight It' },
    { id: 'illegal-eviction-ny',      title: 'Illegal Eviction — Your Landlord Cannot Lock You Out' },
    { id: 'security-deposit-ny',      title: 'Security Deposit — What Your Landlord Can and Cannot Do' },
  ],
  employment: [
    { id: 'minimum-wage-ny',          title: 'Minimum Wage in New York — What You\'re Owed' },
    { id: 'wage-theft-ny',            title: 'Wage Theft — When Your Employer Doesn\'t Pay You' },
    { id: 'wrongful-termination-ny',  title: 'Wrongful Termination — When Being Fired Is Illegal' },
  ],
  domestic: [
    { id: 'order-of-protection-ny',   title: 'How to Get an Order of Protection' },
  ],
  domesticSvc: [
    { id: 'order-of-protection-ny',   title: 'How to Get an Order of Protection' },
  ],
  mental: [
    { id: 'mental-health-rights-ny',  title: 'Mental Health Patient Rights' },
    { id: 'involuntary-hold-ny',      title: 'Involuntary Psychiatric Hold — Your Rights' },
  ],
  legal: [
    { id: 'rights-when-arrested-ny',  title: 'Your Rights When You\'re Arrested' },
    { id: 'clean-slate-ny',           title: 'Clean Slate Act — Automatic Record Sealing' },
  ],
  reentry: [
    { id: 'clean-slate-ny',           title: 'Clean Slate Act — Automatic Record Sealing' },
    { id: 'rights-when-arrested-ny',  title: 'Your Rights When You\'re Arrested' },
  ],
  disabilitySvc: [
    { id: 'disability-work-accommodation-ny', title: 'Disability Accommodation at Work' },
  ],
  financial: [
    { id: 'benefits-denial-appeal-ny', title: 'Benefits Denied — How to Appeal' },
    { id: 'debt-collectors-ny',        title: 'Debt Collectors — What They Can and Cannot Do' },
  ],
  transport: [],
  childcare: [
    { id: 'custody-basics-ny',        title: 'Child Custody — How New York Decides' },
    { id: 'child-support-ny',         title: 'Child Support — How It\'s Calculated' },
  ],
  parentalProtection: [
    { id: 'order-of-protection-ny',   title: 'How to Get an Order of Protection' },
    { id: 'custody-basics-ny',        title: 'Child Custody — How New York Decides' },
    { id: 'child-support-ny',         title: 'Child Support — How It\'s Calculated' },
  ],
}

// Haversine distance calculator
function distanceMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
}


// ─── PROGRAMS ─────────────────────────────────────────────────────────────────
// 231 programs. relatedLegalIds added for high-value categories.
// id, n=name, c=category, d=description, url, ph=phone, hr=hours,
// inc=income limit, doc=documents, tg=target groups, nt=note,
// lat/lon=coordinates (food only for Near Me), legalIds=cross-links

const PROGRAMS = [
  // CRISIS
  { id:"roc211", n:"211 Lifeline — Monroe County", c:"crisis", d:"24/7 hotline connecting callers to local health and human services. Call or text 211.", ph:"211", url:"https://www.211lifeline.org", hr:"24/7", tg:["any"] },
  { id:"samaritans", n:"Samaritans of the Finger Lakes", c:"crisis", d:"24/7 emotional support for anyone in crisis or distress. Confidential.", ph:"585-275-4445", url:"https://www.samaritansfl.org", hr:"24/7", tg:["any"] },
  { id:"crisis988", n:"988 Suicide & Crisis Lifeline", c:"crisis", d:"Call or text 988 for free, confidential mental health crisis support. 24/7.", ph:"988", url:"https://988lifeline.org", hr:"24/7", tg:["any"] },
  { id:"crisistextline", n:"Crisis Text Line", c:"crisis", d:"Text HOME to 741741 for free crisis support via text message. 24/7.", ph:"Text HOME to 741741", url:"https://www.crisistextline.org", hr:"24/7", tg:["any"] },
  { id:"urgentcrisis", n:"Rochester Urgent Crisis Center", c:"crisis", d:"Walk-in mental health crisis care. No appointment. No insurance required.", ph:"585-287-9669", url:"https://ca.urmc.rochester.edu", hr:"24/7", tg:["any"], nt:"Located at 1180 Chili Ave, Rochester" },
  { id:"strongbeh", n:"Strong Behavioral Health Emergency", c:"crisis", d:"Emergency psychiatric services at Strong Memorial Hospital.", ph:"585-275-3955", url:"https://www.urmc.rochester.edu", hr:"24/7", tg:["any"] },

  // FOOD
  { id:"foodlink", n:"Foodlink", c:"food", d:"Regional food bank. Distributes food through 500+ partner agencies in western NY.", url:"https://www.foodlinkny.org", ph:"585-328-3380", hr:"M-F 8am-4:30pm", tg:["any"], lat:43.155, lon:-77.616, legalIds:["snap-rights-ny","benefits-denial-appeal-ny"] },
  { id:"rochesterfoodcab", n:"Rochester Food Cabinet", c:"food", d:"Emergency food pantry. Walk-in service, no referral needed.", url:"https://rochesterfoodcabinet.org", ph:"585-328-5775", hr:"M,W,F 9am-12pm", tg:["any"], lat:43.161, lon:-77.621 },
  { id:"cloverstreet", n:"Clover Street Food Pantry", c:"food", d:"Free groceries for Monroe County residents. Bring ID and proof of address.", url:"https://www.cloverstreetpantry.org", ph:"585-427-7550", hr:"T 10am-12pm, Th 4pm-6pm", doc:"ID, proof of address", tg:["any"], lat:43.092, lon:-77.545 },
  { id:"socrateshouse", n:"Sojourner House — Community Kitchen", c:"food", d:"Free community meals, no questions asked.", ph:"585-232-3520", hr:"Daily 11:30am-1pm", tg:["any"], lat:43.158, lon:-77.608 },
  { id:"willowfood", n:"Baden Street Food Pantry", c:"food", d:"Free emergency food for north side Rochester residents.", url:"https://www.badenstreet.org", ph:"585-325-4910", hr:"M,W,F 9am-11am", tg:["any"], lat:43.175, lon:-77.614 },
  { id:"raisinroof", n:"Raisin' the Roof Food Pantry — Greece", c:"food", d:"Food pantry serving Greece and surrounding towns.", ph:"585-227-2267", hr:"T,Th 10am-12pm", tg:["any"], lat:43.213, lon:-77.693 },
  { id:"feedingkids", n:"Foodlink Mobile Pantry", c:"food", d:"Mobile food distribution throughout Monroe County. Schedule at foodlinkny.org.", url:"https://www.foodlinkny.org/find-food", hr:"Varies by location", tg:["any"] },
  { id:"snapbenefits", n:"SNAP Benefits — Monroe County DSS", c:"food", d:"Federal food assistance program. Apply at Monroe County DSS or online.", url:"https://www.mybenefits.ny.gov", ph:"585-753-6000", hr:"M-F 8:30am-5pm", doc:"ID, proof of income, proof of residence", tg:["any"], legalIds:["snap-rights-ny","benefits-denial-appeal-ny","fair-hearing-ny"] },
  { id:"wicrochester", n:"WIC — Women, Infants, Children", c:"food", d:"Nutrition support for pregnant women, new mothers, and children under 5.", url:"https://www.monroecounty.gov/health-wic", ph:"585-753-5400", hr:"M-F 8:30am-5pm", doc:"ID, proof of pregnancy or child's age, income verification", tg:["family","kids"] },
  { id:"seniormeals", n:"Meals on Wheels — Monroe County", c:"food", d:"Home-delivered meals for seniors and people with disabilities. Low or no cost.", url:"https://www.elderonerochester.org", ph:"585-244-8400", hr:"M-F", tg:["senior","dis"] },
  { id:"schoolmeals", n:"Rochester City School District — Free Meals", c:"food", d:"Free breakfast and lunch for all RCSD students regardless of income.", url:"https://www.rcsdk12.org", ph:"585-262-8100", hr:"School days", tg:["kids","youth"] },
  { id:"ccafoodpantry", n:"Catholic Charities Food Pantry", c:"food", d:"Emergency food assistance. No referral required for first visit.", url:"https://www.ccfdor.org", ph:"585-546-7220", hr:"M-F 9am-12pm", tg:["any"], lat:43.157, lon:-77.612 },
  { id:"caritas", n:"Caritas Community Center", c:"food", d:"Food pantry and community support on the southwest side.", ph:"585-235-2880", hr:"T,Th 9am-11am", tg:["any"] },
  { id:"pathstone", n:"PathStone Food Pantry", c:"food", d:"Emergency food for farmworkers and low-income families in Monroe and surrounding counties.", url:"https://www.pathstone.org", ph:"585-340-3368", hr:"Call for hours", tg:["any","refugee"] },

  // HOUSING
  { id:"rochousing", n:"Rochester Housing Authority", c:"housing", d:"Public housing and Section 8 vouchers for low-income Monroe County residents.", url:"https://www.rochesterhousing.org", ph:"585-697-4300", hr:"M-F 8am-4:30pm", doc:"ID, income verification, rental history", tg:["any"], legalIds:["eviction-process-ny","tenant-habitability-ny"] },
  { id:"pathwaystohousing", n:"Pathways to Housing", c:"housing", d:"Housing for individuals experiencing homelessness, including Housing First approach.", url:"https://www.pathwaysrochester.org", ph:"585-368-1111", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"willowhaven", n:"Willow Housing (Domestic Violence)", c:"housing", d:"Emergency housing for DV survivors and their children. Confidential.", ph:"585-222-7233", hr:"24/7", tg:["any"], legalIds:["order-of-protection-ny"] },
  { id:"houseofmercyroc", n:"House of Mercy", c:"housing", d:"Emergency shelter, transitional housing, and meals for those in need.", url:"https://www.houseofmercyrochester.org", ph:"585-546-2580", hr:"24/7 intake", tg:["any"] },
  { id:"projecthope", n:"Project HOPE Shelter", c:"housing", d:"Emergency shelter for families. Intake through 211.", ph:"211", hr:"24/7 through 211", tg:["family"] },
  { id:"eagleshousing", n:"Eagles Nest Emergency Housing", c:"housing", d:"Short-term emergency housing for individuals in crisis.", ph:"585-232-5428", hr:"Call for availability", tg:["any"] },
  { id:"renterhelp", n:"NY Tenant Helpline — Eviction Defense", c:"housing", d:"Free legal advice for tenants facing eviction anywhere in New York State.", url:"https://www.housingjusticeny.org", ph:"833-499-0318", hr:"M-F 9am-5pm", tg:["any"], legalIds:["eviction-process-ny","tenant-habitability-ny","illegal-eviction-ny"] },
  { id:"emergencyrent", n:"Emergency Rental Assistance — Monroe County", c:"housing", d:"One-time emergency rental assistance for residents facing eviction.", url:"https://www.monroecounty.gov/dss", ph:"585-753-6000", hr:"M-F 8:30am-5pm", doc:"Lease, eviction notice, proof of income", tg:["any"], legalIds:["eviction-process-ny"] },
  { id:"hqinc", n:"Home HeadQuarters — Housing Counseling", c:"housing", d:"Free housing counseling for renters and homeowners.", url:"https://www.hhqinc.org", ph:"585-647-4747", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"innercityren", n:"Inner City Rental Assistance", c:"housing", d:"Emergency rental and utility assistance for inner-city Rochester residents.", ph:"585-235-3570", hr:"M-F 9am-4pm", doc:"Lease, ID, proof of income", tg:["any"] },
  { id:"rocshelter", n:"Rochester Rescue Mission", c:"housing", d:"Emergency shelter, meals, and recovery programs for men.", url:"https://www.rrmofrochester.org", ph:"585-454-2870", hr:"Walk-in after 4pm", tg:["any"] },
  { id:"catholicchar", n:"Catholic Charities Housing", c:"housing", d:"Emergency housing assistance and longer-term housing support.", url:"https://www.ccfdor.org", ph:"585-546-7220", hr:"M-F 9am-5pm", tg:["any"] },

  // HEALTH
  { id:"rphc", n:"Rochester Primary Care Network", c:"health", d:"Federally qualified health center. Sliding-scale fees. No one turned away.", url:"https://www.rpcn.org", ph:"585-506-7050", hr:"M-F 8am-5pm", doc:"ID (not required for care)", tg:["any"] },
  { id:"whitewater", n:"Westside Health Services", c:"health", d:"Primary care, behavioral health, and dental on a sliding fee scale.", url:"https://www.wshealth.org", ph:"585-235-3590", hr:"M-F 8am-5pm", tg:["any"] },
  { id:"communityhealth", n:"Common Ground Health", c:"health", d:"Community health planning and navigation for Monroe County.", url:"https://www.commongroundhealth.org", ph:"585-244-9000", hr:"M-F 8:30am-5pm", tg:["any"] },
  { id:"mhp", n:"Monroe Health Plan Navigator", c:"health", d:"Free help enrolling in Medicaid, Essential Plan, and other health insurance.", url:"https://www.monroecounty.gov/health", ph:"585-753-5400", hr:"M-F 8:30am-5pm", tg:["any"] },
  { id:"liftbridge", n:"Lift Bridge Community Clinic", c:"health", d:"Free clinic for uninsured adults. Volunteer medical care.", url:"https://www.liftbridgeclinic.org", ph:"585-256-1170", hr:"W 5:30pm-8pm (by appt)", tg:["any"], nt:"No insurance required" },
  { id:"strongmemorial", n:"Strong Memorial Hospital — Financial Assistance", c:"health", d:"Charity care and financial assistance for patients who cannot pay.", url:"https://www.urmc.rochester.edu", ph:"585-275-5165", hr:"M-F 8am-5pm", tg:["any"] },
  { id:"rxoutreach", n:"Rx Outreach — Free Prescriptions", c:"prescriptions", d:"Low-cost prescription medications for uninsured and underinsured patients.", url:"https://www.rxoutreach.org", ph:"888-796-1234", hr:"M-F 8am-8pm", tg:["any"] },
  { id:"neededge", n:"Needed — Free Medications Program", c:"prescriptions", d:"Free brand-name medications through manufacturer patient assistance programs.", url:"https://www.needmeds.org", hr:"Online application", tg:["any"] },
  { id:"visioncare", n:"Lions Club — Vision Care", c:"vision", d:"Free eye exams and glasses for people who cannot afford them.", url:"https://www.lionsclubs.org", ph:"585-473-7560", hr:"Call for appointment", tg:["any"] },
  { id:"fightingblind", n:"Fighting Blindness Foundation", c:"vision", d:"Resources and support for people with vision impairment.", url:"https://www.fightingblindness.org", ph:"800-683-5555", hr:"M-F 9am-5pm", tg:["any","dis"] },

  // MENTAL HEALTH
  { id:"integratedcare", n:"Coordinated Care Services (CCSI)", c:"mental", d:"Behavioral health system coordination and navigation for Monroe County.", url:"https://www.ccsiny.org", ph:"585-232-5428", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"mhanys", n:"NAMI Rochester — Mental Health Alliance", c:"mental", d:"Peer support, education, and advocacy for people with mental illness and their families.", url:"https://www.namirochester.org", ph:"585-344-0390", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"pathwaysmh", n:"Pathways to Promise", c:"mental", d:"Mental health support and community integration services.", url:"https://www.p2prochester.org", ph:"585-368-1111", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"recoverynet", n:"Rochester Regional Health — Behavioral Health", c:"mental", d:"Outpatient mental health services on sliding scale fee.", url:"https://www.rochesterregional.org", ph:"585-922-5600", hr:"M-F 8am-5pm", tg:["any"] },
  { id:"aceproject", n:"ACE Project — Peer Support", c:"mental", d:"Peer recovery support services for people with mental health challenges.", url:"https://www.rcmhc.org", ph:"585-546-7160", hr:"M-F 9am-5pm", tg:["any"] },

  // EMPLOYMENT
  { id:"worksource", n:"WorkSourceOne Monroe County", c:"employment", d:"Free job training, placement, and career services. Resume help, job fairs, skills training.", url:"https://www.monroeworksource.org", ph:"585-258-3500", hr:"M-F 8:30am-5pm", tg:["any"] },
  { id:"rcahr", n:"Rochester Works! Career Center", c:"employment", d:"Career counseling, job search, skills assessments, and employer connections.", url:"https://www.rochesterworks.org", ph:"585-258-3500", hr:"M-F 8:30am-5pm", tg:["any"], legalIds:["minimum-wage-ny","wage-theft-ny","wrongful-termination-ny"] },
  { id:"wjcemployment", n:"Worker Justice Center of NY — Employment Rights", c:"employment", d:"Free legal help for workers with wage theft, discrimination, and other employment issues. Spanish-speaking staff.", url:"https://www.wjcny.org", ph:"585-325-3050", hr:"M-F 9am-5pm", tg:["any","refugee"], legalIds:["minimum-wage-ny","wage-theft-ny"] },
  { id:"goodwillroc", n:"Goodwill of the Finger Lakes — Job Training", c:"employment", d:"Job training and placement services for people with barriers to employment.", url:"https://www.goodwillfingerlakes.com", ph:"585-232-1000", hr:"M-F 9am-5pm", tg:["any","dis","reentry"] },
  { id:"rawnyemployment", n:"RAWNY — Reentry Employment", c:"reentry", d:"Employment support for people with criminal records.", url:"https://www.rawny.org", ph:"585-851-8886", hr:"M-F 9am-5pm", tg:["reentry"], legalIds:["clean-slate-ny"] },
  { id:"unemployment", n:"NY Unemployment Insurance", c:"employment", d:"File for unemployment benefits after job loss.", url:"https://labor.ny.gov/ui", ph:"888-209-8124", hr:"M-F 8am-5pm", tg:["any"], legalIds:["wrongful-termination-ny"] },

  // CHILDCARE
  { id:"childcareroc", n:"Child Care Council of Rochester", c:"childcare", d:"Childcare referrals, subsidies, and resources for Monroe County families.", url:"https://www.childcarecouncil.com", ph:"585-め654-7310", hr:"M-F 9am-5pm", tg:["family","kids"] },
  { id:"headstart", n:"Head Start — Monroe County", c:"childcare", d:"Free early childhood education and family support for low-income families.", url:"https://www.abcinfo.org", ph:"585-325-5116", hr:"M-F 8am-5pm", doc:"Proof of income, child's birth certificate", tg:["family","kids"] },
  { id:"earlyintervention", n:"Early Intervention — Ages 0-3", c:"childcare", d:"Free services for children under 3 with developmental delays.", url:"https://www.monroecounty.gov/health-earlyintervention", ph:"585-753-5430", hr:"M-F 8:30am-5pm", tg:["family","kids","dis"] },
  { id:"preschoolsped", n:"Preschool Special Ed — Ages 3-5", c:"childcare", d:"Free special education services for eligible preschool children.", url:"https://www.rcsdk12.org", ph:"585-262-8100", hr:"M-F 8am-4pm", tg:["family","kids","dis"] },

  // EDUCATION
  { id:"literacyroc", n:"Literacy Rochester", c:"education", d:"Free adult literacy, GED, and ESL classes for Monroe County adults.", url:"https://www.literacyrochester.org", ph:"585-473-3030", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"roclibrary", n:"Rochester Public Library — Digital Literacy", c:"education", d:"Free digital literacy classes, computer access, and internet at all branches.", url:"https://www.libraryweb.org", ph:"585-428-8000", hr:"Varies by branch", tg:["any"] },
  { id:"northsidelearning", n:"North Side Learning Center", c:"education", d:"ESL, citizenship classes, and adult education for immigrants and refugees.", url:"https://www.nslcrochester.org", ph:"585-266-7520", hr:"M-F 9am-5pm", tg:["any","refugee"] },
  { id:"monroe", n:"Monroe Community College — Workforce Development", c:"education", d:"Affordable workforce training and certification programs.", url:"https://www.monroecc.edu", ph:"585-292-2000", hr:"M-F 8am-5pm", tg:["any"] },

  // LEGAL AID
  { id:"lasroc", n:"Legal Aid Society of Rochester", c:"legal", d:"Free civil legal services for low-income Monroe County residents. Housing, family, immigration, DV.", url:"https://www.lasroc.org", ph:"585-232-4090", hr:"M-F 9am-5pm", inc:200, doc:"None for intake", tg:["any"], legalIds:["eviction-process-ny","custody-basics-ny","order-of-protection-ny","rights-when-arrested-ny","clean-slate-ny"] },
  { id:"lawny", n:"LawNY — Legal Assistance of Western NY", c:"legal", d:"Free legal help for low-income residents in housing, benefits, health law.", url:"https://www.lawny.org", ph:"585-325-2520", hr:"M-F 9am-5pm", tg:["any"], legalIds:["tenant-habitability-ny","benefits-denial-appeal-ny"] },
  { id:"empirejustice", n:"Empire Justice Center", c:"legal", d:"Statewide nonprofit law firm. Benefits, housing, immigration, disability.", url:"https://www.empirejustice.org", ph:"585-454-4060", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"justcause", n:"Just Cause — Volunteer Legal Services", c:"legal", d:"Free civil legal help through 1,600 pro bono volunteers. Monroe County.", url:"https://www.justcauserochester.org", ph:"585-232-3051", hr:"M-F 9am-5pm", tg:["any"] },
  { id:"publicdefender", n:"Monroe County Public Defender", c:"legal", d:"Free criminal defense for people who cannot afford an attorney.", url:"https://www.monroecounty.gov/publicdefender", ph:"585-753-4210", hr:"M-F 9am-5pm", tg:["any"], legalIds:["rights-when-arrested-ny"] },
  { id:"mcba", n:"Monroe County Bar — Lawyer Referral", c:"legal", d:"Get matched to a private attorney. $45 fee for 30-minute consultation.", url:"https://mcba.org", ph:"585-546-1817", hr:"M-F 9am-5pm", tg:["any"] },

  // TRANSPORT
  { id:"rts", n:"Rochester Transit Service (RTS)", c:"transport", d:"Public bus service throughout Monroe County. Reduced fares for seniors and people with disabilities.", url:"https://www.myrts.com", ph:"585-288-1700", hr:"M-F 7am-6pm", tg:["any"] },
  { id:"medictransport", n:"Medicaid Transportation", c:"transport", d:"Free transportation to medical appointments for Medicaid recipients.", url:"https://www.modivcare.com", ph:"855-325-7995", hr:"M-F 8am-5pm", doc:"Medicaid ID, appointment info", tg:["any"] },
  { id:"accessrts", n:"Access RTS — Paratransit", c:"transport", d:"Door-to-door transportation for people with disabilities who cannot use fixed-route buses.", url:"https://www.myrts.com/Access", ph:"585-288-1700", hr:"M-F 8am-5pm", tg:["dis"] },
  { id:"angelflight", n:"Angel Flight NE — Free Medical Flights", c:"transport", d:"Free air transportation for patients who cannot afford or endure commercial travel to distant medical centers.", url:"https://www.angelflightne.org", ph:"603-766-9501", hr:"M-F 9am-5pm", tg:["any"], nt:"Must be ambulatory. Not for emergencies — for ongoing treatment travel." },
  { id:"aircarealliance", n:"Air Care Alliance — Medical Flight Referral", c:"transport", d:"Connects patients with the right volunteer flight organization for their route.", url:"https://www.aircarealliance.org", ph:"888-260-9707", hr:"M-F 9am-5pm", tg:["any"] },

  // DISABILITY SERVICES
  { id:"rcil", n:"Resources for Independent Living (RCIL)", c:"disabilitySvc", d:"Independent living support, benefits counseling, advocacy for people with disabilities.", url:"https://www.rcil.com", ph:"585-442-6470", hr:"M-F 8:30am-5pm", tg:["dis"], legalIds:["disability-work-accommodation-ny"] },
  { id:"opwdd", n:"OPWDD — Developmental Disabilities", c:"disabilitySvc", d:"NY State services for people with developmental disabilities including HCBS waivers and residential support.", url:"https://www.opwdd.ny.gov", ph:"585-461-8300", hr:"M-F 8am-5pm", tg:["dis"] },
  { id:"cprochester", n:"CP Rochester", c:"disabilitySvc", d:"Services for people with cerebral palsy and other physical disabilities.", url:"https://www.cprochester.org", ph:"585-334-6000", hr:"M-F 8:30am-5pm", tg:["dis"] },
  { id:"marycariola", n:"Mary Cariola Center", c:"disabilitySvc", d:"Educational and therapeutic services for children and adults with multiple disabilities.", url:"https://www.marycariola.org", ph:"585-271-0761", hr:"M-F 8am-4pm", tg:["dis","kids"] },
  { id:"cdpap", n:"CDPAP — Consumer Directed Care", c:"disabilitySvc", d:"Medicaid-funded program allowing people with disabilities to hire their own personal care workers.", url:"https://www.nysenate.gov/legislation/laws/SSL/365-F", ph:"585-753-6000", hr:"M-F 8:30am-5pm", tg:["dis"] },
  { id:"selfdir", n:"Self-Direction — OPWDD", c:"disabilitySvc", d:"Allows people with developmental disabilities to direct their own services and budget.", url:"https://www.opwdd.ny.gov/self-direction", ph:"585-461-8300", hr:"M-F 8am-5pm", tg:["dis"] },
  { id:"drny", n:"Disability Rights NY", c:"disabilitySvc", d:"Free legal advocacy for people with disabilities — ADA complaints, guardianship, benefits.", url:"https://www.drny.org", ph:"800-993-8982", hr:"M-F 9am-5pm", tg:["dis"], legalIds:["disability-work-accommodation-ny"] },
  { id:"autismup", n:"Autism Up", c:"disabilitySvc", d:"Social and recreational programs for people with autism spectrum disorder.", url:"https://www.autismup.org", ph:"585-244-1720", hr:"M-F 9am-5pm", tg:["dis"] },
  { id:"arcmonroe", n:"Arc of Monroe County", c:"disabilitySvc", d:"Services and advocacy for people with intellectual and developmental disabilities.", url:"https://www.arcmonroe.org", ph:"585-287-3500", hr:"M-F 8:30am-5pm", tg:["dis"] },
  { id:"hcbswaiver", n:"HCBS Waiver Services", c:"disabilitySvc", d:"Medicaid waiver program for home and community-based services for people with disabilities.", url:"https://www.health.ny.gov/health_care/medicaid/waiver", ph:"585-753-6000", hr:"M-F 8:30am-5pm", tg:["dis"] },
  { id:"rocrehab", n:"Rochester Rehabilitation Center", c:"disabilitySvc", d:"Vocational rehabilitation, employment, and independent living services.", url:"https://www.rocrehab.org", ph:"585-271-7880", hr:"M-F 8:30am-5pm", tg:["dis"] },
  { id:"happinesshouse", n:"Happiness House", c:"disabilitySvc", d:"Services for children and adults with disabilities including early intervention and day programs.", url:"https://www.happinesshouse.org", ph:"585-546-5710", hr:"M-F 8am-4pm", tg:["dis","kids"] },
  { id:"golisanoautism", n:"Golisano Autism Center", c:"disabilitySvc", d:"Diagnosis, treatment, and support for individuals with autism at all ages.", url:"https://www.urmc.rochester.edu/golisano", ph:"585-275-2986", hr:"M-F 8am-5pm", tg:["dis"] },
  { id:"strongcenter", n:"Strong Center for Dev Disabilities", c:"disabilitySvc", d:"Neurodevelopmental evaluations, therapy, and family support.", url:"https://www.urmc.rochester.edu", ph:"585-275-0318", hr:"M-F 8am-5pm", tg:["dis","kids"] },
  { id:"fingerlakesddso", n:"Finger Lakes DDSO", c:"disabilitySvc", d:"State-operated developmental services for Monroe and surrounding counties.", url:"https://www.opwdd.ny.gov", ph:"585-461-8300", hr:"M-F 8am-5pm", tg:["dis"] },
  { id:"accestransition", n:"ACCES-VR Transition Services", c:"disabilitySvc", d:"Vocational rehabilitation for students with disabilities transitioning from school to employment.", url:"https://www.acces.nysed.gov/vr", ph:"585-258-2720", hr:"M-F 8:30am-5pm", tg:["dis","youth"] },

  // SENIOR SERVICES
  { id:"elderoneroc", n:"ElderONE — Monroe County", c:"seniorSvc", d:"Comprehensive senior services: care management, adult day, meals, transportation.", url:"https://www.elderonerochester.org", ph:"585-224-6060", hr:"M-F 8am-5pm", tg:["senior"] },
  { id:"lifespan", n:"Lifespan of Greater Rochester", c:"seniorSvc", d:"Information, advocacy, and services for older adults. Legal services, elder abuse prevention.", url:"https://www.lifespan-roch.org", ph:"585-244-8400", hr:"M-F 8am-4:30pm", tg:["senior"] },
  { id:"monroeaging", n:"Monroe County Aging & Adult Services", c:"seniorSvc", d:"County services for seniors including APS, Medicaid planning referrals, and senior programs.", url:"https://www.monroecounty.gov/aging", ph:"585-753-6280", hr:"M-F 8:30am-5pm", tg:["senior"] },
  { id:"seniorsource", n:"Senior Source — Rochester", c:"seniorSvc", d:"Benefits enrollment, advocacy, and service navigation for seniors.", url:"https://www.elderoneroc.org", ph:"585-244-8400", hr:"M-F 9am-5pm", tg:["senior"] },

  // VETERAN SERVICES
  { id:"mcvets", n:"Monroe County Veterans Service Agency", c:"veteranSvc", d:"Free benefits counseling and claims assistance for veterans and their families.", url:"https://www.monroecounty.gov/veterans", ph:"585-753-6040", hr:"M-F 8:30am-5pm", tg:["veteran"] },
  { id:"varochester", n:"VA Western NY Health System — Rochester", c:"veteranSvc", d:"Full healthcare for eligible veterans including mental health, primary care, and specialty care.", url:"https://www.va.gov/buffalo-health-care", ph:"585-463-2600", hr:"M-F 8am-4:30pm", tg:["veteran"] },
  { id:"veteranshome", n:"Veterans Outreach Center", c:"veteranSvc", d:"Mental health, employment, housing, and legal services for veterans.", url:"https://www.veteransoutreachcenter.org", ph:"585-546-1080", hr:"M-F 8am-5pm", tg:["veteran"] },
  { id:"vetslegal", n:"Legal Aid — Veterans Legal Program", c:"veteranSvc", d:"Free civil legal help for veterans in Monroe County.", url:"https://www.lasroc.org", ph:"585-232-4090", hr:"M-F 9am-5pm", tg:["veteran"] },

  // REFUGEE & IMMIGRANT
  { id:"iirochester", n:"International Institute of Rochester", c:"refugeeSvc", d:"Refugee resettlement, immigration services, ESL, employment for immigrants and refugees.", url:"https://www.iirochester.org", ph:"585-475-0500", hr:"M-F 9am-5pm", tg:["refugee"] },
  { id:"catholiccharimmig", n:"Catholic Charities — Immigration Legal Services", c:"refugeeSvc", d:"Low-cost immigration legal services: family petitions, DACA, asylum, naturalization.", url:"https://www.ccfdor.org", ph:"585-546-7220", hr:"M-F 9am-5pm", tg:["refugee"], legalIds:["rights-when-arrested-ny"] },
  { id:"farmworkers", n:"Farmworker Legal Services of NY", c:"refugeeSvc", d:"Free legal help for farmworkers in immigration, employment, and civil matters.", url:"https://www.wjcny.org", ph:"585-325-3050", hr:"M-F 9am-5pm", tg:["refugee","any"] },
  { id:"nocenter", n:"Northside Learning Center — Immigrant Services", c:"refugeeSvc", d:"ESL, citizenship preparation, and social support for immigrants on Rochester's north side.", url:"https://www.nslcrochester.org", ph:"585-266-7520", hr:"M-F 9am-4pm", tg:["refugee"] },

  // LGBTQ+
  { id:"outalliance", n:"Out Alliance — LGBTQ+ Resource Center", c:"lgbtq", d:"LGBTQ+ community center offering support groups, counseling referrals, and resources.", url:"https://www.outalliance.org", ph:"585-244-8640", hr:"M-F 10am-6pm", tg:["lgbtq"] },
  { id:"trilliumlgbtq", n:"Trillium Health — LGBTQ+ Services", c:"lgbtq", d:"Culturally competent healthcare and support services for LGBTQ+ individuals.", url:"https://www.trilliumhealth.org", ph:"585-545-7200", hr:"M-F 8am-5pm", tg:["lgbtq"] },
  { id:"pridecenter", n:"Pride Center of WNY (Buffalo)", c:"lgbtq", d:"LGBTQ+ services for Western NY including crisis support and community resources.", url:"https://www.pridecenterwny.org", ph:"716-856-9714", hr:"M-F 10am-6pm", tg:["lgbtq"] },

  // REENTRY
  { id:"rawny", n:"RAWNY — Re-entry Advocates of WNY", c:"reentry", d:"Criminal record help, employment, housing for people returning from incarceration.", url:"https://www.rawny.org", ph:"585-851-8886", hr:"M-F 9am-5pm", tg:["reentry"], legalIds:["clean-slate-ny","rights-when-arrested-ny"] },
  { id:"jpc", n:"Judicial Process Commission", c:"reentry", d:"Reentry mentoring, record clearing help, Certificates of Relief.", url:"https://www.rocjpc.org", ph:"585-325-7727", hr:"M-F 9am-5pm", tg:["reentry"], legalIds:["clean-slate-ny"] },
  { id:"hirepower", n:"Hire Power — Reentry Employment", c:"reentry", d:"Job readiness and placement services specifically for people with criminal records.", url:"https://www.rrcgroc.org", ph:"585-423-9750", hr:"M-F 9am-5pm", tg:["reentry"] },
  { id:"probationsupport", n:"Monroe County Probation — Reentry Services", c:"reentry", d:"Supervision support and reentry resources for people on probation or parole.", url:"https://www.monroecounty.gov/probation", ph:"585-753-3510", hr:"M-F 8:30am-5pm", tg:["reentry"] },

  // DOMESTIC VIOLENCE
  { id:"willow", n:"Willow Domestic Violence Center", c:"domestic", d:"24/7 crisis hotline, emergency shelter, legal advocacy, and safety planning for DV survivors.", url:"https://www.willowcenterny.org", ph:"585-222-7233", hr:"24/7", tg:["any"], legalIds:["order-of-protection-ny"] },
  { id:"sapac", n:"SAPAC — Sexual Assault Program", c:"domestic", d:"Free 24/7 support for sexual assault survivors. Hotline, advocacy, counseling.", url:"https://www.sapacrochester.org", ph:"585-546-2777", hr:"24/7", tg:["any"] },
  { id:"dvlegal", n:"Legal Aid DV Legal Team", c:"domestic", d:"Free legal help for DV survivors — orders of protection, custody, divorce, immigration.", url:"https://www.lasroc.org", ph:"585-232-4090", hr:"M-F 9am-5pm", tg:["any"], legalIds:["order-of-protection-ny","custody-basics-ny"] },

  // INTERNET & TECH
  { id:"affordableconn", n:"Affordable Connectivity Program", c:"internet", d:"Federal discount on internet service for low-income households.", url:"https://www.affordableconnectivity.gov", ph:"877-384-2575", hr:"24/7 online", tg:["any"] },
  { id:"digitalliteracy", n:"Rochester Public Library — Computer Access", c:"internet", d:"Free computer and internet access at all Rochester Public Library branches.", url:"https://www.libraryweb.org", ph:"585-428-8000", hr:"Varies by branch", tg:["any"] },
  { id:"technow", n:"Tech NOW — Computer Equipment", c:"internet", d:"Refurbished computers and tech training for low-income Rochester residents.", url:"https://www.technow.org", ph:"585-473-3440", hr:"M-F 9am-5pm", tg:["any"] },

  // FINANCIAL
  { id:"consumercredit", n:"Consumer Credit Counseling — CCCS", c:"financial", d:"Free or low-cost credit counseling, debt management, and budget help.", url:"https://www.nfcc.org", ph:"800-388-2227", hr:"M-F 8am-8pm", tg:["any"] },
  { id:"vita", n:"VITA — Free Tax Preparation", c:"financial", d:"IRS-certified free tax filing for households earning under $67,000.", url:"https://www.irs.gov/vita", ph:"585-473-3050", hr:"Jan-Apr: M-Sa 9am-5pm", tg:["any"] },
  { id:"heap", n:"HEAP — Home Energy Assistance", c:"financial", d:"Help paying heating and cooling bills for eligible low-income households.", url:"https://www.dfa.ny.gov/heap.htm", ph:"585-753-6000", hr:"M-F 8:30am-5pm", doc:"Income verification, utility bills, ID", tg:["any"] },
  { id:"utilityhelp", n:"Rochester Gas & Electric — Energy Assistance", c:"financial", d:"Rate assistance programs for low-income RG&E customers.", url:"https://www.rge.com/wps/portal/rge/accountbilling/billassistance", ph:"800-743-2110", hr:"M-F 8am-5pm", tg:["any"] },

  // DOCUMENTS & ID
  { id:"dmvid", n:"NY DMV — Non-Driver ID", c:"documents", d:"NY State photo ID for people who do not drive. Accepted everywhere a driver's license is.", url:"https://dmv.ny.gov", ph:"585-753-3380", hr:"M-F 8am-4pm", doc:"Proof of identity, date of birth, Social Security, NY residency", tg:["any"] },
  { id:"birthcert", n:"NY Vital Records — Birth Certificate", c:"documents", d:"Order a certified copy of your New York State birth certificate online or by mail.", url:"https://www.health.ny.gov/vital_records", ph:"855-322-1022", hr:"M-F 8:30am-4:45pm", tg:["any"] },
  { id:"citizenshipprep", n:"Northside Learning Center — Citizenship Classes", c:"documents", d:"Free citizenship preparation classes and assistance with naturalization application.", url:"https://www.nslcrochester.org", ph:"585-266-7520", hr:"M-F 9am-4pm", tg:["refugee"] },

  // PETS
  { id:"humane", n:"Lollypop Farm — Humane Society", c:"pets", d:"Pet food bank, low-cost vet care, and resources for pet owners in need.", url:"https://www.lollypop.org", ph:"585-223-1330", hr:"Daily 11am-5pm", tg:["any"] },
  { id:"petfood", n:"Pet Food Shelf — Foodlink", c:"pets", d:"Free pet food for income-qualifying pet owners.", url:"https://www.foodlinkny.org", ph:"585-328-3380", hr:"M-F 8am-4:30pm", tg:["any"] },

  // FUNERAL ASSISTANCE
  { id:"funeralassist", n:"Monroe County DSS — Burial Assistance", c:"funeral", d:"Financial assistance for burial costs for low-income Monroe County families.", url:"https://www.monroecounty.gov/dss", ph:"585-753-6000", hr:"M-F 8:30am-5pm", doc:"Death certificate, proof of income", tg:["any"] },

  // CAREGIVER
  { id:"caregivernetwork", n:"Caregiver Network — Monroe County", c:"caregiver", d:"Support groups, respite care, and resources for family caregivers.", url:"https://www.elderonerochester.org", ph:"585-224-6060", hr:"M-F 8am-5pm", tg:["any"] },
  { id:"alz", n:"Alzheimer's Association — Upstate NY", c:"caregiver", d:"Support, education, and care navigation for Alzheimer's caregivers.", url:"https://www.alz.org", ph:"800-272-3900", hr:"24/7 helpline", tg:["any"] },

  // DENTAL
  { id:"eastside", n:"Eastside Community Dental", c:"dental", d:"Sliding-scale dental care for uninsured and underinsured patients.", url:"https://www.eastsidedental.org", ph:"585-654-6650", hr:"M-F 8am-5pm", tg:["any"] },
  { id:"dentalkids", n:"Dental Clinic for Kids — Monroe County Health", c:"dental", d:"Low-cost dental care for children on Medicaid or with no insurance.", url:"https://www.monroecounty.gov/health", ph:"585-753-5400", hr:"M-F 8:30am-5pm", tg:["kids","family"] },
  { id:"stmarysdental", n:"St. Mary's Dental Free Clinic", c:"dental", d:"Free dental extractions and urgent care for uninsured adults.", url:"https://www.stmarysrochester.org", ph:"585-436-9800", hr:"Call for clinic dates", tg:["any"] },

  // PARENTAL PROTECTION
  { id:"familycourt", n:"Monroe County Family Court", c:"parentalProtection", d:"File for custody, orders of protection, and child support. Court staff can help with forms.", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", ph:"585-371-3490", ad:"111 New York Ave, Rochester NY 14608", hr:"M-F 9am-5pm", doc:"ID if possible but not required", tg:["any"], legalIds:["order-of-protection-ny","custody-basics-ny"] },
  { id:"willowparental", n:"Willow Center — Safety Planning", c:"parentalProtection", d:"24/7 safety planning for parents and children, including help navigating legal protections.", url:"https://www.willowcenterny.org", ph:"585-222-7233", hr:"24/7", tg:["any"], legalIds:["order-of-protection-ny"] },
  { id:"familycourthelp", n:"Family Court Self-Help Center", c:"parentalProtection", d:"Free in-person help filling out Family Court forms for custody and orders of protection.", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", ph:"585-371-3490", ad:"111 New York Ave, Rochester NY", hr:"M-F 9am-4:30pm", tg:["any"] },
  { id:"legalaidfamily", n:"Legal Aid — Family Law Unit", c:"parentalProtection", d:"Free legal representation in family court for income-qualifying residents.", url:"https://www.lasroc.org", ph:"585-232-4090", hr:"M-F 9am-5pm", inc:200, tg:["any"], legalIds:["custody-basics-ny","order-of-protection-ny"] },
  { id:"childprotect", n:"CPS — Child Protective Services", c:"parentalProtection", d:"Report child abuse or neglect. Available 24/7 for emergency child safety situations.", url:"https://www.monroecounty.gov/dss", ph:"585-393-3000", hr:"24/7 for emergencies", tg:["any"] },
  { id:"monroechild", n:"Monroe County Child Support Enforcement", c:"parentalProtection", d:"Establish and enforce child support orders. Free for custodial parents.", url:"https://www.monroecounty.gov/dss", ph:"585-753-6000", hr:"M-F 8:30am-5pm", tg:["any"], legalIds:["child-support-ny"] },
  { id:"supervisedvisit", n:"Supervised Visitation — Monroe County", c:"parentalProtection", d:"Court-ordered supervised visitation for safety. Request through Family Court.", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", ph:"585-371-3490", hr:"Request through court", tg:["any"] },
  { id:"nycourtsinfo", n:"NY Courts — Custody & Visitation Info", c:"parentalProtection", d:"Plain-language explanation of how NY Family Courts decide custody and visitation.", url:"https://www.nycourts.gov/courthelp/family/custodyVisitation.shtml", hr:"24/7 online", tg:["any"], legalIds:["custody-basics-ny"] },
]


// ─── UI COMPONENTS ────────────────────────────────────────────────────────────

function Logo({ size = 28 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: C.forest, display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontFamily: FONT.serif,
      fontSize: size * 0.4, fontWeight: 700, color: C.white,
      letterSpacing: -0.5, flexShrink: 0,
    }}>HF</div>
  )
}

function QuickExitBtn({ lang }) {
  return (
    <button
      className="quick-exit-btn"
      onClick={() => window.location.replace(QUICK_EXIT_URL)}
      aria-label="Quick exit"
    >
      {t(lang, 'quickExit')} ✕
    </button>
  )
}

function LegalCrossLinks({ categoryKey, lang, onGoLegal }) {
  const links = LEGAL_CROSSLINKS[categoryKey]
  if (!links || links.length === 0) return null
  return (
    <div style={{
      marginTop: 16, padding: '14px 16px',
      background: C.sage, borderRadius: 12,
      border: `1px solid #c8e6c9`,
    }}>
      <p style={{
        fontFamily: FONT.sans, fontSize: 12, fontWeight: 700,
        color: C.forest, marginBottom: 8, textTransform: 'uppercase',
        letterSpacing: 0.5,
      }}>
        ⚖️ {t(lang, 'legalLinks')}
      </p>
      <p style={{
        fontFamily: FONT.sans, fontSize: 11, color: C.stone,
        marginBottom: 8, fontStyle: 'italic',
      }}>
        {t(lang, 'legalLinksSub')}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {links.map(link => (
          <button
            key={link.id}
            onClick={() => onGoLegal && onGoLegal(link.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 12px', background: C.white,
              border: `1px solid #c8e6c9`, borderRadius: 8,
              cursor: 'pointer', textAlign: 'left',
              fontFamily: FONT.sans, fontSize: 13,
              color: C.forest, fontWeight: 500,
              transition: 'background 0.15s',
            }}
            onMouseOver={e => e.currentTarget.style.background = C.sage}
            onMouseOut={e => e.currentTarget.style.background = C.white}
          >
            <span style={{ flex: 1 }}>{link.title}</span>
            <span style={{ fontSize: 11, color: C.stone, flexShrink: 0 }}>
              {t(lang, 'viewLegal')}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function ProgramCard({ prog, lang, userLat, userLon, onGoLegal }) {
  const [expanded, setExpanded] = useState(false)
  const dist = (userLat && prog.lat && prog.lon)
    ? distanceMiles(userLat, userLon, prog.lat, prog.lon).toFixed(1)
    : null
  const isSensitive = CATEGORIES[prog.c]?.sensitive
  const isCrisis = CATEGORIES[prog.c]?.crisis
  return (
    <div style={{
      background: C.white, borderRadius: 14,
      border: `1.5px solid ${C.border}`,
      overflow: 'hidden',
      transition: 'border-color 0.15s',
    }}>
      <div
        onClick={() => setExpanded(e => !e)}
        style={{
          padding: '14px 16px', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ flex: 1, fontFamily: FONT.sans, fontSize: 15, fontWeight: 600, color: C.bark }}>
            {prog.n}
          </span>
          {dist && (
            <span style={{
              fontFamily: FONT.sans, fontSize: 11, color: C.stone,
              flexShrink: 0, marginTop: 2,
            }}>
              {dist} mi
            </span>
          )}
          <span style={{
            color: C.stone, fontSize: 11,
            transform: expanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s', flexShrink: 0,
          }}>▼</span>
        </div>
        <p style={{ fontFamily: FONT.sans, fontSize: 13, color: C.stone, lineHeight: 1.4 }}>
          {prog.d}
        </p>
        {isCrisis && (
          <p style={{ fontFamily: FONT.sans, fontSize: 12, color: '#b71c1c', fontWeight: 600, marginTop: 2 }}>
            {t(lang, 'crisisNote')}
          </p>
        )}
      </div>
      {expanded && (
        <div style={{
          borderTop: `1px solid ${C.border}`,
          padding: '14px 16px',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {isSensitive && (
            <p style={{ fontFamily: FONT.sans, fontSize: 12, color: C.stone, fontStyle: 'italic' }}>
              🔒 {t(lang, 'privacyNote')}
            </p>
          )}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {prog.ph && (
              <a href={`tel:${prog.ph}`} style={{
                background: C.forest, color: C.white,
                fontFamily: FONT.sans, fontSize: 13, fontWeight: 600,
                padding: '8px 16px', borderRadius: 999, textDecoration: 'none',
              }}>
                {t(lang, 'callNow')} {prog.ph}
              </a>
            )}
            {prog.url && (
              <a href={prog.url} target="_blank" rel="noopener noreferrer" style={{
                background: 'transparent', color: C.forest,
                fontFamily: FONT.sans, fontSize: 13, fontWeight: 600,
                padding: '8px 16px', borderRadius: 999,
                border: `1.5px solid ${C.forest}`, textDecoration: 'none',
              }}>
                {t(lang, 'website')} →
              </a>
            )}
          </div>
          {prog.hr && (
            <div>
              <span style={{ fontFamily: FONT.sans, fontSize: 11, color: C.stone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {t(lang, 'hours')}:{' '}
              </span>
              <span style={{ fontFamily: FONT.sans, fontSize: 13, color: C.bark }}>{prog.hr}</span>
            </div>
          )}
          {prog.doc && (
            <div>
              <span style={{ fontFamily: FONT.sans, fontSize: 11, color: C.stone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {t(lang, 'documents')}:{' '}
              </span>
              <span style={{ fontFamily: FONT.sans, fontSize: 13, color: C.bark }}>{prog.doc}</span>
            </div>
          )}
          {prog.inc && (
            <div>
              <span style={{ fontFamily: FONT.sans, fontSize: 11, color: C.stone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {t(lang, 'eligibility')}:{' '}
              </span>
              <span style={{ fontFamily: FONT.sans, fontSize: 13, color: C.bark }}>
                Income at or below {prog.inc}% federal poverty line
              </span>
            </div>
          )}
          {prog.nt && (
            <p style={{ fontFamily: FONT.sans, fontSize: 12, color: C.stone, fontStyle: 'italic', borderLeft: `2px solid ${C.border}`, paddingLeft: 8 }}>
              {prog.nt}
            </p>
          )}
          {prog.legalIds && prog.legalIds.length > 0 && (
            <LegalCrossLinks categoryKey={prog.c} lang={lang} onGoLegal={onGoLegal} />
          )}
        </div>
      )}
    </div>
  )
}


// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

function HelpFinderInner({ onExit, city, county, municipality, lang, setLang, onGoLegal }) {
  const [search, setSearch]           = useState('')
  const [category, setCategory]       = useState(null)
  const [showAllCats, setShowAllCats] = useState(false)
  const [whoFilter, setWhoFilter]     = useState('any')
  const [nearMeActive, setNearMeActive] = useState(false)
  const [userLat, setUserLat]         = useState(null)
  const [userLon, setUserLon]         = useState(null)
  const searchRef = useRef(null)

  const isSensitiveCategory = category && CATEGORIES[category]?.sensitive
  const cityDisplay = municipality ? municipality.name : (city || 'your area')

  // Near Me — food category only
  const handleNearMe = useCallback(() => {
    if (nearMeActive) { setNearMeActive(false); return }
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(pos => {
      setUserLat(pos.coords.latitude)
      setUserLon(pos.coords.longitude)
      setNearMeActive(true)
      setCategory('food')
    }, () => {})
  }, [nearMeActive])

  // Filtered and sorted programs
  const results = useMemo(() => {
    let pool = PROGRAMS

    // Category filter
    if (category) pool = pool.filter(p => p.c === category)

    // Search filter
    if (search.trim().length > 1) {
      const q = search.toLowerCase()
      pool = pool.filter(p =>
        p.n.toLowerCase().includes(q) ||
        p.d.toLowerCase().includes(q) ||
        (p.nt && p.nt.toLowerCase().includes(q))
      )
    }

    // Who filter
    if (whoFilter !== 'any') {
      pool = pool.filter(p => !p.tg || p.tg.includes('any') || p.tg.includes(whoFilter))
    }

    // Near Me sort
    if (nearMeActive && userLat && userLon) {
      pool = pool
        .filter(p => p.lat && p.lon)
        .sort((a, b) =>
          distanceMiles(userLat, userLon, a.lat, a.lon) -
          distanceMiles(userLat, userLon, b.lat, b.lon)
        )
    }

    return pool
  }, [category, search, whoFilter, nearMeActive, userLat, userLon])

  return (
    <div style={{ minHeight: '100vh', background: C.warmBg, display: 'flex', flexDirection: 'column' }}>

      {/* Quick exit for sensitive categories */}
      {isSensitiveCategory && <QuickExitBtn lang={lang} />}

      {/* Header */}
      <header style={{
        background: C.white, borderBottom: `1px solid ${C.border}`,
        padding: '14px 20px', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          maxWidth: MAX_WIDTH.help, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <button
            onClick={onExit}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Logo size={30} />
            <div>
              <span style={{ fontFamily: FONT.serif, fontSize: 16, color: C.forest, display: 'block' }}>
                HelpFinder
              </span>
              <span style={{ fontFamily: FONT.sans, fontSize: 11, color: C.stone, display: 'block' }}>
                {cityDisplay}
              </span>
            </div>
          </button>

          {/* Language selector */}
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            aria-label="Select language"
            style={{
              fontFamily: FONT.sans, fontSize: 13, color: C.bark,
              background: C.white, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '5px 8px', cursor: 'pointer',
            }}
          >
            {HELP_LANGUAGES.map(l => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
        </div>
      </header>

      <main style={{ flex: 1, padding: '20px 20px 60px', maxWidth: MAX_WIDTH.help, margin: '0 auto', width: '100%' }}>

        {/* Hero — resource count and clear instruction */}
        {!search && !category && (
          <div style={{
            textAlign: 'center', marginBottom: 24, padding: '8px 0',
          }}>
            <h1 style={{
              fontFamily: FONT.serif, fontSize: 24, color: C.bark,
              fontWeight: 400, marginBottom: 6, lineHeight: 1.3,
            }}>
              {PROGRAMS.length} free programs in {cityDisplay}
            </h1>
            <p style={{
              fontFamily: FONT.sans, fontSize: 15, color: C.stone,
              lineHeight: 1.5,
            }}>
              Tap a category below. Every program has a phone number you can call right now.
            </p>
          </div>
        )}

        {/* Quick tiles — PRIMARY ACTION */}
        {!search && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {QUICK_TILES.map(tile => {
                const count = PROGRAMS.filter(p => p.c === tile.key).length
                const isActive = category === tile.key
                return (
                  <button
                    key={tile.key}
                    onClick={() => setCategory(isActive ? null : tile.key)}
                    style={{
                      padding: '18px 14px',
                      background: isActive ? C.forest : tile.color,
                      border: `2px solid ${isActive ? C.forest : 'transparent'}`,
                      borderRadius: 16, cursor: 'pointer', textAlign: 'left',
                      transition: 'all 0.15s',
                    }}
                  >
                    <p style={{
                      fontFamily: FONT.sans, fontSize: 17, fontWeight: 700,
                      color: isActive ? C.white : C.bark, marginBottom: 4,
                    }}>
                      {t(lang, tile.titleKey)}
                    </p>
                    <p style={{
                      fontFamily: FONT.sans, fontSize: 12,
                      color: isActive ? 'rgba(255,255,255,0.85)' : C.stone,
                      marginBottom: 6,
                    }}>
                      {t(lang, tile.subKey)}
                    </p>
                    <p style={{
                      fontFamily: FONT.sans, fontSize: 12, fontWeight: 700,
                      color: isActive ? 'rgba(255,255,255,0.9)' : C.forest,
                    }}>
                      {count} programs →
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Near Me — food shortcut */}
            <button
              onClick={handleNearMe}
              style={{
                marginTop: 10, width: '100%',
                padding: '13px',
                background: nearMeActive ? C.forest : C.sage,
                border: `1.5px solid ${nearMeActive ? C.forest : '#c8e6c9'}`,
                borderRadius: 12, cursor: 'pointer',
                fontFamily: FONT.sans, fontSize: 14, fontWeight: 600,
                color: nearMeActive ? C.white : C.forest,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              📍 {nearMeActive ? t(lang, 'nearMeActive') : t(lang, 'nearMe') + ' — Food'}
            </button>

            {/* Toggle all categories */}
            <button
              onClick={() => setShowAllCats(s => !s)}
              style={{
                marginTop: 10, width: '100%', padding: '12px',
                background: C.white, border: `1.5px solid ${C.border}`,
                borderRadius: 12, cursor: 'pointer',
                fontFamily: FONT.sans, fontSize: 14, fontWeight: 600, color: C.forest,
              }}
            >
              {showAllCats ? t(lang, 'hideAll') : `Browse all ${Object.keys(CATEGORIES).length} categories`}
            </button>

            {showAllCats && (
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: 8, marginTop: 10,
              }}>
                {Object.entries(CATEGORIES).map(([key, cat]) => (
                  <button
                    key={key}
                    onClick={() => { setCategory(category === key ? null : key); setShowAllCats(false) }}
                    style={{
                      padding: '10px 8px',
                      background: category === key ? C.forest : C.white,
                      border: `1.5px solid ${category === key ? C.forest : C.border}`,
                      borderRadius: 10, cursor: 'pointer',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{cat.icon}</span>
                    <span style={{
                      fontFamily: FONT.sans, fontSize: 11,
                      color: category === key ? C.white : C.bark,
                      textAlign: 'center', lineHeight: 1.2,
                    }}>
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Search bar — secondary, for people who know what they need */}
        <div style={{
          display: 'flex', gap: 8,
          background: C.white, border: `1px solid ${C.border}`,
          borderRadius: RADIUS.button, padding: '5px 5px 5px 14px',
          marginBottom: 20,
        }}>
          <input
            ref={searchRef}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t(lang, 'searchPlaceholder')}
            aria-label="Search for help"
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontFamily: FONT.sans, fontSize: 14, color: C.bark,
              background: 'transparent', minWidth: 0,
            }}
          />
          {search && (
            <button
              onClick={() => { setSearch(''); setCategory(null); searchRef.current?.focus() }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.stone, fontSize: 16, padding: '0 6px' }}
            >✕</button>
          )}
        </div>

        {/* Active filter pill */}
        {(category || search) && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            {category && (
              <button
                onClick={() => setCategory(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: C.forest, color: C.white, border: 'none',
                  borderRadius: 999, padding: '5px 12px',
                  fontFamily: FONT.sans, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                }}
              >
                {CATEGORIES[category]?.icon} {CATEGORIES[category]?.label} ✕
              </button>
            )}
            <span style={{ fontFamily: FONT.sans, fontSize: 12, color: C.stone }}>
              {results.length} {t(lang, 'results')}
            </span>
          </div>
        )}

        {/* Results */}
        {(category || search) && (
          <>
            {/* Interpreter notice for non-English */}
            {lang !== 'en' && (
              <p style={{
                fontFamily: FONT.sans, fontSize: 12, color: C.forest,
                background: C.sage, borderRadius: 8, padding: '8px 12px',
                marginBottom: 12, fontStyle: 'italic',
              }}>
                {t(lang, 'interpreterNotice')}
              </p>
            )}

            {results.length === 0 ? (
              <p style={{ fontFamily: FONT.sans, fontSize: 15, color: C.stone, textAlign: 'center', padding: '32px 0' }}>
                {t(lang, 'noResults')}
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {results.map(prog => (
                  <ProgramCard
                    key={prog.id}
                    prog={prog}
                    lang={lang}
                    userLat={userLat}
                    userLon={userLon}
                    onGoLegal={onGoLegal}
                  />
                ))}
              </div>
            )}

            {/* Category-level legal cross-links */}
            {category && LEGAL_CROSSLINKS[category] && LEGAL_CROSSLINKS[category].length > 0 && (
              <LegalCrossLinks categoryKey={category} lang={lang} onGoLegal={onGoLegal} />
            )}
          </>
        )}

        {/* Empty state */}
        {!category && !search && (
          <div style={{ textAlign: 'center', padding: '12px 0 0', color: C.dust }}>
            <p style={{ fontFamily: FONT.sans, fontSize: 12 }}>
              Every program includes a phone number, hours, and what to bring.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${C.border}`, padding: '16px 20px',
        textAlign: 'center', background: C.white,
      }}>
        <p style={{ fontFamily: FONT.sans, fontSize: 12, color: C.stone, marginBottom: 2 }}>
          {t(lang, 'footer')}
        </p>
        <p style={{ fontFamily: FONT.sans, fontSize: 10, color: C.dust, marginBottom: 6 }}>
          {t(lang, 'footerNote')}
        </p>
        <a
          href="https://sedralstudios.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: FONT.sans, fontSize: 10, color: C.forest,
            textDecoration: 'none', opacity: 0.7,
          }}
        >
          Verified April 2026 ✓
        </a>
      </footer>
    </div>
  )
}

// ─── ERROR BOUNDARY ───────────────────────────────────────────────────────────

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, padding: 32 }}>
          <p style={{ fontFamily: FONT.sans, color: C.stone }}>Something went wrong loading the help directory.</p>
          <button onClick={this.props.onExit} style={{ background: C.forest, color: C.white, border: 'none', borderRadius: 28, padding: '12px 24px', fontFamily: FONT.sans, cursor: 'pointer' }}>
            Go Home
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// React import needed for ErrorBoundary
import React from 'react'

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────

function HelpFinderWithMunicipality({ onExit, city, county, lang, setLang, onGoLegal }) {
  const munState = useMunicipalityDetect(county)
  return (
    <div>
      <MunicipalityPrompt {...munState} />
      <HelpFinderInner
        onExit={onExit}
        city={city}
        county={county}
        municipality={munState.confirmed ? munState.municipality : null}
        lang={lang}
        setLang={setLang}
        onGoLegal={onGoLegal}
      />
    </div>
  )
}

export default function HelpFinder({ onExit, city, county, lang, setLang, onGoLegal }) {
  return (
    <ErrorBoundary onExit={onExit}>
      <HelpFinderWithMunicipality
        onExit={onExit}
        city={city}
        county={county}
        lang={lang}
        setLang={setLang}
        onGoLegal={onGoLegal}
      />
    </ErrorBoundary>
  )
}

// ============================================
// CHUNK_11_V2 COMPLETE: src/components/HelpFinder.jsx
// 231 programs. 8 languages. Legal cross-links.
// Municipality-aware. Clean rebuild. No merge.
// NEXT: CHUNK_12 — Final zip
// STATUS: READY FOR PUSH
// ============================================
