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
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>
                            <div>
                                <p><strong>SubTotal</strong></p>
                                <p><strong>${totalPrice.toFixed(2)}</strong></p>
                            </div>
                            <button>
                                <Link to="/confirm-order">Finish purchase</Link>
                            </button>
                        </section>
                    </>
                :   <section className='summary-empty-cart'></section>
            }
            
        </aside>
    )
}
