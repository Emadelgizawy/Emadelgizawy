import api from './api'

export const productAdminService = {
  getAll: async (page: number = 1, limit: number = 10) => {
    const response = await api.get(`/admin/products?page=${page}&limit=${limit}`)
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/admin/products/${id}`)
    return response.data
  },
  
  create: async (data: any) => {
    const response = await api.post('/admin/products', data)
    return response.data
  },
  
  update: async (id: string, data: any) => {
    const response = await api.put(`/admin/products/${id}`, data)
    return response.data
  },
  
  delete: async (id: string) => {
    const response = await api.delete(`/admin/products/${id}`)
    return response.data
  },
  
  uploadImage: async (id: string, file: File) => {
    const formData = new FormData()
    formData.append('image', file)
    const response = await api.post(`/admin/products/${id}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
  }
}
