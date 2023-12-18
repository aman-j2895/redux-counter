/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decreament, incrementByAmount loginc here
    increment : (state) => {
      return {...state, value : state.value + 1}
    },
    decreament : (state) => {
      return {...state, value : state.value - 1}
    },
    incrementByAmount : (state, action) => {
      if(!isNaN(action.payload.amount)){
      return {...state, value : state.value + action.payload.amount}
      } 
      return state
    }
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
