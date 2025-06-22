import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";
import exp from "constants";

export interface CounterState{
    count: number,
    error: string | null
}

const initialState: CounterState = {
    count: 0,
    error: null
}

interface CounterAction{
    type: "increment" | "decrement",
}

export const incrementAsync = createAsyncThunk(
    `counter/incrementAsync`,
    async (count:number)=> {
        new Promise(
            resolve => setTimeout(resolve, 2000)
        );
        return count;
    }
)

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            if (hasError) {
                state.error = "Maximum value reached"
            } else {
                state.count = newCount;
                state.error = null
            }

        },
        decrement(state) {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            if (hasError) {
                state.error = "Minimum value reached"
            } else {
                state.count = newCount;
                state.error = null
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("incrementAsync.pending");
        }).addCase(incrementAsync.fulfilled, (state, action) => {
           state.count += action.payload;
        })
    }

});

export const {increment, decrement } = counterSlice.actions;

export default counterSlice.reducer
//
// export function CounterSlice(state: CounterState = initialState, action: CounterAction){
//     const {type}= action
//     switch (type) {
//         case "increment": {
//             const newCount = state.count +1;
//             const hasError = newCount > 5;
//             return {
//                 ...state,
//                 count: hasError ? state.count : newCount,
//                 error: hasError ? "Maximum value reached" : null
//             }
//         }
//         case "decrement": {
//             const newCount = state.count -1;
//             const hasError = newCount < 0;
//             return {
//                 ...state,
//                 count: hasError ? state.count : newCount,
//                 error: hasError ? "Minimum value reached" : null
//             }
//         }
//         default:
//             return state;
//     }
// }