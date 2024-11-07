import { configureStore } from "@reduxjs/toolkit";
import { KeypadAccessReducer } from "../slices/keypadSlice.ts";
import { CalculatorReducer } from "../slices/calculatorSlice.ts";

export const store = configureStore({
  reducer: {
    keypad: KeypadAccessReducer,
    calculator: CalculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
