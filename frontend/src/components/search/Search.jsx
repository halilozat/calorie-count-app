import React from 'react'
import './search.scss'

const Search = ({ sendValue, sendEnter, sendClick }) => {

    const handleChange = (e) => {
        sendValue(e.target.value)
    }

    const keyDown = (event) => {
        if (event.key === 'Enter') {
            sendEnter();
            console.log('Enter')
        }
    }

    const handleClick = () => {
        sendClick()
    }

    return (
        <div className="search">
            <div className='search-box'>
                <input type='text' onChange={handleChange} onKeyDown={keyDown} placeholder='Enter food...' />
                <button onClick={handleClick} ><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default Search
