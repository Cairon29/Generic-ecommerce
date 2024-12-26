import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Form } from './form'
import './styles.css'

export const PlaceOrder = () => {
  return (
    <>
        <Header/>
        <main className='main-form'>
            <Form/>
        </main>
        <Footer/>
    </>
  )
}
