import React from 'react'

const BasketItem = ({ item, food }) => {
    return (
        <div>
            {food.title} x {item.amount}
        </div>
    )
}

export default BasketItem
