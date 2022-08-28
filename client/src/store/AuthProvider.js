import { useReducer } from "react"
import AuthContext from "./AuthContext"
import AUTH_INITIAL_STATE from "./AuthInitialState"
import AuthReducer from "./AuthReducer"

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE)

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider