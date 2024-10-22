import { combineReducers } from "redux";
import { moviesReducer } from "./reducer";


export default combineReducers({
    movies :  moviesReducer
})