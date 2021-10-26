/** Dependencies */
import React from 'react'

/** Stylesheets */
import './basketItem.scss'



const BasketItem = ({ item, food }) => {

    return (
        <>
            <li className="basketItem">
                {item.foodname} <span>x {item.amount}</span> <span>({item.gram * item.amount}g)</span>
            </li>
        </>
    )
}

export default BasketItem
