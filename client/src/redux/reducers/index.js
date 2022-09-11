import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ModalLoginReducer from "./ModalLoginReducer";

const rootReducer = combineReducers({
    AuthReducer,
    ModalLogin: ModalLoginReducer
})

export default rootReducer