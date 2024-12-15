
export const Aside = () => {
  return (
    <aside>
        <label htmlFor="electronics"> Electronics</label>
        <input name='electronics' type="checkbox"/>
        <label htmlFor="books"> Books</label>
        <input name='books' type="checkbox"/>
        <label htmlFor="clothing"> Clothing</label>
        <input name='clothing' type="checkbox"/>

        <input type="range" min="0" max="5000"/>
    </aside>
  ) 
}
