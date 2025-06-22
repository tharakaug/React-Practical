import {combineReducers} from "redux";
import counterReducer from "../slices/counterSlice";

export const rootReducer = combineReducers({
    counter: counterReducer,
    //TODO - add other reducers
});

export type RootState = ReturnType<typeof rootReducer>;