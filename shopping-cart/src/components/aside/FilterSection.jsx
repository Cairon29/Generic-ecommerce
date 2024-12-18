import React, { useContext } from 'react'
import { FilterContext } from '../../contexts/filters';

export const FilterSection = ({ hdlCategory, hdlRange }) => {
    
    const { filter } = useContext( FilterContext );
    return (
        <aside>
            <select
                name="Categories"
                value={filter.category}
                onChange={hdlCategory}
            >
                <option value="all">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
            </select>
            <div>
                <label htmlFor="minRange">Minimum price:</label>
                <div>
                <input
                    id="inputRange"
                    name="minRange"
                    type="range"
                    min="0"
                    max="800"
                    value={filter.minPrice}
                    onChange={hdlRange}
                />
                </div>
                <p id='rangeValue' >${filter.minPrice}</p>
            </div>
        </aside>
    );
}
