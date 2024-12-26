import { useContext } from "react"
import { CartContext } from "../../../contexts/cart"
import { Product } from "./products"
import { NoProducts } from "./NoProducts"
import { Link } from "react-router-dom"

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
                cart.length > 0 
                ? ( 
                    <>
                        {cart.map(product => (
                            <Product 
                                key={product.id} 
                                cartProduct={product}
                                hdlRemoveFromCart={handleRemoveProduct}
                                hdlPlusOne={handlePlusOne}
                                hdlMinusOne={handleMinusOne}
                            />

                        ))}
                        <button>
                            <Link to="/confirm-order">Finish purchase</Link>
                        </button>
                    </>  
                )
                : <NoProducts/>
            }
        </main>    
    )
}
