import { Header } from '../home/header/header'
import { Footer } from '../home/footer/Footer'
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
