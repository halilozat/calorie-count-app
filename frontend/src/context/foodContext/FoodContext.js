import { createContext, useContext, useReducer, useState } from "react";
import { useAuth } from "../authContext/AuthContext";
import FoodReducer from './FoodReducer'

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {

    const [dispatch] = useReducer(FoodReducer);


    const { user } = useAuth();

    // const [status, setStatus] = useState('idle');

    const [foods, setFoods] = useState([])
    const [macros, setMacros] = useState(user ? {
        carb: 0,
        protein: 0,
        fat: 0,
    } : {});

    const [totalCarb, setTotalCarb] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalCalorie, setTotalCalorie] = useState(0);



    const values = {
        foods,
        setFoods,
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
        dispatch
    }

    return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>
}

export const useFoodContext = () => useContext(FoodContext);