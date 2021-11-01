import textReducer from "./placeholderText";
import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        placeholderText: textReducer,
      
    }
);



export default rootReducer;