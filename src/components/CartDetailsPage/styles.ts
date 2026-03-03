import styled from '@emotion/styled'

export const Container = styled.div`
  min-height: 100vh;
  background: #0e1621;
  padding: 0;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  background: #17212b;
  padding: 12px 16px;
  border-radius: 12px;
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
`

export const MetaBadge = styled.span`
  border-radius: 10px;
  padding: 6px 12px;
  background: #232e3c;
  color: #8b98a5;
  font-weight: 400;
`

export const BackButton = styled.button`
  border-radius: 10px;
  border: none;
  background: #232e3c;
  color: #ffffff;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.15s ease;

  &:hover {
    background: #2b3947;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const ProductsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;
  background: #17212b;
`

export const Th = styled.th`
  text-align: left;
  font-weight: 500;
  color: #8b98a5;
  padding: 14px 16px;
  border-bottom: 1px solid #0e1621;
  background: #17212b;
  font-size: 13px;
`

export const Td = styled.td`
  padding: 14px 16px;
  border-bottom: 1px solid #0e1621;
  color: #ffffff;
  vertical-align: middle;
`

export const Tr = styled.tr`
  background: #17212b;
  transition: background 0.15s ease;

  &:hover {
    background: #1c2733;
  }
`

export const QtyInput = styled.input`
  width: 80px;
  border-radius: 10px;
  border: none;
  background: #0e1621;
  color: #ffffff;
  font-size: 14px;
  padding: 8px 12px;
  transition: background 0.15s ease;

  &:focus {
    outline: none;
    background: #1c2733;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const Button = styled.button<{ destructive?: boolean }>`
  border-radius: 10px;
  border: none;
  background: ${({ destructive }) => (destructive ? '#c74747' : '#5288c1')};
  color: #ffffff;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ destructive }) => (destructive ? '#d55454' : '#5d9ad6')};
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Footer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  flex-wrap: wrap;
  gap: 16px;
  background: #17212b;
  padding: 12px 16px;
  border-radius: 12px;
`

export const Totals = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
`

export const TotalLabel = styled.span`
  color: #8b98a5;
`

export const TotalValue = styled.span`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
`

export const StatusText = styled.div`
  font-size: 14px;
  color: #8b98a5;
  padding: 40px 0;
  text-align: center;
`

export const SuccessBox = styled.div`
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #17212b;
  color: #7ed87e;
  font-size: 14px;
  border: 1px solid #2a3f2a;
`

export const ErrorBox = styled.div`
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #17212b;
  color: #ea6b6b;
  font-size: 14px;
  border: 1px solid #2a1f1f;
`
