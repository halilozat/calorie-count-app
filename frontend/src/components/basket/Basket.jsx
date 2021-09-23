import React from 'react'
import BasketItem from './basketItem/BasketItem'
import './basket.scss'
import { useFoodContext } from '../../context/foodContext/FoodContext'

const Basket = () => {

    const { basket, resetBasket, totalCalorie } = useFoodContext();

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
                <div>_________________</div>
                <div className="calorie">Total Calories: <span>{totalCalorie}</span></div>
                <button className="basket-reset-btn" onClick={resetBasket}>Reset Basket</button>
            </div>
        </>
    )
}

export default Basket
