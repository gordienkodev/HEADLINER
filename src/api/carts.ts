import { apiClient } from './client'
import type { Cart, CartsResponse, UpdateCartPayload } from '../types/cart'

export interface CartsQueryParams {
  limit: number
  skip: number
  userId?: number | null
}

export const cartsKeys = {
  all: ['carts'] as const,
  list: (params: CartsQueryParams) => ['carts', 'list', params] as const,
  detail: (id: number) => ['carts', 'detail', id] as const,
}

export async function getCartsList(params: CartsQueryParams) {
  const search = new URLSearchParams()
  search.set('limit', String(params.limit))
  search.set('skip', String(params.skip))

  if (params.userId != null) {
    return apiClient.get<CartsResponse>(`/carts/user/${params.userId}?${search.toString()}`)
  }

  return apiClient.get<CartsResponse>(`/carts?${search.toString()}`)
}

export async function getCartById(id: number) {
  return apiClient.get<Cart>(`/carts/${id}`)
}

export async function updateCartById(id: number, payload: UpdateCartPayload) {
  return apiClient.put<Cart>(`/carts/${id}`, payload)
}

