
export const Product = ({ product }) => {
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
            <button className="add-to-cart">Add to cart</button>
        </div>
    </article>
  )
}
