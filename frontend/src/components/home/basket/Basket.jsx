/** Dependencies */
import React, { useEffect } from 'react'

/** Axios */
import axios from 'axios'

/** Contexts */
import { useFoodContext } from '../../../context/foodContext/FoodContext'
import { useAuth } from '../../../context/authContext/AuthContext'

/** Components */
import BasketItem from './basketItem/BasketItem'

/** Stylesheets */
import './basket.scss'



const Basket = () => {

    const { foods, setFoods, totalCalorie } = useFoodContext();
    const { user } = useAuth();


    const removeBasket = async () => {
        await axios.delete(`http://localhost:5001/api/v1/userFood/${user.user.id}`)
            .then(setFoods([]))
    }

    useEffect(() => {
        const getFoodsByUserId = async () => {
            await axios.get(`http://localhost:5001/api/v1/userFood/${user.user.id}`)
                .then(res => setFoods(res.data))
                .catch(err => console.log(err))
        }
        getFoodsByUserId()
    }, [])

    return (
        <>
            {
                foods.length !== 0
                    ?
                    <div className="basket-container container">
                        <div className="basket-content">
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
