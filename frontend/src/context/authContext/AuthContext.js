import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import Cookies from 'js-cookie'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    user: Cookies.get("user") || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // useEffect(() => {
    //     const deneme = JSON.stringify(state.user)
    //     const deneme2 = JSON.stringify(state.user)
    //     Cookies.set('user', deneme)
    //     Cookies.set('jwt', deneme2)
    // }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
