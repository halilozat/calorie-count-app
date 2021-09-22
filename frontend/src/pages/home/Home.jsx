import React, { useContext } from 'react'
import Macros from '../../components/macros/Macros';
import { useState, useEffect } from 'react';
import foods from '../../foods.json';
import Food from '../../components/Food';
import Basket from '../../components/Basket';
import CalorieFinder from '../../components/calorieFinder/CalorieFinder'
import Header from '../../components/header/Header';
import FoodContext from '../../context/foodContext/FoodContext';


const Home = () => {

    const { totalProtein } = useContext(FoodContext)

    return (
        <div>

            <Header />
            <Macros />
            <CalorieFinder />

            {/* <div className="container foods">
                {foods.map((food) => (
                    <Food
                        key={food.id}
                        food={food}
                    />
                ))}
            </div> */}

            {
                totalProtein > 0 && (
                    <Basket
                        foods={foods}
                    />
                )
            }


        </div>
    )
}

export default Home
