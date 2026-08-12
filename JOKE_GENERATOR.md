# 😄 مولد النكات

## المميزات

✨ **مميزات رئيسية:**
- 🎲 نكات عشوائية من API خارجي موثوق
- 🏷️ تصنيفات متعددة (عام، Knock-Knock، البرمجة، إلخ)
- ❤️ حفظ النكات المفضلة في localStorage
- 🎨 تصميم جميل وسهل الاستخدام
- 📱 واجهة مسؤولة (Responsive)
- ⚡ تحميل سريع
- 🌍 دعم اللغة العربية الكاملة

## التكنولوجيا المستخدمة

### Frontend
- React + TypeScript
- Zustand (إدارة الحالة)
- Tailwind CSS (التصميم)
- Axios (طلبات HTTP)
- react-hot-toast (الإشعارات)
- Lucide React (الأيقونات)

### Backend
- Node.js + Express
- TypeScript
- Axios (للتواصل مع API الخارجي)

## API الخارجي المستخدم

**Official Joke API**
- URL: `https://official-joke-api.appspot.com`
- مجاني وبدون مفتاح API
- يوفر نكات متنوعة بصيغ مختلفة

## الإندبويتات المتاحة

### Frontend
```
GET /jokes/random          - نكتة عشوائية واحدة
GET /jokes/category/:type  - نكتة من نوع محدد
GET /jokes/random?count=5  - عدة نكات عشوائية
GET /jokes/types           - الأنواع المتاحة
```

## كيفية الاستخدام

### 1. استيراد المكونات
```typescript
import JokeGenerator from './pages/JokeGenerator/JokeGenerator';
```

### 2. إضافة المسار
```typescript
// في App.tsx
<Route path="/jokes" element={<JokeGenerator />} />
```

### 3. إضافة الرابط في الملاحة
```html
<Link to="/jokes">مولد النكات</Link>
```

## البيانات المخزنة

يتم حفظ النكات المفضلة في `localStorage` بمفتاح `favoritJokes`:
```javascript
{
  type: "string",
  setup: "string",
  punchline: "string",
  id: "number"
}
```

## معالجة الأخطاء

- ✅ معالجة أخطاء الاتصال بـ API الخارجي
- ✅ رسائل خطأ واضحة بالعربية
- ✅ إعادة محاولة يدوية من المستخدم
- ✅ Timeout 5 ثواني لكل طلب

## الميزات المستقبلية

- 📊 إحصائيات النكات المفضلة
- 🔄 مزامنة النكات المفضلة مع قاعدة البيانات
- 📤 مشاركة النكات على وسائل التواصل
- 🌙 وضع مظلم
- 📝 إضافة تقييم للنكات
- 🔍 البحث والتصفية

## اختبار الخدمة

```bash
# اختبار الواجهة الأمامية
curl http://localhost:3000/jokes

# اختبار الواجهة الخلفية
curl http://localhost:5000/api/v1/jokes/random
curl http://localhost:5000/api/v1/jokes/category/programming
curl http://localhost:5000/api/v1/jokes/types
```

## الملاحظات الأمنية

- 🔒 معالجة async/await بشكل صحيح
- 🔒 Timeout على جميع الطلبات الخارجية
- 🔒 تحقق من صحة البيانات المستلمة
- 🔒 معالجة الأخطاء بشكل شامل

## المساهمة

لإضافة ميزات جديدة أو إصلاح أخطاء، يرجى:
1. إنشاء فرع جديد
2. إجراء التغييرات
3. إرسال Pull Request

---

**استمتع بالنكات! 😄**
