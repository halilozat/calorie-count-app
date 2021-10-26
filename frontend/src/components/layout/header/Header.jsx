/** Dependencies */
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/** Contexts */
import { useAuth } from '../../../context/AuthContext/AuthContext';

/** Images */
import logoImg from '../../../assets/images/dot.png'
import logoImg2 from '../../../assets/images/logo3.png'

/** Components */
import HamburgerBar from './HamburgerMenu/HamburgerBar';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

/** Styles */
import './header.scss'

const Header = () => {
    const [open, setOpen] = useState(false);
    const { logout, loggedIn, userId } = useAuth();
    const history = useHistory()

    console.log(loggedIn);

    const handleLogout = () => {
        logout()
        history.push("/login");
    }


    return (
        <div className="header-main">
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
                                <a href="#">
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        <div className="logo d-flex flex-row align-items-center justify-content-start">
                                            <img className="logoImg" src={logoImg2} alt="" />
                                            <div>Fit<span>Foods</span></div>
                                        </div>
                                    </Link>
                                </a>
                                <nav className="main_nav">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li >
                                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to="/foodCalendar" style={{ textDecoration: "none", color: "white" }}>
                                                <a>Meal Calendar</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                                <a>My Macros</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                                                {
                                                    userId ?
                                                        <a onClick={handleLogout} style={{ textDecoration: "none", color: "white" }}>LOGOUT</a>
                                                        :
                                                        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                                            <a>LOGIN</a>
                                                        </Link>
                                                }
                                            </div>

                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HamburgerBar open={open} setOpen={setOpen} />

            <HamburgerMenu open={open} handleLogout={handleLogout} />
        </div>
    )
}

export default Header
