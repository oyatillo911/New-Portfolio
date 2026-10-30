/**
 * =====================================================================
 * OYATILLO AHMADALIYEV — PORTFOLIO SOZLAMALARI VA MA'LUMOTLARI
 * =====================================================================
 * Ushbu faylda barcha asosiy havolalar, aloqa ma'lumotlari,
 * rezyume (CV) yo'li va loyihalar ma'lumotlari jamlangan.
 * O'zingizning haqiqiy havolalaringizni shu yerda osongina almashtirishingiz mumkin!
 */

export const PERSONAL_INFO = {
  name: "Oyatillo Ahmadaliyev",
  shortName: "OA",
  role: "Frontend Dasturchi",
  experience: "1+ yil tajriba",
  location: "O'zbekiston, Farg'ona / Toshkent",
  availability: "Yangi loyihalar va ish uchun ochiq",
  bio: "1+ yillik amaliy tajribaga ega Frontend dasturchi. Zamonaviy React.js ekotizimi, Tailwind CSS va toza arxitektura yordamida yuqori tezlikdagi, moslashuvchan va chiroyli veb-ilovalarni yarataman.",
  
  /* ================= ALOQA VA IJTIMOIY TARMOQ HAVOLALARI ================= */
  /* TELEGRAM HAVOLASI: O'zingizning telegram username'ingizni yozing */
  telegram: "https://t.me/AKHMADOFF_16", // <-- O'zgartiring: masalan, https://t.me/oyatillo_dev
  telegramHandle: "@your_username",

  /* EMAIL HAVOLASI: O'zingizning email manzilingizni yozing */
  email: "oyatilloaxmadaliyev8@gmail.com", // <-- O'zgartiring: masalan, oyatillo.dev@gmail.com
  emailMailto: "mailto:your.email@gmail.com",

  /* GITHUB PROFIL HAVOLASI */
  github: "https://github.com/your_username", // <-- O'zgartiring: masalan, https://github.com/oyatillo-dev
  githubUsername: "your_username",

  /* LINKEDIN HAVOLASI (Ixtiyoriy) */
  linkedin: "https://linkedin.com/in/your_username", // <-- O'zgartiring: masalan, https://linkedin.com/in/oyatillo

  /* REZYUME (CV) FAYL YO'LI */
  /* public/ papkasiga resume.pdf yoki cv.pdf faylingizni qo'ying */
  cvUrl: "/resume.pdf", // <-- public/resume.pdf faylini yuklab olish uchun
  cvFileName: "Oyatillo_Ahmadaliyev_CV.pdf"
};

export const STATS = [
  {
    id: 1,
    value: "1+",
    label: "Yil Tajriba",
    description: "Amaliy veb-ishlanmalar va loyihalar yaratish tajribasi"
  },
  {
    id: 2,
    value: "20+",
    label: "GitHub Loyihalari",
    description: "Turli murakkablikdagi ochiq kodli repositories"
  },
  {
    id: 3,
    value: "10+",
    label: "Vercel Deploy",
    description: "Jonli rejimda ishlovchi yuqori unumdor veb-ilovalar"
  },
  {
    id: 4,
    value: "100%",
    label: "Pixel-Perfect UI",
    description: "Figma dizaynlarini kodga 1-ga-1 aniqlikda ko'chirish"
  }
];

