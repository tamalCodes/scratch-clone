import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

const spriteSlice = createSlice({
  name: "sprite",
  initialState,
  reducers: {
    setActiveCharacter: (state, action) => {
      state.active = action.payload;
    },

    addCharacter: (state) => {
      var newId = state.characters.length;

      state.characters.push({
        id: `sprite${newId}`,
        angle: 0,
      });
      setTimeout(() => {
        const el = document.getElementById(`sprite${newId}-div`);
        el.style.position = "relative";
        console.log("🚀 ~ setTimeout ~ el:", el);
        el.style.left = "0px";
        el.style.top = "0px";
      }, 100);
    },
  },
});

export const { addCharacter, setActiveCharacter } = spriteSlice.actions;
export default spriteSlice.reducer;
