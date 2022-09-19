import React from 'react'
import { useSelector } from 'react-redux'
import FormLogin from '../components/FormLogin/index.'
import FormRegister from '../components/FormRegister'
import { selectedSignInOut } from '../redux/reducers/SignInOutReducer'

function SignInOutContainer() {
    const form = useSelector(selectedSignInOut)
    return (
        <React.Fragment>
            {form === 'login' ? <FormLogin /> : <FormRegister />}
        </React.Fragment>
    )
}

export default SignInOutContainer