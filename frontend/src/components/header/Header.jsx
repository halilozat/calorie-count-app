/** Images */
import logoImg from '../../assets/images/logo.png'

/** Contexts */
import { useAuth } from '../../context/authContext/AuthContext';

/** Styles */
import './header.scss'

/** Dependencies */
import { useHistory } from 'react-router';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';


const Header = () => {
    const { logout } = useAuth();
    const history = useHistory()


    const handleLogout = () => {

        localStorage.removeItem("access-token");
        Cookies.remove("access");

        history.push("/login");

    }

    return (
        <>
            <header className="header">
                <img className="logo" src={logoImg} alt="" />
                <nav>
                    <ul className="nav__links">
                        <li><Link to="/" style={{ textDecoration: "none", color: "white" }}><div>Home</div></Link></li>
                        <li><Link to="/foodCalendar" style={{ textDecoration: "none", color: "white" }}><div>Food Calendar</div></Link></li>
                        <li><div>My Macros</div></li>
                    </ul>
                </nav>
                <div className="logout">
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