export const TECH_STACK = [
  { name: "React.js", category: "Framework", level: "Ilg'or", icon: "Atom", color: "#61DAFB" },
  { name: "JavaScript (ES6+)", category: "Til", level: "Ilg'or", icon: "FileCode", color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Styling", level: "Ilg'or", icon: "Palette", color: "#38BDF8" },
  { name: "HTML5 & CSS3", category: "Core", level: "Mukammal", icon: "Code2", color: "#E34F26" },
  { name: "REST API", category: "Backend/Integratsiya", level: "Ilg'or", icon: "Globe", color: "#10B981" },
  { name: "Git & GitHub", category: "Versiya nazorati", level: "Ilg'or", icon: "GitBranch", color: "#F05032" },
  // { name: "Framer Motion", category: "Animatsiya", level: "Tajribali", icon: "Sparkles", color: "#EC4899" },
  // { name: "Vite & Vercel", category: "Workflow & Deploy", level: "Ilg'or", icon: "Zap", color: "#A855F7" }
];

export const SKILL_MARQUEE = [
  "React.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5 & Semantic Web",
  "CSS3 / Flexbox / Grid",
  "RESTful API Integration",
  "Git & GitHub Workflow",
  "Framer Motion Animations",
  "Vite Modern Bundler",
  "Vercel Deployment",
  "Responsive Web Design",
  "Figma to Pixel-Perfect Code"
];

/* ================= TOP 4 FEATURING PROJECTS ================= */
/* Loyiha havolalarini (github va liveUrl) quyida osongina o'zgartirishingiz mumkin */
export const PROJECTS = [
  {
    id: 1,
    title: "NovaStore — Zamonaviy E-Commerce Do'kon",
    category: "Veb Ilova · E-Commerce",
    year: "2026",
    description: "To'liq funksional internet do'kon ilovasi. Mahsulotlarni qidirish, toifalar bo'yicha filtrlash, savatcha (Cart) holatini saqlash va tezkor hisob-kitob qilish imkoniyati.",
    tags: ["React.js", "Tailwind CSS", "REST API", "Context API"],
    /* O'zgartirish uchun havolalar: */
    githubUrl: "https://github.com/your_username/novastore-ecommerce", // <-- GitHub manzili
    liveUrl: "https://novastore-demo.vercel.app",                     // <-- Jonli sayt manzili
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    stats: "Tez yuklanish · 100% Moslashuvchan"
  },
  {
    id: 2,
    title: "ApexMetrics — SaaS Boshqaruv & Analitika Paneli",
    category: "Dashboard · SaaS",
    year: "2026",
    description: "Kompaniya ko'rsatkichlari, savdo statistikasi va foydalanuvchilar oqimini vizual grafiklar orqali ko'rsatib beruvchi professional boshqaruv tizimi (Admin Dashboard).",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Lucide Icons"],
    /* O'zgartirish uchun havolalar: */
    githubUrl: "https://github.com/your_username/apexmetrics-dashboard", // <-- GitHub manzili
    liveUrl: "https://apexmetrics-demo.vercel.app",                      // <-- Jonli sayt manzili
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    stats: "Interaktiv Grafiklar · Dark Mode"
  },
  {
    id: 3,
    title: "CryptoPulse — Kriptovalyuta Kurslari & Bozor Tracker",
    category: "Fintech · API Integratsiya",
    year: "2025",
    description: "CoinGecko API orqali real vaqtdagi 200+ kriptovalyutalarning jonli narxi, 24 soatlik o'zgarishlari va bozor kapitallashuvini taqdim etuvchi dinamik veb platforma.",
    tags: ["React.js", "CoinGecko API", "Tailwind CSS", "Axios"],
    /* O'zgartirish uchun havolalar: */
    githubUrl: "https://github.com/your_username/cryptopulse-tracker", // <-- GitHub manzili
    liveUrl: "https://cryptopulse-demo.vercel.app",                   // <-- Jonli sayt manzili
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    stats: "Jonli Narxlar · Real-Time Yangilanish"
  },
  {
    id: 4,
    title: "VesperCraft — Kreativ Agentlik & Portfolio",
    category: "Veb Sayt · Framer Dizayn",
    year: "2025",
    description: "Minimalist qora mavzudagi, mikro-animatsiyalar va zamonaviy tipografiya bilan bezatilgan premium darajadagi raqamli mahsulot taqdimoti.",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Responsive UI"],
    /* O'zgartirish uchun havolalar: */
    githubUrl: "https://github.com/your_username/vespercraft-agency", // <-- GitHub manzili
    liveUrl: "https://vespercraft-demo.vercel.app",                  // <-- Jonli sayt manzili
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    stats: "Mikro-Animatsiyalar · 60fps"
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Tahlil & Rejalashtirish",
    subtitle: "Loyihaning tub mohiyati va talablar",
    description: "Loyiha arxitekturasi, maqsadli auditoriya talablari va UI/UX qoidalarini aniqlab, komponentlar tuzilishini ishlab chiqaman."
  },
  {
    step: "02",
    title: "Dizayn & Tipografiya",
    subtitle: "Figma orqali vizual standartlar",
    description: "Figma dizaynlarini piksel-ba-piksel tahlil qilib, ranglar gammasi, shriftlar balansi va moslashuvchan gridni sozlayman."
  },
  {
    step: "03",
    title: "Toza Kod & Integratsiya",
    subtitle: "React.js & REST API uyg'unligi",
    description: "Modulli, o'qilishi oson va qayta ishlatiluvchi React komponentlarini yozaman. REST API orqali server bilan tezkor integratsiya qilaman."
  },
  {
    step: "04",
    title: "Testlash & Vercel Deploy",
    subtitle: "Tezlik va moslashuvchanlik nazorati",
    description: "Barcha qurilmalarda (Mobile, Tablet, Desktop) tekshirib, Vercel platformasiga uzluksiz yuklayman (CI/CD)."
  }
];
