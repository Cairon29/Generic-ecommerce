import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/filters";
import { getProducts } from "../services/dbServices";

export const useFilterProducts = () => {

    const [products, setProducts] = useState([])
    const { filter } = useContext( FilterContext )

    useEffect(() => {
        getProducts()
        .then(data => {
            const filteredName = data.filter(rawProduct => rawProduct.name.toLowerCase().includes(filter.search.toLowerCase()))
            const filteredPrice = filteredName.filter(rawProduct => rawProduct.price >= filter.minPrice)
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
        { products }
    )
}
