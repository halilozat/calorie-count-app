import React from 'react'
import './basketItem.css'

const BasketItem = ({ item, food }) => {
    return (
        <>
            <li className="basketItem">
                {food.title} <span>x {item.amount}</span>
            </li>
        </>
    )
}

export default BasketItem
