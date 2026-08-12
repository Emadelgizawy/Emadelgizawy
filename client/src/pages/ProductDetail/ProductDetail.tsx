import React from 'react'
import { ArrowRight } from 'lucide-react'

const ProductDetail: React.FC = () => {
  return (
    <div dir="rtl" className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">تفاصيل المنتج</h1>
      <div className="card p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🛍️</div>
          <p className="text-gray-600">تفاصيل المنتج</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
