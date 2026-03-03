import * as S from './styles'
import type { CartFooterProps } from '../../types/components'

export function CartFooter({
  totalQuantity,
  totalAmount,
  canSave,
  isPending,
  onSave,
}: CartFooterProps) {
  return (
    <S.Footer>
      <S.Totals>
        <div>
          <S.TotalLabel>Total Quantity: </S.TotalLabel>
          <S.TotalValue>{totalQuantity}</S.TotalValue>
        </div>
        <div>
          <S.TotalLabel>Total Amount: </S.TotalLabel>
          <S.TotalValue>${totalAmount.toFixed(2)}</S.TotalValue>
        </div>
      </S.Totals>
      <S.Button type="button" onClick={onSave} disabled={!canSave}>
        {isPending ? 'Saving…' : 'Save Changes'}
      </S.Button>
    </S.Footer>
  )
}
