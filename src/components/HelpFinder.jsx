import React, { useState, useMemo, useRef } from "react";

// ═══════════════════════════════════════════════════
// HELPFINDER — Help Directory
// Sedral Studios · Rochester NY · March 2026
// 34 Categories · 183 Programs · 8 Languages
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
    call211: "Call 211 — they can help with anything, anytime.",
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
    call211: "Llame al 211 — pueden ayudar con cualquier cosa, a cualquier hora.",
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
    call211: "211 मा कल गर्नुहोस् — जुनसुकै कुरामा, जुनसुकै बेला।",
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
    call211: "اتصل بـ 211 — يمكنهم المساعدة بأي شيء، في أي وقت.",
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
    call211: "Piga 211 — wanaweza kusaidia chochote, wakati wowote.",
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
    call211: "211 ခေါ်ပါ — ဘာမဆို၊ အချိန်မရွေး ကူညီနိုင်ပါတယ်။",
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
    call211: "Wac 211 — wax kasta, wakhti kasta way kaa caawin karaan.",
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
    call211: "拨打211 — 任何事情，任何时间都能帮忙。",
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
    needs: ["crisis", "domesticSvc", "parentalProtection", "crisisChild", "weather", "documents"],
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
    needs: ["health", "dental", "vision", "prescriptions", "hivsti"],
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
    needs: ["mental", "grief", "addiction", "caregiver"],
  },
  situation: {
    icon: "👨‍👩‍👧",
    en: "My family, my job, or my rights",
    es: "Mi familia, mi trabajo, o mis derechos",
    ne: "मेरो परिवार, काम, वा अधिकार",
    ar: "عائلتي أو عملي أو حقوقي",
    sw: "Familia yangu, kazi, au haki zangu",
    my: "မိသားစု၊ အလုပ်၊ အခွင့်အရေး",
    so: "Qoyskayga, shaqadayda, ama xuquuqdayda",
    zh: "家庭、工作或权利",
    needs: [
      "childcare",
      "youth",
      "seniorSvc",
      "disabilitySvc",
      "education",
      "employment",
      "legal",
      "legalEviction",
      "legalWorkers",
      "legalBenefits",
      "legalImmigration",
      "legalDiscrim",
      "legalDebt",
      "legalSmallClaims",
      "legalCrimRecord",
      "parentalProtection",
      "veteranSvc",
      "refugeeSvc",
      "lgbtq",
      "reentry",
      "internet",
      "pets",
      "funeral",
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
  addiction: { icon: "🔄", en: "Drinking, drugs, or getting clean", es: "Alcohol, drogas, o recuperación", ne: "मदिरा, लागुऔषध, वा सफा हुने", ar: "الكحول أو المخدرات أو التعافي", sw: "Pombe, dawa za kulevya, au kupona", my: "အရက်၊ မူးယစ်ဆေး၊ ပြန်လည်ကောင်းမွန်ရေး", so: "Khamriga, daroogada, ama ka bixitaanka", zh: "饮酒、毒品或戒瘾" },
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

// ── PROGRAMS (all 130+) ──
// Data last verified: March 2026. Phone numbers and hours may change.
const DATA_VERIFIED = "March 2026";
const PROGRAMS = [
  // CRISIS
  { id:"211", n:"211 Lifeline (Call for Anything)", c:"crisis", d:"Don't know where to start? Call 211. Free, anytime, for anything.", tr:{es:"¿No sabe por dónde empezar? Llame al 211. Gratis, a cualquier hora.",ne:"कहाँबाट सुरु गर्ने थाहा छैन? 211 मा कल गर्नुहोस्। निःशुल्क, जुनसुकै बेला।",ar:"لا تعرف من أين تبدأ؟ اتصل بـ 211. مجاني، في أي وقت.",so:"Ma ogtid halka aad ka bilowdo? Wac 211. Bilaash, wakhti kasta.",sw:"Hujui wapi kuanzia? Piga 211. Bure, wakati wowote.",my:"ဘယ်ကစရမှန်းမသိဘူးလား? 211 ခေါ်ပါ။ အခမဲ့၊ အချိန်မရွေး။",zh:"不知从何开始？拨打211。免费，随时。"}, ph:"211", url:"https://211lifeline.org", aurl:"https://211lifeline.org/search.php", hr:"24/7", doc:"None — call or text your ZIP to 898-211", tg:["any"] },
  { id:"988crisis", n:"988 Suicide & Crisis Lifeline", c:"crisis", d:"Call or text 988 anytime. Free, confidential, 24/7. For any emotional crisis — not just suicide.", ph:"988", url:"https://988lifeline.org", hr:"24/7", doc:"None", tg:["any"] },
  { id:"crisisstext", n:"Crisis Text Line", c:"crisis", d:"Text HOME to 741741 to reach a trained crisis counselor. Free, 24/7, confidential.", url:"https://www.crisistextline.org", hr:"24/7", doc:"None", tg:["any"] },
  { id:"strongcrisis", n:"Strong Memorial Psych Emergency", c:"crisis", d:"Walk-in psychiatric emergency room. No appointment needed. Go now if you need to.", ph:"585-275-4501", ad:"300 Crittenden Blvd, Rochester NY 14642", hr:"24/7", doc:"ID if you have it — they'll see you regardless", tg:["any"] },
  { id:"bhacccrisis", n:"Behavioral Health Access & Crisis Center", c:"crisis", d:"Walk-in crisis center. No appointment. Assessment, stabilization, referrals.", ph:"585-368-3544", ad:"65 Genesee St (St. Mary's Campus), Rochester NY 14611", hr:"24/7", doc:"None", tg:["any"] },

  // FOOD
  { id:"snap", n:"SNAP (Food Assistance)", c:"food", d:"Monthly funds for groceries on an EBT card. Most families qualify.", inc:130, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", url:"https://mybenefits.ny.gov", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, proof of income, proof of address", tg:["hh"] },
  { id:"wic", n:"WIC (Women, Infants & Children)", c:"food", d:"Free healthy food for pregnant moms, new moms, and kids under 5.", inc:185, ph:"585-753-5164", ad:"111 Westfall Rd, Rochester NY 14620", url:"https://www.health.ny.gov/prevention/nutrition/wic/", hr:"M-F 8:30am-5pm", doc:"ID, proof of income, immunization records", tg:["kids","u5","preg"] },
  { id:"foodlink", n:"Foodlink / Food Pantries", c:"food", d:"Free groceries — no paperwork, no income check, no questions asked at most locations.", ph:"585-328-3380", url:"https://foodlinkny.org/find-food/", hr:"Varies by location", doc:"None at most pantries", tg:["any"] },
  { id:"meals", n:"Free School Meals", c:"food", d:"Every RCSD student gets free breakfast and lunch. No application needed.", ph:"585-262-8100", url:"https://www.rcsdk12.org/nutrition", hr:"School hours", doc:"None", tg:["kids","any"] },
  { id:"market", n:"Rochester Public Market + Double Up", c:"food", d:"Fresh produce. SNAP/EBT accepted. Double Up matches your SNAP on fruits and veggies.", ad:"280 N Union St, Rochester NY 14609", url:"https://www.cityofrochester.gov/publicmarket", hr:"Tue & Thu 6am-1pm, Sat 5am-3pm", doc:"Your EBT card", tg:["any"] },
  { id:"mow", n:"Meals on Wheels", c:"food", d:"Hot meals delivered to your home if you're 60+ or homebound. No cost.", ph:"585-461-4263", url:"https://www.lifespan-roch.org/meals-on-wheels", hr:"Delivered M-F", doc:"None — just call", tg:["sen"] },
  { id:"trillfood", n:"Trillium Health Food Pantry", c:"food", d:"Walk-in food pantry. No income check, no ID needed.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"housemercy", n:"House of Mercy", c:"food", d:"Food pantry, clothing, shelter, advocacy. No restrictions, no ID required.", ph:"585-436-9497", ad:"285 Ormond St, Rochester NY 14605", url:"https://houseofmercyrochester.org", hr:"Check website", doc:"None", tg:["any"] },
  { id:"communityplace", n:"Community Place of Greater Rochester", c:"food", d:"Food, rent assistance, clothing, case management. Specific zip codes — call to check.", ph:"585-288-0021", url:"https://communityplace.org", hr:"M-F", doc:"Call to check", tg:["any"] },

  // UTILITIES
  { id:"heap", n:"HEAP (Heating Help)", c:"utilities", d:"Help paying your heating bill. Emergency HEAP can help right away if heat is shut off.", inc:150, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", url:"https://otda.ny.gov/programs/heap/", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, proof of income, utility bill", tg:["hh"], nt:"Emergency HEAP opens each winter and runs until funds are gone." },
  { id:"herr", n:"Furnace Repair/Replacement (Free)", c:"utilities", d:"If you're 60+ and own your home, you may get free furnace repair or a new furnace.", inc:150, ph:"585-753-6960", ad:"111 Westfall Rd, Rochester NY 14620", hr:"M-F 8am-4pm", doc:"ID, proof of income, proof of homeownership", tg:["sen","hh"], nt:"Limited funding — apply early." },
  { id:"rge", n:"RG&E Payment Help", c:"utilities", d:"Behind on electric or gas? RG&E has payment plans. Call before they shut you off.", ph:"877-266-3492", url:"https://www.rge.com", hr:"M-F 8am-6pm", doc:"Account number, proof of income", tg:["hh"] },
  { id:"empower", n:"EmPower NY (Free Home Upgrades)", c:"utilities", d:"Free insulation, air sealing, and energy improvements to lower your bills.", inc:200, ph:"585-546-8030", url:"https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program", hr:"M-F 9am-5pm", doc:"Proof of income, utility bill", tg:["hh"] },

  // CASH
  { id:"ta", n:"Temporary Assistance (Cash Help)", c:"cash", d:"Monthly cash for rent, utilities, and basic needs while you get back on your feet.", inc:100, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", url:"https://mybenefits.ny.gov", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, SSN, proof of income, bank statements, proof of address", tg:["hh"] },
  { id:"eitc", n:"Earned Income Tax Credit", c:"cash", d:"If you work, you may get up to $7,430 back — even if you don't owe taxes.", inc:400, ph:"585-258-3500", ad:"255 N Goodman St, Rochester NY 14607", url:"https://www.irs.gov/eitc", hr:"Jan-Apr", doc:"W-2, SSNs, ID", tg:["work","hh"] },
  { id:"vita", n:"Free Tax Filing (VITA)", c:"cash", d:"Free tax prep if your household earns under $67,000.", ph:"211", url:"https://www.auw.org/freetaxprep", hr:"Jan-Apr, multiple locations", doc:"W-2, SSN cards, ID", tg:["work","any"] },
  { id:"fec", n:"Free Financial Counseling", c:"cash", d:"One-on-one help with debt, credit, savings, and budgeting. Free and confidential.", ph:"585-252-7110", url:"https://www.rochesterfec.org", hr:"M-F by appointment", doc:"None", tg:["any"] },
  { id:"rmapi", n:"RMAPI (Coaching & Mobility)", c:"cash", d:"Free coaching, financial counseling, and help building a path forward.", ph:"585-399-1285", url:"https://www.racf.org/rmapi", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"] },
  { id:"myb", n:"myBenefits.ny.gov (Apply for Many at Once)", c:"cash", d:"One application for SNAP, cash, Medicaid, HEAP, and childcare subsidy.", url:"https://mybenefits.ny.gov", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"24/7 online", doc:"ID, SSNs, proof of income, proof of address", tg:["hh","any"], nt:"Covers SNAP, TA, Medicaid, HEAP, and child care. Start here." },

  // HEALTH
  { id:"medicaid", n:"Medicaid (Free Health Insurance)", c:"health", d:"Free or very low-cost health insurance. Covers doctors, Rx, hospital, dental, vision, mental health.", inc:138, ph:"585-753-6960", url:"https://nystateofhealth.ny.gov", aurl:"https://nystateofhealth.ny.gov/individual", hr:"M-F 8am-4pm", doc:"ID, SSN, proof of income", tg:["hh"] },
  { id:"chip", n:"Child Health Plus", c:"health", d:"Free or low-cost health insurance for children under 19.", inc:400, ph:"800-698-4543", url:"https://nystateofhealth.ny.gov", aurl:"https://nystateofhealth.ny.gov/individual", hr:"M-F 8am-8pm", doc:"Birth certificate, SSN, proof of income", tg:["kids","hh"] },
  { id:"trill", n:"Trillium Health (Pay What You Can)", c:"health", d:"Doctors, dentists, counselors, pharmacy — sliding scale. LGBTQ+ healthcare leader including gender-affirming care and PrEP.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None required", tg:["any"] },
  { id:"jordan", n:"Jordan Health Center", c:"health", d:"Primary care, dental, mental health, WIC. Accepts everyone, insured or not.", ph:"585-423-5800", ad:"82 Holland St, Rochester NY 14605", url:"https://www.jordanhealth.org", hr:"M-F 8am-5pm", doc:"None — walk-ins welcome", tg:["any"] },
  { id:"pp", n:"Planned Parenthood", c:"health", d:"Reproductive health, birth control, STI testing, cancer screening. Sliding scale.", ph:"585-546-2595", ad:"114 University Ave, Rochester NY 14605", url:"https://www.plannedparenthood.org/health-center/new-york/rochester", hr:"M-Sat varies", doc:"None required", tg:["any"] },

  // DENTAL (NOTE: Trillium appears in health, dental, HIV, prescriptions — intentional for discoverability. Update all 4 entries when info changes.)
  { id:"eastmandental", n:"Eastman Dental Center (URMC)", c:"dental", d:"Full dental services on a sliding scale. Emergency dental, pediatric, orthodontics.", ph:"585-263-6599", ad:"625 Elmwood Ave, Rochester NY 14607", url:"https://www.urmc.rochester.edu/dental", hr:"M-F 8am-5pm", doc:"Proof of income for sliding scale", tg:["any"] },
  { id:"eastmandown", n:"Eastman Dental Downtown", c:"dental", d:"Sliding scale dental. Emergency care, general dentistry, pediatric. Walk-ins for urgent needs.", ph:"585-263-6599", ad:"855 W Main St, Rochester NY 14611", hr:"M-F 8am-4pm", doc:"Proof of income", tg:["any"] },
  { id:"jordandental", n:"Jordan Health (Dental)", c:"dental", d:"Preventive and restorative dental care. Sliding scale — no one turned away for inability to pay.", ph:"585-423-5800", ad:"82 Holland St, Rochester NY 14605", url:"https://www.jordanhealth.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"trilldental", n:"Trillium Health (Dental)", c:"dental", d:"Dental care on a sliding scale. Accepts Medicaid and uninsured patients.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None required", tg:["any"] },

  // PRESCRIPTIONS
  { id:"nyrxcard", n:"New York Rx Card (Free Discount Card)", c:"prescriptions", d:"Free prescription discount card. Up to 80% off. No application, no restrictions.", url:"https://newyorkrxcard.com", hr:"Use anytime", doc:"None — download or pick up at CVS or Wegmans", tg:["any"] },
  { id:"epic", n:"EPIC (Senior Prescription Help)", c:"prescriptions", d:"NYS program that helps seniors 65+ pay for prescriptions. Saves an average of 90% on medicines.", ph:"800-332-3742", url:"https://www.health.ny.gov/health_care/epic/", hr:"M-F", doc:"Proof of age, income", tg:["sen"] },
  { id:"needymeds", n:"NeedyMeds (Find Free Medications)", c:"prescriptions", d:"Search by drug name to find patient assistance programs that provide your medications free.", url:"https://www.needymeds.org", hr:"24/7 online", doc:"Varies by program", tg:["any"] },
  { id:"rxoutreach", n:"Rx Outreach (Low-Cost Mail Order)", c:"prescriptions", d:"Nonprofit mail-order pharmacy. Low-cost generics with free home delivery. No insurance required.", ph:"888-796-1234", url:"https://rxoutreach.org", hr:"M-F 7am-6pm CT", doc:"Prescription from your doctor", tg:["any"] },
  { id:"trillrx", n:"Trillium Health Pharmacy", c:"prescriptions", d:"On-site pharmacy with sliding scale pricing. Helps find patient assistance programs.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"Your prescriptions", tg:["any"] },

  // MENTAL HEALTH
  { id:"988", n:"988 Suicide & Crisis Lifeline", c:"mental", d:"Call or text 988 anytime. Free, confidential, 24/7. Any emotional crisis counts.", tr:{es:"Llame o envíe mensaje al 988. Gratis, confidencial, 24/7.",ne:"988 मा कल वा टेक्स्ट गर्नुहोस्। निःशुल्क, गोप्य, 24/7।",ar:"اتصل أو أرسل رسالة نصية إلى 988. مجاني وسري، 24/7.",so:"Wac ama qoraal u dir 988. Bilaash, sir ah, 24/7.",sw:"Piga au tuma ujumbe 988. Bure, siri, 24/7.",my:"988 သို့ခေါ်ဆိုပါ သို့ စာပို့ပါ။ အခမဲ့၊ လျှို့ဝှက်၊ ၂၄/၇။",zh:"拨打或发短信988。免费、保密、24/7。"}, ph:"988", url:"https://988lifeline.org", hr:"24/7", doc:"None", tg:["any"] },
  { id:"strong", n:"Strong Memorial Psych Emergency", c:"mental", d:"Walk-in psychiatric emergency room. No appointment needed.", ph:"585-275-4501", ad:"300 Crittenden Blvd, Rochester NY 14642", url:"https://www.urmc.rochester.edu/mental-health-wellness/", hr:"24/7", doc:"ID if you have it", tg:["any"] },
  { id:"bhacc", n:"Behavioral Health Access & Crisis Center", c:"mental", d:"Walk-in crisis center. No appointment. Assessment, stabilization, referrals.", ph:"585-368-3544", ad:"65 Genesee St (St. Mary's Campus), Rochester NY 14611", url:"https://www.rochesterregional.org", hr:"24/7", doc:"None", tg:["any"] },
  { id:"mobilecrt", n:"Monroe County Mobile Crisis Team", c:"mental", d:"Crisis team comes to YOU. For adults and adolescents. Licensed clinicians.", ph:"585-275-5151", url:"https://www.urmc.rochester.edu/mental-health-wellness/emergency-services/monroe-mobile-crisis-team", hr:"M-F 7am-8pm, Weekends 10am-6:30pm", doc:"None — just call", tg:["any"] },
  { id:"nami", n:"NAMI Rochester", c:"mental", d:"Free support groups, education, advocacy for people affected by mental illness.", ph:"585-423-1500", url:"https://namiroc.org", hr:"See website for group schedule", doc:"None", tg:["any"], nt:"NAMI National Helpline: 1-800-950-6264 (M-F 10am-10pm ET)" },
  { id:"mha", n:"Mental Health Association of Rochester", c:"mental", d:"Peer support drop-in center. Free, no referral needed, confidential.", ph:"585-325-3145", ad:"274 N Goodman St, Suite D103, Rochester NY 14607", url:"https://mharochester.org", hr:"See website for drop-in hours", doc:"None", tg:["any"] },
  { id:"crisistext", n:"Crisis Text Line", c:"mental", d:"Text HOME to 741741 to reach a trained crisis counselor. Free, 24/7, confidential.", url:"https://www.crisistextline.org", hr:"24/7", doc:"None", tg:["any"], nt:"Text HOME to 741741 from any phone." },
  { id:"villa", n:"Villa of Hope (Mental Health)", c:"mental", d:"Outpatient mental health clinic for youth and adults. Therapy, psychiatry, and support services.", ph:"585-328-0849", url:"https://www.villaofhope.org", hr:"M-F", doc:"Call for intake info", tg:["any"] },
  { id:"genesee", n:"Genesee Mental Health Center", c:"mental", d:"Sliding scale outpatient mental health. Therapy, medication management, groups.", ph:"585-922-7770", ad:"224 Alexander St, Rochester NY 14607", url:"https://www.rochesterregional.org", hr:"M-F", doc:"Call for intake", tg:["any"] },
  { id:"compeer", n:"Compeer Rochester", c:"mental", d:"Free mentoring and friendship for people with mental health challenges.", ph:"585-546-8280", url:"https://www.compeerrochester.org", hr:"M-F 8:30am-4:30pm", doc:"None", tg:["any"] },
  { id:"openpath", n:"Open Path Collective (Affordable Therapy)", c:"mental", d:"Affordable therapy: $30-$80 per session. Network of licensed therapists. No insurance needed.", url:"https://openpathcollective.org", hr:"Varies by therapist", doc:"None", tg:["any"] },
  { id:"hbci", n:"Home-Based Crisis Intervention (Youth)", c:"mental", d:"Free 24-hour crisis intervention for families with children at risk of psychiatric hospitalization.", ph:"585-922-8040", url:"https://www.rochesterregional.org", hr:"24/7", doc:"Referral from child's therapist", tg:["kids"] },

  // GRIEF & LOSS
  { id:"hospicegrief", n:"Hospice Bereavement Services", c:"grief", d:"Free grief support groups and one-on-one counseling. Open to anyone.", ph:"585-922-1940", url:"https://www.rochesterregional.org/services/hospice-care/our-services/bereavement-services", hr:"See website for group schedule", doc:"None", tg:["any"] },
  { id:"urmcgrief", n:"URMC Hospice Bereavement", c:"grief", d:"Free grief counseling, support groups, and Camp Heartstrings for grieving children.", ph:"585-274-4069", url:"https://www.urmc.rochester.edu/home-care/hospice-care/bereavement", hr:"See website", doc:"None", tg:["any"] },
  { id:"namigrief", n:"NAMI Suicide Loss Bereavement Group", c:"grief", d:"Support group for people who have lost someone to suicide. In-person and virtual options.", ph:"585-423-1500", url:"https://namiroc.org", hr:"1st and 3rd Mondays", doc:"None", tg:["any"] },
  { id:"compassfriends", n:"Compassionate Friends (Child Loss)", c:"grief", d:"Support for families after the death of a child at any age. Rochester chapter meets twice monthly.", ph:"607-329-5072", ad:"First Unitarian Church, 220 S Winton Rd, Rochester NY 14620", hr:"2nd & 4th Tuesdays 7-8:30pm", doc:"None", tg:["any"] },
  { id:"griefshare", n:"GriefShare (Faith-Based Groups)", c:"grief", d:"Weekly grief recovery support groups at churches across Rochester. Welcoming to all.", url:"https://find.griefshare.org/countries/us/states/ny/cities/rochester", hr:"Varies by location", doc:"None", tg:["any"] },

  // ADDICTION
  { id:"ncadd", n:"NCADD-RA (Addiction Help)", c:"addiction", d:"Information, peer support, recovery coaching, referrals to treatment. Judgment-free.", ph:"585-719-3480", url:"https://ncadd-ra.org", hr:"M-F 8:30am-5pm", doc:"None", tg:["any"] },
  { id:"huther", n:"Huther Doyle Memorial Institute", c:"addiction", d:"Outpatient addiction treatment, MAT (Suboxone/Vivitrol), same-day appointments. Sliding scale.", ph:"585-325-5100", ad:"360 East Ave, Rochester NY 14604", url:"https://hutherdoyle.com", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"rocovery", n:"ROCovery Fitness", c:"addiction", d:"Free fitness-based recovery support. Exercise classes, peer support, sober community.", ph:"585-330-2350", ad:"50 Public Market, Rochester NY 14609", url:"https://rocoveryfitness.org", hr:"See schedule online", doc:"None", tg:["any"] },
  { id:"na", n:"Narcotics Anonymous Rochester", c:"addiction", d:"Free meetings across Rochester. No signup, no cost, just show up.", ph:"585-325-0186", url:"https://nny-na.org", hr:"Daily meetings", doc:"None", tg:["any"] },
  { id:"aa", n:"Alcoholics Anonymous Rochester", c:"addiction", d:"Free meetings every day across Monroe County.", ph:"585-232-6720", url:"https://rochesteraa.com", hr:"Daily", doc:"None", tg:["any"] },
  { id:"depaul", n:"DePaul (Mental Health + Addiction Housing)", c:"addiction", d:"Residential treatment, supportive housing, and community services.", ph:"585-426-8000", url:"https://depaul.org", hr:"Call for info", doc:"Varies", tg:["any"] },
  { id:"easthouse", n:"East House", c:"addiction", d:"Substance abuse treatment, residential programs, community reintegration.", ph:"585-238-2150", url:"https://easthouse.org", hr:"Call for info", doc:"Varies", tg:["any"] },
  { id:"unitycd", n:"Unity Hospital Chemical Dependency", c:"addiction", d:"Inpatient and outpatient addiction treatment.", ph:"585-368-3544", url:"https://rochesterregional.org", hr:"Call for info", doc:"Varies", tg:["any"] },
  { id:"strongrec", n:"Strong Recovery (URMC)", c:"addiction", d:"Comprehensive addiction medicine. Outpatient, intensive outpatient, MAT, psychiatry.", ph:"585-275-1550", url:"https://urmc.rochester.edu/mental-health-wellness/addiction", hr:"M-F", doc:"Call for info", tg:["any"] },

  // HOUSING
  { id:"s8", n:"Section 8 Housing Voucher", c:"housing", d:"Voucher that pays most of your rent directly to your landlord.", inc:50, ph:"585-697-6000", ad:"675 W Main St, Rochester NY 14611", url:"https://www.rochesterhousing.org", hr:"M-F 8am-4:30pm", doc:"ID, SSN cards, proof of income, birth certificates", tg:["hh"], nt:"Waitlist opens periodically. Check website or call." },
  { id:"ph", n:"Public Housing", c:"housing", d:"Apartments where rent is ~30% of your income.", inc:80, ph:"585-697-6000", ad:"675 W Main St, Rochester NY 14611", url:"https://www.rochesterhousing.org", hr:"M-F 8am-4:30pm", doc:"ID, SSN cards, proof of income", tg:["hh"] },
  { id:"shelter", n:"Emergency Shelter (Homeless)", c:"housing", d:"If you have nowhere to sleep tonight, call for emergency shelter.", tr:{es:"Si no tiene dónde dormir esta noche, llame para refugio de emergencia.",ne:"आज राति सुत्ने ठाउँ छैन भने, आपतकालीन आश्रयको लागि कल गर्नुहोस्।",ar:"إذا لم يكن لديك مكان للنوم الليلة، اتصل للحصول على مأوى طارئ.",so:"Haddii aadan haysan meel aad caawa seexato, wac si aad u hesho hoy degdeg ah.",sw:"Kama huna mahali pa kulala usiku huu, piga simu kupata makazi ya dharura.",my:"ဒီညအိပ်စရာမရှိရင် အရေးပေါ်ခိုလှုံရာအတွက် ဖုန်းခေါ်ပါ။",zh:"如果今晚无处可睡，请拨打电话寻求紧急庇护。"}, ph:"585-753-2780", ad:"111 Westfall Rd, Rochester NY 14620", url:"https://www.monroecounty.gov/hs", hr:"M-F 8am-3pm", doc:"ID if you have it", tg:["any"], nt:"After 3pm / weekends: 585-442-1742" },
  { id:"prov", n:"Providence Housing (Supportive)", c:"housing", d:"Permanent supportive housing for people with disabilities, veterans, and families.", ph:"585-529-9555", ad:"1150 Buffalo Rd, Rochester NY 14624", url:"https://providencehousing.org", hr:"M-F 8:30am-5pm", doc:"Coordinated Entry through shelter", tg:["dis","vet"] },
  { id:"hab", n:"Habitat for Humanity", c:"housing", d:"Help building and buying your own affordable home. Sweat equity = home.", inc:80, ph:"585-546-1470", url:"https://www.rochesterhabitat.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["hh"] },
  { id:"nw", n:"NeighborWorks (Homebuyer Help)", c:"housing", d:"Classes and coaching for first-time homebuyers. Home repair loans too.", ph:"585-325-4170", url:"https://www.nwrochester.org", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"] },
  { id:"tenant", n:"Tenant Defense Project", c:"housing", d:"Free lawyer if you're facing eviction.", ph:"585-504-6195", url:"https://www.tenantdefense.org", hr:"M-F 9am-5pm", doc:"Eviction papers if you have them", tg:["any"] },
  { id:"fpgroc", n:"Family Promise (Homeless Families)", c:"housing", d:"Housing and support for families with children experiencing homelessness.", ph:"585-420-7610", url:"https://fpgroc.org", hr:"Call for info", doc:"Varies", tg:["kids","any"] },
  { id:"housingcouncil", n:"Housing Council at PathStone", c:"housing", d:"Tenant rights, landlord disputes, housing discrimination, foreclosure prevention. Free counseling.", ph:"585-546-3700", url:"https://www.thehousingcouncil.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"] },
  { id:"mchealthhousing", n:"Monroe County Housing Complaints", c:"housing", d:"Report unsafe housing conditions, bed bugs, no heat, code violations. Anonymous complaints accepted.", ph:"585-753-5064", url:"https://www.monroecounty.gov/health", hr:"M-F 8:30am-4:30pm", doc:"None — can report anonymously", tg:["any"] },
  { id:"mailsvc", n:"Open Door Mission (Mail Services)", c:"housing", d:"If you're homeless, Open Door Mission can provide a mailing address for benefits, jobs, and mail.", ph:"585-325-3370", ad:"156 N Plymouth Ave, Rochester NY 14608", url:"https://opendoormission.com", hr:"See website", doc:"None", tg:["any"] },

  // CHILDCARE
  { id:"ccsub", n:"Child Care Subsidy", c:"childcare", d:"Help paying for daycare or after-school care so you can work or go to school.", inc:200, ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", aurl:"https://mybenefits.ny.gov/mybenefits/begin", hr:"M-F 8am-4pm", doc:"ID, proof of income/work/school, provider info", tg:["kids","work","hh"] },
  { id:"hs", n:"Head Start / Free Pre-K", c:"childcare", d:"Free preschool for children 3-4 from low-income families.", inc:100, ph:"585-271-0778", url:"https://www.abvi.org/education/head-start/", hr:"School year M-F", doc:"Birth certificate, proof of income, immunizations", tg:["kids","u5"] },
  { id:"healthyfam", n:"Healthy Families Monroe County", c:"childcare", d:"Free home visiting for new and expectant parents.", ph:"585-753-5437", hr:"By appointment", doc:"None", tg:["preg","u5","any"] },
  { id:"pat", n:"Parents as Teachers", c:"childcare", d:"Free home visiting for families with children birth to 5.", ph:"585-271-0778", hr:"By appointment", doc:"None", tg:["u5","kids","any"] },
  { id:"lll", n:"La Leche League Rochester", c:"childcare", d:"Free breastfeeding support. Meetings and phone help.", url:"https://lllrochester.org", hr:"See website", doc:"None", tg:["preg","u5","any"] },
  { id:"momshm", n:"Moms Helping Moms Foundation", c:"childcare", d:"Free diapers, formula, wipes, baby essentials.", url:"https://momshelpingmoms.org", hr:"See website/Facebook", doc:"None", tg:["u5","kids","any"] },
  { id:"frc", n:"Family Resource Centers (RCSD)", c:"childcare", d:"Every Rochester City School has one. Help with food, clothing, housing, school supplies.", ph:"585-262-8100", url:"https://www.rcsdk12.org", hr:"School hours", doc:"None", tg:["kids","any"] },
  { id:"perinatal", n:"Perinatal Network of Monroe County", c:"childcare", d:"Everything pregnancy. Prenatal care referrals, doula support, breastfeeding help, newborn home visits. Free.", ph:"585-546-2140", url:"https://www.perinatalnetwork.org", hr:"M-F 9am-5pm", doc:"None", tg:["preg","u5","any"] },
  { id:"nfp", n:"Nurse-Family Partnership", c:"childcare", d:"Free home visits from a registered nurse throughout your pregnancy and baby's first 2 years. First-time moms only.", ph:"585-753-5437", url:"https://www.nursefamilypartnership.org", hr:"By appointment", doc:"None — just be a first-time mom", tg:["preg","u5"], nt:"You can enroll as early in your pregnancy as possible. The earlier you start, the more visits you get." },
  { id:"rochbaby", n:"Rochester Healthy Baby Network", c:"childcare", d:"Free community health workers help pregnant women get prenatal care, navigate Medicaid, find baby supplies, and prepare for birth.", ph:"585-546-2140", url:"https://www.perinatalnetwork.org", hr:"M-F", doc:"None", tg:["preg","u5","any"] },

  // EMPLOYMENT
  { id:"rw", n:"RochesterWorks! (Job Center)", c:"employment", d:"Free job help. Résumé writing, interview practice, listings, training.", ph:"585-258-3500", ad:"255 N Goodman St, Rochester NY 14607", url:"https://rochesterworks.org", hr:"M-F 8am-5pm", doc:"ID", tg:["any"] },
  { id:"ps", n:"PathStone (Jobs & Training)", c:"employment", d:"Job training, farmworker help, small business. Bilingual.", ph:"585-340-3300", url:"https://www.pathstone.org", hr:"M-F 8:30am-5pm", doc:"Varies", tg:["any"] },
  { id:"gw", n:"Goodwill (Career Help)", c:"employment", d:"Career coaching, job readiness, youth employment.", ph:"585-922-1250", url:"https://goodwillfingerlakes.org", hr:"M-F 8:30am-5pm", doc:"ID", tg:["any"] },
  { id:"syep", n:"Summer Youth Employment (SYEP)", c:"employment", d:"Paid summer jobs for youth ages 14-20. Six weeks of work experience. Apply through RochesterWorks.", ph:"585-258-3500", url:"https://rocsummeryouth.com", hr:"Applications open Feb each year", doc:"ID, proof of age, proof of address", tg:["kids","any"], nt:"Positions fill fast. Apply as soon as applications open in February." },
  { id:"rocjob", n:"ROC Your Job (After School Jobs)", c:"employment", d:"Paid after-school work for teens during the school year. Ages 14-24. Up to 30 hours of job readiness training.", ph:"585-258-3500", url:"https://rochesterworks.org/services/after-school-youth-employment-program-roc-your-job/", hr:"Oct-June each year", doc:"ID, proof of age, proof of income", tg:["kids","any"] },
  { id:"accesvr", n:"ACCES-VR (Vocational Rehab)", c:"employment", d:"Free job training, coaching, and placement for people with any disability. They pay for training, tools, even work clothes.", ph:"585-238-2897", ad:"109 S Union St, Rochester NY 14607", url:"https://www.acces.nysed.gov/vr", hr:"M-F 8:30am-4:30pm", doc:"Disability documentation, medical records", tg:["dis","any"], nt:"Covers physical, mental, learning, and developmental disabilities. They can pay for college courses, CDL training, certifications." },
  { id:"dfs", n:"Dress for Success Rochester", c:"employment", d:"Free professional clothing for women who have a job interview. Suits, shoes, accessories — everything you need to walk in confident.", ph:"585-321-6808", url:"https://rochester.dressforsuccess.org", hr:"By appointment", doc:"Proof of upcoming job interview", tg:["any"] },
  { id:"sbdc", n:"Small Business Development Center (SBDC)", c:"employment", d:"Free one-on-one help starting or growing a small business. Business plans, funding, marketing.", ph:"585-232-7310", url:"https://www.nyssbdc.org/centers/centers-details.aspx?centid=15", hr:"M-F 9am-5pm", doc:"None", tg:["any"] },
  { id:"hillside", n:"Hillside Work-Scholarship Connection", c:"employment", d:"Dropout prevention + job placement for at-risk youth in Rochester schools. Year-round mentoring and paid work.", ph:"585-256-7500", url:"https://www.hillside.com/services/youth-development/hillside-work-scholarship-connection/", hr:"Through participating schools", doc:"Must be enrolled in a partner school", tg:["kids"] },
  { id:"reocjobs", n:"REOC (Free Job Training)", c:"employment", d:"TUITION-FREE career training: CDL truck driving, healthcare, IT, culinary arts, HVAC. Earn certifications that lead to real jobs.", ph:"585-232-2730", ad:"161 Chestnut St, Rochester NY 14604", url:"https://www.brockport.edu/reoc/", hr:"M-F", doc:"Proof of income for eligibility", tg:["any"], nt:"Same as REOC in education — listed here because people looking for jobs might not think to look under education." },

  // LEGAL
  { id:"la", n:"Legal Aid Society", c:"legal", d:"Free lawyers for low-income residents. Eviction, benefits, family law, immigration.", inc:200, ph:"585-232-4090", ad:"1 W Main St Suite 800, Rochester NY 14614", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"] },
  { id:"lawny", n:"LawNY (Free Legal Services)", c:"legal", d:"Free civil legal help. Housing, benefits, family, disability rights.", ph:"585-295-5700", url:"https://www.lawny.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"] },
  { id:"vlsp", n:"Volunteer Legal Services (Free Clinics)", c:"legal", d:"Free legal clinics: family law, bankruptcy, immigration.", ph:"585-232-3051", url:"https://vlsp.org", hr:"By appointment", doc:"Proof of income", tg:["any"] },
  { id:"roc311", n:"Rochester 311 (City Services)", c:"legal", d:"Pothole? Streetlight out? Trash not picked up? City 311 handles it.", ph:"311", url:"https://www.cityofrochester.gov/contact-us", hr:"M-F business hours", doc:"None", tg:["any"] },
  { id:"citycouncil", n:"Rochester City Council (Constituent Help)", c:"legal", d:"Your City Council member can help you navigate city government and fix neighborhood problems.", ph:"585-428-7538", url:"https://www.cityofrochester.gov/departments/city-council", hr:"M-F", doc:"None", tg:["any"] },
  { id:"mcleg", n:"Monroe County Legislature", c:"legal", d:"Your county legislator can help with county services and DSS issues.", ph:"585-753-1950", url:"https://www.monroecounty.gov/legislature", hr:"M-F", doc:"None", tg:["any"] },
  { id:"voterreg", n:"Monroe County Board of Elections", c:"legal", d:"Register to vote, check registration, find your polling place, get absentee ballot.", ph:"585-753-1550", url:"https://www.monroecounty.gov/elections", hr:"M-F 9am-5pm", doc:"None to register — just need address", tg:["any"] },
  { id:"metrojustice", n:"Metro Justice", c:"legal", d:"Community organizing for economic and racial justice. Housing rights, utility justice, workers' rights.", url:"https://www.metrojustice.org", hr:"See website", doc:"None", tg:["any"] },

  // SENIOR
  { id:"ofa", n:"Office for the Aging", c:"seniorSvc", d:"Help for 60+. Meals, transportation, Medicare help, caregiver support. Start here if you don't know what's available.", ph:"585-753-6280", ad:"111 Westfall Rd, Rochester NY 14620", url:"https://www.monroecounty.gov/aging", hr:"M-F 8am-4pm", doc:"Proof of age", tg:["sen"] },
  { id:"life", n:"Lifespan (Senior Advocacy)", c:"seniorSvc", d:"Elder abuse prevention, Medicare counseling, nursing home advocacy.", ph:"585-244-8400", url:"https://www.lifespan-roch.org", hr:"M-F 8am-5pm", doc:"None", tg:["sen"] },
  { id:"safejrny", n:"Safe Journey (Elder Abuse)", c:"seniorSvc", d:"Help for seniors experiencing physical, emotional, or financial abuse.", ph:"585-244-8400", url:"https://lifespan-roch.org", hr:"M-F 8am-5pm", doc:"None", tg:["sen"] },
  { id:"hiicap", n:"HIICAP (Free Medicare Counseling)", c:"seniorSvc", d:"Confused by Medicare? Free counselors explain your options — Medicare, Medicaid, supplemental plans, Part D. No sales, no agenda.", ph:"585-244-8400", url:"https://www.lifespan-roch.org/hiicap", hr:"M-F by appointment", doc:"Your Medicare card, list of medications", tg:["sen"], nt:"They also help with Medicare Savings Programs that can lower your costs." },
  { id:"seniorfarm", n:"Senior Farmers Market Nutrition Program", c:"seniorSvc", d:"Free coupons for fresh fruits and vegetables at farmers markets. For seniors 60+ with low income.", ph:"585-753-6280", url:"https://agriculture.ny.gov/farming/senior-farmers-market-nutrition-program", hr:"Summer season", doc:"Proof of age, proof of income", tg:["sen"] },
  { id:"seniorcenters", n:"City R-Centers (Senior Programs)", c:"seniorSvc", d:"Free senior programs at recreation centers across Rochester. Exercise, meals, socializing, games, trips.", ph:"311", url:"https://www.cityofrochester.gov", hr:"Varies by location", doc:"None", tg:["sen"] },
  { id:"ramp", n:"Eldersource (Home Modifications)", c:"seniorSvc", d:"Free or low-cost ramps, grab bars, stair lifts, and home repairs to help seniors stay in their homes safely.", ph:"585-325-2400", url:"https://eldersource.org", hr:"M-F", doc:"Proof of age, proof of income", tg:["sen"], nt:"Also helps with moving assistance and hoarding support." },
  { id:"eisep", n:"EISEP (In-Home Help for Seniors)", c:"seniorSvc", d:"Free in-home help for seniors 60+ who aren't on Medicaid. Personal care, housekeeping, case management, respite.", ph:"585-753-6280", url:"https://www.monroecounty.gov/aging", hr:"M-F", doc:"Proof of age, proof of income", tg:["sen"], nt:"For seniors who need help at home but don't qualify for Medicaid. Sliding scale." },

  // YOUTH
  { id:"te", n:"Teen Empowerment", c:"youth", d:"For ages 14-21. Leadership, paid jobs, community organizing, safe space.", ph:"585-445-5380", ad:"1298 Dewey Ave, Rochester NY 14613", url:"https://teenempowerment.org", hr:"After school", doc:"None", tg:["kids","any"] },
  { id:"yb", n:"Rochester Youth Bureau", c:"youth", d:"Connects young people to programs and services across Monroe County.", ph:"585-753-6280", url:"https://www.monroecounty.gov/hs-youth", hr:"M-F 8am-4pm", doc:"None", tg:["kids","any"] },
  { id:"cfy", n:"Center for Youth (Runaway/Homeless Youth)", c:"youth", d:"24-hour hotline and emergency shelter for youth ages 12-17. Counseling, housing, education support.", ph:"585-271-7670", ad:"905 Monroe Ave, Rochester NY 14620", url:"https://www.centerforyouth.net", hr:"24/7 hotline", doc:"None", tg:["kids","any"] },
  { id:"bgcroc", n:"Boys & Girls Club of Rochester", c:"youth", d:"After-school programs, sports, arts, tutoring, leadership. Safe space for kids ages 6-18. Multiple locations.", ph:"585-328-0990", url:"https://www.bgcrochester.org", hr:"After school + summer", doc:"None", tg:["kids","any"] },
  { id:"rcentersyouth", n:"City R-Centers (Youth Programs)", c:"youth", d:"Free after-school and summer programs at recreation centers across Rochester. Sports, homework help, arts, open gym.", ph:"311", url:"https://www.cityofrochester.gov", hr:"After school + weekends", doc:"None", tg:["kids","any"] },
  { id:"bbbs", n:"Big Brothers Big Sisters of Greater Rochester", c:"youth", d:"Free one-to-one mentoring. Every child matched with a caring adult volunteer. Ages 6-18.", ph:"585-232-2150", url:"https://www.bfroch.org", hr:"M-F 9am-5pm", doc:"None to apply", tg:["kids","any"] },
  { id:"ymcayouth", n:"YMCA of Greater Rochester (Youth)", c:"youth", d:"Youth sports, swim lessons, day camps, teen programs. Financial assistance available — no one turned away.", ph:"585-546-5500", url:"https://rochesterymca.org", hr:"Varies by branch", doc:"None — ask about financial assistance", tg:["kids","any"] },
  { id:"villaofhopeyouth", n:"Villa of Hope (Youth Services)", c:"youth", d:"Residential treatment, education, mental health, and support for at-risk youth.", ph:"585-328-0849", url:"https://www.villaofhope.org", hr:"M-F", doc:"Referral needed", tg:["kids"] },
  { id:"rcamps", n:"R-Camps (Free Summer Camp)", c:"youth", d:"City of Rochester free summer day camps. Sports, arts, field trips, lunch included.", url:"https://www.cityofrochester.gov/departments/department-recreation-and-human-services-drhs/r-camps-summer-programs", hr:"Summer registration opens spring", doc:"None", tg:["kids","any"] },
  { id:"l2e", n:"Learn2Earn (Center for Youth)", c:"youth", d:"Workforce development for older teens. Job readiness, paid internships, career exploration.", ph:"585-473-2464", url:"https://www.centerforyouth.net", hr:"M-F", doc:"None", tg:["kids","any"] },

  // DOMESTIC VIOLENCE
  { id:"willow", n:"Willow Center (Domestic Violence)", c:"domesticSvc", d:"24-hour hotline. Shelter. Counseling. Legal advocacy. Safety planning. You are not alone.", tr:{es:"Línea de ayuda 24 horas. Refugio. Consejería. No estás sola.",ne:"२४ घण्टे हटलाइन। आश्रय। परामर्श। तपाईं एक्लो हुनुहुन्न।",ar:"خط مساعدة 24 ساعة. مأوى. استشارة. لست وحدك.",so:"Khadka caawinta 24 saac. Hoy. Lataliye. Keligaa ma tihid.",sw:"Simu ya msaada masaa 24. Makazi. Ushauri. Huko peke yako.",my:"၂၄နာရီဖုန်းလိုင်း။ ခိုလှုံရာ။ အကြံပေး။ မင်းတစ်ယောက်တည်းမဟုတ်ဘူး။",zh:"24小时热线。庇护所。咨询。你不是一个人。"}, ph:"585-222-7233", url:"https://www.willowcenterny.org", hr:"24/7", doc:"Nothing — just call", tg:["dom","any"] },
  { id:"biv", n:"Bivona Child Advocacy Center", c:"domesticSvc", d:"One-stop for child abuse victims. Forensic interviews, therapy, medical exams, family advocacy.", ph:"585-935-7800", ad:"1 Mt. Hope Ave, Rochester NY 14620", url:"https://www.bivonacac.org", hr:"M-F 8:30am-5pm", doc:"None", tg:["kids"] },
  { id:"restore", n:"RESTORE Sexual Assault Services", c:"domesticSvc", d:"24-hour hotline for sexual assault survivors. Counseling, legal advocacy, hospital accompaniment.", ph:"585-546-2777", url:"https://restoresas.org", hr:"24/7 hotline", doc:"None", tg:["any"] },
  { id:"cps", n:"Child Protective Services (CPS)", c:"domesticSvc", d:"Report suspected child abuse or neglect. Anonymous.", ph:"585-753-6532", hr:"After hours: 585-753-2699", doc:"None", tg:["kids"] },
  { id:"nysdvh", n:"NYS Domestic Violence Hotline", c:"domesticSvc", d:"Statewide 24/7 hotline.", ph:"800-942-6906", url:"https://opdv.ny.gov", hr:"24/7", doc:"None", tg:["dom","any"] },
  { id:"ndvh", n:"National Domestic Violence Hotline", c:"domesticSvc", d:"24/7, multilingual.", ph:"800-799-7233", url:"https://thehotline.org", hr:"24/7 · Text START to 88788", doc:"None", tg:["dom","any"] },
  { id:"ncah", n:"National Child Abuse Hotline", c:"domesticSvc", d:"24/7 support for child abuse concerns.", ph:"800-422-4453", url:"https://childhelp.org", hr:"24/7", doc:"None", tg:["kids"] },
  { id:"rainn", n:"RAINN (Sexual Assault Hotline)", c:"domesticSvc", d:"24/7 national sexual assault hotline.", ph:"800-656-4673", url:"https://rainn.org", hr:"24/7", doc:"None", tg:["any"] },
  { id:"saathi", n:"Saathi of Rochester (South Asian Support)", c:"domesticSvc", d:"Help for South Asians facing domestic abuse. Helpline, crisis intervention, safety planning, legal assistance.", tr:{ne:"घरेलु हिंसा सामना गरिरहेका दक्षिण एशियालीहरूका लागि सहयोग।"}, url:"https://saathirochester.org", hr:"See website", doc:"None", tg:["dom","any"] },

  // DISABILITY
  { id:"rcil", n:"Center for Independent Living", c:"disabilitySvc", d:"Services for any disability. Housing, jobs, benefits, advocacy.", ph:"585-442-6470", url:"https://www.rcil.org", hr:"M-F 8:30am-5pm", doc:"None", tg:["dis"] },
  { id:"opwdd", n:"OPWDD (Developmental Disabilities)", c:"disabilitySvc", d:"State services: housing, day programs, support. START HERE if your loved one has a developmental disability — call to begin the eligibility process.", ph:"866-946-9733", url:"https://opwdd.ny.gov", hr:"M-F 9am-5pm", doc:"Disability documentation, diagnosis letter, Medicaid ID", tg:["dis"], nt:"The OPWDD process takes time. Call early. You'll need a psychological evaluation and diagnosis on file." },
  { id:"cproch", n:"CP Rochester", c:"disabilitySvc", d:"Services for cerebral palsy and developmental disabilities.", ph:"585-334-6000", url:"https://cprochester.org", hr:"Call for info", doc:"Varies", tg:["dis"] },
  { id:"marycariola", n:"Mary Cariola Children's Center", c:"disabilitySvc", d:"Education and services for children with severe disabilities.", ph:"585-271-0309", url:"https://marycariola.org", hr:"Call for info", doc:"Varies", tg:["dis","kids"] },
  { id:"earlyint", n:"Early Intervention (Ages 0-3)", c:"disabilitySvc", d:"FREE evaluation and services for babies and toddlers with developmental delays. Speech, physical therapy, special instruction. No diagnosis needed to refer.", ph:"585-753-5437", url:"https://www.monroecounty.gov/hs-earlyintervention", hr:"M-F 8am-4pm", doc:"None — any parent can call to request an evaluation", tg:["dis","kids","u5"], nt:"You do NOT need a doctor's referral. Any parent or caregiver can call directly. Services happen in your home." },
  { id:"cpse", n:"Preschool Special Ed (Ages 3-5)", c:"disabilitySvc", d:"Free special education services for preschool children with disabilities. Evaluations, therapy, specialized classrooms.", ph:"585-753-5437", url:"https://www.monroecounty.gov/hs-preschoolspecialed", hr:"M-F 8am-4pm", doc:"None to start — they evaluate your child", tg:["dis","kids","u5"] },
  { id:"cdpap", n:"CDPAP (You Get Paid to Care for Your Loved One)", c:"disabilitySvc", d:"Consumer Directed Personal Assistance Program — a family member or friend gets PAID by Medicaid to provide care. You choose who helps.", ph:"585-325-1880", url:"https://www.health.ny.gov/health_care/medicaid/program/longterm/cdpap.htm", hr:"M-F", doc:"Medicaid ID, doctor's order for home care", tg:["dis","sen","any"], nt:"This pays YOU to care for your loved one. The person receiving care must have Medicaid. Call a fiscal intermediary to start." },
  { id:"selfdirect", n:"Self-Direction (OPWDD)", c:"disabilitySvc", d:"You control your loved one's budget and services. Hire your own staff, choose your own programs. Maximum flexibility.", ph:"866-946-9733", url:"https://opwdd.ny.gov/self-direction", hr:"M-F", doc:"Must be OPWDD-eligible first", tg:["dis"], nt:"Self-direction gives families the most control. Must go through OPWDD eligibility first." },
  { id:"specialedadvocate", n:"Disability Rights NY (Special Ed Advocacy)", c:"disabilitySvc", d:"Free legal help for families fighting for special education services. IEP disputes, school placement, service denials.", ph:"800-993-8982", url:"https://www.drny.org", hr:"M-F 9am-5pm", doc:"IEP documents, school records", tg:["dis","kids"] },
  { id:"autismup", n:"Autism Up", c:"disabilitySvc", d:"Programs, social groups, camps, job training, and family support for people with autism. All ages.", ph:"585-248-9011", url:"https://www.autismup.org", hr:"M-F", doc:"None", tg:["dis","kids","any"] },
  { id:"arcmc", n:"The Arc of Monroe County", c:"disabilitySvc", d:"Day programs, employment, residential services, and family support for people with intellectual and developmental disabilities.", ph:"585-271-0660", url:"https://www.arcofmonroe.org", hr:"M-F 8am-4:30pm", doc:"OPWDD eligibility", tg:["dis"] },
  { id:"hcbs", n:"Home and Community Based Services Waiver", c:"disabilitySvc", d:"Medicaid waiver that funds services to keep your loved one at home instead of a facility. Respite, day programs, job coaching, home modifications.", ph:"585-753-6280", url:"https://www.health.ny.gov/health_care/medicaid/program/longterm/", hr:"M-F", doc:"Medicaid ID, OPWDD or nursing home level of care determination", tg:["dis","sen"], nt:"This is what keeps people OUT of institutions. Ask about the HCBS waiver specifically." },

  // REFUGEE / IMMIGRANT
  { id:"cfc", n:"Catholic Family Center (Refugees)", c:"refugeeSvc", d:"Resettlement, jobs, English classes, case management.", tr:{ne:"पुनर्स्थापना, रोजगारी, अंग्रेजी कक्षा, केस व्यवस्थापन।",ar:"إعادة التوطين، وظائف، دروس إنجليزية، إدارة حالات.",so:"Dib u dejin, shaqo, fasallada Ingiriisiga, maamulka kiisaska.",sw:"Makazi mapya, kazi, masomo ya Kiingereza, usimamizi wa kesi.",my:"ပြန်လည်နေရာချထားရေး၊ အလုပ်၊ အင်္ဂလိပ်စာ၊ ကိစ္စရပ်စီမံခန့်ခွဲမှု။",zh:"安置、就业、英语课程、个案管理。"}, ph:"585-262-7050", ad:"87 N Clinton Ave, Rochester NY 14604", url:"https://www.cfcrochester.org", hr:"M-F 8:30am-5pm", doc:"Immigration documents", tg:["any"] },
  { id:"ibero", n:"Ibero-American Action League", c:"refugeeSvc", d:"ESL, jobs, legal help, housing, education. Bilingual staff.", ph:"585-256-8900", ad:"817 E Main St, Rochester NY 14605", url:"https://iaal.org", hr:"M-F 9am-5pm", doc:"Varies", tg:["any"] },
  { id:"maryplace", n:"Mary's Place (Refugee Welcome)", c:"refugeeSvc", d:"Clothing, household items, orientation for newly arrived refugees.", tr:{ne:"नयाँ आएका शरणार्थीहरूका लागि लुगा, घरायसी सामान, अभिमुखीकरण।",ar:"ملابس ومستلزمات منزلية وتوجيه للاجئين الجدد.",so:"Dharka, alaabta guriga, iyo hagitaanka qaxootiga cusub.",sw:"Nguo, vifaa vya nyumbani, na mwongozo kwa wakimbizi wapya.",my:"အသစ်ရောက်ဒုက္ခသည်များအတွက် အဝတ်အစား၊ အိမ်သုံးပစ္စည်း၊ လမ်းညွှန်။"}, ph:"585-232-2590", ad:"55 St. Paul St, Rochester NY 14604", url:"https://www.marysplaceoutreach.org", hr:"Mon/Wed/Fri 10am-2pm", doc:"Refugee documentation", tg:["any"] },
  { id:"urbanleague", n:"Urban League of Rochester", c:"legal", d:"Jobs, housing, education, entrepreneurship, and advocacy for Black community and all underserved residents.", ph:"585-325-6530", ad:"265 N Clinton Ave, Rochester NY 14605", url:"https://www.urbanleagueroc.org", hr:"M-F 9am-5pm", doc:"Varies by program", tg:["any"] },
  { id:"naacp", n:"NAACP Rochester (Branch 2172)", c:"legal", d:"Civil rights advocacy, voter registration, education equity, criminal justice reform.", url:"https://www.rocnynaacp2172.org", hr:"See website", doc:"None", tg:["any"] },
  { id:"scoec", n:"Somali Community Outreach & Education Center", c:"refugeeSvc", d:"English classes, citizenship prep, translation/interpretation, case management.", tr:{so:"Fasallada Ingiriisiga, diyaarinta muwaadinnimada, turjumaadda, maamulka kiisaska."}, url:"https://www.guidestar.org/profile/26-2367811", hr:"M-F", doc:"None", tg:["any"] },
  { id:"rhrroc", n:"Refugees Helping Refugees", c:"refugeeSvc", d:"ESL classes, case management, youth programs, senior services. Volunteer-run, all refugees.", tr:{so:"Fasallada ESL, maamulka kiisaska, barnaamijyada dhalinyarada.",sw:"Madarasa ya ESL, usimamizi wa kesi, programu za vijana."}, ph:"585-563-7747", ad:"228 S Plymouth Ave, Rochester NY 14608", url:"https://rhrroc.org", hr:"M-F", doc:"None", tg:["any"] },
  { id:"rrrs", n:"Rochester Refugee Resettlement Services", c:"refugeeSvc", d:"Housing, case management, and support for refugee families. Full wrap-around assistance.", tr:{ne:"शरणार्थी परिवारका लागि आवास, केस व्यवस्थापन, र सहयोग।",so:"Guryaha, maamulka kiisaska, iyo taageerada qoysaska qaxootiga.",sw:"Makazi, usimamizi wa kesi, na msaada kwa familia za wakimbizi.",my:"ဒုက္ခသည်မိသားစုများအတွက် အိမ်ရာ၊ ကိစ္စရပ်စီမံခန့်ခွဲမှု။",ar:"السكن وإدارة الحالات والدعم لعائلات اللاجئين."}, url:"https://www.rochesterrefugeeservices.org", hr:"M-F", doc:"None", tg:["any"] },

  // EDUCATION
  { id:"ged", n:"Free GED / High School Equivalency", c:"education", d:"Free classes for your high school diploma. Day and evening.", ph:"585-262-8100", url:"https://www.rcsdk12.org/adulted", hr:"M-F day and evening", doc:"ID", tg:["any"] },
  { id:"esl", n:"Free English Classes (ESL)", c:"education", d:"Learn English for free. Multiple locations.", ph:"585-262-8100", url:"https://www.literacyrochester.org", hr:"Various schedules", doc:"None", tg:["any"] },
  { id:"lib", n:"Rochester Public Library", c:"education", d:"Free computers, WiFi, printing, homework help, job search help. Library card is free.", ph:"585-428-7300", ad:"115 South Ave, Rochester NY 14604", url:"https://roccitylibrary.org", hr:"M-Sat varies by branch", doc:"Proof of address for card", tg:["any"] },
  { id:"mcc", n:"Monroe Community College (MCC)", c:"education", d:"Affordable college — ~$2,450/semester. 100+ programs. Financial aid, tutoring, food bank, child care.", ph:"585-292-2000", ad:"1000 E Henrietta Rd, Rochester NY 14623", url:"https://www.monroecc.edu", hr:"See website", doc:"Apply online — no application fee", tg:["any"] },
  { id:"pathwaysmcc", n:"Pathways to MCC (Free College + GED)", c:"education", d:"FREE: earn your diploma AND college credits. No tuition, free tutoring, laptop, bus pass.", ph:"585-292-2000", url:"https://www.monroecc.edu/admissions/pathways-to-college/", hr:"See website", doc:"Must be 16+", tg:["any"] },
  { id:"reoc", n:"Rochester Educational Opportunity Center (REOC)", c:"education", d:"TUITION-FREE academic and workforce programs. GED, ESL, healthcare training, IT, culinary, CDL.", ph:"585-232-2730", ad:"161 Chestnut St, Rochester NY 14604", url:"https://www.brockport.edu/reoc/", hr:"M-F", doc:"Proof of income for eligibility", tg:["any"] },
  { id:"excelsior", n:"Excelsior Scholarship (Free SUNY/CUNY Tuition)", c:"education", d:"NYS program covering SUNY/CUNY tuition for families earning under $125,000.", url:"https://www.hesc.ny.gov/pay-for-college/financial-aid/types-of-financial-aid/nys-grants-scholarships-awards/the-excelsior-scholarship.html", hr:"Apply during FAFSA season", doc:"FAFSA required", tg:["any"] },

  // LGBTQ+
  { id:"outalliance", n:"Out Alliance", c:"lgbtq", d:"LGBTQ+ community center. Support groups, counseling, youth programs, HIV services.", ph:"585-244-8640", ad:"100 College Ave, Rochester NY 14607", url:"https://outalliance.org", hr:"See website", doc:"None", tg:["any"] },
  { id:"mocha", n:"MOCHA Center", c:"lgbtq", d:"Services for LGBTQ+ people of color. HIV prevention, support groups, advocacy.", ph:"585-420-1400", url:"https://mochacenter.org", hr:"See website", doc:"None", tg:["any"] },
  { id:"trilllgbtq", n:"Trillium Health (Gender-Affirming Care)", c:"lgbtq", d:"Gender-affirming hormone therapy, PrEP, primary care, mental health, dental. Sliding scale. Rochester's LGBTQ+ healthcare leader.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None required", tg:["any"] },
  { id:"translifeline", n:"Trans Lifeline", c:"lgbtq", d:"Peer support hotline run by and for trans people. Confidential, 24/7. They will not contact police.", ph:"877-565-8860", url:"https://translifeline.org", hr:"24/7", doc:"None", tg:["any"] },
  { id:"trevor", n:"The Trevor Project (LGBTQ+ Youth Crisis)", c:"lgbtq", d:"24/7 crisis support for LGBTQ+ youth under 25. Call, text, or chat. Free and confidential.", ph:"866-488-7386", url:"https://www.thetrevorproject.org", hr:"24/7 — also text START to 678-678", doc:"None", tg:["kids","any"] },
  { id:"pflag", n:"PFLAG Rochester", c:"lgbtq", d:"Support, education, and advocacy for LGBTQ+ people and their families. Monthly meetings, welcoming to all.", url:"https://pflag.org/chapter/pflag-rochester/", hr:"Monthly meetings — see website", doc:"None", tg:["any"] },

  // VETERANS
  { id:"va", n:"VA Healthcare (Veterans)", c:"veteranSvc", d:"Medical care, mental health, substance abuse treatment for veterans.", ph:"585-463-2600", ad:"400 Fort Hill Ave, Canandaigua NY 14424", url:"https://www.va.gov/rochester-health-care/", hr:"M-F 7:30am-4pm", doc:"DD-214, VA ID", tg:["vet"] },
  { id:"voa", n:"VOA Veterans Housing", c:"veteranSvc", d:"Transitional housing for homeless veterans. 24/7 intake.", ph:"585-454-1150", url:"https://www.voaupstateny.org", hr:"24/7", doc:"Proof of veteran status", tg:["vet"] },
  { id:"voc", n:"Veterans Outreach Center", c:"veteranSvc", d:"One-stop for veterans. Housing, jobs, counseling, emergency help, legal, food, clothing.", ph:"585-546-1081", ad:"459 South Ave, Rochester NY 14620", url:"https://veteransoutreach.org", hr:"M-F 9am-4:30pm", doc:"Varies", tg:["vet"] },
  { id:"vetcrisis", n:"Veterans Crisis Line", c:"veteranSvc", d:"24/7 for veterans in crisis. Call 988 — press 1 for veterans. Or text 838255.", ph:"988", url:"https://www.veteranscrisisline.net", hr:"24/7", doc:"None", tg:["vet"] },

  // TRANSPORTATION
  { id:"rts", n:"RTS Bus Service", c:"transport", d:"Rochester's public bus system. Reduced fare for seniors, disabled, and Medicare recipients.", ph:"585-288-1700", url:"https://www.myrts.com", hr:"See schedule online", doc:"RTS reduced fare ID for discounts", tg:["any"] },
  { id:"ebtbus", n:"EBT Bus Pass", c:"transport", d:"If you receive Temporary Assistance, use your EBT card to ride RTS buses. Ask DSS for details.", ph:"585-753-6960", url:"https://www.monroecounty.gov/hs", hr:"M-F 8am-4pm", doc:"Your EBT card", tg:["hh"] },
  { id:"medicaidride", n:"Medicaid Transportation (Free Medical Rides)", c:"transport", d:"Free rides to medical appointments for Medicaid members. Schedule 3+ days ahead.", ph:"866-932-7740", url:"https://www.health.ny.gov/health_care/medicaid/members/medtrans_overview.htm", hr:"M-F", doc:"Medicaid ID", tg:["hh"] },
  { id:"lifespantrans", n:"Lifespan Transportation Help", c:"transport", d:"Free mobility specialists for 60+ or disabled. They know all the options.", ph:"585-244-8400 ext.244", url:"https://www.lifespan-roch.org/transportation", hr:"M-F", doc:"None", tg:["sen","dis"] },
  { id:"ticket2ride", n:"Ticket2Ride (Justice-Involved)", c:"transport", d:"Free bus passes for people in the criminal justice system.", url:"https://www.ticket2riderochester.org", hr:"See website", doc:"None", tg:["any"] },

  // INTERNET & PHONE
  { id:"lifeline", n:"FCC Lifeline Program ($9.25/mo Off)", c:"internet", d:"Permanent federal program. $9.25/mo off phone or internet. SNAP, Medicaid, SSI, or public housing qualifies.", url:"https://www.lifelinesupport.org", hr:"Apply online anytime", doc:"Proof of program participation or income", tg:["hh"] },
  { id:"nyaba", n:"NY Affordable Broadband Act", c:"internet", d:"NYS law: ISPs must offer $15/mo or $20/mo internet to low-income households.", url:"https://www.ny.gov", hr:"Contact your ISP", doc:"Proof of SNAP, Medicaid, or income below 185% FPL", tg:["hh"] },
  { id:"vzforward", n:"Verizon Forward (Discounted Internet)", c:"internet", d:"Discounted Fios/5G for SNAP, Medicaid, WIC, or Pell Grant recipients.", url:"https://www.verizon.com/discounts/verizon-forward/", hr:"Apply online", doc:"Proof of benefits", tg:["hh"] },
  { id:"libhotspot", n:"Library WiFi Hotspot Lending", c:"internet", d:"Borrow a WiFi hotspot for free from Rochester Public Library. Take internet home.", ph:"585-428-7300", url:"https://roccitylibrary.org", hr:"Library hours", doc:"Library card (free with proof of address)", tg:["any"] },
  { id:"pcsforpeople", n:"PCs for People (Low-Cost Computers)", c:"internet", d:"Refurbished computers for people at or below 200% FPL. Also offers low-cost internet.", url:"https://www.pcsforpeople.org", hr:"See website", doc:"Proof of income or benefits", tg:["hh"] },

  // CLOTHING
  { id:"opendoor", n:"Open Door Mission (Clothing & Meals)", c:"clothing", d:"Free clothing for men, women, children. Three hot meals daily. Open to anyone.", ph:"585-325-3370", ad:"156 N Plymouth Ave, Rochester NY 14608", url:"https://opendoormission.com", hr:"See website", doc:"None", tg:["any"] },
  { id:"salvationarmy", n:"Salvation Army (Food, Clothing, Vouchers)", c:"clothing", d:"Food bags, hygiene products, clothing and bus vouchers. Multiple locations.", ph:"585-987-9500", ad:"70 Liberty Pole Way, Rochester NY 14604", url:"https://rochesterny.salvationarmy.org", hr:"M-F 9am-1pm", doc:"None", tg:["any"] },
  { id:"freestore", n:"Rochester Free Store", c:"clothing", d:"Free clothing, household items, small appliances. 3rd Saturday each month.", ph:"585-353-9882", hr:"3rd Saturday 3:30-5pm", doc:"None", tg:["any"] },
  { id:"baden", n:"Baden Street Settlement", c:"clothing", d:"Clothing house, food pantry, emergency assistance, free haircuts.", ph:"585-254-2697", ad:"152 Baden St, Rochester NY 14605", hr:"M-F 8:30am-4pm", doc:"Photo ID for food pantry", tg:["any"] },
  { id:"dimitri", n:"Dimitri House", c:"clothing", d:"Food pantry, personal care products, clothing. Walk-in.", ph:"585-325-1796", ad:"1 Shelter St, Rochester NY 14611", url:"https://www.dimitrihouse.org", hr:"See website", doc:"None", tg:["any"] },

  // RE-ENTRY
  { id:"rawny", n:"Reentry Association of Western NY (RAWNY)", c:"reentry", d:"One-stop reentry help: housing, jobs, ID, benefits, peer mentors, legal.", ph:"585-851-8886", ad:"186-188 N Water St, Rochester NY", url:"https://www.rawny.org", hr:"M-F", doc:"None — no wrong door", tg:["any"] },
  { id:"cityreentry", n:"City of Rochester Reentry Program", c:"reentry", d:"Resources for people returning from incarceration. Housing, jobs, conflict resolution.", url:"https://www.cityofrochester.gov/departments/office-violence-prevention/reentry-program", hr:"M-F", doc:"None", tg:["any"] },
  { id:"voareentry", n:"VOA Residential Reentry", c:"reentry", d:"Transitional housing, case management, employment help, life skills.", ph:"585-454-1150", url:"https://www.voaupny.org/services/reentry/", hr:"Call for intake", doc:"Varies", tg:["any"] },
  { id:"delphirise", n:"Delphi Rise Reentry", c:"reentry", d:"Case management for people released from NYS prisons. Treatment, housing, employment.", url:"https://delphirise.org", hr:"Call for info", doc:"Varies", tg:["any"] },
  { id:"spiritus", n:"Spiritus Christi Prison Outreach", c:"reentry", d:"Residential wraparound support for people re-entering from jail or prison.", url:"https://www.spirituschristi.org", hr:"Call for info", doc:"Varies", tg:["any"] },
  { id:"jpc", n:"Judicial Process Commission", c:"reentry", d:"Help getting RAP sheets, Certificates of Rehabilitation, mentoring.", ph:"585-325-7727", url:"https://www.rocjpc.org", hr:"M-F", doc:"None", tg:["any"] },

  // PETS
  { id:"rochpets", n:"Rochester Hope For Pets", c:"pets", d:"Grants toward emergency vet care for pet owners who can't afford it.", ph:"585-532-7406", url:"https://www.rochesterhopeforpets.org", hr:"M-F 9am-3pm", doc:"Vet estimate required", tg:["any"] },
  { id:"all4pets", n:"All 4 Pets WNY", c:"pets", d:"One-time grant for medical care for pets whose owners can't afford it.", ph:"585-727-5142", url:"https://www.all4petswny.org", hr:"See website", doc:"Vet estimate", tg:["any"] },
  { id:"lollypop", n:"Lollypop Farm (Pet Food & Spay/Neuter)", c:"pets", d:"Pet food pantry, low-cost spay/neuter, behavior helpline.", ph:"585-223-1330", url:"https://www.lollypop.org", hr:"See website", doc:"Proof of income for SNIP program", tg:["any"] },
  { id:"raspetfood", n:"Rochester Animal Services Pet Food Pantry", c:"pets", d:"Free pet food for City of Rochester residents. 2nd and 4th Friday of each month.", ph:"585-428-7008", url:"https://www.cityofrochester.gov/departments/department-recreation-and-human-services-drhs/rochester-animal-services-community-pet", hr:"2nd & 4th Fridays", doc:"Proof of Rochester residency", tg:["any"] },
  { id:"rcac", n:"Rochester Community Animal Clinic", c:"pets", d:"Low-cost vet care and spay/neuter for all pet owners. Walk-in wellness clinic.", ph:"585-288-0600", ad:"985 Bay St, Rochester NY 14609", url:"https://rochestercommunityanimalclinic.com", hr:"See website", doc:"None", tg:["any"] },

  // HIV/STI
  { id:"mcstd", n:"Monroe County Sexual Health Clinic", c:"hivsti", d:"Free and confidential STI/HIV testing and treatment. No ID required.", ph:"585-753-5481", ad:"855 W Main St, Rochester NY 14611", url:"https://www.monroecounty.gov/health-nursing-STD-HIV", hr:"See website for walk-in hours", doc:"None — anonymous testing available", tg:["any"] },
  { id:"trillhiv", n:"Trillium Health (HIV/STI)", c:"hivsti", d:"Free at-home STI and HIV test kits. PrEP prescriptions. Comprehensive sexual health.", ph:"585-545-7200", ad:"259 Monroe Ave, Rochester NY 14607", url:"https://trilliumhealth.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"mochahiv", n:"MOCHA Center (HIV Prevention)", c:"hivsti", d:"HIV prevention, free testing, support groups for LGBTQ+ people of color.", ph:"585-420-1400", url:"https://mochacenter.org", hr:"See website", doc:"None", tg:["any"] },
  { id:"outallhiv", n:"Out Alliance (HIV Services)", c:"hivsti", d:"HIV testing, prevention education, support services. Open to everyone.", ph:"585-244-8640", ad:"100 College Ave, Rochester NY 14607", url:"https://outalliance.org", hr:"See website", doc:"None", tg:["any"] },

  // WEATHER / HEATING-COOLING
  { id:"codeblue", n:"Code Blue Warming Centers", c:"weather", d:"When temps drop below 32°F, warming centers open across Rochester. Free RTS bus rides to shelters.", ph:"211", url:"https://www.monroecounty.gov", hr:"Nov-Apr when activated", doc:"None", tg:["any"], nt:"Sites include Open Door Mission, House of Mercy, Saving Grace. Free RTS to all sites." },
  { id:"coolsweep", n:"Cool Sweep (Summer Cooling Centers)", c:"weather", d:"When temps hit 85°F+, R-Centers and libraries open as cooling centers. Free.", url:"https://www.cityofrochester.gov/departments/emergency-management/cool-sweep-how-stay-cool-during-summer-heat", hr:"Summer, activated by heat", doc:"None", tg:["any"] },
  { id:"rcenters", n:"City R-Centers (Year-Round)", c:"weather", d:"Recreation centers across Rochester. Indoor space, programs, air conditioning/heat. Free.", ph:"311", url:"https://www.cityofrochester.gov", hr:"Varies by location", doc:"None", tg:["any"] },

  // DOCUMENTS
  { id:"mcvital", n:"Monroe County Vital Records", c:"documents", d:"Birth certificate or death certificate. $30 per certified copy. Need photo ID.", ph:"585-753-5141", ad:"740 E Henrietta Rd, Rochester NY 14623", url:"https://www.monroecounty.gov/health-vitalrecords", hr:"M-F 8:30am-4:30pm", doc:"Photo ID", tg:["any"] },
  { id:"ssaroch", n:"Social Security Office (Free SSN Card)", c:"documents", d:"Replacement Social Security card is FREE. Need birth certificate + photo ID.", ph:"800-772-1213", ad:"200 E Main St, 2nd Floor, Rochester NY 14604", url:"https://www.ssa.gov/ssnumber/", hr:"M-F, by appointment", doc:"Birth certificate + photo ID", tg:["any"] },
  { id:"dmvid", n:"DMV Non-Driver ID Card", c:"documents", d:"NYS photo ID that isn't a driver's license. Need SSN card + proof of citizenship.", ph:"518-486-9786", url:"https://dmv.ny.gov/id-card/get-non-driver-id-card-ndid", hr:"By appointment", doc:"Social Security card, proof of citizenship", tg:["any"] },
  { id:"passport", n:"Passport Office (City Hall)", c:"documents", d:"Apply for U.S. passport at City Clerk's Office. $130 book + $35 processing.", ph:"585-428-7045", ad:"30 Church St, Room 100A, Rochester NY 14614", url:"https://www.cityofrochester.gov/departments/city-clerk/passports", hr:"M-F 9:30am-4pm", doc:"Birth certificate, photo ID, passport photo, payment", tg:["any"] },
  { id:"uscis", n:"USCIS Buffalo (Green Card, Citizenship, Visa)", c:"documents", d:"Federal immigration office serving Rochester. Must have an appointment.", ph:"800-375-5283", url:"https://www.uscis.gov", hr:"M-F 8am-3pm (Buffalo office)", doc:"Varies by application", tg:["any"] },
  { id:"newhopeilm", n:"New Hope Immigration Legal Services", c:"documents", d:"Low-cost immigration help. Citizenship, green cards, family visas, work permits. $5 intake fee.", ph:"585-760-4328", url:"http://www.newhopefree.org/ils", hr:"By appointment", doc:"All immigration/travel documents you have", tg:["any"] },
  { id:"cfcimmig", n:"Catholic Charities Immigration Services", c:"documents", d:"Citizenship prep, naturalization applications, family petitions. DOJ-accredited representatives.", ph:"585-546-7220", ad:"87 N Clinton Ave, Rochester NY 14604", url:"https://ww2.fcscharities.org/services/immigration/", hr:"M-F, by appointment", doc:"Immigration documents, tax returns, IDs", tg:["any"] },
  { id:"rawnyid", n:"RAWNY (Help Getting Any Documents)", c:"documents", d:"They help you figure out what documents you need and how to get them. Not just for formerly incarcerated.", ph:"585-851-8886", ad:"186-188 N Water St, Rochester NY", url:"https://www.rawny.org", hr:"M-F", doc:"None — they help you figure out what you need", tg:["any"] },
  { id:"libid", n:"Rochester Public Library (Document Help)", c:"documents", d:"Free step-by-step guide for getting ID documents. Staff walk you through it. Free notary at some branches.", ph:"585-428-7300", ad:"115 South Ave, Rochester NY 14604", url:"https://roccitylibrary.org", hr:"M-Sat varies by branch", doc:"None", tg:["any"] },

  // CRISIS NURSERY
  { id:"crisisnursery", n:"Crisis Nursery of Greater Rochester", c:"crisisChild", d:"FREE emergency childcare during ANY family crisis. Ages 0-14. Up to 2 weeks. 24/7. No CPS involvement.", tr:{es:"Cuidado de niños de emergencia GRATIS. Edades 0-14. Hasta 2 semanas. 24/7.",ne:"कुनै पनि पारिवारिक संकटमा निःशुल्क आपतकालीन बालस्याहार।",ar:"رعاية أطفال طارئة مجانية خلال أي أزمة عائلية. 24/7.",so:"Daryeelka degdegga ah ee caruurta oo BILAASH ah. 24/7.",sw:"Malezi ya BURE ya dharura kwa watoto. 24/7.",my:"မည်သည့်မိသားစုအကြပ်အတည်းမှာမဆို အခမဲ့ကလေးထိန်း။ ၂၄/၇။",zh:"任何家庭危机期间的免费紧急儿童托管。24/7。"}, ph:"585-235-5750", ad:"201 Genesee Park Blvd, Rochester NY 14619", url:"https://www.centerforyouth.net/crisis-nurseries/", hr:"24/7, 365 days a year", doc:"None — intake done by phone", tg:["kids","any"] },
  { id:"owenshouse", n:"Owen's House (Crisis Nursery East)", c:"crisisChild", d:"Second Crisis Nursery on the east side. Same free emergency childcare, 24/7.", ph:"585-482-2561", ad:"Rosewood Terrace, Rochester NY", url:"https://www.centerforyouth.net/crisis-nurseries/", hr:"24/7, 365 days a year", doc:"None — intake done by phone", tg:["kids","any"] },

  // VISION
  { id:"vsphope", n:"VSP Eyes of Hope (Free Exam + Glasses)", c:"vision", d:"Free eye exam and free glasses for uninsured adults and children.", url:"https://www.vsp.com/eyes-of-hope", hr:"Apply online, find a local provider", doc:"Proof that you are uninsured", tg:["any"] },
  { id:"lionsclub", n:"Lions Club Rochester (Free Eyeglasses)", c:"vision", d:"The Lions Club provides free eyeglasses to people in need.", url:"https://www.lionsclubs.org", hr:"Contact for info", doc:"Varies", tg:["any"] },
  { id:"medicaidvision", n:"Medicaid Vision Coverage", c:"vision", d:"If you have Medicaid, eye exams and glasses are covered at no cost.", ph:"585-753-6960", url:"https://nystateofhealth.ny.gov", hr:"Any Medicaid-accepting optical", doc:"Your Medicaid card", tg:["hh"] },

  // FUNERAL
  { id:"mcburial", n:"Monroe County Burial Assistance", c:"funeral", d:"If you can't afford a funeral, Monroe County can help cover burial costs.", ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", hr:"M-F 8am-4pm", doc:"Death certificate, proof of income/inability to pay", tg:["any"] },
  { id:"medicaidburial", n:"Medicaid Burial Allowance (NYS)", c:"funeral", d:"New York State provides a burial allowance for Medicaid recipients.", ph:"585-753-6960", url:"https://www.health.ny.gov", hr:"Contact DSS", doc:"Medicaid documentation, death certificate", tg:["hh"] },
  { id:"salvburial", n:"Salvation Army (Emergency Funeral Help)", c:"funeral", d:"The Salvation Army can sometimes help with emergency funeral costs.", ph:"585-987-9500", ad:"70 Liberty Pole Way, Rochester NY 14604", url:"https://rochesterny.salvationarmy.org", hr:"M-F 9am-1pm", doc:"Varies — call to ask", tg:["any"] },

  // CAREGIVER
  { id:"lifespancare", n:"Lifespan Caregiver Resource Center", c:"caregiver", d:"Free support for people caring for an aging or disabled loved one. Counseling, support groups, respite.", ph:"585-244-8400", url:"https://www.lifespan-roch.org", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"namifamily", n:"NAMI Family Support Group", c:"caregiver", d:"Free support group for family members of people living with mental illness.", ph:"585-423-1500", url:"https://namiroc.org", hr:"See website for schedule", doc:"None", tg:["any"] },
  { id:"mcrespite", n:"Monroe County Respite Services", c:"caregiver", d:"Temporary relief for caregivers. Someone watches your loved one so you can rest.", ph:"585-753-6280", url:"https://www.monroecounty.gov/aging", hr:"M-F 8am-4pm", doc:"Contact for eligibility", tg:["sen","dis"] },
  { id:"alz", n:"Alzheimer's Association Rochester", c:"caregiver", d:"24/7 helpline, support groups, education, and care planning for Alzheimer's and dementia caregivers.", ph:"800-272-3900", url:"https://www.alz.org", hr:"24/7 helpline", doc:"None", tg:["any"] },
  { id:"carenavigator", n:"NY Connects (Care Navigator)", c:"caregiver", d:"Don't know where to start? NY Connects helps you figure out which services exist for your loved one and how to apply. Free. Covers disability, aging, and long-term care.", ph:"585-753-6280", url:"https://www.monroecounty.gov/aging", hr:"M-F 8am-4pm", doc:"None — just call and describe your situation", tg:["any","dis","sen"], nt:"This is the single best first call for any caregiver who doesn't know what services are available." },
  { id:"cdpapcg", n:"CDPAP (Get Paid to Be Their Caregiver)", c:"caregiver", d:"You may qualify to get PAID by Medicaid for the care you're already providing. Any family member or friend can apply.", ph:"585-325-1880", url:"https://www.health.ny.gov/health_care/medicaid/program/longterm/cdpap.htm", hr:"M-F", doc:"Your loved one needs Medicaid + a doctor's order for home care", tg:["dis","sen","any"], nt:"Many caregivers don't know this exists. If your loved one has Medicaid, ask about CDPAP." },
  { id:"parentnetwork", n:"Parent Network of WNY", c:"caregiver", d:"Parent-to-parent support for families of children with special needs. Help navigating school, services, and systems.", ph:"716-332-4170", url:"https://parentnetworkwny.org", hr:"M-F", doc:"None", tg:["kids","dis","any"] },
  { id:"familyvoices", n:"Family Voices of NY", c:"caregiver", d:"Help for families of children with special healthcare needs. Insurance navigation, care coordination, advocacy.", url:"https://fvny.org", hr:"M-F", doc:"None", tg:["kids","dis","any"] },

  // PARENTAL PROTECTION — Orders of Protection, Family Court, Custody Safety
  // ── LEGAL DISCLAIMER: Information only. Not legal advice. Consult a lawyer for your situation. ──
  // ── New York Family Court OPs are civil. Criminal OPs come through City/Criminal Court. ──
  // ── Violation of a valid Order of Protection is a CRIMINAL OFFENSE in New York State. ──
  { id:"familycourt", n:"Monroe County Family Court", c:"parentalProtection", d:"File for an Order of Protection, custody, visitation, or child support. Emergency Temporary Orders of Protection (ETOP) can be issued the same day you file. You do NOT need a lawyer to file.", ph:"585-371-3490", ad:"99 Exchange Blvd, Rochester NY 14614", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", hr:"M-F 9am-4:30pm (arrive early — allow several hours)", doc:"Photo ID; respondent's full name, DOB, last known address; children's full names and DOBs; any police reports, screenshots of threatening texts, photos of injuries, or medical records; any existing court orders. All court forms are FREE at the clerk window.", tg:["any"], nt:"Ask the clerk for a 'Family Offense Petition' to get an Order of Protection, or a 'Petition for Custody/Visitation.' No filing fee for family offense petitions. A judge can issue an Emergency Temporary Order of Protection on the spot if they find immediate danger. The other parent is served AFTER you leave — they do not know you filed until after it is issued." },
  { id:"rochcitycourt", n:"Rochester City Court — Criminal Order of Protection", c:"parentalProtection", d:"If police responded and made an arrest, a Criminal Order of Protection may be issued automatically at arraignment. You can request conditions be added. Contact the DA's Victim Assistance Unit for help navigating this.", ph:"585-428-2444", ad:"185 Exchange Blvd, Rochester NY 14614", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/cityct/index.shtml", hr:"M-F 9am-5pm", doc:"Your case/complaint number if available. Police report.", tg:["any"], nt:"Criminal OPs are issued as part of a criminal case — not the same as a Family Court OP. You can have BOTH at the same time. Contact DA Victim Assistance: 585-753-4750." },
  { id:"daunit", n:"Monroe County DA — Victim Assistance Unit", c:"parentalProtection", d:"Support for crime victims involving family members. Help navigating criminal orders of protection, court hearings, and safety planning. Free and confidential.", ph:"585-753-4750", ad:"47 S Fitzhugh St, Rochester NY 14614", url:"https://www.monroecounty.gov/da", hr:"M-F 9am-5pm", doc:"Police report if available. They can assist even without a prior report.", tg:["any"] },
  { id:"selfhelpcourt", n:"NY Courts Self-Help (Free Court Forms)", c:"parentalProtection", d:"Free downloadable forms for Order of Protection, custody, visitation, and child support in New York. Step-by-step plain-language instructions included.", url:"https://www.nycourts.gov/courthelp/", hr:"24/7 online", doc:"None — forms are free and downloadable", tg:["any"], nt:"Start here before going to court. Search for 'Family Court' forms. The OCA packet explains every step." },
  { id:"familycourthelp", n:"Family Court Self-Help Center (Courthouse)", c:"parentalProtection", d:"Free in-person help filling out Family Court forms at the courthouse. Legal Aid volunteers on-site. No appointment needed.", ph:"585-232-4090", ad:"99 Exchange Blvd, 1st Floor (Family Court)", url:"https://lasroc.org", hr:"M-F 9am-12pm and 1pm-4pm (call ahead)", doc:"Bring everything: ID, police reports, photos, texts, medical records, any existing orders.", tg:["any"] },
  { id:"supervvisit", n:"Supervised Visitation — Monroe County", c:"parentalProtection", d:"If you have safety concerns about the other parent being alone with your child, the court can order supervised visitation or supervised exchanges. Must be requested from a judge.", ph:"585-371-3490", ad:"99 Exchange Blvd (Family Court)", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/family/index.shtml", hr:"Request through Family Court", doc:"Court order required. Tell your attorney or the judge that you are requesting supervised visitation due to safety concerns.", tg:["any","kids"], nt:"'Safe exchange' (custody swap in a neutral monitored location) can also be court-ordered separately. Both can be in effect at the same time." },
  { id:"mclerk", n:"Monroe County Clerk — File Court Papers & Get Certified Copies", c:"parentalProtection", d:"File court documents, obtain certified copies of orders of protection, search case records. If you cannot afford fees, ask about Poor Person Relief (fee waiver).", ph:"585-753-1600", ad:"39 W Main St, Rochester NY 14614", url:"https://www.monroecounty.gov/clerk", hr:"M-F 8am-5pm", doc:"Filing fees may apply. Ask staff about 'Poor Person Relief' — the fee waiver form — if cost is a barrier.", tg:["any"], nt:"Keep certified copies of ALL orders of protection on your person. Give one to your child's school, one to your employer if appropriate, and one to your phone's photo library." },
  { id:"townhall", n:"Rochester City Hall — City Services & Emergency Help", c:"parentalProtection", d:"City Hall connects residents to city services including housing inspection, emergency assistance, and council member constituent help. Your City Council member can help if city agencies aren't responding.", ph:"585-428-5990", ad:"30 Church St, Rochester NY 14614", url:"https://www.cityofrochester.gov", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"mclegislature", n:"Monroe County Legislature — County Services", c:"parentalProtection", d:"Your County Legislator can help escalate county service issues — DSS, housing, child services. Find your district representative on the county website.", ph:"585-753-1950", ad:"39 W Main St, Rochester NY 14614", url:"https://www.monroecounty.gov/legislature", hr:"M-F 8am-5pm", doc:"None", tg:["any"] },
  { id:"willowsafety", n:"Willow Center — Safety Planning for Parents", c:"parentalProtection", d:"24-hour hotline. Crisis counselors help you and your children create a safety plan. Help understanding your legal options including orders of protection and custody safety.", ph:"585-222-7233", url:"https://www.willowcenterny.org", hr:"24/7 — call or text", doc:"Nothing needed — just call", tg:["any"], nt:"Safety planning is free and can be done by phone. A counselor will help you think through what to do if the order is violated, how to talk to your children, and what evidence to preserve." },
  { id:"lawnyparent", n:"LawNY — Free Family Law Legal Help", c:"parentalProtection", d:"Free civil legal help for low-income residents. Handles custody, visitation, orders of protection, and child support. Income-based.", ph:"585-295-5700", url:"https://www.lawny.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"] },
  { id:"laparent", n:"Legal Aid Society — Family Law Unit", c:"parentalProtection", d:"Free lawyers for low-income residents facing family law cases: custody, visitation, orders of protection. They can appear with you in court.", inc:200, ph:"585-232-4090", ad:"1 W Main St Suite 800, Rochester NY 14614", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, any existing court documents", tg:["any"] },
  { id:"vlspfamily", n:"Volunteer Legal Services — Family Law Clinic", c:"parentalProtection", d:"Free legal clinics including family law. Volunteer attorneys can advise on custody and OP cases.", ph:"585-232-3051", url:"https://vlsp.org", hr:"By appointment", doc:"Proof of income", tg:["any"] },
  { id:"cpsparent", n:"Child Protective Services — Report Child Endangerment", c:"parentalProtection", d:"If you believe the other parent is abusing or neglecting your child, call CPS to report. Reports can be made anonymously. CPS investigates and can take action to protect the child.", ph:"585-753-6532", hr:"After hours/weekends: 585-753-2699 (24/7)", doc:"None — anonymous reports accepted. Helpful to have: child's name and DOB, other parent's name and address, description of what happened and when.", tg:["any","kids"], nt:"Making a report to CPS does NOT automatically affect your own custody case. A CPS investigation is separate from Family Court proceedings — though findings can be used in court." },
  { id:"opdvinfo", n:"NYS Office for Prevention of DV — Know Your Rights", c:"parentalProtection", d:"Clear information on New York State law: what an Order of Protection covers, what happens if it's violated, how custody and OP cases interact.", url:"https://opdv.ny.gov", hr:"24/7 online", doc:"None", tg:["any"], nt:"Key fact: in NY, violating an Order of Protection — even 'just' a text message — is a criminal offense (Criminal Contempt). The protected person can call 911 immediately." },
  { id:"nychncustoday", n:"NY Courts — Custody & Visitation Information", c:"parentalProtection", d:"Plain-language explanation of how New York family courts decide custody, what 'best interests of the child' means, and how to prepare for a custody hearing.", url:"https://www.nycourts.gov/courthelp/family/custodyVisitation.shtml", hr:"24/7 online", doc:"None", tg:["any"], nt:"'Legal custody' (who makes decisions) and 'physical custody' (where child lives) are separate issues in NY. Both can be shared or given to one parent. The court always decides based on the child's best interests." },

  // TENANT / RENTER RIGHTS
  { id:"tenantdefense2", n:"Tenant Defense Project", c:"legal", d:"Free lawyer if you're facing eviction. They show up in court with you.", ph:"585-504-6195", url:"https://www.tenantdefense.org", hr:"M-F 9am-5pm", doc:"Eviction papers if you have them", tg:["any"] },
  { id:"housingcouncillegal", n:"Housing Council — Tenant Rights", c:"legal", d:"Tenant rights counseling, landlord disputes, housing discrimination, and foreclosure prevention. Free.", ph:"585-546-3700", url:"https://www.thehousingcouncil.org", hr:"M-F 9am-5pm", doc:"None — call to describe your situation", tg:["any"], nt:"Handles complaints about landlords who retaliate, fail to make repairs, or illegally lock you out." },
  { id:"hcpdiscrim", n:"NYS Human Rights Division — Housing Discrimination", c:"legal", d:"File a complaint if a landlord discriminates based on race, gender, disability, family status, or source of income (including Section 8). Free. No lawyer needed.", ph:"888-392-3644", url:"https://dhr.ny.gov", hr:"M-F 9am-5pm", doc:"Dates, what was said, who said it", tg:["any"], nt:"In NY it is ILLEGAL for a landlord to refuse a tenant because they use a housing voucher (Section 8). This is source-of-income discrimination — you can file a complaint." },
  { id:"hud", n:"HUD Housing Discrimination Hotline", c:"legal", d:"Federal complaint line for housing discrimination. Covers all protected classes.", ph:"800-669-9777", url:"https://www.hud.gov/program_offices/fair_housing_equal_opp", hr:"M-F 8:30am-5pm", doc:"None — just call and describe what happened", tg:["any"] },
  { id:"renterhelpny", n:"NY Tenant Helpline (Statewide)", c:"legal", d:"Free legal advice for tenants facing eviction, harassment, or unsafe conditions anywhere in New York State.", ph:"833-499-0318", url:"https://www.housingjusticeny.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"], nt:"Available statewide. If you're outside Monroe County this is your first call." },
  { id:"warrantsvc", n:"Housing Court — Warrant of Habitability", c:"legal", d:"If your landlord refuses to fix unsafe conditions (no heat, mold, pests, broken locks), housing court can compel repairs or reduce your rent.", ph:"585-371-3608", ad:"99 Exchange Blvd, Rochester NY 14614", hr:"M-F 9am-4:30pm", doc:"Photos of conditions, written requests to landlord if you have them", tg:["any"], nt:"In NY you can withhold rent into escrow if a landlord refuses emergency repairs. This is a formal legal process — talk to Legal Aid first." },

  // EMERGENCY FLIGHTS
  { id:"angelflight", n:"Angel Flight NE (Free Medical Flights)", c:"transport", d:"Free air transportation to medical treatment for patients who cannot afford or endure commercial travel. Volunteer pilots fly you in small aircraft.", ph:"603-766-9501", url:"https://www.angelflightne.org", hr:"M-F 9am-5pm", doc:"Medical documentation, physician's statement of need", tg:["any"], nt:"Covers patients in the Northeast including NY. Must be able to walk. Not for emergencies — for ongoing treatment at distant medical centers." },
  { id:"aircarealliance", n:"Air Care Alliance (Medical Flight Referral)", c:"transport", d:"Connects patients with the right volunteer aviation program for their situation and route. Start here if you don't know which program covers your area.", ph:"888-260-9707", url:"https://www.aircarealliance.org", hr:"M-F 9am-5pm", doc:"Medical need documentation, origin and destination, travel dates", tg:["any"] },
  { id:"mercymedical", n:"Mercy Medical Airlift", c:"transport", d:"Free long-distance air transport for medical patients who must travel far for treatment and cannot afford commercial airfare.", ph:"757-318-9174", url:"https://www.mercymedical.org", hr:"M-F 9am-5pm", doc:"Physician's referral letter, financial need documentation", tg:["any"] },
  { id:"compassionatetravel", n:"Airline Compassionate Fares (Bereavement/Medical)", c:"transport", d:"Most major airlines offer deeply discounted bereavement or medical emergency fares. Call the airline directly — these are not advertised online. Ask specifically for compassionate fare.", hr:"Call airline directly — available 24/7 for emergencies", doc:"Death certificate or medical documentation depending on airline", tg:["any"], nt:"Discounts vary but can be 50-90% off. Also ask about companion tickets for caregivers traveling with a patient." },

  // EXPANDED TRANSPORT
  { id:"rtsplanner", n:"RTS Trip Planner (Bus Routes)", c:"transport", d:"Plan any bus trip in Rochester. Real-time arrivals, route maps, transfers. Free.", ph:"585-288-1700", url:"https://www.myrts.com/Plan-Your-Trip", hr:"Bus service runs roughly 5am-midnight daily", doc:"None", tg:["any"], nt:"RTS app available on iPhone and Android. Text your stop number to 321-123 for next arrival times." },
  { id:"taxivoucher", n:"DSS Transportation Vouchers (Taxi/Rides)", c:"transport", d:"If you receive Temporary Assistance, you may qualify for taxi or transportation vouchers to get to medical appointments, job interviews, or DSS appointments.", ph:"585-753-6960", ad:"691 St. Paul St, Rochester NY 14605", hr:"M-F 8am-4pm", doc:"TA case number, appointment documentation", tg:["hh"], nt:"Ask your DSS caseworker specifically about transportation vouchers — they are not automatically offered. You have to request them." },
  { id:"uberlyfthealth", n:"Uber Health / Lyft Healthcare Rides", c:"transport", d:"Hospitals and social service agencies partner with Uber and Lyft to provide subsidized rides to medical appointments. Ask your doctor's office, hospital social worker, or Medicaid coordinator if they offer a ride program.", url:"https://www.uberhealth.com", hr:"Varies by partner program", doc:"Must be enrolled through a partner health organization", tg:["any"], nt:"If you have Medicaid, you likely qualify for free rides through the Medicaid Transportation program (separate entry above). Uber/Lyft health programs are a supplement through healthcare partners." },

  // LEGAL SUB-CATEGORY PROGRAMS

  // EVICTION
  { id:"nyhomesadvocacy", n:"NY State Homes & Community Renewal — Tenant Rights", c:"legalEviction", d:"State agency overseeing housing rights and programs. Resources for tenants facing eviction, unsafe conditions, and housing discrimination.", ph:"800-432-4210", url:"https://hcr.ny.gov", hr:"M-F 9am-5pm", doc:"None", tg:["any"] },
  { id:"tenantdefenseevict", n:"Tenant Defense Project (Eviction Help)", c:"legalEviction", d:"Free lawyer if you're facing eviction. They appear in housing court with you. One of the most important calls you can make when served eviction papers.", ph:"585-504-6195", url:"https://www.tenantdefense.org", hr:"M-F 9am-5pm", doc:"Eviction papers (petition/notice)", tg:["any"], nt:"Call immediately when you receive court papers. Do not wait. You may have as few as 10 days to respond." },
  { id:"legalaidevict", n:"Legal Aid Society — Housing Unit", c:"legalEviction", d:"Free lawyers for low-income tenants facing eviction, landlord harassment, or unsafe conditions.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, eviction papers", tg:["any"] },
  { id:"lawnyevict", n:"LawNY — Tenant Legal Help", c:"legalEviction", d:"Free civil legal help for tenants statewide. Handles eviction defense, lease disputes, habitability complaints.", ph:"585-295-5700", url:"https://www.lawny.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"] },
  { id:"housingcourtevict", n:"Rochester Housing Court", c:"legalEviction", d:"Where eviction cases are heard. You can file a response to an eviction petition here. Ask the clerk for the self-help forms.", ph:"585-371-3608", ad:"99 Exchange Blvd, Rochester NY 14614", hr:"M-F 9am-4:30pm", doc:"Your eviction papers", tg:["any"], nt:"Tell the clerk you need the 'Answer' form to respond to an eviction petition. It's free. Do not miss your court date." },
  { id:"housingcouncilrent", n:"Housing Council at PathStone — Renter Help", c:"legalEviction", d:"Free counseling for renters facing eviction, landlord disputes, unsafe conditions. They explain your rights and options.", ph:"585-546-3700", url:"https://www.thehousingcouncil.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"] },

  // WORKERS RIGHTS
  { id:"nydol", n:"NY Department of Labor — File a Wage Claim", c:"legalWorkers", d:"If your employer owes you wages, overtime, or tips, file a claim online or by phone. NY DOL investigates and can recover your wages plus penalties.", ph:"888-469-7365", url:"https://labor.ny.gov/workerprotection/laborstandards/LSforms.shtm", hr:"M-F 8am-5pm", doc:"Pay stubs, work schedule, employer contact info", tg:["any"] },
  { id:"eeoc", n:"EEOC — Employment Discrimination Complaint", c:"legalWorkers", d:"File a federal employment discrimination complaint. Covers race, sex, age, disability, religion, national origin, pregnancy. Must file within 300 days.", ph:"800-669-4000", url:"https://www.eeoc.gov/filing-charge-discrimination", hr:"M-F 8am-8pm", doc:"Dates of incidents, names of witnesses, any documentation", tg:["any"], nt:"You must file with the EEOC before you can sue in federal court. The 300-day deadline is strict." },
  { id:"nydhr", n:"NYS Division of Human Rights — Employment", c:"legalWorkers", d:"File a state discrimination complaint. Covers all EEOC categories plus gender identity, marital status, domestic violence victim status.", ph:"888-392-3644", url:"https://dhr.ny.gov", hr:"M-F 9am-5pm", doc:"Incident documentation", tg:["any"] },
  { id:"unemployment", n:"NY Unemployment Insurance", c:"legalWorkers", d:"If you lost your job through no fault of your own, you likely qualify. Apply within 14 days of job loss for fastest processing.", ph:"888-209-8124", url:"https://labor.ny.gov/ui/claimantinfo/beforeyouapplyfaq.shtm", aurl:"https://applications.labor.ny.gov/IndividualReg", hr:"Online 24/7, phone M-F 8am-5pm", doc:"Last employer info, SSN, work history for 18 months", tg:["any"], nt:"Apply online — phone wait times are very long. If denied, appeal within 30 days." },
  { id:"nycosh", n:"NYCOSH — Workplace Safety Rights", c:"legalWorkers", d:"Free information and advocacy for workers with unsafe working conditions. Covers all industries.", ph:"212-227-6440", url:"https://nycosh.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"] },
  { id:"legalaidworkers", n:"Legal Aid Society — Workers Rights", c:"legalWorkers", d:"Free legal help for workers with wage theft, discrimination, retaliation, or wrongful termination.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, pay stubs, any documentation of the issue", tg:["any"] },

  // BENEFITS DENIALS
  { id:"fairhearing", n:"NY Office of Temporary & Disability Assistance — Fair Hearings", c:"legalBenefits", d:"Request a free fair hearing to appeal any denial or reduction of SNAP, cash assistance, Medicaid, or childcare benefits. Benefits can continue while you appeal.", ph:"518-473-3332", url:"https://otda.ny.gov/programs/fair-hearings/", hr:"M-F 8am-5pm", doc:"Your denial letter, case number", tg:["any"], nt:"You have 90 days from a SNAP denial, 60 days from a Medicaid or TA denial. Call immediately. Request 'Aid Continuing' to keep benefits during the hearing." },
  { id:"legalaidbenefits", n:"Legal Aid Society — Benefits Help", c:"legalBenefits", d:"Free legal help appealing SNAP, Medicaid, SSI, and public assistance denials.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Denial letter, case number, proof of income", tg:["any"] },
  { id:"disabilityadvocacy", n:"NY Legal Assistance Group — Disability Benefits", c:"legalBenefits", d:"Free help with SSI and Social Security Disability appeals. Many disability lawyers work on contingency — no fee unless you win.", ph:"212-613-5000", url:"https://www.nylag.org", hr:"M-F 9am-5pm", doc:"Denial letter, medical records", tg:["dis","any"] },
  { id:"medicaidadvocate", n:"Community Health Advocates (Medicaid Help)", c:"legalBenefits", d:"Free help navigating Medicaid denials, billing problems, and coverage disputes.", ph:"888-614-5400", url:"https://communityhealthadvocates.org", hr:"M-F 9am-5pm", doc:"Insurance card, denial letter", tg:["any"] },
  { id:"snaphotline", n:"NYS SNAP Hotline", c:"legalBenefits", d:"Questions about SNAP eligibility, your case, or how to apply or appeal.", ph:"800-342-3009", url:"https://mybenefits.ny.gov", hr:"M-F 8am-5pm", doc:"Case number if you have one", tg:["any"] },

  // IMMIGRATION LEGAL
  { id:"cfcimmiglaw", n:"Catholic Charities Immigration Legal Services", c:"legalImmigration", d:"DOJ-accredited immigration legal services. Citizenship, green cards, family petitions, DACA renewals, deportation defense.", ph:"585-546-7220", ad:"87 N Clinton Ave, Rochester NY 14604", url:"https://ww2.fcscharities.org/services/immigration/", hr:"M-F by appointment", doc:"All immigration documents, passport, any notices from USCIS or immigration court", tg:["any"], nt:"DOJ-accredited means they are legally authorized to represent you in immigration proceedings. Always verify accreditation before paying anyone for immigration help." },
  { id:"newhopeilslaw", n:"New Hope Immigration Legal Services", c:"legalImmigration", d:"Low-cost immigration help. Citizenship, green cards, family visas, work permits, DACA. $5 intake fee only.", ph:"585-760-4328", url:"http://www.newhopefree.org/ils", hr:"By appointment", doc:"All immigration documents you have", tg:["any"] },
  { id:"laimmig", n:"Legal Aid Society — Immigration Unit", c:"legalImmigration", d:"Free immigration legal help for low-income individuals. Deportation defense, asylum, DACA, family cases.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income, all immigration documents", tg:["any"] },
  { id:"nycairr", n:"NYLAG Immigration — Deportation Defense", c:"legalImmigration", d:"Free legal help for people in immigration court proceedings or facing deportation.", ph:"212-613-5000", url:"https://www.nylag.org/units/immigration/", hr:"M-F 9am-5pm", doc:"Immigration court notices, all documents", tg:["any"] },
  { id:"iactcenter", n:"IACT Center — Immigrant Rights", c:"legalImmigration", d:"Know your rights presentations, immigration legal screenings, community advocacy for immigrants in Rochester.", url:"https://www.iactcenter.org", hr:"See website", doc:"None for rights presentations", tg:["any"] },

  // DISCRIMINATION
  { id:"eeocdisc", n:"EEOC — File an Employment Discrimination Charge", c:"legalDiscrim", d:"Federal agency. File a charge for discrimination based on race, sex, age (40+), disability, religion, national origin, pregnancy. 300-day deadline from incident.", ph:"800-669-4000", url:"https://www.eeoc.gov/filing-charge-discrimination", hr:"M-F 8am-8pm", doc:"Dates, what happened, witnesses, any documentation", tg:["any"] },
  { id:"nydhrdisc", n:"NYS Division of Human Rights", c:"legalDiscrim", d:"State agency for discrimination complaints in employment, housing, credit, and education. Broader protections than federal law — includes gender identity, source of income.", ph:"888-392-3644", url:"https://dhr.ny.gov", hr:"M-F 9am-5pm", doc:"Incident documentation", tg:["any"] },
  { id:"huddisc", n:"HUD — Housing Discrimination Complaint", c:"legalDiscrim", d:"Federal housing discrimination complaints. Section 8 refusal, disability accommodations denied, race-based rental refusals.", ph:"800-669-9777", url:"https://www.hud.gov/program_offices/fair_housing_equal_opp", hr:"M-F 8:30am-5pm", doc:"None required to start — describe what happened", tg:["any"] },
  { id:"adarochester", n:"Disability Rights NY — ADA Complaints", c:"legalDiscrim", d:"Free legal help for people with disabilities facing discrimination in employment, housing, or public accommodation.", ph:"800-993-8982", url:"https://www.drny.org", hr:"M-F 9am-5pm", doc:"Description of the discrimination, any written communications", tg:["dis","any"] },
  { id:"urbanleaguedisc", n:"Urban League of Rochester — Discrimination Advocacy", c:"legalDiscrim", d:"Civil rights advocacy and referrals for discrimination complaints in housing, employment, and education.", ph:"585-325-6530", url:"https://www.urbanleagueroc.org", hr:"M-F 9am-5pm", doc:"None", tg:["any"] },

  // DEBT
  { id:"legalaiddebt", n:"Legal Aid Society — Debt & Consumer Help", c:"legalDebt", d:"Free legal help for low-income residents facing debt lawsuits, wage garnishment, or debt collector harassment.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Court papers, debt letters, pay stubs", tg:["any"] },
  { id:"cfpb", n:"CFPB — Report Debt Collector Violations", c:"legalDebt", d:"If a debt collector is violating the law (calling too early/late, threatening arrest, lying), report them to the Consumer Financial Protection Bureau.", url:"https://www.consumerfinance.gov/complaint/", hr:"24/7 online", doc:"Collector name, phone number, description of violation", tg:["any"], nt:"You can also sue a debt collector in small claims court for FDCPA violations and recover up to $1,000 in damages plus attorney fees." },
  { id:"nysag", n:"NYS Attorney General — Consumer Complaints", c:"legalDebt", d:"File a complaint against debt collectors, scammers, or businesses that treat you unfairly.", ph:"800-771-7755", url:"https://ag.ny.gov/consumer-frauds-and-protection", hr:"M-F 9am-5pm", doc:"Company name, what happened, any documentation", tg:["any"] },
  { id:"bankruptcyhelp", n:"Bankruptcy Legal Clinics (Free)", c:"legalDebt", d:"Volunteer Legal Services runs free bankruptcy clinics. Learn if Chapter 7 (eliminate debt) or Chapter 13 (repayment plan) is right for you.", ph:"585-232-3051", url:"https://vlsp.org", hr:"By appointment", doc:"List of debts, income info, assets", tg:["any"], nt:"Chapter 7 can eliminate most credit card debt, medical bills, and personal loans. Mortgage and student loans generally cannot be discharged. A lawyer can tell you if you qualify." },
  { id:"creditcounseling", n:"Free Credit Counseling (NFCC)", c:"legalDebt", d:"Nonprofit credit counseling. Debt management plans, budget help, creditor negotiations. Never pay for credit counseling — it's available free.", ph:"800-388-2227", url:"https://www.nfcc.org", hr:"M-F 8am-8pm", doc:"List of debts and creditors", tg:["any"] },

  // SMALL CLAIMS
  { id:"rochcitycourt_sc", n:"Rochester City Court — Small Claims", c:"legalSmallClaims", d:"File a small claims case for up to $10,000. No lawyer needed. Come to the court clerk's window to start.", ph:"585-428-2444", ad:"99 Exchange Blvd, Rochester NY 14614", url:"https://ww2.nycourts.gov/courts/7jd/Monroe/cityct/index.shtml", hr:"M-F 9am-5pm (file by 4pm)", doc:"Defendant's name and address, description of your claim, any supporting documents", tg:["any"], nt:"Security deposit cases: If your landlord hasn't returned your deposit within 14 days of move-out with an itemized list, you can sue for DOUBLE the deposit amount under NY law." },
  { id:"nycourtssc", n:"NY Courts — Small Claims Self-Help", c:"legalSmallClaims", d:"Step-by-step guide to filing a small claims case in New York. Plain language. Free.", url:"https://www.nycourts.gov/courthelp/civil/smallClaims.shtml", hr:"24/7 online", doc:"None", tg:["any"] },
  { id:"legalaidsc", n:"Legal Aid Society — Small Claims Advice", c:"legalSmallClaims", d:"Free advice on whether and how to file a small claims case. Can help you prepare your evidence.", ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"None for initial advice", tg:["any"] },

  // CRIMINAL RECORD
  { id:"rawnyrecord", n:"RAWNY — Criminal Record Help", c:"legalCrimRecord", d:"Help understanding your record, getting RAP sheets, applying for Certificates of Relief and Certificates of Good Conduct.", ph:"585-851-8886", ad:"186-188 N Water St, Rochester NY", url:"https://www.rawny.org", hr:"M-F", doc:"None — they help you figure out what you need", tg:["any"] },
  { id:"jpcrecord", n:"Judicial Process Commission — Record Clearing", c:"legalCrimRecord", d:"Help with RAP sheets, Certificates of Rehabilitation, expungement questions, and mentoring.", ph:"585-325-7727", url:"https://www.rocjpc.org", hr:"M-F", doc:"None", tg:["any"] },
  { id:"cleanslate", n:"NY Clean Slate Act — Automatic Sealing (2024)", c:"legalCrimRecord", d:"As of November 2024, most NY misdemeanors are automatically sealed after 3 years and most felonies after 8 years. This happened automatically — you don't need to apply. Check if your record was sealed.", url:"https://www.criminaljustice.ny.gov/cleanslate", hr:"24/7 online", doc:"None", tg:["any"], nt:"Sealed records are hidden from most private background checks but remain visible to courts and law enforcement. Certain serious offenses (sex crimes, class A felonies) are excluded from Clean Slate." },
  { id:"certrelief", n:"Certificate of Relief from Civil Disabilities", c:"legalCrimRecord", d:"Removes automatic bars to employment, licenses, and housing caused by a criminal record. Apply through the court that sentenced you. Free.", ph:"585-371-3608", ad:"99 Exchange Blvd, Rochester NY 14614", url:"https://www.criminaljustice.ny.gov/pio/press_releases/2023-09-27_pressrelease.html", hr:"M-F 9am-4:30pm", doc:"Your case/docket number, sentencing records", tg:["any"], nt:"This is one of the most underused tools for people with records. It doesn't erase your record but removes legal barriers to jobs and licenses. Ask RAWNY or Legal Aid for help applying." },
  { id:"legalaidrecord", n:"Legal Aid Society — Criminal Record Help", c:"legalCrimRecord", d:"Free legal help understanding your record, sealing options, and certificates.", inc:200, ph:"585-232-4090", url:"https://lasroc.org", hr:"M-F 9am-5pm", doc:"Proof of income", tg:["any"] },
];

// COMMUNITY GROUPS
const COMMUNITY = [
  { n:"Rochester Hope", d:"Saturday: free food, clothing, haircuts, health screenings, legal aid, 50+ agencies. Every Saturday 9:30am-3:30pm.", loc:"869 N Clinton Ave", url:"https://rochesterhope.org" },
  { n:"Roc Food Not Bombs", d:"Free hot meals and grocery stands across Rochester. No ID, no questions.", url:"https://www.facebook.com/rocfoodnotbombs/" },
  { n:"Rochester Mutual Aid Network", d:"Connects people who need help with people who can help.", url:"https://www.rocmutualaid.com" },
  { n:"Rochester NY Food Relief", d:"Active Facebook group sharing free food, pantry info, meal locations.", url:"https://www.facebook.com/groups/rochesterNYfoodrelief" },
  { n:"Buy Nothing Rochester", d:"Free items shared among neighbors. Search 'Buy Nothing' + your neighborhood on Facebook." },
  { n:"ROC COVID Mutual Aid", d:"Emergency funds, supplies, rides, community support. Still active.", url:"https://www.facebook.com/groups/roccovidmutualaid" },
  { n:"Rochester Free Store", d:"Free clothing and household items. 3rd Saturday monthly. Search 'Rochester Free Store' on Facebook." },
  { n:"Rochester NY Moms Group", d:"Parenting support, baby items, advice. Search 'Rochester NY Moms Group' on Facebook." },
  { n:"Rochester Housing Help", d:"Housing leads, roommate searches, rental info. Search 'Rochester Housing Help' on Facebook." },
  { n:"Rochester Job Hunters", d:"Job postings, résumé help, networking. Search 'Rochester Job Hunters' on Facebook." },
];

// ── FEATURED PROGRAMS ──
const FEATURED_IDS = ["211", "snap", "medicaid", "foodlink", "myb", "988", "mcvital"];

// ── SENSITIVE CATEGORIES (show privacy notice) ──
const SENSITIVE = new Set(["mental","grief","addiction","domesticSvc","hivsti","reentry","lgbtq","parentalProtection","legalImmigration","legalCrimRecord"]);
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

// Programs with coordinates for Near Me (food-related)
const FOOD_COORDS = {
  "foodlink": [43.1566, -77.6088],
  "salvation": [43.1610, -77.6219],
  "food_stamps": null,
  "pantry": [43.1490, -77.6011],
};
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
              <a href={telHref(p.ph)} data-umami-event={`click-call-${p.id}`}
                 style={{ color: "#1565c0", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                {p.ph}
              </a>
            </div>
          )}
          {p.ad && (
            <div style={{ marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#636363" }}>📍</span>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(p.ad)}`}
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
              <a href={p.url} target="_blank" rel="noopener noreferrer" data-umami-event={`click-website-${p.id}`} style={{
                background: "#e3f2fd", color: "#1565c0", padding: "6px 14px",
                borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}>
                {t(lang, "website")} ↗
              </a>
            )}
            {p.aurl && (
              <a href={p.aurl} target="_blank" rel="noopener noreferrer" data-umami-event={`click-apply-${p.id}`} style={{
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

const CommunitySection = ({ lang }) => (
  <div style={{ marginTop: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4, color: "#2e7d32" }}>
      🤝 {t(lang, "communityTitle")}
    </h2>
    <p style={{ fontSize: 13, color: "#636363", marginBottom: 14, marginTop: 0 }}>
      {t(lang, "communityDesc")}
    </p>
    {COMMUNITY.map((g, i) => (
      <div key={i} style={{
        background: "#f1f8e9", borderRadius: 10, padding: 12, marginBottom: 8,
        border: "1px solid #c5e1a5",
      }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{g.n}</div>
        <div style={{ fontSize: 13, color: "#444", marginTop: 2 }}>{g.d}</div>
        {g.loc && <div style={{ fontSize: 12, color: "#636363", marginTop: 3 }}>📍 {g.loc}</div>}
        {g.url && (
          <a href={g.url} target="_blank" rel="noopener noreferrer"
             style={{ fontSize: 12, color: "#2e7d32", textDecoration: "none", fontWeight: 600 }}>
            {t(lang, "website")} ↗
          </a>
        )}
      </div>
    ))}
  </div>
);

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
const STEPS = { HOME: 0, WHAT_TAB: 1, WHAT_CAT: 2, WHO: 3, HOW: 4, RESULTS: 5 };

function RocHelpInner({ onExit, city = "your area" }) {
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
        if (DV_CATS.has(c)) setShowDVExit(true);
        setStep(STEPS.WHO);
      }
      const l = params.get("l");
      if (l && LANGS.some((lg) => lg.code === l)) setLang(l);
    } catch (e) { /* ignore malformed hashes */ }
  }, []);

  // Update hash when results are shown
  React.useEffect(() => {
    if (step === STEPS.RESULTS && category) {
      try { window.location.hash = `c=${category}&l=${lang}`; } catch (e) {}
    } else if (step === STEPS.HOME) {
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
    goTo(STEPS.WHO);
  };
  const selectWho = (val) => { setWho(val); goTo(STEPS.HOW); };
  const selectHow = (val) => { setHow(val); goTo(STEPS.RESULTS); };

  const reset = () => {
    setStep(STEPS.HOME); setTab(null); setCategory(null);
    setNearMe(false); setUserCoords(null); setGeoError(false);
    setWho(null); setHow(null); setExpandedCard(null);
    // NOTE: showDVExit intentionally NOT cleared — once activated, stays visible for safety
    scrollTop();
  };

  // ── FILTERING ──
  const filteredPrograms = useMemo(() => {
    if (!category) return [];
    let progs = PROGRAMS.filter((p) => p.c === category);

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

    return progs;
  }, [category, who, how]);

  // ── STEP INDICATOR ──
  const stepLabels = [
    t(lang, "stepWhat"),
    t(lang, "stepWho"),
    t(lang, "stepHow"),
    t(lang, "stepResults"),
  ];
  const currentStepIndex =
    step === STEPS.WHAT_TAB || step === STEPS.WHAT_CAT ? 0
    : step === STEPS.WHO ? 1
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
                {city}
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
      {step > STEPS.HOME && (
        <div style={{ display: "flex", gap: 8, padding: "10px 20px 0" }}>
          <button onClick={() => goTo(Math.max(0, step - 1))} aria-label={t(lang, "back")} style={{
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
          <div style={{ textAlign: "center", paddingTop: 20 }}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.5, marginBottom: 24 }}>
              {city && city !== "your area"
                ? t(lang, "subtitle").replace("near you", `in ${city}`).replace("cerca de ti", `en ${city}`).replace("कू dhow", ``)
                : t(lang, "subtitle")}
            </p>
            <button
              onClick={() => goTo(STEPS.WHAT_TAB)}
              style={{
                background: "#2e7d32", color: "#fff", border: "none",
                borderRadius: 28, padding: "16px 32px", fontSize: 18,
                fontWeight: 700, cursor: "pointer", width: "100%",
                boxShadow: "0 4px 14px rgba(46,125,50,0.3)",
              }}
            >
              {t(lang, "start")} →
            </button>

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
                    <a href={telHref(p.ph)} style={{
                      background: "#2e7d32", color: "#fff", padding: "6px 12px",
                      borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}>
                      {p.ph}
                    </a>
                  ) : p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
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
              {TABS[tab].needs.map((catKey) => {
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
                    es: "No encontramos resultados exactos — pero el 211 puede ayudar.",
                    ne: "सटीक परिणाम भेटिएन — तर 211 ले सहयोग गर्न सक्छ।",
                    ar: "لم نجد نتائج دقيقة — لكن 211 يمكنه المساعدة.",
                    sw: "Hatukupata matokeo kamili — lakini 211 wanaweza kusaidia.",
                    my: "တိကျတဲ့ရလဒ်မတွေ့ပါ — ဒါပေမယ့် 211 ကူညီနိုင်ပါတယ်။",
                    so: "Natiijooyin sax ah ma helin — laakiin 211 wuu kaa caawin karaa.",
                    zh: "未找到精确结果 — 但211可以帮助您。",
                  }[lang] || "No exact matches — but 211 can help with anything.")}
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

            {/* 211 fallback */}
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
            <CommunitySection lang={lang} />
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center", padding: "16px 20px 24px",
        fontSize: 11, color: "#767676", borderTop: "1px solid #e8e4dc",
      }}>
        Sedral Studios · {city}<br />
        Built with nothing. Built for everyone.<br />
        <span style={{ fontSize: 9, color: "#bbb" }}>© 2026 Sedral Studios. All rights reserved.</span>
        <div style={{ marginTop: 8 }}>
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

export default function RocHelp({ onExit, city = "your area" }) {
  return (
    <ErrorBoundary>
      <RocHelpInner onExit={onExit} city={city} />
    </ErrorBoundary>
  );
}
