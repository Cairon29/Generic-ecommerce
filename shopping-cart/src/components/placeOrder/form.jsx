import { useState, useContext } from "react";
import emailjs from '@emailjs/browser';
import { v4 as uuidv4 } from 'uuid';
import { HtmlCart } from "./htmlCart";
import { CartContext } from "../../contexts/cart";
import { FormSection } from "./FormSection";

export const Form = () => {
    const { cart, setCart, totalPrice } = useContext(CartContext);

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',

    });
    
    const htmlCart = HtmlCart().toString();

    const formFunctions = {
        hdlSubmit : (e) => {
            e.preventDefault();
            
            if (form.fullName && form.email && form.phone && form.address && cart.length > 0) {
                const templateParams = {
                    name: form.fullName,
                    date: new Date().toDateString(),
                    cart_items: htmlCart,
                    order_id: uuidv4(),
                    address: form.address,
                    delivery_date: new Date().getMonth(),
                    total_price: totalPrice,
                    user_email: form.email
                };
            
                emailjs
                    .send('service_ci853jl', 'service_ci853jl', templateParams, 'xgpSKBSzXfJK8xUZ2')
                    .then((response) => {
                        console.log('Email sent successfully!', response.status, response.text);
                    })
                    .catch((error) => {
                        console.error('Error sending email:', error);
                    });
                
                window.alert(`Order placed successfully! your order id is ${templateParams.order_id}`);
                setForm({
                    fullName: '',
                    email: '',
                    phone: '',
                    address: '',
            
                })
                setCart([]);
            } else if (!form.fullName || !form.email || !form.phone || !form.address) {
                alert('Please fill all the fields');
            } else if ( cart.length === 0) {
                alert('Your cart is empty');
            }
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