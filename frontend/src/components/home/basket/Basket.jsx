/** Dependencies */
import React, { useEffect } from 'react'

/** Services */
import CalorieCountService from '../../../services/CalorieCountService'

/** Contexts */
import { useFoodContext } from '../../../context/FoodContext/FoodContext'
import { useAuth } from '../../../context/AuthContext/AuthContext'

/** Components */
import BasketItem from "./BasketItem/BasketItem"

/** Stylesheets */
import './basket.scss'



const Basket = () => {

    const { foods, setFoods, totalCalorie } = useFoodContext();
    const { user } = useAuth();


    const removeBasket = async () => {

        await CalorieCountService.removeBasketItems(user.user.id)
            .then(setFoods([]))
            .catch(err => console.log(err))

    }

    useEffect(() => {

        const getUserBasketItems = async () => {
            await CalorieCountService.getBasketItems(user.user.id)
                .then(res => setFoods(res.data))
                .catch(err => console.log(err))
        }

        getUserBasketItems()
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
