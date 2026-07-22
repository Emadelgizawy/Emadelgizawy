import api from './api'

export const authService = {
  register: async (data: any) => {
    const response = await api.post('/auth/register', data)
    return response.data
  },
  
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password })
    return response.data
  },
  
  logout: () => {
    localStorage.removeItem('token')
  },
  
  getProfile: async () => {
    const response = await api.get('/auth/profile')
    return response.data
  },
  
  updateProfile: async (data: any) => {
    const response = await api.put('/auth/profile', data)
    return response.data
  }
}
