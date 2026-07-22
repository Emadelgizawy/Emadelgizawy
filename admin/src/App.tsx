import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'
import Orders from './pages/Orders/Orders'
import Bookings from './pages/Bookings/Bookings'
import Messages from './pages/Messages/Messages'
import Users from './pages/Users/Users'
import Settings from './pages/Settings/Settings'
import Analytics from './pages/Analytics/Analytics'
import Login from './pages/Login/Login'
import { useAuthStore } from './store/authStore'

function App() {
  const { token } = useAuthStore()

  if (!token) {
    return <Login />
  }

  return (
    <Router>
      <div dir="rtl" className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto">
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/users" element={<Users />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
