import * as S from './styles'
import type { CartHeaderProps } from '../../types/components'

export function CartHeader({ cartId, userId, productsCount, onBack }: CartHeaderProps) {
  return (
    <S.HeaderRow>
      <S.Meta>
        {cartId && userId && (
          <>
            <S.MetaBadge>Cart #{cartId}</S.MetaBadge>
            <S.MetaBadge>User {userId}</S.MetaBadge>
            <S.MetaBadge>{productsCount} products</S.MetaBadge>
          </>
        )}
      </S.Meta>
      <S.BackButton type="button" onClick={onBack}>
        ← Back
      </S.BackButton>
    </S.HeaderRow>
  )
}
