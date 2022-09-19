const initialState = {
    form: 'login'
}

const SignInOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM_LOGIN':
            return {
                form: 'login'
            }
        case 'FORM_REGISTER':
            return {
                form: 'register'
            }

        default:
            return state
    }
}

export const selectedSignInOut = state => state.Form.form

export default SignInOutReducer