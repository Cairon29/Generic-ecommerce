import { useContext } from "react"
import { SessionContext } from "../contexts/session"

export const useSessionActions = () => {

    const { setUserSession } = useContext(SessionContext)

    const LogIn = (user) => {
        setUserSession(user)
    }
    const LogOut = () => {
        setUserSession(null)
    }

    return (
        { LogIn, LogOut }
    )
}
