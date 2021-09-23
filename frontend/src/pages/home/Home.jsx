import React from 'react'
import Macros from '../../components/macros/Macros';
import Basket from '../../components/basket/Basket';
import CalorieFinder from '../../components/calorieFinder/CalorieFinder'
import Header from '../../components/header/Header';
import { useFoodContext } from '../../context/foodContext/FoodContext';


const Home = () => {

    const { totalProtein } = useFoodContext()

    return (
        <div>

            <Header />
            <Macros />
            <CalorieFinder />

            {
                totalProtein > 0 && (
                    <Basket />
                )
            }


        </div>
    )
}

export default Home
