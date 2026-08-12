import React from 'react'

const MyAccount: React.FC = () => {
  return (
    <div dir="rtl" className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">👤 حسابي</h1>
      <div className="card p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">👤</div>
          <p className="text-gray-600">ملف المستخدم - قريباً</p>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
