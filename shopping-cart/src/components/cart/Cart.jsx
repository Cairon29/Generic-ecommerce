import { useContext } from "react"
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
      <Footer/>
    </>
  )
}
