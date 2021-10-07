import { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from '../../redux/auth/AuthActions'
import './login.scss'
import { useDispatch } from "react-redux";

const Login = ({ history }) => {

    const initialFormData = {
        email: '',
        password: '',
    }
    const [form, setForm] = useState(initialFormData)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(signin(form, history))
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
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                        <input
                            type="password"
                            className="form-field animation a4"
                            placeholder="Password *"
                            required
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
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
