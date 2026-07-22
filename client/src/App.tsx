import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Cart from './pages/Cart/Cart'
import KitchenDesigner from './pages/KitchenDesigner/KitchenDesigner'
import Bookings from './pages/Bookings/Bookings'
import Contact from './pages/Contact/Contact'
import Checkout from './pages/Checkout/Checkout'
import MyAccount from './pages/MyAccount/MyAccount'

function App() {
  return (
    <Router>
      <div dir="rtl" className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/designer" element={<KitchenDesigner />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<MyAccount />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
