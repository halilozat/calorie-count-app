import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001/api/v1' })

export const getApiData = async (query, dispatch) => {
    dispatch({ type: "GET_DATA_START" });
    try {
        const res = await API.post('/food/getFoods', query)
        dispatch({ type: "GET_DATA_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_DATA_FAILURE", payload: error })
    }
}


export const registerCall = async (userCredential, dispatch) => {
    dispatch({ type: "REGISTER_START" });
    try {
        const res = await API.post("/auth/register", userCredential, { withCredentials: true });
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "REGISTER_FAILURE", payload: error });
    }
};

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await API.post("/auth/login", userCredential, { withCredentials: true });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
};

export const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT" });
};
