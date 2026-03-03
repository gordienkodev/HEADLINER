import * as S from './styles'
import type { CartsPaginationProps } from '../../types/components'

export function CartsPagination({
  page,
  totalPages,
  onPrev,
  onNext,
}: CartsPaginationProps) {
  return (
    <S.FooterRow>
      <div>
        Page {page} of {totalPages || 1}
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <S.Button type="button" onClick={onPrev} disabled={page <= 1}>
          Previous
        </S.Button>
        <S.Button type="button" onClick={onNext} disabled={page >= totalPages}>
          Next
        </S.Button>
      </div>
    </S.FooterRow>
  )
}
