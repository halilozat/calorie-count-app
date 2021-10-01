import React, { useContext, useRef } from 'react'
import './register.scss'
import axios from "axios";
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

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            registerCall(
                {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
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
        <div className="register-form">
            <form className="register" onSubmit={handleClick}>
                <h1 className="register-header">Register</h1>
                <input
                    type="email"
                    placeholder="Email *"
                    required
                    ref={email}
                />
                <input
                    type="text"
                    placeholder="Username *"
                    ref={username}
                    required
                />
                <input
                    placeholder="Password *"
                    required
                    ref={password}
                    type="password"
                    minLength="6"
                />
                {/* <input
                    placeholder="Password Again *"
                    required
                    ref={passwordAgain}
                    type="password"
                /> */}
                {/* <input
                    placeholder="Your Daily Protein *"
                    required
                    ref={userProtein}
                    type="text"
                />
                <input
                    placeholder="Your Daily Carbohydrate *"
                    required
                    ref={userCarb}
                    type="text"
                />
                <input
                    placeholder="Your Daily Fat *"
                    required
                    ref={userFat}
                    type="text"
                /> */}
                <button type="submit">Register</button>
                <div href="">
                    <Link to="/login">
                        Log into Account
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register
