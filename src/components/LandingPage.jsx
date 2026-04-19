import { useState, useEffect } from "react";
import { LegalLibraryCategories, LegalLibraryBrowse, LegalLibraryEntry } from "./LegalLibrary";
import { GlossaryCategories, GlossaryBrowse, GlossaryTerm } from "./Glossary";
import UnifiedSearch from "./Search";
import ShareButton from "./ShareButton";
import { resolveJurisdiction } from "../utils/resolveJurisdiction.js";
import { PROGRAMS } from "../data/programs.js";
import { LEGAL_ENTRIES } from "../data/legal";
import { GLOSSARY_TERMS } from "../data/legal/glossary-index";

// ═══════════════════════════════════════════════════
// HELPFINDER.HELP — Landing Page v2
// Sedral Studios · Rochester NY · April 2026
// Section 3: Home Page + Site Shell
// 8 Languages · 3 Doors · Search · Full Translation
// Brand: HF (product) / SS (studio)
// ═══════════════════════════════════════════════════

const PAGES = { HOME: 0, ABOUT: 1, PRIVACY: 2, TERMS: 3, SUPPORT: 4, LEGAL_LIBRARY: 5, LEGAL_ENTRY: 6, LEGAL_CATEGORY: 7, GLOSSARY: 8, GLOSSARY_TERM: 9, GLOSSARY_CATEGORY: 10, SEARCH: 11 };

// URL <-> page mapping for history-based routing
const PAGE_PATHS = {
  [PAGES.HOME]: "/",
  [PAGES.ABOUT]: "/about",
  [PAGES.SUPPORT]: "/support",
  [PAGES.PRIVACY]: "/privacy",
  [PAGES.TERMS]: "/terms",
  [PAGES.LEGAL_LIBRARY]: "/know-your-rights",
  [PAGES.GLOSSARY]: "/glossary",
  [PAGES.SEARCH]: "/search",
};

const PATH_TO_PAGE = {
  "/": PAGES.HOME,
  "/about": PAGES.ABOUT,
  "/support": PAGES.SUPPORT,
  "/privacy": PAGES.PRIVACY,
  "/terms": PAGES.TERMS,
  "/know-your-rights": PAGES.LEGAL_LIBRARY,
  "/glossary": PAGES.GLOSSARY,
  "/search": PAGES.SEARCH,
};

// Parse current browser pathname → { page, entryId | null, categoryId | null }
function parsePath(pathname) {
  const clean = (pathname || "/").replace(/\/+$/, "") || "/";
  // Category: /know-your-rights/topic/[cat]
  const topicMatch = clean.match(/^\/know-your-rights\/topic\/([a-z0-9-]+)$/i);
  if (topicMatch) return { page: PAGES.LEGAL_CATEGORY, entryId: null, categoryId: topicMatch[1] };
  // Entry: /know-your-rights/[id]
  const entryMatch = clean.match(/^\/know-your-rights\/([a-z0-9-]+)$/i);
  if (entryMatch) return { page: PAGES.LEGAL_ENTRY, entryId: entryMatch[1], categoryId: null };
  // Glossary category: /glossary/category/[cat]
  const glossaryCatMatch = clean.match(/^\/glossary\/category\/([a-z0-9-]+)$/i);
  if (glossaryCatMatch) return { page: PAGES.GLOSSARY_CATEGORY, entryId: null, categoryId: null, termId: null, glossaryCat: glossaryCatMatch[1] };
  // Glossary term: /glossary/[id]
  const glossaryTermMatch = clean.match(/^\/glossary\/([a-z0-9-]+)$/i);
  if (glossaryTermMatch) return { page: PAGES.GLOSSARY_TERM, entryId: null, categoryId: null, termId: glossaryTermMatch[1], glossaryCat: null };
  if (PATH_TO_PAGE[clean] !== undefined) return { page: PATH_TO_PAGE[clean], entryId: null, categoryId: null };
  return { page: PAGES.HOME, entryId: null, categoryId: null };
}

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

// "help" in each language — displayed at top
const HELP_WORDS = ["help","ayuda","सहायता","مساعدة","msaada","အကူအညီ","caawin","帮助"];

