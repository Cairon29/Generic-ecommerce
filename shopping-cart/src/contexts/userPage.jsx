import { createContext, useState } from "react"


export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [page, setPage] = useState('all-orders');
    return (
        <UserPageContext.Provider value={{ page, setPage }}>
            { children }
        </UserPageContext.Provider>
    )
}
