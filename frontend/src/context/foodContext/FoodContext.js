/** Dependencies */
import { createContext, useContext, useEffect, useState } from "react";

/** Contexts */
import { useAuth } from "../AuthContext/AuthContext";



const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {

    const { user } = useAuth();

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

    useEffect(() => {
        console.log(foods)
    }, [foods]);

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
    }

    return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>
}

export const useFoodContext = () => useContext(FoodContext);