import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  input: string;
}

const initialState: CalculatorState = {
  input: ''
};

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    removeInput: (state) => {
      state.input = state.input.slice(0, -1);
    },
    resetInput: (state) => {
      state.input = '';
    },
    submitInput: (state) => {
      try {
        const result = eval(state.input);
        if (isNaN(result)) {
          state.input = 'Invalid input';
        } else {
          state.input = String(result);
        }
      } catch (error) {
        console.error('Error evaluating expression:', error);
        state.input = 'Error';
      }
    },
  },
});

export const CalculatorReducer = CalculatorSlice.reducer;

export const { addInput, removeInput, resetInput, submitInput } = CalculatorSlice.actions;
