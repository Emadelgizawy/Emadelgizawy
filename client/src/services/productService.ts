import api from './api'
import { Product } from '../types'

export const productService = {
  getAll: async (category?: string, page: number = 1, limit: number = 12) => {
    const params = { page, limit }
    const queryString = category ? `${Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')}&category=${category}` : Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')
    const response = await api.get(`/products?${queryString}`)
    return response.data
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/products/${id}`)
    return response.data
  },
  
  search: async (query: string) => {
    const response = await api.get(`/products/search?q=${query}`)
    return response.data
  },
  
  getFeatured: async () => {
    const response = await api.get('/products/featured')
    return response.data
  }
}
