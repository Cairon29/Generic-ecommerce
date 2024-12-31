import { useContext } from "react"
import { CartContext } from "../../contexts/cart"

export const HtmlCart = () => {
    
    const { cart } = useContext(CartContext)
    
    const htmlString = cart
    .map(
        (product) => `
            <tr style="padding: 16px;">
                <td>${product.name}</td>
                <td>${product.amount}</td>
                <td>${product.price}</td>
                <td style="width: 100px; height: 100px;">
                    <img src="${product.image}" style="width: 100%; object-fit: cover;"/>
                </td>
            </tr>
        `
    )
    .join(""); // Concatenate all product rows into a single string
    console.log(htmlString);
    
    return htmlString; 
}
