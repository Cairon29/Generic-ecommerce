import { createContext, useState } from "react"


export const UserPageContext = createContext();

export const UserPageProvider = ({ children }) => {
    const [page, setPage] = useState('your-profile');
    return (
        <UserPageContext.Provider value={{ page, setPage }}>
            { children }
        </UserPageContext.Provider>
    )
}
