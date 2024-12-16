import { useContext, useState } from "react"
import { FilterContext } from "../../contexts/filters";

export const Aside = () => {
  const [range, setRange] = useState(0);

  const { filter, setFilter} = useContext(FilterContext);

  const handleRange = (e) => {
    setFilter(prev => ({
      ...prev,
      minPrice: e.target.value
    }))
    console.log(filter.minPrice);
    
  }

  return (
    <aside>
      <div>
        <label htmlFor="electronics"> Electronics</label>
        <input name='electronics' type="checkbox"/>
      </div>
      <div>
        <label htmlFor="books"> Books</label>
        <input name='books' type="checkbox"/>
      </div>
      <div>
        <label htmlFor="clothing"> Clothing</label>
        <input name='clothing' type="checkbox"/>
      </div>
        <label htmlFor="minRange">Minimun range: {filter.minPrice}</label>
        <input name="minRange" type="range" min="0" max="1000" onChange={handleRange}/>
    </aside>
  ) 
}
