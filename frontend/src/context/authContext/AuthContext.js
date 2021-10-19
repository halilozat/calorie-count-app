/** Dependencies */
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

/** Services */
import CalorieCountService from "../../services/CalorieCountService";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {

                const me = await CalorieCountService.AuthMe();
                setLoggedIn(true);
                setUser(me);
                setLoading(false);

            } catch (e) {
                setLoading(false);
            }
        })();
    }, []);


    const login = (data) => {
        setLoggedIn(true)
        setUser(data)

        console.log(data)
        console.log(data.UserName)

    }

    const logout = async (callback) => {
        setLoggedIn(false);
        setUser(null);

        await CalorieCountService.AuthLogout();

        callback()
    };

    const values = {
        loggedIn,
        user,
        login,
        logout
    }


    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)