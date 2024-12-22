import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { App } from './App.jsx';
import { Cart } from './components/cart/Cart.jsx';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
