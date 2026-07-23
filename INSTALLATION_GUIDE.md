# 🚀 دليل التثبيت والبدء السريع

## متطلبات النظام
- Node.js 16+
- MongoDB 4.4+
- npm أو yarn

## خطوات التثبيت

### 1. استنساخ المشروع
```bash
git clone https://github.com/Emadelgizawy/Emadelgizawy.git
cd Emadelgizawy
```

### 2. تثبيت المكتبات

#### الخادم
```bash
cd server
npm install
```

#### العميل
```bash
cd ../client
npm install
```

#### لوحة الإدارة
```bash
cd ../admin
npm install
```

### 3. إعداد متغيرات البيئة

#### Server (.env)
```bash
cd server
cp .env.example .env
```

حرّر `.env` وأضف:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/kitchens
JWT_SECRET=your_secret_key_here
WHATSAPP_ACCESS_TOKEN=your_token
FACEBOOK_ACCESS_TOKEN=your_token
```

### 4. بدء التطبيق

#### تشغيل الخادم
```bash
cd server
npm run dev
```

#### تشغيل العميل (في terminal جديد)
```bash
cd client
npm run dev
```

#### تشغيل لوحة الإدارة (في terminal جديد)
```bash
cd admin
npm run dev
```

## الروابط
- **العميل**: http://localhost:3000
- **الخادم**: http://localhost:5000
- **لوحة الإدارة**: http://localhost:3001

## الميزات المُنجزة ✅
- ✅ التسجيل والدخول
- ✅ إدارة المنتجات
- ✅ سلة التسوق
- ✅ نظام الطلبات
- ✅ نظام الحجوزات
- ✅ نظام الرسائل
- ✅ لوحة الإدارة
- ✅ تكامل WhatsApp
- ✅ تكامل Facebook Messenger

## الميزات القادمة 🚧
- 🔄 معاينة 3D متقدمة
- 🔄 نظام الدفع
- 🔄 التقارير والتحليلات
- 🔄 تطبيق الهاتف المحمول
- 🔄 نظام التوصيات

## الدعم
للمساعدة والدعم: support@kitchens.com
