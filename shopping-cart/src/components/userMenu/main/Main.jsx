import { useContext, useEffect, useState } from "react"

import { UserPageContext } from "../../../contexts/userPage"
import { AllOrders } from "./subSections/AllOrders";
import { Processing } from "./subSections/Processing";
import { Delivered } from "./subSections/Delivered";
import { Shipped } from "./subSections/Shipped";
import { YourProfile } from "./subSections/YourProfile";
import { YourReviews } from "./subSections/YourReviews";

export const Main = () => {
  
  const { page } = useContext( UserPageContext );
  const [currentPage, setCurrentPage] = useState(<AllOrders />);

  useEffect(() => {
    switch (page) {
      case 'all-orders':
        setCurrentPage(<AllOrders />)
        break
      case 'delivered':
        setCurrentPage(<Delivered />)
        break
      case 'processing':
        setCurrentPage(<Processing />)
        break
      case 'shipped':
        setCurrentPage(<Shipped />)
        break
      case 'your-profile':
        setCurrentPage(<YourProfile />)
        break
      case 'your-reviews':
        setCurrentPage(<YourReviews />)
        break
      default:
        setCurrentPage(<AllOrders />)
        break
  }
  }, [page])

  return (
    <main>
      { currentPage }
    </main>
  )
}
