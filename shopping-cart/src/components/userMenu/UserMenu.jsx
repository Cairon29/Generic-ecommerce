import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Aside } from "./aside/Aside"
import { Main } from "./main/Main"
import './userMenu-styles.css'

export const UserMenu = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Aside/>
            <Footer/>
        </>
    )
}
