import {createStore} from "redux";
import CounterReducer from "../slices/./counterSlice";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../reducers/rootReducer";
import exp from "constants";

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;