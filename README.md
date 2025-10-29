# قرى AI - Qura AI Website

موقع إلكتروني احترافي لمشروع قرى AI لتعليم الذكاء الاصطناعي في القرى والمناطق البعيدة في الإمارات.

## 🌟 المميزات

- ✨ تصميم احترافي بألوان مستوحاة من الشعار (بني، بيج، ذهبي)
- 🌐 دعم كامل للغتين العربية والإنجليزية مع تبديل سلس
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- 🔍 محسّن لمحركات البحث (SEO) مع Meta Tags كاملة
- ⚡ أداء عالي وسرعة تحميل ممتازة
- 🎨 رسوم متحركة بسيطة وجذابة
- ↔️ دعم RTL للعربية و LTR للإنجليزية

## 🛠️ التقنيات المستخدمة

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **Routing:** Wouter
- **Build Tool:** Vite
- **Language:** TypeScript

## 📦 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn أو pnpm (مدير الحزم)

### خطوات التثبيت

1. **تثبيت المكتبات:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **تشغيل السيرفر المحلي:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

سيعمل الموقع على: `http://localhost:3000`

3. **بناء المشروع للإنتاج:**
```bash
npm run build
# or
yarn build
# or
pnpm build
```

4. **معاينة النسخة المبنية:**
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🌐 النشر على Cloudflare Pages

### طريقة 1: عبر واجهة Cloudflare Pages

1. ادخل إلى [Cloudflare Pages](https://pages.cloudflare.com/)
2. اضغط على "Create a project"
3. اختر "Connect to Git" واربط الريبو
4. اضبط الإعدادات:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
5. اضغط "Save and Deploy"

### طريقة 2: عبر Wrangler CLI

```bash
npm install -g wrangler
wrangler pages publish dist
```

## 📁 هيكل المشروع

```
qura-ai-website/
├── client/                 # كود الواجهة الأمامية
│   ├── public/            # الملفات الثابتة (الشعار، الصور)
│   ├── src/
│   │   ├── components/    # المكونات القابلة لإعادة الاستخدام
│   │   ├── contexts/      # React Contexts
│   │   ├── pages/         # صفحات الموقع
│   │   ├── lib/           # وظائف مساعدة
│   │   ├── App.tsx        # المكون الرئيسي
│   │   ├── main.tsx       # نقطة الدخول
│   │   └── index.css      # الأنماط العامة
│   └── index.html         # ملف HTML الرئيسي
├── shared/                # الثوابت المشتركة
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 تخصيص الموقع

### تغيير الألوان:
عدّل ملف `client/src/index.css` في قسم `:root`

### تغيير النصوص:
عدّل ملف `client/src/contexts/LanguageContext.tsx` في كائن `translations`

### تغيير الشعار:
استبدل ملف `client/public/logo.png`

### إضافة صفحات جديدة:
1. أنشئ ملف جديد في `client/src/pages/`
2. أضف المسار في `client/src/App.tsx`

## 📞 معلومات الاتصال

- **الموقع:** quraai.ae
- **البريد الإلكتروني:** info@quraai.ae
- **الهاتف:** +971 50 730 0052

## 📄 الترخيص

جميع الحقوق محفوظة © 2025 قرى AI - Qura AI
