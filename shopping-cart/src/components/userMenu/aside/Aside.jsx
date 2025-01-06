import { useContext } from "react"
import { SessionContext } from "../../../contexts/session"
import { AsideSection } from "./AsideSection"


export const Aside = () => {  
  const { userSession } = useContext(SessionContext)

  return (
    <aside id= "user-aside">
        { userSession ? <AsideSection /> : <p> No user logged</p>}
    </aside>
  )
}