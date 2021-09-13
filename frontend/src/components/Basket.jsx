import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({ basket, foods, resetBasket }) => {
    return (
        <>
            {
                basket.map(item => (
                    <BasketItem item={item} food={foods.find(f => f.id === item.id)} />
                ))
            }
            <button onClick={resetBasket}>Sepeti Sıfırla</button>

        </>
    )
}

export default Basket
