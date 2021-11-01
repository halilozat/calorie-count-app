/** Dependencies */
import React, { useContext, useEffect } from 'react'

/** Components */
import { AuthContext } from '../../../../context/AuthContext/AuthContext'
import { useFoodContext } from '../../../../context/FoodContext/FoodContext'

/** Stylesheets */
import './finderItem.scss'



const Item = ({ name, calories, carbs, serve, fat_total, protein, food }) => {

    const
        {
            setTotalProtein,
            setTotalCalorie,
            setTotalCarb,
            setTotalFat,
            setFoods,
            foods,
        } = useFoodContext()
    const { userId } = useContext(AuthContext)

    useEffect(() => {

        setTotalCarb(
            foods.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.foodname === item.foodname).carb))
                    )
                );
            }, 0)
        )

        setTotalProtein(
            foods.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.foodname === item.foodname).protein))
                    )
                );
            }, 0)
        )

        setTotalFat(
            foods.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.foodname === item.foodname).fat))
                    )
                );
            }, 0)
        )

        setTotalCalorie(
            foods.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.foodname === item.foodname).calorie))
                    )
                );
            }, 0)
        )
    }, [foods]);


    const addBasket = async () => {
        const newFood = {
            UserId: userId,
            FoodName: food.name,
            Amount: 1,
            Protein: Math.round(food.protein_g),
            Carb: Math.round(food.carbohydrates_total_g),
            Fat: Math.round(food.fat_total_g),
            Gram: Math.round(food.serving_size_g),
            Calorie: Math.round(food.calories)
        }

        try {
            setFoods([...foods, newFood])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='item'>
            <div className='item-top'>
                <div className='item-head'>
                    <h4>{name}</h4>
                </div>
                <div className='item-content'>

                    <div className='item-info'>
                        <span className='item-info-a'>{calories}</span>
                        <span className='item-info-b'>Calories</span>
                    </div>

                    <div className='item-info'>
                        <span className='item-info-a'>{serve}g</span>
                        <span className='item-info-b'>Serve (grams)</span>
                    </div>

                    <div className='item-head'>
                        <button onClick={addBasket}>Add</button>
                    </div>


                </div>
            </div>

            <div className='item-bottom'>
                <div className='item-row'>
                    <div className='item-row-a'>Calories</div>
                    <div className='item-row-b'>{calories}</div>
                </div>
                <div className='item-row'>
                    <div className='item-row-a'>Protein</div>
                    <div className='item-row-b'>{protein}g</div>
                </div>
                <div className='item-row'>
                    <div className='item-row-a'>Carbohydrate</div>
                    <div className='item-row-b'>{carbs}g</div>
                </div>
                <div className='item-row'>
                    <div className='item-row-a'>Fat</div>
                    <div className='item-row-b'>{fat_total}g</div>
                </div>
            </div>
        </div>
    )
}

export default Item
