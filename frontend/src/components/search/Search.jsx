import React, { useState } from 'react'
import './search.scss'

const Search = ({ defaultValue, onChange }) => {

    const [value, setValue] = useState(defaultValue || '')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = (event) => {
        if (event.key === 'Enter' || event.key === 'Click') {
            onChange(value)
            console.log('Enter')
        }
    }

    return (
        <div className="search">
            <div className="search-box">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleClick}
                    placeholder="Enter food..."
                />
                <button onClick={handleClick} ><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default Search
