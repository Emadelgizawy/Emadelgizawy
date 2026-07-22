import api from './api'

export const orderAdminService = {
  getAll: async (page: number = 1, limit: number = 10, status?: string) => {
    const params = `page=${page}&limit=${limit}${status ? `&status=${status}` : ''}`
    const response = await api.get(`/admin/orders?${params}`)
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/admin/orders/${id}`)
    return response.data
  },
  
  updateStatus: async (id: string, status: string) => {
    const response = await api.put(`/admin/orders/${id}`, { status })
    return response.data
  },
  
  getStats: async () => {
    const response = await api.get('/admin/orders/stats')
    return response.data
  }
}
