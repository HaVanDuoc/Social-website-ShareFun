import React from 'react';
import { useSelector } from 'react-redux';
import { selectedSignInOut } from '../../redux/reducers/SignInOutReducer';
import FormLogin from './FormLogin/index.';
import FormRegister from './FormRegister';

function Authentication() {
    const form = useSelector(selectedSignInOut);
    return form === 'login' ? <FormLogin /> : <FormRegister />;
}

export default Authentication;
