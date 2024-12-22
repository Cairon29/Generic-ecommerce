import { useContext } from "react"
import { CartContext } from "../../../contexts/cart"
import { Product } from "./products"
export const Main = () => {
    const { cart, setCart } = useContext(CartContext)
    
    const handleRemoveProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id)
        setCart(newCart)
    }

    const handlePlusOne = (id) => {
        const newCart = cart.map((product) => {
            if (product.id === id) { 
                return { ...product, amount: product.amount + 1 }
            } else { 
                return product
            }
        })
        setCart(newCart)
    }

    const handleMinusOne = (id) => {
        const newCart = cart.map((product) => {
            if (product.id === id && product.amount > 1) { 
                return { ...product, amount: product.amount - 1 }
            } else { 
                return product
            }
        })
        setCart(newCart)
    }
    return (
        <main>
            {
                cart.map(product => (
                    <Product 
                        key={product.id} 
                        cartProduct={product}
                        hdlRemoveFromCart={handleRemoveProduct}
                        hdlPlusOne={handlePlusOne}
                        hdlMinusOne={handleMinusOne}
                    />
                ))
            }
        </main>    
    )
}
