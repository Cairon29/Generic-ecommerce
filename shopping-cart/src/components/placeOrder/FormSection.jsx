export const FormSection = ({formFunctions, formData, totalPrice}) => {
    return (
        <section className="form-section">
            <h2> Buyer Information </h2>
            <form onSubmit={formFunctions.hdlSubmit}>
                <div>
                    <label htmlFor="name"> Full Name:</label>
                    <input type="text" id="name" name="fullName"onChange={formFunctions.hdlName} value={formData.fullName} />
                </div>
                <div>
                    <label htmlFor="phone"> Phone</label>
                    <input type="tel" id="phone" name="phone" onChange={formFunctions.hdlPhone} value={formData.phone} maxLength="10" placeholder="ej: 123-456-7890"/>
                </div>
                <div>
                    <label htmlFor="address"> Address:</label>
                    <input type="text" id="address" name="address" onChange={formFunctions.hdlAddress} value={formData.address}/>    
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input type="email" id="email" name="email" onChange={formFunctions.hdlEmail} value={formData.email} />
                </div>
                <p> <b>Total price:</b> {totalPrice.toFixed(2)} </p>
                <button type="submit"> Confirm purcharse </button>
            </form>
        </section>
    )
}
