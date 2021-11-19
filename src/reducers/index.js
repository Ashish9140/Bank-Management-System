import { combineReducers } from "redux";
import userReducer from "./user";
import errorReducer from "./error";
import siteReducer from "./site";
export default combineReducers({
    userInfo: userReducer,
    siteInfo: siteReducer,
    error: errorReducer
 })
