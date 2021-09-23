import React from 'react'
import './basketItem.scss'

const BasketItem = ({ item, food }) => {

    return (
        <>
            <li className="basketItem">
                {item.name} <span>x {item.amount}</span> <span>({item.gram * item.amount}g)</span>
            </li>
        </>
    )
}

export default BasketItem
