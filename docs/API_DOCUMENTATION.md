# 📡 توثيق API

## معلومات عامة
- **Base URL**: `https://api.kitchens.com/api/v1`
- **Authentication**: JWT Token
- **Content-Type**: `application/json`
- **Language**: العربية والإنجليزية

---

## 🔐 المصادقة والتفويض

### تسجيل المستخدم
```http
POST /auth/register
Content-Type: application/json

{
  "fullName": "أحمد محمد",
  "email": "ahmed@example.com",
  "phone": "+966501234567",
  "password": "SecurePass123!",
  "confirmPassword": "SecurePass123!"
}

Response (201):
{
  "success": true,
  "message": "تم التسجيل بنجاح",
  "user": {
    "_id": "...",
    "fullName": "أحمد محمد",
    "email": "ahmed@example.com"
  },
  "token": "jwt_token_here"
}
```

### تسجيل الدخول
```http
POST /auth/login
Content-Type: application/json

{
  "email": "ahmed@example.com",
  "password": "SecurePass123!"
}

Response (200):
{
  "success": true,
  "message": "تم الدخول بنجاح",
  "user": {...},
  "token": "jwt_token_here"
}
```

---

## 🛍️ المنتجات (Products)

### الحصول على جميع المنتجات
```http
GET /products?category=appliances&page=1&limit=12&search=ثلاجة

Response (200):
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "nameAr": "ثلاجة ذكية",
      "price": 5500,
      "images": [...],
      "rating": 4.5
    }
  ],
  "pagination": {
    "total": 45,
    "pages": 4,
    "currentPage": 1
  }
}
```

### الحصول على تفاصيل المنتج
```http
GET /products/{productId}

Response (200):
{
  "success": true,
  "data": {
    "_id": "...",
    "nameAr": "ثلاجة ذكية",
    "descriptionAr": "...",
    "price": 5500,
    "images": [...],
    "specifications": {...},
    "reviews": [...]
  }
}
```

### إضافة منتج جديد (Admin)
```http
POST /products
Authorization: Bearer {token}
Content-Type: application/json

{
  "nameAr": "ثلاجة ذكية",
  "nameEn": "Smart Refrigerator",
  "descriptionAr": "...",
  "category": "appliances",
  "price": 5500,
  "images": [...],
  "specifications": {...}
}

Response (201):
{
  "success": true,
  "message": "تم إضافة المنتج بنجاح",
  "data": {...}
}
```

---

## 🛒 سلة التسوق (Cart)

### إضافة منتج إلى السلة
```http
POST /cart/add
Authorization: Bearer {token}
Content-Type: application/json

{
  "productId": "...",
  "quantity": 1,
  "customization": {
    "color": "أبيض",
    "size": "standard"
  }
}

Response (200):
{
  "success": true,
  "message": "تمت إضافة المنتج",
  "cart": {...}
}
```

### الحصول على السلة
```http
GET /cart
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "items": [...],
    "subtotal": 5500,
    "tax": 825,
    "total": 6325
  }
}
```

---

## 📅 الحجوزات (Bookings)

### إنشاء حجز جديد
```http
POST /bookings
Authorization: Bearer {token}
Content-Type: application/json

{
  "serviceType": "consultation",
  "date": "2024-08-15",
  "time": "10:00",
  "location": {
    "address": "شارع النيل، الجيزة"
  },
  "notes": "فحص شامل للمطبخ"
}

Response (201):
{
  "success": true,
  "message": "تم إنشاء الحجز بنجاح",
  "booking": {...}
}
```

### الحصول على حجوزاتي
```http
GET /bookings/my-bookings
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": [...]
}
```

---

## 💬 الرسائل (Messages)

### إرسال رسالة
```http
POST /messages
Content-Type: application/json

{
  "senderName": "أحمد محمد",
  "senderPhone": "+966501234567",
  "email": "ahmed@example.com",
  "content": "أريد معرفة أسعار المطابخ",
  "channel": "contact-form"
}

Response (201):
{
  "success": true,
  "message": "تم استلام رسالتك، سيتم الرد عليك قريباً"
}
```

### الحصول على الرسائل (Admin)
```http
GET /messages?status=open&sort=-createdAt
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": [...]
}
```

---

## 📊 الطلبات (Orders)

### إنشاء طلب من السلة
```http
POST /orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "deliveryAddress": {
    "name": "أحمد محمد",
    "phone": "+966501234567",
    "city": "الجيزة",
    "street": "شارع النيل"
  },
  "paymentMethod": "card",
  "notes": "توصيل صباحاً"
}

Response (201):
{
  "success": true,
  "message": "تم إنشاء الطلب بنجاح",
  "order": {...}
}
```

---

## ⚙️ الإعدادات (Admin Only)

### تحديث إعدادات الموقع
```http
PUT /settings/business-info
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "مطابخ الجيزاوي",
  "phone": "+966501234567",
  "email": "info@kitchens.com",
  "workingHours": {...}
}

Response (200):
{
  "success": true,
  "message": "تم تحديث الإعدادات"
}
```
