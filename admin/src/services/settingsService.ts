import api from './api'

export const settingsService = {
  getSettings: async () => {
    const response = await api.get('/admin/settings')
    return response.data
  },
  
  updateSettings: async (data: any) => {
    const response = await api.put('/admin/settings', data)
    return response.data
  },
  
  getBusinessInfo: async () => {
    const response = await api.get('/admin/settings/business-info')
    return response.data
  },
  
  updateBusinessInfo: async (data: any) => {
    const response = await api.put('/admin/settings/business-info', data)
    return response.data
  }
}
