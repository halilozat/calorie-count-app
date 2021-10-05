import React, { useContext, useRef } from 'react'
import './register.scss'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { registerCall } from '../../apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';

const Register = () => {
    const history = useHistory();
    const { isFetching, dispatch } = useContext(AuthContext);

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            registerCall(
                {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                    confirmPassword: confirmPassword.current.value,
                },
                dispatch
            )
                .then(res => console.log(res))
                .catch(error => console.log(error))
            history.push("/login");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="auth-container">
            <div className="auth-left">
                <div className="auth-header">
                    <h2 className="animation a1">Register Page!</h2>
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
                        type="text"
                        className="form-field animation a3"
                        placeholder="Username *"
                        ref={username}
                        required
                    />
                    <input
                        type="password"
                        className="form-field animation a4"
                        placeholder="Password *"
                        ref={password}
                        minLength="6"
                        required
                    />
                    <input
                        type="password"
                        className="form-field animation a4"
                        placeholder="Password Again *"
                        ref={confirmPassword}
                        minLength="6"
                        required
                    />
                    <p className="animation a5"><Link to="/login">
                        Log into Account
                    </Link>
                    </p>
                    <button type="submit" className="animation a6">REGISTER</button>
                </form>
            </div>
            <div className="right-register"></div>
        </div>
    )
}

export default Register
