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

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  background: #17212b;
  padding: 12px 16px;
  border-radius: 12px;
`

export const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`

export const Label = styled.label`
  font-size: 13px;
  color: #8b98a5;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 400;
`

export const Input = styled.input`
  min-width: 160px;
  border-radius: 10px;
  border: none;
  background: #0e1621;
  padding: 10px 12px;
  color: #ffffff;
  font-size: 14px;
  transition: background 0.15s ease;

  &:focus {
    outline: none;
    background: #1c2733;
  }

  &::placeholder {
    color: #5e6d7c;
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

export const Select = styled.select`
  border-radius: 10px;
  border: none;
  background: #0e1621;
  padding: 10px 12px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:focus {
    outline: none;
    background: #1c2733;
  }

  option {
    background: #17212b;
    color: #ffffff;
  }
`

export const Table = styled.table`
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
`

export const Tr = styled.tr<{ clickable?: boolean }>`
  background: #17212b;
  transition: background 0.15s ease;

  ${({ clickable }) =>
    clickable &&
    `
    cursor: pointer;
    &:hover {
      background: #1c2733;
    }
  `}
`

export const FooterRow = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #8b98a5;
  background: #17212b;
  padding: 12px 16px;
  border-radius: 12px;
`

export const Button = styled.button<{ variant?: 'primary' | 'ghost' }>`
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  background: ${({ variant }) =>
    variant === 'primary' ? '#5288c1' : '#232e3c'};
  color: #ffffff;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ variant }) =>
      variant === 'primary' ? '#5d9ad6' : '#2b3947'};
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const Badge = styled.span`
  border-radius: 10px;
  padding: 6px 12px;
  background: #232e3c;
  font-size: 13px;
  color: #8b98a5;
  font-weight: 400;
`

export const LoadingText = styled.div`
  font-size: 14px;
  color: #8b98a5;
  padding: 40px 0;
  text-align: center;
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
