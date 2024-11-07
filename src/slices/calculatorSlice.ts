import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  input: string;
  result: string | null;
}

const initialState: CalculatorState = {
  input: "",
  result: null,
};

export const CalculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    removeInput: (state) => {
      state.input = state.input.slice(0, -1);
      state.result = null;
    },
    resetInput: (state) => {
      state.input = "";
      state.result = null;
    },
    submitInput: (state) => {
      try {
        const result = eval(state.input);
        if (isNaN(result)) {
          state.result = "Invalid input";
        }
        state.result = String(result);
      } catch (error) {
        console.error("Error evaluating expression:", error);
        state.result = "Error";
      }
    },
  },
});

export const CalculatorReducer = CalculatorSlice.reducer;

export const { addInput, removeInput, resetInput, submitInput } =
  CalculatorSlice.actions;
