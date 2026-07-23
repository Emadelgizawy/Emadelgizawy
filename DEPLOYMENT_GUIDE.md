# 🌐 دليل نشر المشروع

## النشر على Heroku

### 1. إنشاء تطبيق على Heroku
```bash
heroku create kitchens-platform
```

### 2. إضافة MongoDB Atlas
```bash
heroku config:set MONGODB_ATLAS_URI=your_mongodb_url
```

### 3. نشر الخادم
```bash
cd server
git push heroku main
```

## النشر على Vercel (للعميل)

### 1. ربط المشروع
```bash
vercel link
```

### 2. ضبط المتغيرات
```bash
vercel env add REACT_APP_API_URL
```

### 3. النشر
```bash
vercel deploy
```

## النشر على AWS

### استخدام EC2 + RDS
1. إنشاء instance على EC2
2. تثبيت Node.js و MongoDB
3. سحب الكود من GitHub
4. تثبيت المكتبات
5. بدء التطبيق

## متغيرات البيئة للإنتاج
```
NODE_ENV=production
MONGODB_ATLAS_URI=your_production_url
JWT_SECRET=your_secure_secret_key
STRIPE_SECRET_KEY=your_stripe_key
WHATSAPP_ACCESS_TOKEN=your_token
FACEBOOK_ACCESS_TOKEN=your_token
```

## الأمان
- استخدام HTTPS فقط
- تفعيل CORS بشكل صحيح
- استخدام متغيرات البيئة
- تحديث المكتبات بانتظام
- إضافة معدل الحد من الطلبات (Rate Limiting)
