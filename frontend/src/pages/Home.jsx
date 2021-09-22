import React from 'react'
import '../App.css';
import Macros from '../components/macros/Macros';
import { useState, useEffect } from 'react';
import foods from '../foods.json';
import Food from '../components/Food';
import Basket from '../components/Basket';
import CalorieFinder from '../components/calorieFinder/CalorieFinder'
import Header from '../components/header/Header';


const Home = () => {

    const [macros, setMacros] = useState({
        carb: 250,
        protein: 100,
        fat: 50,
    });

    const [basket, setBasket] = useState([]);

    const resetBasket = () => {
        setBasket([])
    }

    /*
      tek bir total'de tutmaya çalış! 
    */
    const [totalCarb, setTotalCarb] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);



    useEffect(() => {
        setTotalCarb(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.id === item.id).carb))
                    )
                );
            }, 0)
        )
        setTotalProtein(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.id === item.id).protein))
                    )
                );
            }, 0)
        )
        setTotalFat(
            basket.reduce((acc, item) => {
                return (
                    (
                        acc + (item.amount * (foods.find(food => food.id === item.id).fat))
                    )
                );
            }, 0)
        )
    }, [basket]);


    return (
        <div>

            <Header />


            <CalorieFinder />

            <Macros
                totalCarb={totalCarb}
                totalProtein={totalProtein}
                totalFat={totalFat}
                macros={macros}
            />




            {/* <div className="container foods">
                {foods.map((food) => (
                    <Food
                        key={food.id}
                        totalCarb={totalCarb}
                        totalProtein={totalProtein}
                        totalFat={totalFat}
                        macros={macros}
                        basket={basket}
                        setBasket={setBasket}
                        food={food}
                    />
                ))}
            </div>
            
            {
                totalProtein > 0 && (
                    <Basket
                        resetBasket={resetBasket}
                        foods={foods}
                        totalCarb={totalCarb}
                        totalProtein={totalProtein}
                        totalFat={totalFat}
                        basket={basket}
                    />
                )
            } */}


        </div>
    )
}

export default Home
