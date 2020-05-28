import { combineReducers } from "redux";
import authReducer from "./authReducer";

//below you would add each reducer and give it a key name
//to be reference when components consume state as props
export default combineReducers({
   auth: authReducer,
});
