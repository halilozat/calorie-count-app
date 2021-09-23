import { createContext, useContext, useState } from "react";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {

    const [status, setStatus] = useState('idle');

    const [basket, setBasket] = useState([])
    const [macros, setMacros] = useState({
        carb: 250,
        protein: 100,
        fat: 50,
    });

    const [totalCarb, setTotalCarb] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalCalorie, setTotalCalorie] = useState(0);

    const resetBasket = () => {
        setBasket([])
    }



    const values = {
        basket,
        setBasket,
        macros,
        setMacros,
        totalCarb,
        setTotalCarb,
        totalProtein,
        setTotalProtein,
        totalFat,
        setTotalFat,
        totalCalorie,
        setTotalCalorie,
        resetBasket
    }

    return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>
}

export const useFoodContext = () => useContext(FoodContext);