import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";
import SignInOutReducer from "./SignInOutReducer";
import PostReducer from './PostReducer'

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Modal: ModalReducer,
    Form: SignInOutReducer,
    Post: PostReducer,
})

export default rootReducer