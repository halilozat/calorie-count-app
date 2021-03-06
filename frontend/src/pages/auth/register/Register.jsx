/** Dependencies */
import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

/** Contexts */
import { useAuth } from '../../../context/AuthContext/AuthContext';

/** Services */
import CalorieCountService from '../../../services/CalorieCountService';

/** Stylesheets */
import './register.scss'



const Register = () => {
    const { login } = useAuth()

    const history = useHistory()

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();


    const handleClick = async (e) => {
        e.preventDefault();
        try {

            const registerResponse = await CalorieCountService.AuthRegister(
                {
                    UserName: username.current.value,
                    Email: email.current.value,
                    Password: password.current.value,
                    ConfirmPassword: confirmPassword.current.value,
                },
            )

            login(registerResponse);

            history.push("/");

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
                        required
                        ref={username}
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
