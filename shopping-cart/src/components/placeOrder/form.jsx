import { useState, useContext } from "react";
import { HtmlCart } from "./htmlCart";
import { CartContext } from "../../contexts/cart";
import emailjs from '@emailjs/browser';

export const Form = () => {

    const htmlCart = HtmlCart().toString();

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',

    })

    const { cart, setCart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form sent");
    
        const templateParams = {
            user_email: form.email,
            name: form.fullName,
            date: new Date().toDateString(),
            cart_items: htmlCart, // Pass the generated HTML here
            address: form.address,
            delivery_date: new Date().getMonth(),
            total_price: totalPrice
        };
    
        emailjs
            .send('service_ci853jl', 'service_ci853jl', templateParams, 'xgpSKBSzXfJK8xUZ2')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    
        setForm({
            fullName: '',
            email: '',
            phone: '',
            address: '',
    
        })
        setCart([]);
    }

    const hdlName = (e) => {
        setForm({ ...form, fullName: e.target.value });
    }
    const hdlEmail = (e) => {
        setForm({ ...form, email: e.target.value });
    }
    const hdlPhone = (e) => {
        setForm({ ...form, phone: e.target.value });
    }
    const hdlAddress = (e) => {
        setForm({ ...form, address: e.target.value });
    }

    return (
        <section className="form-section">
            <h2> Buyer Information </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Full Name:</label>
                    <input type="text" id="name" name="fullName"onChange={hdlName} value={form.fullName} />
                </div>
                <div>
                    <label htmlFor="phone"> Phone</label>
                    <input type="tel" id="phone" name="phone" onChange={hdlPhone} value={form.phone} maxLength="10" placeholder="ej: 123-456-7890"/>
                </div>
                <div>
                    <label htmlFor="address"> Address:</label>
                    <input type="text" id="address" name="address" onChange={hdlAddress} value={form.address}/>    
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input type="email" id="email" name="email" onChange={hdlEmail} value={form.email} />
                </div>
                <p> <b>Total price:</b> {totalPrice} </p>
                <button type="submit"> Confirm purcharse </button>
            </form>
        </section>
    )
}
