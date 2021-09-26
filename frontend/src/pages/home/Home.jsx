import React from 'react'
import Macros from '../../components/macros/Macros';
import Basket from '../../components/basket/Basket';
import CalorieFinder from '../../components/calorieFinder/CalorieFinder'
import Header from '../../components/header/Header';
import { useFoodContext } from '../../context/foodContext/FoodContext';
import './home.scss'


const Home = () => {

    return (
        <div >
            <Header />

            <div className="home">

                <Macros />
                <CalorieFinder />

                {/* {
                foods > 0 && (
                    <Basket />
                )
            } */}

                <Basket />

            </div>
        </div>
    )
}

export default Home
