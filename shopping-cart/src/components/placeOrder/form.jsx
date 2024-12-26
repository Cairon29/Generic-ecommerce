import { useState, useContext } from "react";
import { HtmlCart } from "./htmlCart";
import { CartContext } from "../../contexts/cart";
import emailjs from '@emailjs/browser';
import { FormSection } from "./FormSection";

export const Form = () => {
    const { cart, setCart } = useContext(CartContext);

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',

    });

    const htmlCart = HtmlCart().toString();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const formFunctions = {
        handleSubmit : (e) => {
            e.preventDefault();
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
        },
        hdlName : (e) => {
            setForm({ ...form, fullName: e.target.value });
        },
        hdlEmail : (e) => {
            setForm({ ...form, email: e.target.value });
        },
        hdlPhone : (e) => {
            setForm({ ...form, phone: e.target.value });
        },
        hdlAddress : (e) => {
            setForm({ ...form, address: e.target.value });
        }
    }

    return (
        <FormSection
            formFunctions={formFunctions}
            formData={form}
            totalPrice={totalPrice}
        />
    )
}