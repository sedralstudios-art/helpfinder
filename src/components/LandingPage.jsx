import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════
// HELPFINDER.HELP — Landing Page v2
// Sedral Studios · Rochester NY · April 2026
// Section 3: Home Page + Site Shell
// 8 Languages · 3 Doors · Search · Full Translation
// Brand: HF (product) / SS (studio)
// ═══════════════════════════════════════════════════

const PAGES = { HOME: 0, ABOUT: 1, PRIVACY: 2, TERMS: 3, SUPPORT: 4 };

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
    door2Title: "I need clarity", door2Hook: "The more you make the more you take. The more you give the more you live.",
    door2Desc: "A guided reading. Six questions. Honest reflection. Nothing saved. Donations welcome, never required.",
    door2Btn: "Begin reading",
    door2Footer: "Noticing is helping and helping is healing.",
    clarityLine1: "I made an algorithm that reads you.",
    clarityLine2: "This is not just asking an AI questions.",
    clarityLine3: "There are tiers built into the framework. Pay what you feel.",
    clarityLine4: "Donate what you can — or nothing at all.",
    clarityLine5: "Everyone deserves a question.",
    clarityPrivacy: "Your information is not used or collected. 100% private. This is between you and whoever you choose to share it with. Feel free to be as honest or creative as you wish to be.",
    clarityEnter: "Enter",
    clarityBack: "Go back",
    cdoor1Title: "Enter if you want to know",
    cdoor1Desc: "You cannot unknow what you know.",
    cdoor1Label: "The Shadow",
    cdoor2Title: "See your own reflection",
    cdoor2Desc: "For those looking for basic clarity.",
    cdoor2Label: "The Mirror",
    cdoor3Title: "Turn back",
    cdoor3Desc: "Not ready for the answers. Only time sees what the eyes cannot.",
    cdoor3Label: "The Door",
    disclaimer: "This is not therapy, medical advice, or a substitute for professional help. If you are in crisis, call 988 or 211. If you are struggling with substance use or addiction, SAMHSA's helpline is free and confidential: 1-800-662-4357. Readings are for personal reflection only. Results are AI-generated and may not be accurate. No guarantees are made. Donations are voluntary — not payment for a service.",
    helpDisclaimer: "HelpFinder is an informational tool. Program details may change without notice. Always contact programs directly to confirm eligibility, hours, and availability. This is not legal, medical, or financial advice.",
    door3Title: "I want to support this",
    door3Desc: "Every dollar keeps this free for everyone.",
    trust: "No personal data collected. No accounts. No tracking. Ever.",
    libraryTitle: "The Library",
    libraryDesc: "Free essays on noticing, healing, and honest conversation. The framework behind the tools.",
    comingSoon: "Coming Soon",
    submitTitle: "Submit Your Creative Works",
    submitDesc: "Poetry, essays, art, music. A space for honest creative expression.",
    bulletinTitle: "Community Help Bulletin Board",
    bulletinDesc: "Post what you need. Offer what you have. Neighbors helping neighbors — no middleman.",
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
    aboutP1: "HelpFinder is a free tool that connects people with real programs in their city. No accounts. No personal data collected. No ads. Just answers.",
    aboutP2: "Starting in Rochester, NY — with 250+ programs across 36 categories in 8 languages. Food, housing, healthcare, legal help, mental health, job training, and more. Every program is verified by hand.",
    aboutP3: "The Clarity Reading is a guided reflection tool. Six questions. An honest reading based on what you share. Nothing is saved. Nothing is sold. The basic reading is free. Deeper tiers are donation-based. Clarity shouldn't have a price tag — but keeping this running does.",
    aboutPersonal: "I'm Anthony DiMarzo of Rochester. I have a CDL and I spend my days building roads. I spend my nights building this. I'd rather be building a better future for tomorrow. I noticed people in crisis can't find help — not because it doesn't exist, but because nobody put it in one place in plain language. So I did. No degree. No funding. No investors. Just me and a computer.",
    aboutFamily: "I live in Brockport with my fiancée and our son. He's six. He's the reason this exists. The world he inherits should be better than the one he was born into.",
    aboutSedral: "Sedral Studios is named for Steven T. May. He was my friend. He studied at MIT. He built computers, installed security systems, read philosophy and psychology, and loved his cats. He was autistic, and he had the kind of mind that saw what others couldn't. He left on Christmas Eve 2025, at 47. This work carries his name because the things that matter most shouldn't disappear when someone does.",
    aboutClose: "Everything here is free. If you want to help keep it free, there's a donate button. If you can't donate, use the tools. That's enough.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "If you work at an agency and want your program listed, or if something needs correcting, reach out.",
    contactTitle: "Contact",
    supportTitle: "Support this project",
    supportDesc: "HelpFinder is free for everyone who uses it. It stays free because people like you decide it should exist.",
    tier1: "Keeps the site running for a week",
    tier2: "Covers a full month of hosting",
    tier3: "Helps us add a new city",
    donatePaypal: "Donate via PayPal", teamwork: "Teamwork makes the dream work.",
    supportDisclaimer: "Sedral Studios is not a registered nonprofit. Donations support hosting, research, and expansion to new cities. Thank you.",
    privacyTitle: "Privacy",
    privacyShort: "The short version: we don't collect personal data.",
    privacyP1: "No accounts. No cookies from us. No tracking pixels. No analytics that identify you. No data is saved when you use HelpFinder. We count how many times each resource is clicked so we know what help people need most — but we never track who clicks. Third-party services (donation platforms) may set their own cookies if you visit them.",
    privacyP2: "We don't know who you are. We don't know what you searched for. We don't know if you came back. That's by design.",
    privacyP3: "The Clarity Reading uses AI (Claude by Anthropic) to generate your reading. Your answers are processed to create the reading, then discarded on our end. We store nothing. The AI provider does not use your data for training but may retain it briefly for safety monitoring per their privacy policy.",
    privacyP4: "If you're in a situation where someone might check your device, you can close this site and it leaves no trace. There's nothing to find.",
    privacyQ: "Questions?",
    footer: "Built with nothing. Built for everyone.",
    navTerms: "Terms",
    termsTitle: "Terms of Use",
    termsP1: "By using helpfinder.help, you agree to the following terms.",
    termsP2: "HelpFinder is provided as-is, without warranties of any kind. We make no guarantees about the accuracy, completeness, or reliability of any information on this site. Program details come from public sources and may change without notice. Always contact programs directly to verify eligibility, hours, and availability.",
    termsP3: "The Clarity Reading is an AI-generated reflection tool intended for personal use only. It is not therapy, counseling, medical advice, legal advice, or a substitute for professional help. If you are in crisis, call 988 (Suicide & Crisis Lifeline) or 211 (local help).",
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
    door2Title: "Necesito claridad", door2Hook: "Cuanto más ganas, más tomas. Cuanto más das, más vives.",
    door2Desc: "Una lectura guiada. Seis preguntas. Reflexión honesta. Nada se guarda. Donaciones bienvenidas, nunca requeridas.",
    door2Btn: "Comenzar lectura",
    door2Footer: "Notar es ayudar y ayudar es sanar.",
    clarityLine1: "Hice un algoritmo que te lee.",
    clarityLine2: "Esto no es solo hacerle preguntas a una IA.",
    clarityLine3: "Hay niveles en el marco. Paga lo que sientas.",
    clarityLine4: "Dona lo que puedas — o nada en absoluto.",
    clarityLine5: "Todos merecen una pregunta.", clarityPrivacy: "Tu información no se usa ni se recopila. 100% privado. Esto es entre tú y quien elijas compartirlo. Siéntete libre de ser tan honesto o creativo como desees.",
    clarityEnter: "Entrar",
    clarityBack: "Volver",
    cdoor1Title: "Entra si quieres saber", cdoor1Desc: "No puedes desconocer lo que ya sabes.", cdoor1Label: "La Sombra",
    cdoor2Title: "Ve tu propio reflejo", cdoor2Desc: "Para quienes buscan claridad básica.", cdoor2Label: "El Espejo",
    cdoor3Title: "Da la vuelta", cdoor3Desc: "No estás listo para las respuestas. Solo el tiempo ve lo que los ojos no pueden.", cdoor3Label: "La Puerta",
    disclaimer: "Esto no es terapia, consejo médico, ni sustituto de ayuda profesional. Si estás en crisis, llama al 988 o 211. Las lecturas son solo para reflexión personal. Los resultados son generados por IA y pueden no ser precisos. Las donaciones son voluntarias.",
    helpDisclaimer: "HelpFinder es una herramienta informativa. Los detalles de los programas pueden cambiar. Contacte directamente a los programas para confirmar elegibilidad y horarios. Esto no es asesoría legal, médica o financiera.",
    door3Title: "Quiero apoyar esto",
    door3Desc: "Cada dólar mantiene esto gratis para todos.",
    trust: "No se recopilan datos. Sin cuentas. Sin rastreo. Nunca.",
    libraryTitle: "La Biblioteca",
    libraryDesc: "Ensayos gratuitos sobre observación, sanación y conversación honesta.",
    comingSoon: "Próximamente",
    submitTitle: "Envía tus obras creativas",
    submitDesc: "Poesía, ensayos, arte, música. Un espacio para la expresión creativa honesta.",
    bulletinTitle: "Tablón de Ayuda Comunitaria", bulletinDesc: "Publica lo que necesitas. Ofrece lo que tienes. Vecinos ayudando vecinos.",
    feedbackTitle: "Dinos qué falta", feedbackDesc: "¿Conoces un programa que no tenemos? ¿Algo está mal? Leemos cada mensaje.", feedbackBtn: "Envíanos un mensaje",
    aboutLink: "Sobre Sedral Studios",
    aboutLinkDesc: "Qué es esto. Quién lo construyó. Por qué es gratis.",
    navHome: "Inicio", navAbout: "Acerca de", navSupport: "Apoyar", navPrivacy: "Privacidad", navContact: "Contacto",
    back: "← Atrás",
    aboutTitle: "Acerca de",
    aboutP1: "HelpFinder es una herramienta gratuita que conecta a las personas con programas reales en su ciudad. Sin cuentas. Sin datos recopilados. Sin anuncios. Solo respuestas.",
    aboutP2: "Comenzando en Rochester, NY — con más de 250 programas en 36 categorías en 8 idiomas. Comida, vivienda, salud, ayuda legal, salud mental, capacitación laboral y más. Cada programa verificado a mano.",
    aboutP3: "La Lectura de Claridad es una herramienta de reflexión guiada. Seis preguntas. Una lectura honesta. Nada se guarda. Nada se vende. La lectura básica es gratis. Los niveles más profundos son por donación. La claridad no debería tener precio — pero mantener esto funcionando sí.",
    aboutPersonal: "Soy Anthony DiMarzo de Rochester. Tengo una licencia comercial y paso mis días construyendo caminos. Paso mis noches construyendo esto. Prefiero construir un mejor futuro para mañana. Noté que la gente en crisis no puede encontrar ayuda — no porque no exista, sino porque nadie la puso en un solo lugar en lenguaje sencillo. Así que lo hice yo. Sin título. Sin financiamiento. Sin inversionistas. Solo yo y una computadora.",
    aboutFamily: "Vivo en Brockport con mi prometida y nuestro hijo. Tiene seis años. Él es la razón por la que esto existe. El mundo que hereda debería ser mejor que en el que nació.",
    aboutSedral: "Sedral Studios lleva el nombre de Steven. Era mi amigo. Tenía un doctorado en filosofía, autismo, y una mente que veía lo que otros no podían. Se fue en Nochebuena de 2025. Este trabajo lleva su nombre porque lo que más importa no debería desaparecer cuando alguien lo hace.",
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
    privacyTitle: "Privacidad",
    privacyShort: "La versión corta: no recopilamos datos personales.",
    privacyP1: "Sin cuentas. Sin cookies de nuestra parte. Sin píxeles de rastreo. Sin analíticas que te identifiquen. Contamos cuántas veces se hace clic en cada recurso para saber qué ayuda necesitan las personas — pero nunca rastreamos quién hace clic. No se guardan datos al usar el Buscador de Ayuda ni la Lectura de Claridad. Servicios de terceros (plataformas de donación) pueden establecer sus propias cookies.",
    privacyP2: "No sabemos quién eres. No sabemos qué buscaste. No sabemos si regresaste. Eso es por diseño.",
    privacyP3: "La Lectura de Claridad usa IA (Claude de Anthropic) para generar tu lectura. Tus respuestas se procesan para crear la lectura y luego se descartan de nuestra parte. No almacenamos nada. El proveedor de IA no usa tus datos para entrenamiento, pero puede retenerlos brevemente para monitoreo de seguridad.",
    privacyP4: "Si estás en una situación donde alguien podría revisar tu dispositivo, puedes cerrar este sitio y no deja rastro.",
    privacyQ: "¿Preguntas?",
    footer: "Construido con nada. Construido para todos.",
    navTerms: "Términos",
    termsTitle: "Términos de Uso",
    termsP1: "Al usar helpfinder.help, aceptas los siguientes términos.",
    termsP2: "HelpFinder se proporciona tal cual, sin garantías de ningún tipo. No garantizamos la precisión o confiabilidad de la información. Los detalles de los programas pueden cambiar. Contacte directamente a los programas para verificar.",
    termsP3: "La Lectura de Claridad es una herramienta de reflexión generada por IA. No es terapia, asesoramiento, consejo médico ni sustituto de ayuda profesional. En crisis, llame al 988 o 211.",
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
    door2Title: "मलाई स्पष्टता चाहिन्छ", door2Hook: "जति बढी कमाउँछौ, उति बढी लिन्छौ। जति बढी दिन्छौ, उति बढी बाँच्छौ।",
    door2Desc: "मार्गदर्शित पठन। छ प्रश्नहरू। इमानदार प्रतिबिम्ब। दान स्वागत छ, कहिल्यै अनिवार्य छैन।",
    door2Btn: "पठन सुरु गर्नुहोस्", door2Footer: "ध्यान दिनु सहायता हो र सहायता उपचार हो।", clarityLine1: "मैले तपाईंलाई पढ्ने एल्गोरिदम बनाएँ।", clarityLine2: "यो AI लाई प्रश्न सोध्नु मात्र होइन।", clarityLine3: "फ्रेमवर्कमा तहहरू छन्। तपाईंले महसुस गर्नुभएजति तिर्नुहोस्।", clarityLine4: "सक्नुभएजति दान गर्नुहोस् — वा केही नगर्नुहोस्।", clarityLine5: "सबैले प्रश्नको हक राख्छन्।", clarityPrivacy: "तपाईंको जानकारी प्रयोग वा सङ्कलन गरिँदैन। 100% निजी। यो तपाईं र तपाईंले साझा गर्न छनौट गर्नुहुने बीचको कुरा हो। जति इमानदार वा सिर्जनशील हुन चाहनुहुन्छ, हुनुहोस्।", clarityEnter: "प्रवेश", clarityBack: "फिर्ता", cdoor1Title: "जान्न चाहनुहुन्छ भने प्रवेश गर्नुहोस्", cdoor1Desc: "तपाईंले जान्नुभएको कुरा बिर्सन सक्नुहुन्न।", cdoor1Label: "छाया", cdoor2Title: "आफ्नो प्रतिबिम्ब हेर्नुहोस्", cdoor2Desc: "आधारभूत स्पष्टता खोज्नेहरूको लागि।", cdoor2Label: "दर्पण", cdoor3Title: "फिर्ता जानुहोस्", cdoor3Desc: "जवाफको लागि तयार छैन। समयले मात्र आँखाले नदेखेको देख्छ।", cdoor3Label: "ढोका", disclaimer: "यो थेरापी, चिकित्सा सल्लाह, वा पेशेवर सहायताको विकल्प होइन। संकटमा 988 वा 211 मा कल गर्नुहोस्। दान स्वैच्छिक हो।", helpDisclaimer: "HelpFinder सूचनात्मक उपकरण हो। कार्यक्रम विवरणहरू परिवर्तन हुन सक्छन्।",
    door3Title: "म यसलाई समर्थन गर्न चाहन्छु",
    door3Desc: "प्रत्येक डलरले यसलाई सबैको लागि निःशुल्क राख्छ।",
    trust: "कुनै डाटा सङ्कलन छैन। कुनै खाता छैन। कुनै ट्र्याकिङ छैन।",
    libraryTitle: "पुस्तकालय", libraryDesc: "ध्यान, उपचार र इमानदार कुराकानीमा निःशुल्क लेखहरू।",
    comingSoon: "छिट्टै आउँदैछ",
    submitTitle: "आफ्नो सिर्जनात्मक कार्य पेश गर्नुहोस्", submitDesc: "कविता, लेख, कला, संगीत।",
    bulletinTitle: "सामुदायिक सहायता बुलेटिन बोर्ड", bulletinDesc: "तपाईंलाई के चाहिन्छ पोस्ट गर्नुहोस्। छिमेकीले छिमेकीलाई सहयोग।", feedbackTitle: "के छुट्यो भन्नुहोस्", feedbackDesc: "कुनै कार्यक्रम छुट्यो? केही गलत छ? हामी हरेक सन्देश पढ्छौं।", feedbackBtn: "सन्देश पठाउनुहोस्",
    aboutLink: "Sedral Studios बारे", aboutLinkDesc: "यो के हो। कसले बनायो। किन निःशुल्क।",
    navHome: "गृह", navAbout: "बारेमा", navSupport: "समर्थन", navPrivacy: "गोपनीयता", navContact: "सम्पर्क",
    back: "← पछाडि", aboutTitle: "बारेमा",
    aboutP1: "HelpFinder एक निःशुल्क उपकरण हो। कुनै खाता छैन। कुनै डाटा छैन।",
    aboutP2: "पहिलो शहर Rochester, NY हो — 34 श्रेणीहरूमा 180+ कार्यक्रमहरू।",
    aboutP3: "स्पष्टता पठन एक मार्गदर्शित प्रतिबिम्ब उपकरण हो।",
    aboutPersonal: "म Anthony DiMarzo, Rochester को। मसँग CDL छ र म दिनभर बाटो बनाउँछु। रातमा यो बनाउँछु। म भोलिको लागि राम्रो भविष्य बनाउन चाहन्छु। मैले देखें कि संकटमा परेका मानिसहरूले सहायता पाउन सक्दैनन् — यो नभएर होइन, कसैले सरल भाषामा एकै ठाउँमा राखेन। त्यसैले मैले गरें। कुनै डिग्री छैन। कुनै कोष छैन। म र एउटा कम्प्युटर मात्र।",
    aboutFamily: "म Brockport मा मेरो मंगेतर र हाम्रो छोरासँग बस्छु। उनी छ वर्षको छ। उनी नै यो अस्तित्वको कारण हो। उसले पाउने संसार उसले जन्मिएको भन्दा राम्रो हुनुपर्छ।",
    aboutSedral: "Sedral Studios Steven को नाममा राखिएको हो। उनी मेरो साथी थिए। उनीसँग दर्शनशास्त्रमा डक्टरेट, अटिज्म, र अरूले नदेख्ने कुरा देख्ने दिमाग थियो। उनी 2025 को क्रिसमस इभमा गए। यो कामले उनको नाम बोक्छ किनभने सबैभन्दा महत्त्वपूर्ण कुराहरू कसैसँगै हराउनु हुँदैन।",
    aboutClose: "सबै कुरा निःशुल्क छ। निःशुल्क राख्न मद्दत गर्न चाहनुहुन्छ भने, दान बटन छ। दान गर्न सक्नुहुन्न भने, उपकरणहरू प्रयोग गर्नुहोस्। त्यति पुग्छ।",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "सम्पर्क गर्नुहोस्।",
    contactTitle: "सम्पर्क",
    supportTitle: "यो परियोजनालाई समर्थन गर्नुहोस्",
    supportDesc: "HelpFinder सबैको लागि निःशुल्क छ।",
    tier1: "एक हप्ता साइट चलाउँछ", tier2: "एक महिना होस्टिङ", tier3: "नयाँ शहर थप्न मद्दत",
    donatePaypal: "PayPal मार्फत दान", teamwork: "सामूहिक प्रयासले सपना साकार हुन्छ।",
    supportDisclaimer: "दानले होस्टिङ र विस्तारलाई समर्थन गर्छ। धन्यवाद।",
    privacyTitle: "गोपनीयता", privacyShort: "छोटो संस्करण: हामी व्यक्तिगत डाटा सङ्कलन गर्दैनौं। (हामी रोचेस्टरलाई के चाहिन्छ सिक्दैछौं।)",
    privacyP1: "कुनै खाता छैन। कुनै कुकी छैन। कुनै ट्र्याकिङ छैन।",
    privacyP2: "हामीलाई थाहा छैन तपाईं को हुनुहुन्छ।",
    privacyP3: "स्पष्टता पठनले AI प्रयोग गर्छ। सबै कुरा हराउँछ।",
    privacyP4: "कसैले तपाईंको उपकरण जाँच गर्न सक्छ भने, कुनै ट्रेस छैन।",
    privacyQ: "प्रश्नहरू?", footer: "केहीबाट निर्मित। सबैको लागि निर्मित।",
  },
  ar: {
    searchPlaceholder: "بحث — طعام، سكن، أسنان، وظائف...",
    door1Title: "أحتاج مساعدة",
    door1Hook: "لست وحدك.", door1Desc: "كل المساعدة مجانية. تواصل مع الأشخاص المناسبين في أقل من 5 دقائق.",
    door1Btn: "ابحث عن مساعدة",
    door1Sub: "أو اتصل بـ 211 — مجاني، 24/7، أي لغة",
    door2Title: "أحتاج وضوحاً", door2Hook: "كلما كسبت أكثر، أخذت أكثر. كلما أعطيت أكثر، عشت أكثر.",
    door2Desc: "قراءة موجهة. ستة أسئلة. تأمل صادق. لا شيء يُحفظ. التبرعات مرحب بها، وليست مطلوبة أبداً.",
    door2Btn: "ابدأ القراءة", door2Footer: "الملاحظة مساعدة والمساعدة شفاء.", clarityLine1: "صنعت خوارزمية تقرأك.", clarityLine2: "هذا ليس مجرد طرح أسئلة على ذكاء اصطناعي.", clarityLine3: "هناك مستويات في الإطار. ادفع ما تشعر به.", clarityLine4: "تبرع بما تستطيع — أو لا شيء على الإطلاق.", clarityLine5: "الجميع يستحق سؤالاً.", clarityPrivacy: "معلوماتك لا تُستخدم ولا تُجمع. خصوصية 100%. هذا بينك وبين من تختار مشاركته معه. كن صادقاً أو مبدعاً كما تشاء.", clarityEnter: "دخول", clarityBack: "رجوع", cdoor1Title: "ادخل إذا أردت أن تعرف", cdoor1Desc: "لا يمكنك أن تنسى ما عرفته.", cdoor1Label: "الظل", cdoor2Title: "انظر انعكاسك", cdoor2Desc: "لمن يبحث عن وضوح أساسي.", cdoor2Label: "المرآة", cdoor3Title: "ارجع", cdoor3Desc: "لست مستعداً للإجابات. الوقت وحده يرى ما لا تراه العيون.", cdoor3Label: "الباب", disclaimer: "هذا ليس علاجاً أو نصيحة طبية أو بديلاً عن المساعدة المهنية. في حالة الأزمات اتصل بـ 988 أو 211. التبرعات طوعية.", helpDisclaimer: "HelpFinder أداة معلوماتية فقط. تفاصيل البرامج قد تتغير.",
    door3Title: "أريد دعم هذا",
    door3Desc: "كل دولار يبقي هذا مجاناً للجميع.",
    trust: "لا بيانات مجمعة. لا حسابات. لا تتبع. أبداً.",
    libraryTitle: "المكتبة", libraryDesc: "مقالات مجانية حول الملاحظة والشفاء والحوار الصادق.",
    comingSoon: "قريباً",
    submitTitle: "أرسل أعمالك الإبداعية", submitDesc: "شعر، مقالات، فن، موسيقى.",
    bulletinTitle: "لوحة المساعدة المجتمعية", bulletinDesc: "انشر ما تحتاجه. اعرض ما لديك. جيران يساعدون جيران.", feedbackTitle: "أخبرنا ما ينقص", feedbackDesc: "تعرف برنامجاً لم نذكره؟ شيء خاطئ؟ نقرأ كل رسالة.", feedbackBtn: "أرسل لنا رسالة",
    aboutLink: "عن Sedral Studios", aboutLinkDesc: "ما هذا. من بناه. لماذا مجاني.",
    navHome: "الرئيسية", navAbout: "عن", navSupport: "دعم", navPrivacy: "الخصوصية", navContact: "اتصل",
    back: "← رجوع", aboutTitle: "عن",
    aboutP1: "HelpFinder أداة مجانية. لا حسابات. لا بيانات. لا إعلانات.",
    aboutP2: "المدينة الأولى روتشستر — أكثر من 180 برنامجاً في 34 فئة.",
    aboutP3: "قراءة الوضوح أداة تأمل موجهة.",
    aboutPersonal: "أنا Anthony DiMarzo من روتشستر. أحمل رخصة قيادة تجارية وأقضي أيامي في بناء الطرق. أقضي ليالي في بناء هذا. أفضّل بناء مستقبل أفضل للغد. لاحظت أن الناس في أزمة لا يجدون المساعدة — ليس لأنها غير موجودة، بل لأن أحداً لم يجمعها في مكان واحد بلغة بسيطة. ففعلت ذلك. لا شهادة. لا تمويل. لا مستثمرين. أنا وحاسوب فقط.",
    aboutFamily: "أعيش في Brockport مع خطيبتي وابننا. عمره ست سنوات. هو سبب وجود هذا. العالم الذي سيرثه يجب أن يكون أفضل من الذي وُلد فيه.",
    aboutSedral: "Sedral Studios سُمّي على اسم Steven. كان صديقي. حمل دكتوراه في الفلسفة، وتوحّد، وعقلاً يرى ما لا يراه الآخرون. رحل ليلة عيد الميلاد 2025. هذا العمل يحمل اسمه لأن الأشياء الأهم لا ينبغي أن تختفي عندما يرحل شخص ما.",
    aboutClose: "كل شيء هنا مجاني. إذا أردت المساعدة في إبقائه مجانياً، هناك زر تبرع. إذا لم تستطع التبرع، استخدم الأدوات. هذا يكفي.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "تواصل معنا.",
    contactTitle: "اتصل",
    supportTitle: "ادعم هذا المشروع", supportDesc: "HelpFinder مجاني للجميع.",
    tier1: "يبقي الموقع يعمل لأسبوع", tier2: "يغطي شهراً من الاستضافة", tier3: "يساعدنا بإضافة مدينة جديدة",
    donatePaypal: "تبرع عبر PayPal", teamwork: "العمل الجماعي يحقق الحلم.",
    supportDisclaimer: "التبرعات تدعم الاستضافة والتوسع. شكراً.",
    privacyTitle: "الخصوصية", privacyShort: "الخلاصة: لا نجمع بيانات شخصية. (نتعلم ما يحتاجه روتشستر.)",
    privacyP1: "لا حسابات. لا كوكيز. لا تتبع.", privacyP2: "لا نعرف من أنت.",
    privacyP3: "قراءة الوضوح تستخدم الذكاء الاصطناعي. كل شيء يختفي.",
    privacyP4: "لا أثر على جهازك.", privacyQ: "أسئلة؟", footer: "بُني من لا شيء. بُني للجميع.",
  },
  sw: {
    searchPlaceholder: "Tafuta — chakula, makazi, meno, kazi...",
    door1Title: "Nahitaji msaada",
    door1Hook: "Huko peke yako.", door1Desc: "Msaada wote ni bure. Ungana na watu sahihi ndani ya dakika 5.",
    door1Btn: "Tafuta msaada",
    door1Sub: "au piga 211 — bure, 24/7, lugha yoyote",
    door2Title: "Nahitaji uwazi", door2Hook: "Kadri unavyopata zaidi, ndivyo unavyochukua zaidi. Kadri unavyotoa zaidi, ndivyo unavyoishi zaidi.",
    door2Desc: "Usomaji wa kuongozwa. Maswali sita. Tafakuri ya kweli. Michango inakaribishwa, haihitajiki kamwe.",
    door2Btn: "Anza usomaji", door2Footer: "Kutambua ni kusaidia na kusaidia ni kuponya.", clarityLine1: "Nilitengeneza algorithm inayokusoma.", clarityLine2: "Hii si kuuliza AI maswali tu.", clarityLine3: "Kuna viwango vilivyojengwa. Lipa unavyohisi.", clarityLine4: "Changia unavyoweza — au chochote.", clarityLine5: "Kila mtu anastahili swali.", clarityPrivacy: "Habari zako hazitumiki wala kukusanywa. Faragha 100%. Hii ni kati yako na yeyote unayechagua kushiriki naye. Jisikie huru kuwa mkweli au mbunifu unavyotaka.", clarityEnter: "Ingia", clarityBack: "Rudi", cdoor1Title: "Ingia ukitaka kujua", cdoor1Desc: "Huwezi kutojua ulichokijua.", cdoor1Label: "Kivuli", cdoor2Title: "Jione mwenyewe", cdoor2Desc: "Kwa wanaotafuta uwazi wa msingi.", cdoor2Label: "Kioo", cdoor3Title: "Rudi nyuma", cdoor3Desc: "Huko tayari kwa majibu. Wakati pekee ndio unaona macho yasiyoona.", cdoor3Label: "Mlango", disclaimer: "Hii si tiba, ushauri wa matibabu, au mbadala wa msaada wa kitaalamu. Katika dharura piga 988 au 211. Michango ni ya hiari.", helpDisclaimer: "HelpFinder ni zana ya habari tu. Maelezo ya programu yanaweza kubadilika.",
    door3Title: "Nataka kusaidia",
    door3Desc: "Kila dola inaweka hii bure kwa wote.",
    trust: "Hakuna data. Hakuna akaunti. Hakuna ufuatiliaji.",
    libraryTitle: "Maktaba", libraryDesc: "Insha za bure kuhusu kutambua, kuponya na mazungumzo ya kweli.",
    comingSoon: "Inakuja Hivi Karibuni",
    submitTitle: "Wasilisha Kazi Zako za Ubunifu", submitDesc: "Mashairi, insha, sanaa, muziki.",
    bulletinTitle: "Bodi ya Msaada wa Jamii", bulletinDesc: "Chapisha unachohitaji. Toa ulichonacho. Majirani wakisaidiana.", feedbackTitle: "Tuambie kinachokosekana", feedbackDesc: "Unajua programu tuliyokosa? Kitu kibaya? Tunasoma kila ujumbe.", feedbackBtn: "Tutumie ujumbe",
    aboutLink: "Kuhusu Sedral Studios", aboutLinkDesc: "Hii ni nini. Nani alijenga. Kwa nini ni bure.",
    navHome: "Nyumbani", navAbout: "Kuhusu", navSupport: "Saidia", navPrivacy: "Faragha", navContact: "Wasiliana",
    back: "← Rudi", aboutTitle: "Kuhusu",
    aboutP1: "HelpFinder ni zana ya bure.", aboutP2: "Mji wa kwanza ni Rochester, NY.",
    aboutP3: "Usomaji wa Uwazi ni zana ya tafakuri.",
    aboutPersonal: "Mimi ni Anthony DiMarzo wa Rochester. Nina leseni ya kuendesha magari makubwa na ninajenga barabara mchana. Usiku ninajenga hii. Ningependa kujenga mustakabali bora wa kesho. Niligundua watu walio katika shida hawawezi kupata msaada — si kwa sababu haupo, bali kwa sababu hakuna aliyeuweka mahali pamoja kwa lugha rahisi. Kwa hivyo nikafanya. Hakuna shahada. Hakuna fedha. Mimi na kompyuta tu.",
    aboutFamily: "Ninaishi Brockport na mchumba wangu na mtoto wetu. Ana miaka sita. Yeye ndiye sababu hii ipo. Ulimwengu atakaourithi unapaswa kuwa bora kuliko aliozaliwa ndani yake.",
    aboutSedral: "Sedral Studios imepewa jina la Steven. Alikuwa rafiki yangu. Alikuwa na shahada ya udaktari wa falsafa, usonji, na akili iliyoona mambo ambayo wengine hawakuweza. Aliondoka usiku wa Krismasi 2025. Kazi hii inabeba jina lake kwa sababu mambo muhimu zaidi hayapaswi kutoweka mtu anapoondoka.",
    aboutClose: "Kila kitu hapa ni bure. Ukitaka kusaidia kuiweka bure, kuna kitufe cha kuchangia. Usipoweza kuchangia, tumia zana. Hiyo inatosha.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "Wasiliana nasi.", contactTitle: "Wasiliana",
    supportTitle: "Saidia mradi huu", supportDesc: "HelpFinder ni bure kwa wote.",
    tier1: "Inaweka tovuti ikifanya kazi kwa wiki", tier2: "Inashughulikia mwezi wa hosting",
    tier3: "Inasaidia kuongeza mji mpya",
    donatePaypal: "Changia kupitia PayPal", teamwork: "Kazi ya pamoja hufanya ndoto kuwa kweli.",
    supportDisclaimer: "Michango inasaidia hosting na upanuzi. Asante.",
    privacyTitle: "Faragha", privacyShort: "Toleo fupi: hatukusanyi data binafsi.",
    privacyP1: "Hakuna akaunti. Hakuna kuki. Hakuna ufuatiliaji.", privacyP2: "Hatujui wewe ni nani.",
    privacyP3: "Usomaji hutumia AI. Kila kitu kinatoweka.", privacyP4: "Hakuna athari kwenye kifaa chako.",
    privacyQ: "Maswali?", footer: "Imejengwa kutoka kwa chochote. Imejengwa kwa wote.",
  },
  my: {
    searchPlaceholder: "ရှာရန် — အစားအစာ၊ အိမ်ရာ၊ သွားဘက်၊ အလုပ်...",
    door1Title: "ကျွန်တော်/မ အကူအညီလိုပါတယ်",
    door1Hook: "သင်တစ်ယောက်တည်းမဟုတ်ပါ။", door1Desc: "အကူအညီအားလုံး အခမဲ့။ မိနစ် ၅ အတွင်း မှန်ကန်သူများနှင့် ချိတ်ဆက်ပါ။",
    door1Btn: "အကူအညီရှာပါ",
    door1Sub: "သို့မဟုတ် 211 ကိုခေါ်ပါ — အခမဲ့, 24/7",
    door2Title: "ရှင်းလင်းမှုလိုပါတယ်", door2Hook: "ပိုရလေ ပိုယူလေ။ ပိုပေးလေ ပိုအသက်ရှင်လေ။",
    door2Desc: "လမ်းညွှန်ဖတ်ခြင်း။ မေးခွန်းခြောက်ခု။ လှူဒါန်းမှုကြိုဆိုပါသည်၊ မလိုအပ်ပါ။",
    door2Btn: "ဖတ်ခြင်းစတင်ပါ", door2Footer: "သတိထားခြင်းသည် ကူညီခြင်း၊ ကူညီခြင်းသည် ကုသခြင်း။", clarityLine1: "သင့်ကိုဖတ်နိုင်သော algorithm တစ်ခုဖန်တီးခဲ့သည်။", clarityLine2: "ဒါက AI ကိုမေးခွန်းမေးရုံသက်သက်မဟုတ်ပါ။", clarityLine3: "Framework ထဲမှာ အဆင့်များရှိသည်။ ခံစားရသလောက်ပေးပါ။", clarityLine4: "နိုင်သလောက် လှူပါ — သို့မဟုတ် ဘာမှမလှူပါ။", clarityLine5: "လူတိုင်း မေးခွန်းတစ်ခုထိုက်တန်သည်။", clarityPrivacy: "သင့်အချက်အလက်ကို အသုံးပြု သို့မဟုတ် ကောက်ခံမည်မဟုတ်ပါ။ 100% လျှို့ဝှက်။ ဒါက သင်နှင့် သင်မျှဝေရန်ရွေးချယ်သူကြားသာ။ ရိုးသားစွာ သို့မဟုတ် ဖန်တီးမှုအပြည့်ဖြင့် ဖော်ပြနိုင်ပါသည်။", clarityEnter: "ဝင်ပါ", clarityBack: "ပြန်သွားပါ", cdoor1Title: "သိချင်ရင်ဝင်ပါ", cdoor1Desc: "သိပြီးသားကို မသိတော့လို့မရပါ။", cdoor1Label: "အရိပ်", cdoor2Title: "မိမိရဲ့ပြန်ဟပ်ကိုကြည့်ပါ", cdoor2Desc: "အခြေခံရှင်းလင်းမှုရှာသူများအတွက်။", cdoor2Label: "거울", cdoor3Title: "ပြန်လှည့်ပါ", cdoor3Desc: "အဖြေများအတွက်အဆင်သင့်မဖြစ်သေး။ အချိန်သာ မျက်စိမမြင်နိုင်တာကိုမြင်သည်။", cdoor3Label: "တံခါး", disclaimer: "ဒါက ကုထုံး၊ ဆေးဘက်အကြံဉာဏ်၊ သို့မဟုတ် ပညာရှင်အကူအညီအစားထိုးမဟုတ်ပါ။ အရေးပေါ်တွင် 988 သို့မဟုတ် 211 ခေါ်ပါ။ လှူဒါန်းမှုများသည် မိမိဆန္ဒအလျောက်ဖြစ်သည်။", helpDisclaimer: "HelpFinder သည် သတင်းအချက်အလက်ကိရိယာသာဖြစ်သည်။",
    door3Title: "ဒါကိုထောက်ပံ့ချင်ပါတယ်",
    door3Desc: "ဒေါ်လာတိုင်းက လူတိုင်းအတွက် အခမဲ့ထားပါတယ်။",
    trust: "ဒေတာမကောက်ပါ။ အကောင့်မရှိ။ ခြေရာခံမှုမရှိ။",
    libraryTitle: "စာကြည့်တိုက်", libraryDesc: "အခမဲ့ဆောင်းပါးများ။",
    comingSoon: "မကြာမီလာမည်",
    submitTitle: "သင့်ဖန်တီးမှုများတင်ပါ", submitDesc: "ကဗျာ၊ ဆောင်းပါး၊ အနုပညာ၊ ဂီတ။",
    bulletinTitle: "လူမှုအကူအညီ ဘုတ်အင်ဘုတ်", bulletinDesc: "လိုအပ်တာတင်ပါ။ ရှိတာကမ်းလှမ်းပါ။ အိမ်နီးချင်းတွေကူညီခြင်း။", feedbackTitle: "ဘာလိုနေသေးလဲပြောပါ", feedbackDesc: "လိုအပ်တာရှိရင် မက်ဆေ့ချ်ပို့ပါ။", feedbackBtn: "မက်ဆေ့ချ်ပို့ပါ",
    aboutLink: "Sedral Studios အကြောင်း", aboutLinkDesc: "ဒါကဘာလဲ။ ဘယ်သူတည်ဆောက်တာလဲ။",
    navHome: "ပင်မ", navAbout: "အကြောင်း", navSupport: "ထောက်ပံ့", navPrivacy: "ကိုယ်ရေး", navContact: "ဆက်သွယ်",
    back: "← နောက်သို့", aboutTitle: "အကြောင်း",
    aboutP1: "HelpFinder သည် အခမဲ့ကိရိယာဖြစ်သည်။", aboutP2: "ပထမမြို့မှာ Rochester, NY။",
    aboutP3: "Clarity Reading သည် လမ်းညွှန်ဖတ်ခြင်းဖြစ်သည်။",
    aboutPersonal: "ကျွန်တော်က Anthony DiMarzo၊ Rochester က။ CDL လိုင်စင်ရှိပြီး နေ့စဉ်လမ်းတွေဆောက်နေတယ်။ ညတိုင်း ဒါကိုတည်ဆောက်နေတယ်။ မနက်ဖြန်အတွက် ပိုကောင်းတဲ့အနာဂတ်တည်ဆောက်ချင်တယ်။ အကျပ်အတည်းရောက်နေတဲ့လူတွေ အကူအညီရှာမတွေ့ဘူးဆိုတာ သတိထားမိတယ် — မရှိလို့မဟုတ်ဘူး၊ ဘယ်သူမှ ရိုးရှင်းတဲ့စကားနဲ့ တစ်နေရာတည်းမှာ မထားခဲ့လို့။ ဒါကြောင့် ကျွန်တော်လုပ်ခဲ့တယ်။ ဘွဲ့မရှိ။ ရန်ပုံငွေမရှိ။ ကျွန်တော်နဲ့ ကွန်ပျူတာတစ်လုံးပဲ။",
    aboutFamily: "Brockport မှာ ကျွန်တော့်ရည်းစားနဲ့ သားလေးနဲ့အတူနေတယ်။ သူ ခြောက်နှစ်။ သူကြောင့် ဒါရှိနေတာ။ သူအမွေဆက်ခံမယ့်ကမ္ဘာ သူမွေးဖွားခဲ့တာထက် ပိုကောင်းသင့်တယ်။",
    aboutSedral: "Sedral Studios ကို Steven အတွက် အမည်ပေးထားတယ်။ သူက ကျွန်တော့်သူငယ်ချင်း။ ဒဿနိကဗေဒ ပါရဂူဘွဲ့ရှိတယ်၊ autism ရှိတယ်၊ တခြားသူတွေမမြင်တာကို မြင်နိုင်တဲ့စိတ်ရှိတယ်။ 2025 ခရစ္စမတ်ညမှာ ထွက်သွားခဲ့တယ်။ အရေးကြီးဆုံးအရာတွေ လူတစ်ယောက်နဲ့အတူ ပျောက်မသွားသင့်လို့ ဒီအလုပ်က သူ့နာမည်ကို ဆောင်ထားတယ်။",
    aboutClose: "ဒီမှာအားလုံး အခမဲ့။ အခမဲ့ထားဖို့ ကူညီချင်ရင် လှူဒါန်းခလုတ်ရှိတယ်။ မလှူနိုင်ရင် ကိရိယာတွေသုံးပါ။ ဒါပဲလုံလောက်ပါတယ်။",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "ဆက်သွယ်ပါ။", contactTitle: "ဆက်သွယ်ရန်",
    supportTitle: "ဒီပရောဂျက်ကိုထောက်ပံ့ပါ", supportDesc: "HelpFinder သည် လူတိုင်းအတွက်အခမဲ့ဖြစ်သည်။",
    tier1: "တစ်ပတ်စာဆိုက်ကိုလည်ပတ်စေသည်", tier2: "တစ်လစာ hosting", tier3: "မြို့သစ်ထည့်ရန်ကူညီသည်",
    donatePaypal: "PayPal မှတစ်ဆင့်လှူဒါန်း", teamwork: "အသင်းအဖွဲ့လုပ်ဆောင်မှုက အိပ်မက်ကိုအကောင်အထည်ဖော်သည်။",
    supportDisclaimer: "လှူဒါန်းငွေများသည် hosting နှင့်တိုးချဲ့မှုကိုထောက်ပံ့သည်။",
    privacyTitle: "ကိုယ်ရေးကိုယ်တာ", privacyShort: "အတိုချုပ်: ကိုယ်ရေးကိုယ်တာဒေတာမကောက်ပါ။ (ရော့ချက်စတားကို ဘာလိုအပ်သလဲ လေ့လာနေပါတယ်။)",
    privacyP1: "အကောင့်မရှိ။ ကွတ်ကီးမရှိ။", privacyP2: "သင်ဘယ်သူလဲမသိပါ။",
    privacyP3: "AI အသုံးပြုသည်။ အားလုံးပျောက်သွားသည်။", privacyP4: "သင့်စက်တွင်ခြေရာမရှိ။",
    privacyQ: "မေးခွန်းများ?", footer: "ဘာမှမရှိဘဲတည်ဆောက်ခဲ့သည်။ လူတိုင်းအတွက်။",
  },
  so: {
    searchPlaceholder: "Raadi — cunto, guryo, ilko, shaqo...",
    door1Title: "Caawimaad baan u baahanahay",
    door1Hook: "Keligaa ma tihid.", door1Desc: "Caawimaadda oo dhan waa bilaash. La xiriir dadka saxda ah 5 daqiiqo gudahood.",
    door1Btn: "Raadi caawimaad",
    door1Sub: "ama wac 211 — bilaash, 24/7, luqad kasta",
    door2Title: "Waan u baahanahay caddayn", door2Hook: "Intaad wax badan samaysid, wax badan baad qaadataa. Intaad wax badan siisid, wax badan baad nooshahay.",
    door2Desc: "Akhris la hago. Lix su'aalood. Milicsi daacad ah. Deeqaha waa la soo dhaweynayaa, laakiin lagama baahna.",
    door2Btn: "Bilow akhriska", door2Footer: "Ogaanshaha waa caawimo caawimaduna waa bogsiis.", clarityLine1: "Waxaan sameeyay algorithm kugu akhriyo.", clarityLine2: "Tani maaha oo keliya su'aalo AI la weydiinayo.", clarityLine3: "Waxaa jira heerar ku dhisan. Ku bixi intaad dareento.", clarityLine4: "Ku deeq intaad awooddo — ama waxba ha bixin.", clarityLine5: "Qof walba wuxuu xaq u leeyahay su'aal.", clarityPrivacy: "Macluumaadkaaga lama isticmaalo ama lama ururiyo. 100% sir ah. Tani waa adiga iyo qofka aad dooratid inaad la wadaagto. Si xor ah u noqo daacad ama hal-abuur sida aad rabto.", clarityEnter: "Gal", clarityBack: "Dib u noqo", cdoor1Title: "Gal haddaad rabto inaad ogaato", cdoor1Desc: "Ma awoodi kartid inaad illowdo waxa aad taqaan.", cdoor1Label: "Hooska", cdoor2Title: "Arag muuqaalkaaga", cdoor2Desc: "Kuwa raadinaya caddayn aasaasi ah.", cdoor2Label: "Muraayada", cdoor3Title: "Dib u noqo", cdoor3Desc: "Uma diyaarsanid jawaabaha. Waqtiga keliya ayaa arka waxa indhahu arki karin.", cdoor3Label: "Albaabka", disclaimer: "Tani maaha daaweyn, talo caafimaad, ama bedel caawimaad xirfadle. Xaaladda degdegga wac 988 ama 211. Deeqaha waa ikhtiyaari.", helpDisclaimer: "HelpFinder waa qalab macluumaad. Faahfaahintu way isbeddeli kartaa.",
    door3Title: "Waxaan rabaa inaan taageero",
    door3Desc: "Dollar kasta waxay kaydisaa bilaash qof walba.",
    trust: "Xog lama ururiyo. Akoon ma jirto. La socon maayo.",
    libraryTitle: "Maktabadda", libraryDesc: "Maqaallo bilaash ah.",
    comingSoon: "Waa Imanaya",
    submitTitle: "Soo gudbi shaqooyinkaaga", submitDesc: "Gabay, maqaal, farshaxan, muusig.",
    bulletinTitle: "Xubnaha Caawinta Bulshada", bulletinDesc: "Soo dhig waxaad u baahan tahay. Soo bandhig waxaad haysato. Jaarka ayaa jaarka caawiya.", feedbackTitle: "Noo sheeg waxa maqan", feedbackDesc: "Ma taqaan barnaamij aanan haysan? Wax khalad ah? Fariin kasta waan aqrinaa.", feedbackBtn: "Noo soo dir fariin",
    aboutLink: "Ku saabsan Sedral Studios", aboutLinkDesc: "Waa maxay. Yaa dhisay. Sababta oo bilaash ah.",
    navHome: "Guriga", navAbout: "Ku saabsan", navSupport: "Taageer", navPrivacy: "Asturnaanta", navContact: "Xiriir",
    back: "← Dib u noqo", aboutTitle: "Ku saabsan",
    aboutP1: "HelpFinder waa qalab bilaash ah.", aboutP2: "Magaalada kowaad waa Rochester, NY.",
    aboutP3: "Akhriska Caddaynta waa qalab milicsi.",
    aboutPersonal: "Waxaan ahay Anthony DiMarzo oo ka socda Rochester. Waxaan hayaa CDL waxaanan maalintii dhisaa jidadka. Habeenkii waxaan dhisaa tan. Waxaan doorbidayaa inaan dhiso mustaqbal ka fiican berrito. Waxaan ogaaday in dadka dhibaatada ku jira aysan heli karin caawimaad — ma aha sababtoo ah ma jirto, laakiin qofna ma dhigin meel hal ah oo luqad fudud ah. Markaa waan sameeyay. Shahaado ma hayo. Maalgelin ma jirto. Aniga iyo kombiyuutar keliya.",
    aboutFamily: "Waxaan ku noolahay Brockport aniga iyo xaaskayga la doortay iyo wiilkayga. Wuxuu jiraa lix sano. Isaga ayaa sababta tan jira. Dunida uu dhaxli doono waa inay ka fiicnaataa tii uu ku dhashay.",
    aboutSedral: "Sedral Studios waxaa loogu magacaabay Steven. Wuxuu ahaa saaxiibkay. Wuxuu lahaa shahaadada doctoorka falasfada, autism, iyo maskax arkaysa waxa aan dadka kale arki karin. Wuxuu tegey habeenkii Ciidda 2025. Shaqadani waxay sidataa magaciisa sababtoo ah waxyaalaha ugu muhiimsan ma aha inay la lumaan marka qof tago.",
    aboutClose: "Wax walba halkan waa bilaash. Haddaad rabto inaad caawiso inay bilaash ahaato, waxaa jira badhanka deeqda. Haddaadan deeq bixin karin, isticmaal qalabka. Taasi way ku filantahay.",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "Nala xiriir.", contactTitle: "Xiriir",
    supportTitle: "Taageer mashruucan", supportDesc: "HelpFinder waa bilaash qof walba.",
    tier1: "Websaydhka toddobaad u shaqeeysiiya", tier2: "Bil hosting", tier3: "Magaalo cusub ku darida",
    donatePaypal: "Ku deeq PayPal", teamwork: "Wadashaqayntu waxay noqotaa riyada run.",
    supportDisclaimer: "Deeqaha waxay taageeraan hosting iyo ballaarinta. Mahadsanid.",
    privacyTitle: "Asturnaanta", privacyShort: "Gaabis: xogta shaqsiga ma uruurino.",
    privacyP1: "Akoon ma jirto. Cookies ma jirto.", privacyP2: "Kuma aqoonsano.",
    privacyP3: "AI ayuu isticmaalaa. Wax walba waa libdhaan.", privacyP4: "Raad ma ka hadhayo qalabkaaga.",
    privacyQ: "Su'aallo?", footer: "Wax la'aan laga dhisay. Qof walba loogu dhisay.",
  },
  zh: {
    searchPlaceholder: "搜索 — 食物、住房、牙科、工作...",
    door1Title: "我需要帮助",
    door1Hook: "你不是一个人。", door1Desc: "所有帮助均免费。5分钟内找到对的人。食物、住房、医疗等。",
    door1Btn: "寻找帮助",
    door1Sub: "或拨打211 — 免费，24/7，任何语言",
    door2Title: "我需要清晰", door2Hook: "赚得越多，拿得越多。给得越多，活得越多。",
    door2Desc: "引导阅读。六个问题。真诚反思。不保存任何内容。欢迎捐赠，从不强求。",
    door2Btn: "开始阅读", door2Footer: "关注即帮助，帮助即治愈。", clarityLine1: "我做了一个能读懂你的算法。", clarityLine2: "这不仅仅是向AI提问。", clarityLine3: "框架中有不同层级。凭感觉付费。", clarityLine4: "捐你能捐的——或者什么都不捐。", clarityLine5: "每个人都值得一个问题。", clarityPrivacy: "你的信息不会被使用或收集。100%隐私。这只在你和你选择分享的人之间。尽情真诚或创意地表达自己。", clarityEnter: "进入", clarityBack: "返回", cdoor1Title: "想知道就进来", cdoor1Desc: "你无法不知道你已经知道的。", cdoor1Label: "暗影", cdoor2Title: "看见你自己的倒影", cdoor2Desc: "为那些寻找基本清晰的人。", cdoor2Label: "镜", cdoor3Title: "回头", cdoor3Desc: "还没准备好面对答案。只有时间能看到眼睛看不到的。", cdoor3Label: "门", disclaimer: "这不是治疗、医疗建议或专业帮助的替代品。危机时请拨打988或211。捐赠是自愿的。", helpDisclaimer: "HelpFinder仅为信息工具。项目详情可能会变更。",
    door3Title: "我想支持这个项目",
    door3Desc: "每一美元都让这对所有人保持免费。",
    trust: "不收集数据。无账户。无追踪。永远。",
    libraryTitle: "图书馆", libraryDesc: "关于观察、治愈和真诚对话的免费文章。",
    comingSoon: "即将推出",
    submitTitle: "提交你的创意作品", submitDesc: "诗歌、散文、艺术、音乐。",
    bulletinTitle: "社区互助公告板", bulletinDesc: "发布你的需求。提供你的帮助。邻里互助。", feedbackTitle: "告诉我们缺少什么", feedbackDesc: "知道我们遗漏的项目？有什么问题？我们会阅读每条消息。", feedbackBtn: "给我们留言",
    aboutLink: "关于 Sedral Studios", aboutLinkDesc: "这是什么。谁建的。为什么免费。",
    navHome: "首页", navAbout: "关于", navSupport: "支持", navPrivacy: "隐私", navContact: "联系",
    back: "← 返回", aboutTitle: "关于",
    aboutP1: "HelpFinder是一个免费工具。无账户。无数据。无广告。",
    aboutP2: "第一个城市是Rochester, NY — 34个类别中有180+个项目。",
    aboutP3: "清晰阅读是引导反思工具。",
    aboutPersonal: "我是Anthony DiMarzo，来自Rochester。我有商业驾照，白天修路。晚上建造这个。我宁愿为明天建造更好的未来。我注意到危机中的人找不到帮助——不是因为帮助不存在，而是没人用简单的语言把它放在一个地方。所以我做了。没有学位。没有资金。没有投资者。只有我和一台电脑。",
    aboutFamily: "我和未婚妻以及我们的儿子住在Brockport。他六岁。他是这一切存在的原因。他将继承的世界应该比他出生时的更好。",
    aboutSedral: "Sedral Studios以Steven命名。他是我的朋友。他拥有哲学博士学位、自闭症，以及能看到别人看不到的东西的头脑。他在2025年平安夜离开了。这项工作以他的名字命名，因为最重要的东西不应该随着某人的离去而消失。",
    aboutClose: "这里的一切都是免费的。如果你想帮助保持免费，有一个捐赠按钮。如果不能捐赠，使用工具就好。这就够了。",
    aboutSign: "— Ozramid Of March",
    aboutAgency: "联系我们。", contactTitle: "联系",
    supportTitle: "支持这个项目", supportDesc: "HelpFinder对所有人免费。",
    tier1: "维持网站运行一周", tier2: "覆盖一个月的托管", tier3: "帮助我们添加新城市",
    donatePaypal: "通过PayPal捐赠", teamwork: "团队合作成就梦想。",
    supportDisclaimer: "捐款支持托管和扩展。谢谢。",
    privacyTitle: "隐私", privacyShort: "简短版：我们不收集个人数据。（我们正在了解罗切斯特需要什么。）",
    privacyP1: "无账户。无Cookie。无追踪。", privacyP2: "我们不知道你是谁。",
    privacyP3: "使用AI。一切都会消失。", privacyP4: "你的设备上没有痕迹。",
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

export default function HelpFinderLanding({ onNavigateHelp, onLangChange, onCityDetected }) {
  const [page, setPage] = useState(PAGES.HOME);
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("your area");

  // Detect city via geolocation + free reverse geocode
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        .then((r) => r.json())
        .then((d) => {
          const addr = d.address || {};
          const place = addr.city || addr.town || addr.village || addr.county || null;
          if (place) { setCity(place); if (onCityDetected) onCityDetected(place); }
        })
        .catch(() => {});
    }, () => {});
  }, []);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { const tm = setTimeout(() => setLoaded(true), 50); return () => clearTimeout(tm); }, []);

  // Auto-navigate to Support page if URL hash is #support (used by HelpFinder footer link)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#support") {
      setPage(PAGES.SUPPORT);
      // Clear the hash so refreshing the page doesn't keep going to Support
      try { window.history.replaceState(null, "", window.location.pathname); } catch (e) {}
    }
  }, []);

  const nav = (p) => { setPage(p); setMenuOpen(false); window.scrollTo(0, 0); };
  const isRTL = lang === "ar";

  // ── Donation handler — calls Stripe checkout API ──
  const [donateLoading, setDonateLoading] = useState(false);
  const [donateError, setDonateError] = useState(null);
  const handleDonate = async (amountCents) => {
    setDonateLoading(true);
    setDonateError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountCents }),
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

          {/* HELP IN EVERY LANGUAGE */}
          <div className="hf-fade-in hf-d1" style={{
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
            <div style={{ fontSize: 13, color: C.dust, letterSpacing: 0.5 }}>
              Free help in {city}.
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="hf-fade-in hf-d2" style={{ marginTop: 24 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: C.white, border: `1.5px solid ${C.border}`,
              borderRadius: 28, padding: "12px 18px",
            }}>
              <span style={{ fontSize: 16, color: C.dust, flexShrink: 0 }}>🔍</span>
              <input
                type="text" placeholder={t(lang, "searchPlaceholder")}
                value={search} onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && search.trim()) { /* Route to Help Finder filtered */ } }}
                style={{
                  flex: 1, border: "none", outline: "none", fontSize: 15,
                  background: "transparent", color: C.bark, fontFamily: "inherit",
                }}
              />
              {search && (
                <button onClick={() => setSearch("")} aria-label="Clear"
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: C.dust, padding: 0 }}>✕</button>
              )}
            </div>
          </div>

          {/* ── ENTER BUTTON ── */}
          <div className="hf-fade-in hf-d3" style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <a href="/help"
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
        <main style={{ padding: "0 20px 40px" }}>
          <button onClick={() => nav(PAGES.HOME)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: C.stone, padding: "16px 0", fontFamily: "inherit" }}>{t(lang,"back")}</button>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, fontWeight: 400, marginBottom: 20, color: C.bark }}>{t(lang,"aboutTitle")}</h2>
          <div style={{ fontSize: 15, lineHeight: 1.7, color: C.bark }}>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutP1")}</p>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutP2")}</p>
                        <p style={{ marginBottom: 16 }}>{t(lang,"aboutPersonal")}</p>
            <p style={{ marginBottom: 16 }}>{t(lang,"aboutFamily")}</p>
            <p style={{ marginBottom: 16, fontStyle: "italic", color: C.stone }}>{t(lang,"aboutSedral")}</p>
            <p style={{ marginBottom: 16 }}>Everything here is free. If you want to help keep it free, <button onClick={() => nav(PAGES.SUPPORT)} style={{ background: "none", border: "none", color: C.forest, fontWeight: 600, cursor: "pointer", padding: 0, fontSize: "inherit", fontFamily: "inherit", textDecoration: "underline" }}>there's a donate page</button>. If you can't, use the tools. That's enough.</p>
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
          <p style={{ fontSize: 15, lineHeight: 1.6, color: C.stone, marginBottom: 24 }}>{t(lang,"supportDesc")}</p>

          {/* Three tier buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            <button
              onClick={() => handleDonate(500)}
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
                <div style={{ fontSize: 18, fontWeight: 700, color: C.bark, marginBottom: 2 }}>$5</div>
                <div style={{ fontSize: 13, color: C.stone }}>{t(lang,"tier1")}</div>
              </div>
              <span style={{ fontSize: 20, color: C.forest }}>→</span>
            </button>

            <button
              onClick={() => handleDonate(2000)}
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
                <div style={{ fontSize: 18, fontWeight: 700, color: C.bark, marginBottom: 2 }}>$20</div>
                <div style={{ fontSize: 13, color: C.stone }}>{t(lang,"tier2")}</div>
              </div>
              <span style={{ fontSize: 20, color: C.forest }}>→</span>
            </button>

            <button
              onClick={() => handleDonate(10000)}
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
                <div style={{ fontSize: 18, fontWeight: 700, color: C.bark, marginBottom: 2 }}>$100</div>
                <div style={{ fontSize: 13, color: C.stone }}>{t(lang,"tier3")}</div>
              </div>
              <span style={{ fontSize: 20, color: C.forest }}>→</span>
            </button>
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
              marginBottom: 20,
            }}
          >
            {t(lang,"donatePaypal")}
          </a>

          {/* Disclaimer */}
          <p style={{ fontSize: 12, color: C.stone, lineHeight: 1.6, textAlign: "center", marginBottom: 12 }}>
            {t(lang,"supportDisclaimer")}
          </p>
          <p style={{ fontSize: 11, color: C.dust, lineHeight: 1.5, textAlign: "center" }}>
            Voluntary contribution. Not tax-deductible. Sedral Studios EIN on file.
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


            {/* ═══ FOOTER ═══ */}
      <footer style={{ textAlign: "center", padding: "20px 20px 32px", borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
            <button className="hf-nav-link" onClick={() => nav(PAGES.ABOUT)} style={{ fontSize: 12 }}>{t(lang,"navAbout")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.SUPPORT)} style={{ fontSize: 12 }}>{t(lang,"navSupport")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.PRIVACY)} style={{ fontSize: 12 }}>{t(lang,"navPrivacy")}</button>
            <button className="hf-nav-link" onClick={() => nav(PAGES.TERMS)} style={{ fontSize: 12 }}>{t(lang,"navTerms")}</button>
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
