import React, { useState, useMemo, useEffect, useRef } from "react";
import { QUESTIONS, getFirstQuestion, isDirectToResults, isHiddenCategory, getInitialPrograms, applyAnswerFilters, applyTownFilter, getUrgencyLevel } from "./HelpFinderQuestions";
import ShareButton from "./ShareButton";

// ─────────────────────────────────────────────
// mapsHandoff — universal tap-to-navigate (added April 9, 2026)
// ─────────────────────────────────────────────
// Tapping a program's address should open the user's native maps app with
// directions ready to start, NEVER trap them in an embedded website map.
// The website is a launchpad to the resource, not the resource itself.
//
// Behavior:
//   - iOS:     opens Apple Maps app via https://maps.apple.com/?daddr=...
//   - Android: opens Google Maps app via the directions deep link in href
//   - Desktop: opens Google Maps in a new tab via the href fallback
//
// The href stays as a Google Maps directions URL so right-click → copy
// link works, screen readers work, and any non-iOS user gets the right
// destination if onClick fails for any reason. Defensive in depth.
function mapsHandoff(e, address) {
  if (!address) return;
  const isIOS = typeof navigator !== "undefined"
    && /iPad|iPhone|iPod/.test(navigator.userAgent)
    && !window.MSStream;
  if (isIOS) {
    e.preventDefault();
    window.location.href = "https://maps.apple.com/?daddr=" + encodeURIComponent(address);
  }
  // Non-iOS: do nothing, let the <a href> open Google Maps directions in new tab
}

// ─────────────────────────────────────────────
// trackClick — privacy-respecting click counter
// ─────────────────────────────────────────────
// Sends ONLY the program ID. No cookies, no user ID, no IP, no PII.
// Uses sendBeacon so it never slows down navigation.
function trackClick(programId) {
  if (!programId) return;
  try {
    navigator.sendBeacon("/api/click", JSON.stringify({ id: programId }));
  } catch {
    // Silent fail — never break user experience for analytics
  }
}

// ═══════════════════════════════════════════════════
// HELPFINDER — Help Directory
// Sedral Studios · Rochester NY · April 2026
// 43 Categories · 294 Programs · 8 Languages
// Updated: Branding aligned with landing page v2
// ═══════════════════════════════════════════════════

// ── ERROR BOUNDARY ──
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏠</div>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Something went wrong</h1>
          <p style={{ color: "#555", margin: "12px 0 20px" }}>You can still get help right now.</p>
          <a href="tel:211" style={{
            display: "inline-block", background: "#1565c0", color: "#fff",
            padding: "12px 28px", borderRadius: 10, fontSize: 18, fontWeight: 700,
            textDecoration: "none",
          }}>📞 Call 211</a>
          <div style={{ marginTop: 16 }}>
            <button onClick={() => this.setState({ hasError: false })} style={{
              background: "none", border: "1px solid #e8e4dc", borderRadius: 20,
              padding: "8px 16px", cursor: "pointer", fontSize: 14,
            }}>Try Again</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── LANGUAGE CONFIG ──
const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ne", label: "नेपाली" },
  { code: "ar", label: "العربية" },
  { code: "sw", label: "Kiswahili" },
  { code: "my", label: "မြန်မာ" },
  { code: "so", label: "Soomaali" },
  { code: "zh", label: "中文" },
];

// ── LEGAL SECTION LANGUAGES (20 — federal LEP standard + refugee priority) ──
// The main directory uses LANGS (8 languages, matching directory data scope).
// The legal section uses LEGAL_LANGS (20 languages, matching legal content scope).
// Two pickers, two scopes, both honest.
const LEGAL_LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ko", label: "한국어" },
  { code: "tl", label: "Tagalog" },
  { code: "ar", label: "العربية" },
  { code: "ru", label: "Русский" },
  { code: "ht", label: "Kreyòl Ayisyen" },
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिन्दी" },
  { code: "ur", label: "اردو" },
  { code: "fa", label: "فارسی" },
  { code: "ps", label: "پښتو" },
  { code: "uk", label: "Українська" },
  { code: "ne", label: "नेपाली" },
  { code: "my", label: "မြန်မာ" },
  { code: "so", label: "Soomaali" },
  { code: "sw", label: "Kiswahili" },
];

// ── UI STRINGS ──
const UI = {
  en: {
    title: "HelpFinder",
    subtitle: "You're not alone. All free help, near you. No personal data collected.",
    subtitleCity: "You're not alone. All free help in {city}. No personal data collected.",
    start: "Find Help Now",
    back: "Back",
    startOver: "Start Over",
    stepWhat: "What do you need?",
    stepWho: "Who needs help?",
    stepHow: "How is your money situation?",
    stepResults: "Here's what we found",
    whoSelf: "Just me",
    whoFamily: "Me and my family",
    whoChild: "My child",
    whoSenior: "Someone 60+",
    whoVeteran: "A veteran",
    whoPregnant: "I'm pregnant or have a baby",
    whoDisability: "Someone with a disability",
    whoAnyone: "I'd rather not say",
    howOk: "We're getting by",
    howTight: "Money is tight",
    howCrisis: "We can't pay for basics",
    howNone: "No income right now",
    call211: "Need something not listed? Call 211 for a referral.",
    privacy: "Nothing you share here is saved or sent anywhere. Ever.",
    privacySensitive: "This is private. We don't save or share anything. No one will know you looked here.",
    crisisNotice: "If you're in danger right now, help is available 24/7.",
    dvSafety: "If someone might check your phone or computer, you can close this page quickly.",
    quickExit: "Quick Exit",
    communityTitle: "Community Groups",
    communityDesc: "Volunteer-run groups. Not agencies — just people helping people.",
    featuredTitle: "Popular Starting Points",
    website: "Website",
    callNow: "Call",
    apply: "Apply Online",
    hours: "Hours",
    bring: "What to bring",
    note: "Note",
    income: "Income limit",
    fpl: "of Federal Poverty Level",
    langLabel: "Language",
    interpreter: "You have the right to a free interpreter. Say 'I need an interpreter' when you call.",
    findMore: "Can't find what you need?",
    findMoreLink: "Search more programs on findhelp.org",
    alsoNeed: "I also need help with something else",
    parentalProtectionDisclaimer: "This information is not legal advice. Laws and procedures change. Always consult a lawyer for your specific situation. Legal Aid and LawNY offer free legal help.",
    shareLabel: "Share HelpFinder",
    shareText: "Free help and legal info for Monroe County. No accounts, no ads, no tracking.",
    shareAriaLabel: "Share HelpFinder with someone who needs it",
  },
  es: {
    title: "HelpFinder",
    subtitle: "No estás en esto a solas. Toda la ayuda es gratuita, cerca de ti. Sin datos recolectados.",
    start: "Buscar Ayuda",
    back: "Atrás",
    startOver: "Empezar de nuevo",
    stepWhat: "¿Qué necesita?",
    stepWho: "¿Quién necesita ayuda?",
    stepHow: "¿Cómo está su situación económica?",
    stepResults: "Esto es lo que encontramos",
    whoSelf: "Solo yo",
    whoFamily: "Yo y mi familia",
    whoChild: "Mi hijo/a",
    whoSenior: "Alguien de 60+",
    whoVeteran: "Un veterano",
    whoPregnant: "Estoy embarazada o tengo un bebé",
    whoDisability: "Alguien con discapacidad",
    whoAnyone: "Prefiero no decir",
    howOk: "Nos mantenemos",
    howTight: "El dinero está apretado",
    howCrisis: "No podemos pagar lo básico",
    howNone: "Sin ingresos ahora",
    call211: "¿Necesita algo no listado? Llame al 211 para una referencia.",
    privacy: "Nada de lo que comparte aquí se guarda ni se envía a ningún lado. Nunca.",
    privacySensitive: "Esto es privado. No guardamos ni compartimos nada. Nadie sabrá que buscó aquí.",
    crisisNotice: "Si está en peligro ahora mismo, hay ayuda disponible 24/7.",
    dvSafety: "Si alguien podría revisar su teléfono o computadora, puede cerrar esta página rápidamente.",
    quickExit: "Salida Rápida",
    communityTitle: "Grupos Comunitarios",
    communityDesc: "Grupos de voluntarios. No agencias — solo gente ayudando gente.",
    featuredTitle: "Puntos de Inicio Populares",
    website: "Sitio web",
    callNow: "Llamar",
    apply: "Solicitar en línea",
    hours: "Horario",
    bring: "Qué llevar",
    note: "Nota",
    income: "Límite de ingresos",
    fpl: "del Nivel Federal de Pobreza",
    langLabel: "Idioma",
    interpreter: "Tiene derecho a un intérprete gratis. Diga 'Necesito un intérprete' cuando llame.",
    findMore: "¿No encuentra lo que necesita?",
    findMoreLink: "Busque más programas en findhelp.org",
    alsoNeed: "También necesito ayuda con otra cosa",
    shareLabel: "Compartir HelpFinder",
    shareText: "Ayuda gratuita e información legal para el condado de Monroe. Sin cuentas, sin anuncios, sin rastreo.",
    shareAriaLabel: "Compartir HelpFinder con alguien que lo necesite",
  },
};
const t = (lang, key) => (UI[lang] && UI[lang][key]) || UI.en[key] || key;

// ── EXTENDED UI STRINGS (6 additional languages) ──
// Injected programmatically to keep the main UI block readable
Object.assign(UI, {
  ne: {
    title: "HelpFinder",
    subtitle: "निःशुल्क सहायता, तपाईंको नजिक। कुनै निर्णय छैन। कुनै डाटा सङ्कलन छैन।",
    start: "अहिले सहायता खोज्नुहोस्",
    back: "पछाडि",
    startOver: "फेरि सुरु गर्नुहोस्",
    stepWhat: "तपाईंलाई के चाहिन्छ?",
    stepWho: "कसलाई सहायता चाहिन्छ?",
    stepHow: "तपाईंको आर्थिक अवस्था कस्तो छ?",
    stepResults: "हामीले यो भेट्टायौं",
    whoSelf: "म मात्र",
    whoFamily: "म र मेरो परिवार",
    whoChild: "मेरो बच्चा",
    whoSenior: "६०+ वर्षको कोही",
    whoVeteran: "भूतपूर्व सैनिक",
    whoPregnant: "म गर्भवती छु वा शिशु छ",
    whoDisability: "अपाङ्गता भएको कोही",
    whoAnyone: "भन्न चाहन्न",
    howOk: "हामी चलिरहेका छौं",
    howTight: "पैसा तन्किएको छ",
    howCrisis: "आधारभूत कुरा तिर्न सक्दैनौं",
    howNone: "अहिले आम्दानी छैन",
    call211: "सूचीमा नभएको कुरा चाहिन्छ? 211 मा कल गर्नुहोस्।",
    privacy: "तपाईंले यहाँ साझा गरेको कुनै कुरा सेभ वा पठाइँदैन। कहिल्यै।",
    privacySensitive: "यो निजी छ। हामी केही सेभ वा साझा गर्दैनौं। कसैलाई थाहा हुँदैन।",
    crisisNotice: "तपाईं अहिले खतरामा हुनुहुन्छ भने, सहायता 24/7 उपलब्ध छ।",
    dvSafety: "कसैले तपाईंको फोन वा कम्प्युटर जाँच गर्न सक्छ भने, तपाईं यो पेज छिटो बन्द गर्न सक्नुहुन्छ।",
    quickExit: "छिटो बाहिर",
    communityTitle: "सामुदायिक समूहहरू",
    communityDesc: "स्वयंसेवकहरूले चलाएका समूहहरू। एजेन्सी होइन — मानिसले मानिसलाई सहायता।",
    featuredTitle: "लोकप्रिय सुरुवात बिन्दुहरू",
    website: "वेबसाइट",
    callNow: "कल गर्नुहोस्",
    apply: "अनलाइन आवेदन",
    hours: "समय",
    bring: "के ल्याउने",
    note: "नोट",
    income: "आय सीमा",
    fpl: "संघीय गरिबी स्तरको",
    langLabel: "भाषा",
    interpreter: "तपाईंलाई निःशुल्क दोभाषेको अधिकार छ। कल गर्दा 'मलाई दोभाषे चाहिन्छ' भन्नुहोस्।",
    findMore: "खोज्नुभएको भेटिएन?",
    findMoreLink: "findhelp.org मा थप खोज्नुहोस्",
    alsoNeed: "मलाई अरू कुरामा पनि सहयोग चाहिन्छ",
    shareLabel: "HelpFinder साझा गर्नुहोस्",
    shareText: "Monroe County को लागि निःशुल्क सहयोग र कानूनी जानकारी। कुनै खाता छैन, कुनै विज्ञापन छैन, कुनै ट्र्याकिङ छैन।",
    shareAriaLabel: "HelpFinder चाहिने कसैलाई साझा गर्नुहोस्",
  },
  ar: {
    title: "HelpFinder",
    subtitle: "مساعدة مجانية بالقرب منك. بدون أحكام. بدون جمع بيانات.",
    start: "ابحث عن مساعدة الآن",
    back: "رجوع",
    startOver: "ابدأ من جديد",
    stepWhat: "ماذا تحتاج؟",
    stepWho: "من يحتاج المساعدة؟",
    stepHow: "كيف وضعك المادي؟",
    stepResults: "هذا ما وجدناه",
    whoSelf: "أنا فقط",
    whoFamily: "أنا وعائلتي",
    whoChild: "طفلي",
    whoSenior: "شخص فوق 60",
    whoVeteran: "محارب قديم",
    whoPregnant: "أنا حامل أو لدي طفل رضيع",
    whoDisability: "شخص ذو إعاقة",
    whoAnyone: "أفضل عدم القول",
    howOk: "نحن بخير",
    howTight: "المال ضيق",
    howCrisis: "لا نستطيع دفع الأساسيات",
    howNone: "لا دخل حالياً",
    call211: "تحتاج شيئاً غير مدرج؟ اتصل بـ 211 للإحالة.",
    privacy: "لا يتم حفظ أو إرسال أي شيء تشاركه هنا. أبداً.",
    privacySensitive: "هذا خاص. لا نحفظ أو نشارك شيئاً. لن يعرف أحد أنك بحثت هنا.",
    crisisNotice: "إذا كنت في خطر الآن، المساعدة متاحة 24/7.",
    dvSafety: "إذا كان شخص ما قد يتحقق من هاتفك أو حاسوبك، يمكنك إغلاق هذه الصفحة بسرعة.",
    quickExit: "خروج سريع",
    communityTitle: "مجموعات مجتمعية",
    communityDesc: "مجموعات تطوعية. ليست وكالات — فقط أشخاص يساعدون أشخاصاً.",
    featuredTitle: "نقاط البداية الشائعة",
    website: "الموقع",
    callNow: "اتصل",
    apply: "قدّم عبر الإنترنت",
    hours: "الساعات",
    bring: "ماذا تحضر",
    note: "ملاحظة",
    income: "حد الدخل",
    fpl: "من مستوى الفقر الفيدرالي",
    langLabel: "اللغة",
    interpreter: "لديك الحق في مترجم مجاني. قل 'أحتاج مترجم' عند الاتصال.",
    findMore: "لم تجد ما تحتاج؟",
    findMoreLink: "ابحث عن المزيد على findhelp.org",
    alsoNeed: "أحتاج مساعدة في شيء آخر أيضاً",
    shareLabel: "شارك HelpFinder",
    shareText: "مساعدة مجانية ومعلومات قانونية لمقاطعة مونرو. بدون حسابات، بدون إعلانات، بدون تتبع.",
    shareAriaLabel: "شارك HelpFinder مع شخص يحتاجه",
  },
  sw: {
    title: "HelpFinder",
    subtitle: "Msaada wa bure karibu nawe. Bila hukumu. Bila kukusanya data.",
    start: "Tafuta Msaada Sasa",
    back: "Rudi",
    startOver: "Anza Upya",
    stepWhat: "Unahitaji nini?",
    stepWho: "Nani anahitaji msaada?",
    stepHow: "Hali yako ya fedha ikoje?",
    stepResults: "Hivi ndivyo tulivyopata",
    whoSelf: "Mimi tu",
    whoFamily: "Mimi na familia yangu",
    whoChild: "Mtoto wangu",
    whoSenior: "Mtu wa miaka 60+",
    whoVeteran: "Mstaafu wa jeshi",
    whoPregnant: "Nina mimba au nina mtoto mchanga",
    whoDisability: "Mtu mwenye ulemavu",
    whoAnyone: "Sipendelei kusema",
    howOk: "Tunaendelea",
    howTight: "Fedha ni ngumu",
    howCrisis: "Hatuwezi kulipa mahitaji ya msingi",
    howNone: "Hakuna mapato sasa",
    call211: "Unahitaji kitu kisichoorodheshwa? Piga 211 kwa rufaa.",
    privacy: "Hakuna unachoshiriki hapa kinachohifadhiwa au kutumwa. Kamwe.",
    privacySensitive: "Hii ni siri. Hatuhifadhi au kushiriki chochote. Hakuna mtu atakayejua ulitafuta hapa.",
    crisisNotice: "Ukiwa hatarini sasa hivi, msaada unapatikana 24/7.",
    dvSafety: "Ikiwa mtu anaweza kuangalia simu yako au kompyuta, unaweza kufunga ukurasa huu haraka.",
    quickExit: "Toka Haraka",
    communityTitle: "Vikundi vya Jamii",
    communityDesc: "Vikundi vya kujitolea. Si mashirika — watu tu wanaosaidia watu.",
    featuredTitle: "Mahali Maarufu pa Kuanza",
    website: "Tovuti",
    callNow: "Piga Simu",
    apply: "Omba Mtandaoni",
    hours: "Masaa",
    bring: "Nini cha kuleta",
    note: "Kumbuka",
    income: "Kikomo cha mapato",
    fpl: "ya Kiwango cha Umaskini cha Shirikisho",
    langLabel: "Lugha",
    interpreter: "Una haki ya mkalimani wa bure. Sema 'Nahitaji mkalimani' unapopiga simu.",
    findMore: "Hukupata unachohitaji?",
    findMoreLink: "Tafuta zaidi kwenye findhelp.org",
    alsoNeed: "Pia nahitaji msaada na kitu kingine",
    shareLabel: "Shiriki HelpFinder",
    shareText: "Msaada wa bure na habari za kisheria kwa Monroe County. Hakuna akaunti, hakuna matangazo, hakuna ufuatiliaji.",
    shareAriaLabel: "Shiriki HelpFinder na mtu anayehitaji",
  },
  my: {
    title: "HelpFinder",
    subtitle: "ရော့ချက်စတားတွင် အခမဲ့အကူအညီ။ တရားစီရင်ခြင်းမရှိ။ ဒေတာမသိမ်းပါ။",
    start: "အခုအကူအညီရှာပါ",
    back: "နောက်သို့",
    startOver: "အစကပြန်စပါ",
    stepWhat: "ဘာလိုအပ်ပါသလဲ?",
    stepWho: "ဘယ်သူအကူအညီလိုပါသလဲ?",
    stepHow: "ငွေကြေးအခြေအနေဘယ်လိုရှိပါသလဲ?",
    stepResults: "ဒါတွေကိုတွေ့ပါတယ်",
    whoSelf: "ကျွန်တော်/မ တစ်ယောက်တည်း",
    whoFamily: "ကျွန်တော်/မ နှင့် မိသားစု",
    whoChild: "ကျွန်တော့်/မ ကလေး",
    whoSenior: "အသက် ၆၀+ တစ်ယောက်",
    whoVeteran: "စစ်မှုထမ်းဟောင်း",
    whoPregnant: "ကိုယ်ဝန်ဆောင်နေတယ် သို့ ကလေးငယ်ရှိတယ်",
    whoDisability: "မသန်စွမ်းသူတစ်ယောက်",
    whoAnyone: "မပြောချင်ပါ",
    howOk: "ရပ်တည်နိုင်ပါတယ်",
    howTight: "ငွေကြေးကျပ်တည်းပါတယ်",
    howCrisis: "အခြေခံစရိတ်မပေးနိုင်ပါ",
    howNone: "အခုဝင်ငွေမရှိပါ",
    call211: "စာရင်းမပါတာ လိုအပ်ပါသလား? 211 ခေါ်ပါ။",
    privacy: "ဒီမှာမျှဝေတာ ဘာမှသိမ်းဆည်းခြင်း သို့ ပေးပို့ခြင်းမရှိပါ။",
    privacySensitive: "ဒါလျှို့ဝှက်ပါ။ ဘာမှမသိမ်းပါ။ ဘယ်သူမှမသိပါ။",
    crisisNotice: "အခုအန္တရာယ်ကျရောက်နေရင် 24/7 အကူအညီရနိုင်ပါတယ်။",
    dvSafety: "တစ်ယောက်ယောက်က ဖုန်း သို့ ကွန်ပျူတာစစ်ဆေးနိုင်ရင် ဒီစာမျက်နှာကို အမြန်ပိတ်နိုင်ပါတယ်။",
    quickExit: "အမြန်ထွက်ရန်",
    communityTitle: "လူမှုအဖွဲ့များ",
    communityDesc: "စေတနာ့ဝန်ထမ်းအဖွဲ့များ။ အေဂျင်စီမဟုတ်ပါ — လူတွေကလူတွေကိုကူညီနေတာပါ။",
    featuredTitle: "လူကြိုက်များသော စတင်ရန်နေရာများ",
    website: "ဝဘ်ဆိုက်",
    callNow: "ခေါ်ဆိုပါ",
    apply: "အွန်လိုင်းလျှောက်ထားပါ",
    hours: "အချိန်",
    bring: "ဘာယူလာရမလဲ",
    note: "မှတ်ချက်",
    income: "ဝင်ငွေကန့်သတ်ချက်",
    fpl: "ဖက်ဒရယ်ဆင်းရဲမှုအဆင့်၏",
    langLabel: "ဘာသာစကား",
    interpreter: "သင့်တွင် အခမဲ့စကားပြန်ခံယူခွင့်ရှိသည်။ ဖုန်းခေါ်သောအခါ 'စကားပြန်လိုပါတယ်' ဟုပြောပါ။",
    findMore: "ရှာနေတာမတွေ့ဘူးလား?",
    findMoreLink: "findhelp.org တွင်ထပ်ရှာပါ",
    alsoNeed: "အခြားကိစ္စတွင်လည်းအကူအညီလိုပါတယ်",
    shareLabel: "HelpFinder မျှဝေပါ",
    shareText: "Monroe County အတွက် အခမဲ့ အကူအညီနှင့် ဥပဒေဆိုင်ရာ အချက်အလက်များ။ အကောင့်မရှိ၊ ကြော်ငြာမရှိ၊ ခြေရာခံမှုမရှိ။",
    shareAriaLabel: "လိုအပ်သူတစ်ယောက်ကို HelpFinder မျှဝေပါ",
  },
  so: {
    title: "HelpFinder",
    subtitle: "Caawimo bilaash ah, kuu dhow. Xukun la'aan. Xog lama uruuriyo.",
    start: "Raadi Caawimo Hadda",
    back: "Dib",
    startOver: "Dib u Bilow",
    stepWhat: "Maxaad u baahan tahay?",
    stepWho: "Yaa u baahan caawimo?",
    stepHow: "Sidee bay tahay xaaladaada dhaqaale?",
    stepResults: "Waxaan helnay kuwan",
    whoSelf: "Aniga kaliya",
    whoFamily: "Aniga iyo qoyskayga",
    whoChild: "Cunugayga",
    whoSenior: "Qof 60+ jir ah",
    whoVeteran: "Askar hore",
    whoPregnant: "Waan uurka leeyahay ama ilmo yar baan haystaa",
    whoDisability: "Qof naafo ah",
    whoAnyone: "Ma rabo inaan sheego",
    howOk: "Waan iska maareynaa",
    howTight: "Lacagtu way cidhiidhi tahay",
    howCrisis: "Aasaasiga ma bixin karno",
    howNone: "Dakhli ma hayno hadda",
    call211: "Wax aan liiska ku jirin ma u baahan tahay? Wac 211.",
    privacy: "Waxba laguma keydiyo ama lama diro. Weligaa.",
    privacySensitive: "Tani waa sir. Waxba lama keydiyo ama lama wadaago. Qofna ma ogaan doono.",
    crisisNotice: "Haddii aad hadda khatar ku jirto, caawimo ayaa la heli karaa 24/7.",
    dvSafety: "Haddii qof uu eegi karo telefoonkaaga ama kombuyuutarkaaga, boggan si degdeg ah ayaad u xidhi kartaa.",
    quickExit: "Ka Bax Degdeg",
    communityTitle: "Kooxaha Bulshada",
    communityDesc: "Kooxo tabarucayaal ah. Ma hay'ado — kaliya dad caawiya dad.",
    featuredTitle: "Meelaha Caanka ah ee Laga Bilaabo",
    website: "Websaydka",
    callNow: "Wac",
    apply: "Codso Online",
    hours: "Saacadaha",
    bring: "Maxaa la keenaa",
    note: "Fiiro gaar ah",
    income: "Xadka dakhliga",
    fpl: "ee Heerka Faqriga Federaalka",
    langLabel: "Luuqadda",
    interpreter: "Waxaad xaq u leedahay turjumaan bilaash ah. Dheh 'Waxaan u baahanahay turjumaan' markaad wacdo.",
    findMore: "Ma helin waxaad raadinaysay?",
    findMoreLink: "Ka raadi wax badan findhelp.org",
    alsoNeed: "Waxaan sidoo kale u baahanahay caawimaad wax kale",
    shareLabel: "La wadaag HelpFinder",
    shareText: "Caawimo lacag la'aan ah iyo macluumaad sharci ah ee Monroe County. Akoon la'aan, xayeysiis la'aan, raadraac la'aan.",
    shareAriaLabel: "La wadaag HelpFinder qof u baahan",
  },
  zh: {
    title: "HelpFinder",
    subtitle: "附近的免费帮助。不评判。不收集数据。",
    start: "立即寻找帮助",
    back: "返回",
    startOver: "重新开始",
    stepWhat: "您需要什么？",
    stepWho: "谁需要帮助？",
    stepHow: "您的经济状况如何？",
    stepResults: "以下是我们找到的",
    whoSelf: "只有我自己",
    whoFamily: "我和我的家人",
    whoChild: "我的孩子",
    whoSenior: "60岁以上的人",
    whoVeteran: "退伍军人",
    whoPregnant: "我怀孕了或有婴儿",
    whoDisability: "残障人士",
    whoAnyone: "不想说",
    howOk: "还过得去",
    howTight: "钱很紧",
    howCrisis: "付不起基本开支",
    howNone: "目前没有收入",
    call211: "需要未列出的服务？拨打211获取转介。",
    privacy: "您在这里分享的任何内容都不会被保存或发送。绝对不会。",
    privacySensitive: "这是私密的。我们不保存或分享任何内容。没有人会知道您在这里查看过。",
    crisisNotice: "如果您现在处于危险中，24/7全天候提供帮助。",
    dvSafety: "如果有人可能查看您的手机或电脑，您可以快速关闭此页面。",
    quickExit: "快速退出",
    communityTitle: "社区团体",
    communityDesc: "志愿者运营的团体。不是机构 — 只是人帮助人。",
    featuredTitle: "热门起点",
    website: "网站",
    callNow: "拨打",
    apply: "在线申请",
    hours: "时间",
    bring: "需要带什么",
    note: "备注",
    income: "收入限制",
    fpl: "联邦贫困线",
    langLabel: "语言",
    interpreter: "您有权获得免费口译员。打电话时说'我需要口译员'。",
    findMore: "没找到您需要的？",
    findMoreLink: "在findhelp.org上搜索更多项目",
    alsoNeed: "我还需要其他方面的帮助",
    shareLabel: "分享 HelpFinder",
    shareText: "门罗县免费帮助和法律信息。无需账户，无广告，无追踪。",
    shareAriaLabel: "将 HelpFinder 分享给需要的人",
  },
});

// ── DOCUMENT TERM TRANSLATIONS (Fix 3: "What to bring" i18n) ──
const DOC_TERMS = {
  "None":{es:"Nada",ne:"केही छैन",ar:"لا شيء",sw:"Hakuna",my:"မရှိပါ",so:"Waxba",zh:"无"},
  "ID":{es:"Identificación",ne:"परिचयपत्र",ar:"هوية",sw:"Kitambulisho",my:"မှတ်ပုံတင်",so:"Aqoonsi",zh:"身份证"},
  "Photo ID":{es:"Identificación con foto",ne:"फोटो परिचयपत्र",ar:"هوية بصورة",sw:"Kitambulisho chenye picha",my:"ဓာတ်ပုံပါမှတ်ပုံတင်",so:"Aqoonsi sawir leh",zh:"带照片的身份证"},
  "SSN cards":{es:"Tarjetas de Seguro Social",ne:"SSN कार्डहरू",ar:"بطاقات الضمان الاجتماعي",sw:"Kadi za SSN",my:"SSN ကတ်များ",so:"Kaadhadhka SSN",zh:"社安卡"},
  "SSN":{es:"Número de Seguro Social",ne:"SSN",ar:"رقم الضمان الاجتماعي",sw:"SSN",my:"SSN",so:"SSN",zh:"社会安全号"},
  "proof of income":{es:"comprobante de ingresos",ne:"आय प्रमाण",ar:"إثبات الدخل",sw:"uthibitisho wa mapato",my:"ဝင်ငွေအထောက်အထား",so:"caddaynta dakhliga",zh:"收入证明"},
  "Proof of income":{es:"Comprobante de ingresos",ne:"आय प्रमाण",ar:"إثبات الدخل",sw:"Uthibitisho wa mapato",my:"ဝင်ငွေအထောက်အထား",so:"Caddaynta dakhliga",zh:"收入证明"},
  "proof of address":{es:"comprobante de domicilio",ne:"ठेगाना प्रमाण",ar:"إثبات العنوان",sw:"uthibitisho wa anwani",my:"လိပ်စာအထောက်အထား",so:"caddaynta cinwaanka",zh:"地址证明"},
  "Proof of address":{es:"Comprobante de domicilio",ne:"ठेगाना प्रमाण",ar:"إثبات العنوان",sw:"Uthibitisho wa anwani",my:"လိပ်စာအထောက်အထား",so:"Caddaynta cinwaanka",zh:"地址证明"},
  "birth certificate":{es:"acta de nacimiento",ne:"जन्म प्रमाणपत्र",ar:"شهادة ميلاد",sw:"cheti cha kuzaliwa",my:"မွေးစာရင်း",so:"shahaadada dhalashada",zh:"出生证明"},
  "birth certificates":{es:"actas de nacimiento",ne:"जन्म प्रमाणपत्रहरू",ar:"شهادات ميلاد",sw:"vyeti vya kuzaliwa",my:"မွေးစာရင်းများ",so:"shahaadooyinka dhalashada",zh:"出生证明"},
  "bank statements":{es:"estados de cuenta",ne:"बैंक विवरण",ar:"كشوف حساب بنكية",sw:"taarifa za benki",my:"ဘဏ်စာရင်းရှင်းတမ်း",so:"bayaanka bangiga",zh:"银行对账单"},
  "utility bill":{es:"factura de servicios",ne:"बिजुली/ग्यास बिल",ar:"فاتورة خدمات",sw:"bili ya huduma",my:"အသုံးအဆောင်ဘီလ်",so:"biilka adeegyada",zh:"水电费账单"},
  "immunization records":{es:"registro de vacunas",ne:"खोप अभिलेख",ar:"سجلات التطعيم",sw:"rekodi za chanjo",my:"ကာကွယ်ဆေးမှတ်တမ်း",so:"diiwaanka tallaalka",zh:"免疫记录"},
  "immunizations":{es:"vacunas",ne:"खोपहरू",ar:"التطعيمات",sw:"chanjo",my:"ကာကွယ်ဆေးများ",so:"tallaalka",zh:"免疫记录"},
  "Varies":{es:"Varía",ne:"फरक हुन्छ",ar:"يختلف",sw:"Inatofautiana",my:"ကွဲပြားသည်",so:"Way kala duwan yihiin",zh:"不定"},
  "Varies by program":{es:"Varía según el programa",ne:"कार्यक्रम अनुसार फरक",ar:"يختلف حسب البرنامج",sw:"Inatofautiana kwa programu",my:"အစီအစဉ်အလိုက်ကွဲပြားသည်",so:"Waxay ku xiran tahay barnaamijka",zh:"因项目而异"},
  "Your EBT card":{es:"Su tarjeta EBT",ne:"तपाईंको EBT कार्ड",ar:"بطاقة EBT",sw:"Kadi yako ya EBT",my:"သင့် EBT ကတ်",so:"Kaadhkaaga EBT",zh:"您的EBT卡"},
  "Your Medicaid card":{es:"Su tarjeta de Medicaid",ne:"तपाईंको Medicaid कार्ड",ar:"بطاقة Medicaid",sw:"Kadi yako ya Medicaid",my:"သင့် Medicaid ကတ်",so:"Kaadhkaaga Medicaid",zh:"您的Medicaid卡"},
  "Your prescriptions":{es:"Sus recetas",ne:"तपाईंको प्रेस्क्रिप्सन",ar:"وصفاتك الطبية",sw:"Dawa zako",my:"သင့်ဆေးစာ",so:"Warqadahaaga dhakhtarka",zh:"您的处方"},
  "Proof of age":{es:"Comprobante de edad",ne:"उमेर प्रमाण",ar:"إثبات العمر",sw:"Uthibitisho wa umri",my:"အသက်အထောက်အထား",so:"Caddaynta da\'da",zh:"年龄证明"},
  "Proof of benefits":{es:"Comprobante de beneficios",ne:"लाभ प्रमाण",ar:"إثبات المزايا",sw:"Uthibitisho wa faida",my:"ခံစားခွင့်အထောက်အထား",so:"Caddaynta faa\'iidooyinka",zh:"福利证明"},
  "Proof of veteran status":{es:"Comprobante de servicio militar",ne:"सैनिक स्थिति प्रमाण",ar:"إثبات حالة المحارب",sw:"Uthibitisho wa hali ya mstaafu",my:"စစ်မှုထမ်းဟောင်းအထောက်အထား",so:"Caddaynta askarnimada",zh:"退伍军人身份证明"},
  "DD-214, VA ID":{es:"DD-214, ID de VA",ne:"DD-214, VA परिचयपत्र",ar:"DD-214، هوية VA",sw:"DD-214, kitambulisho cha VA",my:"DD-214, VA မှတ်ပုံတင်",so:"DD-214, aqoonsiga VA",zh:"DD-214, VA身份证"},
  "Medicaid ID":{es:"ID de Medicaid",ne:"Medicaid परिचयपत्र",ar:"هوية Medicaid",sw:"Kitambulisho cha Medicaid",my:"Medicaid မှတ်ပုံတင်",so:"Aqoonsiga Medicaid",zh:"Medicaid卡"},
  "FAFSA required":{es:"Se requiere FAFSA",ne:"FAFSA आवश्यक",ar:"FAFSA مطلوب",sw:"FAFSA inahitajika",my:"FAFSA လိုအပ်သည်",so:"FAFSA ayaa loo baahan yahay",zh:"需要FAFSA"},
  "Immigration documents":{es:"Documentos de inmigración",ne:"आप्रवासन कागजातहरू",ar:"وثائق الهجرة",sw:"Hati za uhamiaji",my:"လူဝင်မှုကြီးကြပ်ရေးစာရွက်စာတမ်း",so:"Dukumiintiyada socdaalka",zh:"移民文件"},
  "Refugee documentation":{es:"Documentación de refugiado",ne:"शरणार्थी कागजात",ar:"وثائق اللاجئ",sw:"Hati za ukimbizi",my:"ဒုက္ခသည်စာရွက်စာတမ်း",so:"Dukumiintiyada qaxootiga",zh:"难民文件"},
  "Disability documentation":{es:"Documentación de discapacidad",ne:"अपाङ्गता कागजात",ar:"وثائق الإعاقة",sw:"Hati za ulemavu",my:"မသန်စွမ်းမှုစာရွက်စာတမ်း",so:"Dukumiintiyada naafanimada",zh:"残疾证明"},
  "Proof of income for sliding scale":{es:"Comprobante de ingresos (escala móvil)",ne:"स्लाइडिङ स्केलको लागि आय प्रमाण",ar:"إثبات الدخل للمقياس المتدرج",sw:"Uthibitisho wa mapato (bei nafuu)",my:"ချိုင့်ခွင့်အတွက် ဝင်ငွေအထောက်အထား",so:"Caddaynta dakhliga (qiimaha la habbeeyo)",zh:"按收入定价的收入证明"},
  "Proof of income for eligibility":{es:"Comprobante de ingresos (elegibilidad)",ne:"योग्यताको लागि आय प्रमाण",ar:"إثبات الدخل للأهلية",sw:"Uthibitisho wa mapato (sifa)",my:"အရည်အချင်းအတွက် ဝင်ငွေအထောက်အထား",so:"Caddaynta dakhliga (xaqa)",zh:"资格审查的收入证明"},
};

const translateDoc = (doc, lang) => {
  if (!doc || lang === "en") return doc;
  if (doc === "None" || doc.startsWith("None")) {
    if (doc === "None") return DOC_TERMS["None"][lang] || doc;
    return doc;
  }
  if (DOC_TERMS[doc]?.[lang]) return DOC_TERMS[doc][lang];
  let result = doc;
  const sorted = Object.keys(DOC_TERMS).sort((a, b) => b.length - a.length);
  for (const term of sorted) {
    if (DOC_TERMS[term][lang] && result.includes(term)) {
      result = result.replaceAll(term, DOC_TERMS[term][lang]);
    }
  }
  return result;
};

// ── PHONE HELPER (handles extensions) ──
const telHref = (ph) => {
  if (!ph) return "";
  // "585-244-8400 ext.244" → "tel:5852448400,244"
  const extMatch = ph.match(/^(.*?)\s*ext\.?\s*(\d+)$/i);
  if (extMatch) {
    return `tel:${extMatch[1].replace(/[^0-9+]/g, "")},${extMatch[2]}`;
  }
  return `tel:${ph.replace(/[^0-9+]/g, "")}`;
};

// ── TAB GROUPS ──
const TABS = {
  rightnow: {
    icon: "🆘",
    en: "I need help right now",
    es: "Necesito ayuda ahora",
    ne: "मलाई अहिले नै सहयोग चाहिन्छ",
    ar: "أحتاج مساعدة الآن",
    sw: "Nahitaji msaada sasa hivi",
    my: "အခုပဲအကူအညီလိုတယ်",
    so: "Waxaan u baahanahay caawimo hadda",
    zh: "我现在需要帮助",
    needs: ["crisis", "domesticSvc", "parentalProtection", "crisisChild", "housing", "weather"],
  },
  foodhome: {
    icon: "🍎",
    en: "Food, a place to stay, or bills",
    es: "Comida, vivienda, o cuentas",
    ne: "खाना, बस्ने ठाउँ, वा बिलहरू",
    ar: "طعام أو سكن أو فواتير",
    sw: "Chakula, makazi, au bili",
    my: "အစားအသောက်၊ နေစရာ၊ ဘီလ်",
    so: "Cunto, meel aad degganaato, ama biilal",
    zh: "食物、住处或账单",
    needs: [
      "food",
      "housing",
      "cash",
      "utilities",
      "clothing",
      "transport",
      "internet",
      "documents",
    ],
  },
  health: {
    icon: "❤️",
    en: "A doctor, dentist, or medicine",
    es: "Doctor, dentista, o medicina",
    ne: "डाक्टर, दन्त चिकित्सक, वा औषधि",
    ar: "طبيب أو طبيب أسنان أو دواء",
    sw: "Daktari, daktari wa meno, au dawa",
    my: "ဆရာဝန်၊ သွားဆရာဝန်၊ ဆေးဝါး",
    so: "Dhakhtarka, dhakhtarka ilkaha, ama daawada",
    zh: "医生、牙医或药物",
    needs: ["health", "dental", "vision", "prescriptions", "hivsti", "disabilitySvc"],
  },
  feeling: {
    icon: "💚",
    en: "Stress, sadness, or addiction",
    es: "Estrés, tristeza, o adicción",
    ne: "तनाव, दुःख, वा लत",
    ar: "توتر أو حزن أو إدمان",
    sw: "Msongo, huzuni, au uraibu",
    my: "စိတ်ဖိစီး၊ ဝမ်းနည်း၊ စွဲလမ်းမှု",
    so: "Walbahaarka, murugada, ama qalafka",
    zh: "压力、悲伤或成瘾",
    needs: ["mental", "grief", "funeral", "addiction", "caregiver"],
  },
  family: {
    icon: "👨‍👩‍👧",
    en: "My family",
    es: "Mi familia",
    ne: "मेरो परिवार",
    ar: "عائلتي",
    sw: "Familia yangu",
    my: "မိသားစု",
    so: "Qoyskayga",
    zh: "家庭",
    needs: [
      "childcare",
      "youth",
      "seniorSvc",
      "funeral",
      "parentalProtection",
      "caregiver",
      "pets",
    ],
  },
  work: {
    icon: "💼",
    en: "My job",
    es: "Mi trabajo",
    ne: "मेरो काम",
    ar: "عملي",
    sw: "Kazi yangu",
    my: "အလုပ်",
    so: "Shaqadayda",
    zh: "工作",
    needs: [
      "employment",
      "education",
      "legalWorkers",
    ],
  },
  rights: {
    icon: "⚖️",
    en: "My rights",
    es: "Mis derechos",
    ne: "मेरो अधिकार",
    ar: "حقوقي",
    sw: "Haki zangu",
    my: "အခွင့်အရေး",
    so: "Xuquuqdayda",
    zh: "我的权利",
    needs: [
      "legal",
      "legalEviction",
      "legalBenefits",
      "legalImmigration",
      "legalDiscrim",
      "legalDebt",
      "legalSmallClaims",
      "legalCrimRecord",
      "disabilitySvc",
      "veteranSvc",
      "refugeeSvc",
      "lgbtq",
      "reentry",
    ],
  },
};

// ── CATEGORIES ──
const CATEGORIES = {
  crisis: { icon: "🆘", en: "Someone to talk to right now", es: "Alguien con quien hablar ahora", ne: "अहिले कुरा गर्ने कोही", ar: "شخص أتحدث إليه الآن", sw: "Mtu wa kuongea naye sasa", my: "အခုစကားပြောစရာတစ်ယောက်", so: "Qof aad hadda la hadasho", zh: "现在需要找人倾诉" },
  food: { icon: "🍎", en: "Food or groceries", es: "Comida o alimentos", ne: "खाना वा किराना", ar: "طعام أو بقالة", sw: "Chakula", my: "အစားအသောက်", so: "Cunto", zh: "食物" },
  housing: { icon: "🏠", en: "A place to live", es: "Un lugar para vivir", ne: "बस्ने ठाउँ", ar: "مكان للسكن", sw: "Mahali pa kuishi", my: "နေစရာ", so: "Meel aad ku nooshahay", zh: "住处" },
  cash: { icon: "💵", en: "Help with money, rent, or bills", es: "Ayuda con dinero, renta, o cuentas", ne: "पैसा, भाडा, वा बिलमा सहयोग", ar: "مساعدة في المال أو الإيجار أو الفواتير", sw: "Msaada wa pesa, kodi, au bili", my: "ငွေ၊ အိမ်ခ၊ ဘီလ်အကူအညီ", so: "Caawimada lacagta, kirada, ama biilasha", zh: "金钱、房租或账单帮助" },
  utilities: { icon: "🔥", en: "Heat or electric bill help", es: "Ayuda con calefacción o electricidad", ne: "तापक्रम वा बिजुली बिल सहयोग", ar: "مساعدة في فاتورة التدفئة أو الكهرباء", sw: "Msaada wa bili ya joto au umeme", my: "အပူပေးစက် သို့ လျှပ်စစ်ဘီလ်အကူအညီ", so: "Caawimada biilka kulaylka ama korontada", zh: "取暖或电费帮助" },
  health: { icon: "❤️", en: "I need to see a doctor", es: "Necesito ver a un doctor", ne: "मलाई डाक्टर देखाउनु पर्छ", ar: "أحتاج لرؤية طبيب", sw: "Nahitaji kuona daktari", my: "ဆရာဝန်ပြဖို့လိုတယ်", so: "Waxaan u baahanahay inaan dhakhtar arko", zh: "我需要看医生" },
  dental: { icon: "🦷", en: "My teeth hurt or I need a dentist", es: "Me duelen los dientes o necesito dentista", ne: "दाँत दुख्छ वा दन्त चिकित्सक चाहिन्छ", ar: "أسناني تؤلمني أو أحتاج طبيب أسنان", sw: "Meno yangu yanauma au nahitaji daktari wa meno", my: "သွားကိုက်တယ် သို့ သွားဆရာဝန်လိုတယ်", so: "Ilkahayga waa i xanuunayaan ama waxaan u baahanahay dhakhtar ilko", zh: "牙疼或需要看牙医" },
  prescriptions: { icon: "💊", en: "I can't afford my medicine", es: "No puedo pagar mis medicinas", ne: "म औषधि किन्न सक्दिन", ar: "لا أستطيع تحمل تكلفة دوائي", sw: "Siwezi kumudu dawa zangu", my: "ဆေးဝယ်ဖို့မတတ်နိုင်ဘူး", so: "Ma awoodo inaan daawadayda bixiyo", zh: "买不起药" },
  mental: { icon: "💚", en: "I'm stressed, anxious, or not OK", es: "Estoy estresado, ansioso, o no estoy bien", ne: "तनावित, चिन्तित, वा ठीक छैन", ar: "أنا متوتر أو قلق أو لست بخير", sw: "Nina msongo, wasiwasi, au siko sawa", my: "စိတ်ဖိစီး၊ စိုးရိမ်၊ မကောင်းဘူး", so: "Waan walbaaharsanahay, walaacsan, ama ma fiicni", zh: "压力大、焦虑或状态不好" },
  grief: { icon: "🕊️", en: "Someone I love died", es: "Alguien que amo murió", ne: "मेरो माया गर्ने कोही बित्यो", ar: "شخص أحبه توفي", sw: "Mtu ninayempenda amefariki", my: "ချစ်ရသူ ဆုံးသွားတယ်", so: "Qof aan jeclaa wuu dhintay", zh: "我爱的人去世了" },
  addiction: { icon: "🔄", en: "Drinking, drugs, recovery, or staying safer", es: "Alcohol, drogas, recuperación, o mantenerse más seguro", ne: "मदिरा, लागुऔषध, वा सफा हुने", ar: "الكحول، المخدرات، التعافي، أو البقاء بأمان", sw: "Pombe, dawa za kulevya, au kupona", my: "အရက်၊ မူးယစ်ဆေး၊ ပြန်လည်ကောင်းမွန်ရေး", so: "Khamriga, daroogada, ama ka bixitaanka", zh: "饮酒、毒品、康复或保持安全" },
  childcare: { icon: "👶", en: "Help with my kids or daycare", es: "Ayuda con mis hijos o guardería", ne: "बच्चा वा बालबाटिकामा सहयोग", ar: "مساعدة مع أطفالي أو الحضانة", sw: "Msaada na watoto au malezi", my: "ကလေးထိန်း သို့ ကလေးအကူအညီ", so: "Caawimada carruurta ama xanaanada", zh: "孩子或日托帮助" },
  crisisChild: { icon: "🧸", en: "I need someone to watch my kids right now", es: "Necesito que alguien cuide a mis hijos ahora", ne: "अहिले नै कसैले मेरा बच्चा हेर्नुपर्छ", ar: "أحتاج من يراقب أطفالي الآن", sw: "Nahitaji mtu awaangalie watoto wangu sasa", my: "အခုပဲ ကလေးကြည့်ပေးမယ့်သူ လိုတယ်", so: "Waxaan u baahanahay qof hadda ilmahayga ilaaliya", zh: "我现在需要人照看孩子" },
  employment: { icon: "💼", en: "I need a job", es: "Necesito un trabajo", ne: "मलाई काम चाहिन्छ", ar: "أحتاج وظيفة", sw: "Nahitaji kazi", my: "အလုပ်လိုတယ်", so: "Waxaan u baahanahay shaqo", zh: "我需要工作" },
  education: { icon: "📚", en: "School, GED, English, or college", es: "Escuela, GED, inglés, o universidad", ne: "विद्यालय, GED, अंग्रेजी, वा कलेज", ar: "مدرسة أو GED أو إنجليزي أو جامعة", sw: "Shule, GED, Kiingereza, au chuo", my: "ကျောင်း၊ GED၊ အင်္ဂလိပ်စာ၊ ကောလိပ်", so: "Dugsi, GED, Ingiriisi, ama jaamacad", zh: "学校、GED、英语或大学" },
  domesticSvc: { icon: "🛡️", en: "Someone is hurting me or my family", es: "Alguien me está lastimando a mí o a mi familia", ne: "कसैले मलाई वा मेरो परिवारलाई दुःख दिइरहेको छ", ar: "شخص يؤذيني أو يؤذي عائلتي", sw: "Mtu ananidhuru mimi au familia yangu", my: "တစ်ယောက်ယောက်က ကျွန်တော်/မ ကို နာကျင်စေနေတယ်", so: "Qof ayaa i dhaawacaya ama qoyskayga dhaawacaya", zh: "有人在伤害我或我的家人" },
  seniorSvc: { icon: "🧓", en: "Help for someone 60 or older", es: "Ayuda para alguien de 60 años o más", ne: "६० वा सो भन्दा बढी उमेरकालाई सहयोग", ar: "مساعدة لشخص 60 سنة أو أكبر", sw: "Msaada kwa mtu wa miaka 60+", my: "အသက် ၆၀+ အတွက်အကူအညီ", so: "Caawimada qofka 60 jir ama ka weyn", zh: "60岁及以上人士的帮助" },
  youth: { icon: "🌟", en: "Programs for kids or teenagers", es: "Programas para niños o adolescentes", ne: "बालबालिका वा किशोरका लागि कार्यक्रम", ar: "برامج للأطفال أو المراهقين", sw: "Programu za watoto au vijana", my: "ကလေးနှင့် ဆယ်ကျော်သက်များအတွက် အစီအစဉ်", so: "Barnaamijyada carruurta ama dhalinyarada", zh: "儿童或青少年项目" },
  disabilitySvc: { icon: "♿", en: "Help for a disability", es: "Ayuda con una discapacidad", ne: "अपाङ्गताको लागि सहयोग", ar: "مساعدة للإعاقة", sw: "Msaada kwa ulemavu", my: "မသန်စွမ်းမှုအတွက် အကူအညီ", so: "Caawimada naafanimada", zh: "残疾帮助" },
  refugeeSvc: { icon: "🌍", en: "I'm new to this country", es: "Soy nuevo en este país", ne: "म यस देशमा नयाँ हुँ", ar: "أنا جديد في هذا البلد", sw: "Mimi ni mpya katika nchi hii", my: "ဒီနိုင်ငံမှာ အသစ်ရောက်လာတယ်", so: "Waxaan ku cusub ahay dalkan", zh: "我刚来这个国家" },
  lgbtq: { icon: "🏳️‍🌈", en: "LGBTQ+ support", es: "Apoyo LGBTQ+", ne: "LGBTQ+ सहयोग", ar: "دعم LGBTQ+", sw: "Msaada wa LGBTQ+", my: "LGBTQ+ ပံ့ပိုးမှု", so: "Taageerada LGBTQ+", zh: "LGBTQ+支持" },
  veteranSvc: { icon: "🎖️", en: "I served in the military", es: "Serví en el ejército", ne: "मैले सेनामा सेवा गरें", ar: "خدمت في الجيش", sw: "Nilitumikia jeshini", my: "စစ်မှုထမ်းခဲ့တယ်", so: "Waxaan u adeegay ciidanka", zh: "我曾在军队服役" },
  legal: { icon: "⚖️", en: "A lawyer or legal help", es: "Un abogado o ayuda legal", ne: "वकिल वा कानुनी सहयोग", ar: "محامي أو مساعدة قانونية", sw: "Wakili au msaada wa kisheria", my: "ရှေ့နေ သို့ တရားရေးအကူအညီ", so: "Qareen ama caawimo sharci", zh: "律师或法律帮助" },
  legalEviction: { icon: "🏚️", en: "My landlord is trying to evict me", es: "Mi arrendador intenta desahuciarme", ne: "मेरो घरबेटीले मलाई निकाल्न खोज्दैछ", ar: "المالك يحاول طردي", sw: "Mwenye nyumba anataka kunifukuza", my: "ငှားရမ်းသူက ကျွန်တော်ကို နှင်ထုတ်ဖို့ကြိုးစားနေတယ်", so: "Mulkiilaha wuxuu isku dayayaa inuu ii eryo", zh: "房东试图驱逐我" },
  legalWorkers: { icon: "💼", en: "My employer is treating me unfairly", es: "Mi empleador me trata injustamente", ne: "मेरो रोजगारदाताले मलाई अन्यायपूर्ण व्यवहार गर्दैछ", ar: "صاحب العمل يعاملني بشكل غير عادل", sw: "Mwajiri wangu ananidanganya au kunishinda", my: "အလုပ်ရှင်က ကျွန်တော်ကို မတရားဆက်ဆံနေတယ်", so: "Shaqo-siiyahaagu si xun buu ii la dhaqmayaa", zh: "雇主对我不公平" },
  legalBenefits: { icon: "📋", en: "My benefits were cut or denied", es: "Mis beneficios fueron cortados o negados", ne: "मेरो सुविधाहरू काटिए वा अस्वीकार गरियो", ar: "تم قطع مزاياي أو رفضها", sw: "Faida zangu zilikatwa au kukataliwa", my: "ကျွန်တော့်ခံစားခွင့်တွေ ဖြတ်တောက်ခြင်း သို့ ငြင်းဆိုခံရတယ်", so: "Faa'iidadaydu waa la jarjaray ama la diiday", zh: "我的福利被削减或拒绝" },
  legalImmigration: { icon: "🌍", en: "I need immigration legal help", es: "Necesito ayuda legal de inmigración", ne: "मलाई आप्रवासन कानुनी सहयोग चाहिन्छ", ar: "أحتاج مساعدة قانونية في الهجرة", sw: "Nahitaji msaada wa kisheria wa uhamiaji", my: "လူဝင်မှုကြီးကြပ်ရေး တရားရေးအကူအညီ လိုတယ်", so: "Waxaan u baahanahay caawimo sharci oo socdaal ah", zh: "我需要移民法律帮助" },
  legalDiscrim: { icon: "🚫", en: "I was discriminated against", es: "Fui discriminado/a", ne: "मैसँग भेदभाव गरियो", ar: "تعرضت للتمييز", sw: "Nilidhulumiwa kwa ubaguzi", my: "ကျွန်တော် ခွဲခြားဆက်ဆံမှုခံခဲ့ရတယ်", so: "Waxaa iga dherbiyey takoorid", zh: "我遭受了歧视" },
  legalDebt: { icon: "💳", en: "I'm being sued or harassed over debt", es: "Me están demandando o acosando por deudas", ne: "ऋणको लागि मलाई मुद्दा लगाइएको वा उत्पीडन गरिएको छ", ar: "يتم مقاضاتي أو مضايقتي بسبب الديون", sw: "Ninafuatwa kwa madai ya deni", my: "ကြွေးမြီကြောင့် တရားစွဲဆိုခြင်း သို့ နှောင့်ယှက်ခြင်းခံနေရတယ်", so: "Waxaa ila dacweeya ama ila xariiraya deynta", zh: "我因债务被起诉或骚扰" },
  legalSmallClaims: { icon: "🏛️", en: "I want to take someone to small claims court", es: "Quiero llevar a alguien a la corte de reclamos menores", ne: "म कसैलाई साना दावी अदालतमा लैजान चाहन्छु", ar: "أريد أخذ شخص ما إلى محكمة المطالبات الصغيرة", sw: "Nataka kumpeleka mtu mahakamani kwa madai madogo", my: "တစ်ယောက်ကို Small Claims Court မှာ တရားစွဲချင်တယ်", so: "Waxaan rabaa in aan qof u qaado maxkamadda dacwaadaha yaryar", zh: "我想在小额索赔法庭起诉某人" },
  legalCrimRecord: { icon: "🔑", en: "I want to clear my criminal record", es: "Quiero limpiar mi historial criminal", ne: "म मेरो आपराधिक रेकर्ड सफा गर्न चाहन्छु", ar: "أريد محو سجلي الجنائي", sw: "Nataka kufuta rekodi yangu ya uhalifu", my: "ကျွန်တော့် ရာဇဝတ်မှတ်တမ်းကို ဖျက်ချင်တယ်", so: "Waxaan rabaa inaan nadiifiyo diiwaankaygii dambiyada", zh: "我想清除我的犯罪记录" },
  transport: { icon: "🚌", en: "I need a ride or bus pass", es: "Necesito transporte o pase de autobús", ne: "सवारी वा बस पास चाहिन्छ", ar: "أحتاج توصيلة أو بطاقة حافلة", sw: "Nahitaji usafiri au pasi ya basi", my: "စီးစရာ သို့ ဘတ်စ်ကတ်လိုတယ်", so: "Waxaan u baahanahay raacdo ama kaarka baska", zh: "需要搭车或公交卡" },
  internet: { icon: "📱", en: "Internet, WiFi, or a phone", es: "Internet, WiFi, o un teléfono", ne: "इन्टरनेट, WiFi, वा फोन", ar: "إنترنت أو WiFi أو هاتف", sw: "Mtandao, WiFi, au simu", my: "အင်တာနက်၊ WiFi၊ ဖုန်း", so: "Internet, WiFi, ama telefoon", zh: "互联网、WiFi或手机" },
  clothing: { icon: "👕", en: "Clothes, coats, or toiletries", es: "Ropa, abrigos, o artículos de aseo", ne: "लुगा, कोट, वा सरसफाइ सामान", ar: "ملابس أو معاطف أو مستلزمات نظافة", sw: "Nguo, koti, au vifaa vya usafi", my: "အဝတ်အစား၊ ကုတ်အင်္ကျီ၊ သန့်ရှင်းရေးပစ္စည်း", so: "Dharka, jaakadaha, ama walxaha nadaafadda", zh: "衣服、外套或洗漱用品" },
  reentry: { icon: "🔑", en: "I just got out of jail or prison", es: "Acabo de salir de la cárcel", ne: "म भर्खरै जेलबाट बाहिर आएँ", ar: "خرجت للتو من السجن", sw: "Nimetoka gerezani", my: "အကျဉ်းထောင်ကနေ ထွက်လာတယ်", so: "Waan ka soo baxay xabsiga", zh: "我刚从监狱出来" },
  pets: { icon: "🐾", en: "Help with my pet", es: "Ayuda con mi mascota", ne: "मेरो पाल्तु जनावरको लागि सहयोग", ar: "مساعدة مع حيواني الأليف", sw: "Msaada na mnyama wangu", my: "အိမ်မွေးတိရစ္ဆာန် အကူအညီ", so: "Caawimada xayawaanka guriga", zh: "宠物帮助" },
  hivsti: { icon: "🏥", en: "STD testing or HIV help", es: "Pruebas de ETS o ayuda con VIH", ne: "STD परीक्षण वा HIV सहयोग", ar: "فحص الأمراض المنقولة جنسياً أو مساعدة HIV", sw: "Kupima magonjwa ya zinaa au msaada wa HIV", my: "STD စစ်ဆေးမှု သို့ HIV အကူအညီ", so: "Baarista STD ama caawimada HIV", zh: "性病检测或HIV帮助" },
  weather: { icon: "🌡️", en: "I need to get warm or cool off", es: "Necesito calentarme o refrescarme", ne: "न्यानो हुन वा चिसो हुन चाहिन्छ", ar: "أحتاج أن أتدفأ أو أبرد", sw: "Nahitaji kupata joto au kubaridi", my: "အေးခံ သို့ အပူခံဖို့လိုတယ်", so: "Waxaan u baahanahay inaan diiraamo ama qaboojyo", zh: "我需要取暖或降温" },
  documents: { icon: "📄", en: "I need an ID, passport, or papers", es: "Necesito identificación, pasaporte, o papeles", ne: "परिचयपत्र, राहदानी, वा कागजात चाहिन्छ", ar: "أحتاج بطاقة هوية أو جواز سفر أو أوراق", sw: "Nahitaji kitambulisho, pasipoti, au nyaraka", my: "ID ကတ်၊ ပတ်စ်ပို့ သို့ စာရွက်စာတမ်းလိုတယ်", so: "Waxaan u baahanahay aqoonsi, baasaboor, ama warqado", zh: "我需要身份证、护照或文件" },
  vision: { icon: "👓", en: "I need glasses or an eye exam", es: "Necesito lentes o un examen de ojos", ne: "चश्मा वा आँखा जाँच चाहिन्छ", ar: "أحتاج نظارات أو فحص عيون", sw: "Nahitaji miwani au uchunguzi wa macho", my: "မျက်မှန် သို့ မျက်စိစစ်ဆေးမှု လိုတယ်", so: "Waxaan u baahanahay muraayadaha ama baarista indhaha", zh: "需要眼镜或眼科检查" },
  funeral: { icon: "🕯️", en: "Help paying for a funeral", es: "Ayuda para pagar un funeral", ne: "अन्त्येष्टि खर्चमा सहयोग", ar: "مساعدة في دفع تكاليف الجنازة", sw: "Msaada wa kulipa mazishi", my: "ဈာပနစရိတ်အကူအညီ", so: "Caawimada bixinta aaska", zh: "丧葬费用帮助" },
  parentalProtection: { icon: "⚖️", en: "Protect myself or my children from another parent", es: "Protegerme a mí o a mis hijos de otro padre/madre", ne: "अर्को अभिभावकबाट आफूलाई वा बच्चाहरूलाई जोगाउनुहोस्", ar: "حماية نفسي أو أطفالي من أحد الوالدين", sw: "Kujilinda mimi au watoto wangu kutoka kwa mzazi mwingine", my: "အခြားမိဘမှ ကျွန်တော်/မ သို့ ကလေးများကို ကာကွယ်ပါ", so: "Difaaca naftagayga ama carruurtayda ka waalidka kale", zh: "保护我自己或我的孩子不受另一方父母伤害" },
  caregiver: { icon: "🤲", en: "I take care of someone and need help", es: "Cuido a alguien y necesito ayuda", ne: "म कसैको हेरचाह गर्छु र सहयोग चाहिन्छ", ar: "أعتني بشخص وأحتاج مساعدة", sw: "Ninatunza mtu na nahitaji msaada", my: "တစ်ယောက်ယောက်ကို ပြုစုနေပြီး အကူအညီလိုတယ်", so: "Waxaan daryeelayaa qof waxaanan u baahanahay caawimaad", zh: "我在照顾某人，需要帮助" },
};

// ── PROGRAMS (294 across 43 categories) ──
// Data last verified: April 2026. Phone numbers and hours may change.

// ─────────────────────────────────────────────
// MONROE_TOWNS — canonical list of towns and villages in Monroe County, NY
// Used for URL slugs, gap detection, and town-level filtering.
// Slugs are lowercase, hyphenated. Match the `town:` field on every program.
// ─────────────────────────────────────────────
const MONROE_TOWNS = [
  "brighton", "brockport", "chili", "churchville", "clarkson",
  "east-rochester", "fairport", "gates", "greece", "hamlin",
  "henrietta", "hilton", "honeoye-falls", "irondequoit", "mendon",
  "ogden", "parma", "penfield", "perinton", "pittsford",
  "riga", "rochester", "rush", "scottsville", "spencerport",
  "sweden", "webster", "wheatland",
];
// Display labels for the town selector dropdown
const TOWN_LABELS = {
  "brighton":"Town of Brighton", "brockport":"Village of Brockport",
  "chili":"Town of Chili", "churchville":"Village of Churchville",
  "clarkson":"Town of Clarkson", "east-rochester":"Village of East Rochester",
  "fairport":"Village of Fairport", "gates":"Town of Gates",
  "greece":"Town of Greece", "hamlin":"Town of Hamlin",
  "henrietta":"Town of Henrietta", "hilton":"Village of Hilton",
  "honeoye-falls":"Village of Honeoye Falls", "irondequoit":"Town of Irondequoit",
  "mendon":"Town of Mendon", "ogden":"Town of Ogden",
  "parma":"Town of Parma", "penfield":"Town of Penfield",
  "perinton":"Town of Perinton", "pittsford":"Town of Pittsford",
  "riga":"Town of Riga", "rochester":"City of Rochester",
  "rush":"Town of Rush", "scottsville":"Village of Scottsville",
  "spencerport":"Village of Spencerport", "sweden":"Town of Sweden",
  "webster":"Town of Webster", "wheatland":"Town of Wheatland",
};

// ─────────────────────────────────────────────
// REACH_TIERS — how far a program's help extends
//   local      Physical address matters. Sort by distance from user.
//   regional   Multi-county or county-wide service. Visit physical office.
//   statewide  Serves anywhere in NY. May have a local office for in-person work.
//   national   Serves anywhere in the US.
//   remote     Phone, mail, video, online. Location-independent.
//
// coordApprox:true means lat/lng came from a Tier 3 city/zip centroid lookup,
// not the program's actual building. Distance math still works for sort order
// to within ~1 mile, but any UI that renders a map pin or "directions" link
// MUST show "approximate location" notice for these programs.
//
// addressSuppressed:true is a SAFETY flag for programs serving vulnerable
// populations (crisis nurseries, DV shelters, residential refuges) where
// the operator deliberately publishes only a street name or general area,
// never the building number. When addressSuppressed is true:
//   - lat/lng fields MUST be absent (or stripped if accidentally added)
//   - zip MAY be absent if it would narrow the location too much
//   - the program MUST NOT appear in distance-sorted Near Me results
//   - any future map UI MUST NOT render a pin
//   - any list view should display the operator's published address only
//
// HelpFinder's rule: match the operator's published specificity, never
// exceed it. Aggregation in a directory amplifies discovery risk for
// vulnerable populations beyond what each source intended.
// ─────────────────────────────────────────────

// SERVES — multi-town service declaration (added April 9, 2026)
//
//   serves: ["town1","town2",...]  Optional array of additional towns this
//                                  program serves. A program shows in a town's
//                                  results if program.town === userTown OR
//                                  program.serves.includes(userTown).
//
//   Use serves when ONE program physically operates in or covers MULTIPLE
//   specific towns — e.g. a Foodlink mobile pantry stopping in 6 villages,
//   or a workforce program serving Spencerport, Hilton, and Hamlin from a
//   Greece office. Do NOT use serves to express "regional" coverage that
//   isn't town-specific — use reach:"regional" for that.
//
//   serves is OPTIONAL. Single-town programs use only the existing town field.
//   Multi-town programs may set both town (the primary location) and serves
//   (the additional towns covered).
// ─────────────────────────────────────────────

const DATA_VERIFIED = "April 2026";
const PROGRAMS = [
  // CRISIS
  { id:"211", n:"211 Lifeline (Call for Anything)", c:"crisis", d:"Don't know where to start? Call 211. Free, anytime, for anything.", tr:{es:"¿No sabe por dónde empezar? Llame al 211. Gratis, a cualquier hora.",ne:"कहाँबाट सुरु गर्ने थाहा छैन? 211 मा कल गर्नुहोस्। निःशुल्क, जुनसुकै बेला।",ar:"لا تعرف من أين تبدأ؟ اتصل بـ 211. مجاني، في أي وقت.",so:"Ma ogtid halka aad ka bilowdo? Wac 211. Bilaash, wakhti kasta.",sw:"Hujui wapi kuanzia? Piga 211. Bure, wakati wowote.",my:"ဘယ်ကစရမှန်းမသိဘူးလား? 211 ခေါ်ပါ။ အခမဲ့၊ အချိန်မရွေး။",zh:"不知从何开始？拨打211。免费，随时。"}, ph:"211", url:"https://211lifeline.org", aurl:"https://211lifeline.org/search.php", hr:"24/7", doc:"None — call or text your ZIP to 898-211", tg:["any"], reach:"national" },
  { id:"988crisis", n:"988 Suicide & Crisis Lifeline", c:"crisis", d:"Call or text 988 anytime. Free, confidential, 24/7. For any emotional crisis — not just suicide.", ph:"988", url:"https://988lifeline.org", hr:"24/7", doc:"None", tg:["any"], reach:"national" },
  { id:"crisisstext", n:"Crisis Text Line", c:"crisis", d:"Text HOME to 741741 to reach a trained crisis counselor. Free, 24/7, confidential.", url:"https://www.crisistextline.org", hr:"24/7", doc:"None", tg:["any"], reach:"national" },
  { id:"strongcrisis", n:"Strong Memorial Psych Emergency", c:"crisis", d:"Walk-in psychiatric emergency room. No appointment needed. Go now if you need to.", ph:"585-275-4501", ad:"300 Crittenden Blvd, Rochester NY 14642", hr:"24/7", doc:"ID if you have it — they'll see you regardless", tg:["any"], town:"rochester", zip:"14642", lat:43.121502, lng:-77.626795, reach:"local" },
  { id:"bhacccrisis", n:"Behavioral Health Access & Crisis Center", c:"crisis", d:"Walk-in crisis center. No appointment. Assessment, stabilization, referrals.", ph:"585-368-3950", ad:"65 Genesee St (St. Mary's Campus), Rochester NY 14611", hr:"Daily 9am-9pm", doc:"None", tg:["any"], town:"rochester", zip:"14611", lat:43.148905, lng:-77.636146, reach:"local" },

  // FOOD
  { id:"snap", n:"SNAP (Food Assistance)", c:"food", xref:["cash"], d:"Monthly funds for groceries on an EBT card. Most families qualify.", inc:130, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", url:"https://mybenefits.ny.gov", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, proof of income, proof of address", tg:["hh"], town:"rochester", zip:"14605", lat:43.168867, lng:-77.618649, reach:"statewide" },
  { id:"wic", n:"WIC (Women, Infants & Children)", c:"food", xref:["childcare","health"], d:"Free healthy food for pregnant moms, new moms, and kids under 5.", inc:185, ph:"585-753-4942", ad:"111 Westfall Rd, Rochester NY 14620", url:"https://www.health.ny.gov/prevention/nutrition/wic/", hr:"M-F 8:30am-5pm", doc:"ID, proof of income, immunization records", tg:["kids","u5","preg"], town:"rochester", zip:"14620", lat:43.11453, lng:-77.619038, reach:"statewide" },
  { id:"foodlink", n:"Foodlink / Food Pantries", c:"food", d:"Free groceries — no paperwork, no income check, no questions asked at most locations.", ph:"585-328-3380", url:"https://foodlinkny.org/find-food/", hr:"Varies by location", doc:"None at most pantries", tg:["any"], reach:"regional" },
  { id:"meals", n:"Free School Meals", c:"food", d:"Every RCSD student gets free breakfast and lunch. No application needed.", ph:"585-262-8100", url:"https://www.rcsdk12.org/departments/food-services", hr:"School hours", doc:"None", tg:["kids","any"], reach:"remote" },
  { id:"market", n:"Rochester Public Market + Double Up", c:"food", d:"Fresh produce. SNAP/EBT accepted. Double Up matches your SNAP on fruits and veggies.", ad:"280 N Union St, Rochester NY 14609", url:"https://www.cityofrochester.gov/publicmarket", hr:"Tue & Thu 6am-1pm, Sat 5am-3pm", doc:"Your EBT card", tg:["any"], town:"rochester", zip:"14609", lat:43.1657, lng:-77.5902, reach:"local" },
  { id:"mow", n:"Meals on Wheels", c:"food", xref:["seniorSvc"], d:"Hot meals delivered to your home if you're 60+ or homebound. No cost.", ph:"585-461-4263", url:"https://www.urmc.rochester.edu/home-care/meals-on-wheels", hr:"Delivered M-F", doc:"None — just call", tg:["sen"], reach:"remote" },
  { id:"trillfood", n:"Trillium Health Food Pantry", c:"food", d:"Walk-in food pantry. No income check, no ID needed.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },
  { id:"housemercy", n:"House of Mercy", c:"food", xref:["clothing","housing"], d:"Food pantry, clothing, shelter, advocacy. No restrictions, no ID required.", ph:"585-546-2580", ad:"285 Ormond St, Rochester NY 14605", url:"https://houseofmercyrochester.org", hr:"Check website", doc:"None", tg:["any"], town:"rochester", zip:"14605", lat:43.164369, lng:-77.605625, reach:"local" },
  { id:"communityplace", n:"Community Place of Greater Rochester", c:"food", xref:["housing","clothing","cash"], d:"Food, rent assistance, clothing, case management. Specific zip codes — call to check.", ph:"585-288-0021", url:"https://communityplace.org", hr:"M-F", doc:"Call to check", tg:["any"], reach:"remote" },

  // UTILITIES
  { id:"heap", n:"HEAP (Heating Help)", c:"utilities", xref:["cash","housing"], d:"Help paying your heating bill. Emergency HEAP can help right away if heat is shut off.", inc:150, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", url:"https://otda.ny.gov/programs/heap/", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, proof of income, utility bill", tg:["hh"], nt:"Emergency HEAP opens each winter and runs until funds are gone.", town:"rochester", zip:"14605", lat:43.168867, lng:-77.618649, reach:"statewide" },
  { id:"herr", n:"Furnace Repair/Replacement (Free)", c:"utilities", d:"If you're 60+ and own your home, you may get free furnace repair or a new furnace.", inc:150, ph:"585-753-6960", ad:"111 Westfall Rd, Rochester NY 14620", hr:"M-F 8am-4pm", doc:"ID, proof of income, proof of homeownership", tg:["sen","hh"], nt:"Limited funding — apply early.", town:"rochester", zip:"14620", lat:43.11453, lng:-77.619038, reach:"local" },
  { id:"rge", n:"RG&E Payment Help", c:"utilities", xref:["cash"], d:"Behind on electric or gas? RG&E has payment plans. Call before they shut you off.", ph:"877-266-3492", url:"https://www.rge.com", hr:"M-F 8am-6pm", doc:"Account number, proof of income", tg:["hh"], reach:"remote" },
  { id:"empower", n:"EmPower NY (Free Home Upgrades)", c:"utilities", xref:["housing"], d:"Free insulation, air sealing, and energy improvements to lower your bills.", inc:200, ph:"585-546-8030", url:"https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program", hr:"M-F 9am-5pm", doc:"Proof of income, utility bill", tg:["hh"], reach:"statewide" },

  // CASH
  { id:"ta", n:"Temporary Assistance (Cash Help)", c:"cash", xref:["housing","utilities","food"], d:"Monthly cash for rent, utilities, and basic needs while you get back on your feet.", inc:100, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", url:"https://mybenefits.ny.gov", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, SSN, proof of income, bank statements, proof of address", tg:["hh"], town:"rochester", zip:"14605", lat:43.168867, lng:-77.618649, reach:"statewide" },
  { id:"eitc", n:"Earned Income Tax Credit", c:"cash", xref:["employment"], d:"If you work, you may get up to $7,430 back — even if you don't owe taxes.", inc:400, ph:"585-258-3500", ad:"255 N Goodman St, Rochester NY 14607", url:"https://www.irs.gov/eitc", hr:"Jan-Apr", doc:"W-2, SSNs, ID", tg:["work","hh"], town:"rochester", zip:"14607", lat:43.158629, lng:-77.585497, reach:"national" },
  { id:"vita", n:"Free Tax Filing (VITA)", c:"cash", xref:["employment"], d:"Free tax prep if your household earns under $67,000.", ph:"211", url:"https://empirejustice.org/cash/", hr:"Jan-Apr, multiple locations", doc:"W-2, SSN cards, ID", tg:["work","any"], reach:"national" },
  { id:"fec", n:"Free Financial Counseling", c:"cash", xref:["housing","legalDebt"], d:"One-on-one help with debt, credit, savings, and budgeting. Free and confidential.", ph:"585-252-7110", url:"https://www.cityofrochester.gov/departments/office-financial-empowerment/", hr:"M-F by appointment", doc:"None", tg:["any"], reach:"remote" },
  { id:"rmapi", n:"RMAPI (Coaching & Mobility)", c:"cash", d:"Free coaching, financial counseling, and help building a path forward.", ph:"585-399-1285", url:"https://rmapiny.org/", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], reach:"remote" },
  { id:"myb", n:"myBenefits.ny.gov (Apply for Many at Once)", c:"cash", xref:["food","health","utilities","childcare","housing"], d:"One application for SNAP, cash, Medicaid, HEAP, and childcare subsidy.", url:"https://mybenefits.ny.gov", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"24/7 online", doc:"ID, SSNs, proof of income, proof of address", tg:["hh","any"], nt:"Covers SNAP, TA, Medicaid, HEAP, and child care. Start here.", reach:"statewide" },

  // HEALTH
  { id:"medicaid", n:"Medicaid (Free Health Insurance)", c:"health", xref:["dental","vision","mental","prescriptions"], d:"Free or very low-cost health insurance. Covers doctors, Rx, hospital, dental, vision, mental health.", inc:138, ph:"585-753-6960", url:"https://nystateofhealth.ny.gov", aurl:"https://nystateofhealth.ny.gov/individual", hr:"M-F 8am-4pm", doc:"ID, SSN, proof of income", tg:["hh"], reach:"statewide" },
  { id:"chip", n:"Child Health Plus", c:"health", xref:["childcare","dental","vision"], d:"Free or low-cost health insurance for children under 19.", inc:400, ph:"800-698-4543", url:"https://nystateofhealth.ny.gov", aurl:"https://nystateofhealth.ny.gov/individual", hr:"M-F 8am-8pm", doc:"Birth certificate, SSN, proof of income", tg:["kids","hh"], reach:"statewide" },
  { id:"trill", n:"Trillium Health (Pay What You Can)", c:"health", d:"Doctors, dentists, counselors, pharmacy — sliding scale. LGBTQ+ healthcare leader including gender-affirming care and PrEP.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None required", tg:["any"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },
  { id:"jordan", n:"Jordan Health Center", c:"health", d:"Primary care, dental, mental health, WIC. Accepts everyone, insured or not.", ph:"585-423-5800", ad:"82 Holland St, Rochester NY 14605", url:"https://www.jordanhealth.org", hr:"M-F 8am-5pm", doc:"None — walk-ins welcome", tg:["any"], town:"rochester", zip:"14605", lat:43.168395, lng:-77.60333, reach:"local" },
  { id:"pp", n:"Planned Parenthood", c:"health", d:"Reproductive health, birth control, STI testing, cancer screening. Sliding scale.", ph:"585-546-2595", ad:"114 University Ave, Rochester NY 14605", url:"https://www.plannedparenthood.org/health-center/new-york/rochester", hr:"M-Sat varies", doc:"None required", tg:["any"], town:"rochester", zip:"14605", lat:43.160487, lng:-77.599929, reach:"local" },

  // DENTAL (NOTE: Trillium appears in health, dental, HIV, prescriptions — intentional for discoverability. Update all 4 entries when info changes.)
  { id:"eastmandental", n:"Eastman Dental Center (URMC)", c:"dental", d:"Full dental services on a sliding scale. Emergency dental, pediatric, orthodontics.", ph:"585-275-5051", ad:"625 Elmwood Ave, Rochester NY 14607", url:"https://www.urmc.rochester.edu/dentistry", hr:"M-F 8am-5pm", doc:"Proof of income for sliding scale", tg:["any"], town:"rochester", zip:"14607", lat:43.124448, lng:-77.622639, reach:"local" },
  { id:"eastmandown", n:"Eastman Dental Downtown", c:"dental", d:"Sliding scale dental. Emergency care, general dentistry, pediatric. Walk-ins for urgent needs.", ph:"585-263-6599", ad:"228 E Main St Suite 106, Rochester NY 14604", hr:"M-F 8am-4pm", doc:"Proof of income", tg:["any"], town:"rochester", zip:"14611", lat:43.150363, lng:-77.635363, reach:"local" },
  { id:"jordandental", n:"Jordan Health (Dental)", c:"dental", d:"Preventive and restorative dental care. Sliding scale — no one turned away for inability to pay.", ph:"585-423-5800", ad:"82 Holland St, Rochester NY 14605", url:"https://www.jordanhealth.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"rochester", zip:"14605", lat:43.168395, lng:-77.60333, reach:"local" },
  { id:"trilldental", n:"Trillium Health (Dental)", c:"dental", d:"Dental care on a sliding scale. Accepts Medicaid and uninsured patients.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None required", tg:["any"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },

  // PRESCRIPTIONS
  { id:"nyrxcard", n:"New York Rx Card (Free Discount Card)", c:"prescriptions", d:"Free prescription discount card. Up to 80% off. No application, no restrictions.", url:"https://newyorkrxcard.com", hr:"Use anytime", doc:"None — download or pick up at CVS or Wegmans", tg:["any"], reach:"statewide" },
  { id:"epic", n:"EPIC (Senior Prescription Help)", c:"prescriptions", d:"NYS program that helps seniors 65+ pay for prescriptions. Saves an average of 90% on medicines.", ph:"800-332-3742", url:"https://www.health.ny.gov/health_care/epic/", hr:"M-F", doc:"Proof of age, income", tg:["sen"], reach:"statewide" },
  { id:"needymeds", n:"NeedyMeds (Find Free Medications)", c:"prescriptions", d:"Search by drug name to find patient assistance programs that provide your medications free.", url:"https://www.needymeds.org", hr:"24/7 online", doc:"Varies by program", tg:["any"], reach:"national" },
  { id:"rxoutreach", n:"Rx Outreach (Low-Cost Mail Order)", c:"prescriptions", d:"Nonprofit mail-order pharmacy. Low-cost generics with free home delivery. No insurance required.", ph:"888-796-1234", url:"https://rxoutreach.org", hr:"M-F 7am-6pm CT", doc:"Prescription from your doctor", tg:["any"], reach:"national" },
  { id:"trillrx", n:"Trillium Health Pharmacy", c:"prescriptions", d:"On-site pharmacy with sliding scale pricing. Helps find patient assistance programs.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"Your prescriptions", tg:["any"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },

  // MENTAL HEALTH
  { id:"988", n:"988 Suicide & Crisis Lifeline", c:"mental", d:"Call or text 988 anytime. Free, confidential, 24/7. Any emotional crisis counts.", tr:{es:"Llame o envíe mensaje al 988. Gratis, confidencial, 24/7.",ne:"988 मा कल वा टेक्स्ट गर्नुहोस्। निःशुल्क, गोप्य, 24/7।",ar:"اتصل أو أرسل رسالة نصية إلى 988. مجاني وسري، 24/7.",so:"Wac ama qoraal u dir 988. Bilaash, sir ah, 24/7.",sw:"Piga au tuma ujumbe 988. Bure, siri, 24/7.",my:"988 သို့ခေါ်ဆိုပါ သို့ စာပို့ပါ။ အခမဲ့၊ လျှို့ဝှက်၊ ၂၄/၇။",zh:"拨打或发短信988。免费、保密、24/7。"}, ph:"988", url:"https://988lifeline.org", hr:"24/7", doc:"None", tg:["any"], reach:"national" },
  { id:"strong", n:"Strong Memorial Psych Emergency", c:"mental", d:"Walk-in psychiatric emergency room. No appointment needed.", ph:"585-275-4501", ad:"300 Crittenden Blvd, Rochester NY 14642", url:"https://www.urmc.rochester.edu/mental-health-wellness/", hr:"24/7", doc:"ID if you have it", tg:["any"], town:"rochester", zip:"14642", lat:43.121502, lng:-77.626795, reach:"local" },
  { id:"bhacc", n:"Behavioral Health Access & Crisis Center", c:"mental", d:"Walk-in crisis center. No appointment. Assessment, stabilization, referrals.", ph:"585-368-3950", ad:"65 Genesee St (St. Mary's Campus), Rochester NY 14611", url:"https://www.rochesterregional.org", hr:"Daily 9am-9pm", doc:"None", tg:["any"], town:"rochester", zip:"14611", lat:43.148905, lng:-77.636146, reach:"local" },
  { id:"mobilecrt", n:"Monroe County Mobile Crisis Team", c:"mental", d:"Crisis team comes to YOU. For adults and adolescents. Licensed clinicians.", ph:"585-275-5151", url:"https://www.urmc.rochester.edu/mental-health-wellness/emergency-services/monroe-mobile-crisis-team", hr:"M-F 7am-8pm, Weekends 10am-6:30pm", doc:"None — just call", tg:["any"], reach:"remote" },
  { id:"nami", n:"NAMI Rochester", c:"mental", d:"Free support groups, education, advocacy for people affected by mental illness.", ph:"585-423-1500", url:"https://namiroc.org", hr:"See website for group schedule", doc:"None", tg:["any"], nt:"NAMI National Helpline: 1-800-950-6264 (M-F 10am-10pm ET)", reach:"remote" },
  { id:"mha", n:"Mental Health Association of Rochester", c:"mental", d:"Peer support drop-in center. Free, no referral needed, confidential.", ph:"585-325-3145", ad:"274 N Goodman St, Suite D103, Rochester NY 14607", url:"https://mharochester.org", hr:"See website for drop-in hours", doc:"None", tg:["any"], town:"rochester", zip:"14607", lat:43.158424, lng:-77.58544, reach:"local" },
  { id:"crisistext", n:"Crisis Text Line", c:"mental", d:"Text HOME to 741741 to reach a trained crisis counselor. Free, 24/7, confidential.", url:"https://www.crisistextline.org", hr:"24/7", doc:"None", tg:["any"], nt:"Text HOME to 741741 from any phone.", reach:"national" },
  { id:"villa", n:"Villa of Hope (Mental Health)", c:"mental", d:"Outpatient mental health clinic for youth and adults. Therapy, psychiatry, and support services.", ph:"585-865-1550", url:"https://www.villaofhope.org", hr:"M-F", doc:"Call for intake info", tg:["any"], ad:"3300 Dewey Ave, Rochester NY 14616", town:"rochester", zip:"14616", lat:43.2277, lng:-77.6445, reach:"local" },
  { id:"genesee", n:"Genesee Mental Health Center", c:"mental", d:"Sliding scale outpatient mental health. Therapy, medication management, groups.", ph:"585-922-7770", ad:"224 Alexander St, Rochester NY 14607", url:"https://www.rochesterregional.org", hr:"M-F", doc:"Call for intake", tg:["any"], town:"rochester", zip:"14607", lat:43.149741, lng:-77.597085, reach:"local" },
  { id:"compeer", n:"Compeer Rochester", c:"mental", d:"Free mentoring and friendship for people with mental health challenges.", ph:"585-546-8280", url:"https://www.compeerrochester.org", hr:"M-F 8:30am-4:30pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"openpath", n:"Open Path Collective (Affordable Therapy)", c:"mental", d:"Affordable therapy: $30-$80 per session. Network of licensed therapists. No insurance needed.", url:"https://openpathcollective.org", hr:"Varies by therapist", doc:"None", tg:["any"], reach:"remote" },
  { id:"hbci", n:"Home-Based Crisis Intervention (Youth)", c:"mental", d:"Free 24-hour crisis intervention for families with children at risk of psychiatric hospitalization.", ph:"585-922-8040", url:"https://www.rochesterregional.org", hr:"24/7", doc:"Referral from child's therapist", tg:["kids"], reach:"remote" },

  // GRIEF & LOSS
  { id:"hospicegrief", n:"Hospice Bereavement Services", c:"grief", d:"Free grief support groups and one-on-one counseling. Open to anyone.", ph:"585-922-1940", url:"https://www.rochesterregional.org/services/hospice-care/our-services/bereavement-services", hr:"See website for group schedule", doc:"None", tg:["any"], reach:"remote" },
  { id:"urmcgrief", n:"URMC Hospice Bereavement", c:"grief", d:"Free grief counseling, support groups, and Camp Heartstrings for grieving children.", ph:"585-274-4069", url:"https://www.urmc.rochester.edu/home-care/hospice-care/bereavement", hr:"See website", doc:"None", tg:["any"], reach:"remote" },
  { id:"namigrief", n:"NAMI Suicide Loss Bereavement Group", c:"grief", d:"Support group for people who have lost someone to suicide. In-person and virtual options.", ph:"585-423-1500", url:"https://namiroc.org", hr:"1st and 3rd Mondays", doc:"None", tg:["any"], reach:"remote" },
  { id:"compassfriends", n:"Compassionate Friends (Child Loss)", c:"grief", d:"Support for families after the death of a child at any age. Rochester chapter meets twice monthly.", ph:"607-329-5072", ad:"First Unitarian Church, 220 S Winton Rd, Rochester NY 14620", hr:"2nd & 4th Tuesdays 7-8:30pm", doc:"None", tg:["any"], town:"rochester", zip:"14620", lat:43.140884, lng:-77.55771, reach:"local" },
  { id:"griefshare", n:"GriefShare (Faith-Based Groups)", c:"grief", d:"Weekly grief recovery support groups at churches across Rochester. Welcoming to all.", url:"https://find.griefshare.org/countries/us/states/ny/cities/rochester", hr:"Varies by location", doc:"None", tg:["any"], reach:"remote" },

  // ADDICTION
  { id:"ncadd", n:"NCADD-RA (Addiction Help)", c:"addiction", d:"Information, peer support, recovery coaching, referrals to treatment. Judgment-free.", ph:"585-719-3480", url:"https://ncadd-ra.org", hr:"M-F 8:30am-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"huther", n:"Huther Doyle Memorial Institute", c:"addiction", d:"Outpatient addiction treatment, MAT (Suboxone/Vivitrol), same-day appointments. Sliding scale.", ph:"585-325-5100", ad:"360 East Ave, Rochester NY 14604", url:"https://hutherdoyle.com", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"rochester", zip:"14604", lat:43.155185, lng:-77.594699, reach:"local" },
  { id:"rocovery", n:"ROCovery Fitness", c:"addiction", d:"Free fitness-based recovery support. Exercise classes, peer support, sober community.", ph:"585-484-0234", ad:"1035 Dewey Ave, Rochester NY 14613", url:"https://rocoveryfitness.org", hr:"See schedule online", doc:"None", tg:["any"], town:"rochester", zip:"14609", lat:43.166173, lng:-77.590453, reach:"local" },
  { id:"na", n:"Narcotics Anonymous Rochester", c:"addiction", d:"Free meetings across Rochester. No signup, no cost, just show up.", ph:"585-325-0186", url:"https://nny-na.org", hr:"Daily meetings", doc:"None", tg:["any"], reach:"remote" },
  { id:"aa", n:"Alcoholics Anonymous Rochester", c:"addiction", d:"Free meetings every day across Monroe County.", ph:"585-232-6720", url:"https://rochesteraa.org", hr:"Daily", doc:"None", tg:["any"], reach:"remote" },
  { id:"depaul", n:"DePaul (Mental Health + Addiction Housing)", c:"addiction", xref:["housing","mental"], d:"Residential treatment, supportive housing, and community services.", ph:"585-426-8000", url:"https://depaul.org", hr:"Call for info", doc:"Varies", tg:["any"], ad:"1931 Buffalo Rd, Rochester NY 14624", town:"rochester", zip:"14624", lat:43.14895, lng:-77.70409, reach:"local" },
  { id:"easthouse", n:"East House", c:"addiction", d:"Substance abuse treatment, residential programs, community reintegration.", ph:"585-238-4800", url:"https://easthouse.org", hr:"Call for info", doc:"Varies", tg:["any"], ad:"259 Monroe Ave Suite 200, Rochester NY 14607", town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },
  { id:"unitycd", n:"Unity Hospital Chemical Dependency", c:"addiction", d:"Inpatient and outpatient addiction treatment.", ph:"585-368-3950", url:"https://rochesterregional.org", hr:"Call for info", doc:"Varies", tg:["any"], reach:"remote" },
  { id:"strongrec", n:"Strong Recovery (URMC)", c:"addiction", d:"Comprehensive addiction medicine. Outpatient, intensive outpatient, MAT, psychiatry.", ph:"585-275-1550", url:"https://www.urmc.rochester.edu/conditions-and-treatments/addiction", hr:"M-F", doc:"Call for info", tg:["any"], reach:"remote" },

  // HARM REDUCTION / OVERDOSE PREVENTION
  { id:"hopedealers", n:"Hope Dealers BTC", c:"addiction", d:"Peer recovery outreach. Free Narcan, fentanyl test strips, hot coffee, bagged lunches, support meetings, hopeline. Judgment-free. Sunday street outreach in Rochester.", ph:"585-633-8690", url:"https://www.hopedealersbtc.com", hr:"Sunday outreach + hopeline", doc:"None", tg:["any","harmReduction"], reach:"local", town:"rochester" },
  { id:"trilliumhr", n:"Trillium Health Harm Reduction", c:"addiction", xref:["hivsti","medical"], d:"Free syringe exchange, Narcan, fentanyl/xylazine test strips, HIV/Hep C testing, linkage to care. No ID required.", ph:"585-210-4146", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://www.trilliumhealth.org", hr:"Call for hours", doc:"None", tg:["any","harmReduction"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },
  { id:"mcdohopioid", n:"Monroe County Opioid Response Helpline", c:"addiction", d:"24-hour hotline connecting Monroe County residents to free Narcan, fentanyl test strips, family support, and crisis services. Run by Monroe County Department of Public Health.", ph:"585-753-5300", url:"https://www.monroecounty.gov/opioid-narcan", hr:"24/7", doc:"None", tg:["any","harmReduction"], reach:"local" },
  { id:"naloxbox", n:"Nalox Boxes (Free Public Narcan)", c:"addiction", d:"Over 630 publicly accessible boxes across Monroe County stocked with free Narcan. No ID, no questions, take what you need. Map and locations on the county website.", url:"https://www.monroecounty.gov/opioid-narcan", hr:"24/7 public access", doc:"None", tg:["any","harmReduction"], reach:"local" },
  { id:"oasashopeline", n:"NYS OASAS HOPEline (Substance Use)", c:"addiction", d:"Free and confidential 24-hour hotline for substance use, addiction, and problem gambling. Multilingual. Referral to local treatment and harm-reduction services.", ph:"877-846-7369", url:"https://oasas.ny.gov/hopeline", hr:"24/7 · Text HOPENY to 467369", doc:"None", tg:["any","harmReduction"], reach:"remote" },
  { id:"samhsa", n:"SAMHSA National Helpline", c:"addiction", d:"Free, confidential, 24/7 federal helpline for mental and substance-use disorders. Information and referral in English and Spanish. No treatment fees.", ph:"800-662-4357", url:"https://www.samhsa.gov/find-help/national-helpline", hr:"24/7", doc:"None", tg:["any","harmReduction"], reach:"national" },
  { id:"neverusealone", n:"Never Use Alone", c:"addiction", d:"Free, anonymous overdose prevention hotline. Stays on the line while you use. If you stop responding, they call 911 with your location. US-based volunteers.", ph:"800-484-3731", url:"https://neverusealone.com", hr:"24/7", doc:"None", tg:["any","harmReduction"], reach:"national" },

  // HOUSING
  { id:"s8", n:"Section 8 Housing Voucher", c:"housing", d:"Voucher that pays most of your rent directly to your landlord.", inc:50, ph:"585-697-6000", ad:"675 W Main St, Rochester NY 14611", url:"https://www.rochesterhousing.org", hr:"M-F 8am-4:30pm", doc:"ID, SSN cards, proof of income, birth certificates", tg:["hh"], nt:"Waitlist opens periodically. Check website or call.", town:"rochester", zip:"14611", lat:43.151534, lng:-77.630466, reach:"local" },
  { id:"ph", n:"Public Housing", c:"housing", d:"Apartments where rent is ~30% of your income.", inc:80, ph:"585-697-6000", ad:"675 W Main St, Rochester NY 14611", url:"https://www.rochesterhousing.org", hr:"M-F 8am-4:30pm", doc:"ID, SSN cards, proof of income", tg:["hh"], town:"rochester", zip:"14611", lat:43.151534, lng:-77.630466, reach:"local" },
  { id:"shelter", n:"Emergency Shelter (Homeless)", c:"housing", d:"If you have nowhere to sleep tonight, call for emergency shelter.", tr:{es:"Si no tiene dónde dormir esta noche, llame para refugio de emergencia.",ne:"आज राति सुत्ने ठाउँ छैन भने, आपतकालीन आश्रयको लागि कल गर्नुहोस्।",ar:"إذا لم يكن لديك مكان للنوم الليلة، اتصل للحصول على مأوى طارئ.",so:"Haddii aadan haysan meel aad caawa seexato, wac si aad u hesho hoy degdeg ah.",sw:"Kama huna mahali pa kulala usiku huu, piga simu kupata makazi ya dharura.",my:"ဒီညအိပ်စရာမရှိရင် အရေးပေါ်ခိုလှုံရာအတွက် ဖုန်းခေါ်ပါ။",zh:"如果今晚无处可睡，请拨打电话寻求紧急庇护。"}, ph:"585-753-2780", ad:"111 Westfall Rd, Rochester NY 14620", url:"https://www.monroecounty.gov/hs", hr:"M-F 8am-3pm", doc:"ID if you have it", tg:["any"], nt:"After 3pm / weekends: 585-442-1742", town:"rochester", zip:"14620", lat:43.11453, lng:-77.619038, reach:"local" },
  { id:"prov", n:"Providence Housing (Supportive)", c:"housing", d:"Permanent supportive housing for people with disabilities, veterans, and families.", ph:"585-529-9555", ad:"1150 Buffalo Rd, Rochester NY 14624", url:"https://providencehousing.org", hr:"M-F 8:30am-5pm", doc:"Coordinated Entry through shelter", tg:["dis","vet"], town:"rochester", zip:"14624", lat:43.150005, lng:-77.68084, reach:"local" },
  { id:"hab", n:"Habitat for Humanity", c:"housing", d:"Help building and buying your own affordable home. Sweat equity = home.", inc:80, ph:"585-546-1470", url:"https://www.rochesterhabitat.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["hh"], reach:"remote" },
  { id:"nw", n:"NeighborWorks (Homebuyer Help)", c:"housing", d:"Classes and coaching for first-time homebuyers. Home repair loans too.", ph:"585-325-4170", url:"https://www.nwrochester.org", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], reach:"remote" },
  { id:"tenant", n:"Tenant Defense Project", c:"housing", xref:["legalEviction"], d:"Free lawyer if you're facing eviction.", ph:"585-504-6195", url:"https://www.tenantdefense.org", hr:"M-F 9am-5pm", doc:"Eviction papers if you have them", tg:["any"], reach:"remote" },
  { id:"fpgroc", n:"Family Promise (Homeless Families)", c:"housing", d:"Housing and support for families with children experiencing homelessness.", ph:"585-420-7610", url:"https://fpgroc.org", hr:"Call for info", doc:"Varies", tg:["kids","any"], reach:"remote" },
  { id:"housingcouncil", n:"Housing Council at PathStone", c:"housing", xref:["legalEviction","legalDiscrim"], d:"Tenant rights, landlord disputes, housing discrimination, foreclosure prevention. Free counseling.", ph:"585-546-3700", url:"https://www.thehousingcouncil.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"mchealthhousing", n:"Monroe County Housing Complaints", c:"housing", d:"Report unsafe housing conditions, bed bugs, no heat, code violations. Anonymous complaints accepted.", ph:"585-753-5064", url:"https://www.monroecounty.gov/health", hr:"M-F 8:30am-4:30pm", doc:"None — can report anonymously", tg:["any"], reach:"remote" },
  { id:"mailsvc", n:"Open Door Mission (Mail Services)", c:"housing", xref:["documents","reentry","employment"], d:"If you're homeless, Open Door Mission can provide a mailing address for benefits, jobs, and mail.", ph:"585-454-6696", ad:"156 N Plymouth Ave, Rochester NY 14608", url:"https://opendoormission.com", hr:"See website", doc:"None", tg:["any"], town:"rochester", zip:"14608", lat:43.157067, lng:-77.617229, reach:"local" },

  // CHILDCARE
  { id:"ccsub", n:"Child Care Subsidy", c:"childcare", xref:["cash","employment"], d:"Help paying for daycare or after-school care so you can work or go to school.", inc:200, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, proof of income/work/school, provider info", tg:["kids","work","hh"], town:"rochester", zip:"14605", lat:43.168867, lng:-77.618649, reach:"local" },
  { id:"hs", n:"Head Start / Free Pre-K", c:"childcare", d:"Free preschool for children 3-4 from low-income families.", inc:100, ph:"585-271-0778", url:"https://www.abvi.org/education/head-start/", hr:"School year M-F", doc:"Birth certificate, proof of income, immunizations", tg:["kids","u5"], reach:"remote" },
  { id:"healthyfam", n:"Healthy Families Monroe County", c:"childcare", d:"Free home visiting for new and expectant parents.", ph:"585-753-5437", hr:"By appointment", doc:"None", tg:["preg","u5","any"], reach:"remote" },
  { id:"pat", n:"Parents as Teachers", c:"childcare", d:"Free home visiting for families with children birth to 5.", ph:"585-271-0778", hr:"By appointment", doc:"None", tg:["u5","kids","any"], reach:"remote" },
  { id:"lll", n:"La Leche League Rochester West", c:"childcare", d:"Free breastfeeding support. Zoom meetings 3rd Saturday of each month at 10:30am.", ph:"585-621-1403", url:"https://lllusa.org", hr:"3rd Sat 10:30am (Zoom)", doc:"None", tg:["preg","u5","any"], reach:"remote" },
  { id:"momshm", n:"Moms Helping Moms Foundation", c:"childcare", d:"Free diapers, formula, wipes, baby essentials.", url:"https://momshelpingmoms.org", hr:"See website/Facebook", doc:"None", tg:["u5","kids","any"], reach:"remote" },
  { id:"frc", n:"Family Resource Centers (RCSD)", c:"childcare", xref:["food","clothing","housing"], d:"Every Rochester City School has one. Help with food, clothing, housing, school supplies.", ph:"585-262-8100", url:"https://www.rcsdk12.org", hr:"School hours", doc:"None", tg:["kids","any"], reach:"remote" },
  { id:"nfp", n:"Nurse-Family Partnership", c:"childcare", d:"Free home visits from a registered nurse throughout your pregnancy and baby's first 2 years. First-time moms only.", ph:"585-753-5437", url:"https://www.nursefamilypartnership.org", hr:"By appointment", doc:"None — just be a first-time mom", tg:["preg","u5"], nt:"You can enroll as early in your pregnancy as possible. The earlier you start, the more visits you get.", reach:"remote" },

  // EMPLOYMENT
  { id:"rw", n:"RochesterWorks! (Job Center)", c:"employment", d:"Free job help. Résumé writing, interview practice, listings, training.", ph:"585-258-3500", ad:"100 College Ave Suite 200, Rochester NY 14607", url:"https://rochesterworks.org", hr:"M-F 8am-5pm", doc:"ID", tg:["any"], town:"rochester", zip:"14607", lat:43.158629, lng:-77.585497, reach:"local" },
  { id:"ps", n:"PathStone (Jobs & Training)", c:"employment", d:"Job training, farmworker help, small business. Bilingual.", ph:"585-340-3300", url:"https://www.pathstone.org", hr:"M-F 8:30am-5pm", doc:"Varies", tg:["any"], reach:"remote" },
  { id:"gw", n:"Goodwill (Career Help)", c:"employment", d:"Career coaching, job readiness, youth employment.", ph:"585-922-1250", url:"https://goodwillfingerlakes.org", hr:"M-F 8:30am-5pm", doc:"ID", tg:["any"], reach:"remote" },
  { id:"syep", n:"Summer Youth Employment (SYEP)", c:"employment", d:"Paid summer jobs for youth ages 14-20. Six weeks of work experience. Apply through RochesterWorks.", ph:"585-258-3500", url:"https://rocsummeryouth.com", hr:"Applications open Feb each year", doc:"ID, proof of age, proof of address", tg:["kids","any"], nt:"Positions fill fast. Apply as soon as applications open in February.", reach:"remote" },
  { id:"rocjob", n:"ROC Your Job (After School Jobs)", c:"employment", d:"Paid after-school work for teens during the school year. Ages 14-24. Up to 30 hours of job readiness training.", ph:"585-258-3500", url:"https://rochesterworks.org/services/after-school-youth-employment-program-roc-your-job/", hr:"Oct-June each year", doc:"ID, proof of age, proof of income", tg:["kids","any"], reach:"remote" },
  { id:"accesvr", n:"ACCES-VR (Vocational Rehab)", c:"employment", xref:["disabilitySvc"], d:"Free job training, coaching, and placement for people with any disability. They pay for training, tools, even work clothes.", ph:"585-238-2900", ad:"109 S Union St, Rochester NY 14607", url:"https://www.acces.nysed.gov/vr", hr:"M-F 8:30am-4:30pm", doc:"Disability documentation, medical records", tg:["dis","any"], nt:"Covers physical, mental, learning, and developmental disabilities. They can pay for college courses, CDL training, certifications.", town:"rochester", zip:"14607", lat:43.150715, lng:-77.599579, reach:"local" },
  { id:"dfs", n:"Dress for Success Rochester", c:"employment", xref:["clothing"], d:"Free professional clothing for women who have a job interview. Suits, shoes, accessories — everything you need to walk in confident.", ph:"585-321-6808", url:"https://rochester.dressforsuccess.org", hr:"By appointment", doc:"Proof of upcoming job interview", tg:["any"], reach:"remote" },
  { id:"sbdc", n:"Small Business Development Center (SBDC)", c:"employment", d:"Free one-on-one help starting or growing a small business. Business plans, funding, marketing.", ph:"585-232-7310", url:"https://www.sbdcbrockport.org/", hr:"M-F 9am-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"hillside", n:"Hillside Work-Scholarship Connection", c:"employment", d:"Dropout prevention + job placement for at-risk youth in Rochester schools. Year-round mentoring and paid work.", ph:"585-256-7500", url:"https://www.hillside.com/services/youth-development/hillside-work-scholarship-connection/", hr:"Through participating schools", doc:"Must be enrolled in a partner school", tg:["kids"], reach:"remote" },
  { id:"reocjobs", n:"REOC (Free Job Training)", c:"employment", d:"TUITION-FREE career training: CDL truck driving, healthcare, IT, culinary arts, HVAC. Earn certifications that lead to real jobs.", ph:"585-232-2730", ad:"161 Chestnut St, Rochester NY 14604", url:"https://www.brockport.edu/reoc/", hr:"M-F", doc:"Proof of income for eligibility", tg:["any"], nt:"Same as REOC in education — listed here because people looking for jobs might not think to look under education.", town:"rochester", zip:"14604", lat:43.153845, lng:-77.603115, reach:"local" },

  // LEGAL
  { id:"la", n:"Legal Aid Society", c:"legal", xref:["legalEviction","legalBenefits","legalImmigration"], d:"Free lawyers for low-income residents. Eviction, benefits, family law, immigration.", inc:200, ph:"585-232-4090", ad:"1 W Main St Suite 800, Rochester NY 14614", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"], town:"rochester", zip:"14614", lat:43.155657, lng:-77.612519, reach:"local" },
  { id:"lawny", n:"LawNY (Free Legal Services)", c:"legal", xref:["housing","disabilitySvc","legalEviction","legalBenefits"], d:"Free civil legal help. Housing, benefits, family, disability rights.", ph:"585-295-5700", url:"https://www.lawny.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"], reach:"remote" },
  { id:"vlsp", n:"JustCause Legal Clinics (Free)", c:"legal", xref:["legalDebt","legalImmigration"], d:"Free legal clinics: family law, bankruptcy, immigration.", ph:"585-232-3051", url:"https://www.justcauseny.org", hr:"By appointment", doc:"Proof of income", tg:["any"], reach:"remote" },
  { id:"roc311", n:"Rochester 311 (City Services)", c:"legal", d:"Pothole? Streetlight out? Trash not picked up? City 311 handles it.", ph:"311", url:"https://www.cityofrochester.gov/contact-us", hr:"M-F business hours", doc:"None", tg:["any"], reach:"regional" },
  { id:"citycouncil", n:"Rochester City Council (Constituent Help)", c:"legal", d:"Your City Council member can help you navigate city government and fix neighborhood problems.", ph:"585-428-7538", url:"https://www.cityofrochester.gov/departments/city-council", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"mcleg", n:"Monroe County Legislature", c:"legal", d:"Your county legislator can help with county services and DSS issues.", ph:"585-753-1950", url:"https://www.monroecounty.gov/legislature", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"voterreg", n:"Monroe County Board of Elections", c:"legal", d:"Register to vote, check registration, find your polling place, get absentee ballot.", ph:"585-753-1550", url:"https://www.monroecounty.gov/elections", hr:"M-F 9am-5pm", doc:"None to register — just need address", tg:["any"], reach:"remote" },
  { id:"metrojustice", n:"Metro Justice", c:"legal", d:"Community organizing for economic and racial justice. Housing rights, utility justice, workers' rights.", url:"https://www.metrojustice.org", hr:"See website", doc:"None", tg:["any"], reach:"remote" },

  // SENIOR
  { id:"ofa", n:"Office for the Aging", c:"seniorSvc", d:"Help for 60+. Meals, transportation, Medicare help, caregiver support. Start here if you don't know what's available.", ph:"585-753-6280", ad:"435 E Henrietta Rd, Rochester NY 14620", url:"https://www.monroecounty.gov/aging", hr:"M-F 8am-4pm", doc:"Proof of age", tg:["sen"], town:"rochester", zip:"14620", lat:43.11453, lng:-77.619038, reach:"local" },
  { id:"life", n:"Lifespan (Senior Advocacy)", c:"seniorSvc", d:"Elder abuse prevention, Medicare counseling, nursing home advocacy.", ph:"585-244-8400", url:"https://www.lifespan-roch.org", hr:"M-F 8am-5pm", doc:"None", tg:["sen"], reach:"remote" },
  { id:"safejrny", n:"Safe Journey (Elder Abuse)", c:"seniorSvc", d:"Help for seniors experiencing physical, emotional, or financial abuse.", ph:"585-244-8400", url:"https://lifespan-roch.org", hr:"M-F 8am-5pm", doc:"None", tg:["sen"], reach:"remote" },
  { id:"hiicap", n:"HIICAP (Free Medicare Counseling)", c:"seniorSvc", d:"Confused by Medicare? Free counselors explain your options — Medicare, Medicaid, supplemental plans, Part D. No sales, no agenda.", ph:"585-244-8400", url:"https://www.lifespan-roch.org/medicare", hr:"M-F by appointment", doc:"Your Medicare card, list of medications", tg:["sen"], nt:"They also help with Medicare Savings Programs that can lower your costs.", reach:"remote" },
  { id:"seniorfarm", n:"Senior Farmers Market Nutrition Program", c:"seniorSvc", xref:["food"], d:"Free coupons for fresh fruits and vegetables at farmers markets. For seniors 60+ with low income.", ph:"585-753-6280", url:"https://agriculture.ny.gov/farming/senior-farmers-market-nutrition-program", hr:"Summer season", doc:"Proof of age, proof of income", tg:["sen"], reach:"statewide" },
  { id:"seniorcenters", n:"City R-Centers (Senior Programs)", c:"seniorSvc", d:"Free senior programs at recreation centers across Rochester. Exercise, meals, socializing, games, trips.", ph:"311", url:"https://www.cityofrochester.gov", hr:"Varies by location", doc:"None", tg:["sen"], reach:"regional" },
  { id:"ramp", n:"Eldersource (Home Modifications)", c:"seniorSvc", d:"Free or low-cost ramps, grab bars, stair lifts, and home repairs to help seniors stay in their homes safely.", ph:"585-325-2800", url:"https://eldersource.org", hr:"M-F", doc:"Proof of age, proof of income", tg:["sen"], nt:"Also helps with moving assistance and hoarding support.", reach:"remote" },
  { id:"eisep", n:"EISEP (In-Home Help for Seniors)", c:"seniorSvc", d:"Free in-home help for seniors 60+ who aren't on Medicaid. Personal care, housekeeping, case management, respite.", ph:"585-753-6280", url:"https://www.monroecounty.gov/aging", hr:"M-F", doc:"Proof of age, proof of income", tg:["sen"], nt:"For seniors who need help at home but don't qualify for Medicaid. Sliding scale.", reach:"remote" },

  // YOUTH
  { id:"te", n:"Teen Empowerment", c:"youth", d:"For ages 14-21. Leadership, paid jobs, community organizing, safe space.", ph:"585-445-5380", ad:"1298 Dewey Ave, Rochester NY 14613", url:"https://teenempowerment.org", hr:"After school", doc:"None", tg:["kids","any"], town:"rochester", zip:"14613", lat:43.190112, lng:-77.638805, reach:"local" },
  { id:"yb", n:"Rochester Youth Bureau", c:"youth", d:"Connects young people to programs and services across Monroe County.", ph:"585-753-6280", url:"https://www.monroecounty.gov/hs-youth", hr:"M-F 8am-4pm", doc:"None", tg:["kids","any"], reach:"remote" },
  { id:"cfy", n:"Center for Youth (Runaway/Homeless Youth)", c:"youth", d:"24-hour hotline and emergency shelter for youth ages 12-17. Counseling, housing, education support.", ph:"585-271-7670", ad:"905 Monroe Ave, Rochester NY 14620", url:"https://www.centerforyouth.net", hr:"24/7 hotline", doc:"None", tg:["kids","any"], town:"rochester", zip:"14620", lat:43.141398, lng:-77.584796, reach:"local" },
  { id:"bgcroc", n:"Boys & Girls Club of Rochester", c:"youth", d:"After-school programs, sports, arts, tutoring, leadership. Safe space for kids ages 6-18. Multiple locations.", ph:"585-328-0990", url:"https://www.bgcrochester.org", hr:"After school + summer", doc:"None", tg:["kids","any"], reach:"remote" },
  { id:"rcentersyouth", n:"City R-Centers (Youth Programs)", c:"youth", d:"Free after-school and summer programs at recreation centers across Rochester. Sports, homework help, arts, open gym.", ph:"311", url:"https://www.cityofrochester.gov", hr:"After school + weekends", doc:"None", tg:["kids","any"], reach:"regional" },
  { id:"bbbs", n:"Big Brothers Big Sisters of Greater Rochester", c:"youth", d:"Free one-to-one mentoring. Every child matched with a caring adult volunteer. Ages 6-18.", ph:"585-442-2250", ad:"1 S Washington St Suite 405, Rochester NY 14614", url:"https://www.beabig.org", hr:"M-F 8:30am-5pm", doc:"None to apply", tg:["kids","any"], zip:"14614", lat:43.1558, lng:-77.6107, reach:"local" },
  { id:"ymcayouth", n:"YMCA of Greater Rochester (Youth)", c:"youth", d:"Youth sports, swim lessons, day camps, teen programs. Financial assistance available — no one turned away.", ph:"585-546-5500", url:"https://rochesterymca.org", hr:"Varies by branch", doc:"None — ask about financial assistance", tg:["kids","any"], reach:"remote" },
  { id:"villaofhopeyouth", n:"Villa of Hope (Youth Services)", c:"youth", d:"Residential treatment, education, mental health, and support for at-risk youth.", ph:"585-865-1550", url:"https://www.villaofhope.org", hr:"M-F", doc:"Referral needed", tg:["kids"], ad:"3300 Dewey Ave, Rochester NY 14616", town:"rochester", zip:"14616", lat:43.2277, lng:-77.6445, reach:"local" },
  { id:"rcamps", n:"R-Camps (Free Summer Camp)", c:"youth", d:"City of Rochester free summer day camps. Sports, arts, field trips, lunch included.", url:"https://www.cityofrochester.gov/departments/department-recreation-and-human-services-drhs/r-camps-summer-programs", hr:"Summer registration opens spring", doc:"None", tg:["kids","any"], reach:"remote" },
  { id:"l2e", n:"Learn2Earn (Center for Youth)", c:"youth", d:"Workforce development for older teens. Job readiness, paid internships, career exploration.", ph:"585-473-2464", url:"https://www.centerforyouth.net", hr:"M-F", doc:"None", tg:["kids","any"], reach:"remote" },

  // DOMESTIC VIOLENCE
  { id:"willow", n:"Willow Center (Domestic Violence)", c:"domesticSvc", d:"24-hour hotline. Shelter. Counseling. Legal advocacy. Safety planning. You are not alone.", tr:{es:"Línea de ayuda 24 horas. Refugio. Consejería. No estás sola.",ne:"२४ घण्टे हटलाइन। आश्रय। परामर्श। तपाईं एक्लो हुनुहुन्न।",ar:"خط مساعدة 24 ساعة. مأوى. استشارة. لست وحدك.",so:"Khadka caawinta 24 saac. Hoy. Lataliye. Keligaa ma tihid.",sw:"Simu ya msaada masaa 24. Makazi. Ushauri. Huko peke yako.",my:"၂၄နာရီဖုန်းလိုင်း။ ခိုလှုံရာ။ အကြံပေး။ မင်းတစ်ယောက်တည်းမဟုတ်ဘူး။",zh:"24小时热线。庇护所。咨询。你不是一个人。"}, ph:"585-222-7233", url:"https://www.willowcenterny.org", hr:"24/7", doc:"Nothing — just call", tg:["dom","any"], reach:"remote" },
  { id:"biv", n:"Child Advocacy Center of Greater Rochester (formerly Bivona)", c:"domesticSvc", d:"One-stop for child abuse victims. Forensic interviews, therapy, medical exams, family advocacy.", ph:"585-935-7800", ad:"1 Mt. Hope Ave, Rochester NY 14620", url:"https://cacgroc.org", hr:"M-F 8:30am-5pm", doc:"None", tg:["kids"], zip:"14620", lat:43.148673, lng:-77.606545, reach:"local" },
  { id:"restore", n:"RESTORE Sexual Assault Services", c:"domesticSvc", d:"24-hour hotline for sexual assault survivors. Counseling, legal advocacy, hospital accompaniment.", ph:"585-546-2777", url:"https://restoresas.org", hr:"24/7 hotline", doc:"None", tg:["any"], reach:"remote" },
  { id:"cps", n:"Child Protective Services (CPS)", c:"domesticSvc", d:"Report suspected child abuse or neglect. Anonymous.", ph:"585-753-6532", hr:"After hours: 585-753-2699", doc:"None", tg:["kids"], reach:"remote" },
  { id:"nysdvh", n:"NYS Domestic Violence Hotline", c:"domesticSvc", d:"Statewide 24/7 hotline.", ph:"800-942-6906", url:"https://opdv.ny.gov", hr:"24/7", doc:"None", tg:["dom","any"], reach:"remote" },
  { id:"ndvh", n:"National Domestic Violence Hotline", c:"domesticSvc", d:"24/7, multilingual.", ph:"800-799-7233", url:"https://thehotline.org", hr:"24/7 · Text START to 88788", doc:"None", tg:["dom","any"], reach:"remote" },
  { id:"ncah", n:"National Child Abuse Hotline", c:"domesticSvc", d:"24/7 support for child abuse concerns.", ph:"800-422-4453", url:"https://childhelp.org", hr:"24/7", doc:"None", tg:["kids"], reach:"remote" },
  { id:"rainn", n:"RAINN (Sexual Assault Hotline)", c:"domesticSvc", d:"24/7 national sexual assault hotline.", ph:"800-656-4673", url:"https://rainn.org", hr:"24/7", doc:"None", tg:["any"], reach:"remote" },
  { id:"saathi", n:"Saathi of Rochester (South Asian Support)", c:"domesticSvc", d:"Help for South Asians facing domestic abuse. Helpline, crisis intervention, safety planning, legal assistance.", tr:{ne:"घरेलु हिंसा सामना गरिरहेका दक्षिण एशियालीहरूका लागि सहयोग।"}, ph:"585-234-1050", hr:"Call helpline", doc:"None", tg:["dom","any"], reach:"remote" },

  // DISABILITY
  { id:"rcil", n:"Center for Independent Living", c:"disabilitySvc", xref:["housing","employment"], d:"Services for any disability. Housing, jobs, benefits, advocacy.", ph:"585-442-6470", url:"https://www.rcil.org", hr:"M-F 8:30am-5pm", doc:"None", tg:["dis"], reach:"remote" },
  { id:"opwdd", n:"OPWDD (Developmental Disabilities)", c:"disabilitySvc", d:"State services: housing, day programs, support. START HERE if your loved one has a developmental disability — call to begin the eligibility process.", ph:"866-946-9733", url:"https://opwdd.ny.gov", hr:"M-F 9am-5pm", doc:"Disability documentation, diagnosis letter, Medicaid ID", tg:["dis"], nt:"The OPWDD process takes time. Call early. You'll need a psychological evaluation and diagnosis on file.", reach:"remote" },
  { id:"cproch", n:"CP Rochester", c:"disabilitySvc", d:"Services for cerebral palsy and developmental disabilities.", ph:"585-334-6000", url:"https://cprochester.org", hr:"Call for info", doc:"Varies", tg:["dis"], reach:"remote" },
  { id:"marycariola", n:"Mary Cariola Children's Center", c:"disabilitySvc", d:"Education and services for children with severe disabilities.", ph:"585-271-0309", url:"https://marycariola.org", hr:"Call for info", doc:"Varies", tg:["dis","kids"], reach:"remote" },
  { id:"earlyint", n:"Early Intervention (Ages 0-3)", c:"disabilitySvc", d:"FREE evaluation and services for babies and toddlers with developmental delays. Speech, physical therapy, special instruction. No diagnosis needed to refer.", ph:"585-753-5437", url:"https://www.monroecounty.gov/hdchild-ei", hr:"M-F 8am-4pm", doc:"None — any parent can call to request an evaluation", tg:["dis","kids","u5"], nt:"You do NOT need a doctor's referral. Any parent or caregiver can call directly. Services happen in your home.", reach:"remote" },
  { id:"cpse", n:"Preschool Special Ed (Ages 3-5)", c:"disabilitySvc", d:"Free special education services for preschool children with disabilities. Evaluations, therapy, specialized classrooms.", ph:"585-753-5437", url:"https://www.monroecounty.gov/hdchild-pse", hr:"M-F 8am-4pm", doc:"None to start — they evaluate your child", tg:["dis","kids","u5"], reach:"remote" },
  { id:"cdpap", n:"CDPAP (You Get Paid to Care for Your Loved One)", c:"disabilitySvc", xref:["caregiver","seniorSvc","cash"], d:"Consumer Directed Personal Assistance Program — a family member or friend gets PAID by Medicaid to provide care. You choose who helps.", ph:"585-325-1880", url:"https://www.health.ny.gov/health_care/medicaid/program/longterm/cdpap.htm", hr:"M-F", doc:"Medicaid ID, doctor's order for home care", tg:["dis","sen","any"], nt:"This pays YOU to care for your loved one. The person receiving care must have Medicaid. Call a fiscal intermediary to start.", reach:"statewide" },
  { id:"selfdirect", n:"Self-Direction (OPWDD)", c:"disabilitySvc", d:"You control your loved one's budget and services. Hire your own staff, choose your own programs. Maximum flexibility.", ph:"866-946-9733", url:"https://opwdd.ny.gov/self-direction", hr:"M-F", doc:"Must be OPWDD-eligible first", tg:["dis"], nt:"Self-direction gives families the most control. Must go through OPWDD eligibility first.", reach:"remote" },
  { id:"specialedadvocate", n:"Disability Rights NY (Special Ed Advocacy)", c:"disabilitySvc", d:"Free legal help for families fighting for special education services. IEP disputes, school placement, service denials.", ph:"800-993-8982", url:"https://www.drny.org", hr:"M-F 9am-5pm", doc:"IEP documents, school records", tg:["dis","kids"], reach:"remote" },
  { id:"autismup", n:"Autism Up", c:"disabilitySvc", d:"Programs, social groups, camps, job training, and family support for people with autism. All ages.", ph:"585-248-9011", url:"https://www.autismup.org", hr:"M-F", doc:"None", tg:["dis","kids","any"], reach:"remote" },
  { id:"arcmc", n:"The Arc of Monroe County", c:"disabilitySvc", d:"Day programs, employment, residential services, and family support for people with intellectual and developmental disabilities.", ph:"585-271-0660", url:"https://arcmonroe.org", hr:"M-F 8am-4:30pm", doc:"OPWDD eligibility", tg:["dis"], reach:"remote" },
  { id:"hcbs", n:"Home and Community Based Services Waiver", c:"disabilitySvc", d:"Medicaid waiver that funds services to keep your loved one at home instead of a facility. Respite, day programs, job coaching, home modifications.", ph:"585-753-6280", url:"https://www.health.ny.gov/health_care/medicaid/program/longterm/", hr:"M-F", doc:"Medicaid ID, OPWDD or nursing home level of care determination", tg:["dis","sen"], nt:"This is what keeps people OUT of institutions. Ask about the HCBS waiver specifically.", reach:"statewide" },

  // REFUGEE / IMMIGRANT
  { id:"cfc", n:"Catholic Family Center (Refugees)", c:"refugeeSvc", xref:["employment","education"], d:"Resettlement, jobs, English classes, case management.", tr:{ne:"पुनर्स्थापना, रोजगारी, अंग्रेजी कक्षा, केस व्यवस्थापन।",ar:"إعادة التوطين، وظائف، دروس إنجليزية، إدارة حالات.",so:"Dib u dejin, shaqo, fasallada Ingiriisiga, maamulka kiisaska.",sw:"Makazi mapya, kazi, masomo ya Kiingereza, usimamizi wa kesi.",my:"ပြန်လည်နေရာချထားရေး၊ အလုပ်၊ အင်္ဂလိပ်စာ၊ ကိစ္စရပ်စီမံခန့်ခွဲမှု။",zh:"安置、就业、英语课程、个案管理。"}, ph:"585-262-7050", ad:"87 N Clinton Ave, Rochester NY 14604", url:"https://www.cfcrochester.org", hr:"M-F 8:30am-5pm", doc:"Immigration documents", tg:["any"], town:"rochester", zip:"14604", lat:43.158886, lng:-77.607191, reach:"local" },
  { id:"ibero", n:"Ibero-American Action League", c:"refugeeSvc", xref:["employment","education","housing","legal"], d:"ESL, jobs, legal help, housing, education. Bilingual staff.", ph:"585-256-8900", ad:"817 E Main St, Rochester NY 14605", url:"https://iaal.org", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"rochester", zip:"14605", lat:43.160596, lng:-77.590593, reach:"local" },
  { id:"maryplace", n:"Mary's Place (Refugee Welcome)", c:"refugeeSvc", d:"Clothing, household items, orientation for newly arrived refugees.", tr:{ne:"नयाँ आएका शरणार्थीहरूका लागि लुगा, घरायसी सामान, अभिमुखीकरण।",ar:"ملابس ومستلزمات منزلية وتوجيه للاجئين الجدد.",so:"Dharka, alaabta guriga, iyo hagitaanka qaxootiga cusub.",sw:"Nguo, vifaa vya nyumbani, na mwongozo kwa wakimbizi wapya.",my:"အသစ်ရောက်ဒုက္ခသည်များအတွက် အဝတ်အစား၊ အိမ်သုံးပစ္စည်း၊ လမ်းညွှန်။"}, ph:"585-270-8626", ad:"55 St. Paul St, Rochester NY 14604", url:"https://www.marysplaceoutreach.org", hr:"Mon/Wed/Fri 10am-2pm", doc:"Refugee documentation", tg:["any"], town:"rochester", zip:"14604", lat:43.157774, lng:-77.609404, reach:"local" },
  { id:"urbanleague", n:"Urban League of Rochester", c:"legal", xref:["employment","housing","education"], d:"Jobs, housing, education, entrepreneurship, and advocacy for Black community and all underserved residents.", ph:"585-325-6530", ad:"265 N Clinton Ave, Rochester NY 14605", url:"https://www.urbanleagueroc.org", hr:"M-F 9am-5pm", doc:"Varies by program", tg:["any"], town:"rochester", zip:"14605", lat:43.161918, lng:-77.608448, reach:"local" },
  { id:"naacp", n:"NAACP Rochester (Branch 2172)", c:"legal", d:"Civil rights advocacy, voter registration, education equity, criminal justice reform.", url:"https://www.rocnynaacp2172.org", hr:"See website", doc:"None", tg:["any"], reach:"remote" },
  { id:"scoec", n:"Somali Community Outreach & Education Center", c:"refugeeSvc", d:"English classes, citizenship prep, translation/interpretation, case management.", tr:{so:"Fasallada Ingiriisiga, diyaarinta muwaadinnimada, turjumaadda, maamulka kiisaska."}, url:"https://www.guidestar.org/profile/26-2367811", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"rhrroc", n:"Refugees Helping Refugees", c:"refugeeSvc", d:"ESL classes, case management, youth programs, senior services. Volunteer-run, all refugees.", tr:{so:"Fasallada ESL, maamulka kiisaska, barnaamijyada dhalinyarada.",sw:"Madarasa ya ESL, usimamizi wa kesi, programu za vijana."}, ph:"585-563-7747", ad:"228 S Plymouth Ave, Rochester NY 14608", url:"https://rhrroc.org", hr:"M-F", doc:"None", tg:["any"], town:"rochester", zip:"14608", lat:43.150626, lng:-77.613806, reach:"local" },
  { id:"rrrs", n:"Rochester Refugee Resettlement Services", c:"refugeeSvc", d:"Housing, case management, and support for refugee families. Full wrap-around assistance.", tr:{ne:"शरणार्थी परिवारका लागि आवास, केस व्यवस्थापन, र सहयोग।",so:"Guryaha, maamulka kiisaska, iyo taageerada qoysaska qaxootiga.",sw:"Makazi, usimamizi wa kesi, na msaada kwa familia za wakimbizi.",my:"ဒုက္ခသည်မိသားစုများအတွက် အိမ်ရာ၊ ကိစ္စရပ်စီမံခန့်ခွဲမှု။",ar:"السكن وإدارة الحالات والدعم لعائلات اللاجئين."}, url:"https://www.rochesterrefugeeservices.org", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"saintsplace", n:"Saint's Place (Refugee Supplies)", c:"refugeeSvc", xref:["clothing","education"], d:"Clothing (all seasons), furniture, household goods, and tuition/tools assistance for legally resettled refugees in the Rochester area. Served 1,600+ newly arrived refugees in the last fiscal year. Community-funded ministry based at St. John of Rochester Parish.", ad:"St. John of Rochester Parish Center, 10 Wickford Way, Fairport NY 14450", url:"https://saintsplace.org", hr:"Mon-Thu 8am-2pm", doc:"Refugee documentation", tg:["any"], town:"fairport", zip:"14450", reach:"local" },

  // EDUCATION
  { id:"ged", n:"Free GED / High School Equivalency", c:"education", d:"Free classes for your high school diploma. Day and evening.", ph:"585-262-8100", url:"https://www.rcsdk12.org/adulted", hr:"M-F day and evening", doc:"ID", tg:["any"], reach:"remote" },
  { id:"esl", n:"Free English Classes (ESL)", c:"education", d:"Learn English for free. Multiple locations.", ph:"585-262-8100", url:"https://www.literacyrochester.org", hr:"Various schedules", doc:"None", tg:["any"], reach:"remote" },
  { id:"lib", n:"Rochester Public Library", c:"education", d:"Free computers, WiFi, printing, homework help, job search help. Library card is free.", ph:"585-428-7300", ad:"115 South Ave, Rochester NY 14604", url:"https://roccitylibrary.org", hr:"M-Sat varies by branch", doc:"Proof of address for card", tg:["any"], town:"rochester", zip:"14604", lat:43.154509, lng:-77.607988, reach:"local" },
  { id:"mcc", n:"Monroe Community College (MCC)", c:"education", d:"Affordable college — ~$2,450/semester. 100+ programs. Financial aid, tutoring, food bank, child care.", ph:"585-292-2000", ad:"1000 E Henrietta Rd, Rochester NY 14623", url:"https://www.monroecc.edu", hr:"See website", doc:"Apply online — no application fee", tg:["any"], zip:"14623", lat:43.101119, lng:-77.614409, reach:"local" },
  { id:"pathwaysmcc", n:"Pathways to MCC (Free College + GED)", c:"education", d:"FREE: earn your diploma AND college credits. No tuition, free tutoring, laptop, bus pass.", ph:"585-292-2000", url:"https://www.monroecc.edu/admissions/pathways-to-college/", hr:"See website", doc:"Must be 16+", tg:["any"], reach:"remote" },
  { id:"reoc", n:"Rochester Educational Opportunity Center (REOC)", c:"education", xref:["employment"], d:"TUITION-FREE academic and workforce programs. GED, ESL, healthcare training, IT, culinary, CDL.", ph:"585-232-2730", ad:"161 Chestnut St, Rochester NY 14604", url:"https://www.brockport.edu/reoc/", hr:"M-F", doc:"Proof of income for eligibility", tg:["any"], town:"rochester", zip:"14604", lat:43.153845, lng:-77.603115, reach:"local" },
  { id:"excelsior", n:"Excelsior Scholarship (Free SUNY/CUNY Tuition)", c:"education", d:"NYS program covering SUNY/CUNY tuition for families earning under $125,000.", url:"https://www.hesc.ny.gov/pay-for-college/financial-aid/types-of-financial-aid/nys-grants-scholarships-awards/the-excelsior-scholarship.html", hr:"Apply during FAFSA season", doc:"FAFSA required", tg:["any"], reach:"remote" },

  // LGBTQ+
  { id:"rocrainbow", n:"Rochester Rainbow Union", c:"lgbtq", d:"LGBTQ+ community center (successor to Out Alliance). Support groups, advocacy, community events.", ad:"Prince St, Rochester NY 14607", hr:"See website", doc:"None", tg:["any"], town:"rochester", zip:"14607", reach:"local" },
  { id:"mocha", n:"MOCHA Center", c:"lgbtq", d:"Services for LGBTQ+ people of color. HIV prevention, support groups, advocacy.", ph:"585-420-1400", url:"https://mochacenter.org", hr:"See website", doc:"None", tg:["any"], reach:"remote" },
  { id:"trilllgbtq", n:"Trillium Health (Gender-Affirming Care)", c:"lgbtq", d:"Gender-affirming hormone therapy, PrEP, primary care, mental health, dental. Sliding scale. Rochester's LGBTQ+ healthcare leader.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None required", tg:["any"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },
  { id:"translifeline", n:"Trans Lifeline", c:"lgbtq", d:"Peer support hotline run by and for trans people. Confidential, 24/7. They will not contact police.", ph:"877-565-8860", url:"https://translifeline.org", hr:"24/7", doc:"None", tg:["any"], reach:"remote" },
  { id:"trevor", n:"The Trevor Project (LGBTQ+ Youth Crisis)", c:"lgbtq", d:"24/7 crisis support for LGBTQ+ youth under 25. Call, text, or chat. Free and confidential.", ph:"866-488-7386", url:"https://www.thetrevorproject.org", hr:"24/7 — also text START to 678-678", doc:"None", tg:["kids","any"], reach:"remote" },
  { id:"pflag", n:"PFLAG Rochester", c:"lgbtq", d:"Support, education, and advocacy for LGBTQ+ people and their families. Monthly meetings, welcoming to all.", url:"https://pflag.org/find-a-chapter/", hr:"Monthly meetings — see website", doc:"None", tg:["any"], reach:"remote" },

  // VETERANS
  { id:"va", n:"VA Healthcare (Veterans)", c:"veteranSvc", d:"Medical care, mental health, substance abuse treatment for veterans.", ph:"585-463-2600", ad:"400 Fort Hill Ave, Canandaigua NY 14424", url:"https://www.va.gov/finger-lakes-health-care/", hr:"M-F 7:30am-4pm", doc:"DD-214, VA ID", tg:["vet"], zip:"14424", lat:42.900984, lng:-77.270408, reach:"national" },
  { id:"voa", n:"VOA Veterans Housing", c:"veteranSvc", d:"Transitional housing for homeless veterans. 24/7 intake.", ph:"585-454-1150", url:"https://www.voaupstateny.org", hr:"24/7", doc:"Proof of veteran status", tg:["vet"], reach:"remote" },
  { id:"voc", n:"Veterans Outreach Center", c:"veteranSvc", xref:["housing","employment","clothing","food"], d:"One-stop for veterans. Housing, jobs, counseling, emergency help, legal, food, clothing.", ph:"585-295-7810", ad:"459 South Ave, Rochester NY 14620", url:"https://veteransoutreachcenter.org", hr:"M-F 9am-4:30pm", doc:"Varies", tg:["vet"], town:"rochester", zip:"14620", lat:43.146913, lng:-77.605792, reach:"local" },
  { id:"vetcrisis", n:"Veterans Crisis Line", c:"veteranSvc", d:"24/7 for veterans in crisis. Call 988 — press 1 for veterans. Or text 838255.", ph:"988", url:"https://www.veteranscrisisline.net", hr:"24/7", doc:"None", tg:["vet"], reach:"national" },
  { id:"rocvetctr", n:"Rochester Vet Center (VA)", c:"veteranSvc", xref:["mental"], d:"Free, confidential readjustment counseling for combat veterans, service members, and their families. Individual, group, marriage, and family counseling. PTSD, military sexual trauma, bereavement. Separate from the main VA healthcare system.", url:"https://www.va.gov/rochester-vet-center/", hr:"Call for hours", doc:"DD-214 or proof of service", tg:["vet"], reach:"local" },
  { id:"alpost1151", n:"American Legion Post 1151 (+ local DAV office)", c:"veteranSvc", xref:["legal","employment"], d:"Veterans service post. Hosts the local Disabled American Veterans (DAV) office, which helps with VA benefits claims and appeals.", ph:"585-563-7979", ad:"1225 Jefferson Rd, Suite A01, Rochester NY 14623", url:"https://www.alpost1151.org", hr:"See website", doc:"Varies", tg:["vet"], town:"rochester", zip:"14623", reach:"local" },
  { id:"mcvsa", n:"Monroe County Veterans Service Agency", c:"veteranSvc", xref:["legal"], d:"Free help filing VA benefits claims, appeals, and service-connection determinations. County-level staff accredited to represent veterans before the VA.", url:"https://www.monroecounty.gov/vsa", hr:"M-F 9am-5pm", doc:"DD-214, benefits documents", tg:["vet"], reach:"local" },

  // TRANSPORTATION
  { id:"rts", n:"RTS Bus Service", c:"transport", d:"Rochester's public bus system. Reduced fare for seniors, disabled, and Medicare recipients.", ph:"585-288-1700", url:"https://www.myrts.com", hr:"See schedule online", doc:"RTS reduced fare ID for discounts", tg:["any"], reach:"remote" },
  { id:"ebtbus", n:"EBT Bus Pass", c:"transport", xref:["cash"], d:"If you receive Temporary Assistance, use your EBT card to ride RTS buses. Ask DSS for details.", ph:"585-753-6960", url:"https://www.monroecounty.gov/hs", hr:"M-F 8am-4pm", doc:"Your EBT card", tg:["hh"], reach:"remote" },
  { id:"medicaidride", n:"Medicaid Transportation (Free Medical Rides)", c:"transport", d:"Free rides to medical appointments for Medicaid members. Schedule 3+ days ahead.", ph:"866-932-7740", url:"https://www.health.ny.gov/health_care/medicaid/members/medtrans_overview.htm", hr:"M-F", doc:"Medicaid ID", tg:["hh"], reach:"statewide" },
  { id:"lifespantrans", n:"Lifespan Transportation Help", c:"transport", d:"Free mobility specialists for 60+ or disabled. They know all the options.", ph:"585-244-8400 ext.244", url:"https://www.lifespan-roch.org/transportation", hr:"M-F", doc:"None", tg:["sen","dis"], reach:"remote" },
  { id:"ticket2ride", n:"Ticket2Ride (Justice-Involved)", c:"transport", xref:["reentry"], d:"Free bus passes for people in the criminal justice system.", url:"https://www.ticket2riderochester.org", hr:"See website", doc:"None", tg:["any"], reach:"remote" },

  // INTERNET & PHONE
  { id:"lifeline", n:"FCC Lifeline Program ($9.25/mo Off)", c:"internet", xref:["cash"], d:"Permanent federal program. $9.25/mo off phone or internet. SNAP, Medicaid, SSI, or public housing qualifies.", url:"https://www.lifelinesupport.org", hr:"Apply online anytime", doc:"Proof of program participation or income", tg:["hh"], reach:"remote" },
  { id:"nyaba", n:"NY Affordable Broadband Act", c:"internet", d:"NYS law: ISPs must offer $15/mo or $20/mo internet to low-income households.", url:"https://www.ny.gov", hr:"Contact your ISP", doc:"Proof of SNAP, Medicaid, or income below 185% FPL", tg:["hh"], reach:"remote" },
  { id:"vzforward", n:"Verizon Forward (Discounted Internet)", c:"internet", d:"Discounted Fios/5G for SNAP, Medicaid, WIC, or Pell Grant recipients.", url:"https://www.verizon.com/discounts/verizon-forward/", hr:"Apply online", doc:"Proof of benefits", tg:["hh"], reach:"remote" },
  { id:"libhotspot", n:"Library WiFi Hotspot Lending", c:"internet", d:"Borrow a WiFi hotspot for free from Rochester Public Library. Take internet home.", ph:"585-428-7300", url:"https://roccitylibrary.org", hr:"Library hours", doc:"Library card (free with proof of address)", tg:["any"], reach:"remote" },
  { id:"pcsforpeople", n:"PCs for People (Low-Cost Computers)", c:"internet", d:"Refurbished computers for people at or below 200% FPL. Also offers low-cost internet.", url:"https://www.pcsforpeople.org", hr:"See website", doc:"Proof of income or benefits", tg:["hh"], reach:"remote" },

  // CLOTHING
  { id:"opendoor", n:"Open Door Mission (Clothing & Meals)", c:"clothing", xref:["food","housing"], d:"Free clothing for men, women, children. Three hot meals daily. Open to anyone.", ph:"585-454-6696", ad:"156 N Plymouth Ave, Rochester NY 14608", url:"https://opendoormission.com", hr:"See website", doc:"None", tg:["any"], town:"rochester", zip:"14608", lat:43.157067, lng:-77.617229, reach:"local" },
  { id:"salvationarmy", n:"Salvation Army (Food, Clothing, Vouchers)", c:"clothing", xref:["food","transport"], d:"Food bags, hygiene products, clothing and bus vouchers. Multiple locations.", ph:"585-987-9500", ad:"70 Liberty Pole Way, Rochester NY 14604", url:"https://rochesterny.salvationarmy.org", hr:"M-F 9am-1pm", doc:"None", tg:["any"], town:"rochester", zip:"14604", lat:43.158736, lng:-77.604333, reach:"local" },
  { id:"freestore", n:"Rochester Free Store", c:"clothing", d:"Free clothing, household items, small appliances. 3rd Saturday each month.", ph:"585-353-9882", hr:"3rd Saturday 3:30-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"baden", n:"Baden Street Settlement", c:"clothing", xref:["food","cash"], d:"Clothing house, food pantry, emergency assistance, free haircuts.", ph:"585-325-4910", ad:"152 Baden St, Rochester NY 14605", hr:"M-F 8:30am-4pm", doc:"Photo ID for food pantry", tg:["any"], town:"rochester", zip:"14605", lat:43.168625, lng:-77.607031, reach:"local" },
  { id:"dimitri", n:"Dimitri House", c:"clothing", xref:["food"], d:"Food pantry, personal care products, clothing. Walk-in.", ph:"585-325-1796", ad:"102 N Union St, Rochester NY 14607", url:"https://dimitri-house.org", hr:"See website", doc:"None", tg:["any"], town:"rochester", zip:"14607", lat:43.138816, lng:-77.629032, reach:"local" },

  // RE-ENTRY
  { id:"rawny", n:"Reentry Association of Western NY (RAWNY)", c:"reentry", xref:["housing","employment","documents"], d:"One-stop reentry help: housing, jobs, ID, benefits, peer mentors, legal.", ph:"585-851-8886", ad:"186-188 N Water St, Rochester NY", url:"https://www.rawny.org", hr:"M-F", doc:"None — no wrong door", tg:["any"], lat:43.160087, lng:-77.611485, reach:"local" },
  { id:"cityreentry", n:"City of Rochester Reentry Program", c:"reentry", xref:["housing","employment"], d:"Resources for people returning from incarceration. Housing, jobs, conflict resolution.", url:"https://www.cityofrochester.gov/departments/office-violence-prevention/reentry-program", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"voareentry", n:"VOA Residential Reentry", c:"reentry", xref:["housing","employment"], d:"Transitional housing, case management, employment help, life skills.", ph:"585-647-1150", url:"https://www.voaupny.org/services/reentry/", hr:"Call for intake", doc:"Varies", tg:["any"], ad:"214 Lake Ave, Rochester NY 14608", town:"rochester", zip:"14608", lat:43.167831, lng:-77.625572, reach:"local" },
  { id:"delphirise", n:"Delphi Rise Reentry", c:"reentry", d:"Case management for people released from NYS prisons. Treatment, housing, employment.", url:"https://delphirise.org", hr:"Call for info", doc:"Varies", tg:["any"], reach:"remote" },
  { id:"spiritus", n:"Spiritus Christi Prison Outreach", c:"reentry", d:"Residential wraparound support for people re-entering from jail or prison.", url:"https://www.spirituschristiprisonoutreach.org", ph:"585-288-0504", hr:"Call for info", doc:"Varies", tg:["any"], ad:"30 Millbank St, Rochester NY 14609", town:"rochester", zip:"14609", lat:43.13425, lng:-77.639639, reach:"local" },
  { id:"jpc", n:"Judicial Process Commission", c:"reentry", d:"Help getting RAP sheets, Certificates of Rehabilitation, mentoring.", ph:"585-325-7727", url:"https://www.rocjpc.org", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"ceoroc", n:"Center for Employment Opportunities (CEO) Rochester", c:"reentry", xref:["employment"], d:"Paid transitional work and job-placement support for people recently released from incarceration. Daily pay, transportation, skills training, coaching to full-time employment.", ph:"585-957-9858", ad:"16 E Main St, Suite 700, Rochester NY 14614", url:"https://www.ceoworks.org/locations/rochester", hr:"M-F", doc:"Proof of recent release", tg:["any"], town:"rochester", zip:"14614", lat:43.157156, lng:-77.612633, reach:"local" },
  { id:"mcreentryt", n:"Monroe County Re-entry Task Force", c:"reentry", xref:["housing","employment","legalCrimRecord"], d:"State-funded coordinated services for people returning to Monroe County after state prison. Stabilization, service referrals, employment readiness. Hosted by Delphi Rise.", ph:"585-467-2230", nt:"Ext. 303", ad:"727 St. Paul St, Rochester NY 14605", url:"https://doccs.ny.gov/location/monroe-county-re-entry-task-force", hr:"M-F", doc:"Varies", tg:["any"], town:"rochester", zip:"14605", reach:"local" },
  { id:"rplmaking", n:"Rochester Public Library — Making Moves", c:"reentry", xref:["education","employment"], d:"Reentry programming at the library. Job applications, legal self-help, ID replacement support, computer access. Free. No library card needed to participate.", url:"https://roccitylibrary.org/services/outreach/making-moves/", hr:"See schedule", doc:"None", tg:["any"], reach:"remote" },
  { id:"rplmoving", n:"Rochester Public Library — Moving Forward", c:"reentry", d:"Book requests for people currently incarcerated in Monroe County jails or NY state prisons. Free books mailed in. Family members can request on behalf of loved ones.", url:"https://roccitylibrary.org/services/outreach/moving-forward/", hr:"See website", doc:"None", tg:["any"], reach:"remote" },

  // PETS
  { id:"all4pets", n:"All 4 Pets WNY", c:"pets", d:"One-time grant for medical care for pets whose owners can't afford it.", ph:"585-727-5142", url:"https://www.all4petswny.org", hr:"See website", doc:"Vet estimate", tg:["any"], reach:"remote" },
  { id:"rcac", n:"Rochester Community Animal Clinic", c:"pets", d:"Low-cost vet care and spay/neuter for all pet owners. Walk-in wellness clinic.", ph:"585-288-0600", ad:"985 Bay St, Rochester NY 14609", url:"https://rochestercommunityanimalclinic.com", hr:"See website", doc:"None", tg:["any"], town:"rochester", zip:"14609", lat:43.1713, lng:-77.566722, reach:"local" },

  // HIV/STI
  { id:"mcstd", n:"Monroe County Sexual Health Clinic", c:"hivsti", d:"Free and confidential STI/HIV testing and treatment. No ID required.", ph:"585-753-5481", ad:"855 W Main St, Rochester NY 14611", url:"https://www.monroecounty.gov/health-nursing-STD-HIV", hr:"See website for walk-in hours", doc:"None — anonymous testing available", tg:["any"], zip:"14611", lat:43.150363, lng:-77.635363, reach:"local" },
  { id:"trillhiv", n:"Trillium Health (HIV/STI)", c:"hivsti", d:"Free at-home STI and HIV test kits. PrEP prescriptions. Comprehensive sexual health.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"rochester", zip:"14607", lat:43.149424, lng:-77.598861, reach:"local" },
  { id:"mochahiv", n:"MOCHA Center (HIV Prevention)", c:"hivsti", d:"HIV prevention, free testing, support groups for LGBTQ+ people of color.", ph:"585-420-1400", url:"https://mochacenter.org", hr:"See website", doc:"None", tg:["any"], reach:"remote" },
  
  // WEATHER / HEATING-COOLING
  { id:"codeblue", n:"Code Blue Warming Centers", c:"weather", d:"When temps drop below 32°F, warming centers open across Rochester. Free RTS bus rides to shelters.", ph:"211", url:"https://www.monroecounty.gov", hr:"Nov-Apr when activated", doc:"None", tg:["any"], nt:"Sites include Open Door Mission, House of Mercy, Saving Grace. Free RTS to all sites.", reach:"national" },
  { id:"coolsweep", n:"Cool Sweep (Summer Cooling Centers)", c:"weather", d:"When temps hit 85°F+, R-Centers and libraries open as cooling centers. Free.", url:"https://www.cityofrochester.gov/departments/emergency-management/cool-sweep-how-stay-cool-during-summer-heat", hr:"Summer, activated by heat", doc:"None", tg:["any"], reach:"remote" },
  { id:"rcenters", n:"City R-Centers (Year-Round)", c:"weather", d:"Recreation centers across Rochester. Indoor space, programs, air conditioning/heat. Free.", ph:"311", url:"https://www.cityofrochester.gov", hr:"Varies by location", doc:"None", tg:["any"], reach:"regional" },

  // DOCUMENTS
  { id:"mcvital", n:"Monroe County Vital Records", c:"documents", d:"Birth certificate or death certificate. $30 per certified copy. Need photo ID.", ph:"585-753-5141", ad:"740 E Henrietta Rd, Rochester NY 14623", url:"https://www.monroecounty.gov/health-vitalrecords", hr:"M-F 8:30am-4:30pm", doc:"Photo ID", tg:["any"], zip:"14623", lat:43.106535, lng:-77.615695, reach:"local" },
  { id:"ssaroch", n:"Social Security Office (Free SSN Card)", c:"documents", d:"Replacement Social Security card is FREE. Need birth certificate + photo ID.", ph:"800-772-1213", ad:"200 E Main St, 2nd Floor, Rochester NY 14604", url:"https://www.ssa.gov/ssnumber/", hr:"M-F, by appointment", doc:"Birth certificate + photo ID", tg:["any"], town:"rochester", zip:"14604", lat:43.157089, lng:-77.60697, reach:"national" },
  { id:"dmvid", n:"DMV Non-Driver ID Card", c:"documents", d:"NYS photo ID that isn't a driver's license. Need SSN card + proof of citizenship.", ph:"518-486-9786", url:"https://dmv.ny.gov/id-card/get-non-driver-id-card-ndid", hr:"By appointment", doc:"Social Security card, proof of citizenship", tg:["any"], reach:"remote" },
  { id:"passport", n:"Passport Office (City Hall)", c:"documents", d:"Apply for U.S. passport at City Clerk's Office. $130 book + $35 processing.", ph:"585-428-6617", ad:"30 Church St, Room 100A, Rochester NY 14614", url:"https://www.cityofrochester.gov/departments/city-clerk/passports", hr:"M-F 9:30am-4pm", doc:"Birth certificate, photo ID, passport photo, payment", tg:["any"], town:"rochester", zip:"14614", lat:43.156838, lng:-77.614691, reach:"local" },
  { id:"uscis", n:"USCIS Buffalo (Green Card, Citizenship, Visa)", c:"documents", d:"Federal immigration office serving Rochester. Must have an appointment.", ph:"800-375-5283", url:"https://www.uscis.gov", hr:"M-F 8am-3pm (Buffalo office)", doc:"Varies by application", tg:["any"], reach:"remote" },
  { id:"newhopeilm", n:"New Hope Immigration Legal Services", c:"documents", d:"Low-cost immigration help. Citizenship, green cards, family visas, work permits. $5 intake fee.", ph:"585-760-4328", url:"https://www.newhopefree.org/ils", hr:"By appointment", doc:"All immigration/travel documents you have", tg:["any"], reach:"remote" },
  { id:"cfcimmig", n:"Catholic Charities Immigration Services", c:"documents", d:"Citizenship prep, naturalization applications, family petitions. DOJ-accredited representatives.", ph:"585-546-7220", ad:"87 N Clinton Ave, Rochester NY 14604", url:"https://ww2.fcscharities.org/services/immigration/", hr:"M-F, by appointment", doc:"Immigration documents, tax returns, IDs", tg:["any"], town:"rochester", zip:"14604", lat:43.158886, lng:-77.607191, reach:"local" },
  { id:"rawnyid", n:"RAWNY (Help Getting Any Documents)", c:"documents", d:"They help you figure out what documents you need and how to get them. Not just for formerly incarcerated.", ph:"585-851-8886", ad:"186-188 N Water St, Rochester NY", url:"https://www.rawny.org", hr:"M-F", doc:"None — they help you figure out what you need", tg:["any"], lat:43.160087, lng:-77.611485, reach:"local" },
  { id:"libid", n:"Rochester Public Library (Document Help)", c:"documents", d:"Free step-by-step guide for getting ID documents. Staff walk you through it. Free notary at some branches.", ph:"585-428-7300", ad:"115 South Ave, Rochester NY 14604", url:"https://roccitylibrary.org", hr:"M-Sat varies by branch", doc:"None", tg:["any"], town:"rochester", zip:"14604", lat:43.154509, lng:-77.607988, reach:"local" },

  // CRISIS NURSERY
  { id:"crisisnursery", n:"Crisis Nursery of Greater Rochester", c:"crisisChild", d:"FREE emergency childcare during ANY family crisis. Ages 0-14. Up to 2 weeks. 24/7. No CPS involvement.", tr:{es:"Cuidado de niños de emergencia GRATIS. Edades 0-14. Hasta 2 semanas. 24/7.",ne:"कुनै पनि पारिवारिक संकटमा निःशुल्क आपतकालीन बालस्याहार।",ar:"رعاية أطفال طارئة مجانية خلال أي أزمة عائلية. 24/7.",so:"Daryeelka degdegga ah ee caruurta oo BILAASH ah. 24/7.",sw:"Malezi ya BURE ya dharura kwa watoto. 24/7.",my:"မည်သည့်မိသားစုအကြပ်အတည်းမှာမဆို အခမဲ့ကလေးထိန်း။ ၂၄/၇။",zh:"任何家庭危机期间的免费紧急儿童托管。24/7。"}, ph:"585-235-5750", ad:"Genesee Park Blvd, Rochester NY", url:"https://www.centerforyouth.net/crisis-nurseries/", hr:"24/7, 365 days a year", doc:"None — intake done by phone", tg:["kids","any"], addressSuppressed:true, reach:"local" },
  { id:"owenshouse", n:"Owen's House (Crisis Nursery East)", c:"crisisChild", d:"Second Crisis Nursery on the east side. Same free emergency childcare, 24/7.", ph:"585-482-2561", ad:"Rosewood Terrace, Rochester NY", url:"https://www.centerforyouth.net/crisis-nurseries/", hr:"24/7, 365 days a year", doc:"None — intake done by phone", tg:["kids","any"], town:"rochester", addressSuppressed:true, reach:"local" },

  // VISION
  { id:"vsphope", n:"VSP Eyes of Hope (Free Exam + Glasses)", c:"vision", d:"Free eye exam and free glasses for uninsured adults and children.", url:"https://www.vsp.com/eyes-of-hope", hr:"Apply online, find a local provider", doc:"Proof that you are uninsured", tg:["any"], reach:"remote" },
  { id:"lionsclub", n:"Lions Club Rochester (Free Eyeglasses)", c:"vision", d:"The Lions Club provides free eyeglasses to people in need.", url:"https://www.lionsclubs.org", hr:"Contact for info", doc:"Varies", tg:["any"], reach:"remote" },
  { id:"medicaidvision", n:"Medicaid Vision Coverage", c:"vision", d:"If you have Medicaid, eye exams and glasses are covered at no cost.", ph:"585-753-6960", url:"https://nystateofhealth.ny.gov", hr:"Any Medicaid-accepting optical", doc:"Your Medicaid card", tg:["hh"], reach:"statewide" },

  // FUNERAL
  { id:"mcburial", n:"Monroe County Burial Assistance", c:"funeral", xref:["grief","cash"], d:"If you can't afford a funeral, Monroe County can help cover burial costs.", ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", hr:"M-F 8am-4pm", doc:"Death certificate, proof of income/inability to pay", tg:["any"], zip:"14605", lat:43.168867, lng:-77.618649, reach:"local" },
  { id:"medicaidburial", n:"Medicaid Burial Allowance (NYS)", c:"funeral", xref:["grief","cash"], d:"New York State provides a burial allowance for Medicaid recipients.", ph:"585-753-6960", url:"https://www.health.ny.gov", hr:"Contact DSS", doc:"Medicaid documentation, death certificate", tg:["hh"], reach:"statewide" },
  { id:"salvburial", n:"Salvation Army (Emergency Funeral Help)", c:"funeral", xref:["grief","cash"], d:"The Salvation Army can sometimes help with emergency funeral costs.", ph:"585-987-9500", ad:"70 Liberty Pole Way, Rochester NY 14604", url:"https://rochesterny.salvationarmy.org", hr:"M-F 9am-1pm", doc:"Varies — call to ask", tg:["any"], town:"rochester", zip:"14604", lat:43.158736, lng:-77.604333, reach:"local" },

  // CAREGIVER
  { id:"lifespancare", n:"Lifespan Caregiver Resource Center", c:"caregiver", d:"Free support for people caring for an aging or disabled loved one. Counseling, support groups, respite.", ph:"585-244-8400", url:"https://www.lifespan-roch.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"namifamily", n:"NAMI Family Support Group", c:"caregiver", d:"Free support group for family members of people living with mental illness.", ph:"585-423-1500", url:"https://namiroc.org", hr:"See website for schedule", doc:"None", tg:["any"], reach:"remote" },
  { id:"mcrespite", n:"Monroe County Respite Services", c:"caregiver", d:"Temporary relief for caregivers. Someone watches your loved one so you can rest.", ph:"585-753-6280", url:"https://www.monroecounty.gov/aging", hr:"M-F 8am-4pm", doc:"Contact for eligibility", tg:["sen","dis"], reach:"remote" },
  { id:"alz", n:"Alzheimer's Association Rochester", c:"caregiver", d:"24/7 helpline, support groups, education, and care planning for Alzheimer's and dementia caregivers.", ph:"800-272-3900", url:"https://www.alz.org", hr:"24/7 helpline", doc:"None", tg:["any"], reach:"remote" },
  { id:"carenavigator", n:"NY Connects (Care Navigator)", c:"caregiver", d:"Don't know where to start? NY Connects helps you figure out which services exist for your loved one and how to apply. Free. Covers disability, aging, and long-term care.", ph:"585-753-6280", url:"https://www.monroecounty.gov/aging", hr:"M-F 8am-4pm", doc:"None — just call and describe your situation", tg:["any","dis","sen"], nt:"This is the single best first call for any caregiver who doesn't know what services are available.", reach:"remote" },
  { id:"cdpapcg", n:"CDPAP (Get Paid to Be Their Caregiver)", c:"caregiver", xref:["disabilitySvc","seniorSvc","cash"], d:"You may qualify to get PAID by Medicaid for the care you're already providing. Any family member or friend can apply.", ph:"585-325-1880", url:"https://www.health.ny.gov/health_care/medicaid/program/longterm/cdpap.htm", hr:"M-F", doc:"Your loved one needs Medicaid + a doctor's order for home care", tg:["dis","sen","any"], nt:"Many caregivers don't know this exists. If your loved one has Medicaid, ask about CDPAP.", reach:"statewide" },
  { id:"parentnetwork", n:"Parent Network of WNY", c:"caregiver", d:"Parent-to-parent support for families of children with special needs. Help navigating school, services, and systems.", ph:"716-332-4170", url:"https://parentnetworkwny.org", hr:"M-F", doc:"None", tg:["kids","dis","any"], reach:"remote" },
  { id:"familyvoices", n:"Parent to Parent of NYS (Family Voices)", c:"caregiver", d:"Help for families of children with special healthcare needs. Insurance navigation, care coordination, advocacy.", ph:"518-381-4350", url:"https://www.ptopnys.org", hr:"M-F", doc:"None", tg:["kids","dis","any"], reach:"remote" },

  // PARENTAL PROTECTION — Orders of Protection, Family Court, Custody Safety
  // ── LEGAL DISCLAIMER: Information only. Not legal advice. Consult a lawyer for your situation. ──
  // ── New York Family Court OPs are civil. Criminal OPs come through City/Criminal Court. ──
  // ── Violation of a valid Order of Protection is a CRIMINAL OFFENSE in New York State. ──
  { id:"familycourt", n:"Monroe County Family Court", c:"parentalProtection", d:"File for an Order of Protection, custody, visitation, or child support. Emergency Temporary Orders of Protection (ETOP) can be issued the same day you file. You do NOT need a lawyer to file.", ph:"585-371-3490", ad:"99 Exchange Blvd, Rochester NY 14614", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", hr:"M-F 9am-4:30pm (arrive early — allow several hours)", doc:"Photo ID; respondent's full name, DOB, last known address; children's full names and DOBs; any police reports, screenshots of threatening texts, photos of injuries, or medical records; any existing court orders. All court forms are FREE at the clerk window.", tg:["any"], nt:"Ask the clerk for a 'Family Offense Petition' to get an Order of Protection, or a 'Petition for Custody/Visitation.' No filing fee for family offense petitions. A judge can issue an Emergency Temporary Order of Protection on the spot if they find immediate danger. The other parent is served AFTER you leave — they do not know you filed until after it is issued.", zip:"14614", lat:43.154698, lng:-77.612165, reach:"local" },
  { id:"rochcitycourt", n:"Rochester City Court — Criminal Order of Protection", c:"parentalProtection", d:"If police responded and made an arrest, a Criminal Order of Protection may be issued automatically at arraignment. You can request conditions be added. Contact the DA's Victim Assistance Unit for help navigating this.", ph:"585-371-3413", ad:"185 Exchange Blvd, Rochester NY 14614", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/cityct/index.shtml", hr:"M-F 9am-5pm", doc:"Your case/complaint number if available. Police report.", tg:["any"], nt:"Criminal OPs are issued as part of a criminal case — not the same as a Family Court OP. You can have BOTH at the same time. Contact DA Victim Assistance: 585-753-4750.", town:"rochester", zip:"14614", lat:43.151587, lng:-77.611108, reach:"local" },
  { id:"daunit", n:"Monroe County DA — Victim Assistance Unit", c:"parentalProtection", d:"Support for crime victims involving family members. Help navigating criminal orders of protection, court hearings, and safety planning. Free and confidential.", ph:"585-753-4750", ad:"47 S Fitzhugh St, Rochester NY 14614", url:"https://www.monroecounty.gov/da", hr:"M-F 9am-5pm", doc:"Police report if available. They can assist even without a prior report.", tg:["any"], zip:"14614", lat:43.154695, lng:-77.61384, reach:"local" },
  { id:"selfhelpcourt", n:"NY Courts Self-Help (Free Court Forms)", c:"parentalProtection", d:"Free downloadable forms for Order of Protection, custody, visitation, and child support in New York. Step-by-step plain-language instructions included.", url:"https://www.nycourts.gov/courthelp/", hr:"24/7 online", doc:"None — forms are free and downloadable", tg:["any"], nt:"Start here before going to court. Search for 'Family Court' forms. The OCA packet explains every step.", reach:"remote" },
  { id:"familycourthelp", n:"Family Court Self-Help Center (Courthouse)", c:"parentalProtection", d:"Free in-person help filling out Family Court forms at the courthouse. Legal Aid volunteers on-site. No appointment needed.", ph:"585-232-4090", ad:"99 Exchange Blvd, 1st Floor (Family Court)", url:"https://lasroc.org", hr:"M-F 9am-12pm and 1pm-4pm (call ahead)", doc:"Bring everything: ID, police reports, photos, texts, medical records, any existing orders.", tg:["any"], town:"rochester", zip:"14614", lat:43.154698, lng:-77.612165, reach:"local" },
  { id:"supervvisit", n:"Supervised Visitation — Monroe County", c:"parentalProtection", d:"If you have safety concerns about the other parent being alone with your child, the court can order supervised visitation or supervised exchanges. Must be requested from a judge.", ph:"585-371-3490", ad:"99 Exchange Blvd (Family Court)", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", hr:"Request through Family Court", doc:"Court order required. Tell your attorney or the judge that you are requesting supervised visitation due to safety concerns.", tg:["any","kids"], nt:"'Safe exchange' (custody swap in a neutral monitored location) can also be court-ordered separately. Both can be in effect at the same time.", zip:"14614", lat:43.154698, lng:-77.612165, reach:"local" },
  { id:"mclerk", n:"Monroe County Clerk — File Court Papers & Get Certified Copies", c:"parentalProtection", d:"File court documents, obtain certified copies of orders of protection, search case records. If you cannot afford fees, ask about Poor Person Relief (fee waiver).", ph:"585-753-1600", ad:"39 W Main St, Rochester NY 14614", url:"https://www.monroecounty.gov/clerk", hr:"M-F 8am-5pm", doc:"Filing fees may apply. Ask staff about 'Poor Person Relief' — the fee waiver form — if cost is a barrier.", tg:["any"], nt:"Keep certified copies of ALL orders of protection on your person. Give one to your child's school, one to your employer if appropriate, and one to your phone's photo library.", zip:"14614", lat:43.155336, lng:-77.613839, reach:"local" },
  { id:"townhall", n:"Rochester City Hall — City Services & Emergency Help", c:"parentalProtection", d:"City Hall connects residents to city services including housing inspection, emergency assistance, and council member constituent help. Your City Council member can help if city agencies aren't responding.", ph:"585-428-5990", ad:"30 Church St, Rochester NY 14614", url:"https://www.cityofrochester.gov", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"rochester", zip:"14614", lat:43.156838, lng:-77.614691, reach:"local" },
  { id:"mclegislature", n:"Monroe County Legislature — County Services", c:"parentalProtection", d:"Your County Legislator can help escalate county service issues — DSS, housing, child services. Find your district representative on the county website.", ph:"585-753-1950", ad:"39 W Main St, Rochester NY 14614", url:"https://www.monroecounty.gov/legislature", hr:"M-F 8am-5pm", doc:"None", tg:["any"], zip:"14614", lat:43.155336, lng:-77.613839, reach:"local" },
  { id:"willowsafety", n:"Willow Center — Safety Planning for Parents", c:"parentalProtection", d:"24-hour hotline. Crisis counselors help you and your children create a safety plan. Help understanding your legal options including orders of protection and custody safety.", ph:"585-222-7233", url:"https://www.willowcenterny.org", hr:"24/7 — call or text", doc:"Nothing needed — just call", tg:["any"], nt:"Safety planning is free and can be done by phone. A counselor will help you think through what to do if the order is violated, how to talk to your children, and what evidence to preserve.", reach:"remote" },
  { id:"lawnyparent", n:"LawNY — Free Family Law Legal Help", c:"parentalProtection", d:"Free civil legal help for low-income residents. Handles custody, visitation, orders of protection, and child support. Income-based.", ph:"585-295-5700", url:"https://www.lawny.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"], reach:"remote" },
  { id:"laparent", n:"Legal Aid Society — Family Law Unit", c:"parentalProtection", d:"Free lawyers for low-income residents facing family law cases: custody, visitation, orders of protection. They can appear with you in court.", inc:200, ph:"585-232-4090", ad:"1 W Main St Suite 800, Rochester NY 14614", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, any existing court documents", tg:["any"], town:"rochester", zip:"14614", lat:43.155657, lng:-77.612519, reach:"local" },
  { id:"vlspfamily", n:"JustCause — Family Law Clinic", c:"parentalProtection", d:"Free legal clinics including family law. Volunteer attorneys can advise on custody and OP cases.", ph:"585-232-3051", url:"https://www.justcauseny.org", hr:"By appointment", doc:"Proof of income", tg:["any"], reach:"remote" },
  { id:"cpsparent", n:"Child Protective Services — Report Child Endangerment", c:"parentalProtection", d:"If you believe the other parent is abusing or neglecting your child, call CPS to report. Reports can be made anonymously. CPS investigates and can take action to protect the child.", ph:"585-753-6532", hr:"After hours/weekends: 585-753-2699 (24/7)", doc:"None — anonymous reports accepted. Helpful to have: child's name and DOB, other parent's name and address, description of what happened and when.", tg:["any","kids"], nt:"Making a report to CPS does NOT automatically affect your own custody case. A CPS investigation is separate from Family Court proceedings — though findings can be used in court.", reach:"remote" },
  { id:"opdvinfo", n:"NYS Office for Prevention of DV — Know Your Rights", c:"parentalProtection", d:"Clear information on New York State law: what an Order of Protection covers, what happens if it's violated, how custody and OP cases interact.", url:"https://opdv.ny.gov", hr:"24/7 online", doc:"None", tg:["any"], nt:"Key fact: in NY, violating an Order of Protection — even 'just' a text message — is a criminal offense (Criminal Contempt). The protected person can call 911 immediately.", reach:"remote" },
  { id:"nychncustoday", n:"NY Courts — Custody & Visitation Information", c:"parentalProtection", d:"Plain-language explanation of how New York family courts decide custody, what 'best interests of the child' means, and how to prepare for a custody hearing.", url:"https://www.nycourts.gov/courthelp/family/custodyVisitation.shtml", hr:"24/7 online", doc:"None", tg:["any"], nt:"'Legal custody' (who makes decisions) and 'physical custody' (where child lives) are separate issues in NY. Both can be shared or given to one parent. The court always decides based on the child's best interests.", reach:"remote" },

  // TENANT / RENTER RIGHTS
  { id:"tenantdefense2", n:"Tenant Defense Project", c:"legal", d:"Free lawyer if you're facing eviction. They show up in court with you.", ph:"585-504-6195", url:"https://www.tenantdefense.org", hr:"M-F 9am-5pm", doc:"Eviction papers if you have them", tg:["any"], reach:"remote" },
  { id:"housingcouncillegal", n:"Housing Council — Tenant Rights", c:"legal", d:"Tenant rights counseling, landlord disputes, housing discrimination, and foreclosure prevention. Free.", ph:"585-546-3700", url:"https://www.thehousingcouncil.org", hr:"M-F 9am-5pm", doc:"None — call to describe your situation", tg:["any"], nt:"Handles complaints about landlords who retaliate, fail to make repairs, or illegally lock you out.", reach:"remote" },
  { id:"hcpdiscrim", n:"NYS Human Rights Division — Housing Discrimination", c:"legal", d:"File a complaint if a landlord discriminates based on race, gender, disability, family status, or source of income (including Section 8). Free. No lawyer needed.", ph:"888-392-3644", url:"https://dhr.ny.gov", hr:"M-F 9am-5pm", doc:"Dates, what was said, who said it", tg:["any"], nt:"In NY it is ILLEGAL for a landlord to refuse a tenant because they use a housing voucher (Section 8). This is source-of-income discrimination — you can file a complaint.", reach:"statewide" },
  { id:"hud", n:"HUD Housing Discrimination Hotline", c:"legal", d:"Federal complaint line for housing discrimination. Covers all protected classes.", ph:"800-669-9777", url:"https://www.hud.gov/program_offices/fair_housing_equal_opp", hr:"M-F 8:30am-5pm", doc:"None — just call and describe what happened", tg:["any"], reach:"national" },
  { id:"warrantsvc", n:"Housing Court — Warrant of Habitability", c:"legal", d:"If your landlord refuses to fix unsafe conditions (no heat, mold, pests, broken locks), housing court can compel repairs or reduce your rent.", ph:"585-371-3608", ad:"99 Exchange Blvd, Rochester NY 14614", hr:"M-F 9am-4:30pm", doc:"Photos of conditions, written requests to landlord if you have them", tg:["any"], nt:"In NY you can withhold rent into escrow if a landlord refuses emergency repairs. This is a formal legal process — talk to Legal Aid first.", town:"rochester", zip:"14614", lat:43.154698, lng:-77.612165, reach:"local" },

  // EMERGENCY FLIGHTS
  { id:"angelflight", n:"Angel Flight NE (Free Medical Flights)", c:"transport", d:"Free air transportation to medical treatment for patients who cannot afford or endure commercial travel. Volunteer pilots fly you in small aircraft.", ph:"603-766-9501", url:"https://www.angelflightne.org", hr:"M-F 9am-5pm", doc:"Medical documentation, physician's statement of need", tg:["any"], nt:"Covers patients in the Northeast including NY. Must be able to walk. Not for emergencies — for ongoing treatment at distant medical centers.", reach:"remote" },
  { id:"aircarealliance", n:"Air Care Alliance (Medical Flight Referral)", c:"transport", d:"Connects patients with the right volunteer aviation program for their situation and route. Start here if you don't know which program covers your area.", ph:"888-260-9707", url:"https://www.aircarealliance.org", hr:"M-F 9am-5pm", doc:"Medical need documentation, origin and destination, travel dates", tg:["any"], reach:"remote" },
  { id:"mercymedical", n:"Mercy Medical Airlift", c:"transport", d:"Free long-distance air transport for medical patients who must travel far for treatment and cannot afford commercial airfare.", ph:"757-318-9174", url:"https://www.mercymedical.org", hr:"M-F 9am-5pm", doc:"Physician's referral letter, financial need documentation", tg:["any"], reach:"remote" },
  { id:"compassionatetravel", n:"Airline Compassionate Fares (Bereavement/Medical)", c:"transport", d:"Most major airlines offer deeply discounted bereavement or medical emergency fares. Call the airline directly — these are not advertised online. Ask specifically for compassionate fare.", hr:"Call airline directly — available 24/7 for emergencies", doc:"Death certificate or medical documentation depending on airline", tg:["any"], nt:"Discounts vary but can be 50-90% off. Also ask about companion tickets for caregivers traveling with a patient.", reach:"remote" },

  // EXPANDED TRANSPORT
  { id:"rtsplanner", n:"RTS Trip Planner (Bus Routes)", c:"transport", d:"Plan any bus trip in Rochester. Real-time arrivals, route maps, transfers. Free.", ph:"585-288-1700", url:"https://www.myrts.com/Plan-Your-Trip", hr:"Bus service runs roughly 5am-midnight daily", doc:"None", tg:["any"], nt:"RTS app available on iPhone and Android. Text your stop number to 321-123 for next arrival times.", reach:"remote" },
  { id:"taxivoucher", n:"DSS Transportation Vouchers (Taxi/Rides)", c:"transport", d:"If you receive Temporary Assistance, you may qualify for taxi or transportation vouchers to get to medical appointments, job interviews, or DSS appointments.", ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", hr:"M-F 8am-4pm", doc:"TA case number, appointment documentation", tg:["hh"], nt:"Ask your DSS caseworker specifically about transportation vouchers — they are not automatically offered. You have to request them.", town:"rochester", zip:"14605", lat:43.168867, lng:-77.618649, reach:"local" },
  { id:"uberlyfthealth", n:"Uber Health / Lyft Healthcare Rides", c:"transport", d:"Hospitals and social service agencies partner with Uber and Lyft to provide subsidized rides to medical appointments. Ask your doctor's office, hospital social worker, or Medicaid coordinator if they offer a ride program.", url:"https://www.uberhealth.com", hr:"Varies by partner program", doc:"Must be enrolled through a partner health organization", tg:["any"], nt:"If you have Medicaid, you likely qualify for free rides through the Medicaid Transportation program (separate entry above). Uber/Lyft health programs are a supplement through healthcare partners.", reach:"remote" },

  // LEGAL SUB-CATEGORY PROGRAMS

  // EVICTION
  { id:"nyhomesadvocacy", n:"NY State Homes & Community Renewal — Tenant Rights", c:"legalEviction", d:"State agency overseeing housing rights and programs. Resources for tenants facing eviction, unsafe conditions, and housing discrimination.", ph:"800-432-4210", url:"https://hcr.ny.gov", hr:"M-F 9am-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"tenantdefenseevict", n:"Tenant Defense Project (Eviction Help)", c:"legalEviction", d:"Free lawyer if you're facing eviction. They appear in housing court with you. One of the most important calls you can make when served eviction papers.", ph:"585-504-6195", url:"https://www.tenantdefense.org", hr:"M-F 9am-5pm", doc:"Eviction papers (petition/notice)", tg:["any"], nt:"Call immediately when you receive court papers. Do not wait. You may have as few as 10 days to respond.", reach:"remote" },
  { id:"legalaidevict", n:"Legal Aid Society — Housing Unit", c:"legalEviction", d:"Free lawyers for low-income tenants facing eviction, landlord harassment, or unsafe conditions.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, eviction papers", tg:["any"], reach:"remote" },
  { id:"lawnyevict", n:"LawNY — Tenant Legal Help", c:"legalEviction", d:"Free civil legal help for tenants statewide. Handles eviction defense, lease disputes, habitability complaints.", ph:"585-295-5700", url:"https://www.lawny.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"], reach:"remote" },
  { id:"housingcourtevict", n:"Rochester Housing Court", c:"legalEviction", d:"Where eviction cases are heard. You can file a response to an eviction petition here. Ask the clerk for the self-help forms.", ph:"585-371-3608", ad:"99 Exchange Blvd, Rochester NY 14614", hr:"M-F 9am-4:30pm", doc:"Your eviction papers", tg:["any"], nt:"Tell the clerk you need the 'Answer' form to respond to an eviction petition. It's free. Do not miss your court date.", town:"rochester", zip:"14614", lat:43.154698, lng:-77.612165, reach:"local" },
  { id:"housingcouncilrent", n:"Housing Council at PathStone — Renter Help", c:"legalEviction", d:"Free counseling for renters facing eviction, landlord disputes, unsafe conditions. They explain your rights and options.", ph:"585-546-3700", url:"https://www.thehousingcouncil.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"], reach:"remote" },

  // WORKERS RIGHTS
  { id:"nydol", n:"NY Department of Labor — File a Wage Claim", c:"legalWorkers", d:"If your employer owes you wages, overtime, or tips, file a claim online or by phone. NY DOL investigates and can recover your wages plus penalties.", ph:"888-469-7365", url:"https://labor.ny.gov/workerprotection/laborstandards/LSforms.shtm", hr:"M-F 8am-5pm", doc:"Pay stubs, work schedule, employer contact info", tg:["any"], reach:"remote" },
  { id:"eeoc", n:"EEOC — Employment Discrimination Complaint", c:"legalWorkers", d:"File a federal employment discrimination complaint. Covers race, sex, age, disability, religion, national origin, pregnancy. Must file within 300 days.", ph:"800-669-4000", url:"https://www.eeoc.gov/filing-charge-discrimination", hr:"M-F 8am-8pm", doc:"Dates of incidents, names of witnesses, any documentation", tg:["any"], nt:"You must file with the EEOC before you can sue in federal court. The 300-day deadline is strict.", reach:"remote" },
  { id:"nydhr", n:"NYS Division of Human Rights — Employment", c:"legalWorkers", d:"File a state discrimination complaint. Covers all EEOC categories plus gender identity, marital status, domestic violence victim status.", ph:"888-392-3644", url:"https://dhr.ny.gov", hr:"M-F 9am-5pm", doc:"Incident documentation", tg:["any"], reach:"statewide" },
  { id:"unemployment", n:"NY Unemployment Insurance", c:"legalWorkers", d:"If you lost your job through no fault of your own, you likely qualify. Apply within 14 days of job loss for fastest processing.", ph:"888-209-8124", url:"https://dol.ny.gov/unemployment/unemployment-insurance-assistance", aurl:"https://dol.ny.gov/unemployment/unemployment-insurance-assistance", hr:"Online 24/7, phone M-F 8am-5pm", doc:"Last employer info, SSN, work history for 18 months", tg:["any"], nt:"Apply online — phone wait times are very long. If denied, appeal within 30 days.", reach:"remote" },
  { id:"nycosh", n:"NYCOSH — Workplace Safety Rights", c:"legalWorkers", d:"Free information and advocacy for workers with unsafe working conditions. Covers all industries.", ph:"212-227-6440", url:"https://nycosh.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"], reach:"remote" },
  { id:"legalaidworkers", n:"Legal Aid Society — Workers Rights", c:"legalWorkers", d:"Free legal help for workers with wage theft, discrimination, retaliation, or wrongful termination.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, pay stubs, any documentation of the issue", tg:["any"], reach:"remote" },

  // BENEFITS DENIALS
  { id:"fairhearing", n:"NY Office of Temporary & Disability Assistance — Fair Hearings", c:"legalBenefits", d:"Request a free fair hearing to appeal any denial or reduction of SNAP, cash assistance, Medicaid, or childcare benefits. Benefits can continue while you appeal.", ph:"518-473-3332", url:"https://otda.ny.gov/programs/fair-hearings/", hr:"M-F 8am-5pm", doc:"Your denial letter, case number", tg:["any"], nt:"You have 90 days from a SNAP denial, 60 days from a Medicaid or TA denial. Call immediately. Request 'Aid Continuing' to keep benefits during the hearing.", reach:"statewide" },
  { id:"legalaidbenefits", n:"Legal Aid Society — Benefits Help", c:"legalBenefits", d:"Free legal help appealing SNAP, Medicaid, SSI, and public assistance denials.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Denial letter, case number, proof of income", tg:["any"], reach:"remote" },
  { id:"disabilityadvocacy", n:"NY Legal Assistance Group — Disability Benefits", c:"legalBenefits", d:"Free help with SSI and Social Security Disability appeals. Many disability lawyers work on contingency — no fee unless you win.", ph:"212-613-5000", url:"https://www.nylag.org", hr:"M-F 9am-5pm", doc:"Denial letter, medical records", tg:["dis","any"], reach:"remote" },
  { id:"medicaidadvocate", n:"Community Health Advocates (Medicaid Help)", c:"legalBenefits", d:"Free help navigating Medicaid denials, billing problems, and coverage disputes.", ph:"888-614-5400", url:"https://communityhealthadvocates.org", hr:"M-F 9am-5pm", doc:"Insurance card, denial letter", tg:["any"], reach:"remote" },
  { id:"snaphotline", n:"NYS SNAP Hotline", c:"legalBenefits", d:"Questions about SNAP eligibility, your case, or how to apply or appeal.", ph:"800-342-3009", url:"https://mybenefits.ny.gov", hr:"M-F 8am-5pm", doc:"Case number if you have one", tg:["any"], reach:"statewide" },

  // IMMIGRATION LEGAL
  { id:"cfcimmiglaw", n:"Catholic Charities Immigration Legal Services", c:"legalImmigration", d:"DOJ-accredited immigration legal services. Citizenship, green cards, family petitions, DACA renewals, deportation defense.", ph:"585-546-7220", ad:"87 N Clinton Ave, Rochester NY 14604", url:"https://ww2.fcscharities.org/services/immigration/", hr:"M-F by appointment", doc:"All immigration documents, passport, any notices from USCIS or immigration court", tg:["any"], nt:"DOJ-accredited means they are legally authorized to represent you in immigration proceedings. Always verify accreditation before paying anyone for immigration help.", town:"rochester", zip:"14604", lat:43.158886, lng:-77.607191, reach:"local" },
  { id:"newhopeilslaw", n:"New Hope Immigration Legal Services", c:"legalImmigration", d:"Low-cost immigration help. Citizenship, green cards, family visas, work permits, DACA. $5 intake fee only.", ph:"585-760-4328", url:"https://www.newhopefree.org/ils", hr:"By appointment", doc:"All immigration documents you have", tg:["any"], reach:"remote" },
  { id:"laimmig", n:"Legal Aid Society — Immigration Unit", c:"legalImmigration", d:"Free immigration legal help for low-income individuals. Deportation defense, asylum, DACA, family cases.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, all immigration documents", tg:["any"], reach:"remote" },
  { id:"nycairr", n:"NYLAG Immigration — Deportation Defense", c:"legalImmigration", d:"Free legal help for people in immigration court proceedings or facing deportation.", ph:"212-613-5000", url:"https://www.nylag.org/units/immigration/", hr:"M-F 9am-5pm", doc:"Immigration court notices, all documents", tg:["any"], reach:"remote" },
  { id:"iactcenter", n:"IACT Center — Immigrant Rights", c:"legalImmigration", d:"Know your rights presentations, immigration legal screenings, community advocacy for immigrants in Rochester.", url:"https://www.iactcenter.org", hr:"See website", doc:"None for rights presentations", tg:["any"], reach:"remote" },

  // DISCRIMINATION
  { id:"eeocdisc", n:"EEOC — File an Employment Discrimination Charge", c:"legalDiscrim", d:"Federal agency. File a charge for discrimination based on race, sex, age (40+), disability, religion, national origin, pregnancy. 300-day deadline from incident.", ph:"800-669-4000", url:"https://www.eeoc.gov/filing-charge-discrimination", hr:"M-F 8am-8pm", doc:"Dates, what happened, witnesses, any documentation", tg:["any"], reach:"remote" },
  { id:"nydhrdisc", n:"NYS Division of Human Rights", c:"legalDiscrim", d:"State agency for discrimination complaints in employment, housing, credit, and education. Broader protections than federal law — includes gender identity, source of income.", ph:"888-392-3644", url:"https://dhr.ny.gov", hr:"M-F 9am-5pm", doc:"Incident documentation", tg:["any"], reach:"statewide" },
  { id:"huddisc", n:"HUD — Housing Discrimination Complaint", c:"legalDiscrim", d:"Federal housing discrimination complaints. Section 8 refusal, disability accommodations denied, race-based rental refusals.", ph:"800-669-9777", url:"https://www.hud.gov/program_offices/fair_housing_equal_opp", hr:"M-F 8:30am-5pm", doc:"None required to start — describe what happened", tg:["any"], reach:"national" },
  { id:"adarochester", n:"Disability Rights NY — ADA Complaints", c:"legalDiscrim", d:"Free legal help for people with disabilities facing discrimination in employment, housing, or public accommodation.", ph:"800-993-8982", url:"https://www.drny.org", hr:"M-F 9am-5pm", doc:"Description of the discrimination, any written communications", tg:["dis","any"], reach:"remote" },
  { id:"urbanleaguedisc", n:"Urban League of Rochester — Discrimination Advocacy", c:"legalDiscrim", d:"Civil rights advocacy and referrals for discrimination complaints in housing, employment, and education.", ph:"585-325-6530", url:"https://www.urbanleagueroc.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"], reach:"remote" },

  // DEBT
  { id:"legalaiddebt", n:"Legal Aid Society — Debt & Consumer Help", c:"legalDebt", d:"Free legal help for low-income residents facing debt lawsuits, wage garnishment, or debt collector harassment.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Court papers, debt letters, pay stubs", tg:["any"], reach:"remote" },
  { id:"cfpb", n:"CFPB — Report Debt Collector Violations", c:"legalDebt", d:"If a debt collector is violating the law (calling too early/late, threatening arrest, lying), report them to the Consumer Financial Protection Bureau.", url:"https://www.consumerfinance.gov/complaint/", hr:"24/7 online", doc:"Collector name, phone number, description of violation", tg:["any"], nt:"You can also sue a debt collector in small claims court for FDCPA violations and recover up to $1,000 in damages plus attorney fees.", reach:"remote" },
  { id:"nysag", n:"NYS Attorney General — Consumer Complaints", c:"legalDebt", d:"File a complaint against debt collectors, scammers, or businesses that treat you unfairly.", ph:"800-771-7755", url:"https://ag.ny.gov/consumer-frauds-and-protection", hr:"M-F 9am-5pm", doc:"Company name, what happened, any documentation", tg:["any"], reach:"statewide" },
  { id:"bankruptcyhelp", n:"Bankruptcy Legal Clinics (Free)", c:"legalDebt", d:"JustCause (formerly Volunteer Legal Services) runs free bankruptcy clinics. Learn if Chapter 7 (eliminate debt) or Chapter 13 (repayment plan) is right for you.", ph:"585-232-3051", url:"https://www.justcauseny.org", hr:"By appointment", doc:"List of debts, income info, assets", tg:["any"], nt:"Chapter 7 can eliminate most credit card debt, medical bills, and personal loans. Mortgage and student loans generally cannot be discharged. A lawyer can tell you if you qualify.", reach:"remote" },
  { id:"creditcounseling", n:"Free Credit Counseling (NFCC)", c:"legalDebt", d:"Nonprofit credit counseling. Debt management plans, budget help, creditor negotiations. Never pay for credit counseling — it's available free.", ph:"800-388-2227", url:"https://www.nfcc.org", hr:"M-F 8am-8pm", doc:"List of debts and creditors", tg:["any"], reach:"remote" },

  // SMALL CLAIMS
  { id:"rochcitycourt_sc", n:"Rochester City Court — Small Claims", c:"legalSmallClaims", d:"File a small claims case for up to $10,000. No lawyer needed. Come to the court clerk's window to start.", ph:"585-371-3412", ad:"99 Exchange Blvd, Rochester NY 14614", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/cityct/index.shtml", hr:"M-F 9am-5pm (file by 4pm)", doc:"Defendant's name and address, description of your claim, any supporting documents", tg:["any"], nt:"Security deposit cases: If your landlord hasn't returned your deposit within 14 days of move-out with an itemized list, you can sue for DOUBLE the deposit amount under NY law.", town:"rochester", zip:"14614", lat:43.154698, lng:-77.612165, reach:"local" },
  { id:"nycourtssc", n:"NY Courts — Small Claims Self-Help", c:"legalSmallClaims", d:"Step-by-step guide to filing a small claims case in New York. Plain language. Free.", url:"https://www.nycourts.gov/courthelp/civil/smallClaims.shtml", hr:"24/7 online", doc:"None", tg:["any"], reach:"remote" },
  { id:"legalaidsc", n:"Legal Aid Society — Small Claims Advice", c:"legalSmallClaims", d:"Free advice on whether and how to file a small claims case. Can help you prepare your evidence.", ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"None for initial advice", tg:["any"], reach:"remote" },

  // CRIMINAL RECORD
  { id:"rawnyrecord", n:"RAWNY — Criminal Record Help", c:"legalCrimRecord", d:"Help understanding your record, getting RAP sheets, applying for Certificates of Relief and Certificates of Good Conduct.", ph:"585-851-8886", ad:"186-188 N Water St, Rochester NY", url:"https://www.rawny.org", hr:"M-F", doc:"None — they help you figure out what you need", tg:["any"], lat:43.160087, lng:-77.611485, reach:"local" },
  { id:"jpcrecord", n:"Judicial Process Commission — Record Clearing", c:"legalCrimRecord", d:"Help with RAP sheets, Certificates of Rehabilitation, expungement questions, and mentoring.", ph:"585-325-7727", url:"https://www.rocjpc.org", hr:"M-F", doc:"None", tg:["any"], reach:"remote" },
  { id:"cleanslate", n:"NY Clean Slate Act — Automatic Sealing (2024)", c:"legalCrimRecord", d:"As of November 2024, most NY misdemeanors are automatically sealed after 3 years and most felonies after 8 years. This happened automatically — you don't need to apply. Check if your record was sealed.", url:"https://www.criminaljustice.ny.gov/cleanslate", hr:"24/7 online", doc:"None", tg:["any"], nt:"Sealed records are hidden from most private background checks but remain visible to courts and law enforcement. Certain serious offenses (sex crimes, class A felonies) are excluded from Clean Slate.", reach:"statewide" },
  { id:"certrelief", n:"Certificate of Relief from Civil Disabilities", c:"legalCrimRecord", d:"Removes automatic bars to employment, licenses, and housing caused by a criminal record. Apply through the court that sentenced you. Free.", ph:"585-371-3608", ad:"99 Exchange Blvd, Rochester NY 14614", url:"https://www.criminaljustice.ny.gov/pio/press_releases/2023-09-27_pressrelease.html", hr:"M-F 9am-4:30pm", doc:"Your case/docket number, sentencing records", tg:["any"], nt:"This is one of the most underused tools for people with records. It doesn't erase your record but removes legal barriers to jobs and licenses. Ask RAWNY or Legal Aid for help applying.", town:"rochester", zip:"14614", lat:43.154698, lng:-77.612165, reach:"statewide" },
  { id:"legalaidrecord", n:"Legal Aid Society — Criminal Record Help", c:"legalCrimRecord", d:"Free legal help understanding your record, sealing options, and certificates.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"], reach:"remote" },

  // ─────────────────────────────────────────────
  // PETS — added April 9, 2026 (v1: 9 verified entries)
  // ─────────────────────────────────────────────
  { id:"vsas", n:"Rochester Animal Services / Verona Street Animal Society", c:"pets",
    d:"City animal shelter and 501c3 partner. Pet adoption, foster care, surrender prevention support, end-of-life services for City residents. Dog adoptions $50, cat adoptions $30. Free for seniors 60+ adopting an animal age 8+.",
    ph:"585-428-7274", url:"https://www.cityofrochester.gov/petadoption/",
    ad:"184 Verona St, Rochester NY 14608",
    hr:"Mon-Fri 12-6pm, Sat-Sun 12-4pm",
    doc:"ID for adoption. Just call for surrender prevention.",
    tg:["any"],
    town:"rochester", zip:"14608", reach:"local" },

  { id:"vsasfood", n:"Verona Street Pet Food Pantry", c:"pets",
    d:"Free pet food and supplies for City of Rochester residents. Held the 2nd and 4th Friday of every month. Limited to once per month per household.",
    ph:"585-428-7008", url:"https://www.cityofrochester.gov/petadoption/",
    ad:"184 Verona St, Rochester NY 14608",
    hr:"2nd and 4th Fridays of each month",
    doc:"Proof of City of Rochester residency.",
    tg:["any","hh"],
    town:"rochester", zip:"14608", reach:"local" },

  { id:"vsassurrender", n:"Pet Surrender Prevention (Rochester Animal Services)", c:"pets",
    d:"If you are considering giving up your pet because of money or life circumstances, call the Pet Surrender Prevention Specialist BEFORE you do anything. They may be able to provide food, supplies, vet referrals, or rehoming support to keep your pet with you.",
    ph:"585-428-6722", url:"https://www.cityofrochester.gov/departments/department-recreation-and-human-services-drhs/rochester-animal-services-community-pet",
    ad:"184 Verona St, Rochester NY 14608",
    hr:"M-F business hours",
    doc:"None — just call.",
    tg:["any","hh"],
    town:"rochester", zip:"14608", reach:"local" },

  { id:"vsasvax", n:"Free Dog Vaccine Clinics (Rochester Animal Services)", c:"pets",
    d:"Free distemper and parvo (DAAP) vaccines for City of Rochester resident dogs. No appointment needed. Donated by Petco Love. Does NOT include rabies vaccine — rabies clinics held separately.",
    ph:"585-428-7008", url:"https://www.cityofrochester.gov/departments/department-recreation-and-human-services-drhs/rochester-animal-services-community-pet",
    ad:"448 Smith St, Rochester NY 14606 (parking lot C, Community Sports Complex)",
    hr:"Periodic — check website for next clinic date",
    doc:"City of Rochester residency. Dog must be on leash. One dog per person.",
    tg:["any"],
    town:"rochester", zip:"14606", reach:"local" },

  { id:"lollypop", n:"Lollypop Farm — Humane Society of Greater Rochester", c:"pets",
    d:"The largest animal welfare organization in the Rochester area, since 1873. Pet adoption (dogs, cats, small animals, horses, farm animals), foster care, vet care, behavior consultations, dog training, humane education. Multiple satellite locations across Monroe County.",
    ph:"585-223-1330", url:"https://www.lollypop.org",
    ad:"99 Victor Rd, Fairport NY 14450",
    hr:"Mon 10am-4:30pm, Tue-Fri 12-6:30pm, Sat-Sun 10am-4:30pm",
    doc:"ID and adoption application.",
    tg:["any"],
    town:"fairport", zip:"14450",
    serves: ["fairport","rochester","henrietta","greece","perinton"],
    reach:"regional" },

  { id:"lollypopcruelty", n:"Lollypop Farm Animal Cruelty 24-Hour Hotline", c:"pets",
    d:"24/7 hotline for reporting animal cruelty, neglect, or suspected abuse. Lollypop Farm has law enforcement authority for animal cruelty cases in Monroe County. Anonymous reports accepted.",
    ph:"585-223-6500", url:"https://www.lollypop.org",
    hr:"24/7",
    doc:"None. Anonymous reports accepted.",
    tg:["any"],
    reach:"regional",
    safetySensitive: true },

  { id:"lollypopspay", n:"Lollypop Farm Spay/Neuter Assistance", c:"pets",
    d:"Low-cost spay and neuter surgeries for pet owners receiving public assistance (SNAP, HEAP, SSI, Medicaid, SSDI, Temporary Assistance) or with household income under $40,000. Also low-cost services for feral cat caregivers and approved Rescue Partner organizations. Appointment only.",
    ph:"585-223-1330", url:"https://www.lollypop.org/services/spayneuter-assistance/",
    ad:"99 Victor Rd, Fairport NY 14450",
    hr:"By appointment, M-F",
    doc:"Benefits card, recent 1040 tax form, or SSA benefit letter.",
    tg:["hh"], inc:200,
    town:"fairport", zip:"14450",
    serves: ["fairport","rochester","henrietta","greece","perinton"],
    reach:"regional" },

  { id:"hopeforpets", n:"Rochester Hope for Pets (Vet Bill Assistance)", c:"pets",
    d:"Financial grants to help pay for unexpected or emergency veterinary care. Awards typically cover a portion of the cost, not the full bill. NOT for emergencies — 5 business days for decision. Coverage area is 40 miles from Rochester, including all of Monroe County and parts of Wayne, Ontario, Livingston, Orleans, Genesee, Seneca, and Yates counties.",
    url:"https://www.rochesterhopeforpets.org/application",
    ad:"2816 Monroe Ave, Rochester NY 14618",
    hr:"M-F 9am-3pm",
    doc:"Estimate from your veterinarian for the procedure or treatment.",
    tg:["hh"],
    town:"rochester", zip:"14618", reach:"regional" },

  { id:"willowpets", n:"Willow Domestic Violence Center — Pet-Friendly Shelter", c:"pets",
    d:"If you or your family are leaving an unsafe home and you have a pet you can't bear to leave behind: Willow's emergency shelter accepts a variety of pets along with survivors and their children. You do not have to choose between your safety and your pet's safety. Call the 24-hour hotline.",
    ph:"585-232-7353", url:"https://willowcenterny.org",
    hr:"24/7 hotline",
    doc:"None.",
    tg:["any"],
    reach:"local",
    safetySensitive: true },

  // ── GREECE-SPECIFIC PROGRAMS (added 2026-04-12, source: greeceny.gov + greecepubliclibrary.org) ──
  { id:"greecehall", n:"Town of Greece Town Hall", c:"legal", d:"General town services, information, and referrals. Starting point for any town government question.", ph:"585-225-2000", ad:"1 Vince Tofany Blvd, Greece NY 14612", url:"https://greeceny.gov", hr:"M-F 9am-5pm", doc:"None", tg:["any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greecelib", n:"Greece Public Library", c:"education", d:"Free computers, WiFi, printing, tech help, kids programs, teen programs, museum passes. Library card is free.", ph:"585-225-8951", ad:"2 Vince Tofany Blvd, Greece NY 14612", url:"https://www.greecepubliclibrary.org", hr:"M-Th 9am-9pm, F-Sat 9am-5pm, Sun 12-4pm (Oct-Apr)", doc:"Proof of address for card", tg:["any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greececourt", n:"Greece Town Court", c:"legal", d:"Handles traffic tickets, small claims (up to $3,000), misdemeanors, violations, and parking ordinance cases.", ph:"585-227-3110", ad:"1 Vince Tofany Blvd, Greece NY 14612", url:"https://greeceny.gov/departments/town-court/", hr:"M-F 9am-5pm, payment window closes Wed 12-5pm", doc:"Court papers or ticket", tg:["any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greeceassessor", n:"Greece Assessor (Property Tax Exemptions)", c:"seniorSvc", d:"Handles STAR, senior, veterans, and disability property tax exemptions. Also assessment grievances and property reviews.", ph:"585-723-2308", ad:"1 Vince Tofany Blvd, Greece NY 14612", url:"https://greeceny.gov/departments/assessor/", hr:"M-F 9am-5pm", doc:"Varies by exemption type", tg:["sen","vet","dis","any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greeceanimal", n:"Greece Animal Services", c:"pets", d:"Dog licensing, lost and found pets, pet adoption, free rabies clinics, animal control. Call 911 for animal emergencies.", ph:"585-581-4025", ad:"500 Maiden Lane, Rochester NY 14616", url:"https://greeceny.gov/departments/animal-services/", hr:"M 9am-5pm, Tu-F 9am-9pm, Sat 9am-5pm", doc:"Rabies certificate for dog license", tg:["any"], town:"greece", zip:"14616", lat:43.2352, lng:-77.6618, reach:"local" },
  { id:"greecerec", n:"Greece Parks and Recreation", c:"youth", d:"Year-round programs: fitness classes, youth camps, senior trips, day trips, crafts, cards. Seasonal guides published online.", ph:"585-225-2000", ad:"1 Vince Tofany Blvd, Greece NY 14612", url:"https://greeceny.gov/departments/recreation/", hr:"M-F 9am-5pm", doc:"None", tg:["kids","sen","any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greecetax", n:"Greece Tax Collection", c:"legal", d:"Pay town property taxes in person, by mail, or online. 24-hour drop box at Town Hall. No phone payments.", ph:"585-225-2000", ad:"1 Vince Tofany Blvd, Greece NY 14612", url:"https://greeceny.gov/departments/tax-collection/", hr:"M-F 9am-5pm", doc:"Tax bill", tg:["any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greecesenior", n:"Greece Community & Senior Center", c:"seniorSvc", d:"Programs for 50+. Fitness, classes, meals, social events. Lunch M-F 11:30am.", ph:"585-723-2425", ad:"3 Vince Tofany Blvd, Rochester NY 14612", url:"https://greeceny.gov/departments/parksandrecreation/community-center/", hr:"M-Th 7am-8pm, F 7am-5pm, Sat-Sun 7am-1pm", doc:"None", tg:["sen","any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },
  { id:"greecefood", n:"Greece Ecumenical Food Shelf & Clothing Closet", c:"food", xref:["clothing"], d:"Emergency food and clothing. Serves Greece and Charlotte. Delivers to homebound. 24hr request hotline.", ph:"585-683-9674", ad:"500 Maiden Lane, Rochester NY 14616", url:"https://gefsandcc.org", hr:"Tu 10am-12pm, W 4-6pm, Sat 9-11am", doc:"None", tg:["any"], town:"greece", zip:"14616", lat:43.2352, lng:-77.6618, reach:"local" },
  { id:"missionshare", n:"Mission Share Outreach Center", c:"food", xref:["clothing"], d:"Food pantry and clothing closet. Monthly assistance plus Thanksgiving and Christmas programs.", ph:"585-368-0744", ad:"10 Cedarfield Commons, Rochester NY 14612", url:"https://missionshareoutreach.org", hr:"Tu-W 9am-3pm, Th 1-7pm", doc:"None", tg:["any"], town:"greece", zip:"14612", lat:43.2518, lng:-77.7036, reach:"local" },

  // BRIGHTON
  { id:"brightonclerk", n:"Brighton Town Clerk", c:"documents", d:"Marriage, dog, fishing licenses. Tax payments. Temporary location during Town Hall renovation.", ph:"585-784-5240", ad:"680 Westfall Rd, Rochester NY 14620", url:"https://www.brightonny.gov/directory.aspx?did=15", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"brighton", zip:"14620", reach:"local" },
  { id:"brightoncourt", n:"Brighton Town Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-784-5152", ad:"2300 Elmwood Ave, Rochester NY 14618", url:"https://www.brightonny.gov/64/Town-Court", hr:"M-F 9am-5pm", doc:"Court papers or ticket", tg:["any"], town:"brighton", zip:"14618", reach:"local" },
  { id:"brightonassessor", n:"Brighton Assessor", c:"housing", d:"Property assessments, STAR, senior and veteran exemptions, assessment grievances.", ph:"585-784-5215", ad:"680 Westfall Rd, Rochester NY 14620", url:"https://www.brightonny.gov/65/Assessor", hr:"M-F 9am-5pm", doc:"Varies by exemption type", tg:["sen","vet","dis","any"], town:"brighton", zip:"14620", reach:"local" },
  { id:"brightonbuilding", n:"Brighton Building & Planning", c:"housing", d:"Building permits, zoning, code enforcement.", ph:"585-784-5250", ad:"680 Westfall Rd, Rochester NY 14620", url:"https://www.brightonny.gov/595/Building-and-Planning", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"brighton", zip:"14620", reach:"local" },
  { id:"brightonfood", n:"Brighton Food Cupboard (JFS)", c:"food", d:"Weekly food deliveries including kosher, vegetarian, gluten-free. Call to get on the list.", ph:"585-271-5355", ad:"2131 Elmwood Ave Door A, Rochester NY 14618", url:"https://jfsrochester.org/brighton-food-cupboard/", hr:"M-F 9am-12pm", doc:"None", tg:["any"], town:"brighton", zip:"14618", reach:"local" },
  { id:"brightonlib", n:"Brighton Memorial Library", c:"education", d:"Free computers, WiFi, programs for all ages. Part of Monroe County Library System.", ph:"585-784-5300", ad:"2300 Elmwood Ave, Rochester NY 14618", url:"https://www.brightonlibrary.org", hr:"M-Th 9am-8pm, F 9am-6pm, Sat-Sun 12-4pm", doc:"Proof of address for card", tg:["any"], town:"brighton", zip:"14618", reach:"local" },
  { id:"brightonrec", n:"Brighton Recreation & Parks", c:"youth", d:"Year-round programs for all ages. Sports, camps, afterschool, fitness.", ph:"585-784-5260", ad:"1666 Winton Rd S, Rochester NY 14618", url:"https://www.brightonny.gov/220/Recreation-and-Parks", hr:"M-F 9am-5pm", doc:"None", tg:["kids","sen","any"], town:"brighton", zip:"14618", reach:"local" },
  { id:"brightonsenior", n:"Brighton Senior Program", c:"seniorSvc", d:"Drop-in activities, trips, lunch, equipment loans. Bus service to center on Tuesdays.", ph:"585-784-5266", ad:"Brookside Community Center, Brighton NY", url:"https://www.brightonny.gov/363/Brighton-Senior-Program", hr:"Drop-in", doc:"None", tg:["sen"], town:"brighton", zip:"14618", reach:"local" },
  { id:"brightonanimal", n:"Brighton Animal Control", c:"pets", d:"Dog control, lost pets. Voicemail M-F, Sat 9am-1pm. Emergencies call 911.", ph:"585-784-5120", url:"https://www.brightonny.gov/faq.aspx?TID=18", hr:"M-F 10am-6pm (voicemail), Sat 9am-1pm", doc:"None", tg:["any"], town:"brighton", zip:"14618", reach:"local" },
  { id:"brightonpp", n:"Planned Parenthood Brighton", c:"health", d:"Reproductive health, birth control, STI testing, cancer screening. Sliding scale for uninsured.", ph:"866-600-6886", ad:"2235 S Clinton Ave, Brighton NY 14618", url:"https://www.plannedparenthood.org/health-center/new-york/brighton/14618/brighton-health-center-3787-91040", hr:"See website", doc:"None required", tg:["any"], town:"brighton", zip:"14618", reach:"local" },
  { id:"strongties", n:"Strong Ties Community Support Clinic", c:"mental", d:"Outpatient mental health for severe/persistent illness. Free or sliding scale. CCBHC certified.", ph:"585-279-4900", ad:"2613 W Henrietta Rd Suite A, Rochester NY 14623", url:"https://www.urmc.rochester.edu/locations/strong-ties", hr:"M-F", doc:"Call for intake", tg:["any"], town:"brighton", zip:"14623", reach:"local" },

  // BROCKPORT / SWEDEN
  { id:"brockportclerk", n:"Brockport Village Clerk", c:"documents", d:"Village services, licenses, permits.", ph:"585-637-5300", ad:"127 Main St, Brockport NY 14420", url:"https://brockportny.org", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"brockport", zip:"14420", reach:"local" },
  { id:"brockportcourt", n:"Brockport Village Court", c:"legal", d:"Traffic tickets, small claims, violations.", ph:"585-637-1044", ad:"49 State St, Brockport NY 14420", url:"https://brockportny.gov/village-court/", hr:"M-F 7:30am-3pm", doc:"Court papers or ticket", tg:["any"], town:"brockport", zip:"14420", reach:"local" },
  { id:"brockportfood", n:"Brockport Ecumenical Food Shelf", c:"food", d:"Emergency food. Delivery available for qualifying individuals.", ph:"585-637-8169", ad:"14 State St, Brockport NY 14420", url:"https://www.brockportfoodshelf.org", hr:"First 4 Thursdays monthly 9am-12:30pm & 2-6pm", doc:"None", tg:["any"], town:"brockport", zip:"14420", serves:["sweden"], reach:"local" },
  { id:"sunypantry", n:"SUNY Brockport Pantry", c:"food", d:"Open to students, faculty, staff AND community. Fresh produce, dairy, frozen, non-perishable, personal items.", ad:"Dailey Hall, SUNY Brockport", url:"https://www.brockport.edu/support/student-affairs/basic-needs/food/", hr:"M-F 8am-5pm (semester)", doc:"None", tg:["any"], town:"brockport", zip:"14420", reach:"local" },
  { id:"gatheringtable", n:"The Gathering Table (Free Meal)", c:"food", d:"Free community meal at First Baptist Church. Everyone welcome.", ph:"585-637-9770", ad:"124 Main St, Brockport NY 14420", hr:"3rd Sunday monthly 1:30-3pm", doc:"None", tg:["any"], town:"brockport", zip:"14420", reach:"local" },
  { id:"oakorchard", n:"Oak Orchard Health (Brockport)", c:"health", xref:["dental","vision","mental"], d:"Primary care, dental, vision, AND behavioral health. Sliding scale. Accepts Medicaid, Medicare, uninsured.", ph:"585-637-3905", ad:"300 West Ave, Brockport NY 14420", url:"https://oakorchardhealth.org", hr:"M-Th 8am-8pm, F 8am-5pm, Sat 8am-12pm", doc:"None", tg:["any"], town:"brockport", zip:"14420", serves:["sweden"], reach:"local" },
  { id:"seymourlib", n:"Seymour Library", c:"education", d:"Books, digital resources, programs for all ages, free WiFi.", ph:"585-637-1050", ad:"161 East Ave, Brockport NY 14420", url:"https://seymourlibraryweb.org", hr:"M-Th 10am-8pm, F 10am-6pm, Sat 10am-3pm", doc:"Proof of address for card", tg:["any"], town:"brockport", zip:"14420", serves:["sweden"], reach:"local" },
  { id:"swedensenior", n:"Sweden Senior Center", c:"seniorSvc", d:"Activities, lunch Tu-F at noon (reservation required). 60+ and spouse.", ph:"585-637-8161", ad:"133 State St, Brockport NY 14420", url:"https://www.townofsweden.org", hr:"M/Tu/Th/F 9-3, W 9-4", doc:"None", tg:["sen"], town:"brockport", zip:"14420", serves:["sweden"], reach:"local" },
  { id:"swedenclarksonrec", n:"Sweden/Clarkson Recreation", c:"youth", d:"Sports, fitness, before/after school, youth and adult programs.", ph:"585-431-0090", ad:"4927 Lake Rd S, Brockport NY 14420", url:"https://swedenclarksonrec.recdesk.com", hr:"M-Th 6am-8pm, F 6am-6pm, Sat 8am-12pm", doc:"None", tg:["kids","any"], town:"brockport", zip:"14420", serves:["clarkson","sweden"], reach:"local" },

  // CHILI
  { id:"chiliclerk", n:"Chili Town Clerk", c:"documents", d:"Licenses, permits, tax payments.", ph:"585-889-6125", ad:"3333 Chili Ave, Rochester NY 14624", url:"https://www.townofchili.org", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"chili", zip:"14624", reach:"local" },
  { id:"chilicourt", n:"Chili Town Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-889-1999", ad:"3333 Chili Ave, Rochester NY 14624", url:"https://www.townofchili.org/257/Town-Court", hr:"M-F 9am-4pm", doc:"Court papers or ticket", tg:["any"], town:"chili", zip:"14624", reach:"local" },
  { id:"chiliassessor", n:"Chili Assessor", c:"housing", d:"Property assessments, exemptions, grievances.", ph:"585-889-6132", ad:"3333 Chili Ave, Rochester NY 14624", url:"https://www.townofchili.org/197/Assessors-Office", hr:"M-F 9am-5pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"chili", zip:"14624", reach:"local" },
  { id:"chilifood", n:"Chili Presbyterian Food Cupboard", c:"food", d:"Supplementary food for families in need. Community and beyond.", ph:"585-889-9896", ad:"3600 Chili Ave, Rochester NY 14624", url:"https://chili-presbyterian.org/food-cupboard/", hr:"3rd Saturday monthly 10am-11:30am", doc:"None", tg:["any"], town:"chili", zip:"14624", reach:"local" },
  { id:"gateschilifoodpantry", n:"Gates Chili School Food Pantry", c:"food", d:"For Gates-Chili students and families. Confidential.", ph:"585-247-5050", ad:"Gates Chili Admin Building", url:"https://www.gateschili.org/foodpantry", hr:"Wed 3-4pm", doc:"None", tg:["kids","any"], town:"chili", zip:"14624", serves:["gates"], reach:"local" },
  { id:"chililib", n:"Chili Public Library", c:"education", d:"Books, digital resources, programs. Inside the Chili Community Center.", ph:"585-889-2200", ad:"3237 Chili Ave, Rochester NY 14624", url:"https://www.chililibrary.org", hr:"M-Th 9am-9pm, F-Sat 9am-5pm", doc:"Proof of address for card", tg:["any"], town:"chili", zip:"14624", reach:"local" },
  { id:"chilirec", n:"Chili Recreation", c:"youth", d:"Inclusive programs for all ages. Sports, fitness, family events, seasonal celebrations.", ph:"585-889-4680", ad:"4400 Buffalo Rd, North Chili NY 14514", url:"https://www.chiliny.gov/236/Programs-Events", hr:"M-F 9am-5pm", doc:"None", tg:["kids","any"], town:"chili", zip:"14514", reach:"local" },
  { id:"chilisenior", n:"Chili Senior Center", c:"seniorSvc", d:"Programs for 55+. Activities, trips, breakfast Wed 9-10am. Inside Chili Community Center.", ph:"585-889-6185", ad:"3237 Chili Ave, Rochester NY 14624", url:"https://www.townofchili.org/277/Chili-Senior-Center", hr:"M-F 9am-5pm", doc:"None", tg:["sen"], town:"chili", zip:"14624", reach:"local" },
  { id:"chilidogcontrol", n:"Chili Dog Control", c:"pets", d:"Dog control, lost pets. 911 for after hours.", ph:"585-889-6175", ad:"3333 Chili Ave, Rochester NY 14624", url:"https://www.townofchili.org/205/Dog-Control", hr:"M-F 9am-5pm", doc:"None", tg:["any"], town:"chili", zip:"14624", reach:"local" },
  { id:"providencehousing", n:"Providence Housing", c:"housing", xref:["disabilitySvc","veteranSvc"], d:"Affordable and supportive housing for families, veterans, and people with disabilities.", ph:"585-529-9555", ad:"1150 Buffalo Rd, Rochester NY 14624", url:"https://providencehousing.org", hr:"M-F 8:30am-5pm", doc:"Varies", tg:["dis","vet","any"], town:"chili", zip:"14624", reach:"local" },

  // CHURCHVILLE / RIGA
  { id:"churchvilleclerk", n:"Churchville Village Clerk", c:"documents", d:"Village services, water/sewer billing.", ph:"585-293-3720", ad:"23 E Buffalo St, Churchville NY 14428", url:"https://churchvilleny.gov", hr:"M-F 8:30am-4pm", doc:"Varies", tg:["any"], town:"churchville", zip:"14428", reach:"local" },
  { id:"rigaclerk", n:"Riga Town Clerk", c:"documents", d:"Licenses, permits, tax payments.", ph:"585-293-2530", ad:"6475 Buffalo Rd, Churchville NY 14428", url:"https://www.townofriga.com/town-clerk/", hr:"M-F 9am-4pm", doc:"Varies", tg:["any"], town:"churchville", zip:"14428", reach:"local" },
  { id:"rigacourt", n:"Riga Town Court", c:"legal", d:"Traffic tickets, small claims, violations.", ph:"585-293-3880", ad:"6460 Buffalo Rd, Churchville NY 14428", url:"https://www.townofriga.com/town-court/", hr:"M-F 9am-4pm", doc:"Court papers or ticket", tg:["any"], town:"churchville", zip:"14428", reach:"local" },
  { id:"rigaassessor", n:"Riga Assessor", c:"housing", d:"Property assessments, exemptions.", ph:"585-293-3880", ad:"6460 Buffalo Rd, Churchville NY 14428", url:"https://www.townofriga.com/assessor/", hr:"M-F 9am-4pm", doc:"Varies", tg:["any"], town:"churchville", zip:"14428", reach:"local" },
  { id:"newmanrigalib", n:"Newman Riga Library", c:"education", d:"Books, programs, community resources.", ph:"585-293-2009", ad:"1 S Main St, Churchville NY 14428", url:"https://newmanrigalibrary.org", hr:"M/W/F 11am-5pm, Tu/Th 11am-8pm", doc:"Proof of address for card", tg:["any"], town:"churchville", zip:"14428", reach:"local" },
  { id:"rigadogcontrol", n:"Riga Dog Control", c:"pets", d:"Dog control and licensing. 911 for emergencies.", ph:"585-293-3880", ad:"6475 Buffalo Rd, Churchville NY 14428", url:"https://www.townofriga.com/dog-control/", hr:"M-F 9am-4pm", doc:"Rabies certificate for dog license", tg:["any"], town:"churchville", zip:"14428", reach:"local" },

  // CLARKSON
  { id:"clarksonclerk", n:"Clarkson Town Clerk", c:"documents", d:"Licenses, permits, tax payments.", ph:"585-637-1130", ad:"3710 Lake Rd, Clarkson NY 14430", url:"https://townofclarksonny.gov/town-clerks-office/", hr:"M/W/Th 8am-4pm, Tu 8am-6pm, F 8am-1pm", doc:"Varies", tg:["any"], town:"clarkson", zip:"14430", reach:"local" },
  { id:"clarksoncourt", n:"Clarkson Justice Court", c:"legal", d:"Traffic tickets, small claims, violations.", ph:"585-637-1134", ad:"3655 Lake Rd, Clarkson NY 14430", url:"https://townofclarksonny.gov/justice-court/", hr:"Call for hours", doc:"Court papers or ticket", tg:["any"], town:"clarkson", zip:"14430", reach:"local" },
  { id:"clarksondogcontrol", n:"Clarkson Dog Control", c:"pets", d:"Dog control, lost pets.", ph:"585-637-4260", ad:"4200 Sweden Walker Rd, Brockport NY 14420", hr:"Call", doc:"None", tg:["any"], town:"clarkson", zip:"14430", reach:"local" },

  // EAST ROCHESTER
  { id:"erclerk", n:"East Rochester Clerk/Treasurer", c:"documents", d:"Town/Village combined government. Licenses, permits, billing.", ph:"585-419-8282", ad:"317 Main St, East Rochester NY 14445", url:"https://eastrochesterny.gov", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"east-rochester", zip:"14445", reach:"local" },
  { id:"ercourt", n:"East Rochester Town Court", c:"legal", d:"Court convenes Mondays at 4:30pm.", ph:"585-385-2576", ad:"120 W Commercial St, East Rochester NY 14445", url:"https://eastrochesterny.gov/Departments/Town-Court/Home", hr:"M-F 8:30am-4:30pm, court Mon 4:30pm", doc:"Court papers or ticket", tg:["any"], town:"east-rochester", zip:"14445", reach:"local" },
  { id:"erresource", n:"East Rochester Community Resource Center", c:"food", xref:["clothing","prescriptions","transport"], d:"Food pantry (incl. baby food/formula), clothing, household goods, furniture, Rx assistance, transport help.", ph:"585-586-0525", ad:"333 E Chestnut St, East Rochester NY 14445", url:"https://eastrochesterny.gov/community-resources/resource-center", hr:"M-F 9am-2pm", doc:"Proof of residence, ID", tg:["any"], town:"east-rochester", zip:"14445", reach:"local" },
  { id:"erlib", n:"East Rochester Public Library", c:"education", d:"Books, programs, digital resources.", ph:"585-586-8302", ad:"317 Main St, East Rochester NY 14445", url:"https://eastrochesterny.gov/Departments/Public-Library/Library-Home", hr:"M 9am-7pm, Tu-Th 9am-6pm, F 9am-5pm, Sat 10am-2pm", doc:"Proof of address for card", tg:["any"], town:"east-rochester", zip:"14445", reach:"local" },
  { id:"ersenior", n:"Jean Daniel Senior Center", c:"seniorSvc", d:"Activities, trips, singles group. 55+. $4/yr ER residents.", ph:"585-385-3643", ad:"317 Main St, East Rochester NY 14445", url:"https://eastrochesterny.gov/Community-Resources/Senior-Center", hr:"Call for hours", doc:"None", tg:["sen"], town:"east-rochester", zip:"14445", reach:"local" },

  // FAIRPORT / PERINTON
  { id:"fairportclerk", n:"Fairport Village Clerk", c:"documents", d:"Village services.", ph:"585-421-3202", ad:"31 S Main St, Fairport NY 14450", url:"https://www.village.fairport.ny.us", hr:"Call for hours", doc:"Varies", tg:["any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"perintonclerk", n:"Perinton Town Clerk", c:"documents", d:"Licenses, permits, tax payments.", ph:"585-223-0770", ad:"1350 Turk Hill Rd, Fairport NY 14450", url:"https://perinton.gov", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"perintoncourt", n:"Perinton Justice Court", c:"legal", d:"Traffic tickets, small claims, violations. Handles Fairport Village cases too.", ph:"585-223-0770", ad:"1350 Turk Hill Rd, Fairport NY 14450", url:"https://perinton.gov", hr:"Call for schedule", doc:"Court papers or ticket", tg:["any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"perintonfood", n:"Perinton Food Shelf", c:"food", d:"Emergency food — week's supply by household size. Serves 14450, 14534, 14526.", ph:"585-425-7410", ad:"Fairport NY 14450", url:"https://perintonfoodshelf.org", hr:"Call; pickup F 9-10:30am", doc:"None", tg:["any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"helpinghands", n:"Helping Hands Food Pantry", c:"food", d:"7-day supply of groceries and personal care items. Free. Faith-based, open to all.", ad:"38 E Church St, Fairport NY 14450", hr:"3rd & 4th Wed 3-6pm", doc:"None", tg:["any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"fairportlib", n:"Fairport Public Library", c:"education", d:"Books, digital resources, community programs, films.", ph:"585-223-9091", ad:"1 Fairport Village Landing, Fairport NY 14450", url:"https://www.fairportlibrary.org", hr:"M-Th 9am-9pm, F 9am-6pm, Sat 9am-5pm, Sun 12-3pm", doc:"Proof of address for card", tg:["any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"perintonrec", n:"Perinton Community Center", c:"youth", d:"Aquatics, gym, fitness, 55+ lounge. Programs for all ages.", ph:"585-223-5050", ad:"1350 Turk Hill Rd, Fairport NY 14450", url:"https://perinton.gov", hr:"See website", doc:"None", tg:["kids","sen","any"], town:"fairport", zip:"14450", reach:"local" },
  { id:"perintonsenior", n:"Perinton Senior Programs", c:"seniorSvc", d:"Meals, town bus, van for appointments, activities and events.", ph:"585-223-1617", ad:"1350 Turk Hill Rd, Fairport NY 14450", url:"https://perinton.gov", hr:"Call", doc:"None", tg:["sen"], town:"fairport", zip:"14450", reach:"local" },
  { id:"perintonanimal", n:"Perinton Animal Control", c:"pets", d:"Dog control and licensing. After-hours emergencies: 585-425-7380.", ph:"585-223-5115", ad:"1350 Turk Hill Rd, Fairport NY 14450", url:"https://perinton.gov/departments/public-works/animal-control/", hr:"M-F 7:30am-4pm", doc:"Rabies certificate for dog license", tg:["any"], town:"fairport", zip:"14450", reach:"local" },

  // GATES
  { id:"gatesclerk", n:"Gates Town Clerk", c:"documents", d:"Licenses, permits, tax payments.", ph:"585-429-8205", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov", hr:"M-F 8am-5pm", doc:"Varies", tg:["any"], town:"gates", zip:"14624", reach:"local" },
  { id:"gatescourt", n:"Gates Town Court", c:"legal", d:"Traffic tickets, small claims, violations.", ph:"585-426-0410", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov", hr:"Call for schedule", doc:"Court papers or ticket", tg:["any"], town:"gates", zip:"14624", reach:"local" },
  { id:"gatesassessor", n:"Gates Assessor", c:"housing", d:"Property assessments, STAR, exemptions.", ph:"585-429-8226", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov/assessor/", hr:"M-F 8am-5pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"gates", zip:"14624", reach:"local" },
  { id:"gatesbuilding", n:"Gates Building Inspector", c:"housing", d:"Building permits, inspections, code compliance.", ph:"585-429-8242", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov", hr:"M-F 8am-5pm", doc:"Varies", tg:["any"], town:"gates", zip:"14624", reach:"local" },
  { id:"swemfood", n:"SWEM Community Services (Food Cupboard)", c:"food", xref:["clothing"], d:"Emergency food for 11 zip codes in SW Rochester, Gates, Chili, Scottsville. Delivers to seniors. 40+ years running.", ph:"585-235-4491", ad:"1049 Wegman Rd, Rochester NY 14624", url:"https://gatespres.org/swem-community-services/", hr:"M-F 10:30am-1:30pm", doc:"None", tg:["any"], town:"gates", zip:"14624", serves:["chili","scottsville"], reach:"local" },
  { id:"sttheodorefood", n:"St. Theodore's Food Cupboard", c:"food", d:"Emergency food. 4-5 day supply: staples, frozen meat, produce. Serves 14606 and 14624.", ph:"585-429-5360", ad:"168 Spencerport Rd, Rochester NY 14606", url:"https://sttheodoreschurch.com/food-cupboard", hr:"M/W/Th 10am-12pm (emergencies)", doc:"None", tg:["any"], town:"gates", zip:"14606", reach:"local" },
  { id:"gateslib", n:"Gates Public Library", c:"education", d:"Books, digital resources, programs, free WiFi.", ph:"585-247-6446", ad:"902 Elmgrove Rd, Rochester NY 14624", url:"https://gateslibrary.org", hr:"See website", doc:"Proof of address for card", tg:["any"], town:"gates", zip:"14624", reach:"local" },
  { id:"gatesrec", n:"Gates Recreation & Parks", c:"youth", d:"Programs for all ages. Community center.", ph:"585-429-8289", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov/recreation-parks/", hr:"Call", doc:"None", tg:["kids","any"], town:"gates", zip:"14624", reach:"local" },
  { id:"gatessenior", n:"Gates Senior Center", c:"seniorSvc", d:"Lunch Tu/W/Th 11:30am. Activities, programs, social events.", ph:"585-429-8232", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov/seniors/", hr:"See website", doc:"None", tg:["sen"], town:"gates", zip:"14624", reach:"local" },
  { id:"gatesdogwarden", n:"Gates Code Enforcement / Dog Warden", c:"pets", d:"Dog control, code enforcement, property complaints.", ph:"585-429-8279", ad:"1605 Buffalo Rd, Rochester NY 14624", url:"https://www.townofgatesny.gov", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"gates", zip:"14624", reach:"local" },

  // HAMLIN
  { id:"hamlinclerk", n:"Hamlin Town Clerk", c:"documents", d:"Licenses, permits, tax payments, vital records.", ph:"585-964-2421", ad:"1658 Lake Rd, Hamlin NY 14464", url:"https://hamlinny.org/town-clerk/", hr:"M-F 8am-4pm", doc:"Varies", tg:["any"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"hamlincourt", n:"Hamlin Town Court", c:"legal", d:"Traffic tickets, small claims, violations. Arraignments Mon 7pm.", ph:"585-964-8641", ad:"1650 Lake Rd, Hamlin NY 14464", url:"https://hamlinny.org/justice-court/", hr:"M-Th 8am-1pm, F 8am-12pm", doc:"Court papers or ticket", tg:["any"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"hamlinassessor", n:"Hamlin Assessor", c:"housing", d:"Property assessments, STAR, senior/veteran/disability exemptions.", ph:"585-964-8748", ad:"1658 Lake Rd, Hamlin NY 14464", url:"https://hamlinny.org/assessors-office/", hr:"M-F 8am-3pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"hamlinbuilding", n:"Hamlin Building Inspector", c:"housing", d:"Building permits, code enforcement, zoning compliance.", ph:"585-964-8181", ad:"1658 Lake Rd, Hamlin NY 14464", url:"https://hamlinny.org/building-inspector/", hr:"M-F 8am-4pm", doc:"Varies", tg:["any"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"lifesolutionsfood", n:"Life Solutions of Hamlin (Food Pantry)", c:"food", xref:["clothing","pets"], d:"Emergency food pantry serving Hamlin and Clarkson. Also Treasure Store (low-cost items), backpack program, holiday baskets. Emergency pet food available.", ph:"585-964-7420", ad:"1696 Lake Rd, Hamlin NY 14464", url:"https://www.lifesolutionshamlin.org", hr:"Thu & Sat 10am-3pm", doc:"None", tg:["any"], town:"hamlin", zip:"14464", serves:["clarkson"], reach:"local" },
  { id:"hamlinlib", n:"Hamlin Public Library", c:"education", d:"Free computers, WiFi, printing, programs for all ages. Monroe County Library System.", ph:"585-964-2320", ad:"1680 Lake Rd, Hamlin NY 14464", url:"https://hamlinlibraryny.org", hr:"M/W 10am-6pm, Tu/Th 10am-8pm, F 10am-4pm, Sat 10am-2pm", doc:"Proof of address for card", tg:["any"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"hamlinsenior", n:"Hamlin Seniors Program", c:"seniorSvc", d:"Social group for 55+. Monthly meetings 4th Tuesday 9:30am. Lunch, day trips, community events.", ph:"585-781-4063", ad:"1658 Lake Rd, Hamlin NY 14464", url:"https://hamlinny.org/seniors/", hr:"4th Tue monthly 9:30am", doc:"None", tg:["sen"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"hamlinrec", n:"Hamlin Recreation", c:"youth", d:"Summer playground, sports, before/after school programs, fitness, senior programming.", ph:"585-964-7222", ad:"1658 Lake Rd, Hamlin NY 14464", url:"https://hamlinny.myrec.com/info/default.aspx", hr:"M-F 8am-4pm", doc:"None", tg:["kids","sen","any"], town:"hamlin", zip:"14464", reach:"local" },
  { id:"hamlindogcontrol", n:"Hamlin Dog Control / Dog Shelter", c:"pets", d:"No-kill shelter. Lost/found dogs, adoption, emergency pet housing up to 2 weeks. Emergency pet food and cat litter.", ph:"585-353-8177", ad:"80 Railroad Ave, Hamlin NY 14464", url:"https://hamlinny.org/dog-control/", hr:"By appointment", doc:"None", tg:["any"], town:"hamlin", zip:"14464", reach:"local" },

  // HENRIETTA
  { id:"henriettaclerk", n:"Henrietta Town Clerk", c:"documents", d:"Licenses, permits, tax payments, voter registration.", ph:"585-334-7700", ad:"475 Calkins Rd, Henrietta NY 14467", url:"https://www.henriettany.gov/townclerk", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"henrietta", zip:"14467", reach:"local" },
  { id:"henriettacourt", n:"Henrietta Town Court", c:"legal", d:"Traffic tickets, small claims, local ordinance cases.", ph:"585-359-2640", ad:"95 Methodist Hill Dr Suite 800, Rochester NY 14623", url:"https://www.henriettany.gov/towncourt", hr:"M-Th 9am-5pm, F 9am-4pm", doc:"Court papers or ticket", tg:["any"], town:"henrietta", zip:"14623", reach:"local" },
  { id:"henriettaassessor", n:"Henrietta Assessor", c:"housing", d:"Property assessments, STAR exemptions, grievances.", ph:"585-334-7700", ad:"475 Calkins Rd, Henrietta NY 14467", url:"https://www.henriettany.gov/assessorsoffice", hr:"M-F 9am-5pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"henrietta", zip:"14467", reach:"local" },
  { id:"henriettabuilding", n:"Henrietta Building Department", c:"housing", d:"Building permits, code enforcement, inspections.", ph:"585-359-7060", ad:"475 Calkins Rd, Henrietta NY 14467", url:"https://www.henriettany.gov/building", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"], town:"henrietta", zip:"14467", reach:"local" },
  { id:"venturefood", n:"Venture Compassionate Ministries Food Pantry", c:"food", d:"Free food and hygiene supplies. No income check. 2,200+ families/year. Trust-based.", ph:"585-334-8130", ad:"4045 East Henrietta Rd, Henrietta NY 14467", url:"https://venturerochester.org/food-pantry", hr:"Wed 10am-12:45pm, Sat 10am-12:45pm", doc:"None", tg:["any"], town:"henrietta", zip:"14467", reach:"local" },
  { id:"rhaftfood", n:"RHAFT (Rush-Henrietta Food Terminal)", c:"food", xref:["transport"], d:"Emergency food for R-H district residents. Call for phone interview, volunteers deliver. Also FISH program: free rides to medical appointments.", ph:"585-453-2370", ad:"Henrietta NY 14467", url:"https://fishrhaftinc.org/", hr:"M/W 9am-3pm (phone)", doc:"None", tg:["any"], town:"henrietta", zip:"14467", serves:["rush"], reach:"local" },
  { id:"rhkickinghunger", n:"R-H Kicking Hunger School Food Pantry", c:"food", d:"Food pantry for R-H school families. Dry foods, personal care, school supplies. Expanded menu for international community.", ph:"585-359-7979", ad:"3288 East Henrietta Rd, Henrietta NY 14467", url:"https://www.rhnet.org/foodpantry", hr:"Tue 9:45-11:15am, Thu 4:30-6pm", doc:"None", tg:["kids","any"], town:"henrietta", zip:"14467", reach:"local" },
  { id:"henriettalib", n:"Henrietta Public Library", c:"education", d:"Full-service library. Programs for all ages. Monroe County Library System.", ph:"585-359-7092", ad:"625 Calkins Rd, Rochester NY 14623", url:"https://www.hpl.org/", hr:"M-Th 9am-9pm, F 9am-5pm, Sat 10am-5pm", doc:"Proof of address for card", tg:["any"], town:"henrietta", zip:"14623", reach:"local" },
  { id:"henriettasenior", n:"Henrietta Senior Center", c:"seniorSvc", d:"Free programs for 60+. Fitness, hot lunch M/Tu/W, grocery trips, transport to center.", ph:"585-334-4030", ad:"515 Calkins Rd, Rochester NY 14623", url:"https://www.henriettany.gov/community/page/senior-center", hr:"M-F 9am-3pm", doc:"None", tg:["sen"], town:"henrietta", zip:"14623", reach:"local" },
  { id:"henriettarec", n:"Henrietta Recreation Center", c:"youth", d:"Fitness, sports leagues, youth programs, seasonal activities.", ph:"585-359-2540", ad:"605 Calkins Rd, Henrietta NY 14623", url:"https://henriettany.myrec.com/", hr:"M-F 7am-9pm, Sat-Sun 8am-5pm", doc:"None", tg:["kids","any"], town:"henrietta", zip:"14623", reach:"local" },
  { id:"henriettadogcontrol", n:"Henrietta Animal Control", c:"pets", d:"Dog control, stray/barking/dangerous dog complaints. Picked-up dogs held at Suburban Animal Hospital.", ph:"585-359-7009", ad:"475 Calkins Rd, Henrietta NY 14467", url:"https://www.henriettany.gov/publicworks/page/dog-control", hr:"Call anytime", doc:"None", tg:["any"], town:"henrietta", zip:"14467", reach:"local" },

  // HILTON / PARMA
  { id:"hiltonclerk", n:"Hilton Village Clerk", c:"documents", d:"Village services, permits, general administration.", ph:"585-392-4144", ad:"59 Henry St, Hilton NY 14468", url:"https://hiltonny.gov/", hr:"M-F 8am-4:30pm", doc:"Varies", tg:["any"], town:"hilton", zip:"14468", reach:"local" },
  { id:"parmaclerk", n:"Parma Town Clerk", c:"documents", d:"Dog licenses, tax collection, vital records.", ph:"585-392-9461", ad:"1300 Hilton Parma Corners Rd, Hilton NY 14468", url:"https://parmany.gov/departments/town-clerk/", hr:"M-W 8am-4pm, Th 8am-5pm, F 8am-4pm", doc:"Varies", tg:["any"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },
  { id:"parmacourt", n:"Parma Town Court", c:"legal", d:"Traffic tickets, small claims, violations for Town of Parma including Village of Hilton.", ph:"585-392-9470", ad:"1300 Hilton Parma Corners Rd, Hilton NY 14468", url:"https://parmany.gov/departments/court/", hr:"M/Tu/Th from 7:30am", doc:"Court papers or ticket", tg:["any"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },
  { id:"parmabuilding", n:"Parma Building Department", c:"housing", d:"Building permits, inspections, code enforcement for Town of Parma.", ph:"585-392-9449", ad:"1300 Hilton Parma Corners Rd, Hilton NY 14468", url:"https://parmany.gov/departments/building/", hr:"Call for hours", doc:"Varies", tg:["any"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },
  { id:"hiltonfoodshelf", n:"Hilton Parma Emergency Food Shelf", c:"food", d:"Emergency food pantry run by Council of Churches. Serves Hilton School District residents.", ph:"585-234-2090", ad:"59 Henry St Rm 201, Hilton NY 14468", url:"https://hiltonparmacommunitycouncilofchurches.weebly.com/foodshelf.html", hr:"Tu 8:30-11am & 1-3pm, W 10am-3pm, Th 10am-12pm & 4-6pm", doc:"None", tg:["any"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },
  { id:"parmalib", n:"Parma Public Library", c:"education", d:"Books, programs, computer access. Monroe County Library System.", ph:"585-392-8350", ad:"7 West Ave, Hilton NY 14468", url:"https://www.parmapubliclibrary.org/", hr:"M-Th 10am-8pm, F 10am-6pm, Sat 10am-2pm", doc:"Proof of address for card", tg:["any"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },
  { id:"hiltonsenior", n:"Hilton-Parma Senior Center", c:"seniorSvc", d:"Programs for 55+. Chair yoga, line dancing, Lunch Club 60, transport, films.", ph:"585-392-9030", ad:"59 Henry St, Hilton NY 14468", url:"https://hiltonny.myrec.com/info/dept/default.aspx", hr:"M-F 8am-4:30pm", doc:"None", tg:["sen"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },
  { id:"hiltonrec", n:"Hilton-Parma Parks and Recreation", c:"youth", d:"Summer camps, preschool, youth sports, adult programs. Dog park, playgrounds, courts.", ph:"585-392-9030", ad:"59 Henry St, Hilton NY 14468", url:"https://hiltonny.myrec.com/", hr:"M-F 8am-4:30pm", doc:"None", tg:["kids","any"], town:"hilton", zip:"14468", serves:["parma"], reach:"local" },

  // HONEOYE FALLS / MENDON
  { id:"hfclerk", n:"Honeoye Falls Village Clerk", c:"documents", d:"Village services, permits, administration.", ph:"585-624-1711", ad:"5 East St, Honeoye Falls NY 14472", url:"https://www.villageofhoneoyefalls.gov/", hr:"M-Th 8am-4pm, F 8am-12:30pm", doc:"Varies", tg:["any"], town:"honeoye-falls", zip:"14472", reach:"local" },
  { id:"mendonclerk", n:"Mendon Town Clerk", c:"documents", d:"Licenses, permits, vital records, tax collection.", ph:"585-624-6060", ad:"16 West Main St, Honeoye Falls NY 14472", url:"https://townofmendonny.gov/departments/town-clerk/", hr:"M-Th 8am-4pm, F 8am-1pm", doc:"Varies", tg:["any"], town:"honeoye-falls", zip:"14472", serves:["mendon"], reach:"local" },
  { id:"mendoncourt", n:"Mendon Town Court", c:"legal", d:"Traffic tickets, small claims, violations. Also handles former Honeoye Falls Village Court cases (abolished April 2025).", ph:"585-624-6060", ad:"16 West Main St, Honeoye Falls NY 14472", url:"https://townofmendonny.gov/", hr:"Call for schedule", doc:"Court papers or ticket", tg:["any"], town:"honeoye-falls", zip:"14472", serves:["mendon"], reach:"local" },
  { id:"mendonbuilding", n:"Mendon Building Department", c:"housing", d:"Building permits, inspections, code enforcement.", ph:"585-624-6066", ad:"16 West Main St, Honeoye Falls NY 14472", url:"https://townofmendonny.gov/departments/building/", hr:"M-Th 8am-4pm, F 8am-1pm", doc:"Varies", tg:["any"], town:"honeoye-falls", zip:"14472", serves:["mendon"], reach:"local" },
  { id:"hffishfood", n:"FISH Combined Communities Food Closet", c:"food", d:"Emergency food for Honeoye Falls, Mendon, and West Bloomfield. By appointment only.", ph:"585-453-2370", ad:"153 East St, Honeoye Falls NY 14472", url:"https://hffishfoodcloset.weebly.com/", hr:"M-Th 8am-4pm (by appointment)", doc:"None", tg:["any"], town:"honeoye-falls", zip:"14472", serves:["mendon"], reach:"local" },
  { id:"mendonlib", n:"Mendon Public Library", c:"education", d:"Books, programs, internet access. Monroe County Library System.", ph:"585-624-6067", ad:"22 North Main St, Honeoye Falls NY 14472", url:"https://mendonlibrary.org/", hr:"M-Th 9am-8pm, F 9am-5pm, Sat 9am-3pm", doc:"Proof of address for card", tg:["any"], town:"honeoye-falls", zip:"14472", serves:["mendon"], reach:"local" },
  { id:"mendonrec", n:"Mendon-Honeoye Falls Recreation", c:"youth", d:"Summer day camp, CIT program for teens 15+, seasonal activities.", ph:"585-624-7168", ad:"16 West Main St, Honeoye Falls NY 14472", url:"https://townofmendonny.gov/", hr:"Call for schedule", doc:"None", tg:["kids","any"], town:"honeoye-falls", zip:"14472", serves:["mendon"], reach:"local" },

  // IRONDEQUOIT
  { id:"irondequoitclerk", n:"Irondequoit Town Clerk", c:"documents", d:"Licenses, permits, tax payments, voter registration.", ph:"585-467-8840", ad:"1280 Titus Ave, Rochester NY 14617", url:"https://www.irondequoit.gov/161/Clerk", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"irondequoit", zip:"14617", reach:"local" },
  { id:"irondequoitcourt", n:"Irondequoit Town Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-336-6040", ad:"1300 Titus Ave, Rochester NY 14617", url:"https://www.irondequoit.gov/299/Town-Court", hr:"M-Th 9am-5pm, F 8am-4pm", doc:"Court papers or ticket", tg:["any"], town:"irondequoit", zip:"14617", reach:"local" },
  { id:"irondequoitassessor", n:"Irondequoit Assessor", c:"housing", d:"Property assessments, STAR, senior/veteran/disability exemptions.", ph:"585-336-6055", ad:"1280 Titus Ave, Rochester NY 14617", url:"https://www.irondequoit.gov/157/Assessor", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"irondequoit", zip:"14617", reach:"local" },
  { id:"irondequoitbuilding", n:"Irondequoit Building Department", c:"housing", d:"Building permits, zoning, code enforcement, inspections.", ph:"585-336-6020", ad:"1280 Titus Ave, Rochester NY 14617", url:"https://www.irondequoit.gov/180/Building", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"irondequoit", zip:"14617", reach:"local" },
  { id:"irondequoitcupboard", n:"Irondequoit Community Cupboard", c:"food", d:"Emergency food pantry for Irondequoit residents. By appointment. Also backpack program, school supplies, holiday programs.", ph:"585-336-9107", ad:"2841 Culver Rd, Rochester NY 14622", url:"https://www.irondequoitcommunitycupboard.org/", hr:"Office M/W 9am-4pm, F 9am-12pm. Distribution by appointment.", doc:"None", tg:["any"], town:"irondequoit", zip:"14622", reach:"local" },
  { id:"irondequoitlunchclub", n:"Irondequoit Lunch Club 60 (Senior Meals)", c:"food", xref:["seniorSvc"], d:"Hot lunch for 60+ at Community Center. Suggested $3.50 contribution. M-F at 11:45am.", ph:"585-336-6070", ad:"450 Skyview Centre Pkwy Suite 200, Rochester NY 14622", url:"https://www.irondequoit.gov/294/Adult-Senior-Services", hr:"M-F, meals at 11:45am", doc:"None", tg:["sen"], town:"irondequoit", zip:"14622", reach:"local" },
  { id:"irondequoitlib", n:"Irondequoit Public Library", c:"education", d:"One of the busiest in Monroe County. Free computers, WiFi, Maker's Lab, programs for all ages.", ph:"585-336-6060", ad:"1290 Titus Ave, Rochester NY 14617", url:"https://irondequoitlibrary.org/", hr:"M-Th 10am-9pm, F 10am-6pm, Sat 10am-5pm, Sun 1-4pm", doc:"Proof of address for card", tg:["any"], town:"irondequoit", zip:"14617", reach:"local" },
  { id:"irondequoitsenior", n:"Irondequoit Senior Center", c:"seniorSvc", d:"Drop-in for 60+. Fitness, cards, bocce, billiards, golf/softball leagues. Free medical equipment loans (walkers, wheelchairs).", ph:"585-336-6070", ad:"450 Skyview Centre Pkwy Suite 200, Rochester NY 14622", url:"https://www.irondequoit.gov/294/Adult-Senior-Services", hr:"M-F 8:30am-4:30pm", doc:"None", tg:["sen"], town:"irondequoit", zip:"14622", reach:"local" },
  { id:"irondequoitrec", n:"Irondequoit Recreation", c:"youth", d:"Walking track, basketball, turf field, fitness, summer camps, childcare center. Camp Eastman with spray park.", ph:"585-336-6070", ad:"450 Skyview Centre Pkwy Suite 200, Rochester NY 14622", url:"https://www.irondequoit.gov/293/Recreation", hr:"M-F 6:30am-8pm, Sat 8am-6pm, Sun 10am-4pm", doc:"None", tg:["kids","any"], town:"irondequoit", zip:"14622", reach:"local" },
  { id:"irondequoitanimal", n:"Irondequoit Animal Control", c:"pets", d:"Dog licensing, lost pets, wildlife removal during business hours. Does not house surrendered pets.", ph:"585-336-6052", ad:"1280 Titus Ave, Rochester NY 14617", url:"https://www.irondequoit.gov/209/Animal-Control", hr:"M-F 8:30am-4:30pm", doc:"None", tg:["any"], town:"irondequoit", zip:"14617", reach:"local" },

  // OGDEN / SPENCERPORT
  { id:"ogdenclerk", n:"Ogden Town Clerk", c:"documents", d:"Licenses, permits, tax payments.", ph:"585-617-6111", ad:"269 Ogden Center Rd, Spencerport NY 14559", url:"https://ogdenny.gov/town-clerk-2/", hr:"M-F 8:30am-4pm", doc:"Varies", tg:["any"], town:"ogden", zip:"14559", reach:"local" },
  { id:"spencerportclerk", n:"Spencerport Village Clerk", c:"documents", d:"Village services, permits.", ph:"585-352-4771", ad:"27 West Ave, Spencerport NY 14559", url:"https://spencerport.gov/village-clerk/", hr:"M-F 9am-4pm (summer M-Th 8:30am-4pm, F 8:30am-1pm)", doc:"Varies", tg:["any"], town:"spencerport", zip:"14559", reach:"local" },
  { id:"ogdencourt", n:"Ogden Justice Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-617-6100", ad:"269 Ogden Center Rd, Spencerport NY 14559", url:"https://ogdenny.gov/courts/", hr:"M-F 9am-3pm", doc:"Court papers or ticket", tg:["any"], town:"ogden", zip:"14559", serves:["spencerport"], reach:"local" },
  { id:"ogdenassessor", n:"Ogden Assessor", c:"housing", d:"Property assessments, STAR, exemptions.", ph:"585-617-6107", ad:"269 Ogden Center Rd, Spencerport NY 14559", url:"https://ogdenny.gov/assessors/", hr:"M-F 8:30am-4pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"ogden", zip:"14559", serves:["spencerport"], reach:"local" },
  { id:"ogdenbuilding", n:"Ogden Building Department", c:"housing", d:"Building permits, inspections, code enforcement. Also serves Village of Spencerport.", ph:"585-617-6195", ad:"269 Ogden Center Rd, Spencerport NY 14559", url:"https://ogdenny.gov/building-department/", hr:"M-F 8:30am-4pm", doc:"Varies", tg:["any"], town:"ogden", zip:"14559", serves:["spencerport"], reach:"local" },
  { id:"spencerportfoodshelf", n:"Spencerport Ecumenical Food Shelf", c:"food", d:"Emergency food for Spencerport School District families. Food and hygiene supplies.", ph:"585-397-0290", ad:"4997 Ridge Rd West, Spencerport NY 14559", url:"https://www.facebook.com/p/Spencerport-Food-Shelf-100077230901770/", hr:"Thu 9am-11am", doc:"None", tg:["any"], town:"spencerport", zip:"14559", serves:["ogden","parma"], reach:"local" },
  { id:"spencerportfreepantry", n:"Spencerport Free Food Pantry", c:"food", d:"Little Free Pantry. Take what you need, leave what you can. Outdoor, self-serve, 24/7.", ad:"222 S Union St, Spencerport NY 14559", url:"https://www.facebook.com/SpencerportFreeFoodPantry/", hr:"24/7", doc:"None", tg:["any"], town:"spencerport", zip:"14559", reach:"local" },
  { id:"ogdenlib", n:"Ogden Farmers' Library", c:"education", d:"Public library since 1815. Programs for all ages. Monroe County Library System.", ph:"585-617-6181", ad:"269 Ogden Center Rd, Spencerport NY 14559", url:"https://www.ogdenfarmerslibrary.org/", hr:"M 10am-8pm, Tu-Th 9am-8pm, F-Sat 9am-5pm", doc:"Proof of address for card", tg:["any"], town:"ogden", zip:"14559", serves:["spencerport"], reach:"local" },
  { id:"ogdensenior", n:"Ogden Senior Center", c:"seniorSvc", d:"Programs for older adults. Lunch M/W/F at noon. Bingo, cards, pool, bus trips. Transport may be available.", ph:"585-617-6126", ad:"200 S Union St, Spencerport NY 14559", url:"https://ogdenny.gov/senior-center/", hr:"M/W/F 9am-3pm", doc:"None", tg:["sen"], town:"ogden", zip:"14559", serves:["spencerport"], reach:"local" },
  { id:"ogdenrec", n:"Ogden Parks and Recreation", c:"youth", d:"Programs for toddlers, youth, and adults. Fitness center at Ogden Community Center.", ph:"585-617-6174", ad:"269 Ogden Center Rd, Spencerport NY 14559", url:"https://ogdenny.myrec.com/", hr:"Call for schedule", doc:"None", tg:["kids","any"], town:"ogden", zip:"14559", serves:["spencerport"], reach:"local" },

  // PENFIELD
  { id:"penfieldclerk", n:"Penfield Town Clerk", c:"documents", d:"Licenses, permits, tax payments, notary services.", ph:"585-340-8629", ad:"1607 Jackson Rd, Penfield NY 14526", url:"https://www.penfieldny.gov/your_government/departments/town_clerk_s_office/index.php", hr:"M-F 8am-4pm", doc:"Varies", tg:["any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldcourt", n:"Penfield Town Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-340-8623", ad:"1985 Baird Rd, Penfield NY 14526", url:"https://www.penfieldny.gov/your_government/departments/justice_courts/index.php", hr:"M-F 8am-4pm", doc:"Court papers or ticket", tg:["any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldassessor", n:"Penfield Assessor", c:"housing", d:"Property assessments, STAR, senior/veteran/disability exemptions, grievances.", ph:"585-340-8610", ad:"3100 Atlantic Ave Rm 203, Penfield NY 14526", url:"https://www.penfield.org/your_government/departments/assessor_s_office/index.php", hr:"M-F 8:30am-4pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldbuilding", n:"Penfield Building Department", c:"housing", d:"Building permits, zoning, code enforcement, inspections.", ph:"585-340-8636", ad:"3100 Atlantic Ave, Penfield NY 14526", url:"https://www.penfieldny.gov/your_government/departments/building/index.php", hr:"M-F 8:30am-4pm", doc:"Varies", tg:["any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldfoodshelf", n:"Penfield Ecumenical Food Shelf", c:"food", d:"Emergency food for 14526/14625 zip codes and Penfield school families. Call or email for appointment.", ph:"585-234-0799", ad:"1618 Jackson Rd, Penfield NY 14526", url:"https://www.penfieldecumenicalfoodshelf.com", hr:"M-F 8am-5pm", doc:"None", tg:["any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldhope", n:"Penfield Hope Food Pantry", c:"food", xref:["clothing"], d:"Emergency food, children's clothing, diapers, budget support. By appointment, up to every 2 weeks. Serves 14526/14625.", ph:"585-586-5139", ad:"1771 Penfield Rd, Penfield NY 14526", url:"https://penfieldhope.org/food-pantry", hr:"By appointment", doc:"None", tg:["any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldlib", n:"Penfield Public Library", c:"education", d:"Free computers, WiFi, programs for all ages. Monroe County Library System.", ph:"585-340-8720", ad:"1985 Baird Rd, Penfield NY 14526", url:"https://penfield.libraryweb.org", hr:"M-Th 9:30am-8:30pm, F 9:30am-6pm, Sat 10am-5pm, Sun 1-5pm", doc:"Proof of address for card", tg:["any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldsenior", n:"Penfield Senior Programs (DEAR)", c:"seniorSvc", d:"Free lifelong learning, congregate meals, Mah Jong, cards, crafts, exercise. Bri-Pen Senior Rides. 50+.", ph:"585-340-8664", ad:"1985 Baird Rd, Penfield NY 14526", url:"https://www.penfieldny.gov/programs_and_activities/dear/dear_lunch-menus.php", hr:"See schedule at Community Center", doc:"None", tg:["sen"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldrec", n:"Penfield Recreation and Parks", c:"youth", d:"Sports, camps, fitness, community events at Penfield Community Center.", ph:"585-340-8655", ad:"1985 Baird Rd, Penfield NY 14526", url:"https://www.penfieldny.gov/programs_and_activities/", hr:"M-F 8:30am-9pm, Sat-Sun 8am-3pm", doc:"None", tg:["kids","any"], town:"penfield", zip:"14526", reach:"local" },
  { id:"penfieldanimal", n:"Penfield Animal Control", c:"pets", d:"Dog control, lost/found pets, wildlife concerns. 24/7 emergency response.", ph:"585-340-8616", ad:"1587 Jackson Rd, Penfield NY 14526", url:"https://www.penfieldny.gov/your_government/departments/animal_control/index.php", hr:"24/7 emergency", doc:"None", tg:["any"], town:"penfield", zip:"14526", reach:"local" },

  // PITTSFORD
  { id:"pittsfordclerk", n:"Pittsford Town Clerk", c:"documents", d:"Licenses, permits, tax payments, vital records.", ph:"585-248-6210", ad:"11 South Main St, Pittsford NY 14534", url:"https://www.townofpittsford.org/clerk", hr:"M-F 8am-4pm", doc:"Varies", tg:["any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordvillageclerk", n:"Pittsford Village Clerk", c:"documents", d:"Village permits, tax payments, village government services.", ph:"585-586-4332", ad:"21 North Main St, Pittsford NY 14534", url:"https://www.villageofpittsfordny.gov/contact-information", hr:"M-F 7:30am-4pm", doc:"Varies", tg:["any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordcourt", n:"Pittsford Town Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-248-6238", ad:"11 South Main St, Pittsford NY 14534", url:"https://www.townofpittsford.org/court/contact", hr:"M-F 8am-4pm", doc:"Court papers or ticket", tg:["any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordassessor", n:"Pittsford Assessor", c:"housing", d:"Property assessments, STAR, senior/veteran/disability exemptions, grievances.", ph:"585-248-6230", ad:"11 South Main St, Pittsford NY 14534", url:"https://www.townofpittsford.org/assessor", hr:"M-F 8am-4pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordbuilding", n:"Pittsford Building and Code Enforcement", c:"housing", d:"Building permits, zoning, code enforcement, inspections.", ph:"585-248-6265", ad:"11 South Main St, Pittsford NY 14534", url:"https://www.townofpittsford.org/dpw/code", hr:"M-F 8am-4pm", doc:"Varies", tg:["any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordfood", n:"Pittsford Food Cupboard", c:"food", d:"Emergency food. Families select groceries from shelves. Serves Pittsford, Mendon, HF, Brighton, East Rochester. 4,000+ households/year.", ph:"585-264-9860", ad:"3800 Monroe Ave Suite 26, Pittsford NY 14534", url:"https://www.pittsfordfoodcupboard.net/", hr:"Tu/F 9:30am-1:30pm, 1st/3rd Sat 9:30-11:30am", doc:"None", tg:["any"], town:"pittsford", zip:"14534", serves:["mendon","honeoye-falls","brighton","east-rochester"], reach:"local" },
  { id:"pittsfordlib", n:"Pittsford Community Library", c:"education", d:"Free computers, WiFi, programs for all ages. Monroe County Library System.", ph:"585-248-6275", ad:"24 State St, Pittsford NY 14534", url:"https://www.townofpittsford.org/library", hr:"M-Th 9am-8pm, F 9am-6pm, Sat 10am-5pm, Sun 12-5pm", doc:"Proof of address for card", tg:["any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordsenior", n:"Pittsford Seniors", c:"seniorSvc", d:"Fitness, yoga, tai chi, square dancing. Meals M/W/F at noon. 50+. Free for residents.", ph:"585-248-6235", ad:"35 Lincoln Ave, Pittsford NY 14534", url:"https://www.townofpittsford.org/seniors", hr:"M-F 8am-10pm (Community Center hours)", doc:"None", tg:["sen"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordrec", n:"Pittsford Recreation Department", c:"youth", d:"Youth, adult, and senior programs. Sports, camps, fitness, community events.", ph:"585-248-6280", ad:"35 Lincoln Ave, Pittsford NY 14534", url:"https://www.townofpittsford.org/recreation", hr:"M-Th 8am-9pm, F-Sat 8am-8pm, Sun 12-5pm", doc:"None", tg:["kids","any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordanimal", n:"Pittsford Animal Control", c:"pets", d:"Dog licensing, lost pets, animal complaints. After-hours emergencies: 585-248-6212.", ph:"585-248-6240", ad:"11 South Main St, Pittsford NY 14534", url:"https://www.townofpittsford.org/animal-control", hr:"M-F 8am-4pm", doc:"None", tg:["any"], town:"pittsford", zip:"14534", reach:"local" },
  { id:"pittsfordyouth", n:"Pittsford Youth Services", c:"mental", xref:["youth","crisisChild"], d:"Free/low-cost confidential counseling for youth and families. Licensed clinical social workers in schools and community.", ph:"585-264-0604", ad:"4 South Main St, Pittsford NY 14534", url:"https://www.pittsfordyouthservices.org/", hr:"M-F 10am-2pm, after-school/evening appts available", doc:"None", tg:["kids","any"], town:"pittsford", zip:"14534", reach:"local" },

  // RUSH
  { id:"rushclerk", n:"Rush Town Clerk", c:"documents", d:"Licenses, permits, tax collection, notary.", ph:"585-533-1312", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.townofrush.com/departments/town-clerk-collector.html", hr:"M-F 8:30am-4:30pm (summer F 8am-1pm)", doc:"Varies", tg:["any"], town:"rush", zip:"14543", reach:"local" },
  { id:"rushcourt", n:"Rush Justice Court", c:"legal", d:"Traffic tickets, small claims, violations. Court window M-F 9am-1:30pm.", ph:"585-533-1130", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.townofrush.com/departments/justice-town-court.html", hr:"M-F 9am-1:30pm", doc:"Court papers or ticket", tg:["any"], town:"rush", zip:"14543", reach:"local" },
  { id:"rushassessor", n:"Rush Assessor", c:"housing", d:"Property assessments, STAR, senior/veteran/disability exemptions.", ph:"585-533-2330", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.townofrush.com/departments/assessor.html", hr:"Tu 8:30am-12:30pm; Clerk Tu/Th 8:30am-3pm, F 8:30am-12pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"rush", zip:"14543", reach:"local" },
  { id:"rushbuilding", n:"Rush Building Department", c:"housing", d:"Building permits, inspections, zoning.", ph:"585-533-1312", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.townofrush.com/departments/building.html", hr:"Tu-Th 9am-2pm", doc:"Varies", tg:["any"], town:"rush", zip:"14543", reach:"local" },
  { id:"rushlib", n:"Rush Public Library", c:"education", d:"Books, programs for all ages, free WiFi. Monroe County Library System.", ph:"585-533-1370", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.rushlibrary.org/", hr:"M/W/F 1-8pm, Tu/Th 11am-8pm, Sat 10am-2pm", doc:"Proof of address for card", tg:["any"], town:"rush", zip:"14543", reach:"local" },
  { id:"rushsenior", n:"Rush Senior Citizens", c:"seniorSvc", d:"Monthly meetings 2nd Thu 10:30am at Rush Fire Dept. Day trips, exercise, social. 55+. $10/yr.", ph:"585-533-2340", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.townofrush.com/community/rush-seniors.html", hr:"2nd Thu monthly 10:30am", doc:"None", tg:["sen"], town:"rush", zip:"14543", reach:"local" },
  { id:"rushrec", n:"Rush Recreation", c:"youth", d:"Fitness classes, volleyball camps, basketball, summer camps.", ph:"585-533-2340", ad:"5977 East Henrietta Rd, Rush NY 14543", url:"https://www.townofrush.com/departments/recreation.html", hr:"Call for schedule", doc:"None", tg:["kids","any"], town:"rush", zip:"14543", reach:"local" },

  // SWEDEN (town government — food, library, senior, rec covered by Brockport entries)
  { id:"swedenclerk", n:"Sweden Town Clerk", c:"documents", d:"Licenses, permits, dog licenses, tax payments.", ph:"585-637-2144", ad:"18 State St, Brockport NY 14420", url:"https://www.townofswedenny.gov/departments/town-clerk", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"sweden", zip:"14420", reach:"local" },
  { id:"swedencourt", n:"Sweden Justice Court", c:"legal", d:"Traffic tickets, small claims, violations. Separate from Brockport Village Court.", ph:"585-637-1070", ad:"18 State St, Brockport NY 14420", url:"https://www.townofswedenny.gov/departments/justice-court", hr:"M-F 8:30am-4:30pm (closed 12-1pm)", doc:"Court papers or ticket", tg:["any"], town:"sweden", zip:"14420", reach:"local" },
  { id:"swedenassessor", n:"Sweden Assessor", c:"housing", d:"Property assessments, STAR, exemptions.", ph:"585-637-8683", ad:"18 State St, Brockport NY 14420", url:"https://www.townofswedenny.gov/departments/assessor-1743081419", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"sweden", zip:"14420", reach:"local" },
  { id:"swedenbuilding", n:"Sweden Building Department", c:"housing", d:"Building permits, code enforcement, fire marshal.", ph:"585-637-8684", ad:"18 State St, Brockport NY 14420", url:"https://www.townofswedenny.gov/departments/building-department", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"sweden", zip:"14420", reach:"local" },

  // WEBSTER
  { id:"websterclerk", n:"Webster Town Clerk", c:"documents", d:"Licenses, permits, tax payments, handicap permits.", ph:"585-872-1000", ad:"1000 Ridge Rd, Webster NY 14580", url:"https://www.websterny.gov/107/Town-Clerk", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"webstervillageclerk", n:"Webster Village Hall", c:"documents", d:"Village services, passports, E-Z Pass, permits.", ph:"585-265-3770", ad:"28 West Main St, Webster NY 14580", url:"https://www.villageofwebsterny.gov/", hr:"M-Th 8am-4:30pm, F 8am-11am", doc:"Varies", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"webstercourt", n:"Webster Justice Court", c:"legal", d:"Traffic tickets, small claims, misdemeanors, violations.", ph:"585-872-7020", ad:"1002 Ridge Rd, Webster NY 14580", url:"https://www.websterny.gov/131/Webster-Justice-Court", hr:"M-F 8:30am-4:30pm", doc:"Court papers or ticket", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"websterassessor", n:"Webster Assessor", c:"housing", d:"Property assessments, STAR, exemptions, grievances.", ph:"585-872-7051", ad:"1000 Ridge Rd, Webster NY 14580", url:"https://www.websterny.gov/77/Assessment-Office", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"webster", zip:"14580", reach:"local" },
  { id:"websterbuilding", n:"Webster Building Department", c:"housing", d:"Building permits, inspections, zoning, code enforcement.", ph:"585-872-7036", ad:"1000 Ridge Rd, Webster NY 14580", url:"https://www.websterny.gov/162/Building-Department", hr:"M-F 8:30am-4:30pm", doc:"Varies", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"websterhope", n:"Webster HOPE Food Pantry", c:"food", xref:["clothing"], d:"Food pantry and clothing closet. 50-60 families/week. Emergency financial assistance. Serves 14580 only.", ph:"585-265-6694", ad:"1450 Ridge Rd, Webster NY 14580", url:"https://www.websternyhope.org/food-clothing", hr:"M 5-7pm, Tu 10am-12pm, W 3-5pm, Th 5-7pm", doc:"None", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"webstercommchest", n:"Webster Community Chest (Meal Program)", c:"food", d:"Ingredient bags with recipes for 3 meals (each feeds 3-4). Drive-through pickup.", ph:"585-671-2060", ad:"131 West Main St, Webster NY 14580", url:"https://webcommchest.org/", hr:"See schedule", doc:"None", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"webstercommmeals", n:"Gathering Place Webster (Free Meals)", c:"food", d:"Free restaurant-style Sunday supper. Everyone welcome. No questions.", ph:"585-667-0411", ad:"570 Klem Rd, Webster NY 14580", url:"https://gatheringplacewebster.org/", hr:"2nd Sunday monthly 4:30-5:30pm", doc:"None", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"websterlib", n:"Webster Public Library", c:"education", d:"Full-service library. Programs for all ages. Food donation drop-off.", ph:"585-872-7075", ad:"980 Ridge Rd, Webster NY 14580", url:"https://websterlibrary.org/", hr:"M-Th 9am-8pm, F-Sat 10am-5pm", doc:"Proof of address for card", tg:["any"], town:"webster", zip:"14580", reach:"local" },
  { id:"webstersenior", n:"Webster 55+ Programs", c:"seniorSvc", d:"Games, exercise, lectures, luncheons. Meals M-F noon for 60+. Bus transport M/Tu/Th.", ph:"585-872-7103", ad:"1350 Chiyoda Dr, Webster NY 14580", url:"https://www.websterny.gov/449/55-Activities-and-Services", hr:"See schedule at Rec Center", doc:"None", tg:["sen"], town:"webster", zip:"14580", reach:"local" },
  { id:"websterrec", n:"Webster Parks and Recreation", c:"youth", d:"Sports leagues, fitness, youth camps, community events.", ph:"585-872-7103", ad:"1350 Chiyoda Dr, Webster NY 14580", url:"https://www.websterny.gov/702/Parks-Recreation", hr:"M-F 5am-9pm, Sat 7:30am-9pm, Sun 7:30am-6pm", doc:"None", tg:["kids","any"], town:"webster", zip:"14580", reach:"local" },
  { id:"websteranimal", n:"Webster Animal Control", c:"pets", d:"Dog licensing, lost pets, stray dogs, wildlife concerns.", ph:"585-872-7009", ad:"1000 Ridge Rd, Webster NY 14580", url:"https://www.websterny.gov/174/Animal-Control", hr:"Call", doc:"None", tg:["any"], town:"webster", zip:"14580", reach:"local" },

  // WHEATLAND / SCOTTSVILLE
  { id:"wheatlandclerk", n:"Wheatland Town Clerk", c:"documents", d:"Licenses, permits, tax payments, vital records.", ph:"585-889-1553", ad:"22 Main St, Scottsville NY 14546", url:"https://www.townofwheatland.org/town-clerks-office", hr:"M 8am-4pm & 6-8pm, Tu-Th 8am-4pm, F 8am-1pm", doc:"Varies", tg:["any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"scottsvilleclerk", n:"Scottsville Village Clerk", c:"documents", d:"Village services, notary, tax searches, permits.", ph:"585-889-6050", ad:"22 Main St Suite 3, Scottsville NY 14546", url:"https://www.scottsvilleny.gov/office-attorney", hr:"M 8am-4pm & 6-8pm, Tu-Th 8am-4pm, F 8am-1pm", doc:"Varies", tg:["any"], town:"scottsville", zip:"14546", reach:"local" },
  { id:"wheatlandcourt", n:"Wheatland Town Court", c:"legal", d:"Traffic tickets, small claims, violations.", ph:"585-889-3074", ad:"22 Main St (rear entrance), Scottsville NY 14546", url:"https://www.townofwheatland.org/town-court", hr:"M 8am-4pm & 6-8pm, Tu-Th 8am-4pm, F 8am-1pm", doc:"Court papers or ticket", tg:["any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"wheatlandassessor", n:"Wheatland Assessor", c:"housing", d:"Property assessments, STAR, senior/veteran/disability exemptions.", ph:"585-889-1553", ad:"22 Main St, Scottsville NY 14546", url:"https://www.townofwheatland.org/assessors-office", hr:"M 8am-4pm & 6-8pm, Tu-Th 8am-4pm, F 8am-1pm", doc:"Varies", tg:["sen","vet","dis","any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"wheatlandbuilding", n:"Wheatland Building Department", c:"housing", d:"Building permits, zoning, code enforcement, fire marshal.", ph:"585-889-1553", ad:"22 Main St, Scottsville NY 14546", url:"https://www.townofwheatland.org/building-department", hr:"M-Th 9am-1pm", doc:"Varies", tg:["any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"gracestablefood", n:"Grace's Table Food Cupboard", c:"food", d:"24/7 outdoor food cupboard behind church. Monthly distribution 4th Thu 4-5:30pm.", ph:"585-889-2028", ad:"9 Browns Ave, Scottsville NY 14546", url:"https://gracechurchscottsville.org/", hr:"24/7 (outdoor)", doc:"None", tg:["any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"unionpresfood", n:"Union Presbyterian Food Cupboard", c:"food", d:"24/7 outdoor food cupboard behind church. Take what you need.", ph:"585-889-1604", ad:"1 Browns Ave, Scottsville NY 14546", url:"https://upcscottsville.org/", hr:"24/7 (outdoor)", doc:"None", tg:["any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"scottsvillelib", n:"Scottsville Free Library", c:"education", d:"Books, programs for all ages, free WiFi. Monroe County Library System. Also Mumford branch.", ph:"585-889-2023", ad:"28 Main St, Scottsville NY 14546", url:"https://scottsvillelibrary.org/", hr:"M/W/F 10am-5pm, Tu/Th 1-8pm, Sat 10am-1pm", doc:"Proof of address for card", tg:["any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"wheatlandsenior", n:"Wheatland Senior Center", c:"seniorSvc", d:"Hot lunch, exercise, art, games, day trips, transport. 60+ and spouse.", ph:"585-889-1284", ad:"22 Main St, Scottsville NY 14546", url:"https://www.townofwheatland.org/senior-center", hr:"M/W/Th 10am-2pm", doc:"None", tg:["sen"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
  { id:"wheatlandrec", n:"Wheatland Recreation", c:"youth", d:"Year-round programs for all ages. Sports, camps, fitness.", ph:"585-889-6236", ad:"13 Beckwith Ave, Scottsville NY 14546", url:"https://wheatlandny.myrec.com", hr:"See website", doc:"None", tg:["kids","any"], town:"scottsville", zip:"14546", serves:["wheatland"], reach:"local" },
];

// COMMUNITY GROUPS
const COMMUNITY = [
  { n:"Rochester Hope", d:"Saturday: free food, clothing, haircuts, health screenings, legal aid, 50+ agencies. Every Saturday 9:30am-3:30pm.", loc:"869 N Clinton Ave", url:"https://rochesterhope.org", cats:["food","clothing","health","legal","cash"] },
  { n:"Roc Food Not Bombs", d:"Free hot meals and grocery stands across Rochester. No ID, no questions.", url:"https://www.facebook.com/rocfoodnotbombs/", cats:["food"] },
  { n:"Rochester Mutual Aid Network", d:"Connects people who need help with people who can help.", url:"https://www.rocmutualaid.com", cats:["cash","housing","food","clothing","transport"] },
  { n:"Rochester NY Food Relief", d:"Active Facebook group sharing free food, pantry info, meal locations.", url:"https://www.facebook.com/groups/rochesterNYfoodrelief", cats:["food"] },
  { n:"Buy Nothing Rochester", d:"Free items shared among neighbors. Search 'Buy Nothing' + your neighborhood on Facebook.", cats:["clothing","cash"] },
  { n:"ROC COVID Mutual Aid", d:"Emergency funds, supplies, rides, community support. Still active.", url:"https://www.facebook.com/groups/roccovidmutualaid", cats:["cash","transport","food"] },
  { n:"Rochester Free Store", d:"Free clothing and household items. 3rd Saturday monthly. Search 'Rochester Free Store' on Facebook.", cats:["clothing"] },
  { n:"Rochester NY Moms Group", d:"Parenting support, baby items, advice. Search 'Rochester NY Moms Group' on Facebook.", cats:["childcare","crisisChild"] },
  { n:"Rochester Housing Help", d:"Housing leads, roommate searches, rental info. Search 'Rochester Housing Help' on Facebook.", cats:["housing"] },
  { n:"Rochester Job Hunters", d:"Job postings, résumé help, networking. Search 'Rochester Job Hunters' on Facebook.", cats:["employment"] },
  { n:"Greece Neighbors (Facebook)", d:"Active Greece community group. Neighbors helping neighbors, local info, recommendations.", url:"https://www.facebook.com/groups/greece.ny/", cats:["food","housing","clothing"] },
  { n:"Greece Ecumenical Food Shelf (Facebook)", d:"Real-time updates on food shelf hours, availability, and volunteer needs.", url:"https://www.facebook.com/greecefoodshelf/", cats:["food"] },
  { n:"Being Black in the Burbs", d:"Mutual aid for Black community. Direct assistance with food, money, household goods.", cats:["food","cash","clothing"] },
  { n:"Greater Rochester LGBTQ+ Mutual Aid", d:"Basic needs fund for LGBTQ+ individuals. Food, rent, utilities, transport. Three funds available.", cats:["cash","food","housing","transport","lgbtq"] },
  { n:"Buy Nothing Groups (12 in Monroe County)", d:"Free items shared among neighbors. Gift economy. Search 'Buy Nothing' + your town on Facebook.", cats:["clothing","food","cash"] },
];

// ── FEATURED PROGRAMS ──
const FEATURED_IDS = ["211", "snap", "medicaid", "foodlink", "myb", "988", "mcvital"];

// ── SENSITIVE CATEGORIES (show privacy notice) ──
const SENSITIVE = new Set(["mental","grief","addiction","domesticSvc","hivsti","reentry","lgbtq","parentalProtection","legalImmigration","legalCrimRecord"]);
// ─────────────────────────────────────────────
// SAFETY_SENSITIVE — per-entry safety flag (added April 9, 2026)
// ─────────────────────────────────────────────
// The DV_CATS set below activates Quick Exit at the CATEGORY level — useful
// when an entire category (like domesticSvc) is high-risk for the user.
//
// But some individual entries inside non-sensitive categories also need the
// same protection. Examples:
//   - Animal cruelty reporting hotlines (in pets category) — the reporter
//     may be living with the abuser, who is also abusing humans
//   - Pet-friendly DV shelter cross-references (in pets category) — the
//     survivor may be on a monitored device
//   - Future entries in any category that touch reporting, escape, or
//     surveillance-vulnerable scenarios
//
// The schema flag is `safetySensitive: true` on any individual program object.
// When ANY visible program in the current view has the flag, Quick Exit
// activates automatically. The activation is one-way for the session —
// once triggered, it stays visible until reset (matching the existing
// DV_CATS behavior).
//
// Rule: match the protection level of the highest-risk visible entry,
// never less. Defensive in depth.
// ─────────────────────────────────────────────

// ── DV CATEGORIES (show safety notice + quick exit) ──
const DV_CATS = new Set(["domesticSvc","parentalProtection"]);
// ── LEGAL CATEGORIES (show disclaimer + explainer) ──
const LEGAL_CATS = new Set(["legal","legalEviction","legalWorkers","legalBenefits","legalImmigration","legalDiscrim","legalDebt","legalSmallClaims","legalCrimRecord","parentalProtection"]);

// ── PLAIN LANGUAGE LEGAL EXPLAINERS ──
// Static text — no API, no cost, instant. One explainer per legal category, all 8 languages.
// These render ABOVE the programs to orient users before they see resources.
const LEGAL_EXPLAINERS = {
  legalEviction: {
    en: "YOUR RIGHTS AS A TENANT IN NEW YORK:\n• Your landlord CANNOT lock you out, remove belongings, or shut off utilities to force you to leave — this is illegal self-help eviction.\n• To legally evict you, they must give written notice first: 14 days for nonpayment, 30+ days for other reasons.\n• After notice, they must FILE IN COURT. You get to respond.\n• If you get court papers, you have the right to FREE legal help. Call the Tenant Defense Project immediately.\n• DEADLINE: You typically have 10 days to respond to a court petition. Do not ignore court papers.\n• If heat or conditions are dangerous, you can withhold rent into escrow — but do this through Legal Aid, not on your own.",
    es: "SUS DERECHOS COMO INQUILINO EN NUEVA YORK:\n• El arrendador NO puede cambiar las cerraduras ni cortar servicios para obligarle a irse. Eso es ilegal.\n• Para desahuciarle legalmente, debe darle aviso escrito primero: 14 días por falta de pago.\n• Si recibe papeles de la corte, tiene derecho a AYUDA LEGAL GRATUITA. Llame al Tenant Defense Project.\n• PLAZO: Generalmente tiene 10 días para responder a una petición judicial.",
    ne: "न्युयोर्कमा भाडावालको अधिकारहरू:\n• घरबेटीले ताला लगाउन, सामान हटाउन वा सेवाहरू काट्न सक्दैन — यो गैरकानुनी हो।\n• कानुनी रूपमा निकाल्न पहिले लिखित सूचना दिनुपर्छ: भाडा नतिरेकोमा १४ दिन।\n• अदालती कागजात पाउनुभयो भने निःशुल्क कानुनी सहायताको अधिकार छ।\n• समय सीमा: अदालती निवेदनमा जवाफ दिन सामान्यतः १० दिन।",
    ar: "حقوقك كمستأجر في نيويورك:\n• لا يمكن للمالك قفل الأبواب أو قطع الخدمات لإجبارك على المغادرة — هذا غير قانوني.\n• لطردك قانونياً، يجب إعطاءك إشعاراً كتابياً أولاً: 14 يوماً لعدم الدفع.\n• إذا تلقيت أوراق المحكمة، لديك الحق في مساعدة قانونية مجانية.\n• الموعد النهائي: عادةً 10 أيام للرد.",
    sw: "HAKI ZAKO KAMA MPANGAJI NEW YORK:\n• Mwenye nyumba hawezi kukufungia nje au kukata huduma kukufanya uondoke — hii ni kinyume cha sheria.\n• Kukufukuza kisheria, lazima akupe taarifa ya maandishi kwanza: siku 14 kwa kutolipa.\n• Ukipata karatasi za mahakama, una haki ya msaada wa kisheria BURE.\n• MUDA: Kawaida una siku 10 kujibu.",
    my: "နယူးယောက်တွင် အငှားသူ၏ အခွင့်အရေးများ:\n• မြေရှင်သည် သင့်ကို ထွက်ခိုင်းရန် သော့ပိတ်ခြင်း သို့ ဝန်ဆောင်မှုဖြတ်တောက်ခြင်းမပြုနိုင် — တရားမဝင်ပါ။\n• တရားဝင်နှင်ထုတ်ရန် ရေးသားသောအကြောင်းကြားစာ ပေးရမည်: ငွေမပေးသောအတွက် ၁၄ ရက်။\n• တရားရုံးစာရွက်ရရှိပါက အခမဲ့ဥပဒေအကူအညီ ခံစားပိုင်ခွင့်ရှိသည်။\n• သတ်မှတ်ချိန်: ပုံမှန် ၁၀ ရက်။",
    so: "XUQUUQDAADA KIREYSTAHA NEW YORK:\n• Milkiilahu kuma xidhi karo albaabka ama goyn karo adeegyada kuu qasba inaad tagto — tan waa sharci-xumaysid.\n• Si sharci ah kuu eryi karo, waa inuu kuu siiyaa ogeysiin qoraal ah: 14 maalmood oo lacag-la'aanta.\n• Warqadaha maxkamadda heshid, waxaad xaq u leedahay caawimo sharci BILAASH ah.\n• MUDDADA: Caadi ahaan 10 maalmood.",
    zh: "作为纽约租客的权利：\n• 房东不能换锁或切断水电强迫您离开 — 这是违法的。\n• 要合法驱逐您，必须先给书面通知：欠租14天。\n• 收到法院文件，您有权获得免费法律援助。\n• 截止日期：通常有10天时间回应。",
    vi: "QUYỀN CỦA NGƯỜI THUÊ NHÀ TẠI NEW YORK:\n• Chủ nhà KHÔNG THỂ đổi khóa, di dời đồ đạc, hoặc cắt điện nước để buộc bạn rời đi — điều này là bất hợp pháp.\n• Để trục xuất hợp pháp, họ phải gửi thông báo bằng văn bản trước: 14 ngày nếu không trả tiền thuê.\n• Nếu nhận được giấy tờ tòa án, bạn có quyền được TRỢ GIÚP PHÁP LÝ MIỄN PHÍ. Gọi Tenant Defense Project ngay.\n• HẠN CHÓT: Thường có 10 ngày để trả lời đơn kiện. Đừng bỏ qua giấy tờ tòa án.",
    ko: "뉴욕에서 세입자의 권리:\n• 집주인은 자물쇠를 바꾸거나, 물건을 치우거나, 공과금을 끊어 당신을 쫓아낼 수 없습니다 — 이것은 불법입니다.\n• 합법적으로 퇴거시키려면 먼저 서면 통지를 해야 합니다: 임대료 미납 시 14일.\n• 법원 서류를 받으면 무료 법률 지원을 받을 권리가 있습니다. Tenant Defense Project에 즉시 전화하세요.\n• 마감: 보통 법원 소장에 답변할 수 있는 기간은 10일입니다. 법원 서류를 무시하지 마세요.",
    tl: "ANG IYONG MGA KARAPATAN BILANG NANGUNGUPAHAN SA NEW YORK:\n• HINDI maaaring palitan ng nagpapaupa ang kandado, alisin ang iyong gamit, o putulin ang utility para pilitin kang umalis — labag ito sa batas.\n• Para legal na palayasin ka, dapat muna silang magbigay ng nakasulat na abiso: 14 araw para sa hindi pagbabayad.\n• Kung makakatanggap ka ng court papers, may karapatan ka sa LIBRENG TULONG LEGAL. Tawagan agad ang Tenant Defense Project.\n• DEADLINE: Karaniwan ay 10 araw para sumagot sa court petition. Huwag balewalain ang court papers.",
    ru: "ВАШИ ПРАВА КАК АРЕНДАТОРА В НЬЮ-ЙОРКЕ:\n• Арендодатель НЕ МОЖЕТ менять замки, выносить вещи или отключать коммунальные услуги, чтобы заставить вас уехать — это незаконно.\n• Чтобы законно вас выселить, он должен сначала предоставить письменное уведомление: 14 дней при неуплате.\n• Если получите судебные документы, у вас есть право на БЕСПЛАТНУЮ юридическую помощь. Немедленно позвоните в Tenant Defense Project.\n• СРОК: Обычно у вас есть 10 дней, чтобы ответить на судебное ходатайство. Не игнорируйте судебные бумаги.",
    ht: "DWA OU KÒM YON LOKATÈ NAN NEW YORK:\n• Pwopriyetè a PA KA chanje seri yo, retire byen ou yo, oswa koupe sèvis yo pou fòse w pati — sa a ilegal.\n• Pou yo mete w deyò legalman, yo dwe ba w yon avi alekri anvan: 14 jou pou ki pa peye lwaye.\n• Si w resevwa papye tribinal, ou gen dwa a yon èd legal GRATIS. Rele Tenant Defense Project touswit.\n• DAT LIMIT: Anjeneral ou gen 10 jou pou reponn yon petisyon nan tribinal. Pa inyore papye tribinal yo.",
    pt: "SEUS DIREITOS COMO INQUILINO EM NOVA YORK:\n• O proprietário NÃO PODE trocar fechaduras, remover seus pertences ou cortar serviços para forçá-lo a sair — isso é ilegal.\n• Para despejá-lo legalmente, ele deve dar aviso por escrito primeiro: 14 dias por falta de pagamento.\n• Se receber documentos do tribunal, você tem direito a AJUDA JURÍDICA GRATUITA. Ligue para o Tenant Defense Project imediatamente.\n• PRAZO: Normalmente você tem 10 dias para responder a uma petição judicial. Não ignore documentos judiciais.",
    fr: "VOS DROITS EN TANT QUE LOCATAIRE À NEW YORK:\n• Le propriétaire NE PEUT PAS changer les serrures, retirer vos affaires ou couper les services pour vous forcer à partir — c'est illégal.\n• Pour vous expulser légalement, il doit d'abord vous donner un préavis écrit : 14 jours pour non-paiement.\n• Si vous recevez des documents du tribunal, vous avez droit à UNE AIDE JURIDIQUE GRATUITE. Appelez immédiatement le Tenant Defense Project.\n• DÉLAI : Vous avez généralement 10 jours pour répondre à une requête judiciaire. N'ignorez pas les documents du tribunal.",
    hi: "न्यूयॉर्क में किरायेदार के रूप में आपके अधिकार:\n• मकान मालिक आपको जबरन निकालने के लिए ताले नहीं बदल सकता, सामान नहीं हटा सकता, या सेवाएं नहीं काट सकता — यह गैरकानूनी है।\n• कानूनी रूप से बेदखल करने के लिए, उसे पहले लिखित नोटिस देना होगा: किराया न देने पर 14 दिन।\n• अदालत के कागजात मिलने पर, आपको मुफ्त कानूनी मदद का अधिकार है। तुरंत Tenant Defense Project को कॉल करें।\n• समय सीमा: आमतौर पर अदालती याचिका का जवाब देने के लिए 10 दिन होते हैं। अदालती कागजात को नज़रअंदाज़ न करें।",
    ur: "نیویارک میں کرایہ دار کی حیثیت سے آپ کے حقوق:\n• مالک مکان آپ کو نکالنے کے لیے تالے تبدیل نہیں کر سکتا، سامان نہیں ہٹا سکتا، یا خدمات نہیں کاٹ سکتا — یہ غیر قانونی ہے۔\n• قانونی طور پر بے دخل کرنے کے لیے، اسے پہلے تحریری نوٹس دینا ضروری ہے: کرایہ نہ دینے پر 14 دن۔\n• عدالت کے کاغذات ملنے پر، آپ کو مفت قانونی مدد کا حق ہے۔ فوری طور پر Tenant Defense Project کو فون کریں۔\n• ڈیڈ لائن: عام طور پر عدالتی درخواست کا جواب دینے کے لیے 10 دن ہوتے ہیں۔ عدالتی کاغذات کو نظرانداز نہ کریں۔",
    fa: "حقوق شما به عنوان مستأجر در نیویورک:\n• صاحبخانه نمی‌تواند قفل‌ها را تغییر دهد، وسایل شما را بردارد، یا خدمات را قطع کند تا شما را مجبور به ترک خانه کند — این غیرقانونی است.\n• برای اخراج قانونی، ابتدا باید اخطار کتبی بدهد: ۱۴ روز برای عدم پرداخت اجاره.\n• اگر اوراق دادگاه دریافت کردید، شما حق کمک حقوقی رایگان دارید. فوراً با Tenant Defense Project تماس بگیرید.\n• مهلت: معمولاً ۱۰ روز فرصت دارید تا به دادخواست دادگاه پاسخ دهید. اوراق دادگاه را نادیده نگیرید.",
    ps: "په نیویارک کې ستاسو د کرایه دار حقوق:\n• د کور خاوند نشي کولی د قلفونو بدلولو، د شیانو ایستلو، یا د خدماتو پرې کولو سره تاسو ووباسي — دا غیرقانوني دي.\n• په قانوني توګه ایستلو لپاره، لومړی باید لیکلې خبرتیا ورکړي: د کرایې نه ورکولو لپاره ۱۴ ورځې.\n• که د محکمې پاڼې ترلاسه کړئ، تاسو د وړیا حقوقي مرستې حق لرئ. سمدلاسه Tenant Defense Project ته زنګ ووهئ.\n• وروستۍ نېټه: معمولاً تاسو د محکمې غوښتنلیک ته د ځواب ویلو لپاره ۱۰ ورځې لرئ. د محکمې پاڼې مه نادیده کوئ.",
    uk: "ВАШІ ПРАВА ЯК ОРЕНДАРЯ У НЬЮ-ЙОРКУ:\n• Орендодавець НЕ МОЖЕ міняти замки, виносити речі або відключати комунальні послуги, щоб змусити вас виїхати — це незаконно.\n• Щоб законно вас виселити, він повинен спочатку надати письмове повідомлення: 14 днів за несплату.\n• Якщо отримаєте судові документи, ви маєте право на БЕЗКОШТОВНУ юридичну допомогу. Негайно зателефонуйте до Tenant Defense Project.\n• СТРОК: Зазвичай у вас є 10 днів, щоб відповісти на судову петицію. Не ігноруйте судові документи.",
  },
  legalWorkers: {
    en: "YOUR RIGHTS AS A WORKER IN NEW YORK:\n• MINIMUM WAGE: $16/hour (2024). Paid less? File a wage claim with NY DOL.\n• UNPAID WAGES: Employer owes you money? File at labor.ny.gov — you may get back pay plus penalties.\n• OVERTIME: Most workers get 1.5x pay over 40 hours/week. 'Salaried' doesn't automatically mean exempt.\n• TIPS: Your employer cannot take your tips.\n• RETALIATION: Illegal to fire you for reporting wage theft or safety violations.\n• UNDOCUMENTED WORKERS: Same rights as documented workers. A wage claim does NOT affect your immigration status.",
    es: "SUS DERECHOS COMO TRABAJADOR EN NUEVA YORK:\n• SALARIO MÍNIMO: $16/hora. ¿Le pagan menos? Presente una queja.\n• SALARIOS NO PAGADOS: Presente una queja en labor.ny.gov.\n• TRABAJADORES INDOCUMENTADOS: Los mismos derechos. Una queja NO afecta su estatus migratorio.",
    ne: "कामदारको अधिकारहरू:\n• न्यूनतम ज्याला: $१६/घन्टा। कम पाउनुभयो? दावी दायर गर्नुहोस्।\n• अवैतनिक ज्याला: labor.ny.gov मा उजुरी दिनुहोस्।\n• अनियमित कामदारहरू: समान अधिकार। दावीले आप्रवासन स्थितिलाई असर गर्दैन।",
    ar: "حقوقك كعامل في نيويورك:\n• الحد الأدنى للأجر: 16 دولاراً/ساعة. أقل؟ قدم مطالبة.\n• الأجور غير المدفوعة: قدم شكوى على labor.ny.gov.\n• العمال غير الموثقين: نفس الحقوق. المطالبة لا تؤثر على وضعك المهاجر.",
    sw: "HAKI ZAKO KAMA MFANYAKAZI NEW YORK:\n• MSHAHARA WA CHINI: $16/saa. Unapewa kidogo? Wasilisha madai.\n• MISHAHARA ISIYOLIPWA: Wasilisha malalamiko kwenye labor.ny.gov.\n• WAFANYAKAZI WASIO NA NYARAKA: Haki sawa. Madai hayaathiri hali yako ya uhamiaji.",
    my: "အလုပ်သမားအခွင့်အရေးများ:\n• အနည်းဆုံးလုပ်ခ: $၁၆/နာရီ။ နည်းပါးစွာပေးလျှင် တောင်းဆိုပါ။\n• မပေးသောလုပ်ခ: labor.ny.gov တွင် တိုင်ကြားပါ။\n• မှတ်ပုံမတင်ရသေးသောအလုပ်သမားများ: တူညီသောအခွင့်အရေး။ တိုင်ကြားခြင်းသည် နေထိုင်ခွင့်ကို မထိခိုက်ပါ။",
    so: "XUQUUQDAADA SHAQAALE AHAAN NEW YORK:\n• MUSHAHAR HOOSE: $16/saacad. Ka yar? Geli dacwad.\n• MUSHAHARKA LA SIININ: Geli cabasho labor.ny.gov.\n• SHAQAALAHA DIIWAANGALINTA LAHAYN: Xuquuq isku mid ah. Dacwaddu kuma saameeyso xaaladaada socdaalka.",
    zh: "作为纽约工人的权利：\n• 最低工资：$16/小时。被少付？提出索赔。\n• 未付工资：在labor.ny.gov投诉。\n• 无证件工人：同等权利。索赔不影响移民身份。",
    vi: "QUYỀN CỦA NGƯỜI LAO ĐỘNG TẠI NEW YORK:\n• LƯƠNG TỐI THIỂU: $16/giờ. Bị trả thấp hơn? Nộp đơn khiếu nại lương tại labor.ny.gov.\n• LƯƠNG CHƯA THANH TOÁN: Nộp đơn tại labor.ny.gov — bạn có thể được trả lương cũ cộng tiền phạt.\n• NGƯỜI LAO ĐỘNG KHÔNG GIẤY TỜ: Có cùng quyền như người có giấy tờ. Đơn khiếu nại KHÔNG ảnh hưởng đến tình trạng nhập cư của bạn.",
    ko: "뉴욕에서 노동자의 권리:\n• 최저 임금: 시간당 $16. 더 적게 받았나요? labor.ny.gov에서 임금 청구를 제기하세요.\n• 미지급 임금: labor.ny.gov에서 신고하세요 — 체불 임금과 벌금을 받을 수 있습니다.\n• 미등록 노동자: 등록된 노동자와 동일한 권리. 임금 청구는 이민 신분에 영향을 주지 않습니다.",
    tl: "ANG IYONG MGA KARAPATAN BILANG MANGGAGAWA SA NEW YORK:\n• MINIMUM NA SAHOD: $16/oras. Mas mababa ang sahod? Mag-file ng wage claim sa labor.ny.gov.\n• HINDI BAYAD NA SAHOD: Mag-file sa labor.ny.gov — maaari kang makakuha ng back pay at multa.\n• HINDI DOKUMENTADONG MANGGAGAWA: Parehong karapatan tulad ng dokumentadong manggagawa. Ang wage claim ay HINDI nakakaapekto sa immigration status mo.",
    ru: "ВАШИ ПРАВА КАК РАБОТНИКА В НЬЮ-ЙОРКЕ:\n• МИНИМАЛЬНАЯ ЗАРПЛАТА: $16/час. Платят меньше? Подайте жалобу о зарплате на labor.ny.gov.\n• НЕВЫПЛАЧЕННАЯ ЗАРПЛАТА: Подайте жалобу на labor.ny.gov — вы можете получить недоплату плюс штрафы.\n• РАБОТНИКИ БЕЗ ДОКУМЕНТОВ: Те же права, что у документированных работников. Жалоба о зарплате НЕ влияет на ваш иммиграционный статус.",
    ht: "DWA OU KÒM YON TRAVAYÈ NAN NEW YORK:\n• SALÈ MINIMUM: $16/lè. Yo peye w mwens? Depoze yon plent salè sou labor.ny.gov.\n• SALÈ KI POKO PEYE: Depoze sou labor.ny.gov — ou ka jwenn salè ki dwe w plis penalite.\n• TRAVAYÈ SAN PAPYE: Menm dwa ak travayè ki gen papye. Yon plent salè PA gen efè sou estati imigrasyon ou.",
    pt: "SEUS DIREITOS COMO TRABALHADOR EM NOVA YORK:\n• SALÁRIO MÍNIMO: $16/hora. Recebendo menos? Apresente uma reclamação salarial em labor.ny.gov.\n• SALÁRIOS NÃO PAGOS: Apresente uma reclamação em labor.ny.gov — você pode receber pagamento atrasado mais multas.\n• TRABALHADORES SEM DOCUMENTOS: Mesmos direitos que trabalhadores documentados. Uma reclamação salarial NÃO afeta seu status imigratório.",
    fr: "VOS DROITS EN TANT QUE TRAVAILLEUR À NEW YORK:\n• SALAIRE MINIMUM : 16 $/heure. Payé moins ? Déposez une plainte salariale sur labor.ny.gov.\n• SALAIRES IMPAYÉS : Déposez une plainte sur labor.ny.gov — vous pouvez récupérer les arriérés plus des pénalités.\n• TRAVAILLEURS SANS PAPIERS : Mêmes droits que les travailleurs documentés. Une plainte salariale N'AFFECTE PAS votre statut d'immigration.",
    hi: "न्यूयॉर्क में कार्यकर्ता के रूप में आपके अधिकार:\n• न्यूनतम मजदूरी: $16/घंटा। कम मिल रहा है? labor.ny.gov पर मजदूरी का दावा दर्ज करें।\n• अवैतनिक मजदूरी: labor.ny.gov पर दर्ज करें — आपको बकाया भुगतान और जुर्माना मिल सकता है।\n• अनधिकृत कामगार: दस्तावेजी कामगारों के समान अधिकार। मजदूरी का दावा आपकी आव्रजन स्थिति को प्रभावित नहीं करता।",
    ur: "نیویارک میں مزدور کی حیثیت سے آپ کے حقوق:\n• کم از کم اجرت: $16/گھنٹہ۔ کم مل رہی ہے؟ labor.ny.gov پر اجرت کا دعویٰ درج کریں۔\n• غیر ادا شدہ اجرت: labor.ny.gov پر درج کریں — آپ کو بقایا ادائیگی اور جرمانہ مل سکتا ہے۔\n• غیر دستاویزی مزدور: دستاویزی مزدوروں کے برابر حقوق۔ اجرت کا دعویٰ آپ کی امیگریشن حیثیت کو متاثر نہیں کرتا۔",
    fa: "حقوق شما به عنوان کارگر در نیویورک:\n• حداقل دستمزد: ۱۶ دلار در ساعت. کمتر دریافت می‌کنید؟ در labor.ny.gov شکایت دستمزد ثبت کنید.\n• دستمزد پرداخت نشده: در labor.ny.gov شکایت ثبت کنید — می‌توانید دستمزد معوقه به‌علاوه جریمه دریافت کنید.\n• کارگران بدون مدرک: همان حقوق کارگران مستند را دارند. شکایت دستمزد بر وضعیت مهاجرتی شما تأثیری نمی‌گذارد.",
    ps: "په نیویارک کې ستاسو د کارګر حقوق:\n• لږ تر لږه معاش: $16/ساعت. لږ معاش ترلاسه کوئ؟ په labor.ny.gov کې د معاش شکایت ثبت کړئ.\n• ناورکړل شوي معاشونه: په labor.ny.gov کې شکایت وکړئ — تاسو کولی شئ شاتیني معاش او جریمې ترلاسه کړئ.\n• بې سندو کارګران: د سند لرونکو کارګرانو په څیر ورته حقوق. د معاش شکایت ستاسو د کډوالۍ حالت اغیزه نه کوي.",
    uk: "ВАШІ ПРАВА ЯК ПРАЦІВНИКА У НЬЮ-ЙОРКУ:\n• МІНІМАЛЬНА ЗАРПЛАТА: $16/година. Платять менше? Подайте скаргу про зарплату на labor.ny.gov.\n• НЕВИПЛАЧЕНА ЗАРПЛАТА: Подайте скаргу на labor.ny.gov — ви можете отримати недоплату плюс штрафи.\n• ПРАЦІВНИКИ БЕЗ ДОКУМЕНТІВ: Ті ж права, що й документовані працівники. Скарга про зарплату НЕ впливає на ваш імміграційний статус.",
  },
  legalBenefits: {
    en: "IF YOUR BENEFITS WERE DENIED OR CUT IN NEW YORK:\n• YOU HAVE THE RIGHT TO APPEAL every denial.\n• SNAP: 90 days to request a fair hearing. Benefits can continue during appeal if you request it.\n• Medicaid: 60 days to appeal. Request 'continuation of benefits' to keep coverage during review.\n• Temporary Assistance: 60 days to appeal reductions or terminations.\n• SSI/Disability: 60 days to appeal. Get a lawyer — many work on contingency (no fee unless you win).\n• REQUEST A FAIR HEARING: Call 518-473-3332 for any state benefit. It's free and your caseworker cannot retaliate.",
    es: "SI SUS BENEFICIOS FUERON NEGADOS O CORTADOS:\n• TIENE DERECHO A APELAR cada negación.\n• SNAP: 90 días para audiencia justa. Los beneficios pueden continuar durante la apelación.\n• Medicaid: 60 días para apelar.\n• AUDIENCIA JUSTA: Llame al 518-473-3332. Es gratis.",
    ne: "सुविधाहरू अस्वीकार वा कटौती गरियो भने:\n• हरेक अस्वीकृतिमा अपिल गर्ने अधिकार छ।\n• SNAP: निष्पक्ष सुनुवाइको लागि ९० दिन।\n• निष्पक्ष सुनुवाइ: 518-473-3332 मा कल गर्नुहोस्।",
    ar: "إذا رُفضت مزاياك أو قُطعت:\n• لديك الحق في الاستئناف على كل رفض.\n• SNAP: 90 يوماً لجلسة استماع عادلة.\n• جلسة استماع عادلة: اتصل بـ 518-473-3332. مجاني.",
    sw: "FAIDA ZAKO ZIKIKATALIWA AU KUPUNGUZWA:\n• UNA HAKI YA KUKATA RUFAA kwa kila kukataliwa.\n• SNAP: Siku 90 kwa kusikilizwa kwa haki.\n• KUSIKILIZWA KWA HAKI: Piga 518-473-3332. Bure.",
    my: "ခံစားခွင့်ငြင်းဆို သို့ ဖြတ်တောက်ခြင်းခံရပါက:\n• ငြင်းဆိုမှုတိုင်းတွင် အယူခံပိုင်ခွင့်ရှိသည်။\n• SNAP: တရားမျှတသောကြားနာမှုတောင်းဆိုရန် ၉၀ ရက်။\n• ဖုန်း: 518-473-3332",
    so: "HADDII FAAIDO DAHAADU LA DIIDAY AMA LA JARJARAY:\n• WAXAAD XAQ U LEEDAHAY CABASHO kasta oo la diiday.\n• SNAP: 90 maalmood dhageysiga xaqa ah.\n• DHAGEYSIGA XAQA AH: Wac 518-473-3332. Bilaash.",
    zh: "福利被拒绝或削减：\n• 您有权对每次拒绝上诉。\n• SNAP：90天申请公平听证。\n• 公平听证：致电518-473-3332。免费。",
    vi: "NẾU TRỢ CẤP CỦA BẠN BỊ TỪ CHỐI HOẶC CẮT GIẢM TẠI NEW YORK:\n• BẠN CÓ QUYỀN KHÁNG CÁO mọi quyết định từ chối.\n• SNAP: 90 ngày để yêu cầu phiên điều trần công bằng. Trợ cấp có thể tiếp tục trong khi kháng cáo.\n• Medicaid: 60 ngày để kháng cáo.\n• PHIÊN ĐIỀU TRẦN CÔNG BẰNG: Gọi 518-473-3332. Miễn phí.",
    ko: "뉴욕에서 복지 혜택이 거부되거나 삭감된 경우:\n• 모든 거부에 대해 항소할 권리가 있습니다.\n• SNAP: 공정 청문회를 요청할 수 있는 기간은 90일. 항소 중에도 혜택이 계속될 수 있습니다.\n• Medicaid: 60일 이내 항소.\n• 공정 청문회: 518-473-3332로 전화하세요. 무료입니다.",
    tl: "KUNG ANG IYONG BENEPISYO AY TINANGGIHAN O BINAWASAN SA NEW YORK:\n• MAY KARAPATAN KANG MAG-APELA sa bawat pagtanggi.\n• SNAP: 90 araw para humingi ng fair hearing. Maaaring magpatuloy ang benepisyo habang nag-aapela.\n• Medicaid: 60 araw para mag-apela.\n• FAIR HEARING: Tawagan ang 518-473-3332. Libre ito.",
    ru: "ЕСЛИ ВАШИ ПОСОБИЯ ОТКЛОНЕНЫ ИЛИ СОКРАЩЕНЫ В НЬЮ-ЙОРКЕ:\n• ВЫ ИМЕЕТЕ ПРАВО ОБЖАЛОВАТЬ каждый отказ.\n• SNAP: 90 дней для запроса справедливого слушания. Пособия могут продолжаться во время апелляции.\n• Medicaid: 60 дней для апелляции.\n• СПРАВЕДЛИВОЕ СЛУШАНИЕ: Позвоните 518-473-3332. Бесплатно.",
    ht: "SI BENEFIS OU YO REFIZE OSWA REDIKSYON NAN NEW YORK:\n• OU GEN DWA POU FÈ APÈL pou chak refi.\n• SNAP: 90 jou pou mande yon odyans jis. Benefis yo ka kontinye pandan apèl la.\n• Medicaid: 60 jou pou fè apèl.\n• ODYANS JIS: Rele 518-473-3332. Li gratis.",
    pt: "SE SEUS BENEFÍCIOS FORAM NEGADOS OU CORTADOS EM NOVA YORK:\n• VOCÊ TEM O DIREITO DE RECORRER de cada negação.\n• SNAP: 90 dias para solicitar uma audiência justa. Os benefícios podem continuar durante o recurso.\n• Medicaid: 60 dias para recorrer.\n• AUDIÊNCIA JUSTA: Ligue para 518-473-3332. É gratuito.",
    fr: "SI VOS PRESTATIONS ONT ÉTÉ REFUSÉES OU RÉDUITES À NEW YORK :\n• VOUS AVEZ LE DROIT DE FAIRE APPEL de chaque refus.\n• SNAP : 90 jours pour demander une audience équitable. Les prestations peuvent continuer pendant l'appel.\n• Medicaid : 60 jours pour faire appel.\n• AUDIENCE ÉQUITABLE : Appelez le 518-473-3332. C'est gratuit.",
    hi: "यदि न्यूयॉर्क में आपके लाभ अस्वीकार या कम कर दिए गए हैं:\n• आपको हर अस्वीकृति के खिलाफ अपील करने का अधिकार है।\n• SNAP: निष्पक्ष सुनवाई के लिए 90 दिन। अपील के दौरान लाभ जारी रह सकते हैं।\n• Medicaid: अपील के लिए 60 दिन।\n• निष्पक्ष सुनवाई: 518-473-3332 पर कॉल करें। यह मुफ्त है।",
    ur: "اگر نیویارک میں آپ کے فوائد مسترد یا کم کر دیے گئے ہیں:\n• آپ کو ہر انکار کے خلاف اپیل کرنے کا حق ہے۔\n• SNAP: منصفانہ سماعت کی درخواست کے لیے 90 دن۔ اپیل کے دوران فوائد جاری رہ سکتے ہیں۔\n• Medicaid: اپیل کے لیے 60 دن۔\n• منصفانہ سماعت: 518-473-3332 پر کال کریں۔ یہ مفت ہے۔",
    fa: "اگر مزایای شما در نیویورک رد یا قطع شده است:\n• شما حق دارید برای هر رد درخواست تجدیدنظر کنید.\n• SNAP: ۹۰ روز برای درخواست جلسه دادرسی منصفانه. مزایا ممکن است در طول تجدیدنظر ادامه یابد.\n• Medicaid: ۶۰ روز برای تجدیدنظر.\n• جلسه دادرسی منصفانه: با ۵۱۸-۴۷۳-۳۳۳۲ تماس بگیرید. رایگان است.",
    ps: "که په نیویارک کې ستاسو ګټې رد شوي یا کم شوي وي:\n• تاسو د هر ردولو په وړاندې د اپیل حق لرئ.\n• SNAP: د عادلانه اوریدنې غوښتنې لپاره ۹۰ ورځې. ګټې د اپیل پر مهال دوام موندلی شي.\n• Medicaid: د اپیل لپاره ۶۰ ورځې.\n• عادلانه اوریدنه: ۵۱۸-۴۷۳-۳۳۳۲ ته زنګ ووهئ. وړیا دی.",
    uk: "ЯКЩО ВАШІ ПІЛЬГИ ВІДМОВЛЕНІ АБО СКОРОЧЕНІ У НЬЮ-ЙОРКУ:\n• ВИ МАЄТЕ ПРАВО ОСКАРЖИТИ кожну відмову.\n• SNAP: 90 днів, щоб запросити справедливе слухання. Пільги можуть продовжуватися під час оскарження.\n• Medicaid: 60 днів для оскарження.\n• СПРАВЕДЛИВЕ СЛУХАННЯ: Зателефонуйте 518-473-3332. Безкоштовно.",
  },
  legalImmigration: {
    en: "IMPORTANT — IMMIGRATION LEGAL HELP IN NEW YORK:\n• ONLY use attorneys or DOJ-accredited representatives. 'Notarios' and immigration consultants who are NOT lawyers can cause serious harm.\n• IF ICE CONTACTS YOU: You have the right to remain silent. Do not answer questions about your birthplace or status. Ask for a lawyer.\n• DACA holders: You have work authorization while your status is valid. Renew on time.\n• SANCTUARY: Local police do not ask about immigration status for routine matters.\n• FREE LEGAL HELP: Catholic Charities and New Hope ILS provide DOJ-accredited immigration legal services.",
    es: "AYUDA LEGAL DE INMIGRACIÓN — IMPORTANTE:\n• SOLO use abogados o representantes acreditados por el DOJ. Los 'notarios' no son abogados.\n• SI ICE LE CONTACTA: Tiene derecho a guardar silencio.\n• Protección: La policía local no pregunta sobre estatus migratorio en interacciones rutinarias.",
    ne: "आप्रवासन कानुनी सहायता — महत्त्वपूर्ण:\n• केवल DOJ-मान्यताप्राप्त वकिलहरू प्रयोग गर्नुहोस्।\n• ICE ले सम्पर्क गर्छ भने: मौन रहने अधिकार छ।\n• स्थानीय प्रहरीले नियमित अन्तरक्रियामा आप्रवासन स्थितिको बारेमा सोध्दैन।",
    ar: "مساعدة قانونية في الهجرة — مهم:\n• استخدم فقط المحامين أو الممثلين المعتمدين من DOJ.\n• إذا اتصل بك ICE: لديك الحق في الصمت.\n• الشرطة المحلية لا تسأل عن الوضع المهاجر في التفاعلات الروتينية.",
    sw: "MSAADA WA KISHERIA WA UHAMIAJI — MUHIMU:\n• Tumia tu mawakili au wawakilishi walioidhinishwa na DOJ.\n• IKIWA ICE ITAWASILIANA NAWE: Una haki ya kukaa kimya.\n• Polisi wa ndani hawaulizi kuhusu hali ya uhamiaji kwa mambo ya kawaida.",
    my: "လူဝင်မှုကြီးကြပ်ရေး တရားရေးအကူအညီ — အရေးကြီး:\n• DOJ-အသိအမှတ်ပြုချက်ရှိသောရှေ့နေများသာ သုံးပါ။\n• ICE ဆက်သွယ်ပါက: ဆိတ်ဆိတ်နေပိုင်ခွင့်ရှိသည်။\n• ဒေသဆိုင်ရာရဲများသည် ပုံမှန်ဆက်ဆံမှုများတွင် နေထိုင်မှုအဆင့်အတန်းကို မမေးပါ။",
    so: "CAAWIMADA SHARCIGA SOCDAALKA — MUHIIM:\n• Isticmaal oo keliya wakiilada DOJ ee la ansixiyey.\n• HADDII ICE KAA XIRIIRTO: Waxaad xaq u leedahay inaad aamusto.\n• Booliska maxalliga ah kama weydiin karaan xaaladda socdaalka arrimaha caadiga ah.",
    zh: "移民法律帮助 — 重要：\n• 只使用律师或司法部认可的代理人。\n• 如果ICE联系您：您有权保持沉默。\n• 当地警察在日常事务中不询问移民身份。",
    vi: "QUAN TRỌNG — TRỢ GIÚP PHÁP LÝ NHẬP CƯ TẠI NEW YORK:\n• CHỈ sử dụng luật sư hoặc đại diện được DOJ công nhận. 'Notarios' KHÔNG phải là luật sư và có thể gây hại nghiêm trọng.\n• NẾU ICE LIÊN HỆ VỚI BẠN: Bạn có quyền giữ im lặng. Không trả lời câu hỏi về nơi sinh hoặc tình trạng. Yêu cầu luật sư.\n• Cảnh sát địa phương không hỏi về tình trạng nhập cư trong các vấn đề thông thường.\n• TRỢ GIÚP PHÁP LÝ MIỄN PHÍ: Catholic Charities và New Hope ILS cung cấp dịch vụ pháp lý nhập cư được DOJ công nhận.",
    ko: "중요 — 뉴욕에서 이민 법률 지원:\n• 변호사 또는 DOJ 공인 대리인만 이용하세요. 'Notarios'는 변호사가 아니며 심각한 피해를 줄 수 있습니다.\n• ICE가 연락한 경우: 묵비권이 있습니다. 출생지나 신분에 대한 질문에 답하지 마세요. 변호사를 요구하세요.\n• 지역 경찰은 일상적인 일에서 이민 신분을 묻지 않습니다.\n• 무료 법률 지원: Catholic Charities와 New Hope ILS가 DOJ 공인 이민 법률 서비스를 제공합니다.",
    tl: "MAHALAGA — TULONG LEGAL SA IMIGRASYON SA NEW YORK:\n• GUMAMIT LAMANG ng abogado o DOJ-accredited representative. Ang 'Notarios' ay HINDI abogado at maaaring magdulot ng malubhang pinsala.\n• KUNG MAKIPAG-UGNAYAN SA IYO ANG ICE: May karapatan kang manahimik. Huwag sumagot sa tanong tungkol sa lugar ng kapanganakan o status. Humingi ng abogado.\n• Ang lokal na pulis ay hindi nagtatanong tungkol sa immigration status sa mga karaniwang bagay.\n• LIBRENG TULONG LEGAL: Ang Catholic Charities at New Hope ILS ay nagbibigay ng DOJ-accredited immigration legal services.",
    ru: "ВАЖНО — ИММИГРАЦИОННАЯ ЮРИДИЧЕСКАЯ ПОМОЩЬ В НЬЮ-ЙОРКЕ:\n• ИСПОЛЬЗУЙТЕ ТОЛЬКО адвокатов или представителей, аккредитованных DOJ. 'Notarios' — НЕ адвокаты и могут нанести серьёзный вред.\n• ЕСЛИ ICE СВЯЖЕТСЯ С ВАМИ: У вас есть право хранить молчание. Не отвечайте на вопросы о месте рождения или статусе. Попросите адвоката.\n• Местная полиция не спрашивает об иммиграционном статусе в повседневных вопросах.\n• БЕСПЛАТНАЯ ЮРИДИЧЕСКАЯ ПОМОЩЬ: Catholic Charities и New Hope ILS предоставляют услуги, аккредитованные DOJ.",
    ht: "ENPÒTAN — ÈD LEGAL POU IMIGRASYON NAN NEW YORK:\n• Sèlman itilize avoka oswa reprezantan ki gen akreditasyon DOJ. 'Notarios' PA avoka epi yo ka koze gwo domaj.\n• SI ICE KONTAKTE W: Ou gen dwa pou rete an silans. Pa reponn kesyon sou kote ou fèt oswa estati w. Mande yon avoka.\n• Lapolis lokal pa mande sou estati imigrasyon nan zafè òdinè.\n• ÈD LEGAL GRATIS: Catholic Charities ak New Hope ILS bay sèvis legal imigrasyon ki akredite pa DOJ.",
    pt: "IMPORTANTE — AJUDA JURÍDICA DE IMIGRAÇÃO EM NOVA YORK:\n• Use APENAS advogados ou representantes credenciados pelo DOJ. 'Notarios' NÃO são advogados e podem causar danos graves.\n• SE O ICE ENTRAR EM CONTATO COM VOCÊ: Você tem o direito de permanecer em silêncio. Não responda perguntas sobre local de nascimento ou status. Peça um advogado.\n• A polícia local não pergunta sobre status imigratório em assuntos rotineiros.\n• AJUDA JURÍDICA GRATUITA: Catholic Charities e New Hope ILS fornecem serviços jurídicos de imigração credenciados pelo DOJ.",
    fr: "IMPORTANT — AIDE JURIDIQUE EN MATIÈRE D'IMMIGRATION À NEW YORK :\n• Utilisez UNIQUEMENT des avocats ou des représentants accrédités par le DOJ. Les 'Notarios' NE SONT PAS des avocats et peuvent causer de graves préjudices.\n• SI ICE VOUS CONTACTE : Vous avez le droit de garder le silence. Ne répondez pas aux questions sur votre lieu de naissance ou votre statut. Demandez un avocat.\n• La police locale ne pose pas de questions sur le statut d'immigration pour des questions courantes.\n• AIDE JURIDIQUE GRATUITE : Catholic Charities et New Hope ILS fournissent des services juridiques d'immigration accrédités par le DOJ.",
    hi: "महत्वपूर्ण — न्यूयॉर्क में आव्रजन कानूनी सहायता:\n• केवल वकीलों या DOJ-मान्यताप्राप्त प्रतिनिधियों का उपयोग करें। 'Notarios' वकील नहीं हैं और गंभीर नुकसान पहुंचा सकते हैं।\n• यदि ICE आपसे संपर्क करे: आपको चुप रहने का अधिकार है। जन्म स्थान या स्थिति के बारे में सवालों का जवाब न दें। वकील मांगें।\n• स्थानीय पुलिस सामान्य मामलों में आव्रजन स्थिति के बारे में नहीं पूछती।\n• मुफ्त कानूनी सहायता: Catholic Charities और New Hope ILS DOJ-मान्यताप्राप्त आव्रजन कानूनी सेवाएं प्रदान करते हैं।",
    ur: "اہم — نیویارک میں امیگریشن قانونی مدد:\n• صرف وکیلوں یا DOJ-منظور شدہ نمائندوں کا استعمال کریں۔ 'Notarios' وکیل نہیں ہیں اور سنگین نقصان پہنچا سکتے ہیں۔\n• اگر ICE آپ سے رابطہ کرے: آپ کو خاموش رہنے کا حق ہے۔ پیدائش کی جگہ یا حیثیت کے بارے میں سوالات کا جواب نہ دیں۔ وکیل کی درخواست کریں۔\n• مقامی پولیس عام معاملات میں امیگریشن حیثیت کے بارے میں نہیں پوچھتی۔\n• مفت قانونی مدد: Catholic Charities اور New Hope ILS DOJ-منظور شدہ امیگریشن قانونی خدمات فراہم کرتے ہیں۔",
    fa: "مهم — کمک حقوقی مهاجرت در نیویورک:\n• فقط از وکلا یا نمایندگان مورد تأیید DOJ استفاده کنید. 'Notarios' وکیل نیستند و می‌توانند آسیب جدی وارد کنند.\n• اگر ICE با شما تماس گرفت: شما حق سکوت دارید. به سؤالات درباره محل تولد یا وضعیت پاسخ ندهید. درخواست وکیل کنید.\n• پلیس محلی در مسائل عادی درباره وضعیت مهاجرت نمی‌پرسد.\n• کمک حقوقی رایگان: Catholic Charities و New Hope ILS خدمات حقوقی مهاجرت مورد تأیید DOJ ارائه می‌دهند.",
    ps: "مهم — په نیویارک کې د کډوالۍ حقوقي مرسته:\n• یوازې د وکیلانو یا د DOJ منل شویو استازو څخه ګټه پورته کړئ. 'Notarios' وکیلان نه دي او کولی شي جدي زیان ورسوي.\n• که ICE تاسو سره اړیکه ونیسي: تاسو د چپ پاتې کیدو حق لرئ. د زیږون ځای یا حالت په اړه پوښتنو ته ځواب مه ورکوئ. د وکیل غوښتنه وکړئ.\n• محلي پولیس په عادي چارو کې د کډوالۍ حالت په اړه نه پوښتي.\n• وړیا حقوقي مرسته: Catholic Charities او New Hope ILS د DOJ لخوا منل شوي د کډوالۍ حقوقي خدمات وړاندې کوي.",
    uk: "ВАЖЛИВО — ІМІГРАЦІЙНА ЮРИДИЧНА ДОПОМОГА У НЬЮ-ЙОРКУ:\n• Користуйтеся ВИКЛЮЧНО адвокатами або представниками, акредитованими DOJ. 'Notarios' — НЕ адвокати і можуть завдати серйозної шкоди.\n• ЯКЩО ICE ЗВ'ЯЖЕТЬСЯ З ВАМИ: Ви маєте право мовчати. Не відповідайте на запитання про місце народження або статус. Попросіть адвоката.\n• Місцева поліція не питає про імміграційний статус у рутинних справах.\n• БЕЗКОШТОВНА ЮРИДИЧНА ДОПОМОГА: Catholic Charities та New Hope ILS надають імміграційні юридичні послуги, акредитовані DOJ.",
  },
  legalDiscrim: {
    en: "IF YOU WERE DISCRIMINATED AGAINST IN NEW YORK:\n• PROTECTED IN NY: race, color, national origin, sex, pregnancy, age, disability, religion, sexual orientation, gender identity, marital status, military status, source of income.\n• EMPLOYMENT: File with EEOC (federal) or NYS Division of Human Rights. Deadline: 300 days from the incident. Do not wait.\n• HOUSING: Refusing to rent based on any protected class — including Section 8 vouchers — is illegal.\n• DISABILITY: Employers with 15+ staff must provide reasonable accommodations. Refusing is discrimination.\n• RETALIATION: Filing a complaint is protected. Retaliation is illegal.",
    es: "SI SUFRIÓ DISCRIMINACIÓN EN NUEVA YORK:\n• PROTEGIDO EN NY: raza, sexo, edad, discapacidad, orientación sexual, identidad de género, fuente de ingresos.\n• EMPLEO: Presente una queja con el EEOC o la División de Derechos Humanos de NYS. Plazo: 300 días.\n• VIVIENDA: Negarse a alquilar basándose en cualquier clase protegida — incluyendo la Sección 8 — es ilegal.",
    ne: "भेदभाव भोग्नुभयो भने:\n• NY मा संरक्षित: जाति, लिंग, उमेर, अपाङ्गता, यौन अभिमुखीकरण, आय स्रोत।\n• रोजगार: EEOC वा NYS मानव अधिकार विभागमा उजुरी दिनुहोस्। समय सीमा: ३०० दिन।\n• आवास: धारा ८ भाउचर सहितको संरक्षित वर्गको आधारमा भाडा दिन अस्वीकार गर्नु गैरकानुनी हो।",
    ar: "إذا تعرضت للتمييز في نيويورك:\n• المحمي في نيويورك: العرق والجنس والعمر والإعاقة والتوجه الجنسي ومصدر الدخل.\n• التوظيف: قدم شكوى مع EEOC أو قسم حقوق الإنسان في نيويورك. الموعد: 300 يوم.\n• السكن: رفض الإيجار بسبب أي فئة محمية — بما في ذلك القسم 8 — غير قانوني.",
    sw: "UKIDHULUMIWA UBAGUZI NEW YORK:\n• KULINDWA NY: rangi, jinsia, umri, ulemavu, mwelekeo wa kijinsia, chanzo cha mapato.\n• AJIRA: Wasilisha malalamiko kwa EEOC au Idara ya Haki za Binadamu ya NYS. Muda: siku 300.\n• MAKAZI: Kukataa kukodisha kwa misingi ya kikundi chochote kinachohifadhiwa — ikiwemo Kifungu cha 8 — ni kinyume cha sheria.",
    my: "ခွဲခြားဆက်ဆံမှုခံရပါက:\n• NY တွင် ကာကွယ်ထားသောအမျိုးအစားများ: လူမျိုး၊ ကျားမ၊ အသက်၊ မသန်စွမ်းမှု၊ ကျား-မဆက်ဆံမှုဦးတည်ချက်၊ ဝင်ငွေရင်းမြစ်။\n• အလုပ်: EEOC သို့မဟုတ် NYS လူ့အခွင့်အရေးဌာနသို့ တိုင်ကြားပါ။ သတ်မှတ်ချိန်: ၃၀၀ ရက်။",
    so: "HADDAAD TAKOORRID LA KULMAY NEW YORK:\n• ILAALINTA NY: jins, jinsi, da', naafonimo, dookha galmoodka, ilo dakhli.\n• SHAQADA: Geli cabasho EEOC ama Qaybta Xuquuqda Aadanaha NYS. Muddada: 300 maalmood.\n• GURIYAYNTA: Diidmada kirada iyada oo ku saleysan koox kasta oo ilaalinta leh — oo ay ku jirto Qeybta 8 — waa sharci-darro.",
    zh: "在纽约遭受歧视：\n• 纽约保护类别：种族、性别、年龄、残疾、性取向、收入来源。\n• 就业：向EEOC或纽约州人权部门投诉。截止日期：300天。\n• 住房：基于任何受保护类别（包括第8节）拒绝出租是违法的。",
    vi: "NẾU BẠN BỊ PHÂN BIỆT ĐỐI XỬ TẠI NEW YORK:\n• ĐƯỢC BẢO VỆ TẠI NY: chủng tộc, giới tính, tuổi, khuyết tật, khuynh hướng tình dục, nguồn thu nhập.\n• VIỆC LÀM: Nộp đơn với EEOC hoặc NYS Division of Human Rights. Hạn chót: 300 ngày kể từ ngày xảy ra. Đừng chờ đợi.\n• NHÀ Ở: Từ chối cho thuê dựa trên bất kỳ nhóm được bảo vệ nào — bao gồm cả Section 8 — là bất hợp pháp.",
    ko: "뉴욕에서 차별을 당한 경우:\n• 뉴욕에서 보호되는 항목: 인종, 성별, 나이, 장애, 성적 지향, 소득원.\n• 고용: EEOC 또는 뉴욕주 인권부에 신고하세요. 마감: 사건으로부터 300일. 미루지 마세요.\n• 주거: 보호되는 계층(섹션 8 바우처 포함)을 이유로 임대를 거부하는 것은 불법입니다.",
    tl: "KUNG IKAW AY DINISKRIMINA SA NEW YORK:\n• PROTEKTADO SA NY: lahi, kasarian, edad, kapansanan, sexual orientation, pinagmumulan ng kita.\n• EMPLEYO: Mag-file sa EEOC o NYS Division of Human Rights. Deadline: 300 araw mula sa pangyayari. Huwag maghintay.\n• PABAHAY: Ang pagtanggi na magpaupa batay sa anumang protected class — kasama ang Section 8 vouchers — ay labag sa batas.",
    ru: "ЕСЛИ ВАС ДИСКРИМИНИРОВАЛИ В НЬЮ-ЙОРКЕ:\n• ЗАЩИЩЕНО В НЬЮ-ЙОРКЕ: раса, пол, возраст, инвалидность, сексуальная ориентация, источник дохода.\n• ТРУДОУСТРОЙСТВО: Подайте жалобу в EEOC или NYS Division of Human Rights. Срок: 300 дней с момента инцидента. Не ждите.\n• ЖИЛЬЁ: Отказ в аренде на основании любого защищённого класса — включая ваучеры Section 8 — незаконен.",
    ht: "SI YO DISKRIMINE OU NAN NEW YORK:\n• PWOTEJE NAN NY: ras, sèks, laj, andikap, oryantasyon seksyèl, sous revni.\n• ANPLWA: Depoze yon plent ak EEOC oswa NYS Division of Human Rights. Dat limit: 300 jou apati ensidan an. Pa tann.\n• LOJMAN: Refize lwe sou baz nenpòt klas pwoteje — ki gen ladan bòn Section 8 — ilegal.",
    pt: "SE VOCÊ FOI DISCRIMINADO EM NOVA YORK:\n• PROTEGIDO EM NY: raça, sexo, idade, deficiência, orientação sexual, fonte de renda.\n• EMPREGO: Apresente queixa ao EEOC ou ao NYS Division of Human Rights. Prazo: 300 dias a partir do incidente. Não espere.\n• MORADIA: Recusar alugar com base em qualquer classe protegida — incluindo vouchers da Section 8 — é ilegal.",
    fr: "SI VOUS AVEZ ÉTÉ VICTIME DE DISCRIMINATION À NEW YORK :\n• PROTÉGÉ À NY : race, sexe, âge, handicap, orientation sexuelle, source de revenus.\n• EMPLOI : Déposez une plainte auprès de l'EEOC ou du NYS Division of Human Rights. Délai : 300 jours à partir de l'incident. N'attendez pas.\n• LOGEMENT : Refuser de louer sur la base d'une classe protégée — y compris les bons Section 8 — est illégal.",
    hi: "यदि न्यूयॉर्क में आपके साथ भेदभाव हुआ है:\n• NY में संरक्षित: नस्ल, लिंग, उम्र, विकलांगता, यौन अभिविन्यास, आय का स्रोत।\n• रोजगार: EEOC या NYS Division of Human Rights में शिकायत दर्ज करें। समय सीमा: घटना से 300 दिन। प्रतीक्षा न करें।\n• आवास: किसी भी संरक्षित वर्ग — Section 8 वाउचर सहित — के आधार पर किराये पर देने से इनकार करना गैरकानूनी है।",
    ur: "اگر نیویارک میں آپ کے ساتھ امتیازی سلوک ہوا ہے:\n• NY میں محفوظ: نسل، جنس، عمر، معذوری، جنسی رجحان، آمدنی کا ذریعہ۔\n• ملازمت: EEOC یا NYS Division of Human Rights میں شکایت درج کریں۔ ڈیڈ لائن: واقعے سے 300 دن۔ انتظار نہ کریں۔\n• رہائش: کسی بھی محفوظ طبقے — بشمول Section 8 واؤچرز — کی بنیاد پر کرایہ پر دینے سے انکار کرنا غیر قانونی ہے۔",
    fa: "اگر در نیویورک با شما تبعیض شده است:\n• محافظت‌شده در NY: نژاد، جنسیت، سن، معلولیت، گرایش جنسی، منبع درآمد.\n• اشتغال: شکایت خود را به EEOC یا NYS Division of Human Rights ارائه دهید. مهلت: ۳۰۰ روز از زمان حادثه. منتظر نمانید.\n• مسکن: امتناع از اجاره دادن بر اساس هر طبقه محافظت‌شده — از جمله کوپن‌های Section 8 — غیرقانونی است.",
    ps: "که په نیویارک کې له تاسو سره توپیر شوی وي:\n• په NY کې ساتل شوي: نژاد، جنس، عمر، معلولیت، جنسي تمایل، د عاید سرچینه.\n• دنده: EEOC یا NYS Division of Human Rights ته شکایت وکړئ. وروستۍ نېټه: د پېښې څخه ۳۰۰ ورځې. مه انتظار کوئ.\n• استوګنه: د هر ساتل شوي طبقې — د Section 8 کوپونونو په ګډون — پر بنسټ د کرایې ورکولو څخه انکار غیرقانوني دی.",
    uk: "ЯКЩО ВАС ДИСКРИМІНУВАЛИ У НЬЮ-ЙОРКУ:\n• ЗАХИЩЕНО У НЬЮ-ЙОРКУ: раса, стать, вік, інвалідність, сексуальна орієнтація, джерело доходу.\n• ПРАЦЕВЛАШТУВАННЯ: Подайте скаргу до EEOC або NYS Division of Human Rights. Термін: 300 днів від інциденту. Не чекайте.\n• ЖИТЛО: Відмова в оренді на підставі будь-якого захищеного класу — включаючи ваучери Section 8 — незаконна.",
  },
  legalDebt: {
    en: "IF YOU'RE BEING SUED OR HARASSED OVER DEBT IN NEW YORK:\n• DEBT COLLECTORS CANNOT: call before 8am or after 9pm, threaten arrest, use abusive language, or lie about what you owe. These violate federal law (FDCPA).\n• YOU CAN STOP THE CALLS: Send a written cease-communication letter. They must stop except to notify you of legal action.\n• STATUTE OF LIMITATIONS: Most debts in NY expire after 3 years. They may not be able to sue you on old debt — but do NOT ignore a court summons.\n• IF SUED: Respond. Ignoring it = automatic default judgment against you.\n• WAGE GARNISHMENT: NY creditors can garnish up to 10% of gross wages. SNAP, SSI, and unemployment CANNOT be garnished.",
    es: "SI LO DEMANDAN O ACOSAN POR DEUDAS:\n• Los cobradores NO pueden llamar antes de las 8am o después de las 9pm, amenazar con arresto, o mentir.\n• PUEDE DETENER LAS LLAMADAS: Envíe una carta de cese de comunicación.\n• ESTATUTO DE LIMITACIONES: La mayoría de las deudas en NY expiran en 3 años.\n• SI LO DEMANDAN: Responda. Ignorarlo = fallo por incumplimiento.",
    ne: "ऋणको लागि मुद्दा वा उत्पीडन:\n• ऋण संकलकहरूले बिहान ८ बजाभन्दा पहिले वा राति ९ बजापछि कल गर्न सक्दैनन्, गिरफ्तारीको धम्की दिन सक्दैनन्।\n• NY मा अधिकांश ऋणहरू ३ वर्षपछि समाप्त हुन्छन्।\n• मुद्दा लगाइयो भने: जवाफ दिनुहोस्। बेवास्ता गर्नु भनेको स्वचालित निर्णय हो।",
    ar: "إذا تمت مقاضاتك أو مضايقتك بسبب الديون:\n• جامعو الديون لا يمكنهم الاتصال قبل 8 صباحاً أو بعد 9 مساءً، أو التهديد بالاعتقال.\n• معظم الديون في نيويورك تنتهي بعد 3 سنوات.\n• إذا تمت مقاضاتك: رد. التجاهل = حكم تلقائي ضدك.",
    sw: "UKIFUATWA KWA MADAI YA DENI:\n• Wakusanyaji HAWAWEZI kupiga simu kabla ya 8am au baada ya 9pm, au kutishia kukamatwa.\n• Madeni mengi ya NY yanaisha baada ya miaka 3.\n• UKISHITAKIWA: Jibu. Kupuuza = hukumu ya moja kwa moja dhidi yako.",
    my: "ကြွေးမြီကြောင့် တရားစွဲဆိုခြင်း သို့ နှောင့်ယှက်ခြင်း:\n• ကြွေးတောင်းသူများသည် နံနက် ၈ နာရီမတိုင်မီ သို့ ညနေ ၉ နာရီနောက်တွင် ဆက်သွယ်ခွင့်မရှိ၊ ဖမ်းဆီးမည်ဟု ခြိမ်းခြောက်ခွင့်မရှိပါ။\n• NY ကြွေးအများစု ၃ နှစ်နောက် သက်တမ်းကုန်ဆုံးသည်။\n• တရားစွဲဆိုခြင်းခံရပါက: ဖြေကြားပါ။",
    so: "DACWAD AMA XARIIRID DEYNTA:\n• Uruuriyayaasha KUMA XIRIIRI KARAAN ka hor 8am ama ka dib 9pm, ama cabsi gelinaya xirashada.\n• Deymaha badankood ee NY waxay dhacaan 3 sano ka dib.\n• HADDAAD DACWAD LAGU SAMEEYEY: Jawaab. Aamusnaan = xukunka tooska ah ee kuu dhan.",
    zh: "因债务被起诉或骚扰：\n• 债务催收员不能在早上8点前或晚上9点后致电，不能威胁逮捕。\n• 纽约大多数债务3年后失效。\n• 如果被起诉：回应。忽视等于自动败诉。",
    vi: "NẾU BẠN BỊ KIỆN HOẶC QUẤY RỐI VỀ NỢ TẠI NEW YORK:\n• NGƯỜI THU NỢ KHÔNG ĐƯỢC: gọi trước 8 giờ sáng hoặc sau 9 giờ tối, đe dọa bắt giữ, hoặc nói dối về số tiền bạn nợ.\n• THỜI HẠN: Hầu hết các khoản nợ tại NY hết hạn sau 3 năm.\n• NẾU BỊ KIỆN: Hãy phản hồi. Bỏ qua = phán quyết mặc định chống lại bạn.",
    ko: "뉴욕에서 빚 때문에 소송을 당하거나 괴롭힘을 당하는 경우:\n• 채권 추심원은 다음을 할 수 없습니다: 오전 8시 이전이나 오후 9시 이후 전화, 체포 위협, 빚에 대해 거짓말.\n• 시효: 뉴욕에서 대부분의 빚은 3년 후 만료됩니다.\n• 소송을 당한 경우: 응답하세요. 무시 = 당신에게 불리한 자동 판결.",
    tl: "KUNG IKAW AY DEMANDADO O HINAHARASS DAHIL SA UTANG SA NEW YORK:\n• ANG MGA DEBT COLLECTOR AY HINDI MAAARING: tumawag bago ng 8am o pagkatapos ng 9pm, magbanta ng pag-aresto, o magsinungaling tungkol sa iyong utang.\n• STATUTE OF LIMITATIONS: Karamihan sa mga utang sa NY ay nagtatapos pagkatapos ng 3 taon.\n• KUNG DEMANDADO: Sumagot. Pagbalewala = automatic na default judgment laban sa iyo.",
    ru: "ЕСЛИ НА ВАС ПОДАЛИ В СУД ИЛИ ПРЕСЛЕДУЮТ ИЗ-ЗА ДОЛГА В НЬЮ-ЙОРКЕ:\n• СБОРЩИКИ ДОЛГОВ НЕ МОГУТ: звонить до 8 утра или после 9 вечера, угрожать арестом, или лгать о вашем долге.\n• СРОК ДАВНОСТИ: Большинство долгов в Нью-Йорке истекают через 3 года.\n• ЕСЛИ ВАС СУДЯТ: Отвечайте. Игнорирование = автоматическое решение не в вашу пользу.",
    ht: "SI YO POURSWIV OU OSWA YO AP ANBÈTE W POU YON DÈT NAN NEW YORK:\n• KOLEKTÈ DÈT YO PA KA: rele anvan 8è dimaten oswa apre 9è diswa, menase w avèk arestasyon, oswa bay manti sou sa ou dwe.\n• DELÈ LEGAL: Pifò dèt nan NY ekspire apre 3 lane.\n• SI YO POURSWIV OU: Reponn. Inyore l = jijman otomatik kont ou.",
    pt: "SE VOCÊ ESTÁ SENDO PROCESSADO OU ASSEDIADO POR DÍVIDA EM NOVA YORK:\n• COBRADORES DE DÍVIDA NÃO PODEM: ligar antes das 8h ou depois das 21h, ameaçar prisão, ou mentir sobre o que você deve.\n• PRAZO DE PRESCRIÇÃO: A maioria das dívidas em NY expira após 3 anos.\n• SE PROCESSADO: Responda. Ignorar = julgamento automático contra você.",
    fr: "SI VOUS ÊTES POURSUIVI OU HARCELÉ POUR UNE DETTE À NEW YORK :\n• LES AGENTS DE RECOUVREMENT NE PEUVENT PAS : appeler avant 8h ou après 21h, menacer d'arrestation, ou mentir sur ce que vous devez.\n• DÉLAI DE PRESCRIPTION : La plupart des dettes à NY expirent après 3 ans.\n• SI POURSUIVI : Répondez. Ignorer = jugement automatique contre vous.",
    hi: "यदि न्यूयॉर्क में आप पर कर्ज के लिए मुकदमा चल रहा है या आपको परेशान किया जा रहा है:\n• कर्ज वसूल करने वाले ये नहीं कर सकते: सुबह 8 बजे से पहले या रात 9 बजे के बाद फोन करना, गिरफ्तारी की धमकी देना, या आपके कर्ज के बारे में झूठ बोलना।\n• सीमा अवधि: NY में अधिकांश कर्ज 3 साल बाद समाप्त हो जाते हैं।\n• यदि मुकदमा हो: जवाब दें। नज़रअंदाज़ करना = आपके खिलाफ स्वचालित निर्णय।",
    ur: "اگر نیویارک میں آپ پر قرض کے لیے مقدمہ چل رہا ہے یا آپ کو ہراساں کیا جا رہا ہے:\n• قرض وصول کرنے والے یہ نہیں کر سکتے: صبح 8 بجے سے پہلے یا رات 9 بجے کے بعد فون کرنا، گرفتاری کی دھمکی دینا، یا آپ کے قرض کے بارے میں جھوٹ بولنا۔\n• حد بندی: NY میں زیادہ تر قرض 3 سال بعد ختم ہو جاتے ہیں۔\n• اگر مقدمہ ہو: جواب دیں۔ نظرانداز کرنا = آپ کے خلاف خودکار فیصلہ۔",
    fa: "اگر در نیویورک به دلیل بدهی از شما شکایت می‌شود یا اذیت می‌شوید:\n• وصول‌کنندگان بدهی نمی‌توانند: قبل از ساعت ۸ صبح یا بعد از ۹ شب تماس بگیرند، تهدید به دستگیری کنند، یا درباره بدهی شما دروغ بگویند.\n• مرور زمان: بیشتر بدهی‌ها در NY پس از ۳ سال منقضی می‌شوند.\n• اگر شکایت شد: پاسخ دهید. نادیده گرفتن = حکم خودکار علیه شما.",
    ps: "که په نیویارک کې ستاسو پر ضد د پور لپاره دعوه شوې وي یا تاسو ځورول کیږئ:\n• د پور راټولوونکي نه شي کولی: د سهار له ۸ بجو دمخه یا د ماښام له ۹ بجو وروسته زنګ ووهي، د نیولو ګواښ وکړي، یا ستاسو د پور په اړه دروغ ووایي.\n• د محدودیت موده: په NY کې ډېری پورونه له ۳ کلونو وروسته منقضي کیږي.\n• که دعوه شوې وي: ځواب ووایاست. نادیده کول = ستاسو پر ضد اتومات حکم.",
    uk: "ЯКЩО ВАС СУДЯТЬ АБО ПЕРЕСЛІДУЮТЬ ЧЕРЕЗ БОРГ У НЬЮ-ЙОРКУ:\n• ЗБИРАЧІ БОРГІВ НЕ МОЖУТЬ: телефонувати до 8 ранку або після 9 вечора, погрожувати арештом, або брехати про ваш борг.\n• СТРОК ПОЗОВНОЇ ДАВНОСТІ: Більшість боргів у Нью-Йорку спливають через 3 роки.\n• ЯКЩО ВАС СУДЯТЬ: Відповідайте. Ігнорування = автоматичне рішення проти вас.",
  },
  legalSmallClaims: {
    en: "SMALL CLAIMS COURT IN NEW YORK — NO LAWYER NEEDED:\n• Handles disputes up to $10,000 (City Court) or $3,000 (Town/Village Court).\n• COMMON USES: Landlord won't return security deposit, contractor did bad work, someone owes you money, property damage.\n• HOW TO FILE: Go to Rochester City Court, 99 Exchange Blvd. Filing fee: $15–$20. Court date usually within 2–3 months.\n• BRING: All documentation — receipts, contracts, photos, texts, estimates. Organize everything.\n• SECURITY DEPOSITS: In NY, your landlord must return your deposit within 14 days with an itemized list. If they don't, you can sue for DOUBLE the amount.",
    es: "CORTE DE RECLAMOS MENORES — SIN ABOGADO NECESARIO:\n• Maneja disputas hasta $10,000.\n• USOS COMUNES: Depósito de seguridad no devuelto, trabajo deficiente de contratista.\n• CÓMO PRESENTAR: Corte de la Ciudad de Rochester, 99 Exchange Blvd. Cuota: $15-$20.\n• DEPÓSITOS: El arrendador debe devolverlos en 14 días. Si no, puede demandar el DOBLE.",
    ne: "साना दावी अदालत — वकिल चाहिँदैन:\n• $१०,००० सम्मको विवादहरू हेर्छ।\n• सामान्य प्रयोगहरू: धरौटी फिर्ता नगर्नु, खराब काम।\n• दायर गर्न: Rochester City Court, ९९ Exchange Blvd। शुल्क: $१५-$२०।\n• धरौटी: घरबेटीले १४ दिनभित्र फिर्ता गर्नुपर्छ। नगरे दोब्बर रकम दावी गर्न सक्नुहुन्छ।",
    ar: "محكمة المطالبات الصغيرة — لا تحتاج محامياً:\n• تتعامل مع النزاعات حتى 10,000 دولار.\n• الاستخدامات الشائعة: التأمين غير المُعاد، عمل المقاول السيء.\n• كيفية التقديم: محكمة مدينة روتشستر، 99 Exchange Blvd. الرسوم: 15-20 دولاراً.\n• الودائع: يجب إعادتها خلال 14 يوماً. إذا لم تُعَد، يمكنك المطالبة بضعف المبلغ.",
    sw: "MAHAKAMA YA MADAI MADOGO — HAKUNA WAKILI UNAOHITAJIKA:\n• Inashughulikia migogoro hadi $10,000.\n• MATUMIZI YA KAWAIDA: Amana haijarudishwa, kazi mbaya ya mkandarasi.\n• JINSI YA KUWASILISHA: Mahakama ya Mji wa Rochester, 99 Exchange Blvd. Ada: $15-$20.\n• AMANA: Lazima zirudishwe ndani ya siku 14. Zisiporudishwa, unaweza kudai MARA MBILI.",
    my: "Small Claims Court — ရှေ့နေမလိုပါ:\n• $၁၀,၀၀၀ အထိ အငြင်းပွားမှုများကို ကိုင်တွယ်သည်။\n• ဘုံသုံးမှုများ: စပေါ်ငွေမပြန်အမ်း၊ ဆောက်လုပ်ရေးလုပ်သားညံ့ဖျင်းမှု။\n• ဖိုင်တင်ရန်: Rochester City Court, ၉၉ Exchange Blvd။ ကြေး: $၁၅-$၂၀။\n• စပေါ်ငွေ: ၁၄ ရက်အတွင်း ပြန်အမ်းရမည်။ မပြန်ပါက နှစ်ဆ တောင်းဆိုနိုင်သည်။",
    so: "MAXKAMADDA DACWAADAHA YARYAR — XEER-ILAALIYE MA BAAHNA:\n• Waxay xukuntaa khilaafaadka ilaa $10,000.\n• ISTICMAALKA CAADIGA AH: Amaanahda la siinayno, shaqada xun ee qabsoomaha.\n• SIDA LOO GUDBINAYO: Maxkamadda Magaalada Rochester, 99 Exchange Blvd. Khidmad: $15-$20.\n• AMAANAHDA: Waa in la soo celiyaa 14 maalmood gudahood. Haddaan la soo celin, waxaad ku dacweyn kartaa LABA JIBBAAR.",
    zh: "小额索赔法庭 — 不需要律师：\n• 处理最高$10,000的纠纷。\n• 常见用途：押金未退，承包商工作质量差。\n• 如何申请：罗切斯特市法院，99 Exchange Blvd。费用：$15-$20。\n• 押金：必须在14天内退还。否则可起诉双倍金额。",
    vi: "TÒA ÁN KHIẾU NẠI NHỎ TẠI NEW YORK — KHÔNG CẦN LUẬT SƯ:\n• Xử lý tranh chấp lên đến $10,000.\n• Sử dụng phổ biến: Chủ nhà không trả lại tiền đặt cọc, nhà thầu làm việc kém.\n• CÁCH NỘP ĐƠN: Tòa án Thành phố Rochester, 99 Exchange Blvd. Phí: $15-$20.\n• TIỀN ĐẶT CỌC: Chủ nhà phải trả lại trong vòng 14 ngày. Nếu không, bạn có thể kiện đòi GẤP ĐÔI số tiền.",
    ko: "뉴욕 소액 청구 법원 — 변호사 필요 없음:\n• 최대 $10,000까지의 분쟁 처리.\n• 일반적 사용: 보증금 미반환, 부실한 계약 작업.\n• 신청 방법: Rochester City Court, 99 Exchange Blvd. 수수료: $15-$20.\n• 보증금: 집주인은 14일 이내에 반환해야 합니다. 그렇지 않으면 두 배 금액을 청구할 수 있습니다.",
    tl: "SMALL CLAIMS COURT SA NEW YORK — WALANG ABOGADONG KAILANGAN:\n• Humahawak ng mga away hanggang $10,000.\n• KARANIWANG GAMIT: Hindi ibinabalik na security deposit, masamang trabaho ng contractor.\n• PAANO MAG-FILE: Rochester City Court, 99 Exchange Blvd. Bayad: $15-$20.\n• SECURITY DEPOSITS: Dapat ibalik ng nagpapaupa sa loob ng 14 araw. Kung hindi, maaari kang mag-demanda ng DOBLE ng halaga.",
    ru: "СУД МАЛЫХ ИСКОВ В НЬЮ-ЙОРКЕ — АДВОКАТ НЕ НУЖЕН:\n• Рассматривает споры до $10,000.\n• ТИПИЧНЫЕ СЛУЧАИ: Невозврат залога, плохая работа подрядчика.\n• КАК ПОДАТЬ: Rochester City Court, 99 Exchange Blvd. Пошлина: $15-$20.\n• ЗАЛОГ: Арендодатель обязан вернуть его в течение 14 дней. Если нет, вы можете подать иск на ДВОЙНУЮ сумму.",
    ht: "TRIBINAL POU TI REKLAMASYON NAN NEW YORK — PA BEZWEN AVOKA:\n• Trete diskisyon jiska $10,000.\n• ITILIZASYON KOMEN: Pwopriyetè ki pa retounen depo sekirite, kontraktè ki fè move travay.\n• KIJAN POU DEPOZE: Rochester City Court, 99 Exchange Blvd. Frè: $15-$20.\n• DEPO SEKIRITE: Pwopriyetè a dwe retounen li nan 14 jou. Si li pa fè sa, ou ka pousuiv li pou DOUB kantite a.",
    pt: "TRIBUNAL DE PEQUENAS CAUSAS EM NOVA YORK — SEM ADVOGADO:\n• Lida com disputas até $10,000.\n• USOS COMUNS: Caução não devolvida, trabalho mal feito de empreiteiro.\n• COMO ABRIR: Rochester City Court, 99 Exchange Blvd. Taxa: $15-$20.\n• CAUÇÃO: O proprietário deve devolver dentro de 14 dias. Caso contrário, você pode processar pelo DOBRO do valor.",
    fr: "TRIBUNAL DES PETITES CRÉANCES À NEW YORK — PAS BESOIN D'AVOCAT :\n• Traite les litiges jusqu'à 10 000 $.\n• UTILISATIONS COURANTES : Caution non restituée, mauvais travail d'un entrepreneur.\n• COMMENT DÉPOSER : Rochester City Court, 99 Exchange Blvd. Frais : 15-20 $.\n• CAUTIONS : Le propriétaire doit la restituer dans les 14 jours. Sinon, vous pouvez le poursuivre pour le DOUBLE du montant.",
    hi: "न्यूयॉर्क में छोटे दावों की अदालत — वकील की जरूरत नहीं:\n• $10,000 तक के विवादों को संभालती है।\n• सामान्य उपयोग: मकान मालिक ने सुरक्षा जमा नहीं लौटाई, ठेकेदार ने खराब काम किया।\n• कैसे दर्ज करें: Rochester City Court, 99 Exchange Blvd. शुल्क: $15-$20।\n• सुरक्षा जमा: मकान मालिक को 14 दिनों के भीतर लौटाना होगा। यदि नहीं, तो आप दोगुनी राशि के लिए मुकदमा कर सकते हैं।",
    ur: "نیویارک میں چھوٹے دعووں کی عدالت — وکیل کی ضرورت نہیں:\n• $10,000 تک کے تنازعات کو سنبھالتی ہے۔\n• عام استعمال: مالک مکان نے سیکیورٹی ڈپازٹ واپس نہیں کیا، ٹھیکیدار نے خراب کام کیا۔\n• کیسے درج کریں: Rochester City Court, 99 Exchange Blvd۔ فیس: $15-$20۔\n• سیکیورٹی ڈپازٹ: مالک مکان کو 14 دنوں کے اندر واپس کرنا ہوگا۔ اگر نہیں، تو آپ دوگنی رقم کے لیے مقدمہ کر سکتے ہیں۔",
    fa: "دادگاه دعاوی کوچک در نیویورک — نیاز به وکیل ندارد:\n• اختلافات تا ۱۰٬۰۰۰ دلار را رسیدگی می‌کند.\n• استفاده‌های رایج: بازپس‌ندادن ودیعه، کار بد پیمانکار.\n• چگونه شکایت کنید: Rochester City Court, 99 Exchange Blvd. هزینه: ۱۵-۲۰ دلار.\n• ودیعه: صاحبخانه باید آن را در ۱۴ روز بازگرداند. در غیر این صورت، می‌توانید برای دو برابر مبلغ شکایت کنید.",
    ps: "په نیویارک کې د کوچنیو ادعاو محکمه — وکیل ته اړتیا نشته:\n• تر ۱۰٬۰۰۰ ډالرو پورې شخړې اداره کوي.\n• عام کارونې: د کور خاوند چې د خوندیتوب امانت نه راګرځوي، د قرارداد بد کار.\n• ډوسیې جوړولو څرنګوالی: Rochester City Court, 99 Exchange Blvd. فیس: ۱۵-۲۰ ډالر.\n• د خوندیتوب امانت: د کور خاوند باید په ۱۴ ورځو کې یې راوګرځوي. که نه، تاسو د دوه‌چنده پیسو لپاره دعوه کولی شئ.",
    uk: "СУД МАЛИХ ПОЗОВІВ У НЬЮ-ЙОРКУ — АДВОКАТ НЕ ПОТРІБЕН:\n• Розглядає спори до $10,000.\n• ТИПОВІ ВИПАДКИ: Неповернення завдатку, погана робота підрядника.\n• ЯК ПОДАТИ: Rochester City Court, 99 Exchange Blvd. Збір: $15-$20.\n• ЗАВДАТОК: Орендодавець повинен повернути його протягом 14 днів. Якщо ні, ви можете подати позов на ПОДВІЙНУ суму.",
  },
  legalCrimRecord: {
    en: "CLEARING YOUR CRIMINAL RECORD IN NEW YORK:\n• NY CLEAN SLATE ACT (2024): As of November 2024, most misdemeanors are automatically sealed after 3 years and most felonies after 8 years — if no new convictions. This happened automatically.\n• SEALED vs. EXPUNGED: Sealed records are hidden from most background checks but still visible to courts and law enforcement.\n• CERTIFICATES OF RELIEF: Removes automatic bars to employment and licensing. Apply through the sentencing court.\n• MARIJUANA: Most marijuana convictions were automatically expunged under the MRTA (2021).\n• FREE HELP: RAWNY and the Judicial Process Commission help with this process for free.",
    es: "LIMPIEZA DE ANTECEDENTES EN NUEVA YORK:\n• LEY DE PIZARRA LIMPIA DE NY (2024): La mayoría de los delitos menores se sellan automáticamente después de 3 años y los delitos graves después de 8 años.\n• CERTIFICADOS DE ALIVIO: Elimina barreras automáticas al empleo.\n• MARIHUANA: La mayoría de las condenas fueron eliminadas automáticamente bajo la MRTA (2021).\n• AYUDA GRATUITA: RAWNY y la Comisión de Proceso Judicial ayudan gratis.",
    ne: "आपराधिक रेकर्ड सफा गर्ने:\n• NY Clean Slate Act (२०२४): अधिकांश दुष्कर्महरू ३ वर्षपछि र अपराधहरू ८ वर्षपछि स्वचालित रूपमा सिल हुन्छन्।\n• राहत प्रमाणपत्रहरू: रोजगार र लाइसेन्सिङमा अवरोधहरू हटाउँछ।\n• मारिजुआना: MRTA (२०२१) अन्तर्गत अधिकांश दोषहरू स्वचालित रूपमा मेटाइयो।\n• निःशुल्क सहयोग: RAWNY र Judicial Process Commission।",
    ar: "محو السجل الجنائي في نيويورك:\n• قانون Clean Slate في نيويورك (2024): معظم الجرائم البسيطة تُغلق تلقائياً بعد 3 سنوات والجرائم الجسيمة بعد 8 سنوات.\n• شهادات الإعفاء: تزيل الحواجز التلقائية أمام التوظيف.\n• الماريجوانا: معظم الإدانات مُحيت تلقائياً بموجب MRTA (2021).\n• مساعدة مجانية: RAWNY وعمولة العملية القضائية.",
    sw: "KUFUTA REKODI YA UHALIFU NEW YORK:\n• NY Clean Slate Act (2024): Makosa mengi madogo yanafungwa kiotomatiki baada ya miaka 3, makosa makubwa baada ya miaka 8.\n• Vyeti vya Msaada: Vinaondoa vizuizi vya ajira.\n• Bangi: Hukumu nyingi zilifutwa kiotomatiki chini ya MRTA (2021).\n• MSAADA WA BURE: RAWNY na Tume ya Mchakato wa Mahakama.",
    my: "ရာဇဝတ်မှတ်တမ်းဖျက်ခြင်း:\n• NY Clean Slate Act (၂၀၂၄): ပြစ်မှုအများစုသည် ၃ နှစ်နောက် အလိုလိုပိတ်ဆို့ပြီး ၈ နှစ်နောက် ပြစ်ဒဏ်ကြီးများဖြစ်သည်။\n• သက်သာချောင်ချိမှုလက်မှတ်များ: အလုပ်အကိုင်ဆိုင်ရာ အတားအဆီးများဖယ်ရှားပေးသည်။\n• မာရိဖောင်း: MRTA (၂၀၂၁) အောက်တွင် အများစု အလိုလိုဖျက်ပြီး။\n• အခမဲ့အကူအညီ: RAWNY နှင့် Judicial Process Commission။",
    so: "NADIIFINTA DIIWAANKAAGA DAMBIYADA NEW YORK:\n• NY Clean Slate Act (2024): Dambiyada badankood waxay si toos ah ugu xidhmaan 3 sano ka dib, 8 sano dambiyada culus.\n• Shahaadooyinka Gargaarka: Waxay ka saartaa caqabadaha shaqada.\n• Marixuaana: Xukumaadii badankood waxaa si toos ah lagu bedelay MRTA (2021) hoosteeda.\n• CAAWIMO BILAASH AH: RAWNY iyo Gudiga Habka Garsoorka.",
    zh: "清除纽约犯罪记录：\n• 纽约清白法案（2024）：大多数轻罪在3年后自动封存，重罪在8年后封存。\n• 救济证书：消除就业和执照方面的障碍。\n• 大麻：根据MRTA（2021），大多数定罪已自动清除。\n• 免费帮助：RAWNY和司法程序委员会免费提供帮助。",
    vi: "XÓA HỒ SƠ TIỀN ÁN TẠI NEW YORK:\n• ĐẠO LUẬT CLEAN SLATE NY (2024): Hầu hết các tội nhẹ được tự động niêm phong sau 3 năm và trọng tội sau 8 năm — nếu không có kết tội mới.\n• CHỨNG CHỈ MIỄN TRỪ: Loại bỏ các rào cản đối với việc làm và cấp phép.\n• CẦN SA: Hầu hết các kết tội liên quan đến cần sa đã được tự động xóa theo MRTA (2021).\n• TRỢ GIÚP MIỄN PHÍ: RAWNY và Judicial Process Commission giúp đỡ miễn phí.",
    ko: "뉴욕에서 범죄 기록 삭제:\n• NY 클린 슬레이트 법(2024): 대부분의 경범죄는 3년 후, 중범죄는 8년 후 자동 봉인됩니다 — 새로운 유죄 판결이 없다면.\n• 구제 증명서: 고용 및 면허에 대한 자동 장벽을 제거합니다.\n• 마리화나: 대부분의 마리화나 유죄 판결은 MRTA(2021)에 따라 자동으로 말소되었습니다.\n• 무료 도움: RAWNY와 사법 절차 위원회가 무료로 도와줍니다.",
    tl: "PAGLILINIS NG IYONG CRIMINAL RECORD SA NEW YORK:\n• NY CLEAN SLATE ACT (2024): Karamihan sa mga maliliit na krimen ay awtomatikong sinasarado pagkatapos ng 3 taon at malalaking krimen pagkatapos ng 8 taon — kung walang bagong paratang.\n• CERTIFICATES OF RELIEF: Inaalis ang mga awtomatikong harang sa empleyo at lisensya.\n• MARIJUANA: Karamihan sa mga conviction ng marijuana ay awtomatikong nawala sa ilalim ng MRTA (2021).\n• LIBRENG TULONG: Ang RAWNY at Judicial Process Commission ay tumutulong nang libre.",
    ru: "ОЧИЩЕНИЕ ВАШЕЙ СУДИМОСТИ В НЬЮ-ЙОРКЕ:\n• ЗАКОН CLEAN SLATE НЬЮ-ЙОРКА (2024): Большинство мисдиминоров автоматически опечатываются через 3 года, а фелонии — через 8 лет, если нет новых обвинений.\n• СЕРТИФИКАТЫ ОБЛЕГЧЕНИЯ: Снимают автоматические барьеры для трудоустройства и лицензирования.\n• МАРИХУАНА: Большинство приговоров по марихуане были автоматически аннулированы согласно MRTA (2021).\n• БЕСПЛАТНАЯ ПОМОЩЬ: RAWNY и Judicial Process Commission помогают бесплатно.",
    ht: "NETWAYE DOSYE KRIMINÈL OU NAN NEW YORK:\n• LWA CLEAN SLATE NY (2024): Pifò deli yo otomatikman fèmen apre 3 lane epi krim grav apre 8 lane — si pa gen okenn nouvo kondanasyon.\n• SÈTIFIKA SOULAJMAN: Retire baryè otomatik pou anplwa ak lisans.\n• MARIJUANA: Pifò kondanasyon marijuana yo te otomatikman efase dapre MRTA (2021).\n• ÈD GRATIS: RAWNY ak Judicial Process Commission ede gratis.",
    pt: "LIMPANDO SEUS ANTECEDENTES CRIMINAIS EM NOVA YORK:\n• LEI CLEAN SLATE DE NY (2024): A maioria dos delitos menores são automaticamente selados após 3 anos e crimes graves após 8 anos — se não houver novas condenações.\n• CERTIFICADOS DE ALÍVIO: Removem barreiras automáticas ao emprego e licenciamento.\n• MACONHA: A maioria das condenações por maconha foram automaticamente expungidas sob a MRTA (2021).\n• AJUDA GRATUITA: RAWNY e a Judicial Process Commission ajudam gratuitamente.",
    fr: "EFFACER VOTRE CASIER JUDICIAIRE À NEW YORK :\n• LOI CLEAN SLATE DE NY (2024) : La plupart des délits sont automatiquement scellés après 3 ans et les crimes graves après 8 ans — en l'absence de nouvelles condamnations.\n• CERTIFICATS DE SOULAGEMENT : Éliminent les barrières automatiques à l'emploi et aux licences.\n• MARIJUANA : La plupart des condamnations pour marijuana ont été automatiquement effacées en vertu du MRTA (2021).\n• AIDE GRATUITE : RAWNY et la Judicial Process Commission aident gratuitement.",
    hi: "न्यूयॉर्क में अपना आपराधिक रिकॉर्ड साफ करना:\n• NY क्लीन स्लेट एक्ट (2024): अधिकांश छोटे अपराध 3 साल बाद और गंभीर अपराध 8 साल बाद स्वचालित रूप से सील हो जाते हैं — यदि कोई नई दोषसिद्धि नहीं है।\n• राहत प्रमाणपत्र: रोजगार और लाइसेंसिंग के लिए स्वचालित बाधाओं को हटाते हैं।\n• मारिजुआना: अधिकांश मारिजुआना दोषसिद्धियाँ MRTA (2021) के तहत स्वचालित रूप से समाप्त कर दी गईं।\n• मुफ्त सहायता: RAWNY और न्यायिक प्रक्रिया आयोग मुफ्त में मदद करते हैं।",
    ur: "نیویارک میں اپنا مجرمانہ ریکارڈ صاف کرنا:\n• NY کلین سلیٹ ایکٹ (2024): زیادہ تر چھوٹے جرائم 3 سال بعد اور بڑے جرائم 8 سال بعد خود بخود بند ہو جاتے ہیں — اگر کوئی نئی سزا نہ ہو۔\n• ریلیف سرٹیفکیٹ: ملازمت اور لائسنسنگ کے لیے خودکار رکاوٹوں کو ہٹاتے ہیں۔\n• چرس: زیادہ تر چرس کی سزاؤں کو MRTA (2021) کے تحت خود بخود ختم کر دیا گیا۔\n• مفت مدد: RAWNY اور عدالتی عمل کمیشن مفت میں مدد کرتے ہیں۔",
    fa: "پاک کردن سابقه کیفری شما در نیویورک:\n• قانون Clean Slate نیویورک (۲۰۲۴): اکثر جرایم کوچک پس از ۳ سال و جرایم بزرگ پس از ۸ سال به طور خودکار مهر و موم می‌شوند — اگر محکومیت جدیدی وجود نداشته باشد.\n• گواهی‌نامه‌های تخفیف: موانع خودکار اشتغال و صدور مجوز را برطرف می‌کنند.\n• ماری‌جوانا: اکثر محکومیت‌های ماری‌جوانا تحت MRTA (۲۰۲۱) به طور خودکار از بین رفتند.\n• کمک رایگان: RAWNY و کمیسیون فرآیند قضایی به صورت رایگان کمک می‌کنند.",
    ps: "په نیویارک کې د خپل جرمي ریکارډ پاکول:\n• د NY Clean Slate قانون (۲۰۲۴): ډېری کوچني جرمونه له ۳ کلونو وروسته او لوی جرمونه له ۸ کلونو وروسته په اتومات ډول مهر کیږي — که نوې محکومیت نه وي.\n• د اسانتیا تصدیقنامې: د دندې او جواز لپاره اتومات خنډونه له منځه وړي.\n• چرس: د چرس ډېری محکومیتونه د MRTA (۲۰۲۱) لاندې په اتومات ډول له منځه تللي.\n• وړیا مرسته: RAWNY او د قضایي پروسې کمیسیون په وړیا توګه مرسته کوي.",
    uk: "ОЧИЩЕННЯ ВАШОЇ СУДИМОСТІ У НЬЮ-ЙОРКУ:\n• ЗАКОН CLEAN SLATE НЬЮ-ЙОРКА (2024): Більшість дрібних правопорушень автоматично закриваються через 3 роки, а тяжкі злочини — через 8 років, якщо немає нових засуджень.\n• СЕРТИФІКАТИ ПОЛЕГШЕННЯ: Усувають автоматичні бар'єри для працевлаштування та ліцензування.\n• МАРИХУАНА: Більшість засуджень за марихуану були автоматично анульовані відповідно до MRTA (2021).\n• БЕЗКОШТОВНА ДОПОМОГА: RAWNY та Judicial Process Commission допомагають безкоштовно.",
  },
};

// Haversine distance in miles
function distanceMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// ── CRISIS CATEGORIES (show crisis intercept) ──
const CRISIS_CATS = new Set(["crisis","domesticSvc","mental"]);

// ════════════════════════════════════
// COMPONENTS
// ════════════════════════════════════

const QuickExit = ({ lang }) => {
  const isRTL = lang === "ar";
  return (
    <a
      href="https://www.weather.com"
      onClick={(e) => { e.preventDefault(); window.location.replace("https://www.weather.com"); }}
      style={{
        position: "fixed", top: "max(12px, env(safe-area-inset-top, 12px))", zIndex: 9999,
        ...(isRTL ? { left: 12 } : { right: 12 }),
        background: "#d32f2f", color: "#fff", border: "none",
        padding: "8px 18px", borderRadius: 20, fontWeight: 700,
        fontSize: 14, textDecoration: "none", cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      ✕ {t(lang, "quickExit")}
    </a>
  );
};

const PrivacyBadge = ({ lang, sensitive }) => (
  <div style={{
    background: sensitive ? "#e8f5e9" : "#f5f5f5",
    border: sensitive ? "1px solid #a5d6a7" : "1px solid #e0e0e0",
    borderRadius: 10, padding: "10px 14px", margin: "12px 0",
    fontSize: 13, color: "#333", textAlign: "center",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
  }}>
    <span style={{ fontSize: 16 }}>🔒</span>
    {sensitive ? t(lang, "privacySensitive") : t(lang, "privacy")}
  </div>
  );

const CrisisIntercept = ({ lang, category }) => {
  if (!CRISIS_CATS.has(category)) return null;
  const crisisPrograms = PROGRAMS.filter(
    (p) => p.c === "crisis" || (p.c === "mental" && (p.id === "988" || p.id === "crisistext"))
  );
  return (
    <div style={{
      background: "#fff3e0", border: "2px solid #ff9800", borderRadius: 12,
      padding: 16, margin: "12px 0",
    }}>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#e65100" }}>
        {t(lang, "crisisNotice")}
      </div>
      {crisisPrograms.slice(0, 3).map((p) => (
        <div key={p.id} style={{ marginBottom: 8 }}>
          <strong>{p.n}</strong>
          {p.ph && (
            <a href={telHref(p.ph)} style={{
              display: "inline-block", marginLeft: 8, background: "#e65100",
              color: "#fff", padding: "3px 10px", borderRadius: 6, fontSize: 13,
              textDecoration: "none", fontWeight: 600,
            }}>
              {t(lang, "callNow")} {p.ph}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

const DVSafetyNotice = ({ lang, category }) => {
  if (!DV_CATS.has(category)) return null;
  return (
    <div style={{
      background: "#fce4ec", border: "1px solid #ef9a9a", borderRadius: 10,
      padding: 12, margin: "8px 0", fontSize: 13, color: "#880e4f",
    }}>
      🛡️ {t(lang, "dvSafety")}
    </div>
  );
};

const InterpreterNotice = ({ lang }) => {
  if (lang === "en") return null;
  return (
    <div style={{
      background: "#e8eaf6", border: "1px solid #9fa8da", borderRadius: 10,
      padding: 12, margin: "8px 0", fontSize: 13, color: "#283593",
      display: "flex", alignItems: "center", gap: 8,
    }}>
      <span style={{ fontSize: 18 }}>🗣️</span>
      <span>{t(lang, "interpreter")}</span>
    </div>
  );
};

const ProgramCard = ({ program: p, lang, expanded, onToggle }) => {
  const desc = (p.tr && p.tr[lang]) || p.d;
  const catInfo = CATEGORIES[p.c];
  return (
    <div style={{
      background: "#fff", borderRadius: 12, padding: 16,
      marginBottom: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      border: "1px solid #e8e8e8", transition: "box-shadow 0.2s",
    }}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={onToggle}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
        style={{ cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 10 }}
      >
        <span style={{ fontSize: 22, flexShrink: 0 }}>{catInfo?.icon || "📌"}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a", lineHeight: 1.3 }}>{p.n}</div>
          <div style={{ fontSize: 13, color: "#555", marginTop: 3, lineHeight: 1.45 }}>{desc}</div>
        </div>
        <span style={{ fontSize: 12, color: "#767676", flexShrink: 0, marginTop: 2 }}>
          {expanded ? "▲" : "▼"}
        </span>
      </div>

      {expanded && (
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #eee" }}>
          {p.ph && (
            <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#636363" }}>📞</span>
              <a href={telHref(p.ph)} onClick={() => trackClick(p.id + "-call")}
                 style={{ color: "#1565c0", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                {p.ph}
              </a>
            </div>
          )}
          {p.ad && (
            <div style={{ marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#636363" }}>📍</span>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.ad)}`}
                 onClick={(e) => { mapsHandoff(e, p.ad); trackClick(p.id + "-directions"); }}
                 target="_blank" rel="noopener noreferrer"
                 style={{ color: "#1565c0", fontSize: 13, textDecoration: "none" }}>
                {p.ad}
              </a>
            </div>
          )}
          {p.hr && (
            <div style={{ marginBottom: 8, fontSize: 13, color: "#555", display: "flex", gap: 6 }}>
              <span>🕐</span> {p.hr}
            </div>
          )}
          {p.doc && p.doc !== "None" && (
            <div style={{ marginBottom: 8, fontSize: 13, color: "#636363", display: "flex", gap: 6 }}>
              <span>📋</span> <strong>{t(lang, "bring")}:</strong>&nbsp;{translateDoc(p.doc, lang)}
            </div>
          )}
          {p.inc && (
            <div style={{ marginBottom: 8, fontSize: 13, color: "#555", display: "flex", gap: 6 }}>
              <span>💰</span> {t(lang, "income")}: {p.inc}% {t(lang, "fpl")}
            </div>
          )}
          {p.nt && (
            <div style={{
              marginBottom: 8, fontSize: 13, background: "#f3f8ff",
              padding: "6px 10px", borderRadius: 6, color: "#37474f",
            }}>
              ℹ️ {p.nt}
            </div>
          )}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={() => trackClick(p.id)} style={{
                background: "#e3f2fd", color: "#1565c0", padding: "6px 14px",
                borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}>
                {t(lang, "website")} ↗
              </a>
            )}
            {p.aurl && (
              <a href={p.aurl} target="_blank" rel="noopener noreferrer" onClick={() => trackClick(p.id + "-apply")} style={{
                background: "#e8f5e9", color: "#2e7d32", padding: "6px 14px",
                borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}>
                {t(lang, "apply")} ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CommunitySection = ({ lang, category }) => {
  const groups = category ? COMMUNITY.filter(g => !g.cats || g.cats.includes(category)) : COMMUNITY;
  if (groups.length === 0) return null;
  return (
  <div style={{ marginTop: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4, color: "#2e7d32" }}>
      🤝 {t(lang, "communityTitle")}
    </h2>
    <p style={{ fontSize: 13, color: "#636363", marginBottom: 14, marginTop: 0 }}>
      {t(lang, "communityDesc")}
    </p>
    {groups.map((g, i) => (
      <div key={i} style={{
        background: "#f1f8e9", borderRadius: 10, padding: 12, marginBottom: 8,
        border: "1px solid #c5e1a5",
      }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{g.n}</div>
        <div style={{ fontSize: 13, color: "#444", marginTop: 2 }}>{g.d}</div>
        {g.loc && <div style={{ fontSize: 12, color: "#636363", marginTop: 3 }}>📍 {g.loc}</div>}
        {g.url && (
          <a href={g.url} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("community-" + (g.n || "").replace(/\s+/g, "-").toLowerCase())}
             style={{ fontSize: 12, color: "#2e7d32", textDecoration: "none", fontWeight: 600 }}>
            {t(lang, "website")} ↗
          </a>
        )}
      </div>
    ))}
  </div>
  );
};

// ════════════════════════════════════
// SHARED STYLES
// ════════════════════════════════════
const btnStyle = (accent) => ({
  background: accent || "#fff",
  color: accent ? "#fff" : "#333",
  border: accent ? "none" : "2px solid #e0e0e0",
  borderRadius: 12, padding: "14px 18px",
  fontSize: 15, fontWeight: 600,
  cursor: "pointer", textAlign: "left",
  display: "flex", alignItems: "center", gap: 10,
  width: "100%", transition: "all 0.15s",
  lineHeight: 1.3,
});

// ════════════════════════════════════
// MAIN APP
// ════════════════════════════════════
const STEPS = { HOME: 0, WHAT_TAB: 1, WHAT_CAT: 2, WHO: 3, HOW: 4, RESULTS: 5, QUESTION: 6 };

function RocHelpInner({ onExit, city = "your area", jurisdictions = [] }) {
  const [lang, setLang] = useState("en");
  const [step, setStep] = useState(STEPS.HOME);
  const [tab, setTab] = useState(null);
  const [category, setCategory] = useState(null);
  const [nearMe, setNearMe] = useState(false);
  const [userCoords, setUserCoords] = useState(null);
  const [geoError, setGeoError] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [who, setWho] = useState(null);
  const [how, setHow] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showDVExit, setShowDVExit] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestionKey, setCurrentQuestionKey] = useState(null);
  const [userTown, setUserTown] = useState(null);  // null = no town filter; auto-set from jurisdiction stack

  // Auto-set userTown from jurisdiction stack (most specific match first)
  useEffect(() => {
    if (jurisdictions.length > 0 && !userTown) {
      const slug = jurisdictions[0].name.toLowerCase().replace(/\s+/g, '-');
      setUserTown(slug);
    }
  }, [jurisdictions]);
  const [enteredViaDeepLink, setEnteredViaDeepLink] = useState(false);  // true when the session was entered via a hash deep-link (e.g. /help#c=pets) — Back button uses this to call onExit() from RESULTS instead of walking the state machine backward
  const containerRef = useRef(null);


  // ── FIX 14: Deep linking via URL hash ──
  React.useEffect(() => {
    try {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const params = new URLSearchParams(hash);
      const c = params.get("c");
      if (c && CATEGORIES[c]) {
        setCategory(c);
        setEnteredViaDeepLink(true);
        if (DV_CATS.has(c)) setShowDVExit(true);
        if (isDirectToResults(c)) {
          setStep(STEPS.RESULTS);
        } else {
          const firstQ = getFirstQuestion(c);
          if (firstQ) {
            setCurrentQuestionKey(firstQ);
            setStep(STEPS.QUESTION);
          } else {
            setStep(STEPS.WHO);
          }
        }
      }
      const l = params.get("l");
      if (l && LANGS.some((lg) => lg.code === l)) setLang(l);
    } catch (e) { /* ignore malformed hashes */ }
  }, []);

  // Update hash when results are shown
  React.useEffect(() => {
    // Hash-write on RESULTS removed in migration 18 — it was polluting
    // the URL on normal-flow navigation and causing remounts to appear
    // as deep-link sessions. Deep-links still work via FIX 14 useEffect.
    if (step === STEPS.HOME) {
      try { if (window.location.hash) window.history.replaceState(null, "", " "); } catch (e) {}
    }
  }, [step, category, lang]);

  const scrollTop = () => {
    requestAnimationFrame(() => {
      if (containerRef.current) containerRef.current.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  };

  const goTo = (s) => { setStep(s); setExpandedCard(null); scrollTop(); };

  const selectTab = (key) => { setTab(key); goTo(STEPS.WHAT_CAT); };
  const selectCategory = (key) => {
    setCategory(key);
    if (DV_CATS.has(key)) setShowDVExit(true);
    setAnswers({});
    setCurrentQuestionKey(null);
    if (isDirectToResults(key)) {
      goTo(STEPS.RESULTS);
    } else {
      const firstQ = getFirstQuestion(key);
      if (firstQ) {
        setCurrentQuestionKey(firstQ);
        goTo(STEPS.QUESTION);
      } else {
        goTo(STEPS.WHO);
      }
    }
  };
  const selectWho = (val) => { setWho(val); goTo(STEPS.HOW); };
  const selectHow = (val) => { setHow(val); goTo(STEPS.RESULTS); };

  const answerQuestion = (questionKey, value) => {
    const newAnswers = { ...answers, [questionKey]: value };
    setAnswers(newAnswers);
    const question = QUESTIONS[questionKey];
    const option = question && question.options && question.options.find(o => o.key === value);
    const next = option && option.next;
    if (next === "how") goTo(STEPS.HOW);
    else if (next === "who") goTo(STEPS.WHO);
    else if (next === "results" || next === null || next === undefined) goTo(STEPS.RESULTS);
    else {
      setCurrentQuestionKey(next);
      goTo(STEPS.QUESTION);
    }
  };

  const reset = () => {
    setStep(STEPS.HOME); setTab(null); setCategory(null);
    setEnteredViaDeepLink(false);
    setNearMe(false); setUserCoords(null); setGeoError(false);
    setWho(null); setHow(null); setExpandedCard(null);
    setAnswers({}); setCurrentQuestionKey(null);
    // NOTE: showDVExit intentionally NOT cleared — once activated, stays visible for safety
    scrollTop();
  };

  // ── FILTERING ──
  const filteredPrograms = useMemo(() => {
    if (!category) return [];
    let progs = getInitialPrograms(PROGRAMS, category);
    progs = applyAnswerFilters(progs, answers);
    progs = applyTownFilter(progs, userTown);

    // WHO filter (targeting tags)
    const whoTags = {
      self: ["any", "hh"],
      family: ["any", "hh"],
      child: ["any", "kids", "u5", "hh"],
      senior: ["any", "sen", "hh"],
      veteran: ["any", "vet", "hh"],
      pregnant: ["any", "preg", "u5", "hh"],
      disability: ["any", "dis", "hh"],
      anyone: null, // no filter
    };
    const tags = who ? whoTags[who] : null;
    if (tags) {
      progs = progs.filter(
        (p) => !p.tg || p.tg.length === 0 || p.tg.some((t) => tags.includes(t))
      );
    }

    // HOW filter (income)
    // p.inc = max FPL% to qualify (e.g. SNAP=130 means must be ≤130% FPL)
    // We estimate the user's likely FPL range and hide programs they
    // almost certainly exceed the cutoff for. We err on SHOWING too much —
    // better to show something they might not qualify for than hide help they need.
    const estimatedMinFPL = { ok: 200, tight: 100, crisis: 0, none: 0 };
    if (how && estimatedMinFPL[how] > 0) {
      const userMin = estimatedMinFPL[how];
      progs = progs.filter((p) => !p.inc || p.inc >= userMin);
    }
    // "none" and "crisis" = show everything (they qualify for all income-limited programs)

    // NEAR ME: when user enables location, sort by distance from user.
    // Programs with addressSuppressed:true (crisis nurseries, DV shelters)
    // sort to the END so they remain visible but never lead the list with
    // a fake distance — those resources are reached by phone, not by directions.
    if (nearMe && userCoords) {
      const [userLat, userLng] = userCoords;
      progs = progs
        .map((p) => {
          const usable = !p.addressSuppressed
            && typeof p.lat === "number"
            && typeof p.lng === "number";
          return {
            prog: p,
            dist: usable ? distanceMiles(userLat, userLng, p.lat, p.lng) : Infinity,
          };
        })
        .sort((a, b) => a.dist - b.dist)
        .map((x) => x.prog);
    }

    return progs;
  }, [category, who, how, nearMe, userCoords, answers, userTown]);

  // Per-entry safety override — see SAFETY_SENSITIVE doc block above DV_CATS.
  // If ANY visible program is flagged safetySensitive, escalate to Quick Exit.
  const hasSensitiveProgram = useMemo(
    () => filteredPrograms.some(p => p.safetySensitive),
    [filteredPrograms]
  );

  useEffect(() => {
    if (hasSensitiveProgram) {
      setShowDVExit(true);
    }
  }, [hasSensitiveProgram]);

  // ── STEP INDICATOR ──
  const stepLabels = [
    t(lang, "stepWhat"),
    t(lang, "stepWho"),
    t(lang, "stepHow"),
    t(lang, "stepResults"),
  ];
  const currentStepIndex =
    step === STEPS.WHAT_TAB || step === STEPS.WHAT_CAT ? 0
    : step === STEPS.WHO || step === STEPS.QUESTION ? 1
    : step === STEPS.HOW ? 2
    : step === STEPS.RESULTS ? 3
    : -1;

  return (
    <div ref={containerRef} dir={lang === "ar" ? "rtl" : "ltr"} style={{
      fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, -apple-system, sans-serif",
      maxWidth: 480, margin: "0 auto", minHeight: "100vh",
      background: "#fafaf7", color: "#1a1a1a", position: "relative",
      overflowY: "auto",
    }}>
      {/* Touch feedback for mobile — inline styles can't do :active */}
      <style>{`
        .roc-btn:active { border-color: #2e7d32 !important; background: #f1f8e9 !important; }
        @media (hover: hover) {
          .roc-btn:hover { border-color: #2e7d32 !important; background: #f1f8e9 !important; }
        }
        .roc-btn:focus-visible { outline: 2px solid #2e7d32; outline-offset: 2px; }
        a:focus-visible, button:focus-visible, select:focus-visible { outline: 2px solid #2e7d32; outline-offset: 2px; }
        @media print {
          .roc-btn { break-inside: avoid; page-break-inside: avoid; }
          a[href]::after { content: " (" attr(href) ")"; font-size: 10px; color: #636363; }
          * { box-shadow: none !important; }
          body { background: #fff !important; }
        }
      `}</style>
      {showDVExit && <QuickExit lang={lang} />}

      {/* HEADER */}
      <div style={{
        background: "#fafaf7", borderBottom: "1px solid #e8e4dc",
        color: "#1a1a1a", padding: "14px 20px", position: "relative",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: onExit ? "pointer" : "default" }} onClick={() => onExit && onExit()}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2e7d32", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: -1, flexShrink: 0 }}>HF</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.5, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
                {t(lang, "title")}
              </div>
              <div style={{ fontSize: 11, color: "#767676", marginTop: 1 }}>
                <select
                  value={userTown || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => { e.stopPropagation(); setUserTown(e.target.value || null); }}
                  style={{
                    background: "none", border: "none", color: "#2e7d32",
                    fontSize: 11, fontWeight: 600, cursor: "pointer",
                    fontFamily: "inherit", padding: 0, marginLeft: 2,
                    appearance: "auto",
                  }}
                  aria-label="Select your town"
                >
                  <option value="">{userTown ? "All Monroe County" : (city && city !== "your area" ? city : "Select your town")}</option>
                  {MONROE_TOWNS.map(t => (
                    <option key={t} value={t}>{TOWN_LABELS[t] || t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label={t(lang, "langLabel")}
            style={{
              background: "#fff", color: "#1a1a1a", border: "1px solid #e8e4dc",
              borderRadius: 20, padding: "5px 12px", fontSize: 13, cursor: "pointer",
            }}
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code} style={{ color: "#333" }}>{l.label}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 8, textAlign: "center" }}>
          <ShareButton
            title="HelpFinder"
            text={t(lang, "shareText")}
            url="https://helpfinder.help"
            label={t(lang, "shareLabel")}
            ariaLabel={t(lang, "shareAriaLabel")}
          />
        </div>

        {/* Step indicator */}
        {currentStepIndex >= 0 && (
          <div role="progressbar" aria-valuenow={currentStepIndex + 1} aria-valuemin={1} aria-valuemax={4} aria-label={stepLabels[currentStepIndex]} style={{ display: "flex", gap: 4, marginTop: 12 }}>
            {stepLabels.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1, height: 3, borderRadius: 2,
                  background: i <= currentStepIndex ? "#2e7d32" : "#e0e0e0",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* NAV */}
      {step >= STEPS.HOME && (
        <div style={{ display: "flex", gap: 8, padding: "10px 20px 0" }}>
          <button onClick={() => { if (enteredViaDeepLink || step === STEPS.HOME) { if (onExit) onExit(); } else if (step === STEPS.WHAT_CAT) { goTo(STEPS.HOME); } else { goTo(Math.max(0, step - 1)); } }} aria-label={t(lang, "back")} style={{
            background: "none", border: "1px solid #e8e4dc", borderRadius: 20,
            padding: "6px 14px", fontSize: 13, cursor: "pointer", color: "#555",
          }}>
            ← {t(lang, "back")}
          </button>
          <button onClick={reset} style={{
            background: "none", border: "1px solid #e8e4dc", borderRadius: 20,
            padding: "6px 14px", fontSize: 13, cursor: "pointer", color: "#555",
          }}>
            {t(lang, "startOver")}
          </button>
        </div>
      )}

      {/* CONTENT */}
      <div style={{ padding: "16px 20px 80px" }}>

        {/* ── HOME ── */}
        {step === STEPS.HOME && (
          <div style={{ paddingTop: 12 }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#333", marginBottom: 6, lineHeight: 1.3 }}>
                {PROGRAMS.filter(p => !p.town || !userTown || p.town === userTown || (p.serves && p.serves.includes(userTown))).length} free programs{userTown ? ` in ${TOWN_LABELS[userTown] || city}` : (city && city !== "your area" ? ` in ${city}` : "")}
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.5 }}>
                {t(lang, "subtitle")}
              </p>
            </div>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#333", marginBottom: 10 }}>
              {t(lang, "stepWhat")}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              {Object.entries(TABS).map(([key, tabData]) => {
                const count = tabData.needs.reduce((sum, catKey) => sum + PROGRAMS.filter(p => p.c === catKey).length, 0);
                return (
                  <button
                    key={key}
                    onClick={() => selectTab(key)}
                    className="roc-btn" style={{
                      ...btnStyle(),
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 24 }}>{tabData.icon}</span>
                      <span>{tabData[lang] || tabData.en}</span>
                    </span>
                    <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>
                      {count} →
                    </span>
                  </button>
                );
              })}
            </div>

            <p style={{ textAlign: "center", fontSize: 13, color: "#888", marginBottom: 20 }}>
              Every program has a phone number, hours, and address.
            </p>

            <PrivacyBadge lang={lang} />

            {/* Featured */}
            <div style={{ textAlign: "start", marginTop: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#333", marginBottom: 10 }}>
                ⭐ {t(lang, "featuredTitle")}
              </h3>
              {PROGRAMS.filter((p) => FEATURED_IDS.includes(p.id)).map((p) => (
                <div key={p.id} style={{
                  background: "#fff", borderRadius: 10, padding: 12,
                  marginBottom: 8, border: "1px solid #e8e8e8",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{ fontSize: 20 }}>{CATEGORIES[p.c]?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{p.n}</div>
                    <div style={{ fontSize: 12, color: "#636363" }}>
                      {(p.tr && p.tr[lang]) || p.d}
                    </div>
                  </div>
                  {p.ph ? (
                    <a href={telHref(p.ph)} onClick={() => trackClick(p.id + "-call")} style={{
                      background: "#2e7d32", color: "#fff", padding: "6px 12px",
                      borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}>
                      {p.ph}
                    </a>
                  ) : p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={() => trackClick(p.id)} style={{
                      background: "#e3f2fd", color: "#1565c0", padding: "6px 12px",
                      borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}>
                      {t(lang, "website")} ↗
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            {/* 211 banner */}
            <div style={{
              background: "#e3f2fd", borderRadius: 12, padding: 14,
              marginTop: 20, textAlign: "center",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1565c0" }}>
                {t(lang, "call211")}
              </div>
              <a href="tel:211" style={{
                display: "inline-block", marginTop: 8, background: "#1565c0",
                color: "#fff", padding: "8px 24px", borderRadius: 8,
                fontSize: 16, fontWeight: 700, textDecoration: "none",
              }}>
                📞 211
              </a>
            </div>
          </div>
        )}

        {/* ── WHAT: TAB SELECTION ── */}
        {step === STEPS.WHAT_TAB && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
              {t(lang, "stepWhat")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {Object.entries(TABS).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => selectTab(key)}
                  className="roc-btn" style={btnStyle()}
                >
                  <span style={{ fontSize: 24 }}>{tab.icon}</span>
                  <span>{tab[lang] || tab.en}</span>
                </button>
              ))}
            </div>
            <PrivacyBadge lang={lang} />
          </div>
        )}

        {/* ── WHAT: CATEGORY SELECTION ── */}
        {step === STEPS.WHAT_CAT && tab && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
              {t(lang, "stepWhat")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TABS[tab].needs.filter(catKey => !isHiddenCategory(catKey)).map((catKey) => {
                const cat = CATEGORIES[catKey];
                if (!cat) return null;
                return (
                  <button
                    key={catKey}
                    onClick={() => selectCategory(catKey)}
                    className="roc-btn" style={btnStyle()}
                  >
                    <span style={{ fontSize: 22 }}>{cat.icon}</span>
                    <span>{cat[lang] || cat.en}</span>
                  </button>
                );
              })}
            </div>
            {TABS[tab].needs.some((c) => SENSITIVE.has(c)) && (
              <PrivacyBadge lang={lang} sensitive />
            )}
          </div>
        )}

        {/* ── QUESTION (registry-driven) ── */}
        {step === STEPS.QUESTION && currentQuestionKey && QUESTIONS[currentQuestionKey] && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
              {QUESTIONS[currentQuestionKey].prompt}
            </h2>
            {SENSITIVE.has(category) && <PrivacyBadge lang={lang} sensitive />}
            <DVSafetyNotice lang={lang} category={category} />
            <CrisisIntercept lang={lang} category={category} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              {QUESTIONS[currentQuestionKey].options.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => answerQuestion(currentQuestionKey, opt.key)}
                  className="roc-btn"
                  style={btnStyle()}
                >
                  {opt.icon && <span style={{ fontSize: 22, marginRight: 4 }}>{opt.icon}</span>}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── WHO ── */}
        {step === STEPS.WHO && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
              {t(lang, "stepWho")}
            </h2>

            {SENSITIVE.has(category) && <PrivacyBadge lang={lang} sensitive />}
            <DVSafetyNotice lang={lang} category={category} />
            <CrisisIntercept lang={lang} category={category} />

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              {[
                { key: "self", label: t(lang, "whoSelf"), icon: "👤" },
                { key: "family", label: t(lang, "whoFamily"), icon: "👨‍👩‍👧" },
                { key: "child", label: t(lang, "whoChild"), icon: "👶" },
                { key: "senior", label: t(lang, "whoSenior"), icon: "🧓" },
                { key: "veteran", label: t(lang, "whoVeteran"), icon: "🎖️" },
                { key: "pregnant", label: t(lang, "whoPregnant"), icon: "🤰" },
                { key: "disability", label: t(lang, "whoDisability"), icon: "♿" },
                { key: "anyone", label: t(lang, "whoAnyone"), icon: "🙂" },
              ].map((opt) => (
                <button key={opt.key} onClick={() => selectWho(opt.key)} className="roc-btn" style={btnStyle()}
                >
                  <span style={{ fontSize: 20 }}>{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── HOW ── */}
        {step === STEPS.HOW && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
              {t(lang, "stepHow")}
            </h2>
            {SENSITIVE.has(category) && <PrivacyBadge lang={lang} sensitive />}

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              {[
                { key: "ok", label: t(lang, "howOk"), icon: "👍" },
                { key: "tight", label: t(lang, "howTight"), icon: "🤞" },
                { key: "crisis", label: t(lang, "howCrisis"), icon: "🫶" },
                { key: "none", label: t(lang, "howNone"), icon: "🌱" },
              ].map((opt) => (
                <button key={opt.key} onClick={() => selectHow(opt.key)} className="roc-btn" style={btnStyle()}
                >
                  <span style={{ fontSize: 20 }}>{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── RESULTS ── */}
        {step === STEPS.RESULTS && (
          <div>
            {getUrgencyLevel(answers) === 'critical' && (
              <div style={{
                background: "#ffebee", border: "2px solid #c62828",
                borderRadius: 12, padding: 14, marginBottom: 16,
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#c62828", marginBottom: 4 }}>
                  🚨 This is urgent — call today
                </div>
                <div style={{ fontSize: 13, color: "#5d1a1a" }}>
                  Don't wait. The first program below is the fastest path to help.
                </div>
              </div>
            )}
            {getUrgencyLevel(answers) === 'high' && (
              <div style={{
                background: "#fff3e0", border: "2px solid #ef6c00",
                borderRadius: 12, padding: 14, marginBottom: 16,
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#ef6c00", marginBottom: 4 }}>
                  ⏰ Time-sensitive — call this week
                </div>
                <div style={{ fontSize: 13, color: "#5d2a00" }}>
                  Don't wait until your court date. Free legal help is available now.
                </div>
              </div>
            )}
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              {t(lang, "stepResults")}
            </h2>
            <div style={{ fontSize: 13, color: "#636363", marginBottom: 14 }}>
              {CATEGORIES[category]?.icon} {CATEGORIES[category]?.[lang] || CATEGORIES[category]?.en}
              {" · "}
              <strong>{filteredPrograms.length}</strong> {({es:"programas",ne:"कार्यक्रमहरू",ar:"برامج",sw:"programu",my:"အစီအစဉ်",so:"barnaamijyo",zh:"项目"}[lang] || "programs")}
            </div>

            {/* Near Me button — food category only */}
            {category === "food" && (
              <div style={{ marginBottom: 16 }}>
                {!nearMe ? (
                  <button
                    onClick={() => {
                      setGeoLoading(true);
                      navigator.geolocation.getCurrentPosition(
                        (pos) => { setUserCoords([pos.coords.latitude, pos.coords.longitude]); setNearMe(true); setGeoLoading(false); },
                        () => { setGeoError(true); setGeoLoading(false); },
                        { timeout: 8000 }
                      );
                    }}
                    style={{ background: "#2e7d32", color: "#fff", border: "none", borderRadius: 20, padding: "10px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
                  >
                    {geoLoading ? "Finding you..." : "📍 Food within walking distance"}
                  </button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 13, color: "#2e7d32", fontWeight: 600 }}>📍 Sorted by distance from you</span>
                    <button onClick={() => { setNearMe(false); setUserCoords(null); }} style={{ background: "none", border: "1px solid #ccc", borderRadius: 12, padding: "4px 12px", fontSize: 12, cursor: "pointer", color: "#767676" }}>Clear</button>
                  </div>
                )}
                {geoError && <div style={{ fontSize: 12, color: "#c0392b", marginTop: 6 }}>Location unavailable. Enable location access in your browser.</div>}
              </div>
            )}

            <div style={{ fontSize: 14, color: "#2e7d32", marginBottom: 14, fontWeight: 500 }}>
              {({
                es: "Estos son programas reales, y quieren ayudar.",
                ne: "यी वास्तविक कार्यक्रमहरू हुन्, र तिनीहरू सहयोग गर्न चाहन्छन्।",
                ar: "هذه برامج حقيقية، وتريد مساعدتك.",
                sw: "Hizi ni programu halisi, na wanataka kusaidia.",
                my: "ဒါတွေက တကယ့်အစီအစဉ်တွေ ဖြစ်ပြီး ကူညီချင်ပါတယ်။",
                so: "Kuwan waa barnaamijyo dhabta ah, waana doonayaan inay ku caawiyaan.",
                zh: "这些是真实的项目，他们愿意帮助您。",
              }[lang] || "These are real programs, and they want to help.")}
            </div>

            {SENSITIVE.has(category) && <PrivacyBadge lang={lang} sensitive />}
            <DVSafetyNotice lang={lang} category={category} />

            {/* Legal disclaimer + plain language explainer */}
            {LEGAL_CATS.has(category) && (
              <div style={{ margin: "8px 0" }}>
                <div style={{ background: "#fff8e1", border: "1px solid #ffe082", borderRadius: 10, padding: "10px 14px", marginBottom: 8, fontSize: 12, color: "#5d4037" }}>
                  ⚖️ <strong>Not legal advice.</strong> This information explains your general rights. Laws change. For your specific situation, use the free legal resources below.
                </div>
                {LEGAL_EXPLAINERS[category] && (
                  <details style={{ background: "#f3f8ff", border: "1px solid #bbdefb", borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
                    <summary style={{ fontSize: 13, fontWeight: 700, color: "#1565c0", cursor: "pointer", userSelect: "none" }}>
                      📖 Know your rights — plain language explainer
                    </summary>
                    <pre style={{ fontSize: 12, color: "#1a1a1a", lineHeight: 1.6, marginTop: 10, whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
                      {LEGAL_EXPLAINERS[category][lang] || LEGAL_EXPLAINERS[category].en}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <InterpreterNotice lang={lang} />

            {filteredPrograms.length === 0 && (
              <div style={{
                background: "#fff3e0", borderRadius: 12, padding: 20,
                textAlign: "center", marginBottom: 14, border: "1px solid #ffe0b2",
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>📞</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e65100", marginBottom: 6 }}>
                  {({
                    es: "Sin resultados exactos. Intente ampliar sus filtros, o llame al 211.",
                    ne: "सटीक परिणाम भेटिएन। फिल्टर फराकिलो बनाउनुहोस्, वा 211 मा कल गर्नुहोस्।",
                    ar: "لا نتائج دقيقة بعد. جرب توسيع الفلاتر، أو اتصل بـ 211.",
                    sw: "Hakuna matokeo kamili bado. Jaribu kupanua vichujio, au piga 211.",
                    my: "တိကျတဲ့ရလဒ် မတွေ့သေးပါ။ စစ်ထုတ်မှုကို ချဲ့ပါ သို့မဟုတ် 211 ခေါ်ပါ။",
                    so: "Natiijo sax ah wali lama helin. Shaandhee ballaadhi, ama wac 211.",
                    zh: "暂无精确结果。尝试扩大筛选范围，或拨打211。",
                  }[lang] || "No exact match yet. Try broadening your filters, or call 211.")}
                </div>
                <a href="tel:211" style={{
                  display: "inline-block", marginTop: 8, background: "#e65100",
                  color: "#fff", padding: "10px 24px", borderRadius: 8,
                  fontSize: 16, fontWeight: 700, textDecoration: "none",
                }}>📞 211</a>
              </div>
            )}

            {filteredPrograms.map((p) => (
              <ProgramCard
                key={p.id}
                program={p}
                lang={lang}
                expanded={expandedCard === p.id}
                onToggle={() => setExpandedCard(expandedCard === p.id ? null : p.id)}
              />
            ))}

            {/* 211 referral link */}
            <div style={{
              background: "#e3f2fd", borderRadius: 12, padding: 14,
              marginTop: 16, textAlign: "center",
            }}>
              <div style={{ fontSize: 13, color: "#1565c0", fontWeight: 600 }}>
                {t(lang, "call211")}
              </div>
              <a href="tel:211" style={{
                display: "inline-block", marginTop: 6, background: "#1565c0",
                color: "#fff", padding: "8px 20px", borderRadius: 8,
                fontSize: 15, fontWeight: 700, textDecoration: "none",
              }}>
                📞 211
              </a>
            </div>

            {/* findhelp.org overflow */}
            <div style={{
              background: "#f5f5f5", borderRadius: 12, padding: 14,
              marginTop: 12, textAlign: "center", border: "1px solid #e0e0e0",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#555", marginBottom: 6 }}>
                {t(lang, "findMore")}
              </div>
              <a href="https://www.findhelp.org/search?zip=14604" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", background: "#fff", color: "#1565c0",
                padding: "8px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                textDecoration: "none", border: "1px solid #bbdefb",
              }}>
                🔍 {t(lang, "findMoreLink")} ↗
              </a>
            </div>

            {/* Also need help with something else */}
            <button
              onClick={() => { setCategory(null); goTo(STEPS.WHAT_TAB); }}
              style={{
                width: "100%", marginTop: 12, padding: "14px 18px",
                background: "#fff", border: "2px solid #c8e6c9", borderRadius: 12,
                fontSize: 15, fontWeight: 600, color: "#2e7d32", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              ➕ {t(lang, "alsoNeed")}
            </button>

            {/* Community groups */}
            <CommunitySection lang={lang} category={category} />
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center", padding: "16px 20px 24px",
        fontSize: 11, color: "#767676", borderTop: "1px solid #e8e4dc",
      }}>
        Sedral Studios · {userTown ? (TOWN_LABELS[userTown] || city) : city}<br />
        Built with nothing. Built for everyone.<br />
        <span style={{ fontSize: 9, color: "#bbb" }}>© 2026 Sedral Studios. All rights reserved.</span>
        <div style={{ marginTop: 12 }}>
          <button
            onClick={() => {
              try { window.location.hash = "#support"; } catch (e) {}
              if (onExit) onExit();
            }}
            style={{
              background: "none", border: "1px solid #c8e6c9", borderRadius: 16,
              padding: "6px 14px", fontSize: 12, fontWeight: 600,
              color: "#2e7d32", cursor: "pointer", fontFamily: "inherit",
              transition: "all 0.15s",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#e8f5e9"; }}
            onMouseOut={e => { e.currentTarget.style.background = "none"; }}
          >
            ❤ {({es:"Apoyar HelpFinder",ne:"HelpFinder लाई समर्थन",ar:"دعم HelpFinder",sw:"Saidia HelpFinder",my:"HelpFinder ကိုထောက်ပံ့",so:"Taageer HelpFinder",zh:"支持 HelpFinder"}[lang] || "Support HelpFinder")}
          </button>
        </div>
        <div style={{ marginTop: 10 }}>
          <span style={{ marginTop: 4, display: "inline-block" }}>
            {({es:"Datos verificados",ne:"डाटा प्रमाणित",ar:"تم التحقق من البيانات",sw:"Data imethibitishwa",my:"အချက်အလက်စစ်ဆေးပြီး",so:"Xogta waa la xaqiijiyay",zh:"数据已验证"}[lang] || "Data verified")}: {DATA_VERIFIED}
          </span>
        </div>
        <div style={{ fontSize: 9, color: "#aaa", lineHeight: 1.5, marginTop: 10, maxWidth: 400, margin: "10px auto 0" }}>
          {({es:"HelpFinder es una herramienta informativa. Los detalles de los programas pueden cambiar. Contacte directamente a los programas para confirmar elegibilidad y horarios.",zh:"HelpFinder仅为信息工具。项目详情可能会变更。"}[lang] || "HelpFinder is an informational tool. Program details may change without notice. Always contact programs directly to confirm eligibility, hours, and availability. This is not legal, medical, or financial advice.")}
        </div>
      </div>
    </div>
  );
}

export default function RocHelp({ onExit, city = "your area", jurisdictions = [] }) {
  return (
    <ErrorBoundary>
      <RocHelpInner onExit={onExit} city={city} jurisdictions={jurisdictions} />
    </ErrorBoundary>
  );
}
