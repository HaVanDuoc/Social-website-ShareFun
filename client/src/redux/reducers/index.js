import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";
import SignInOutReducer from "./SignInOutReducer";

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Modal: ModalReducer,
    Form: SignInOutReducer,
})

export default rootReducer