import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import UndoIcon from "@mui/icons-material/Undo";
import React from "react";
import { useDispatch } from "react-redux";
import { RotateAntiClockwise } from "../../redux/functions/motion";
import { updateHistory } from "../../redux/slice/historySlice";

const TurnAntiClockWise = ({ type, defaultval, compId, val1 }) => {
  const dispatch = useDispatch();

  function handleAntiClockwise() {
    RotateAntiClockwise(type);

    try {
      dispatch(updateHistory({ type, val1: val1 > 0 ? val1 : defaultval }));
    } catch (error) {
      console.log("🚀 ~ handleAntiClockwise ~ error:", error);
    }
  }

  return (
    <div className="movebox">
      <div className="text-white">
        Turn <UndoIcon className="moveicon" /> {defaultval} Degrees
      </div>
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full ml-2"
        onClick={() => {
          handleAntiClockwise();
        }}
      />
    </div>
  );
};

export default TurnAntiClockWise;
