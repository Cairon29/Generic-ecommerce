import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/cart/Cart.jsx';
import { Home } from './components/home/Home.jsx';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
