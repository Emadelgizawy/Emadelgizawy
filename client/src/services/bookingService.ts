import api from './api'

export const bookingService = {
  create: async (data: any) => {
    const response = await api.post('/bookings', data)
    return response.data
  },
  
  getMyBookings: async () => {
    const response = await api.get('/bookings/my-bookings')
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/bookings/${id}`)
    return response.data
  },
  
  updateStatus: async (id: string, status: string) => {
    const response = await api.put(`/bookings/${id}`, { status })
    return response.data
  },
  
  cancel: async (id: string) => {
    const response = await api.delete(`/bookings/${id}`)
    return response.data
  }
}
