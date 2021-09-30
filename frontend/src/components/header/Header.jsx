import React, { useContext } from 'react'
import { logoutCall } from '../../apiCalls'
import { AuthContext } from '../../context/authContext/AuthContext';
import './header.scss'
import logoImg from '../../assets/images/logo.png'

const Header = () => {

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        logoutCall(
            dispatch
        )
    }

    return (
        <div>
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
        </div>
    )
}

export default Header
