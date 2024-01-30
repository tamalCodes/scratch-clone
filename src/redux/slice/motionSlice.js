import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moveSteps: 0,
  spriteAngle: 0,
};

const elname = "sprite0";

const motionSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {
    moveStepsX: (state, action) => {
      const el = document.getElementById(`${elname}-div`);
      const currentLeft = el.offsetLeft;
      el.style.position !== "relative" && (el.style.position = "relative");

      const newLeft = currentLeft + parseInt(action.payload);
      el.style.left = newLeft + "px";
    },

    moveStepsY: (state, action) => {
      const el = document.getElementById(`${elname}-div`);
      const top = el.offsetTop;
      el.style.position !== "relative" && (el.style.position = "relative");
      el.style.top = top + parseInt(action.payload) + "px";
    },

    rotateClockwise: (state, action) => {
      const el = document.getElementById(`${elname}`);
      const currentAngle = state.spriteAngle;
      const newAngle = currentAngle + parseInt(action.payload);

      el.style.transform = `rotate(${newAngle}deg)`;
      state.spriteAngle = newAngle;
    },

    rotateAntiClockwise: (state, action) => {
      const el = document.getElementById(`${elname}`);
      const currentAngle = state.spriteAngle;
      const newAngle = currentAngle - parseInt(action.payload);

      el.style.transform = `rotate(${newAngle}deg)`;
      state.spriteAngle = newAngle;
    },

    goToXY: (state, action) => {
      const el = document.getElementById(`${elname}-div`);
      el.style.position !== "relative" && (el.style.position = "relative");
      el.style.left = parseInt(action.payload.x) + "px";
      el.style.top = parseInt(action.payload.y) + "px";
    },
  },
});

export const {} = motionSlice.actions;
export default motionSlice.reducer;
