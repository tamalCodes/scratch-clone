import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { useDispatch } from "react-redux";
import { waitEvent } from "../../redux/functions/control";
import { updateHistory } from "../../redux/slice/historySlice";

const Wait = ({ type, defaultval, compId, val1 }) => {
  const dispatch = useDispatch();

  function waitHandler() {
    waitEvent(type);
    try {
      dispatch(updateHistory({ type, val1: defaultval }));
    } catch (error) {
      console.log("🚀 ~ waitHandler ~ error:", error);
    }
  }

  return (
    <div className="movebox bg-yellow-500 gap-3" id={compId}>
      Wait {defaultval} Seconds{" "}
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full "
        onClick={() => {
          waitHandler();
        }}
      />
    </div>
  );
};

export default Wait;
