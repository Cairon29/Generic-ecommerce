import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart';

export const Aside = () => {
    const { cart, totalPrice, totalAmount } = useContext(CartContext);
    return (
        <aside className="aside">
            {
                cart.length > 0 
                ? 
                    <>
                        <h2>Purcharse Summary</h2>
                        <section>
                            <div>
                                <p>Products ({totalAmount})</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div>
                                <p><strong>SubTotal</strong></p>
                                <p><strong>${totalPrice}</strong></p>
                            </div>
                            <button>
                                <Link to="/confirm-order">Finish purchase</Link>
                            </button>
                        </section>
                    </>
                :   <section className='summary-empty-cart'>
                        <h2> Purcharse Summary</h2>
                        <p> You will see the summary here once you add products to the cart</p>
                    </section>
            }
            
        </aside>
    )
}
