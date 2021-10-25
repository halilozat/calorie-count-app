/** Dependencies */
import { createContext, useContext, useEffect, useState } from "react";

/** Services */
import CalorieCountService from "../../services/CalorieCountService";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const me = await CalorieCountService.AuthMe();
                setLoggedIn(true);
                setUserId(me.Id);
                setUserName(me.UserName);
                setUserEmail(me.Email);
                console.log(loggedIn)

            } catch (error) {
                console.log(error)
            }
        })();
    }, []);


    const login = (data) => {
        setLoggedIn(true)
        setUserId(data.user.Id)
        setUserName(data.user.UserName)
        setUserEmail(data.user.Email)
    }

    const logout = async () => {
        setLoggedIn(false);
        setUserId(null);
        setUserName(null);
        setUserEmail(null);

        await CalorieCountService.AuthLogout();
    };

    const values = {
        loggedIn,
        userId,
        userName,
        userEmail,
        login,
        logout
    }


    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)