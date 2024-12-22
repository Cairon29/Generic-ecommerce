import './styles.css'

export const Product = ({ cartProduct, hdlRemoveFromCart, hdlPlusOne, hdlMinusOne }) => {
  
    return (
        <article className="cart-product" key={cartProduct.id}>
            <div className="cart-product-image">
                <img src={cartProduct.image} alt={cartProduct.name} />
            </div>
            <div className="cart-product-name">
                <h3>{cartProduct.name}</h3>
            </div>
            <div className="cart-product-amount">
                <button onClick={() => hdlMinusOne(cartProduct.id)}>-</button>
                <span>
                    Quantity: {cartProduct.amount}
                </span>
                <button onClick={() => hdlPlusOne(cartProduct.id)}>+</button>
            </div>
            <div className="cart-product-total">
                <span>${cartProduct.price * cartProduct.amount}</span>
                <button onClick={() => hdlRemoveFromCart(cartProduct.id)}> ✖ </button>
            </div>
        </article>
    )
}