import React, { useContext, useEffect, useState } from 'react'
import BasketItem from './basketItem/BasketItem'
import './basket.scss'
import { useFoodContext } from '../../context/foodContext/FoodContext'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

const Basket = () => {

    const { foods, setFoods, resetBasket, totalCalorie } = useFoodContext();
    const { user } = useContext(AuthContext)

    const removeBasket = async () => {
        await axios.delete(`http://localhost:5001/api/userFood/${user.user.id}`)
            .then(setFoods([]))
    }

    useEffect(() => {
        const getFoodsByUserId = async () => {
            await axios.get(`http://localhost:5001/api/userFood/${user.user.id}`)
                .then(res => setFoods(res.data))
                .catch(err => console.log(err))
        }
        getFoodsByUserId()
    }, [])

    console.log(foods.length);
    return (
        <>
            {
                foods.length !== 0
                    ?
                    <div className="basket-container container">
                        <h3>My Meals</h3>
                        <ul>
                            {
                                foods.map(food => (
                                    <BasketItem key={food.id} item={food} />
                                ))
                            }
                        </ul>
                        <div>_________________</div>
                        <div className="calorie">Total Calories: {totalCalorie}<span></span></div>
                        <button className="basket-reset-btn" onClick={removeBasket}>Reset Basket</button>
                    </div>
                    :
                    <div className="basket-container container">
                        <h3>My Meals</h3>
                        <ul>
                            No food found... <i className="fas fa-pizza-slice"></i>
                        </ul>
                    </div>
            }
        </>
    )
}

export default Basket
