import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/cart/Cart.jsx';
import { Home } from './components/home/Home.jsx';
import { PlaceOrder } from './components/placeOrder/PlaceOrder.jsx';
import { Login } from './components/login/Login.jsx';
import { UserMenu } from './components/userMenu/UserMenu.jsx';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/confirm-order' element={<PlaceOrder />} />
                <Route path='/LogIn' element={<Login />} />
                <Route path='*' element={ <div>404 - Not Found</div>} />
                <Route path='/user' element={<UserMenu />} />
            </Routes>
        </BrowserRouter>
    )
}
