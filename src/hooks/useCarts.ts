import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { cartsKeys, getCartsList, getCartById, updateCartById } from '../api/carts'
import type { UpdateCartPayload, Cart } from '../types/cart'
import { useCartFiltersStore } from '../store/cartFilters'

function parsePositiveInt(value: string): number | null {
  if (value.trim() === '') return null
  const parsed = Number(value)
  if (!Number.isInteger(parsed) || parsed <= 0) return null
  return parsed
}

export function useCartList() {
  const { page, limit, userId } = useCartFiltersStore()
  const skip = (page - 1) * limit
  const parsedUserId = parsePositiveInt(userId)

  const query = useQuery({
    queryKey: cartsKeys.list({
      limit,
      skip,
      userId: parsedUserId,
    }),
    queryFn: () =>
      getCartsList({
        limit,
        skip,
        userId: parsedUserId,
      }),
    placeholderData: (previous) => previous,
  })

  return {
    ...query,
    page,
    limit,
    userId,
    skip,
  }
}

export function useCart(id: number | null) {
  return useQuery({
    queryKey: id == null ? [...cartsKeys.detail(0), 'invalid'] : cartsKeys.detail(id),
    queryFn: () => getCartById(id as number),
    enabled: id != null,
  })
}

export function useUpdateCart(id: number | null) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: UpdateCartPayload) => {
      if (id == null) {
        throw new Error('Invalid cart id')
      }
      return updateCartById(id, payload)
    },
    onSuccess: (updatedCart) => {
      if (id == null) return
      queryClient.setQueryData(cartsKeys.detail(id), updatedCart)

      queryClient.setQueriesData(
        { queryKey: cartsKeys.all, exact: false },
        (oldData) => {
          if (!oldData || typeof oldData !== 'object') return oldData

          if ('carts' in oldData && Array.isArray(oldData.carts)) {
            const data = oldData as { carts: Cart[]; [key: string]: unknown }
            return {
              ...data,
              carts: data.carts.map((cart) =>
                cart.id === updatedCart.id ? updatedCart : cart,
              ),
            }
          }

          return oldData
        },
      )
    },
  })
}

