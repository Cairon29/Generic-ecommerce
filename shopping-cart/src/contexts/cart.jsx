import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);
    const totalAmount = cart.reduce((acc, item) => acc + item.amount, 0);
    
    return (
        <CartContext.Provider value={{ cart, setCart, totalPrice, totalAmount }}>
            { children }
        </CartContext.Provider >
    )
}
