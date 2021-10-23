/** Dependencies */
import { useHistory } from 'react-router';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';

/** Contexts */
import { useAuth } from '../../../context/AuthContext/AuthContext';

/** Images */
import logoImg from '../../../assets/images/logo.png'

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
                                    <div className="logo d-flex flex-row align-items-center justify-content-start"><img className="logoImg" src={logoImg} alt="" /><div>Fit<span>Foods</span></div></div>
                                </a>
                                <nav className="main_nav">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="services.html">Meal Calendar</a></li>
                                        <li><a href="blog.html">My Macros</a></li>
                                        <li><a href="blog.html" className="phone d-flex flex-row align-items-center justify-content-start ml-auto"></a></li>
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

        </div>
    )
}

export default Header
