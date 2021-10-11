import { createContext, useContext, useReducer, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import FoodReducer from './FoodReducer'

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {

    const [dispatch] = useReducer(FoodReducer);



    const { user } = useContext(AuthContext)

    // const [status, setStatus] = useState('idle');

    const [foods, setFoods] = useState([])
    const [macros, setMacros] = useState(user ? {
        carb: user.user.userCarb || 0,
        protein: user.user.userProtein || 0,
        fat: user.user.userFat || 0,
    } : {});

    const [totalCarb, setTotalCarb] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalCalorie, setTotalCalorie] = useState(0);

    // const [state, setState] = useState({
    //     foods: [],
    //     macros: {
    //         carb: user?.user.userCarb || 0,
    //         protein: user.user.userProtein || 0,
    //         fat: user.user.userFat || 0,
    //     }
    // })

    // setState((previus) => ({
    //     ...previus,
    //     macros: {
    //         ...previus.macros,
    //         carb: 10
    //     }
    // }))


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