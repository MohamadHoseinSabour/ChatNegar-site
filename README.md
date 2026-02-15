# چت‌نگار | ChatNegar Landing Page

لندینگ‌پیج رسمی محصول **چت‌نگار** با تمرکز بر معرفی افزونه چت‌بات هوشمند برای وردپرس/ووکامرس.

این پروژه یک فرانت‌اند React + Vite است (بدون بک‌اند داخلی) و برای نمایش قابلیت‌های محصول، دمو تعاملی ویجت و CTAهای فروش/نصب ساخته شده است.

## ویژگی‌های اصلی

- رابط کاملا RTL و فارسی
- طراحی مدرن با Tailwind (از طریق CDN در `index.html`)
- انیمیشن‌های UI با `framer-motion`
- کامپوننت‌بندی واضح برای هر سکشن صفحه
- دمو تعاملی ویجت چت با سناریوی پیام‌های خودکار
- ناوبری اسکرول نرم با منوی موبایل

## استک تکنولوژی

- React 19
- TypeScript
- Vite 6
- Framer Motion
- Lucide React (آیکن‌ها)
- TailwindCSS (CDN Config در `index.html`)

## ساختار پروژه

```text
.
├─ components/
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  └─ Section.tsx
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ ProblemSolution.tsx
│  ├─ Comparison.tsx
│  ├─ Features.tsx
│  ├─ Integrations.tsx
│  ├─ Timeline.tsx
│  ├─ DemoWidget.tsx
│  ├─ Testimonials.tsx
│  ├─ DevSection.tsx
│  ├─ Pricing.tsx
│  └─ FAQ.tsx
├─ App.tsx
├─ index.tsx
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
└─ metadata.json
```

## نحوه اجرا

### پیش‌نیاز

- Node.js (پیشنهادی: نسخه LTS جدید)

### نصب و اجرا

```bash
npm install
npm run dev
```

### بیلد تولید

```bash
npm run build
npm run preview
```

## متغیرهای محیطی

در این نسخه، کلید API سمت کلاینت نیاز نیست.
در صورت نیاز می‌توانید فقط مسیر پایه build را با این متغیر تنظیم کنید:

```env
VITE_BASE_PATH=/custom-path/
```

اگر مقدار بالا تنظیم نشود، مسیر پایه در CI به‌صورت خودکار تعیین می‌شود.

## تحلیل فنی پروژه

### معماری و سازمان‌دهی

- فایل `App.tsx` نقش Composition Root را دارد و تمام سکشن‌ها را به‌ترتیب صفحه لندینگ مونتاژ می‌کند.
- هر بخش صفحه در یک کامپوننت مستقل پیاده‌سازی شده و مسئولیت‌ها قابل فهم و قابل توسعه هستند.
- اجزای مشترک در `components/ui` قرار گرفته‌اند (`Button`, `Section`) که برای یکنواختی UI مناسب است.

### نقاط قوت

- ساختار کامپوننتی تمیز و خوانا
- تجربه کاربری روان (motion + smooth scroll)
- محتوای محصولی دقیق برای پرزنت مارکتینگ
- سازگاری خوب با موبایل و دسکتاپ در اکثر سکشن‌ها

### محدودیت‌ها و نکات قابل بهبود

- در بیلد، هشدار `index.css doesn't exist at build time` دیده می‌شود چون در `index.html` لینک شده ولی فایل وجود ندارد.
- در `index.html` از `importmap` استفاده شده، در حالی که پروژه با Vite باندل می‌شود؛ این بخش معمولا اضافی است.
- تست خودکار (`unit/e2e`) و Lint Script در `package.json` تعریف نشده‌اند.
- اغلب CTAها/لینک‌ها نمایشی هستند و به مسیر واقعی متصل نشده‌اند.
- داده‌های متنی سکشن‌ها Hardcoded هستند؛ برای مقیاس‌پذیری بهتر می‌توان به فایل content/config منتقل کرد.

## وضعیت بررسی این مخزن

بررسی‌های اجرایی انجام‌شده:

- `npm install` ✅
- `npm run build` ✅ (با هشدار نبودن `index.css`)
- `npx tsc --noEmit` ✅

## پیشنهاد مسیر توسعه

1. حذف یا ایجاد `index.css` برای رفع هشدار بیلد.
2. حذف `importmap` از `index.html` در صورت عدم نیاز.
3. افزودن اسکریپت‌های `lint` و `typecheck` و اجرای آن‌ها در CI.
4. اتصال CTAها به لینک‌های واقعی (GitHub, Docs, Download).
5. استخراج محتوا به یک لایه config/content برای نگهداری بهتر.

## لایسنس

در حال حاضر لایسنس مشخصی در مخزن تعریف نشده است. پیشنهاد می‌شود یک فایل `LICENSE` اضافه شود.

## GitHub Pages Deployment

This project is configured for repositories that already use:
`Settings > Pages > Source: Deploy from a branch`.

### What was configured

- On each push to `main`/`master`, workflow `build-docs-for-branch-pages.yml` runs.
- The workflow builds the app with `VITE_BASE_PATH=/<repo>/docs/`.
- Build output is committed automatically to `docs/`.
- Root page redirects GitHub Pages traffic to `/<repo>/docs/`.

### Optional override

If you want a custom base path, set this environment variable during build:

```bash
VITE_BASE_PATH=/custom-path/
```
