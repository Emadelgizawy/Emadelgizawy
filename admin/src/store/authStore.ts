import { create } from 'zustand'

interface AdminAuthStore {
  adminUser: any | null;
  token: string | null;
  isLoading: boolean;
  login: (user: any, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AdminAuthStore>((set) => ({
  adminUser: null,
  token: localStorage.getItem('admin_token'),
  isLoading: false,
  login: (user, token) => {
    localStorage.setItem('admin_token', token);
    set({ adminUser: user, token });
  },
  logout: () => {
    localStorage.removeItem('admin_token');
    set({ adminUser: null, token: null });
  },
  setLoading: (loading) => set({ isLoading: loading })
}))
