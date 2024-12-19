export const HeaderSection = ({ hdlInput }) => {
  return (
    <header>
        <div>
            <h1>Shopping cart</h1>
        </div>
        <div>
            <input type="text" placeholder='Search a product' onChange={hdlInput}/>
        </div>
    </header>
  )
}
