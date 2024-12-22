import { Link } from "react-router-dom"
import "./styles.css"

export const HeaderSection = ({ hdlInput }) => {
  return (
    <header>
        <div id="topBar">
            <Link to="/">
              <h1>Shopping cart</h1>
            </Link>
            <div>
                <input type="text" placeholder='Search a product' onChange={hdlInput}/>
            </div>
            <Link to="/cart">
              <button>
                  <img src="../../../public/cart.png" alt="Your shopping Cart" />
              </button> 
            </Link>
        </div>
    </header>
  )
}
