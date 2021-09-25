import React, { useContext, useEffect, useState } from 'react'
import BasketItem from './basketItem/BasketItem'
import './basket.scss'
import { useFoodContext } from '../../context/foodContext/FoodContext'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

const Basket = () => {

    const { user } = useContext(AuthContext)
    const [foods, setFoods] = useState([])


    useEffect(() => {
        const getFoodsByUserId = async () => {
            axios.get(`http://localhost:5001/api/userFood/${user.user.id}`)
                .then(res => setFoods(res.data))
        }
        getFoodsByUserId()
    }, [])

    console.log(foods);

    const { basket, resetBasket, totalCalorie } = useFoodContext();
    return (
        <>
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
                <div className="calorie">Total Calories: <span>{totalCalorie}</span></div>
                <button className="basket-reset-btn" onClick={resetBasket}>Reset Basket</button>
            </div>
        </>
    )
}

export default Basket
