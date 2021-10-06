import { useContext, useRef } from "react";
import { loginCall } from "../../services/authService/authService";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";
import './login.scss'

const Login = () => {

    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };


    return (
        <div classNameName="login-form">

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
