import React from 'react'
import './register.scss'
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                axios.post("http://localhost:5001/api/auth/register", user, { withCredentials: true })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(
                        err => {
                            console.log(err);
                        }
                    )
            } catch (err) {
                console.log(err);
            }
        }
    };


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
                <input
                    placeholder="Password Again *"
                    required
                    ref={passwordAgain}
                    type="password"
                />
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
