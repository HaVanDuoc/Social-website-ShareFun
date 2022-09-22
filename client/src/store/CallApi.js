import axios from 'axios'

const LoginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await axios.post("/auth/login", userCredential)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        localStorage.setItem('user', JSON.stringify(res.data));
        localStorage.setItem('isLoggedIn', true)
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error })
    }
}

export default LoginCall