import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, CURRENT_USER } from '../constants'

export const AUTH_INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
}

const AuthReducer = (state = AUTH_INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
            }
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            }
        case CURRENT_USER:
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }

        default:
            return state
    }
}

export const selectedUser = state => state.Auth.user
export const selectorError = state => state.Auth.error
export const selectorCurrentUser = state => state.Auth.user

export default AuthReducer