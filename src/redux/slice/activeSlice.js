import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeView: "midarea",
};

const activeSlice = createSlice({
  name: "active_view",
  initialState,
  reducers: {
    toggleActiveView: (state) => {
      state.activeView === "midarea"
        ? (state.activeView = "history")
        : (state.activeView = "midarea");
    },
  },
});

export const { toggleActiveView } = activeSlice.actions;
export default activeSlice.reducer;
