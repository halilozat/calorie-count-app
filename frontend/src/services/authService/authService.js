import axios from 'axios'
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../context/actionTypes/actionTypes';


const API = axios.create({ baseURL: 'http://localhost:5001/api/v1/auth' })

axios.interceptors.request.use(
    function (config) {
        const allowedOrigins = ["http://localhost:5001/api/v1/auth"]

        const token = localStorage.getItem('access-token')

        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = token
        }

        return config;
    }
)

export const fetchRegister = async (input) => {
    const { data } = await API.post("/register", input)

    return data;
};

export const fetchLogin = async (input) => {
    const { data } = await API.post("/login", input)

    return data;
};

export const fetchMe = async () => {
    const { data } = await API.post("/me")
    return data;
};

export const fetchLogout = async () => {
    const { data } = await API.post("/logout",
        {
            refresh_token: localStorage.getItem("refresh-token"),
        }
    );

    return data;
};






export const registerCall = async (userCredential, dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
        const res = await API.post("/register", userCredential, { withCredentials: true });
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};

export const signup = async (formData) => {
    await API.post("/register", formData)
}

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: LOGIN_START });
    try {
        const res = await API.post("/login", userCredential, { withCredentials: true });
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
};

export const logoutCall = async (dispatch) => {
    dispatch({ type: LOGOUT });
};