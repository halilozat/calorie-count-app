import React from 'react'
import './login.scss'

const Login = () => {
    return (
        <div className="login-form">
            <form className="login">
                <h1 className="login-header">Login</h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <a href="/register">I don't have an account</a>
            </form>
        </div>
    )
}

export default Login
