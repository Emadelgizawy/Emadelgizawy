# 📋 هيكل المشروع الشامل

## معلومات المشروع
- **اسم المشروع**: منصة مطابخ الجيزاوي
- **الهدف**: منصة ويب شاملة لعرض وتخصيص المطابخ الحديثة
- **اللغة**: العربية بالكامل
- **الجمهور**: العملاء والإداريين

## المكونات الرئيسية

### 1️⃣ Frontend (العميل)
- **التقنية**: React + TypeScript + Tailwind CSS
- **الصفحات**:
  - الصفحة الرئيسية
  - صفحة المنتجات
  - محرر تخصيص المطبخ (3D)
  - سلة التسوق
  - صفحة الحجوزات
  - صفحة التواصل
  - حسابي

### 2️⃣ Backend (الخادم)
- **التقنية**: Node.js + Express + MongoDB
- **الـ APIs**:
  - إدارة المنتجات
  - إدارة المستخدمين
  - إدارة الطلبات
  - إدارة الحجوزات
  - إدارة الرسائل
  - المصادقة والأمان

### 3️⃣ Admin Panel (لوحة الإدارة)
- **التقنية**: React + React Admin
- **الميزات**:
  - إدارة المنتجات (إضافة، تعديل، حذف)
  - إدارة الطلبات والحجوزات
  - إدارة المستخدمين
  - تحليلات وتقارير
  - إدارة الإعدادات

## نماذج قاعدة البيانات

### المستخدمون (Users)
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  address: String,
  role: "customer" | "admin",
  createdAt: Date,
  updatedAt: Date
}
```

### المنتجات (Products)
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  category: "appliances" | "granite" | "marble" | "accessories",
  price: Number,
  images: [String],
  specifications: Object,
  stock: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### الطلبات (Orders)
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [
    {
      productId: ObjectId,
      quantity: Number,
      customization: Object
    }
  ],
  totalPrice: Number,
  status: "pending" | "confirmed" | "in-progress" | "completed",
  deliveryDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### الحجوزات (Bookings)
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  date: Date,
  time: String,
  notes: String,
  status: "pending" | "confirmed" | "completed",
  createdAt: Date,
  updatedAt: Date
}
```

### الرسائل (Messages)
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  content: String,
  channel: "whatsapp" | "messenger" | "contact-form",
  read: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## مراحل التطوير

### المرحلة 1️⃣: إعداد البيئة
- [ ] إنشاء هيكل المشروع
- [ ] إعداد قاعدة البيانات
- [ ] إنشاء APIs الأساسية

### المرحلة 2️⃣: الواجهة الأمامية
- [ ] الصفحة الرئيسية
- [ ] صفحة المنتجات
- [ ] محرر المطبخ 3D
- [ ] نظام الحجوزات

### المرحلة 3️⃣: لوحة الإدارة
- [ ] إدارة المنتجات
- [ ] إدارة الطلبات
- [ ] التقارير والتحليلات

### المرحلة 4️⃣: التكاملات
- [ ] WhatsApp API
- [ ] Facebook Messenger
- [ ] نظام الدفع
- [ ] البريد الإلكتروني

### المرحلة 5️⃣: الإطلاق
- [ ] الاختبارات النهائية
- [ ] النشر والصيانة
