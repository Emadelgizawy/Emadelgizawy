import api from './api'

export const dashboardService = {
  getStats: async () => {
    const response = await api.get('/admin/stats')
    return response.data
  },
  
  getRevenueChart: async (period: string = 'month') => {
    const response = await api.get(`/admin/revenue?period=${period}`)
    return response.data
  },
  
  getRecentOrders: async (limit: number = 5) => {
    const response = await api.get(`/admin/orders/recent?limit=${limit}`)
    return response.data
  },
  
  getTopProducts: async (limit: number = 5) => {
    const response = await api.get(`/admin/products/top?limit=${limit}`)
    return response.data
  }
}
