/** Dependencies */
import { Link } from 'react-router-dom';

/** Contexts */
import { useAuth } from '../../../../context/AuthContext/AuthContext';

/** Styles */
import './hamburgerMenu.scss'


const HamburgerMenu = ({ open, handleLogout }) => {
    const { userId } = useAuth();


    return (
        <>
            <div className={open ? "menu active trans_800" : "menu trans_800"}>
                <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                    <ul className="align-items-center justify-content-start">
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
                    </ul>
                </div>
                <div className="menu_button d-flex flex-row align-items-center justify-content-start ml-auto">
                    {
                        userId ?
                            <a onClick={handleLogout} style={{ textDecoration: "none", color: "white" }}>LOGOUT</a>
                            :
                            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                <a>LOGIN</a>
                            </Link>
                    }
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu
