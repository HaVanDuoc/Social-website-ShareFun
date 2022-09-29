import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants'

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

        default:
            return state
    }
}

export const selectedUser = state => state.Auth.user
export const selectorError = state => state.Auth.error

export default AuthReducer