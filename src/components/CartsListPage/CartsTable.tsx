import * as S from './styles'
import type { CartsTableProps } from '../../types/components'

export function CartsTable({ carts, onRowClick }: CartsTableProps) {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>ID</S.Th>
          <S.Th>User</S.Th>
          <S.Th>Products</S.Th>
          <S.Th>Quantity</S.Th>
          <S.Th>Total</S.Th>
          <S.Th />
        </tr>
      </thead>
      <tbody>
        {carts.map((cart) => (
          <S.Tr key={cart.id} clickable onClick={() => onRowClick(cart.id)}>
            <S.Td>#{cart.id}</S.Td>
            <S.Td>User {cart.userId}</S.Td>
            <S.Td>{cart.totalProducts}</S.Td>
            <S.Td>{cart.totalQuantity}</S.Td>
            <S.Td>${cart.total.toFixed(2)}</S.Td>
            <S.Td>
              <S.Button
                type="button"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation()
                  onRowClick(cart.id)
                }}
              >
                View
              </S.Button>
            </S.Td>
          </S.Tr>
        ))}
      </tbody>
    </S.Table>
  )
}
