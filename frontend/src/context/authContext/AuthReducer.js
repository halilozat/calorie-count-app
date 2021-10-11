import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT,
    AUTH,
    SIGNUP_FAIL
} from "../actionTypes/actionTypes";
import Cookies from 'js-cookie'


const AuthReducer = (state, action) => {
    switch (action.type) {

        case AUTH:
            localStorage.setItem('user', JSON.stringify(action.payload))
            Cookies.set('user', JSON.stringify(action.payload))
            return { ...state, userData: action.payload }

        case SIGNUP_FAIL:
            return { error: action.payload }

        case LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            };

        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };

        case LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            };

        case REGISTER_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            };

        case REGISTER_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };

        case REGISTER_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            };

        case LOGOUT:
            return {
                user: localStorage.removeItem('user'),
                user: Cookies.remove("user"),
                isFetching: false,
                error: false
            };

        default:
            return state;
    }
}

export default AuthReducer;