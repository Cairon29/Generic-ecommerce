import { useState, useEffect, useContext } from 'react'

import { getProducts } from '../../services/dbServices'
import { FilterContext } from '../../contexts/filters'
import { Product } from './Product'
import './styles.css'

export const Main = () => {
    const [products, setProducts] = useState([])
    const { filter } = useContext( FilterContext )

    useEffect(() => {
        getProducts()
        .then(data => {
            console.log(data);
            console.log(filter.minPrice);
            
            const filteredProducts = data.filter(rawProducts => rawProducts.price >= filter.minPrice)
            console.log(filteredProducts);
            // console.log(filter);
            
            
            setProducts(filteredProducts)
        })
        .catch(err => console.error("Error fetching lost items:", err));
    }, [filter])

    return (
        <main>
            {products.map((product) => (
            <Product key={product.id} product={product} />
            ))}
        </main>
    )
}
