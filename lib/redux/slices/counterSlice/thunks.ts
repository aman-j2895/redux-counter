/* Instruments */
import { counterSlice, type ReduxThunkAction } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  async(dispatch, getState) => {
    // update only if currentValue is odd
      const currentState = getState();
      const currentValue = currentState.counter.value
      if (currentValue % 2 !== 0) {
          dispatch(counterSlice.actions.incrementByAmount({amount: amount}));
      }
  };