// ── FULL UI STRINGS ──
const UI = {
  en: {
    searchPlaceholder: "Search — food, housing, dental, jobs...",
    door1Title: "I need help",
    door1Hook: "You're not alone.", door1Desc: "All free help. Connect with the right people in under 5 minutes. Food, housing, healthcare, and more.",
    door1Btn: "Find help now",
    door1Sub: "or call 211 — free, 24/7, any language",
    helpDisclaimer: "HelpFinder is an informational tool. Program details may change without notice. Always contact programs directly to confirm eligibility, hours, and availability. This is not legal, medical, or financial advice.",
    trust: "No accounts. No personal data collected. No tracking that identifies you.",
    feedbackTitle: "Tell us what's missing",
    feedbackDesc: "Know a program we missed? Something wrong? Or just want to say something? We read every message.",
    feedbackBtn: "Send us a message",
    aboutLink: "About Sedral Studios",
    aboutLinkDesc: "What this is. Who built it. Why it's free.",
    navHome: "Home",
    navAbout: "About",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navContact: "Contact",
    back: "← Back",
    aboutTitle: "About",
    aboutP1: "HelpFinder connects people with real programs, legal rights, and plain-English answers — all in one place. No accounts. No personal data collected. No ads. No fees. Just help.",
    aboutP2: "I grew up watching my family navigate the system. Uncles on my dad's side, six great-aunts and great-uncles on my mom's — most of them in Rochester, most with families of their own, and many of their kids have kids now too. My family is big. And at one time or another, most of them have needed help finding food, housing, legal advice, or a program that actually existed but nobody could find. I watched people I love struggle — not because help wasn't there, but because nobody put it all in one place in language regular people could understand.",
    aboutPersonal: "I'm Anthony DiMarzo. I have a CDL and I spend my days building roads. I spend my nights building this. No degree in law. No nonprofit funding. No investors. Just someone who has watched this problem his whole life and finally decided to do something about it.",
    aboutFamily: "I live in Brockport with my fiancee and our son. He's six. He's the reason I keep going. The world he grows up in should be better than the one he was born into.",
    aboutSedral: "I met Steven playing a game called CastleMiner Z — a sandbox game like Minecraft. We were addicted. His gamertag was Sedistix. At some point he gave me his email, vastenemy, and I saw it as an anagram for a name he hadn't revealed yet. I called him Steven one day and we were best friends from that moment. That was around 2006. He studied at MIT. He built computers, installed security systems, read philosophy and psychology, and loved his cats. He was autistic, and he had the kind of mind that saw what others couldn't. Steven T. May left on Christmas Eve 2025, at 47. Sedral Studios carries his name because the things that matter most shouldn't disappear when someone does.",
    aboutWhat: "HelpFinder is built differently. Every legal guide is written at a 6th-grade reading level and backed by statute citations. Every program listing is verified with a phone number, address, and what to bring. Every page has a Quick Exit button for anyone who needs to leave fast. Legal content is reviewed by law professors. The glossary decodes the jargon that courts, agencies, and insurance companies use — in plain English, right where you need it. And none of it requires an account, a login, or giving up any personal information.",
    aboutClose: "Everything here is free. If you want to help keep it free, there's a donate button. If you can't donate, use the tools. That's enough.",
    aboutSign: "— Anthony DiMarzo / Ozramid Of March",
    aboutAgency: "If you work at an agency and want your program listed, if you're a legal professional who wants to help verify content, or if something needs correcting — reach out.",
    contactTitle: "Contact",
    supportTitle: "Support this project",
    supportDesc: "HelpFinder is free for everyone who uses it. It stays free because people like you decide it should exist.",
    tier1: "Keeps the site running for a week",
    tier2: "Covers a full month of hosting",
    tier3: "Helps us add a new city",
    tier1Monthly: "Keeps the lights on",
    tier2Monthly: "Real sponsor",
    tier3Monthly: "Funds expansion",
    donateOneTime: "One-time",
    donateMonthly: "Monthly",
    donateCustomLabel: "Other amount",
    donateCustomBtn: "Donate",
    taxStatusBanner: "Not tax-deductible yet — we're working toward 501(c)(3) status.",
    memoryNote: "Sedral Studios carries the name of Steven T. May. Your donation keeps that name in the world.",
    budgetHeading: "Where your money goes",
    budgetText: "Hosting, domain registration, phone verification calls, and expansion to new Monroe County neighbors (Wayne, Ontario, Livingston counties next).",
    nonMonetaryHeading: "Support without money",
    nonMonetaryShare: "Share HelpFinder with someone who might need it",
    nonMonetaryFeedback: "Tell us what's missing or wrong",
    nonMonetaryAdd: "Add a program you know about that isn't listed",
    donatePaypal: "Donate via PayPal", teamwork: "Teamwork makes the dream work.",
    supportDisclaimer: "Sedral Studios is not a registered nonprofit and is not a government agency. Donations primarily cover hosting, domain, research, and expansion. Monthly donations can be cancelled any time from your Stripe receipt email. Thank you.",
    shareLabel: "Share HelpFinder",
    shareText: "Free help and legal info for Monroe County. No accounts, no ads, no tracking.",
    shareAriaLabel: "Share HelpFinder with someone who needs it",
    privacyTitle: "Privacy",
    privacyShort: "The short version: we don't collect personal data.",
    privacyP1: "No accounts. No cookies from us. No tracking pixels. No analytics that identify you. No data is saved when you use HelpFinder. We count how many times each resource is clicked so we know what help people need most — but we never track who clicks. Third-party services (donation platforms) may set their own cookies if you visit them.",
    privacyP2: "We don't know who you are. We don't know what you searched for. We don't know if you came back. That's by design.",
    privacyP4: "If you're in a situation where someone might check your device, you can close this site and it leaves no trace. There's nothing to find.",
    privacyQ: "Questions?",
    footer: "Built with nothing. Built for everyone.",
    navTerms: "Terms",
    termsTitle: "Terms of Use",
    termsP1: "By using helpfinder.help, you agree to the following terms.",
    termsP2: "HelpFinder is provided as-is, without warranties of any kind. We make no guarantees about the accuracy, completeness, or reliability of any information on this site. Program details come from public sources and may change without notice. Always contact programs directly to verify eligibility, hours, and availability.",
    termsP4: "Donations are voluntary contributions to support hosting and expansion. They are not payments for a service. Sedral Studios is not a registered nonprofit. Donations are not tax-deductible.",
    termsP5: "We reserve the right to modify, update, or discontinue any part of this site at any time without notice.",
    termsP6: "We collect no personal data. See our Privacy page for details.",
    termsP7: "All content, design, and code on this site is © 2026 Sedral Studios. All rights reserved.",
  },
  es: {
    searchPlaceholder: "Buscar — comida, vivienda, dental, empleo...",
    door1Title: "Necesito ayuda",
    door1Hook: "No estás en esto a solas.", door1Desc: "Toda la ayuda es gratuita. Conéctate con las personas adecuadas en menos de 5 minutos. Comida, vivienda, salud y más.",
    door1Btn: "Buscar ayuda",
    door1Sub: "o llame al 211 — gratis, 24/7, cualquier idioma",
    helpDisclaimer: "HelpFinder es una herramienta informativa. Los detalles de los programas pueden cambiar. Contacte directamente a los programas para confirmar elegibilidad y horarios. Esto no es asesoría legal, médica o financiera.",
    trust: "No se recopilan datos. Sin cuentas. Sin rastreo. Nunca.",
    feedbackTitle: "Dinos qué falta", feedbackDesc: "¿Conoces un programa que no tenemos? ¿Algo está mal? Leemos cada mensaje.", feedbackBtn: "Envíanos un mensaje",
    aboutLink: "Sobre Sedral Studios",
    aboutLinkDesc: "Qué es esto. Quién lo construyó. Por qué es gratis.",
    navHome: "Inicio", navAbout: "Acerca de", navSupport: "Apoyar", navPrivacy: "Privacidad", navContact: "Contacto",
    back: "← Atrás",
    aboutTitle: "Acerca de",
    aboutP1: "HelpFinder es una herramienta gratuita que conecta a las personas con programas reales en su ciudad. Sin cuentas. Sin datos recopilados. Sin anuncios. Solo respuestas.",
    aboutP2: "Comenzando en Rochester, NY. Gratis. Verificado. Sin cuenta. Creciendo cada día.",
    aboutPersonal: "Soy Anthony DiMarzo de Rochester. Tengo una licencia comercial y paso mis días construyendo caminos. Paso mis noches construyendo esto. Prefiero construir un mejor futuro para mañana. Noté que la gente en crisis no puede encontrar ayuda — no porque no exista, sino porque nadie la puso en un solo lugar en lenguaje sencillo. Así que lo hice yo. Sin título. Sin financiamiento. Sin inversionistas. Solo yo y una computadora.",
    aboutFamily: "Vivo en Brockport con mi prometida y nuestro hijo. Tiene seis años. Él es la razón por la que esto existe. El mundo que hereda debería ser mejor que en el que nació.",
    aboutSedral: "Sedral Studios lleva el nombre de Steven T. May. Era mi amigo. Estudió en MIT. Construía computadoras, instalaba sistemas de seguridad, leía filosofía y psicología, y amaba a sus gatos. Era autista, y tenía una mente que veía lo que otros no podían. Se fue en Nochebuena de 2025, a los 47 años. Este trabajo lleva su nombre porque lo que más importa no debería desaparecer cuando alguien lo hace.",
    aboutClose: "Todo aquí es gratis. Si quieres ayudar a mantenerlo gratis, hay un botón de donación. Si no puedes donar, usa las herramientas. Eso es suficiente.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "Si trabajas en una agencia y quieres que tu programa aparezca, o si algo necesita corrección, contáctanos.",
    contactTitle: "Contacto",
    supportTitle: "Apoya este proyecto",
    supportDesc: "HelpFinder es gratis para todos. Se mantiene gratis porque personas como tú deciden que debe existir.",
    tier1: "Mantiene el sitio funcionando por una semana",
    tier2: "Cubre un mes completo de hosting",
    tier3: "Nos ayuda a agregar una nueva ciudad",
    donatePaypal: "Donar vía PayPal", teamwork: "El trabajo en equipo hace realidad el sueño.",
    supportDisclaimer: "Sedral Studios no es una organización sin fines de lucro registrada. Las donaciones apoyan el hosting, investigación y expansión a nuevas ciudades. Gracias.",
    shareLabel: "Compartir HelpFinder",
    shareText: "Ayuda gratuita e información legal para el condado de Monroe. Sin cuentas, sin anuncios, sin rastreo.",
    shareAriaLabel: "Compartir HelpFinder con alguien que lo necesite",
    privacyTitle: "Privacidad",
    privacyShort: "La versión corta: no recopilamos datos personales.",
    privacyP1: "Sin cuentas. Sin cookies de nuestra parte. Sin píxeles de rastreo. Sin analíticas que te identifiquen. Contamos cuántas veces se hace clic en cada recurso para saber qué ayuda necesitan las personas — pero nunca rastreamos quién hace clic. No se guardan datos al usar el Buscador de Ayuda ni la Lectura de Claridad. Servicios de terceros (plataformas de donación) pueden establecer sus propias cookies.",
    privacyP2: "No sabemos quién eres. No sabemos qué buscaste. No sabemos si regresaste. Eso es por diseño.",
    privacyP4: "Si estás en una situación donde alguien podría revisar tu dispositivo, puedes cerrar este sitio y no deja rastro.",
    privacyQ: "¿Preguntas?",
    footer: "Construido con nada. Construido para todos.",
    navTerms: "Términos",
    termsTitle: "Términos de Uso",
    termsP1: "Al usar helpfinder.help, aceptas los siguientes términos.",
    termsP2: "HelpFinder se proporciona tal cual, sin garantías de ningún tipo. No garantizamos la precisión o confiabilidad de la información. Los detalles de los programas pueden cambiar. Contacte directamente a los programas para verificar.",
    termsP4: "Las donaciones son contribuciones voluntarias. No son pagos por un servicio. Sedral Studios no es una organización sin fines de lucro. Las donaciones no son deducibles de impuestos.",
    termsP5: "Nos reservamos el derecho de modificar o descontinuar cualquier parte de este sitio sin previo aviso.",
    termsP6: "No recopilamos datos personales. Consulte nuestra página de Privacidad.",
    termsP7: "Todo el contenido, diseño y código es © 2026 Sedral Studios. Todos los derechos reservados.",
  },
  ne: {
    searchPlaceholder: "खोज्नुहोस् — खाना, बसोबास, दन्त, रोजगार...",
    door1Title: "मलाई सहायता चाहिन्छ",
    door1Hook: "तपाईं एक्लो हुनुहुन्न।", door1Desc: "सबै सहायता निःशुल्क। ५ मिनेटभित्र सही मानिसहरूसँग जोडिनुहोस्।",
    door1Btn: "सहायता खोज्नुहोस्",
    door1Sub: "वा 211 मा कल गर्नुहोस् — निःशुल्क, 24/7",
    helpDisclaimer: "HelpFinder सूचनात्मक उपकरण हो। कार्यक्रम विवरणहरू परिवर्तन हुन सक्छन्।",
    trust: "कुनै डाटा सङ्कलन छैन। कुनै खाता छैन। कुनै ट्र्याकिङ छैन।",
    feedbackTitle: "के छुट्यो भन्नुहोस्", feedbackDesc: "कुनै कार्यक्रम छुट्यो? केही गलत छ? हामी हरेक सन्देश पढ्छौं।", feedbackBtn: "सन्देश पठाउनुहोस्",
    aboutLink: "Sedral Studios बारे", aboutLinkDesc: "यो के हो। कसले बनायो। किन निःशुल्क।",
    navHome: "गृह", navAbout: "बारेमा", navSupport: "समर्थन", navPrivacy: "गोपनीयता", navContact: "सम्पर्क",
    back: "← पछाडि", aboutTitle: "बारेमा",
    aboutP1: "HelpFinder एक निःशुल्क उपकरण हो। कुनै खाता छैन। कुनै डाटा छैन।",
    aboutP2: "पहिलो शहर Rochester, NY हो — 34 श्रेणीहरूमा 180+ कार्यक्रमहरू।",
    aboutPersonal: "म Anthony DiMarzo, Rochester को। मसँग CDL छ र म दिनभर बाटो बनाउँछु। रातमा यो बनाउँछु। म भोलिको लागि राम्रो भविष्य बनाउन चाहन्छु। मैले देखें कि संकटमा परेका मानिसहरूले सहायता पाउन सक्दैनन् — यो नभएर होइन, कसैले सरल भाषामा एकै ठाउँमा राखेन। त्यसैले मैले गरें। कुनै डिग्री छैन। कुनै कोष छैन। म र एउटा कम्प्युटर मात्र।",
    aboutFamily: "म Brockport मा मेरो मंगेतर र हाम्रो छोरासँग बस्छु। उनी छ वर्षको छ। उनी नै यो अस्तित्वको कारण हो। उसले पाउने संसार उसले जन्मिएको भन्दा राम्रो हुनुपर्छ।",
    aboutSedral: "Sedral Studios Steven T. May को नाममा राखिएको हो। उनी मेरो साथी थिए। उनले MIT मा अध्ययन गरे। उनले कम्प्युटर बनाउनुहुन्थ्यो, सुरक्षा प्रणाली स्थापना गर्नुहुन्थ्यो, दर्शन र मनोविज्ञान पढ्नुहुन्थ्यो, र आफ्ना बिरालाहरूलाई माया गर्नुहुन्थ्यो। उनलाई अटिज्म थियो, र अरूले नदेख्ने कुरा देख्ने दिमाग थियो। उनी 2025 को क्रिसमस इभमा 47 वर्षको उमेरमा गए। यो कामले उनको नाम बोक्छ किनभने सबैभन्दा महत्त्वपूर्ण कुराहरू कसैसँगै हराउनु हुँदैन।",
    aboutClose: "सबै कुरा निःशुल्क छ। निःशुल्क राख्न मद्दत गर्न चाहनुहुन्छ भने, दान बटन छ। दान गर्न सक्नुहुन्न भने, उपकरणहरू प्रयोग गर्नुहोस्। त्यति पुग्छ।",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "सम्पर्क गर्नुहोस्।",
    contactTitle: "सम्पर्क",
    supportTitle: "यो परियोजनालाई समर्थन गर्नुहोस्",
    supportDesc: "HelpFinder सबैको लागि निःशुल्क छ।",
    tier1: "एक हप्ता साइट चलाउँछ", tier2: "एक महिना होस्टिङ", tier3: "नयाँ शहर थप्न मद्दत",
    donatePaypal: "PayPal मार्फत दान", teamwork: "सामूहिक प्रयासले सपना साकार हुन्छ।",
    supportDisclaimer: "दानले होस्टिङ र विस्तारलाई समर्थन गर्छ। धन्यवाद।",
    shareLabel: "HelpFinder साझा गर्नुहोस्",
    shareText: "Monroe County को लागि निःशुल्क सहयोग र कानूनी जानकारी। कुनै खाता छैन, कुनै विज्ञापन छैन, कुनै ट्र्याकिङ छैन।",
    shareAriaLabel: "HelpFinder चाहिने कसैलाई साझा गर्नुहोस्",
    privacyTitle: "गोपनीयता", privacyShort: "छोटो संस्करण: हामी व्यक्तिगत डाटा सङ्कलन गर्दैनौं। (हामी रोचेस्टरलाई के चाहिन्छ सिक्दैछौं।)",
    privacyP1: "कुनै खाता छैन। कुनै कुकी छैन। कुनै ट्र्याकिङ छैन।",
    privacyP2: "हामीलाई थाहा छैन तपाईं को हुनुहुन्छ।",
    privacyP4: "कसैले तपाईंको उपकरण जाँच गर्न सक्छ भने, कुनै ट्रेस छैन।",
    privacyQ: "प्रश्नहरू?", footer: "केहीबाट निर्मित। सबैको लागि निर्मित।",
  },
  ar: {
    searchPlaceholder: "بحث — طعام، سكن، أسنان، وظائف...",
    door1Title: "أحتاج مساعدة",
    door1Hook: "لست وحدك.", door1Desc: "كل المساعدة مجانية. تواصل مع الأشخاص المناسبين في أقل من 5 دقائق.",
    door1Btn: "ابحث عن مساعدة",
    door1Sub: "أو اتصل بـ 211 — مجاني، 24/7، أي لغة",
    helpDisclaimer: "HelpFinder أداة معلوماتية فقط. تفاصيل البرامج قد تتغير.",
    trust: "لا بيانات مجمعة. لا حسابات. لا تتبع. أبداً.",
    feedbackTitle: "أخبرنا ما ينقص", feedbackDesc: "تعرف برنامجاً لم نذكره؟ شيء خاطئ؟ نقرأ كل رسالة.", feedbackBtn: "أرسل لنا رسالة",
    aboutLink: "عن Sedral Studios", aboutLinkDesc: "ما هذا. من بناه. لماذا مجاني.",
    navHome: "الرئيسية", navAbout: "عن", navSupport: "دعم", navPrivacy: "الخصوصية", navContact: "اتصل",
    back: "← رجوع", aboutTitle: "عن",
    aboutP1: "HelpFinder أداة مجانية. لا حسابات. لا بيانات. لا إعلانات.",
    aboutP2: "نبدأ في روتشستر، نيويورك. مجاني. موثّق. بدون حساب. ينمو كل يوم.",
    aboutPersonal: "أنا Anthony DiMarzo من روتشستر. أحمل رخصة قيادة تجارية وأقضي أيامي في بناء الطرق. أقضي ليالي في بناء هذا. أفضّل بناء مستقبل أفضل للغد. لاحظت أن الناس في أزمة لا يجدون المساعدة — ليس لأنها غير موجودة، بل لأن أحداً لم يجمعها في مكان واحد بلغة بسيطة. ففعلت ذلك. لا شهادة. لا تمويل. لا مستثمرين. أنا وحاسوب فقط.",
    aboutFamily: "أعيش في Brockport مع خطيبتي وابننا. عمره ست سنوات. هو سبب وجود هذا. العالم الذي سيرثه يجب أن يكون أفضل من الذي وُلد فيه.",
    aboutSedral: "Sedral Studios سُمّي على اسم Steven T. May. كان صديقي. درس في MIT. كان يبني أجهزة الكمبيوتر، ويركّب أنظمة الأمن، ويقرأ الفلسفة وعلم النفس، ويحب قططه. كان مصاباً بالتوحد، وكان لديه عقل يرى ما لا يراه الآخرون. رحل ليلة عيد الميلاد 2025، عن عمر يناهز 47 عاماً. هذا العمل يحمل اسمه لأن الأشياء الأهم لا ينبغي أن تختفي عندما يرحل شخص ما.",
    aboutClose: "كل شيء هنا مجاني. إذا أردت المساعدة في إبقائه مجانياً، هناك زر تبرع. إذا لم تستطع التبرع، استخدم الأدوات. هذا يكفي.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "تواصل معنا.",
    contactTitle: "اتصل",
    supportTitle: "ادعم هذا المشروع", supportDesc: "HelpFinder مجاني للجميع.",
    tier1: "يبقي الموقع يعمل لأسبوع", tier2: "يغطي شهراً من الاستضافة", tier3: "يساعدنا بإضافة مدينة جديدة",
    donatePaypal: "تبرع عبر PayPal", teamwork: "العمل الجماعي يحقق الحلم.",
    supportDisclaimer: "التبرعات تدعم الاستضافة والتوسع. شكراً.",
    shareLabel: "شارك HelpFinder",
    shareText: "مساعدة مجانية ومعلومات قانونية لمقاطعة مونرو. بدون حسابات، بدون إعلانات، بدون تتبع.",
    shareAriaLabel: "شارك HelpFinder مع شخص يحتاجه",
    privacyTitle: "الخصوصية", privacyShort: "الخلاصة: لا نجمع بيانات شخصية. (نتعلم ما يحتاجه روتشستر.)",
    privacyP1: "لا حسابات. لا كوكيز. لا تتبع.", privacyP2: "لا نعرف من أنت.",
    privacyP4: "لا أثر على جهازك.", privacyQ: "أسئلة؟", footer: "بُني من لا شيء. بُني للجميع.",
  },
  sw: {
    searchPlaceholder: "Tafuta — chakula, makazi, meno, kazi...",
    door1Title: "Nahitaji msaada",
    door1Hook: "Huko peke yako.", door1Desc: "Msaada wote ni bure. Ungana na watu sahihi ndani ya dakika 5.",
    door1Btn: "Tafuta msaada",
    door1Sub: "au piga 211 — bure, 24/7, lugha yoyote",
    helpDisclaimer: "HelpFinder ni zana ya habari tu. Maelezo ya programu yanaweza kubadilika.",
    trust: "Hakuna data. Hakuna akaunti. Hakuna ufuatiliaji.",
    feedbackTitle: "Tuambie kinachokosekana", feedbackDesc: "Unajua programu tuliyokosa? Kitu kibaya? Tunasoma kila ujumbe.", feedbackBtn: "Tutumie ujumbe",
    aboutLink: "Kuhusu Sedral Studios", aboutLinkDesc: "Hii ni nini. Nani alijenga. Kwa nini ni bure.",
    navHome: "Nyumbani", navAbout: "Kuhusu", navSupport: "Saidia", navPrivacy: "Faragha", navContact: "Wasiliana",
    back: "← Rudi", aboutTitle: "Kuhusu",
    aboutP1: "HelpFinder ni zana ya bure.", aboutP2: "Mji wa kwanza ni Rochester, NY.",
    aboutPersonal: "Mimi ni Anthony DiMarzo wa Rochester. Nina leseni ya kuendesha magari makubwa na ninajenga barabara mchana. Usiku ninajenga hii. Ningependa kujenga mustakabali bora wa kesho. Niligundua watu walio katika shida hawawezi kupata msaada — si kwa sababu haupo, bali kwa sababu hakuna aliyeuweka mahali pamoja kwa lugha rahisi. Kwa hivyo nikafanya. Hakuna shahada. Hakuna fedha. Mimi na kompyuta tu.",
    aboutFamily: "Ninaishi Brockport na mchumba wangu na mtoto wetu. Ana miaka sita. Yeye ndiye sababu hii ipo. Ulimwengu atakaourithi unapaswa kuwa bora kuliko aliozaliwa ndani yake.",
    aboutSedral: "Sedral Studios imepewa jina la Steven T. May. Alikuwa rafiki yangu. Alisoma katika MIT. Alijenga kompyuta, akasakinisha mifumo ya usalama, akasoma falsafa na saikolojia, na akapenda paka zake. Alikuwa na usonji, na alikuwa na akili iliyoona mambo ambayo wengine hawakuweza. Aliondoka usiku wa Krismasi 2025, akiwa na umri wa miaka 47. Kazi hii inabeba jina lake kwa sababu mambo muhimu zaidi hayapaswi kutoweka mtu anapoondoka.",
    aboutClose: "Kila kitu hapa ni bure. Ukitaka kusaidia kuiweka bure, kuna kitufe cha kuchangia. Usipoweza kuchangia, tumia zana. Hiyo inatosha.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "Wasiliana nasi.", contactTitle: "Wasiliana",
    supportTitle: "Saidia mradi huu", supportDesc: "HelpFinder ni bure kwa wote.",
    tier1: "Inaweka tovuti ikifanya kazi kwa wiki", tier2: "Inashughulikia mwezi wa hosting",
    tier3: "Inasaidia kuongeza mji mpya",
    donatePaypal: "Changia kupitia PayPal", teamwork: "Kazi ya pamoja hufanya ndoto kuwa kweli.",
    supportDisclaimer: "Michango inasaidia hosting na upanuzi. Asante.",
    shareLabel: "Shiriki HelpFinder",
    shareText: "Msaada wa bure na habari za kisheria kwa Monroe County. Hakuna akaunti, hakuna matangazo, hakuna ufuatiliaji.",
    shareAriaLabel: "Shiriki HelpFinder na mtu anayehitaji",
    privacyTitle: "Faragha", privacyShort: "Toleo fupi: hatukusanyi data binafsi.",
    privacyP1: "Hakuna akaunti. Hakuna kuki. Hakuna ufuatiliaji.", privacyP2: "Hatujui wewe ni nani.",
    privacyP4: "Hakuna athari kwenye kifaa chako.",
    privacyQ: "Maswali?", footer: "Imejengwa kutoka kwa chochote. Imejengwa kwa wote.",
  },
  my: {
    searchPlaceholder: "ရှာရန် — အစားအစာ၊ အိမ်ရာ၊ သွားဘက်၊ အလုပ်...",
    door1Title: "ကျွန်တော်/မ အကူအညီလိုပါတယ်",
    door1Hook: "သင်တစ်ယောက်တည်းမဟုတ်ပါ။", door1Desc: "အကူအညီအားလုံး အခမဲ့။ မိနစ် ၅ အတွင်း မှန်ကန်သူများနှင့် ချိတ်ဆက်ပါ။",
    door1Btn: "အကူအညီရှာပါ",
    door1Sub: "သို့မဟုတ် 211 ကိုခေါ်ပါ — အခမဲ့, 24/7",
    helpDisclaimer: "HelpFinder သည် သတင်းအချက်အလက်ကိရိယာသာဖြစ်သည်။",
    trust: "ဒေတာမကောက်ပါ။ အကောင့်မရှိ။ ခြေရာခံမှုမရှိ။",
    feedbackTitle: "ဘာလိုနေသေးလဲပြောပါ", feedbackDesc: "လိုအပ်တာရှိရင် မက်ဆေ့ချ်ပို့ပါ။", feedbackBtn: "မက်ဆေ့ချ်ပို့ပါ",
    aboutLink: "Sedral Studios အကြောင်း", aboutLinkDesc: "ဒါကဘာလဲ။ ဘယ်သူတည်ဆောက်တာလဲ။",
    navHome: "ပင်မ", navAbout: "အကြောင်း", navSupport: "ထောက်ပံ့", navPrivacy: "ကိုယ်ရေး", navContact: "ဆက်သွယ်",
    back: "← နောက်သို့", aboutTitle: "အကြောင်း",
    aboutP1: "HelpFinder သည် အခမဲ့ကိရိယာဖြစ်သည်။", aboutP2: "ပထမမြို့မှာ Rochester, NY။",
    aboutPersonal: "ကျွန်တော်က Anthony DiMarzo၊ Rochester က။ CDL လိုင်စင်ရှိပြီး နေ့စဉ်လမ်းတွေဆောက်နေတယ်။ ညတိုင်း ဒါကိုတည်ဆောက်နေတယ်။ မနက်ဖြန်အတွက် ပိုကောင်းတဲ့အနာဂတ်တည်ဆောက်ချင်တယ်။ အကျပ်အတည်းရောက်နေတဲ့လူတွေ အကူအညီရှာမတွေ့ဘူးဆိုတာ သတိထားမိတယ် — မရှိလို့မဟုတ်ဘူး၊ ဘယ်သူမှ ရိုးရှင်းတဲ့စကားနဲ့ တစ်နေရာတည်းမှာ မထားခဲ့လို့။ ဒါကြောင့် ကျွန်တော်လုပ်ခဲ့တယ်။ ဘွဲ့မရှိ။ ရန်ပုံငွေမရှိ။ ကျွန်တော်နဲ့ ကွန်ပျူတာတစ်လုံးပဲ။",
    aboutFamily: "Brockport မှာ ကျွန်တော့်ရည်းစားနဲ့ သားလေးနဲ့အတူနေတယ်။ သူ ခြောက်နှစ်။ သူကြောင့် ဒါရှိနေတာ။ သူအမွေဆက်ခံမယ့်ကမ္ဘာ သူမွေးဖွားခဲ့တာထက် ပိုကောင်းသင့်တယ်။",
    aboutSedral: "Sedral Studios ကို Steven T. May အတွက် အမည်ပေးထားတယ်။ သူက ကျွန်တော့်သူငယ်ချင်း။ သူက MIT မှာ ပညာသင်ခဲ့တယ်။ ကွန်ပျူတာတွေဆောက်တယ်၊ လုံခြုံရေးစနစ်တွေ တပ်ဆင်တယ်၊ ဒဿနိကဗေဒနဲ့ စိတ်ပညာစာအုပ်တွေဖတ်တယ်၊ သူ့ကြောင်တွေကို ချစ်တယ်။ သူ့မှာ autism ရှိပြီး၊ တခြားသူတွေမမြင်တာကို မြင်နိုင်တဲ့စိတ်ရှိတယ်။ 2025 ခရစ္စမတ်ညမှာ အသက် 47 နှစ်မှာ ထွက်သွားခဲ့တယ်။ အရေးကြီးဆုံးအရာတွေ လူတစ်ယောက်နဲ့အတူ ပျောက်မသွားသင့်လို့ ဒီအလုပ်က သူ့နာမည်ကို ဆောင်ထားတယ်။",
    aboutClose: "ဒီမှာအားလုံး အခမဲ့။ အခမဲ့ထားဖို့ ကူညီချင်ရင် လှူဒါန်းခလုတ်ရှိတယ်။ မလှူနိုင်ရင် ကိရိယာတွေသုံးပါ။ ဒါပဲလုံလောက်ပါတယ်။",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "ဆက်သွယ်ပါ။", contactTitle: "ဆက်သွယ်ရန်",
    supportTitle: "ဒီပရောဂျက်ကိုထောက်ပံ့ပါ", supportDesc: "HelpFinder သည် လူတိုင်းအတွက်အခမဲ့ဖြစ်သည်။",
    tier1: "တစ်ပတ်စာဆိုက်ကိုလည်ပတ်စေသည်", tier2: "တစ်လစာ hosting", tier3: "မြို့သစ်ထည့်ရန်ကူညီသည်",
    donatePaypal: "PayPal မှတစ်ဆင့်လှူဒါန်း", teamwork: "အသင်းအဖွဲ့လုပ်ဆောင်မှုက အိပ်မက်ကိုအကောင်အထည်ဖော်သည်။",
    supportDisclaimer: "လှူဒါန်းငွေများသည် hosting နှင့်တိုးချဲ့မှုကိုထောက်ပံ့သည်။",
    shareLabel: "HelpFinder မျှဝေပါ",
    shareText: "Monroe County အတွက် အခမဲ့ အကူအညီနှင့် ဥပဒေဆိုင်ရာ အချက်အလက်များ။ အကောင့်မရှိ၊ ကြော်ငြာမရှိ၊ ခြေရာခံမှုမရှိ။",
    shareAriaLabel: "လိုအပ်သူတစ်ယောက်ကို HelpFinder မျှဝေပါ",
    privacyTitle: "ကိုယ်ရေးကိုယ်တာ", privacyShort: "အတိုချုပ်: ကိုယ်ရေးကိုယ်တာဒေတာမကောက်ပါ။ (ရော့ချက်စတားကို ဘာလိုအပ်သလဲ လေ့လာနေပါတယ်။)",
    privacyP1: "အကောင့်မရှိ။ ကွတ်ကီးမရှိ။", privacyP2: "သင်ဘယ်သူလဲမသိပါ။",
    privacyP4: "သင့်စက်တွင်ခြေရာမရှိ။",
    privacyQ: "မေးခွန်းများ?", footer: "ဘာမှမရှိဘဲတည်ဆောက်ခဲ့သည်။ လူတိုင်းအတွက်။",
  },
  so: {
    searchPlaceholder: "Raadi — cunto, guryo, ilko, shaqo...",
    door1Title: "Caawimaad baan u baahanahay",
    door1Hook: "Keligaa ma tihid.", door1Desc: "Caawimaadda oo dhan waa bilaash. La xiriir dadka saxda ah 5 daqiiqo gudahood.",
    door1Btn: "Raadi caawimaad",
    door1Sub: "ama wac 211 — bilaash, 24/7, luqad kasta",
    helpDisclaimer: "HelpFinder waa qalab macluumaad. Faahfaahintu way isbeddeli kartaa.",
    trust: "Xog lama ururiyo. Akoon ma jirto. La socon maayo.",
    feedbackTitle: "Noo sheeg waxa maqan", feedbackDesc: "Ma taqaan barnaamij aanan haysan? Wax khalad ah? Fariin kasta waan aqrinaa.", feedbackBtn: "Noo soo dir fariin",
    aboutLink: "Ku saabsan Sedral Studios", aboutLinkDesc: "Waa maxay. Yaa dhisay. Sababta oo bilaash ah.",
    navHome: "Guriga", navAbout: "Ku saabsan", navSupport: "Taageer", navPrivacy: "Asturnaanta", navContact: "Xiriir",
    back: "← Dib u noqo", aboutTitle: "Ku saabsan",
    aboutP1: "HelpFinder waa qalab bilaash ah.", aboutP2: "Magaalada kowaad waa Rochester, NY.",
    aboutPersonal: "Waxaan ahay Anthony DiMarzo oo ka socda Rochester. Waxaan hayaa CDL waxaanan maalintii dhisaa jidadka. Habeenkii waxaan dhisaa tan. Waxaan doorbidayaa inaan dhiso mustaqbal ka fiican berrito. Waxaan ogaaday in dadka dhibaatada ku jira aysan heli karin caawimaad — ma aha sababtoo ah ma jirto, laakiin qofna ma dhigin meel hal ah oo luqad fudud ah. Markaa waan sameeyay. Shahaado ma hayo. Maalgelin ma jirto. Aniga iyo kombiyuutar keliya.",
    aboutFamily: "Waxaan ku noolahay Brockport aniga iyo xaaskayga la doortay iyo wiilkayga. Wuxuu jiraa lix sano. Isaga ayaa sababta tan jira. Dunida uu dhaxli doono waa inay ka fiicnaataa tii uu ku dhashay.",
    aboutSedral: "Sedral Studios waxaa loogu magacaabay Steven T. May. Wuxuu ahaa saaxiibkay. Wuxuu wax ku bartay MIT. Wuxuu dhisi jiray kombuyuutarro, rakibi jiray nidaamyada amniga, akhrin jiray falsafad iyo cilmi-nafsiga, wuxuuna jeclaa bisadihiisa. Wuxuu lahaa autism, wuxuuna lahaa maskax arkaysa waxa aan dadka kale arki karin. Wuxuu tegey habeenkii Ciidda 2025, isagoo 47 jir ah. Shaqadani waxay sidataa magaciisa sababtoo ah waxyaalaha ugu muhiimsan ma aha inay la lumaan marka qof tago.",
    aboutClose: "Wax walba halkan waa bilaash. Haddaad rabto inaad caawiso inay bilaash ahaato, waxaa jira badhanka deeqda. Haddaadan deeq bixin karin, isticmaal qalabka. Taasi way ku filantahay.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "Nala xiriir.", contactTitle: "Xiriir",
    supportTitle: "Taageer mashruucan", supportDesc: "HelpFinder waa bilaash qof walba.",
    tier1: "Websaydhka toddobaad u shaqeeysiiya", tier2: "Bil hosting", tier3: "Magaalo cusub ku darida",
    donatePaypal: "Ku deeq PayPal", teamwork: "Wadashaqayntu waxay noqotaa riyada run.",
    supportDisclaimer: "Deeqaha waxay taageeraan hosting iyo ballaarinta. Mahadsanid.",
    shareLabel: "La wadaag HelpFinder",
    shareText: "Caawimo lacag la'aan ah iyo macluumaad sharci ah ee Monroe County. Akoon la'aan, xayeysiis la'aan, raadraac la'aan.",
    shareAriaLabel: "La wadaag HelpFinder qof u baahan",
    privacyTitle: "Asturnaanta", privacyShort: "Gaabis: xogta shaqsiga ma uruurino.",
    privacyP1: "Akoon ma jirto. Cookies ma jirto.", privacyP2: "Kuma aqoonsano.",
    privacyP4: "Raad ma ka hadhayo qalabkaaga.",
    privacyQ: "Su'aallo?", footer: "Wax la'aan laga dhisay. Qof walba loogu dhisay.",
  },
  zh: {
    searchPlaceholder: "搜索 — 食物、住房、牙科、工作...",
    door1Title: "我需要帮助",
    door1Hook: "你不是一个人。", door1Desc: "所有帮助均免费。5分钟内找到对的人。食物、住房、医疗等。",
    door1Btn: "寻找帮助",
    door1Sub: "或拨打211 — 免费，24/7，任何语言",
    helpDisclaimer: "HelpFinder仅为信息工具。项目详情可能会变更。",
    trust: "不收集数据。无账户。无追踪。永远。",
    feedbackTitle: "告诉我们缺少什么", feedbackDesc: "知道我们遗漏的项目？有什么问题？我们会阅读每条消息。", feedbackBtn: "给我们留言",
    aboutLink: "关于 Sedral Studios", aboutLinkDesc: "这是什么。谁建的。为什么免费。",
    navHome: "首页", navAbout: "关于", navSupport: "支持", navPrivacy: "隐私", navContact: "联系",
    back: "← 返回", aboutTitle: "关于",
    aboutP1: "HelpFinder是一个免费工具。无账户。无数据。无广告。",
    aboutP2: "从纽约州罗切斯特起步。免费。已核实。无需账户。每日更新。",
    aboutPersonal: "我是Anthony DiMarzo，来自Rochester。我有商业驾照，白天修路。晚上建造这个。我宁愿为明天建造更好的未来。我注意到危机中的人找不到帮助——不是因为帮助不存在，而是没人用简单的语言把它放在一个地方。所以我做了。没有学位。没有资金。没有投资者。只有我和一台电脑。",
    aboutFamily: "我和未婚妻以及我们的儿子住在Brockport。他六岁。他是这一切存在的原因。他将继承的世界应该比他出生时的更好。",
    aboutSedral: "Sedral Studios以Steven T. May命名。他是我的朋友。他在麻省理工学院（MIT）学习。他制作电脑、安装安防系统、阅读哲学和心理学，热爱他的猫。他有自闭症，并拥有能看到别人看不到的东西的头脑。他于2025年平安夜离开了，享年47岁。这项工作以他的名字命名，因为最重要的东西不应该随着某人的离去而消失。",
    aboutClose: "这里的一切都是免费的。如果你想帮助保持免费，有一个捐赠按钮。如果不能捐赠，使用工具就好。这就够了。",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "联系我们。", contactTitle: "联系",
    supportTitle: "支持这个项目", supportDesc: "HelpFinder对所有人免费。",
    tier1: "维持网站运行一周", tier2: "覆盖一个月的托管", tier3: "帮助我们添加新城市",
    donatePaypal: "通过PayPal捐赠", teamwork: "团队合作成就梦想。",
    supportDisclaimer: "捐款支持托管和扩展。谢谢。",
    shareLabel: "分享 HelpFinder",
    shareText: "门罗县免费帮助和法律信息。无需账户，无广告，无追踪。",
    shareAriaLabel: "将 HelpFinder 分享给需要的人",
    privacyTitle: "隐私", privacyShort: "简短版：我们不收集个人数据。（我们正在了解罗切斯特需要什么。）",
    privacyP1: "无账户。无Cookie。无追踪。", privacyP2: "我们不知道你是谁。",
    privacyP4: "你的设备上没有痕迹。",
    privacyQ: "问题？", footer: "从无到有。为所有人而建。",
  },
};

