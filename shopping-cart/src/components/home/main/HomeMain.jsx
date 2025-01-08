import { useFilterProducts } from '../../../hooks/useFilterProducts'
import { Product } from './Product'
import { NoProducts } from './NoProducts'

export const Main = () => {
    const { products } = useFilterProducts();

    return (
        <main id='home-main'>
            {
                products.length === 0 
                ? <NoProducts/> 
                : products.map((product) => ( <Product key={product.id} product={product}/> ))
            }
        </main>
    )   
}
