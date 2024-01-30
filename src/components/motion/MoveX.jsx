import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { useDispatch } from "react-redux";
import { MoveStepsX } from "../../redux/functions/motion";
import { updateHistory } from "../../redux/slice/historySlice";

const MoveX = ({ type, defaultval, compId, val1 }) => {
  const dispatch = useDispatch();

  function handleMove() {
    MoveStepsX(type);
    try {
      dispatch(updateHistory({ type, val1: val1 > 0 ? val1 : defaultval }));
    } catch (error) {
      console.log("🚀 ~ handleMove ~ error:", error);
    }
  }

  return (
    <div id={compId} className="movebox">
      Move X {defaultval} Steps
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full ml-2"
        onClick={() => {
          handleMove();
        }}
      />
    </div>
  );
};

export default MoveX;
