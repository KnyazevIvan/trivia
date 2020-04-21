import { combineReducers } from "redux";
import { appReducer } from "./appReducer";

export const RootReducer = combineReducers({
app:appReducer
})