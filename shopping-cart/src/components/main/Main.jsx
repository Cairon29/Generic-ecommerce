import { useState, useEffect } from 'react'
import { getProducts } from '../../services/dbServices'
import './styles.css'

export const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
        .then(data => setProducts(data))
        .catch(err => console.error("Error fetching lost items:", err));
    }, [])
    return (
        <main>
            {
                products.map((product) => (
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
                ))
            }
        </main>
    )
}
