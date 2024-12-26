import { useContext } from "react"
import { CartContext } from "../../contexts/cart"
import { Main } from "./main/Main"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

export const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart);
  
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
