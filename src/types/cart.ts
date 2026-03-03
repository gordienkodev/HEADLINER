export interface CartProduct {
  id: number
  title: string
  price: number
  quantity: number
  total: number
}

export interface Cart {
  id: number
  userId: number
  products: CartProduct[]
  total: number
  discountedTotal: number
  totalProducts: number
  totalQuantity: number
}

export interface CartsResponse {
  carts: Cart[]
  total: number
  skip: number
  limit: number
}

export interface UpdateCartPayloadProduct {
  id: number
  quantity: number
}

export interface UpdateCartPayload {
  merge: boolean
  products: UpdateCartPayloadProduct[]
}

