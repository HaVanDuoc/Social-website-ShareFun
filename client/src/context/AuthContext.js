import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    user: null,
    isFecthing: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

    return (
        <AuthContextProvider
            value={{
                user: state.user,
                isFecthing: state.isFecthing,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContextProvider>
    );
};
