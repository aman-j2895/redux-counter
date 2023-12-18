"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, counterSlice, incrementIfOddAsync ,ReduxState} from "@/lib/redux";
import styles from "./counter.module.css";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";



export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(() => '')

  // Create a state named incrementAmount
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(counterSlice.actions.decreament())
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(counterSlice.actions.increment())
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  aria-label="Set increment amount" />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(counterSlice.actions.incrementByAmount({amount: parseInt(amount)}))
            setAmount(()=>'')
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
             (dispatch as ThunkDispatch<ReduxState, unknown, AnyAction>)(incrementIfOddAsync(parseInt(amount)))
             setAmount(()=>'')
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
