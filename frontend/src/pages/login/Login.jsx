import { useContext, useRef } from "react";
import './login.scss'
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

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
        <div className="login-form">
            <form className="login" onSubmit={handleClick}>
                <h1 className="login-header">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={email}
                />
                <input
                    placeholder="Password"
                    type="password"
                    required
                    minLength="6"
                    ref={password}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    {isFetching ? (
                        "loading..."
                    ) : (
                        "Log In"
                    )}
                </button>
                <div>
                    {isFetching ? (
                        "loading..."
                    ) : (
                        <Link to="/register">
                            Create a New Account
                        </Link>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Login
