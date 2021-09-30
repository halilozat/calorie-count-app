
import axios from "axios";



export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("http://localhost:5001/api/auth/login", userCredential, { withCredentials: true });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};

export const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT" });
};

export const apiDataCall = async (query, dispatch) => {
    dispatch({ type: "GET_DATA_START" });
    try {
        const res = await axios.post("http://localhost:5001/api/food/getFoods", query)
        dispatch({ type: "GET_DATA_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_DATA_FAILURE", payload: error })
    }
}