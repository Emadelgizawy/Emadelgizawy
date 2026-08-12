import React from 'react'

const Contact: React.FC = () => {
  return (
    <div dir="rtl" className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">📞 اتصل بنا</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <div className="text-5xl mb-4">📞</div>
          <p className="font-semibold text-primary-900 mb-2">الهاتف</p>
          <p className="text-gray-600">+966 50 123 4567</p>
        </div>
        <div className="card p-6 text-center">
          <div className="text-5xl mb-4">📧</div>
          <p className="font-semibold text-primary-900 mb-2">البريد الإلكتروني</p>
          <p className="text-gray-600">info@kitchens.com</p>
        </div>
        <div className="card p-6 text-center">
          <div className="text-5xl mb-4">📍</div>
          <p className="font-semibold text-primary-900 mb-2">الموقع</p>
          <p className="text-gray-600">الجيزة، مصر</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
