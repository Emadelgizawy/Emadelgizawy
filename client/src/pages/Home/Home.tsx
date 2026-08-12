import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Zap, Shield, Award } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div dir="rtl" className="w-full">
      {/* البانر الرئيسي */}
      <section className="bg-gradient-to-l from-primary-600 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* النص */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                🍳 مطابخ عصرية بتصاميم مميزة
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed">
                اكتشف عالم المطابخ الحديثة مع أفضل التصاميم والجودة العالية. نحن نقدم حلولاً متكاملة لمطبخك الحلم.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  to="/products"
                  className="btn-primary flex items-center gap-2 hover:scale-105 transition"
                >
                  استكشف المنتجات
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/designer"
                  className="btn-secondary flex items-center gap-2 hover:scale-105 transition"
                >
                  🎨 مصمم المطبخ
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* الصورة */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <p className="text-gray-700 font-semibold text-lg">تصاميم احترافية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
            ✨ لماذا تختار مطابخ الجيزاوي؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* المميزة 1 */}
            <div className="card text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">سرعة التنفيذ</h3>
              <p className="text-gray-600 text-sm">
                تنفيذ سريع واحترافي لمشاريعك مع ضمان الجودة العالية
              </p>
            </div>

            {/* المميزة 2 */}
            <div className="card text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">تصاميم مميزة</h3>
              <p className="text-gray-600 text-sm">
                تصاميم عصرية وحديثة تتناسب مع جميع الأذواق والديكورات
              </p>
            </div>

            {/* المميزة 3 */}
            <div className="card text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">جودة عالية</h3>
              <p className="text-gray-600 text-sm">
                مواد أولية عالية الجودة مع ضمان طويل الأجل
              </p>
            </div>

            {/* المميزة 4 */}
            <div className="card text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">أسعار منافسة</h3>
              <p className="text-gray-600 text-sm">
                أسعار عادلة وتنافسية مع خطط دفع مرنة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* المنتجات المميزة */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary-900">⭐ المنتجات المميزة</h2>
            <Link to="/products" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
              عرض الكل
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* منتج 1 */}
            <Link to="/product/1" className="card group overflow-hidden">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                🔪
              </div>
              <h3 className="font-bold text-primary-900 mb-2">أدوات المطبخ الفاخرة</h3>
              <p className="text-gray-600 text-sm mb-4">
                مجموعة كاملة من أدوات المطبخ عالية الجودة
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">2,500 ر.س</span>
                <div className="flex text-accent-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </Link>

            {/* منتج 2 */}
            <Link to="/product/2" className="card group overflow-hidden">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                🪨
              </div>
              <h3 className="font-bold text-primary-900 mb-2">رخام فاخر</h3>
              <p className="text-gray-600 text-sm mb-4">
                رخام طبيعي بأجمل الألوان والتصاميم
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">5,000 ر.س</span>
                <div className="flex text-accent-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </Link>

            {/* منتج 3 */}
            <Link to="/product/3" className="card group overflow-hidden">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                🚰
              </div>
              <h3 className="font-bold text-primary-900 mb-2">أحواض المطبخ الذكية</h3>
              <p className="text-gray-600 text-sm mb-4">
                أحواض حديثة بتقنيات ذكية وموفرة للمياه
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">3,500 ر.س</span>
                <div className="flex text-accent-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </Link>

            {/* منتج 4 */}
            <Link to="/product/4" className="card group overflow-hidden">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                💡
              </div>
              <h3 className="font-bold text-primary-900 mb-2">إضاءة LED ذكية</h3>
              <p className="text-gray-600 text-sm mb-4">
                إضاءة ذكية قابلة للتحكم مع توفير الطاقة
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">1,800 ر.س</span>
                <div className="flex text-accent-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* قسم الحجوزات */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* النص */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-900">
                📅 احجز موعد استشارة مجاني
              </h2>
              <p className="text-gray-700 leading-relaxed">
                تريد تصميم مطبخ خاص بك؟ احجز موعد مع فريقنا المتخصص واحصل على استشارة مجانية شاملة.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span>استشارة مجانية وتصاميم مبدئية</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span>اختيار من أفضل المواد والألوان</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span>مراقبة الجودة والتسليم في الموعد</span>
                </li>
              </ul>
              <Link
                to="/bookings"
                className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition"
              >
                احجز موعد الآن
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* الصورة */}
            <div className="bg-white rounded-lg shadow-xl p-8 text-center">
              <div className="text-6xl mb-4">📅</div>
              <p className="text-gray-700 font-semibold">احجز في أنسب وقت لك</p>
            </div>
          </div>
        </div>
      </section>

      {/* الإحصائيات */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">📊 ثقة العملاء بنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-400 mb-2">500+</div>
              <p className="text-gray-300">مشروع منجز</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-400 mb-2">2000+</div>
              <p className="text-gray-300">عميل سعيد</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-400 mb-2">15+</div>
              <p className="text-gray-300">سنة خبرة</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-400 mb-2">4.9⭐</div>
              <p className="text-gray-300">تقييم العملاء</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA نهائي */}
      <section className="py-16">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary-900">
            🎯 هل أنت مستعد لتحويل مطبخك؟
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            اتصل بنا اليوم وابدأ رحلتك نحو مطبخ الأحلام
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/products" className="btn-primary">
              استكشف المنتجات
            </Link>
            <Link to="/contact" className="btn-secondary">
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