const t = (lang, key) => (UI[lang] && UI[lang][key]) || UI.en[key] || key;

// ── PALETTE ──
const C = {
  forest: "#2e7d32", leaf: "#43a047", sage: "#e8f5e9",
  warmBg: "#fafaf7", cream: "#f5f0e8", bark: "#1a1a1a",
  stone: "#555", dust: "#767676", amber: "#d4a056", gold: "#e6c619",
  amberLight: "#fdf6ec", white: "#fff", border: "#e8e4dc",
};

export default function HelpFinderLanding({ onNavigateHelp, onLangChange, onCityDetected, onJurisdictionsDetected }) {
  const [page, setPage] = useState(PAGES.HOME);
  const [lang, setLang] = useState("en");
  const [selectedEntryId, setSelectedEntryId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGlossaryTermId, setSelectedGlossaryTermId] = useState(null);
  const [selectedGlossaryCategory, setSelectedGlossaryCategory] = useState(null);
  const [legalLang, setLegalLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [city, setCity] = useState("your area");
  const [localJurisdictions, setLocalJurisdictions] = useState([]);

  // Detect town/village via local GeoJSON — no coordinates leave the device
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const matches = resolveJurisdiction({ lat: latitude, lng: longitude });
      if (matches.length > 0) {
        // Use the most specific match (village first, then town/city) for display
        const displayName = matches[0].displayName;
        setCity(displayName);
        if (onCityDetected) onCityDetected(displayName);
        if (onJurisdictionsDetected) onJurisdictionsDetected(matches);
        setLocalJurisdictions(matches);
      }
    }, () => {});
  }, []);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { const tm = setTimeout(() => setLoaded(true), 50); return () => clearTimeout(tm); }, []);

  // Remove the prerendered static content once React is running.
  // The prerender script injects a #prerender-content div for SEO
  // (so Googlebot sees real text). When React mounts, it's no longer needed.
  useEffect(() => {
    const el = document.getElementById("prerender-content");
    if (el) el.remove();
  }, []);

  // Initialize page state from URL pathname (history-based routing)
  useEffect(() => {
    const parsed = parsePath(window.location.pathname);
    if (parsed.entryId) setSelectedEntryId(parsed.entryId);
    if (parsed.categoryId) setSelectedCategory(parsed.categoryId);
    if (parsed.termId) setSelectedGlossaryTermId(parsed.termId);
    if (parsed.glossaryCat) setSelectedGlossaryCategory(parsed.glossaryCat);
    setPage(parsed.page);
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const onPop = () => {
      const parsed = parsePath(window.location.pathname);
      if (parsed.entryId) setSelectedEntryId(parsed.entryId);
      if (parsed.categoryId) setSelectedCategory(parsed.categoryId);
      if (parsed.termId) setSelectedGlossaryTermId(parsed.termId);
      if (parsed.glossaryCat) setSelectedGlossaryCategory(parsed.glossaryCat);
      setPage(parsed.page);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Auto-navigate to Support page if URL hash is #support (used by HelpFinder footer link)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#support") {
      setPage(PAGES.SUPPORT);
      // Clear the hash so refreshing the page doesn't keep going to Support
      try { window.history.replaceState(null, "", window.location.pathname); } catch (e) {}
    }
  }, []);

  const nav = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo(0, 0);
    const newPath = PAGE_PATHS[p];
    if (newPath && window.location.pathname !== newPath) {
      try { window.history.pushState({}, "", newPath); } catch (e) {}
    }
  };

  const openEntry = (id) => {
    setSelectedEntryId(id);
    setPage(PAGES.LEGAL_ENTRY);
    setMenuOpen(false);
    const newPath = "/know-your-rights/" + id;
    if (window.location.pathname !== newPath) {
      try { window.history.pushState({}, "", newPath); } catch (e) {}
    }
    window.scrollTo(0, 0);
  };

  const openCategory = (cat) => {
    setSelectedCategory(cat);
    setPage(PAGES.LEGAL_CATEGORY);
    setMenuOpen(false);
    const newPath = "/know-your-rights/topic/" + cat;
    if (window.location.pathname !== newPath) {
      try { window.history.pushState({}, "", newPath); } catch (e) {}
    }
    window.scrollTo(0, 0);
  };

  const openGlossaryTerm = (id) => {
    setSelectedGlossaryTermId(id);
    setPage(PAGES.GLOSSARY_TERM);
    setMenuOpen(false);
    const newPath = "/glossary/" + id;
    if (window.location.pathname !== newPath) {
      try { window.history.pushState({}, "", newPath); } catch (e) {}
    }
    window.scrollTo(0, 0);
  };

  const openGlossaryCategory = (cat) => {
    setSelectedGlossaryCategory(cat);
    setPage(PAGES.GLOSSARY_CATEGORY);
    setMenuOpen(false);
    const newPath = "/glossary/category/" + cat;
    if (window.location.pathname !== newPath) {
      try { window.history.pushState({}, "", newPath); } catch (e) {}
    }
    window.scrollTo(0, 0);
  };
  const isRTL = lang === "ar";

  // ── Donation handler — calls Stripe checkout API ──
  const [donateLoading, setDonateLoading] = useState(false);
  const [donateError, setDonateError] = useState(null);
  const [donateRecurring, setDonateRecurring] = useState(false);
  const [donateCustom, setDonateCustom] = useState("");
  const handleDonate = async (amountCents) => {
    setDonateLoading(true);
    setDonateError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountCents, recurring: donateRecurring }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err) {
      setDonateError("Card payment is temporarily unavailable. Please try PayPal below.");
      setDonateLoading(false);
    }
  };
  const handleDonateCustom = () => {
    const dollars = parseFloat(donateCustom);
    if (isNaN(dollars) || dollars < 1) {
      setDonateError("Please enter an amount of $1 or more.");
      return;
    }
    if (dollars > 10000) {
      setDonateError("For donations over $10,000, please contact us directly at hello@helpfinder.help.");
      return;
    }
    handleDonate(Math.round(dollars * 100));
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} style={{
      fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, -apple-system, sans-serif",
      background: C.warmBg, color: C.bark, minHeight: "100vh",
      maxWidth: 520, margin: "0 auto", position: "relative",
      opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.warmBg}; }
        .hf-door { transition: transform 0.15s ease, box-shadow 0.15s ease; cursor: pointer; text-decoration: none; display: block; }
        .hf-door:active { transform: scale(0.98); }
        @media (hover: hover) { .hf-door:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); } }
        .hf-nav-link { background: none; border: none; font-size: 14px; cursor: pointer; color: ${C.stone}; padding: 6px 0; font-family: inherit; transition: color 0.15s; }
        .hf-nav-link:hover { color: ${C.forest}; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${C.forest}; outline-offset: 2px; }
        .hf-fade-in { animation: hfFadeUp 0.5s ease forwards; opacity: 0; }
        .hf-d1 { animation-delay: 0.1s; } .hf-d2 { animation-delay: 0.15s; }
        .hf-d3 { animation-delay: 0.25s; } .hf-d4 { animation-delay: 0.35s; }
        .hf-d5 { animation-delay: 0.45s; } .hf-d6 { animation-delay: 0.55s; }
        @keyframes hfFadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 640px) { .hf-help-words { display: none; } }
      `}</style>

      {/* ═══ HEADER ═══ */}
      <header style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => nav(PAGES.HOME)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.forest, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: -1, flexShrink: 0 }}>HF</div>
          <span style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 18, color: C.bark, letterSpacing: -0.3,
          }}>HelpFinder</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <select
          value={lang} onChange={(e) => { setLang(e.target.value); if (onLangChange) onLangChange(e.target.value); }}
          aria-label="Language"
          style={{
            background: C.white, color: C.bark, border: `1px solid ${C.border}`,
            borderRadius: 20, padding: "5px 12px", fontSize: 13, cursor: "pointer",
            fontFamily: "inherit",
          }}
          >
          {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>

          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
          background: "none", border: "none", cursor: "pointer", padding: 8,
          display: "flex", flexDirection: "column", gap: 4,
          }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
            width: 20, height: 2, background: C.bark, borderRadius: 1, transition: "all 0.2s",
            transform: menuOpen ? i===0 ? "rotate(45deg) translate(4px,4px)" : i===2 ? "rotate(-45deg) translate(4px,-4px)" : "scaleX(0)" : "none",
            opacity: menuOpen && i===1 ? 0 : 1,
            }} />
          ))}
          </button>
        </div>
      </header>

      {/* ═══ MOBILE NAV ═══ */}
      {menuOpen && (
        <nav style={{
          position: "absolute", top: 52, left: 0, right: 0, zIndex: 100,
          background: C.white, borderBottom: `1px solid ${C.border}`,
          padding: "12px 20px", display: "flex", flexDirection: "column", gap: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}>
          <button className="hf-nav-link" onClick={() => nav(PAGES.HOME)}>{t(lang,"navHome")}</button>
          <button className="hf-nav-link" onClick={() => nav(PAGES.ABOUT)}>{t(lang,"navAbout")}</button>
          <button className="hf-nav-link" onClick={() => nav(PAGES.SUPPORT)}>{t(lang,"navSupport")}</button>
          <button className="hf-nav-link" onClick={() => nav(PAGES.PRIVACY)}>{t(lang,"navPrivacy")}</button>
        </nav>
      )}

      {/* ═══════════════════ HOME ═══════════════════ */}
      {page === PAGES.HOME && (
        <main style={{ padding: "0 20px 40px" }}>

          {/* HELP IN EVERY LANGUAGE — hidden on mobile (<=640px) to preserve first-screen real estate */}
          <div className="hf-fade-in hf-d1 hf-help-words" style={{
            textAlign: "center", paddingTop: 36, marginBottom: 4,
          }}>
            <div style={{
              fontSize: 13, color: C.dust, letterSpacing: 1, lineHeight: 2,
              wordSpacing: 6,
            }}>
              {HELP_WORDS.join("  ·  ")}
            </div>
          </div>

          {/* MARK */}
          <div className="hf-fade-in hf-d1" style={{ textAlign: "center", padding: "8px 0" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: C.forest, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: -1, margin: "0 auto 12px" }}>HF</div>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 34, fontWeight: 700, color: C.bark,
              letterSpacing: -1, lineHeight: 1.1, marginBottom: 8,
            }}>HelpFinder</h1>
            <div style={{ fontSize: 14, color: C.dust, letterSpacing: 0.3, fontStyle: "italic" }}>
              the only <span style={{ fontWeight: 600, color: C.stone }}>.help</span> you need
            </div>
            {city && city !== "your area" && (
              <div style={{ fontSize: 12, color: C.dust, marginTop: 4 }}>{city}</div>
            )}
          </div>

          {/* ── MISSION LINE ── */}
          <div className="hf-fade-in hf-d2" style={{ textAlign: "center", marginTop: 24, padding: "0 20px" }}>
            <div style={{ fontSize: 14, color: C.stone, lineHeight: 1.6, maxWidth: 360, margin: "0 auto" }}>
              Programs. Rights. Answers.<br />
              <span style={{ fontSize: 12, color: C.dust }}>Built by someone who needed this help and couldn't find it.</span>
            </div>
          </div>

          {/* ── STATS ── */}
          <div className="hf-fade-in hf-d2" style={{ textAlign: "center", marginTop: 16 }}>
            <div style={{ fontSize: 11, color: C.dust, letterSpacing: 0.5 }}>
              {PROGRAMS.length} programs · {LEGAL_ENTRIES.length} legal guides · {GLOSSARY_TERMS.length} definitions
            </div>
          </div>

          {/* ── ENTER BUTTON ── */}
          <div className="hf-fade-in hf-d3" style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <a href="/help" rel="nofollow"
              onClick={(e) => { e.preventDefault(); if (onNavigateHelp) onNavigateHelp(); }}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                textDecoration: "none",
              }}>
              <div style={{
                width: 140, height: 140, borderRadius: "50%",
                background: `linear-gradient(135deg, ${C.forest} 0%, ${C.leaf} 100%)`,
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", color: C.white,
                boxShadow: "0 8px 32px rgba(46,125,50,0.30)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(46,125,50,0.40)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(46,125,50,0.30)"; }}
              >
                <div style={{ fontSize: 32, marginBottom: 4 }}>🏠</div>
                <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.1 }}>{t(lang,"door1Btn")}</div>
              </div>
              <div style={{ marginTop: 14, fontSize: 16, fontWeight: 700, color: C.forest }}>{t(lang,"door1Title")}</div>
              <div style={{ marginTop: 4, fontSize: 12, color: C.stone, textAlign: "center", maxWidth: 200, lineHeight: 1.4 }}>{t(lang,"door1Desc")}</div>
            </a>
          </div>

          {/* 211 under doors */}
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <a href="tel:211" style={{ fontSize: 12, color: C.dust, textDecoration: "none" }}>
              📞 {t(lang,"door1Sub")}
            </a>
          </div>

          <div style={{ textAlign: "center", marginTop: 20, marginBottom: 4 }}>
            <ShareButton
              title="HelpFinder"
              text={t(lang, "shareText")}
              url="https://helpfinder.help"
              label={t(lang, "shareLabel")}
              ariaLabel={t(lang, "shareAriaLabel")}
            />
          </div>

          {/* ── KNOW YOUR RIGHTS TILE ── */}
          <button
            onClick={() => nav(PAGES.LEGAL_LIBRARY)}
            className="hf-fade-in hf-d5 hf-kyr-tile"
            style={{
              width: "100%", textAlign: isRTL ? "right" : "left",
              background: C.amberLight, border: `1px solid ${C.amber}`,
              borderRadius: 24, padding: "18px 22px", cursor: "pointer",
              marginTop: 28, fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: 16,
            }}
          >
            <div style={{ fontSize: 34, flexShrink: 0, lineHeight: 1 }}>⚖️</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.bark, marginBottom: 3 }}>Know Your Rights</div>
              <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.45 }}>Free legal guides. Benefits, housing, employment, immigration.</div>
            </div>
            <div style={{ fontSize: 22, color: C.amber, flexShrink: 0, fontWeight: 700 }}>→</div>
          </button>

          {/* ── LEGAL GLOSSARY TILE ── plain-English court words */}
          <button
            onClick={() => nav(PAGES.GLOSSARY)}
            className="hf-fade-in hf-d5"
            style={{
              width: "100%", textAlign: isRTL ? "right" : "left",
              background: "#ede7f6", border: "1px solid #5e35b1",
              borderRadius: 24, padding: "18px 22px", cursor: "pointer",
              marginTop: 12, fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: 16,
            }}
          >
            <div style={{ fontSize: 34, flexShrink: 0, lineHeight: 1 }}>📖</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.bark, marginBottom: 3 }}>Legal Glossary</div>
              <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.45 }}>Plain-English words for what you hear in court and on notices.</div>
            </div>
            <div style={{ fontSize: 22, color: "#5e35b1", flexShrink: 0, fontWeight: 700 }}>→</div>
          </button>

          {/* ── TRADES TILE ── permit rules for contractors and homeowners */}
          <button
            onClick={() => openCategory("trades")}
            className="hf-fade-in hf-d5"
            style={{
              width: "100%", textAlign: isRTL ? "right" : "left",
              background: "#f5ede0", border: "1px solid #8d6e63",
              borderRadius: 24, padding: "18px 22px", cursor: "pointer",
              marginTop: 12, fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: 16,
            }}
          >
            <div style={{ fontSize: 34, flexShrink: 0, lineHeight: 1 }}>🔨</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.bark, marginBottom: 3 }}>Trade permits</div>
              <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.45 }}>Roofing, plumbing, electrical. Permit rules for every Monroe County town.</div>
            </div>
            <div style={{ fontSize: 22, color: "#6d4c41", flexShrink: 0, fontWeight: 700 }}>→</div>
          </button>

          {/* ── PETS TILE ── added April 9, 2026, nav fixed migrate-11 */}
          {/* Peer to Know Your Rights. Soft blue, paw icon. */}
          {/* Uses the same <a href="/help"> + onNavigateHelp() pattern as the */}
          {/* "Find help now" green circle at line ~709 — HelpFinder is a sibling */}
          {/* component mounted by the app router, not a sub-page of LandingPage. */}
          
          <a
            href="/help#c=pets" rel="nofollow"
            onClick={(e) => { e.preventDefault(); window.location.hash = "c=pets"; if (onNavigateHelp) onNavigateHelp(); }}
            className="hf-fade-in hf-d5"
            style={{
              width: "100%", textAlign: isRTL ? "right" : "left",
              background: "#e3f2fd", border: "1px solid #1565c0",
              borderRadius: 24, padding: "18px 22px", cursor: "pointer",
              marginTop: 12, fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: 16,
              textDecoration: "none", boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: 34, flexShrink: 0, lineHeight: 1 }}>🐾</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.bark, marginBottom: 3 }}>Help for pets</div>
              <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.45 }}>Adoption, vet care, food, surrender support, and shelters that accept pets.</div>
            </div>
            <div style={{ fontSize: 22, color: "#1565c0", flexShrink: 0, fontWeight: 700 }}>→</div>
          </a>

          {/* TRUST LINE */}
          <div className="hf-fade-in hf-d6" style={{ textAlign: "center", marginTop: 24, padding: "0 10px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: C.dust }}>
              <span style={{ fontSize: 14 }}>🔒</span> {t(lang,"trust")}
            </div>
          </div>

          {/* ── BELOW FOLD ── */}



          {/* FEEDBACK / COMMENTS → hello@ email */}
          <div style={{ padding: "20px 18px", background: C.sage, borderRadius: 24, border: "1px solid #c8e6c9", marginTop: 8 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: C.forest }}>{t(lang,"feedbackTitle")}</div>
            <div style={{ fontSize: 13, color: C.stone, lineHeight: 1.5, marginBottom: 12 }}>{t(lang,"feedbackDesc")}</div>
            <a href="mailto:hello@helpfinder.help" style={{
              display: "block", textAlign: "center", padding: "12px 20px",
              background: C.forest, color: C.white, borderRadius: 28,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
            }}>{t(lang,"feedbackBtn")} →</a>
          </div>

          {/* ABOUT TEASER */}
          <button onClick={() => nav(PAGES.ABOUT)} style={{
            width: "100%", textAlign: isRTL ? "right" : "left", background: "none",
            border: `1px solid ${C.border}`, borderRadius: 24,
            padding: "16px 18px", cursor: "pointer", marginTop: 14, fontFamily: "inherit",
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.bark, marginBottom: 2 }}>{t(lang,"aboutLink")}</div>
            <div style={{ fontSize: 13, color: C.stone }}>{t(lang,"aboutLinkDesc")} →</div>
          </button>
        </main>
      )}

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      {page === PAGES.ABOUT && (
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "0 20px 40px" }}>
          <button onClick={() => nav(PAGES.HOME)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: C.stone, padding: "16px 0", fontFamily: "inherit" }}>{t(lang,"back")}</button>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 30, fontWeight: 400, marginBottom: 8, color: C.bark }}>{t(lang,"aboutTitle")}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: C.bark, marginBottom: 20 }}>{t(lang,"aboutP1")}</p>

          {/* Family photo */}
          <div style={{ margin: "0 auto 24px", maxWidth: 320, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
            <img src="/family.jpg" alt="The DiMarzo family" style={{ width: "100%", display: "block" }} />
          </div>

          <div style={{ fontSize: 15, lineHeight: 1.75, color: C.bark }}>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutP2")}</p>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutPersonal")}</p>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutFamily")}</p>

            {/* What makes HelpFinder different */}
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, fontWeight: 400, marginTop: 28, marginBottom: 12, color: C.bark }}>What makes this different</h3>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutWhat")}</p>

            {/* Steven / Sedral */}
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, fontWeight: 400, marginTop: 28, marginBottom: 12, color: C.bark }}>Why it's called Sedral</h3>
            <p style={{ marginBottom: 16, color: C.stone }}>{t(lang,"aboutSedral")}</p>

            <p style={{ marginBottom: 16 }}>{t(lang,"aboutClose")} {" "}
              <button onClick={() => nav(PAGES.SUPPORT)} style={{ background: "none", border: "none", color: C.forest, fontWeight: 600, cursor: "pointer", padding: 0, fontSize: "inherit", fontFamily: "inherit", textDecoration: "underline" }}>Donate</button>.
            </p>
            <p style={{ marginBottom: 16, fontStyle: "italic", color: C.stone }}>{t(lang,"aboutSign")}</p>
            <p style={{ marginBottom: 0, color: C.stone, fontSize: 14 }}>{t(lang,"aboutAgency")}</p>
          </div>
          <div style={{ marginTop: 28, padding: "16px 18px", background: C.sage, borderRadius: 24, border: "1px solid #c8e6c9" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.forest, marginBottom: 4 }}>{t(lang,"contactTitle")}</div>
            <a href="mailto:hello@helpfinder.help" style={{ fontSize: 14, color: C.forest, textDecoration: "none" }}>hello@helpfinder.help</a>
          </div>
        </main>
      )}



      {/* ═══════════════════ SUPPORT ═══════════════════ */}
      {page === PAGES.SUPPORT && (
        <main style={{ padding: "0 20px 40px" }}>
          <button onClick={() => nav(PAGES.HOME)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: C.stone, padding: "16px 0", fontFamily: "inherit" }}>{t(lang,"back")}</button>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, fontWeight: 400, marginBottom: 12, color: C.bark }}>{t(lang,"supportTitle")}</h2>

          {/* Tax status banner — up top, honest */}
          <p style={{
            background: C.amberLight, border: `1px solid ${C.amber}`, borderRadius: 10,
            padding: "10px 14px", fontSize: 13, color: C.bark,
            marginBottom: 20, lineHeight: 1.5,
          }}>
            {t(lang,"taxStatusBanner")}
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.6, color: C.stone, marginBottom: 20 }}>{t(lang,"supportDesc")}</p>

          {/* One-time / Monthly toggle */}
          <div style={{ display: "flex", gap: 0, marginBottom: 16, border: `1.5px solid ${C.border}`, borderRadius: 24, padding: 4, background: C.white }}>
            <button
              onClick={() => setDonateRecurring(false)}
              style={{
                flex: 1, padding: "8px 12px", border: "none",
                background: !donateRecurring ? C.forest : "transparent",
                color: !donateRecurring ? C.white : C.stone,
                borderRadius: 20, cursor: "pointer", fontFamily: "inherit",
                fontSize: 14, fontWeight: 600, transition: "all 0.15s",
              }}
            >{t(lang,"donateOneTime")}</button>
            <button
              onClick={() => setDonateRecurring(true)}
              style={{
                flex: 1, padding: "8px 12px", border: "none",
                background: donateRecurring ? C.forest : "transparent",
                color: donateRecurring ? C.white : C.stone,
                borderRadius: 20, cursor: "pointer", fontFamily: "inherit",
                fontSize: 14, fontWeight: 600, transition: "all 0.15s",
              }}
            >{t(lang,"donateMonthly")}</button>
          </div>

          {/* Three tier buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
            {[
              { amount: 500, label: "$5", oneTimeKey: "tier1", monthlyKey: "tier1Monthly" },
              { amount: 2000, label: "$20", oneTimeKey: "tier2", monthlyKey: "tier2Monthly" },
              { amount: 10000, label: "$100", oneTimeKey: "tier3", monthlyKey: "tier3Monthly" },
            ].map((tier) => (
              <button
                key={tier.amount}
                onClick={() => handleDonate(tier.amount)}
                disabled={donateLoading}
                style={{
                  background: C.white, border: `2px solid ${C.border}`, borderRadius: 16,
                  padding: "16px 18px", cursor: donateLoading ? "default" : "pointer",
                  textAlign: "left", fontFamily: "inherit",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "all 0.15s",
                }}
                onMouseOver={e => { if (!donateLoading) { e.currentTarget.style.borderColor = C.forest; e.currentTarget.style.background = C.sage; } }}
                onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.white; }}
              >
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.bark, marginBottom: 2 }}>
                    {tier.label}{donateRecurring ? "/mo" : ""}
                  </div>
                  <div style={{ fontSize: 13, color: C.stone }}>
                    {t(lang, donateRecurring ? tier.monthlyKey : tier.oneTimeKey)}
                  </div>
                </div>
                <span style={{ fontSize: 20, color: C.forest }}>→</span>
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
            <div style={{ flex: 1, position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.dust, fontSize: 16 }}>$</span>
              <input
                type="number" min="1" max="10000" step="1"
                placeholder={t(lang,"donateCustomLabel")}
                value={donateCustom}
                onChange={(e) => setDonateCustom(e.target.value)}
                style={{
                  width: "100%", padding: "14px 14px 14px 28px",
                  border: `2px solid ${C.border}`, borderRadius: 16,
                  fontSize: 15, fontFamily: "inherit", color: C.bark,
                  background: C.white, outline: "none",
                }}
                onFocus={e => e.currentTarget.style.borderColor = C.forest}
                onBlur={e => e.currentTarget.style.borderColor = C.border}
              />
            </div>
            <button
              onClick={handleDonateCustom}
              disabled={donateLoading || !donateCustom}
              style={{
                background: (donateCustom && !donateLoading) ? C.forest : C.border,
                color: C.white, border: "none", borderRadius: 16,
                padding: "0 20px", fontSize: 14, fontWeight: 700,
                cursor: (donateCustom && !donateLoading) ? "pointer" : "default",
                fontFamily: "inherit", transition: "background 0.15s",
              }}
            >{t(lang,"donateCustomBtn")}</button>
          </div>

          {donateLoading && (
            <p style={{ textAlign: "center", fontSize: 13, color: C.stone, marginBottom: 16 }}>
              Opening secure checkout...
            </p>
          )}
          {donateError && (
            <p style={{ textAlign: "center", fontSize: 13, color: "#c62828", marginBottom: 16 }}>
              {donateError}
            </p>
          )}

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: C.border }} />
            <span style={{ fontSize: 12, color: C.dust }}>or</span>
            <div style={{ flex: 1, height: 1, background: C.border }} />
          </div>

          {/* PayPal */}
          <a
            href="https://paypal.me/sedralstudios"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", textAlign: "center",
              background: "#0070ba", color: "#fff",
              padding: "14px 18px", borderRadius: 16,
              fontSize: 15, fontWeight: 700, textDecoration: "none",
              marginBottom: 24,
            }}
          >
            {t(lang,"donatePaypal")}
          </a>

          {/* Steven T. May memorial note */}
          <div style={{
            background: C.cream, borderRadius: 12, padding: "16px 18px",
            marginBottom: 24, fontSize: 14, lineHeight: 1.6, color: C.bark,
            fontStyle: "italic",
          }}>
            {t(lang,"memoryNote")}
          </div>

          {/* Where the money goes */}
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.bark, marginBottom: 8 }}>
              {t(lang,"budgetHeading")}
            </h3>
            <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.6 }}>
              {t(lang,"budgetText")}
            </p>
          </div>

          {/* Support without money */}
          <div style={{ marginBottom: 28, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.bark, marginBottom: 12 }}>
              {t(lang,"nonMonetaryHeading")}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ padding: "10px 0" }}>
                <ShareButton
                  title="HelpFinder"
                  text={t(lang, "shareText")}
                  url="https://helpfinder.help"
                  label={t(lang, "nonMonetaryShare")}
                  ariaLabel={t(lang, "shareAriaLabel")}
                />
              </div>
              <a href="mailto:hello@helpfinder.help?subject=HelpFinder%20feedback" style={{
                padding: "10px 0", color: C.forest, fontSize: 14,
                textDecoration: "none", fontWeight: 600,
              }}>→ {t(lang,"nonMonetaryFeedback")}</a>
              <a href="mailto:hello@helpfinder.help?subject=Program%20to%20add" style={{
                padding: "10px 0", color: C.forest, fontSize: 14,
                textDecoration: "none", fontWeight: 600,
              }}>→ {t(lang,"nonMonetaryAdd")}</a>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: 12, color: C.stone, lineHeight: 1.6, textAlign: "center", marginBottom: 12 }}>
            {t(lang,"supportDisclaimer")}
          </p>
          <p style={{ fontSize: 11, color: C.dust, lineHeight: 1.5, textAlign: "center" }}>
            Voluntary contribution. Not tax-deductible. Sedral Studios is a for-profit business entity, not a charity.
          </p>
        </main>
      )}



      {/* ═══════════════════ PRIVACY ═══════════════════ */}
      {page === PAGES.PRIVACY && (
        <main style={{ padding: "0 20px 40px" }}>
          <button onClick={() => nav(PAGES.HOME)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: C.stone, padding: "16px 0", fontFamily: "inherit" }}>{t(lang,"back")}</button>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, fontWeight: 400, marginBottom: 20, color: C.bark }}>{t(lang,"privacyTitle")}</h2>
          <div style={{ fontSize: 15, lineHeight: 1.7, color: C.bark }}>
            <p style={{ marginBottom: 16, fontWeight: 600 }}>{t(lang,"privacyShort")}</p>
            <p style={{ marginBottom: 16 }}>{t(lang,"privacyP1")}</p>
            <p style={{ marginBottom: 16 }}>{t(lang,"privacyP2")}</p>
                        <p style={{ marginBottom: 16 }}>{t(lang,"privacyP4")}</p>
            <p style={{ marginBottom: 0, color: C.stone, fontSize: 14 }}>{t(lang,"privacyQ")} <a href="mailto:hello@helpfinder.help" style={{ color: C.forest }}>hello@helpfinder.help</a></p>
          </div>
        </main>
      )}

      {/* ═══════════════════ TERMS ═══════════════════ */}
      {page === PAGES.TERMS && (
        <main style={{ padding: "0 20px 40px" }}>
          <button onClick={() => nav(PAGES.HOME)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: C.stone, padding: "16px 0", fontFamily: "inherit" }}>{t(lang,"back")}</button>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, fontWeight: 400, marginBottom: 20, color: C.bark }}>{t(lang,"termsTitle")}</h2>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C.bark }}>
            <p style={{ marginBottom: 14, fontWeight: 600 }}>{t(lang,"termsP1")}</p>
            <p style={{ marginBottom: 14 }}>{t(lang,"termsP2")}</p>
                                    <p style={{ marginBottom: 14 }}>{t(lang,"termsP5")}</p>
            <p style={{ marginBottom: 14 }}>{t(lang,"termsP6")}</p>
            <p style={{ marginBottom: 0, fontSize: 12, color: C.stone }}>{t(lang,"termsP7")}</p>
          </div>
        </main>
      )}

      {/* ═══════════════════ LEGAL LIBRARY (category overview) ═══════════════════ */}
      {page === PAGES.LEGAL_LIBRARY && (
        <LegalLibraryCategories
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          onOpenCategory={openCategory}
          onBack={() => nav(PAGES.HOME)}
        />
      )}

      {/* ═══════════════════ LEGAL LIBRARY (entries in category) ═══════════════════ */}
      {page === PAGES.LEGAL_CATEGORY && (
        <LegalLibraryBrowse
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          categoryFilter={selectedCategory}
          onOpenEntry={openEntry}
          onBack={() => nav(PAGES.LEGAL_LIBRARY)}
          jurisdictions={localJurisdictions}
        />
      )}

      {/* ═══════════════════ LEGAL LIBRARY (entry detail) ═══════════════════ */}
      {page === PAGES.LEGAL_ENTRY && (
        <LegalLibraryEntry
          entryId={selectedEntryId}
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          onBack={() => {
            // Back to the category list if we have one, else to library root
            const cat = selectedCategory || (selectedEntryId && (require("./LegalLibrary").LegalLibraryBrowse ? null : null));
            if (selectedCategory) { nav(PAGES.LEGAL_CATEGORY); openCategory(selectedCategory); }
            else { nav(PAGES.LEGAL_LIBRARY); }
          }}
          onOpenEntry={openEntry}
        />
      )}

      {/* ═══════════════════ LEGAL GLOSSARY (landing) ═══════════════════ */}
      {page === PAGES.GLOSSARY && (
        <GlossaryCategories
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          onOpenCategory={openGlossaryCategory}
          onOpenTerm={openGlossaryTerm}
          onBack={() => nav(PAGES.HOME)}
        />
      )}

      {/* ═══════════════════ LEGAL GLOSSARY (category list) ═══════════════════ */}
      {page === PAGES.GLOSSARY_CATEGORY && (
        <GlossaryBrowse
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          categoryFilter={selectedGlossaryCategory}
          onOpenTerm={openGlossaryTerm}
          onBack={() => nav(PAGES.GLOSSARY)}
        />
      )}

      {/* ═══════════════════ UNIFIED SEARCH ═══════════════════ */}
      {page === PAGES.SEARCH && (
        <UnifiedSearch
          onOpenEntry={openEntry}
          onOpenGlossaryTerm={openGlossaryTerm}
          onBack={() => nav(PAGES.HOME)}
        />
      )}

      {/* ═══════════════════ LEGAL GLOSSARY (term detail) ═══════════════════ */}
      {page === PAGES.GLOSSARY_TERM && (
        <GlossaryTerm
          termId={selectedGlossaryTermId}
          legalLang={legalLang}
          setLegalLang={setLegalLang}
          onOpenTerm={openGlossaryTerm}
          onOpenLegalEntry={openEntry}
          onBack={() => {
            if (selectedGlossaryCategory) { nav(PAGES.GLOSSARY_CATEGORY); }
            else { nav(PAGES.GLOSSARY); }
          }}
        />
      )}


            {/* ═══ FOOTER ═══ */}
      <footer style={{ textAlign: "center", padding: "20px 20px 32px", borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
            <button className="hf-nav-link" onClick={() => nav(PAGES.ABOUT)} style={{ fontSize: 12 }}>{t(lang,"navAbout")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.SUPPORT)} style={{ fontSize: 12 }}>{t(lang,"navSupport")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.PRIVACY)} style={{ fontSize: 12 }}>{t(lang,"navPrivacy")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.TERMS)} style={{ fontSize: 12 }}>{t(lang,"navTerms")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.LEGAL_LIBRARY)} style={{ fontSize: 12 }}>Know Your Rights</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.GLOSSARY)} style={{ fontSize: 12 }}>Legal Glossary</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.SEARCH)} style={{ fontSize: 12 }}>Search</button>
            <a href="mailto:hello@helpfinder.help" className="hf-nav-link" style={{ fontSize: 12, textDecoration: "none", color: C.stone }}>{t(lang,"navContact")}</a>
          </div>
          <div style={{ fontSize: 11, color: C.dust, lineHeight: 1.6 }}>
            Sedral Studios<br />{t(lang,"footer")}<br />
            <span style={{ fontSize: 9, color: "#bbb" }}>© 2026 Sedral Studios. All rights reserved.</span>
          </div>
          <div style={{ fontSize: 9, color: "#aaa", lineHeight: 1.5, marginTop: 12, maxWidth: 400, margin: "12px auto 0" }}>
            {t(lang,"helpDisclaimer")}
          </div>
        </footer>
      
    </div>
  );
}
