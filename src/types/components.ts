import type { CartProduct, Cart } from './cart'

export interface CartHeaderProps {
  cartId?: number
  userId?: number
  productsCount: number
  onBack: () => void
}

export interface CartFooterProps {
  totalQuantity: number
  totalAmount: number
  canSave: boolean
  isPending: boolean
  onSave: () => void
}

export interface CartProductsTableProps {
  products: CartProduct[]
  onQuantityChange: (productId: number, quantity: number) => void
  onRemove: (productId: number) => void
}

export interface CartsToolbarProps {
  userId: string
  limit: number
  total: number
  isFetching: boolean
  onUserIdChange: (userId: string) => void
  onLimitChange: (limit: number) => void
}

export interface CartsTableProps {
  carts: Cart[]
  onRowClick: (id: number) => void
}

export interface CartsPaginationProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}
