import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../redux/auth/AuthActions';
import Message from '../../components/message/Message';
import './register.scss'

const Register = ({ history }) => {
    const initialFormData = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const userState = useSelector((state) => state.user)
    const { error } = userState
    const [form, setForm] = useState(initialFormData)
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch(signup(form))
    }


    return (
        <div className="auth-container">
            <div className="auth-left">
                <div className="auth-header">
                    <h2 className="animation a1">Register Page!</h2>
                    {error && <Message>{error}</Message>}
                </div>
                <form className="auth-form" onSubmit={handleClick}>
                    <input
                        type="email"
                        className="form-field animation a3"
                        placeholder="Email *"
                        required
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        className="form-field animation a3"
                        placeholder="Username *"
                        required
                        onChange={(e) =>
                            setForm({ ...form, username: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        className="form-field animation a4"
                        placeholder="Password *"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        minLength="6"
                        required
                    />
                    <input
                        type="password"
                        className="form-field animation a4"
                        placeholder="Password Again *"
                        onChange={(e) =>
                            setForm({ ...form, confirmPassword: e.target.value })
                        }
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
