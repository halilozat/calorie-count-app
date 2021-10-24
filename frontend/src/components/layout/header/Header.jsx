/** Dependencies */
import { useHistory } from 'react-router';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';

/** Contexts */
import { useAuth } from '../../../context/AuthContext/AuthContext';

/** Images */
import logoImg from '../../../assets/images/dot.png'

/** Styles */
import './header.scss'


const Header = () => {
    const { logout, loggedIn } = useAuth();
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
                                    <div className="logo d-flex flex-row align-items-center justify-content-start">
                                        <img src={logoImg} alt="" />
                                        <div>Fit<span>Foods</span></div>
                                    </div>
                                </a>
                                <nav className="main_nav">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li ><a href="index.html">Home</a></li>
                                        <li><a href="services.html">Meal Calendar</a></li>
                                        <li><a href="blog.html">My Macros</a></li>
                                    </ul>
                                </nav>
                                <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                                    <div>LOGIN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
                <div className="hamburger">
                    <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
                        <span>menu</span>
                        <div className="hamburger_container">
                            <div className="menu_hamburger">
                                <div className="line_1 hamburger_lines" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
                                <div className="line_2 hamburger_lines" style={{ visibility: "inherit", opacity: 1 }}></div>
                                <div className="line_3 hamburger_lines" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu trans_800">
                <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="services.html">Meal Calendar</a></li>
                        <li><a href="blog.html">My Macros</a></li>
                    </ul>
                </div>
                <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
                    <span>LOGIN</span>
                </div>
            </div>
        </div>
    )
}

export default Header
