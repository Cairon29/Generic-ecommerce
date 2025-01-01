import { useState, useEffect, createContext} from "react"

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [userSession, setUserSession] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (userSession) {
          localStorage.setItem("userSession", JSON.stringify(userSession));
        } else {
          localStorage.removeItem("userSession");
        }
    }, [userSession]);

    return (
        <SessionContext.Provider value={{ userSession, setUserSession }}>
            { children }
        </SessionContext.Provider>
    )
}
