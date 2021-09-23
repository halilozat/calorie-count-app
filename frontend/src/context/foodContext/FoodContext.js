import { createContext, useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {

    const { user } = useContext(AuthContext)

    const [status, setStatus] = useState('idle');

    const [basket, setBasket] = useState([])
    const [macros, setMacros] = useState(user ? {
        carb: user.user.userCarb || 0,
        protein: user.user.userProtein || 0,
        fat: user.user.userFat || 0,
    } : {});

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