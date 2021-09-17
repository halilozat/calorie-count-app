import React from 'react'
import './register.scss'

const Register = () => {
    return (
        <div className="register-form">
            <form className="register">
                <h1 className="register-header">Register</h1>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Register</button>
                <a href="">I already have an account</a>
            </form>
        </div>
    )
}

export default Register
