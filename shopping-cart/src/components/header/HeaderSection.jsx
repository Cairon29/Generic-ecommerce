import { useContext } from "react";
import { SessionContext } from "../../contexts/session";
import { useSessionActions } from "../../hooks/useSessionActions";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

export const HeaderSection = ({ hdlInput }) => {
    const { userSession } = useContext(SessionContext);
    const { LogOut } = useSessionActions();
    const navigate = useNavigate();

    const hdlSessionBtn = () => {
        if (userSession) {
            LogOut();
        } else {
            navigate("/LogIn");
        }
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
                <Link to="/cart">
                    <button>
                        <img src="../../../public/cart.png" alt="Your shopping cart" />
                    </button>
                </Link>
                <button onClick={hdlSessionBtn}>
                    {userSession ? "Log Out" : "Log In"}
                </button>
            </div>
        </header>
    );
};