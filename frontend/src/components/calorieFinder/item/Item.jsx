import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/authContext/AuthContext'
import { useFoodContext } from '../../../context/foodContext/FoodContext'
import './item.scss'

const Item = ({ name, calories, carbs, serve, fat_total, protein, food }) => {

    const { foods, setFoods, setTotalCarb, setTotalProtein, setTotalFat, setTotalCalorie } = useFoodContext()
    const { user } = useContext(AuthContext)



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

    const basketItem = foods.find(item => item.name === food.name)

    const addBasket = async () => {
        const newFood = {
            userId: user.user.id,
            foodname: food.name,
            amount: 1,
            protein: Math.round(food.protein_g),
            carb: Math.round(food.carbohydrates_total_g),
            fat: Math.round(food.fat_total_g),
            gram: Math.round(food.serving_size_g),
            calorie: Math.round(food.calories)
        }

        try {
            axios.post("http://localhost:5001/api/v1/userFood/addFood", newFood, { withCredentials: true })
                .then(res => {
                    setFoods([...foods, res.data])
                })
                .catch(
                    err => {
                        console.log(err);
                    }
                )
        } catch (error) {
            console.log(error);
        }

    }
    console.log(foods);
    const removeBasket = () => {
        const checkBasket = foods.find(item => item.name === food.name)
        checkBasket.amount -= 1
        if (checkBasket.amount === 0) {
            setFoods([...foods.filter(item => item.name !== food.name)])
        } else {
            setFoods([...foods.filter(item => item.name !== food.name), checkBasket])
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
