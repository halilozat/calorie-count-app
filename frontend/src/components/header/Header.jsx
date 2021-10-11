/** Images */
import logoImg from '../../assets/images/logo.png'

/** Contexts */
import { useAuth } from '../../context/authContext/AuthContext';

/** Styles */
import './header.scss'

const Header = ({ history }) => {
    const { logout } = useAuth();



    const handleLogout = () => {
        logout(() => {
            history.push("/login");
        });
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
