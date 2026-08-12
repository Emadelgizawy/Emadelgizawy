import React from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        {/* الصف الأول - المعلومات الأساسية */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* عن الشركة */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🍳 مطابخ الجيزاوي</h3>
            <p className="text-gray-300 mb-4 text-sm leading-6">
              نحن متخصصون في تصميم وتنفيذ المطابخ الحديثة بأعلى معايير الجودة والتميز.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* الروابط السريعة */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-accent-400 transition text-sm">
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-accent-400 transition text-sm">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="/designer" className="hover:text-accent-400 transition text-sm">
                  مصمم المطبخ
                </a>
              </li>
              <li>
                <a href="/bookings" className="hover:text-accent-400 transition text-sm">
                  الحجوزات
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent-400 transition text-sm">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* السياسات */}
          <div>
            <h4 className="text-lg font-bold mb-4">السياسات</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-accent-400 transition text-sm">
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition text-sm">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition text-sm">
                  سياسة الإرجاع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition text-sm">
                  شروط الدفع
                </a>
              </li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold">الهاتف</p>
                  <p>+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold">البريد</p>
                  <p>info@kitchens.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold">العنوان</p>
                  <p>الجيزة، القاهرة، مصر</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الفاصل */}
        <div className="border-t border-primary-800 pt-6">
          {/* جميع الحقوق */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm text-center md:text-right">
              © 2024 مطابخ الجيزاوي. جميع الحقوق محفوظة.
            </p>
            <div className="mt-4 md:mt-0 text-gray-400 text-xs">
              تم التطوير بواسطة <span className="text-accent-400 font-semibold">Emad Elgezawy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
