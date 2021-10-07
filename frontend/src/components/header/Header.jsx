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


    const { user, dispatch } = useContext(AuthContext);

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
                <div className="logout"><button onClick={handleLogout}>Logout</button></div>
            </header>
        </>
    )
}

export default Header
