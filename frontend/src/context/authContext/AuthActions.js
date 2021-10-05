import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
} from "../actionTypes/actionTypes";

export const LoginStart = () => ({
    type: LOGIN_START,
});

export const LoginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const LoginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const RegisterStart = () => ({
    type: REGISTER_START,
});

export const RegisterSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
});

export const RegisterFailure = () => ({
    type: REGISTER_FAILURE,
});

export const Logout = () => ({
    type: LOGOUT,
})