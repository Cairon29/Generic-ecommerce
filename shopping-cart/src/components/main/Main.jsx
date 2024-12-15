import { useState, useEffect } from 'react'
import { getProducts } from '../../services/dbServices'

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
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                ))
            }
        Testing main
        </main>
    )
}
