import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/cart"
import { Header } from "../home/header/header"
import { Footer } from "../home/footer/footer"
import { Main } from "./main/Main"

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart);
  
  return (
    <>
      <Header/>
      <Main/>
        <aside>
            <h2> Cart </h2>
            <p> Items in your cart: 0 </p>
            <Link to="/">
                <button>
                    <img src="../../../public/cart.png" alt="" />
                </button> 
            </Link>
        </aside>
      <Footer/>
    </>
  )
}
