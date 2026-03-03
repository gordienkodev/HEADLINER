import { useNavigate } from 'react-router-dom'
import { useCartList } from '../../hooks/useCarts'
import { useCartFiltersStore } from '../../store/cartFilters'
import * as S from './styles'
import { CartsToolbar } from './CartsToolbar'
import { CartsTable } from './CartsTable'
import { CartsPagination } from './CartsPagination'

export function CartsListPage() {
  const navigate = useNavigate()
  const { data, isLoading, isError, error, isFetching, page, limit } =
    useCartList()
  const { setPage, setLimit, setUserId, userId } = useCartFiltersStore()

  const carts = data?.carts ?? []
  const total = data?.total ?? 0
  const totalPages = total && limit ? Math.ceil(total / limit) : 1

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  const handleRowClick = (id: number) => {
    navigate(`/carts/${id}`)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <CartsToolbar
          userId={userId}
          limit={limit}
          total={total}
          isFetching={isFetching}
          onUserIdChange={setUserId}
          onLimitChange={setLimit}
        />

        {isLoading ? (
          <S.LoadingText>Loading carts…</S.LoadingText>
        ) : isError ? (
          <>
            <S.LoadingText>Unable to load carts</S.LoadingText>
            <S.ErrorBox>{(error as Error).message}</S.ErrorBox>
          </>
        ) : carts.length === 0 ? (
          <S.LoadingText>No carts found</S.LoadingText>
        ) : (
          <>
            <CartsTable carts={carts} onRowClick={handleRowClick} />
            <CartsPagination
              page={page}
              totalPages={totalPages}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </>
        )}
      </S.Wrapper>
    </S.Container>
  )
}

