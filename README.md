# Oyatillo Ahmadaliyev — Frontend Dasturchi Portfoliosi ⚡

Ushbu portfolio [Framer](https://flowing-porcupine-450501.framer.app/) saytining estetikasi, qorong'i (dark-mode) minimalist uslubi, silliq mikro-animatsiyalari va tipografiyasini 1-ga-1 aniqlikda (pixel-perfect) takrorlab, **Oyatillo Ahmadaliyev** uchun zamonaviy o'zbek tilida moslashtirilgan React + Tailwind CSS + Framer Motion loyihasidir.

---

## 🛠 Texnologiyalar & Kutubxonalar

- **React 19** — Zamonaviy komponentlar arxitekturasi
- **Tailwind CSS** — Moslashuvchan va tezkor stilizatsiya
- **Framer Motion** — Silliq layout o'tishlari, mikro-animatsiyalar, scroll triggerlari va interaktiv hover effektlari
- **Clash Display & Inter** — Yuqori darajadagi tipografiya
- **Lucide Icons & Custom SVG** — Toza vektor ikonkalari
- **Vite** — Zamonaviy va chaqmoqdek tez ishlab chiqish muhiti

---

## 🚀 Loyihani Ishga Tushirish

Loyihaning ildiz papkasida quyidagi buyruqlarni bajaring:

```bash
# 1. Bog'liqliklarni o'rnatish
npm install

# 2. Mahalliy serverni ishga tushirish (Development)
npm run dev

# 3. Ishlab chiqarish (Production) uchun yig'ish
npm run build

# 4. Yig'ilgan loyihani ko'rish (Preview)
npm run preview
```

---

## ⚙️ Shaxsiy Ma'lumotlar va Havolalarni O'zgartirish

Barcha asosiy ma'lumotlar, havolalar va loyihalar bitta markaziy faylda joylashtirilgan:
📂 **`src/data/portfolioData.js`**

### 1. Aloqa va Tarmoqlar:
- **Telegram:** `src/data/portfolioData.js` ichidagi `telegram` maydonini o'zingizning havolangizga almashtiring (masalan: `https://t.me/oyatillo_dev`).
- **Email:** `email` va `emailMailto` maydonlarini o'zingizning haqiqiy emailingizga almashtiring (masalan: `oyatillo.dev@gmail.com`).
- **GitHub:** `github` havolasini o'zingizning profilingizga almashtiring.
- **LinkedIn:** Ixtiyoriy ravishda LinkedIn profilingizni qo'yishingiz mumkin.

### 2. Rezyume (CV) Yuklash:
- O'zingizning haqiqiy PDF rezyume faylingizni `public/resume.pdf` nomi bilan saqlang.
- Saytdagi "CV Yuklab Olish" tugmasi avtomatik ravishda ushbu faylni yuklab beradi.

### 3. Top 4 Asosiy Loyihalar:
`src/data/portfolioData.js` faylidagi `PROJECTS` massivida 4 ta asosiy loyiha keltirilgan:
1. `NovaStore — Zamonaviy E-Commerce Do'kon`
2. `ApexMetrics — SaaS Boshqaruv & Analitika Paneli`
3. `CryptoPulse — Kriptovalyuta Kurslari & Bozor Tracker`
4. `VesperCraft — Kreativ Agentlik & Portfolio`

Har bir loyiha uchun:
- `githubUrl`: Repositoriya havolasi
- `liveUrl`: Vercel yoki boshqa xizmatdagi jonli demo havolasi
- `title`, `description`, `tags`: O'zbek tilidagi tavsif va texnologiyalar ro'yxati.

---

## 🌐 Vercel-ga Bepul Deploy Qilish

1. Loyihani GitHub-ga yuklang:
```bash
git init
git add .
git commit -m "feat: Oyatillo Ahmadaliyev Frontend Developer Portfolio"
git remote add origin https://github.com/<your_username>/oyatillo-portfolio.git
git push -u origin main
```
2. [Vercel](https://vercel.com) saytiga kiring.
3. **"Add New Project"** tugmasini bosing va GitHub repositoriyangizni tanlang.
4. Hech qanday qo'shimcha sozlamasiz **"Deploy"** tugmasini bosing. Loyihangiz 30 soniyada butun dunyoga jonli taqdim etiladi!
