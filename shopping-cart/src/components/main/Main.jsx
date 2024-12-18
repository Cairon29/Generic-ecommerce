import { useState, useEffect, useContext } from 'react'

import { getCategories, getProducts } from '../../services/dbServices'
import { FilterContext } from '../../contexts/filters'
import { Product } from './Product'
import './styles.css'

export const Main = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const { filter } = useContext( FilterContext )

    useEffect(() => {
        getCategories()
        .then(data => setCategories(data))
        .catch(error => console.error("error bringing the categories:", error))
    }, [])

    useEffect(() => {
        getProducts()
        .then(data => {
            const filteredPrice = data.filter(rawProduct => rawProduct.price >= filter.minPrice)
            console.log(filteredPrice);
            
            // const filteredCategory = filteredPrice.filter((rawProduct) => {
                
            //     switch (rawProduct.categoryId) {
            //         case 1:
            //             setProducts(filteredCategory)
            //     }
            //     rawProduct.category === filter.category
            // })
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
