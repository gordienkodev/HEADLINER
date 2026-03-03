import * as S from './styles'
import type { CartsToolbarProps } from '../../types/components'

export function CartsToolbar({
  userId,
  limit,
  total,
  isFetching,
  onUserIdChange,
  onLimitChange,
}: CartsToolbarProps) {
  return (
    <S.Toolbar>
      <S.ControlsRow>
        <S.Label>
          Filter by userId
          <S.Input
            type="number"
            placeholder="Any user"
            value={userId}
            onChange={(e) => onUserIdChange(e.target.value)}
          />
        </S.Label>
        <S.Label>
          Items per page
          <S.Select value={limit} onChange={(e) => onLimitChange(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </S.Select>
        </S.Label>
      </S.ControlsRow>
      <S.Badge>{isFetching ? 'Refreshing…' : `Total: ${total || '—'}`}</S.Badge>
    </S.Toolbar>
  )
}
