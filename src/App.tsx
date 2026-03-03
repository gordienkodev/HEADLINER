import { Route, Routes, Navigate } from 'react-router-dom'
import { CartsListPage } from './components/CartsListPage'
import { CartDetailsPage } from './components/CartDetailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CartsListPage />} />
      <Route path="/carts/:id" element={<CartDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
