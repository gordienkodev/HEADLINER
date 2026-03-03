import * as S from './styles'
import type { CartProductsTableProps } from '../../types/components'

export function CartProductsTable({
  products,
  onQuantityChange,
  onRemove,
}: CartProductsTableProps) {
  return (
    <S.ProductsTable>
      <thead>
        <tr>
          <S.Th>Product</S.Th>
          <S.Th>Price</S.Th>
          <S.Th>Quantity</S.Th>
          <S.Th>Total</S.Th>
          <S.Th />
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <S.Tr key={product.id}>
            <S.Td>{product.title}</S.Td>
            <S.Td>${product.price.toFixed(2)}</S.Td>
            <S.Td>
              <S.QtyInput
                type="number"
                min={1}
                value={product.quantity}
                onChange={(e) =>
                  onQuantityChange(
                    product.id,
                    Math.max(1, Number(e.target.value) || 1),
                  )
                }
              />
            </S.Td>
            <S.Td>${(product.price * product.quantity).toFixed(2)}</S.Td>
            <S.Td>
              <S.Button
                type="button"
                destructive
                onClick={() => onRemove(product.id)}
              >
                Remove
              </S.Button>
            </S.Td>
          </S.Tr>
        ))}
      </tbody>
    </S.ProductsTable>
  )
}
