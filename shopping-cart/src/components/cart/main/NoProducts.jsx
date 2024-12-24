import { Link } from 'react-router-dom';

export const NoProducts = () => {
    return (
        <section className="no-products">
            <div className="no-products-image">
                <img src="../../../../public/empty-cart.webp" alt="" />
            </div>
            <div>
                <p><b> There are no items in your cart at.</b></p>
                <div>
                    <p> Browse our products and add them to your cart to get free shipping fee</p>
                </div>
            </div>
            <div>
                <Link to="/"> Discover new items</Link>
            </div>
        </section>  
    )
}
