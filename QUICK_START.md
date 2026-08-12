# 🚀 دليل التشغيل السريع

## المتطلبات الأساسية
- Node.js 16+ ([تحميل](https://nodejs.org/))
- MongoDB 4.4+ ([تحميل](https://www.mongodb.com/try/download/community) أو استخدام [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git
- Terminal/Command Prompt

---

## ⚡ الخطوات السريعة (5 دقائق)

### 1️⃣ استنساخ المشروع
```bash
git clone https://github.com/Emadelgizawy/Emadelgizawy.git
cd Emadelgizawy
```

### 2️⃣ تثبيت المكتبات (الخادم)
```bash
cd server
npm install
```

### 3️⃣ إعداد متغيرات البيئة
```bash
# نسخ الملف النموذجي
cp .env.example .env

# فتح الملف وتحرير البيانات
# nano .env  أو استخدم محرر نصوص
```

**البيانات المطلوبة في .env:**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/kitchens
JWT_SECRET=your_secret_key_here_change_it
JWT_EXPIRE=7d
```

### 4️⃣ تشغيل الخادم
```bash
npm run dev
```

✅ سترى هذه الرسالة:
```
🚀 الخادم يعمل على المنفذ 5000
🌍 البيئة: development
✅ اتصال قاعدة البيانات بنجاح
```

---

## 🎨 تشغيل واجهة العميل (Terminal جديد)

```bash
cd client
npm install
npm run dev
```

✅ سيفتح تلقائياً على: **http://localhost:3000**

---

## 👨‍💼 تشغيل لوحة الإدارة (Terminal جديد)

```bash
cd admin
npm install
npm run dev
```

✅ ستتاح على: **http://localhost:3001**

---

## 📍 الروابط الرئيسية

| الاسم | الرابط | الوصف |
|------|--------|-------|
| 🏪 **العميل** | http://localhost:3000 | واجهة المتجر الرئيسية |
| 🔌 **API** | http://localhost:5000/api/v1 | خادم البيانات |
| 👨‍💼 **الإدارة** | http://localhost:3001 | لوحة تحكم المسؤولين |

---

## 🧪 اختبار التطبيق

### 1. اختبار الصفحة الرئيسية
```
زيارة: http://localhost:3000
```

### 2. اختبار API
```bash
# في Terminal جديد
# الحصول على المنتجات
curl http://localhost:5000/api/v1/products

# الحصول على نكتة عشوائية
curl http://localhost:5000/api/v1/jokes/random

# التحقق من صحة الخادم
curl http://localhost:5000/health
```

### 3. التسجيل والدخول
```
1. اضغط على "تسجيل" في الصفحة الرئيسية
2. أدخل بياناتك:
   - الاسم: أحمد محمد
   - البريد: ahmed@example.com
   - الهاتف: +966501234567
   - كلمة المرور: Password123!
3. اضغط "التسجيل"
```

---

## 🐛 استكشاف الأخطاء

### خطأ: "لا يمكن الاتصال بـ MongoDB"
```bash
# التأكد من تشغيل MongoDB
# على Windows
mongod

# على Mac
brew services start mongodb-community

# أو استخدم MongoDB Atlas بدلاً من الربط المحلي
```

### خطأ: "البوابة 5000 قيد الاستخدام"
```bash
# تغيير البوابة في .env
PORT=5001
```

### خطأ: "node_modules لم تثبت"
```bash
# حذف وإعادة تثبيت
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 الميزات المتاحة للاختبار

### 🏪 واجهة المتجر
- ✅ الصفحة الرئيسية
- ✅ تصفح المنتجات
- ✅ السلة والدفع
- ✅ حجز المواعيد
- ✅ التواصل
- ✅ حسابي
- ✅ مولد النكات 🎭

### 👨‍💼 لوحة الإدارة
- ✅ لوحة التحكم
- ✅ إدارة المنتجات
- ✅ إدارة الطلبات
- ✅ إدارة الحجوزات
- ✅ إدارة الرسائل
- ✅ التقارير والإحصائيات

---

## 📚 الموارد المفيدة

- 📖 [وثائق API](./docs/API_DOCUMENTATION.md)
- 🗄️ [مخطط قاعدة البيانات](./docs/DATABASE_SCHEMA.md)
- 🎨 [هيكل الواجهة الأمامية](./docs/FRONTEND_STRUCTURE.md)
- 📋 [بنية المشروع](./docs/PROJECT_STRUCTURE.md)
- 🚀 [دليل النشر](./DEPLOYMENT_GUIDE.md)
- 🎭 [دليل مولد النكات](./JOKE_GENERATOR.md)

---

## 🌐 النشر على الإنترنت

### نشر الخادم على Heroku
```bash
# التثبيت والتكوين
heroku login
heroku create your-app-name
heroku config:set MONGODB_ATLAS_URI=your_url

# النشر
cd server
git push heroku main
```

### نشر واجهة العميل على Vercel
```bash
vercel login
cd client
vercel
```

---

## 💡 نصائح مهمة

1. **استخدم MongoDB Atlas** بدلاً من المحلي للنشر:
   - اذهب إلى https://www.mongodb.com/cloud/atlas
   - أنشئ حساب مجاني
   - أنشئ cluster
   - انسخ الـ URI وأضفه في .env

2. **احفظ بيانات حساسة** في ملف .env ولا تشاركها

3. **استخدم postman** لاختبار APIs:
   - https://www.postman.com/downloads/
   - استيراد Collection من المشروع

4. **تصحيح الأخطاء** (Debugging):
   - استخدم DevTools في المتصفح (F12)
   - استخدم console.log في الكود
   - تحقق من أخطاء الشبكة في Network Tab

---

## 🎉 تم!

الآن يجب أن يعمل المشروع بنجاح!

إذا واجهت أي مشاكل:
1. تحقق من الأخطاء في console
2. اطلب المساعدة في المشروع
3. راجع الوثائق

**استمتع بالتطوير!** 🚀
