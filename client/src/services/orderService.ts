import api from './api'

export const orderService = {
  create: async (data: any) => {
    const response = await api.post('/orders', data)
    return response.data
  },
  
  getMyOrders: async () => {
    const response = await api.get('/orders/my-orders')
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/orders/${id}`)
    return response.data
  },
  
  updateStatus: async (id: string, status: string) => {
    const response = await api.put(`/orders/${id}`, { status })
    return response.data
  }
}
