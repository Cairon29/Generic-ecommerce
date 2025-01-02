import { Aside } from './aside/aside'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Main } from './main/HomeMain'
import './home-styles.css'

export const Home = () => {
  return (
    <>
      <Header/>
      <Aside/>
      <Main/>
      <Footer/>
    </>
  )
}
