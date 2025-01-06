import { useContext } from "react"
import { UserPageContext } from "../../../contexts/userPage";

export const AsideSection = () => {

    const { setPage } = useContext( UserPageContext);
    const handlePageChange = (e) => {
        setPage(e.target.value)
    }

    return (
        <section className="user-options">
            <ul>
                <li> 
                    <button value='all-orders' onClick={handlePageChange}> All Orders </button>
                </li>
                <li> 
                    <button value='processing' onClick={handlePageChange}> Processing</button>     
                </li>
                <li>
                    <button value='shipped' onClick={handlePageChange}> Shipped </button>
                </li>
                <li>
                    <button value='delivered' onClick={handlePageChange}> Delivered</button>    
                </li>
                <li>
                    <button  value='your-reviews' onClick={handlePageChange}> Your Reviews </button>
                </li>
                <li>
                    <button value='your-profile' onClick={handlePageChange}> Your Profile </button>
                </li>
            </ul>
        </section>
    )
}
