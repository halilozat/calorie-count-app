import { AUTH, SIGNUP_FAIL } from "../actionTypes/actionTypes";
import * as api from '../../services/authService/authService'

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, payload: data })
        history.push('/')

    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.message
        })
    }
}