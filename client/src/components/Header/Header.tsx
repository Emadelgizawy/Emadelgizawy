import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartCount = 0 // سيتم ربطه بـ state حقيقي لاحقًا

  return (
    <header dir="rtl" className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom py-4">
        {/* الصف الأول - الشعار والبحث */}
        <div className="flex items-center justify-between mb-4">
          {/* الشعار */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              🍳
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-900">مطابخ الجيزاوي</h1>
              <p className="text-xs text-gray-600">تصاميم مميزة وجودة عالية</p>
            </div>
          </Link>

          {/* شريط البحث */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </button>

          {/* الأيقونات */}
          <div className="flex items-center gap-4 ml-8">
            <Link to="/account" className="hover:text-primary-600 transition">
              <User className="w-6 h-6 text-primary-900" />
            </Link>
            <button className="hover:text-red-500 transition">
              <Heart className="w-6 h-6 text-gray-700" />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-primary-900" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* زر القائمة على الهاتف */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* الصف الثاني - القائمة */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center gap-8 py-2 md:py-0`}>
          <Link
            to="/"
            className="text-primary-900 hover:text-primary-600 font-semibold transition"
          >
            🏠 الرئيسية
          </Link>
          <Link
            to="/products"
            className="text-primary-900 hover:text-primary-600 font-semibold transition"
          >
            📦 المنتجات
          </Link>
          <Link
            to="/designer"
            className="text-primary-900 hover:text-primary-600 font-semibold transition"
          >
            🎨 مصمم المطبخ
          </Link>
          <Link
            to="/bookings"
            className="text-primary-900 hover:text-primary-600 font-semibold transition"
          >
            📅 الحجوزات
          </Link>
          <Link
            to="/contact"
            className="text-primary-900 hover:text-primary-600 font-semibold transition"
          >
            📞 اتصل بنا
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
