import React from 'react'

const Products: React.FC = () => {
  return (
    <div dir="rtl" className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">📦 المنتجات</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* سيتم ملء المنتجات من API */}
        <div className="card p-6 text-center">
          <div className="text-5xl mb-4">🔄</div>
          <p className="text-gray-600">جاري تحميل المنتجات...</p>
        </div>
      </div>
    </div>
  )
}

export default Products
