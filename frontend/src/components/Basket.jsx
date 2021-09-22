import React, { useContext } from 'react'
import BasketItem from './BasketItem'
import './basket.css'
import FoodContext from '../context/foodContext/FoodContext'

const Basket = ({ foods }) => {

    const { basket, resetBasket } = useContext(FoodContext)

    return (
        <>
            <div className="basket-container container">
                <h3>Bugün Yediklerim:</h3>
                <ul>
                    {
                        basket.map(item => (
                            <BasketItem key={item.id} item={item} food={foods.find(f => f.id === item.id)} />
                        ))
                    }
                </ul>
                <button className="basket-reset-btn" onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>
        </>
    )
}

export default Basket
