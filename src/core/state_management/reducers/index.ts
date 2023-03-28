import {combineReducers} from "redux";
import {countReducer} from "./countReducer";

const rootReducer = combineReducers({
    countReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
