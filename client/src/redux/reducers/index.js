import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Modal: ModalReducer
})

export default rootReducer