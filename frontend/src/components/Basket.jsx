import React, { useContext } from 'react'
import BasketItem from './BasketItem'
import './basket.css'
import FoodContext from '../context/foodContext/FoodContext'

const Basket = ({ foods }) => {

    const { basket, resetBasket } = useContext(FoodContext)

    return (
        <>
            <div className="basket-container container">
                <h3>My Meals</h3>
                <ul>
                    {
                        basket.map(item => (
                            <BasketItem key={item.name} item={item} />
                        ))
                    }
                </ul>
                <button className="basket-reset-btn" onClick={resetBasket}>Reset Basket</button>
            </div>
        </>
    )
}

export default Basket
