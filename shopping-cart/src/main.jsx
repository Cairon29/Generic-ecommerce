import { createRoot } from 'react-dom/client'
import { FilterProvider } from './contexts/filters.jsx'

import { AppRouter } from './AppRouter.jsx'

import './index.css'
import { App } from './App.jsx'
import { CartProvider } from './contexts/cart.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FilterProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </FilterProvider>
  </CartProvider>
)
