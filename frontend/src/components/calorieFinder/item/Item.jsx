import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useFoodContext } from '../../../context/foodContext/FoodContext'
import './item.scss'

const Item = ({ name, calories, carbs, serve, fat_total, protein, food }) => {

    const { basket, setBasket, setTotalCarb, setTotalProtein, setTotalFat, setTotalCalorie } = useFoodContext()
    const { user } = useContext(AuthContext)



    useEffect(() => {

        setTotalCarb(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (basket.find(food => food.name === item.name).carb))
                    )
                );
            }, 0)
        )

        setTotalProtein(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (basket.find(food => food.name === item.name).protein))
                    )
                );
            }, 0)
        )

        setTotalFat(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (basket.find(food => food.name === item.name).fat))
                    )
                );
            }, 0)
        )

        setTotalCalorie(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (basket.find(food => food.name === item.name).cal))
                    )
                );
            }, 0)
        )
    }, [basket]);

    const basketItem = basket.find(item => item.name === food.name)

    const addBasket = async () => {
        // const checkBasket = basket.find(item => item.name === food.name)
        // if (checkBasket) {
        //     checkBasket.amount += 1
        //     setBasket([...basket.filter(item => item.name !== food.name), checkBasket])
        // } else {
        //     setBasket([...basket, {
        //         name: food.name,
        //         amount: 1,
        //         protein,
        //         fat: fat_total,
        //         carb: carbs,
        //         gram: serve,
        //         cal: calories
        //     }])
        // }

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
            axios.post("http://localhost:5001/api/userFood/addFood", newFood, { withCredentials: true })
                .then(res => {
                    console.log(res);
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

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.name === food.name)
        checkBasket.amount -= 1
        if (checkBasket.amount === 0) {
            setBasket([...basket.filter(item => item.name !== food.name)])
        } else {
            setBasket([...basket.filter(item => item.name !== food.name), checkBasket])
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
                    {
                        basketItem ?
                            <div className='item-del'>
                                <button onClick={removeBasket}>X</button>
                            </div>
                            :
                            <div></div>

                    }
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
