import React, { useContext, useState, useEffect } from 'react'
import { logoutCall } from '../../apiCalls'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../../context/authContext/AuthContext';
import './header.scss'
import { useLocation, useHistory } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
import { logout, getAccessToken } from '../../redux/auth/AuthActions'
import decode from 'jwt-decode'

const Header = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState()

    // const { user, dispatch } = useContext(AuthContext);

    const exit = async (id) => {
        await dispatch(logout(id))
        localStorage.removeItem('user')
        setUser(null)
        history.push('/login')
    }

    const renewAccessToken = async (id) => {
        await dispatch(getAccessToken(id))
        setUser(JSON.parse(localStorage.getItem('user')))
    }

    useEffect(() => {
        if (localStorage.getItem('user') && !user) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        const interval = setInterval(() => {
            const accessToken = user?.accessToken

            if (accessToken) {
                const decodedAccessToken = decode(accessToken)

                if (decodedAccessToken.exp * 1000 < new Date().getTime()) {
                    console.log(decodedAccessToken.exp)
                    renewAccessToken(user.user._id)
                }
            }
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [location, user])

    const handleLogout = () => {
        logoutCall(
            dispatch
        )
    }

    return (
        <>
            <header className="header">
                <img className="logo" src={logoImg} alt="" />
                <nav>
                    <ul className="nav__links">
                        <li><div>Home</div></li>
                        <li><div>Calorie Calc</div></li>
                        <li><div>My Macros</div></li>
                    </ul>
                </nav>
                <div className="logout">
                    <button
                        onClick={(e) => {
                            exit(user.user.id)
                        }}
                    >Logout
                    </button></div>
            </header>
        </>
    )
}

export default Header
