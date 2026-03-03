import { useNavigate, useParams } from 'react-router-dom'
import { useCart, useUpdateCart } from '../../hooks/useCarts'
import type { CartProduct } from '../../types/cart'
import { useMemo, useState } from 'react'
import * as S from './styles'
import { CartHeader } from './CartHeader'
import { CartProductsTable } from './CartProductsTable'
import { CartFooter } from './CartFooter'

type LocalProduct = CartProduct & { isDeleted?: boolean }

function productsEqualByQuantity(
  left: CartProduct[],
  right: CartProduct[],
): boolean {
  if (left.length !== right.length) return false
  const rightMap = new Map(right.map((p) => [p.id, p.quantity]))
  for (const p of left) {
    if (rightMap.get(p.id) !== p.quantity) return false
  }
  return true
}

export function CartDetailsPage() {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const id = Number(params.id)

  const { data: cart, isLoading, isError, error } = useCart(id)
  const updateMutation = useUpdateCart(id)

  const [localProducts, setLocalProducts] = useState<LocalProduct[] | null>(
    null,
  )

  const products = localProducts ?? cart?.products ?? []

  const handleBack = () => {
    navigate(-1)
  }

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (!cart) return
    updateMutation.reset()
    const next = (localProducts ?? cart.products).map((p) =>
      p.id === productId ? { ...p, quantity } : p,
    )
    setLocalProducts(next)
  }

  const handleRemove = (productId: number) => {
    if (!cart) return
    updateMutation.reset()
    const next = (localProducts ?? cart.products).filter(
      (p) => p.id !== productId,
    )
    setLocalProducts(next)
  }

  const handleSave = () => {
    if (!cart) return
    const current = localProducts ?? cart.products

    const payloadProducts = current.map((p) => ({
      id: p.id,
      quantity: p.quantity,
    }))

    updateMutation.mutate(
      {
        merge: true,
        products: payloadProducts,
      },
      {
        onSuccess: () => {
          setLocalProducts(null)
        },
      },
    )
  }

  const isDirty = useMemo(() => {
    if (!cart) return false
    if (localProducts == null) return false
    return !productsEqualByQuantity(localProducts, cart.products)
  }, [cart, localProducts])

  const canSave = isDirty && products.length > 0 && !updateMutation.isPending

  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0)
  const totalAmount = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  )

  return (
    <S.Container>
      <S.Wrapper>
        <CartHeader
          cartId={cart?.id}
          userId={cart?.userId}
          productsCount={products.length}
          onBack={handleBack}
        />

        {isLoading ? (
          <S.StatusText>Loading cart…</S.StatusText>
        ) : isError ? (
          <>
            <S.StatusText>Unable to load cart</S.StatusText>
            <S.ErrorBox>{(error as Error).message}</S.ErrorBox>
          </>
        ) : !cart ? (
          <S.StatusText>Cart not found</S.StatusText>
        ) : (
          <>
            <CartProductsTable
              products={products}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />

            <CartFooter
              totalQuantity={totalQuantity}
              totalAmount={totalAmount}
              canSave={canSave}
              isPending={updateMutation.isPending}
              onSave={handleSave}
            />

            {updateMutation.isError && (
              <S.ErrorBox>{(updateMutation.error as Error).message}</S.ErrorBox>
            )}
            {updateMutation.isSuccess && (
              <S.SuccessBox>Changes saved successfully!</S.SuccessBox>
            )}
          </>
        )}
      </S.Wrapper>
    </S.Container>
  )
}

