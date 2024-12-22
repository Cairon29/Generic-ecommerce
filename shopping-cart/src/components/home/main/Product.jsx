import { CartContext } from "../../../contexts/cart"
import { useContext } from "react"

export const Product = ({ product }) => {

  const { setCart } = useContext(CartContext)

  const hdlAddToCart = () => (setCart( 
    (prev) => [...prev, {...product, amount: 1}] 
  ))

  return (
    <article className="product-card" key={product.id}>
        <div className="product-image">
            <img src={product.image} alt={product.name}/>
        </div>
        <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><b>Price:</b> ${product.price}</p>
        </div>
        <div className="product-actions">
            <button className="add-to-cart" onClick={hdlAddToCart}>Add to cart</button>
        </div>
    </article>
  )
}