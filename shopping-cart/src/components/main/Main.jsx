import { useState, useEffect, useContext } from 'react'

import { getCategories, getProducts } from '../../services/dbServices'
import { FilterContext } from '../../contexts/filters'
import { Product } from './Product'
import './styles.css'
import { NoProducts } from './NoProducts'

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
            
            if (filter.category === 'Electronics') {
                const filteredCategory = filteredPrice.filter((rawProduct) => rawProduct.categoryId === 1)
                setProducts(filteredCategory)
            } else if (filter.category === 'Books') {
                const filteredCategory = filteredPrice.filter((rawProduct) => rawProduct.categoryId === 2)
                setProducts(filteredCategory)
            }  else if (filter.category === 'Clothing') {
                const filteredCategory = filteredPrice.filter((rawProduct) => rawProduct.categoryId === 3)
                setProducts(filteredCategory)
            } else {
                setProducts(filteredPrice)
            }
        })
        .catch(err => console.error("Error fetching lost items:", err));
    }, [filter])

    return (
        <main>
            {
                products.length === 0 
                ? <NoProducts/> 
                : products.map((product) => ( <Product key={product.id} product={product}/> ))
            }
        </main>
    )   
}
