export const FormSection = ({formFunctions, formData, totalPrice}) => {
    return (
        <section className="form-section">
            <h2> Buyer Information </h2>
            <form onSubmit={formFunctions.hdlSubmit}>
                <div>
                    <label htmlFor="name"> Full Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="fullName"
                        onChange={formFunctions.hdlName} 
                        value={formData.fullName} 
                        minLength="5"
                        maxLength="100" 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone"> Phone</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        onChange={formFunctions.hdlPhone} 
                        value={formData.phone} 
                        minLength="10"
                        maxLength="10" 
                        placeholder="ej: 123-456-7890" 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address"> Address:</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        onChange={formFunctions.hdlAddress} 
                        value={formData.address} 
                        minLength="7"
                        maxLength="200"
                        placeholder="example : 123 Main St"
                        required
                    />    
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={formFunctions.hdlEmail} 
                        value={formData.email} 
                        placeholder="yourExample@email.com"
                        required
                    />
                </div>
                <p> <b>Total price:</b> {totalPrice.toFixed(2)} </p>
                <button type="submit"> Confirm purcharse </button>
            </form>
        </section>
    )
}
