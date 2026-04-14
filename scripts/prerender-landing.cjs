#!/usr/bin/env node
/*
 * scripts/prerender-landing.cjs
 * ============================================================
 * Prerenders the SPA landing pages (home, about, support, privacy, terms)
 * for all 8 in-app languages. Writes static HTML to dist/ so Google sees
 * real content instead of an empty <div id="root">.
 *
 * Generates 8 × 5 = 40 HTML files.
 *
 * Strategy:
 *   - Reads dist/index.html (Vite's SPA shell) as the base template.
 *   - For each (page, lang), clones the template and:
 *     - Updates <title>, <meta description>, <html lang>, <link canonical>
 *     - Adds hreflang <link> tags for the other 7 language variants
 *     - Injects a <div id="prerender-content"> with real static content
 *       ABOVE <div id="root"></div>
 *   - LandingPage.jsx removes #prerender-content on mount, so React UX
 *     is unchanged; only Googlebot and slow connections see the static.
 *
 * IMPORTANT — dual rendering trap:
 *   Strings in UI_LANDING below are DUPLICATED from src/components/LandingPage.jsx.
 *   If you change a string there, change it here too, or the prerendered
 *   Google view will diverge from the client UX.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_URL = 'https://helpfinder.help';

// Languages in the main SPA UI (matches LANGS in LandingPage.jsx).
const LANGS = [
  { code: 'en', htmlLang: 'en',      label: 'English'   },
  { code: 'es', htmlLang: 'es',      label: 'Español'   },
  { code: 'ne', htmlLang: 'ne',      label: 'नेपाली'    },
  { code: 'ar', htmlLang: 'ar',      label: 'العربية'   },
  { code: 'sw', htmlLang: 'sw',      label: 'Kiswahili' },
  { code: 'my', htmlLang: 'my',      label: 'မြန်မာ'   },
  { code: 'so', htmlLang: 'so',      label: 'Soomaali'  },
  { code: 'zh', htmlLang: 'zh-Hans', label: '中文'      },
];

// Localized strings — duplicated from LandingPage.jsx UI object.
// Only the strings actually rendered in prerendered HTML are here.
const S = {
  en: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — Free Help, Everywhere',
    homeH1: 'Free help in Rochester and Monroe County, New York',
    homeLede: 'Food. Housing. Health. Jobs. Crisis support. Legal rights. Hundreds of free programs in 8 languages. No accounts. No personal data collected. Just help.',
    door1Btn: 'Find help now',
    door1Sub: 'Or call 211 — free, 24/7, any language',
    door2Title: 'Know Your Rights',
    door2Desc: 'Plain-English legal guides on eviction, benefits, debt, wages, and more for New York.',
    aboutLink: 'About Sedral Studios',
    aboutLinkDesc: 'What this is. Who built it. Why it is free.',
    aboutTitle: 'About HelpFinder and Sedral Studios',
    aboutP1: 'HelpFinder is a free tool that connects people with real programs in their city. No accounts. No personal data collected. No ads. Just answers.',
    aboutP2: 'Starting in Rochester, NY. Free. Verified. No account needed. Growing daily.',
    supportTitle: 'Support HelpFinder',
    supportDesc: 'HelpFinder is free for everyone who uses it. It stays free because people like you decide it should exist.',
    privacyTitle: 'Privacy',
    privacyShort: 'We do not collect personal data.',
    privacyP1: 'No accounts. No cookies from us. No tracking pixels. No analytics that identify you.',
    termsTitle: 'Terms of Use',
    termsP1: 'By using helpfinder.help, you agree to the following terms.',
    termsP2: 'HelpFinder is provided as-is, without warranties of any kind. We make no guarantees about the accuracy, completeness, or reliability of any information on this site.',
    navHome: 'Home',
    navAbout: 'About',
    navSupport: 'Support',
    navPrivacy: 'Privacy',
    navTerms: 'Terms',
    navLegal: 'Know Your Rights',
    footer: 'Built with nothing. Built for everyone.',
  },
  es: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — Ayuda Gratuita, En Todas Partes',
    homeH1: 'Ayuda gratuita en Rochester y el condado de Monroe, Nueva York',
    homeLede: 'Comida. Vivienda. Salud. Empleo. Apoyo en crisis. Derechos legales. Cientos de programas gratuitos en 8 idiomas. Sin cuentas. Sin datos personales. Solo respuestas.',
    door1Btn: 'Buscar ayuda',
    door1Sub: 'O llame al 211 — gratis, 24/7, cualquier idioma',
    door2Title: 'Conozca Sus Derechos',
    door2Desc: 'Guías legales en lenguaje claro sobre desalojo, beneficios, deuda, salarios y más para Nueva York.',
    aboutLink: 'Sobre Sedral Studios',
    aboutLinkDesc: 'Qué es esto. Quién lo construyó. Por qué es gratis.',
    aboutTitle: 'Acerca de HelpFinder y Sedral Studios',
    aboutP1: 'HelpFinder es una herramienta gratuita que conecta a las personas con programas reales en su ciudad. Sin cuentas. Sin datos recopilados. Sin anuncios. Solo respuestas.',
    aboutP2: 'Comenzando en Rochester, NY. Gratis. Verificado. Sin cuenta. Creciendo cada día.',
    supportTitle: 'Apoya HelpFinder',
    supportDesc: 'HelpFinder es gratis para todos. Se mantiene gratis porque personas como tú deciden que debe existir.',
    privacyTitle: 'Privacidad',
    privacyShort: 'No recopilamos datos personales.',
    privacyP1: 'Sin cuentas. Sin cookies. Sin píxeles de rastreo. Sin analíticas que te identifiquen.',
    termsTitle: 'Términos de Uso',
    termsP1: 'Al usar helpfinder.help, aceptas los siguientes términos.',
    termsP2: 'HelpFinder se proporciona tal cual, sin garantías de ningún tipo.',
    navHome: 'Inicio',
    navAbout: 'Acerca de',
    navSupport: 'Apoyar',
    navPrivacy: 'Privacidad',
    navTerms: 'Términos',
    navLegal: 'Conozca Sus Derechos',
    footer: 'Construido con nada. Construido para todos.',
  },
  ne: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — सबैका लागि निःशुल्क सहयोग',
    homeH1: 'रोचेस्टर र मनरो काउन्टी, न्यूयोर्कमा निःशुल्क सहायता',
    homeLede: 'खाना। बसोबास। स्वास्थ्य। रोजगार। संकट सहयोग। कानूनी अधिकार। ८ भाषामा सयौं निःशुल्क कार्यक्रमहरू। कुनै खाता छैन। कुनै डाटा छैन।',
    door1Btn: 'सहायता खोज्नुहोस्',
    door1Sub: 'वा 211 मा कल गर्नुहोस् — निःशुल्क, 24/7',
    door2Title: 'आफ्ना अधिकार जान्नुहोस्',
    door2Desc: 'निकाला, लाभ, ऋण, ज्याला र न्यूयोर्कका अन्य विषयहरूमा सरल अंग्रेजीमा कानूनी मार्गदर्शन।',
    aboutLink: 'Sedral Studios बारे',
    aboutLinkDesc: 'यो के हो। कसले बनायो। किन निःशुल्क।',
    aboutTitle: 'HelpFinder र Sedral Studios बारे',
    aboutP1: 'HelpFinder एक निःशुल्क उपकरण हो। कुनै खाता छैन। कुनै डाटा छैन।',
    aboutP2: 'पहिलो शहर Rochester, NY हो।',
    supportTitle: 'HelpFinder लाई समर्थन गर्नुहोस्',
    supportDesc: 'HelpFinder सबैको लागि निःशुल्क छ।',
    privacyTitle: 'गोपनीयता',
    privacyShort: 'हामी व्यक्तिगत डाटा सङ्कलन गर्दैनौं।',
    privacyP1: 'कुनै खाता छैन। कुनै कुकी छैन। कुनै ट्र्याकिङ छैन।',
    termsTitle: 'प्रयोगका सर्तहरू',
    termsP1: 'helpfinder.help प्रयोग गरेर तपाईं निम्न सर्तहरूमा सहमत हुनुहुन्छ।',
    termsP2: 'HelpFinder जस्ताछ त्यस्तै प्रदान गरिन्छ, कुनै ग्यारेन्टी बिना।',
    navHome: 'गृह',
    navAbout: 'बारेमा',
    navSupport: 'समर्थन',
    navPrivacy: 'गोपनीयता',
    navTerms: 'सर्तहरू',
    navLegal: 'आफ्ना अधिकार जान्नुहोस्',
    footer: 'केहीबाट निर्मित। सबैको लागि निर्मित।',
  },
  ar: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — مساعدة مجانية، في كل مكان',
    homeH1: 'مساعدة مجانية في روتشستر ومقاطعة مونرو، نيويورك',
    homeLede: 'طعام. سكن. صحة. وظائف. دعم في الأزمات. حقوق قانونية. مئات البرامج المجانية بـ 8 لغات. بدون حسابات. بدون بيانات شخصية.',
    door1Btn: 'ابحث عن مساعدة',
    door1Sub: 'أو اتصل بـ 211 — مجاني، 24/7، أي لغة',
    door2Title: 'اعرف حقوقك',
    door2Desc: 'أدلة قانونية بلغة واضحة حول الإخلاء والإعانات والديون والأجور والمزيد لنيويورك.',
    aboutLink: 'عن Sedral Studios',
    aboutLinkDesc: 'ما هذا. من بناه. لماذا مجاني.',
    aboutTitle: 'عن HelpFinder وSedral Studios',
    aboutP1: 'HelpFinder أداة مجانية. لا حسابات. لا بيانات. لا إعلانات.',
    aboutP2: 'نبدأ في روتشستر، نيويورك. مجاني. موثّق.',
    supportTitle: 'ادعم HelpFinder',
    supportDesc: 'HelpFinder مجاني للجميع.',
    privacyTitle: 'الخصوصية',
    privacyShort: 'لا نجمع بيانات شخصية.',
    privacyP1: 'لا حسابات. لا كوكيز. لا تتبع.',
    termsTitle: 'شروط الاستخدام',
    termsP1: 'باستخدامك لـ helpfinder.help، فإنك توافق على الشروط التالية.',
    termsP2: 'يتم تقديم HelpFinder كما هو، بدون ضمانات.',
    navHome: 'الرئيسية',
    navAbout: 'عن',
    navSupport: 'دعم',
    navPrivacy: 'الخصوصية',
    navTerms: 'الشروط',
    navLegal: 'اعرف حقوقك',
    footer: 'بُني من لا شيء. بُني للجميع.',
  },
  sw: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — Msaada wa Bure, Kila Mahali',
    homeH1: 'Msaada wa bure katika Rochester na Monroe County, New York',
    homeLede: 'Chakula. Makazi. Afya. Kazi. Msaada wa dharura. Haki za kisheria. Mamia ya programu za bure katika lugha 8. Hakuna akaunti. Hakuna data.',
    door1Btn: 'Tafuta msaada',
    door1Sub: 'Au piga 211 — bure, 24/7, lugha yoyote',
    door2Title: 'Fahamu Haki Zako',
    door2Desc: 'Miongozo ya kisheria kwa lugha rahisi kuhusu kufukuzwa, faida, deni, mishahara na zaidi kwa New York.',
    aboutLink: 'Kuhusu Sedral Studios',
    aboutLinkDesc: 'Hii ni nini. Nani alijenga. Kwa nini ni bure.',
    aboutTitle: 'Kuhusu HelpFinder na Sedral Studios',
    aboutP1: 'HelpFinder ni zana ya bure.',
    aboutP2: 'Mji wa kwanza ni Rochester, NY.',
    supportTitle: 'Saidia HelpFinder',
    supportDesc: 'HelpFinder ni bure kwa wote.',
    privacyTitle: 'Faragha',
    privacyShort: 'Hatukusanyi data binafsi.',
    privacyP1: 'Hakuna akaunti. Hakuna kuki. Hakuna ufuatiliaji.',
    termsTitle: 'Masharti ya Matumizi',
    termsP1: 'Kwa kutumia helpfinder.help, unakubali masharti yafuatayo.',
    termsP2: 'HelpFinder inatolewa jinsi ilivyo, bila dhamana.',
    navHome: 'Nyumbani',
    navAbout: 'Kuhusu',
    navSupport: 'Saidia',
    navPrivacy: 'Faragha',
    navTerms: 'Masharti',
    navLegal: 'Fahamu Haki Zako',
    footer: 'Imejengwa kutoka kwa chochote. Imejengwa kwa wote.',
  },
  my: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — လူတိုင်းအတွက် အခမဲ့အကူအညီ',
    homeH1: 'နယူးယောက်၊ Rochester နှင့် Monroe County အတွက် အခမဲ့အကူအညီ',
    homeLede: 'အစားအစာ။ အိမ်ရာ။ ကျန်းမာရေး။ အလုပ်။ အရေးပေါ်အကူအညီ။ ဥပဒေရေးအခွင့်အရေး။ ဘာသာစကား ၈ ခုဖြင့် အခမဲ့အစီအစဉ်ရာပေါင်းများစွာ။',
    door1Btn: 'အကူအညီရှာပါ',
    door1Sub: 'သို့မဟုတ် 211 ကို ခေါ်ပါ — အခမဲ့, 24/7',
    door2Title: 'သင့်အခွင့်အရေးကို သိပါ',
    door2Desc: 'နိုင်ငံတော်ထုတ်ခြင်း၊ အကျိုးခံစားခွင့်များ၊ ကြွေးမြီ၊ လစာ စသည်တို့အတွက် ရိုးရိုးစကားဖြင့် ဥပဒေလမ်းညွှန်များ။',
    aboutLink: 'Sedral Studios အကြောင်း',
    aboutLinkDesc: 'ဒါကဘာလဲ။ ဘယ်သူတည်ဆောက်တာလဲ။',
    aboutTitle: 'HelpFinder နှင့် Sedral Studios အကြောင်း',
    aboutP1: 'HelpFinder သည် အခမဲ့ကိရိယာဖြစ်သည်။',
    aboutP2: 'ပထမမြို့မှာ Rochester, NY။',
    supportTitle: 'HelpFinder ကို ထောက်ပံ့ပါ',
    supportDesc: 'HelpFinder သည် လူတိုင်းအတွက် အခမဲ့ဖြစ်သည်။',
    privacyTitle: 'ကိုယ်ရေးကိုယ်တာ',
    privacyShort: 'ကိုယ်ရေးကိုယ်တာ ဒေတာ မကောက်ပါ။',
    privacyP1: 'အကောင့်မရှိ။ ကွတ်ကီးမရှိ။ ခြေရာခံမှုမရှိ။',
    termsTitle: 'အသုံးပြုမှုစည်းကမ်းများ',
    termsP1: 'helpfinder.help ကို အသုံးပြုခြင်းဖြင့် အောက်ပါစည်းကမ်းများကို သဘောတူသည်။',
    termsP2: 'HelpFinder ကို ရှိရင်းစွဲအတိုင်း ပေးဆောင်သည်။',
    navHome: 'ပင်မ',
    navAbout: 'အကြောင်း',
    navSupport: 'ထောက်ပံ့',
    navPrivacy: 'ကိုယ်ရေး',
    navTerms: 'စည်းကမ်းများ',
    navLegal: 'သင့်အခွင့်အရေး',
    footer: 'ဘာမှမရှိဘဲ တည်ဆောက်သည်။ လူတိုင်းအတွက်။',
  },
  so: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — Caawimaad Bilaash Ah, Meel Walba',
    homeH1: 'Caawimo bilaash ah Rochester iyo Monroe County, New York',
    homeLede: 'Cunto. Guryo. Caafimaad. Shaqooyin. Taageero xaalad deg-deg ah. Xuquuqda sharciga. Boqollaal barnaamijyo bilaash ah 8 luuqadood.',
    door1Btn: 'Raadi caawimaad',
    door1Sub: 'Ama wac 211 — bilaash, 24/7, luqad kasta',
    door2Title: 'Ogow Xuquuqdaada',
    door2Desc: 'Hage sharci oo luqad fudud ah oo ku saabsan guri ka saarista, dheefaha, daynta, mushaharka iyo kuwa kale ee New York.',
    aboutLink: 'Ku saabsan Sedral Studios',
    aboutLinkDesc: 'Waa maxay. Yaa dhisay. Sababta oo bilaash ah.',
    aboutTitle: 'Ku saabsan HelpFinder iyo Sedral Studios',
    aboutP1: 'HelpFinder waa qalab bilaash ah.',
    aboutP2: 'Magaalada kowaad waa Rochester, NY.',
    supportTitle: 'Taageer HelpFinder',
    supportDesc: 'HelpFinder waa bilaash qof walba.',
    privacyTitle: 'Asturnaanta',
    privacyShort: 'Xogta shaqsiga ma uruurino.',
    privacyP1: 'Akoon ma jirto. Cookies ma jirto. La socon maayo.',
    termsTitle: 'Shuruudaha Isticmaalka',
    termsP1: 'Adigoo isticmaalaya helpfinder.help, waxaad ogolaanaysaa shuruudaha soo socda.',
    termsP2: 'HelpFinder waxaa la bixiyaa siduu yahay, iyada oo aan laga hadlin hubin.',
    navHome: 'Guriga',
    navAbout: 'Ku saabsan',
    navSupport: 'Taageer',
    navPrivacy: 'Asturnaanta',
    navTerms: 'Shuruudaha',
    navLegal: 'Ogow Xuquuqdaada',
    footer: 'Wax la\'aan laga dhisay. Qof walba loogu dhisay.',
  },
  zh: {
    siteName: 'HelpFinder',
    homeTitle: 'HelpFinder — 免费帮助，无处不在',
    homeH1: '罗切斯特和门罗县免费帮助（纽约州）',
    homeLede: '食物。住房。医疗。工作。危机支持。法律权利。8种语言的数百个免费项目。无账户。不收集个人数据。',
    door1Btn: '寻找帮助',
    door1Sub: '或拨打 211 — 免费，24/7，任何语言',
    door2Title: '了解您的权利',
    door2Desc: '关于驱逐、福利、债务、工资等纽约州法律事务的通俗易懂法律指南。',
    aboutLink: '关于 Sedral Studios',
    aboutLinkDesc: '这是什么。谁建的。为什么免费。',
    aboutTitle: '关于 HelpFinder 和 Sedral Studios',
    aboutP1: 'HelpFinder 是一个免费工具。无账户。无数据。无广告。',
    aboutP2: '从纽约州罗切斯特起步。免费。已核实。',
    supportTitle: '支持 HelpFinder',
    supportDesc: 'HelpFinder 对所有人免费。',
    privacyTitle: '隐私',
    privacyShort: '我们不收集个人数据。',
    privacyP1: '无账户。无 Cookie。无追踪。',
    termsTitle: '使用条款',
    termsP1: '使用 helpfinder.help 即表示您同意以下条款。',
    termsP2: 'HelpFinder 按原样提供，不提供任何担保。',
    navHome: '首页',
    navAbout: '关于',
    navSupport: '支持',
    navPrivacy: '隐私',
    navTerms: '条款',
    navLegal: '了解您的权利',
    footer: '从无到有。为所有人而建。',
  },
};

// Page definitions. path is the URL path relative to the language root.
// dir is where to write the file under dist/ for the given language.
const PAGES = [
  { key: 'home',    path: '',         priority: '1.0', changefreq: 'weekly'  },
  { key: 'about',   path: 'about',    priority: '0.6', changefreq: 'monthly' },
  { key: 'support', path: 'support',  priority: '0.7', changefreq: 'monthly' },
  { key: 'privacy', path: 'privacy',  priority: '0.3', changefreq: 'yearly'  },
  { key: 'terms',   path: 'terms',    priority: '0.3', changefreq: 'yearly'  },
];

function xmlEsc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function urlForPage(lang, pageKey) {
  const pg = PAGES.find((p) => p.key === pageKey);
  const sub = pg.path ? '/' + pg.path : '';
  if (lang === 'en') return SITE_URL + (pg.path ? '/' + pg.path : '/');
  return SITE_URL + '/' + lang + sub + (pg.path ? '' : '/');
}

function outputPathFor(lang, pageKey) {
  const pg = PAGES.find((p) => p.key === pageKey);
  if (lang === 'en') {
    if (pg.key === 'home') return path.join(DIST, 'index.html');
    return path.join(DIST, pg.path, 'index.html');
  }
  if (pg.key === 'home') return path.join(DIST, lang, 'index.html');
  return path.join(DIST, lang, pg.path, 'index.html');
}

function titleFor(lang, pageKey) {
  const s = S[lang] || S.en;
  if (pageKey === 'home')    return s.homeTitle;
  if (pageKey === 'about')   return s.aboutTitle + ' | ' + s.siteName;
  if (pageKey === 'support') return s.supportTitle + ' | ' + s.siteName;
  if (pageKey === 'privacy') return s.privacyTitle + ' | ' + s.siteName;
  if (pageKey === 'terms')   return s.termsTitle + ' | ' + s.siteName;
  return s.siteName;
}

function descriptionFor(lang, pageKey) {
  const s = S[lang] || S.en;
  if (pageKey === 'home')    return s.homeLede;
  if (pageKey === 'about')   return s.aboutP1;
  if (pageKey === 'support') return s.supportDesc;
  if (pageKey === 'privacy') return s.privacyShort + ' ' + s.privacyP1;
  if (pageKey === 'terms')   return s.termsP1 + ' ' + s.termsP2;
  return '';
}

function navHtml(lang, s) {
  const home    = lang === 'en' ? '/'        : '/' + lang + '/';
  const about   = lang === 'en' ? '/about'   : '/' + lang + '/about';
  const support = lang === 'en' ? '/support' : '/' + lang + '/support';
  const privacy = lang === 'en' ? '/privacy' : '/' + lang + '/privacy';
  const terms   = lang === 'en' ? '/terms'   : '/' + lang + '/terms';
  const legal   = lang === 'en' ? '/know-your-rights' : '/' + lang + '/know-your-rights';
  return [
    '<nav style="margin:0 0 32px 0;font-size:14px;line-height:1.8;">',
    '<a href="' + home    + '">' + xmlEsc(s.navHome)    + '</a> · ',
    '<a href="' + legal   + '">' + xmlEsc(s.navLegal)   + '</a> · ',
    '<a href="' + about   + '">' + xmlEsc(s.navAbout)   + '</a> · ',
    '<a href="' + support + '">' + xmlEsc(s.navSupport) + '</a> · ',
    '<a href="' + privacy + '">' + xmlEsc(s.navPrivacy) + '</a> · ',
    '<a href="' + terms   + '">' + xmlEsc(s.navTerms)   + '</a>',
    '</nav>',
  ].join('');
}

function langSwitcherHtml(currentLang, pageKey) {
  const links = LANGS
    .filter((l) => l.code !== currentLang)
    .map((l) => {
      const url = urlForPage(l.code, pageKey);
      return '<a href="' + url + '" lang="' + l.htmlLang + '" hreflang="' + l.htmlLang + '">' + xmlEsc(l.label) + '</a>';
    })
    .join(' · ');
  return '<p style="font-size:13px;color:#767676;margin:24px 0;">' + links + '</p>';
}

function bodyContentFor(lang, pageKey) {
  const s = S[lang] || S.en;
  const nav = navHtml(lang, s);
  const langSwitch = langSwitcherHtml(lang, pageKey);
  const findHelp = lang === 'en' ? '/' : '/' + lang + '/';
  const legal   = lang === 'en' ? '/know-your-rights' : '/' + lang + '/know-your-rights';

  if (pageKey === 'home') {
    return [
      '<header><h1>' + xmlEsc(s.homeH1) + '</h1></header>',
      nav,
      '<p style="font-size:17px;line-height:1.6;">' + xmlEsc(s.homeLede) + '</p>',
      '<section style="margin:32px 0;">',
      '<h2>' + xmlEsc(s.door1Btn) + '</h2>',
      '<p><a href="' + findHelp + '" style="display:inline-block;padding:12px 24px;background:#2e7d32;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">' + xmlEsc(s.door1Btn) + '</a></p>',
      '<p style="color:#767676;font-size:14px;">' + xmlEsc(s.door1Sub) + '</p>',
      '</section>',
      '<section style="margin:32px 0;">',
      '<h2>' + xmlEsc(s.door2Title) + '</h2>',
      '<p>' + xmlEsc(s.door2Desc) + '</p>',
      '<p><a href="' + legal + '">' + xmlEsc(s.door2Title) + ' →</a></p>',
      '</section>',
      langSwitch,
      '<footer style="margin-top:48px;padding-top:24px;border-top:1px solid #e8e4dc;color:#767676;font-size:13px;">' + xmlEsc(s.footer) + '</footer>',
    ].join('');
  }

  if (pageKey === 'about') {
    return [
      '<header><h1>' + xmlEsc(s.aboutTitle) + '</h1></header>',
      nav,
      '<p>' + xmlEsc(s.aboutP1) + '</p>',
      '<p>' + xmlEsc(s.aboutP2) + '</p>',
      langSwitch,
      '<footer style="margin-top:48px;padding-top:24px;border-top:1px solid #e8e4dc;color:#767676;font-size:13px;">' + xmlEsc(s.footer) + '</footer>',
    ].join('');
  }

  if (pageKey === 'support') {
    return [
      '<header><h1>' + xmlEsc(s.supportTitle) + '</h1></header>',
      nav,
      '<p>' + xmlEsc(s.supportDesc) + '</p>',
      langSwitch,
      '<footer style="margin-top:48px;padding-top:24px;border-top:1px solid #e8e4dc;color:#767676;font-size:13px;">' + xmlEsc(s.footer) + '</footer>',
    ].join('');
  }

  if (pageKey === 'privacy') {
    return [
      '<header><h1>' + xmlEsc(s.privacyTitle) + '</h1></header>',
      nav,
      '<p><strong>' + xmlEsc(s.privacyShort) + '</strong></p>',
      '<p>' + xmlEsc(s.privacyP1) + '</p>',
      langSwitch,
      '<footer style="margin-top:48px;padding-top:24px;border-top:1px solid #e8e4dc;color:#767676;font-size:13px;">' + xmlEsc(s.footer) + '</footer>',
    ].join('');
  }

  if (pageKey === 'terms') {
    return [
      '<header><h1>' + xmlEsc(s.termsTitle) + '</h1></header>',
      nav,
      '<p>' + xmlEsc(s.termsP1) + '</p>',
      '<p>' + xmlEsc(s.termsP2) + '</p>',
      langSwitch,
      '<footer style="margin-top:48px;padding-top:24px;border-top:1px solid #e8e4dc;color:#767676;font-size:13px;">' + xmlEsc(s.footer) + '</footer>',
    ].join('');
  }
  return '';
}

function hreflangLinks(pageKey) {
  const links = LANGS.map((l) => {
    const url = urlForPage(l.code, pageKey);
    return '    <link rel="alternate" hreflang="' + l.htmlLang + '" href="' + url + '" />';
  });
  links.push('    <link rel="alternate" hreflang="x-default" href="' + urlForPage('en', pageKey) + '" />');
  return links.join('\n');
}

function structuredDataFor(lang, pageKey) {
  const s = S[lang] || S.en;
  const l = LANGS.find((x) => x.code === lang);
  const canonical = urlForPage(lang, pageKey);
  const title = titleFor(lang, pageKey);
  const description = descriptionFor(lang, pageKey);

  // Organization schema — Sedral Studios, the operator of HelpFinder.
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HelpFinder',
    alternateName: 'Sedral Studios',
    url: SITE_URL,
    logo: SITE_URL + '/apple-touch-icon.png',
    description: 'Free community resource directory and legal rights guides for Rochester and Monroe County, New York. 8 languages. No accounts, no tracking.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Monroe County, New York',
    },
    sameAs: [
      'https://paypal.me/sedralstudios',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@helpfinder.help',
      contactType: 'customer support',
      availableLanguage: LANGS.map((lg) => lg.htmlLang),
    },
  };

  // WebSite schema on the homepage only.
  const website = pageKey === 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HelpFinder',
    url: SITE_URL,
    description: s.homeLede,
    inLanguage: l.htmlLang,
    publisher: { '@type': 'Organization', name: 'HelpFinder', url: SITE_URL },
  } : null;

  // BreadcrumbList — Home > [Page] (only for non-home pages)
  const homePath = lang === 'en' ? '/' : '/' + lang + '/';
  const breadcrumb = pageKey !== 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.navHome, item: SITE_URL + homePath },
      { '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: canonical },
    ],
  } : null;

  // WebPage schema — basic identification for all pages.
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonical,
    inLanguage: l.htmlLang,
    isPartOf: { '@type': 'WebSite', name: 'HelpFinder', url: SITE_URL },
  };

  const blocks = [organization, webpage];
  if (website) blocks.push(website);
  if (breadcrumb) blocks.push(breadcrumb);

  return blocks
    .map((b) => '    <script type="application/ld+json">\n' + JSON.stringify(b, null, 2) + '\n    </script>')
    .join('\n');
}

function buildHtml(baseTemplate, lang, pageKey) {
  const s = S[lang] || S.en;
  const l = LANGS.find((x) => x.code === lang);
  const canonical = urlForPage(lang, pageKey);
  const title = titleFor(lang, pageKey);
  const description = descriptionFor(lang, pageKey);
  const body = bodyContentFor(lang, pageKey);

  let html = baseTemplate;

  // Update <html lang="...">
  html = html.replace(/<html\s+lang="[^"]*"/, '<html lang="' + l.htmlLang + '"');

  // Update <title>...</title>
  html = html.replace(/<title>[^<]*<\/title>/, '<title>' + xmlEsc(title) + '</title>');

  // Update <meta name="description" content="...">
  html = html.replace(
    /<meta\s+name="description"[^>]*\/?>/,
    '<meta name="description" content="' + xmlEsc(description) + '" />'
  );

  // Update <meta property="og:title"
  html = html.replace(
    /<meta\s+property="og:title"[^>]*\/?>/,
    '<meta property="og:title" content="' + xmlEsc(title) + '" />'
  );

  // Update <meta property="og:description"
  html = html.replace(
    /<meta\s+property="og:description"[^>]*\/?>/,
    '<meta property="og:description" content="' + xmlEsc(description) + '" />'
  );

  // Update <meta property="og:url"
  html = html.replace(
    /<meta\s+property="og:url"[^>]*\/?>/,
    '<meta property="og:url" content="' + canonical + '" />'
  );

  // Update <meta name="twitter:title"
  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*\/?>/,
    '<meta name="twitter:title" content="' + xmlEsc(title) + '" />'
  );
  // Update <meta name="twitter:description"
  html = html.replace(
    /<meta\s+name="twitter:description"[^>]*\/?>/,
    '<meta name="twitter:description" content="' + xmlEsc(description) + '" />'
  );

  // Update or add <link rel="canonical">
  if (/<link\s+rel="canonical"/.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"[^>]*\/?>/,
      '<link rel="canonical" href="' + canonical + '" />'
    );
  } else {
    html = html.replace('</head>', '    <link rel="canonical" href="' + canonical + '" />\n  </head>');
  }

  // Add hreflang links before </head>
  const hreflang = hreflangLinks(pageKey);
  html = html.replace('</head>', hreflang + '\n  </head>');

  // Add structured data (Organization, WebSite, WebPage, BreadcrumbList) before </head>
  const structuredData = structuredDataFor(lang, pageKey);
  html = html.replace('</head>', structuredData + '\n  </head>');

  // Inject static content before <div id="root">
  const staticBlock = '<div id="prerender-content" style="max-width:900px;margin:0 auto;padding:40px 24px;font-family:\'Segoe UI\',system-ui,-apple-system,sans-serif;color:#1a1a1a;line-height:1.6;">' + body + '</div>';

  if (html.includes('<div id="root"></div>')) {
    html = html.replace('<div id="root"></div>', staticBlock + '\n    <div id="root"></div>');
  } else {
    html = html.replace('<body>', '<body>\n    ' + staticBlock);
  }

  return html;
}

function main() {
  console.log('Prerender SPA landing pages...');

  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('ERROR: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  // Use a PRE-TEMPLATE version of index.html that doesn't have prior injection.
  // If prior injection exists, strip it so subsequent builds are idempotent.
  let baseTemplate = fs.readFileSync(indexPath, 'utf8');
  baseTemplate = baseTemplate.replace(
    /<div id="prerender-content"[\s\S]*?<\/div>\s*/g,
    ''
  );
  // Also strip any prior hreflang block we injected.
  baseTemplate = baseTemplate.replace(
    /\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g,
    ''
  );
  // Strip any prior application/ld+json blocks we injected.
  baseTemplate = baseTemplate.replace(
    /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    ''
  );

  let written = 0;

  for (const lang of LANGS) {
    for (const page of PAGES) {
      const outPath = outputPathFor(lang.code, page.key);
      const html = buildHtml(baseTemplate, lang.code, page.key);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf8');
      written++;
    }
  }

  console.log('✓ Prerendered ' + written + ' landing HTML files');
  console.log('  Langs: ' + LANGS.map((l) => l.code).join(', '));
  console.log('  Pages: ' + PAGES.map((p) => p.key).join(', '));
  console.log('Done.');
}

main();
