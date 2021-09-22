import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1 className="logo">LOGO</h1>
                <nav>
                    <ul className="nav__links">
                        <li><div>Home</div></li>
                        <li><div>Calorie Calc</div></li>
                        <li><div>My Macros</div></li>
                    </ul>
                </nav>
                <div className="cta"><button>Logout</button></div>
            </header>
        </div>
    )
}

export default Header
