import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    updateHistory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateHistory } = historySlice.actions;
export default historySlice.reducer;
