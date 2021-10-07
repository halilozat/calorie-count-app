import {
    AUTH,
    SIGNUP_FAIL,
    SIGNIN_FAIL,
    LOGOUT,
    LOGOUT_FAIL,
    REFRESH_ACCESS_TOKEN_FAIL,
    REFRESH_ACCESS_TOKEN_SUCCESS
} from "../actionTypes/actionTypes";

const authReducer = (state = { userData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('user', JSON.stringify(action.payload))
            return { ...state, userData: action.payload }

        case SIGNIN_FAIL:
            return { error: action.payload }

        case SIGNUP_FAIL:
            return { error: action.payload }

        case LOGOUT:
            localStorage.removeItem('user')
            return { ...state, userData: null }

        case LOGOUT_FAIL:
            return { error: action.payload }

        case REFRESH_ACCESS_TOKEN_SUCCESS:
            const data = { user: state.userData.user, accessToken: action.payload }

            localStorage.setItem('user', JSON.stringify(data))
            return { ...state, userData: data }

        case REFRESH_ACCESS_TOKEN_FAIL:
            return { error: action.payload }

        default:
            return state
    }
}

export default authReducer