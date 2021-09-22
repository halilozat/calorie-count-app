import React from 'react'
import './basketItem.css'

const BasketItem = ({ item, food }) => {
    return (
        <>
            <li className="basketItem">
                {item.name} <span>x {item.amount}</span>
            </li>
        </>
    )
}

export default BasketItem
