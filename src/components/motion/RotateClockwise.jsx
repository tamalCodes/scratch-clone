import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RedoIcon from "@mui/icons-material/Redo";
import React from "react";
import { useDispatch } from "react-redux";
import { RotateClockwise } from "../../redux/functions/motion";
import { updateHistory } from "../../redux/slice/historySlice";

const TurnClockWise = ({ type, defaultval, compId, val1 }) => {
  const dispatch = useDispatch();

  function handleClockwise() {
    RotateClockwise(type);

    try {
      dispatch(updateHistory({ type, val1: val1 > 0 ? val1 : defaultval }));
    } catch (error) {
      console.log("🚀 ~ handleClockwise ~ error:", error);
    }
  }

  return (
    <div className="movebox">
      <div className="text-white">
        Turn <RedoIcon className="moveicon" /> {defaultval} Degrees
      </div>

      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full ml-2"
        onClick={() => {
          handleClockwise();
        }}
      />
    </div>
  );
};

export default TurnClockWise;
