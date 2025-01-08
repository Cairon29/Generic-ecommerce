import { useContext } from "react";
import { SessionContext } from "../../contexts/session";
import { Link, useNavigate } from "react-router-dom";

export const HeaderSection = ({ hdlInput }) => {
    const { userSession } = useContext(SessionContext);
    const navigate = useNavigate();

    const hdlSessionBtn = () => {
        navigate("/LogIn");
    };

    return (
        <header>
            <div id="topBar">
                <Link to="/">
                    <h1>Shopping Cart</h1>
                </Link>
                <div>
                    <input type="text" placeholder="Search a product" onChange={hdlInput} />
                </div>
                <div className="user-utilities">
                    <Link to="/cart">
                        <button>
                            <img src="./public/cart.png" alt="Cart" />
                        </button>
                    </Link>
                    {
                        userSession 
                        ?
                            <Link to='/user' className="user-icon-link">
                                <img src="./public/menu.png" alt="menu icon" className="user-icon"/>
                            </Link>
                        :   
                            <Link to="/LogIn">
                                <button onClick={hdlSessionBtn}> Log In </button>
                            </Link>
                    }
                    
                </div>
            </div>
        </header>
    );
};