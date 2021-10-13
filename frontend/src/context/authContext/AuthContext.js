/** Dependencies */
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Cookies from 'js-cookie'

/** Services */
import { fetchMe, fetchLogout } from "../../services/authService/authService";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {

                const me = await fetchMe();
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
        setUser(data.user)

        console.log(data.user)
        console.log(user)

        localStorage.setItem("access-token", JSON.stringify(data.accessToken));
        Cookies.set("access", data.accessToken);
    }

    const logout = async (callback) => {
        setLoggedIn(false);
        setUser(null);

        await fetchLogout();

        localStorage.removeItem("access-token");
        Cookies.remove("access");

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