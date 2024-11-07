import { createSlice } from "@reduxjs/toolkit";

const PIN_CODE = "1156";

interface KeypadAccessState {
  input: string;
  isAccessGranted: boolean | null;
}

const initialState: KeypadAccessState = {
  input: "",
  isAccessGranted: null,
};

export const KeypadAccessSlice = createSlice({
  name: "keypad",
  initialState,
  reducers: {
    addInput: (state, action) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    removeInput: (state) => {
      state.input = state.input.slice(0, -1);
    },
    submitInput: (state) => {
      if (state.input === PIN_CODE) {
        state.isAccessGranted = true;
      } else {
        state.isAccessGranted = false;
      }
    },
    resetInput: (state) => {
      state.input = "";
      state.isAccessGranted = null;
    },
  },
});

export const KeypadAccessReducer = KeypadAccessSlice.reducer;

export const { addInput, removeInput, submitInput, resetInput } =
  KeypadAccessSlice.actions;
