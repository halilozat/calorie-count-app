import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Cookies from 'js-cookie'


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const login = (data) => {
        setLoggedIn(true)
        setUser(data.user)

        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("refresh-token", data.refreshToken);
    }

    const values = {
        loggedIn,
        user,
        login
    }


    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext)

export { AuthContextProvider, useAuth }
