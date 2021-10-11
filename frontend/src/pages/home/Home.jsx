import React from 'react'
import Macros from '../../components/macros/Macros';
import Basket from '../../components/basket/Basket';
import CalorieFinder from '../../components/calorieFinder/CalorieFinder'
import Header from '../../components/header/Header';
import './home.scss'


const Home = () => {

    return (
        <div >
            <Header />

            <div className="home">

                <Macros />

                <CalorieFinder />

                <Basket />

            </div>
        </div>
    )
}

export default Home
