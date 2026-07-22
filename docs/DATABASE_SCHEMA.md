# 🗄️ مخطط قاعدة البيانات

## MongoDB Collections

### 1. Users (المستخدمون)
```javascript
db.users.insertOne({
  _id: ObjectId(),
  fullName: "أحمد محمد",
  email: "ahmed@example.com",
  phone: "+966501234567",
  password: "hashed_password",
  address: {
    city: "الجيزة",
    district: "الهرم",
    street: "شارع النيل",
    postalCode: "12234"
  },
  role: "customer", // or "admin"
  avatar: "url_to_image",
  wishlist: [ObjectId()],
  savedDesigns: [ObjectId()],
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 2. Products (المنتجات)
```javascript
db.products.insertOne({
  _id: ObjectId(),
  nameAr: "ثلاجة ذكية",
  nameEn: "Smart Refrigerator",
  descriptionAr: "ثلاجة حديثة بتقنيات ذكية",
  category: "appliances", // appliances, granite, marble, accessories
  subcategory: "refrigerators",
  price: 5500,
  discount: 10,
  finalPrice: 4950,
  images: [
    "url_front",
    "url_side",
    "url_3d"
  ],
  thumbnail: "url_thumbnail",
  specifications: {
    color: ["أبيض", "أسود", "فضي"],
    size: {
      width: 70,
      height: 180,
      depth: 65
    },
    capacity: "500L",
    energyRating: "A++",
    warranty: "2 years"
  },
  stock: 25,
  sku: "SKU-APP-001",
  manufacturer: "اسم الشركة المصنعة",
  rating: 4.5,
  reviews: [ObjectId()],
  tags: ["حديث", "ذكي", "موفر للطاقة"],
  isActive: true,
  isFeatured: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 3. Categories (الفئات)
```javascript
db.categories.insertOne({
  _id: ObjectId(),
  nameAr: "الأجهزة",
  nameEn: "Appliances",
  slug: "appliances",
  icon: "url_icon",
  description: "جميع أجهزة المطبخ الحديثة",
  order: 1,
  isActive: true
})
```

### 4. Designs (التصاميم الجاهزة)
```javascript
db.designs.insertOne({
  _id: ObjectId(),
  nameAr: "المطبخ الحديث",
  descriptionAr: "تصميم مطبخ حديث ومودرن",
  thumbnail: "url_image",
  colors: ["أبيض", "رمادي", "أسود"],
  layout: "L-shaped",
  products: [ObjectId()],
  price: 25000,
  featured: true,
  createdAt: new Date()
})
```

### 5. Orders (الطلبات)
```javascript
db.orders.insertOne({
  _id: ObjectId(),
  orderNumber: "ORD-2024-001",
  userId: ObjectId(),
  items: [
    {
      productId: ObjectId(),
      productName: "ثلاجة ذكية",
      quantity: 1,
      price: 4950,
      customization: {
        color: "أبيض",
        size: "70x180x65"
      }
    }
  ],
  subtotal: 4950,
  tax: 744.75,
  shippingCost: 100,
  totalPrice: 5794.75,
  status: "pending", // pending, confirmed, processing, shipped, delivered, cancelled
  paymentMethod: "card", // card, cash, transfer
  paymentStatus: "pending", // pending, completed, failed
  deliveryAddress: {
    name: "أحمد محمد",
    phone: "+966501234567",
    city: "الجيزة",
    street: "شارع النيل"
  },
  estimatedDelivery: new Date(),
  notes: "توصيل صباحاً",
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 6. Bookings (الحجوزات)
```javascript
db.bookings.insertOne({
  _id: ObjectId(),
  bookingNumber: "BK-2024-001",
  userId: ObjectId(),
  serviceType: "consultation", // consultation, measurement, installation
  date: new Date("2024-08-15"),
  time: "10:00",
  duration: 60,
  location: {
    address: "شارع النيل، الجيزة",
    lat: 30.0134,
    lng: 31.2089
  },
  notes: "فحص شامل للمطبخ",
  status: "pending", // pending, confirmed, completed, cancelled
  reminderSent: false,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 7. Messages (الرسائل)
```javascript
db.messages.insertOne({
  _id: ObjectId(),
  senderId: ObjectId(),
  senderName: "أحمد محمد",
  senderPhone: "+966501234567",
  content: "أريد معرفة أسعار المطابخ",
  channel: "contact-form", // contact-form, whatsapp, messenger
  relatedOrder: ObjectId(),
  attachments: ["url_file"],
  read: false,
  replyTo: ObjectId(),
  replies: [ObjectId()],
  priority: "normal", // normal, high, urgent
  status: "open", // open, in-progress, resolved, closed
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 8. Reviews (التقييمات)
```javascript
db.reviews.insertOne({
  _id: ObjectId(),
  productId: ObjectId(),
  userId: ObjectId(),
  userName: "أحمد محمد",
  rating: 5,
  title: "منتج ممتاز",
  comment: "جودة عالية جداً وتصميم جميل",
  images: ["url_image"],
  helpful: 15,
  unhelpful: 2,
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 9. Cart (سلة التسوق)
```javascript
db.carts.insertOne({
  _id: ObjectId(),
  userId: ObjectId(),
  items: [
    {
      productId: ObjectId(),
      quantity: 2,
      customization: {
        color: "أبيض",
        size: "standard"
      },
      addedAt: new Date()
    }
  ],
  coupon: "SUMMER20",
  discount: 500,
  lastUpdated: new Date(),
  expiresAt: new Date()
})
```

### 10. Settings (الإعدادات)
```javascript
db.settings.insertOne({
  _id: ObjectId(),
  key: "business_info",
  value: {
    name: "مطابخ الجيزاوي",
    description: "متخصصون في تصميم المطابخ الحديثة",
    phone: "+966501234567",
    email: "info@kitchens.com",
    address: "الجيزة، مصر",
    socialMedia: {
      facebook: "https://facebook.com/...",
      whatsapp: "+966501234567",
      instagram: "https://instagram.com/..."
    },
    workingHours: {
      saturday: "09:00-22:00",
      sunday: "09:00-22:00",
      friday: "12:00-22:00"
    }
  },
  updatedAt: new Date()
})
```
