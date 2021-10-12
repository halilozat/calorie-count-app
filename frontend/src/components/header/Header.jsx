/** Images */
import logoImg from '../../assets/images/logo.png'

/** Contexts */
import { useAuth } from '../../context/authContext/AuthContext';

/** Styles */
import './header.scss'

/** Dependencies */
import { useHistory } from 'react-router';
import Cookies from 'js-cookie'


const Header = () => {
    const { logout } = useAuth();
    const history = useHistory()


    const handleLogout = () => {

        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");

        Cookies.remove("access");
        Cookies.remove("refresh");

        history.push("/login");

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
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
