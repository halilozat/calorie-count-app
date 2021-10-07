import { AUTH, SIGNUP_FAIL, SIGNIN_FAIL, LOGOUT, LOGOUT_FAIL } from "../actionTypes/actionTypes";
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

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, payload: data })

        history.push('/')
    } catch (error) {
        dispatch({
            type: SIGNIN_FAIL,
            payload: error.message
        })
    }
}

export const logout = (id) => async (dispatch) => {
    try {
        const { message } = await api.logOut(id)

        dispatch({ type: LOGOUT, payload: message })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.message
        })
    }
}
