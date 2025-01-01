import { createRoot } from 'react-dom/client'
import { FilterProvider } from './contexts/filters.jsx'
import { CartProvider } from './contexts/cart.jsx'
import { SessionProvider } from './contexts/session.jsx'
import { AppRouter } from './AppRouter.jsx'
import { App } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <FilterProvider>
      <CartProvider>
          <AppRouter>
            <App />
          </AppRouter>
      </CartProvider>
    </FilterProvider>
  </SessionProvider>
)
