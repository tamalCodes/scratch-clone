import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const midSlice = createSlice({
  name: "mid",
  initialState,
  reducers: {
    runAllInMid: (state, action) => {

    },

    updateMidState: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { runAllInMid, updateMidState } = midSlice.actions;
export default midSlice.reducer;
