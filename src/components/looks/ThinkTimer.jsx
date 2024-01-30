import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { useDispatch } from "react-redux";
import { thinkMessageWithTimer } from "../../redux/functions/looks";
import { updateHistory } from "../../redux/slice/historySlice";

const ThinkTimer = ({ type, defaultval }) => {
  const dispatch = useDispatch();

  const displayMessage = () => {
    thinkMessageWithTimer(type);
    try {
      dispatch(
        updateHistory({
          type,
          val1: defaultval,
        })
      );
    } catch (error) {
      console.log("🚀 ~ displayMessage ~ error:", error);
    }
  };

  return (
    <div elevation={3}>
      <div className="messagebox flex-row items-center gap-2 space-y-0">
        <div className="text-white">Think for {defaultval} seconds</div>
        <PlayArrowIcon
          className="moveicon bg-green-600 rounded-full"
          onClick={() => displayMessage()}
        />
      </div>
    </div>
  );
};

export default ThinkTimer;
