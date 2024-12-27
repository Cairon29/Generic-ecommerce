import { CartContext } from "../../../contexts/cart"
import { useContext } from "react"

export const Product = ({ product }) => {

  const { cart, setCart } = useContext(CartContext)

  const hdlAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      return 
    } else { 
      // const amount = 1; // Define amount explicitly
      // setCart((prev) => [
      //   ...prev,
      //   { ...product, amount, total: product.price * amount },
      // ]);
      setCart((prev) => [...prev, { ...product, amount: 1, total : product.price }]);
    }
  }
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
            <button className="add-to-cart" onClick={() => hdlAddToCart(product.id)}>Add to cart</button>
        </div>
    </article>
  )
}