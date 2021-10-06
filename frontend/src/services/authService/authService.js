import axios from 'axios'
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../context/actionTypes/actionTypes';


const API = axios.create({ baseURL: 'http://localhost:5001/api/v1/auth' })


export const singUp = async (FormData) => await API.post('/register', FormData)






export const registerCall = async (userCredential, dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
        const res = await API.post("/register", userCredential, { withCredentials: true });
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};

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