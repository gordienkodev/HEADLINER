import { create } from 'zustand'

interface CartFiltersState {
  page: number
  limit: number
  userId: string
  setPage: (page: number) => void
  setLimit: (limit: number) => void
  setUserId: (userId: string) => void
}

export const useCartFiltersStore = create<CartFiltersState>((set) => ({
  page: 1,
  limit: 10,
  userId: '',
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit, page: 1 }),
  setUserId: (userId) => set({ userId, page: 1 }),
}))

