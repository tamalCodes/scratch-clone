import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GotoXY } from "../../redux/functions/motion";
import { updateHistory } from "../../redux/slice/historySlice";

const Goto_XY = ({ type, defaultval, compId, val1, val2 }) => {
  const [state, setState] = useState({
    x: val1 > 0 ? val1 : 0,
    y: val2 > 0 ? val2 : 0,
  });

  const dispatch = useDispatch();
  function gotoHandler() {
    GotoXY(state.x, state.y);

    try {
      dispatch(updateHistory({ type, val1: state.x, val2: state.y }));
    } catch (error) {
      console.log("🚀 ~ gotoHandler ~ error:", error);
    }
  }

  return (
    <div className="movebox" id={compId}>
      X
      <input
        className="moveinput w-[50px]"
        type="number"
        value={state.x}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setState({ ...state, x: parseInt(e.target.value) });
        }}
      />
      Y
      <input
        className="moveinput w-[50px]"
        type="number"
        value={state.y}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setState({ ...state, y: parseInt(e.target.value) });
        }}
      />
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full"
        onClick={() => {
          gotoHandler();
        }}
      />
    </div>
  );
};

export default Goto_XY;
