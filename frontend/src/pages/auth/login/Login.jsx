/** Dependencies */
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

/** Services */
import CalorieCountService from '../../../services/CalorieCountService';

/** Contexts */
import { useAuth } from "../../../context/AuthContext/AuthContext";

/** Stylesheets */
import './login.scss'



const Login = () => {
    const { login } = useAuth();
    const history = useHistory()

    const email = useRef();
    const password = useRef();


    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await CalorieCountService.AuthLogin({
                Email: email.current.value,
                Password: password.current.value
            })

            login(loginResponse.data)
            history.push("/")
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="login-form">

            <div className="auth-container">
                <div className="auth-left">
                    <div className="auth-header">
                        <h2 className="animation a1">Login Page!</h2>
                    </div>
                    <form className="auth-form" onSubmit={handleClick}>
                        <input
                            type="email"
                            className="form-field animation a3"
                            placeholder="Email *"
                            required
                            ref={email}
                        />
                        <input
                            type="password"
                            className="form-field animation a4"
                            placeholder="Password *"
                            required
                            ref={password}
                        />
                        <p className="animation a5">
                            <Link to="/register">
                                Create a New Account
                            </Link>
                        </p>
                        <button type="submit" className="animation a6">LOGIN</button>
                    </form>
                </div>
                <div className="right-login"></div>
            </div>
        </div>
    )
}

export default Login
