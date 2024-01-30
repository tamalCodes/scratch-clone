import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thinkMessageWithoutTimer } from "../../redux/functions/looks";
import { updateHistory } from "../../redux/slice/historySlice";

const ThinkMessage = ({ type, defaultval, compId, val1 }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: val1 !== "" ? val1 : "",
  });
  const dispatch = useDispatch();

  const messageHandler = () => {
    thinkMessageWithoutTimer(state, setState);

    try {
      dispatch(updateHistory({ type, val1: state.message }));
    } catch (error) {
      console.log("🚀 ~ messageHandler ~ error:", error);
    }
  };

  return (
    <div elevation={3}>
      <div className="messagebox">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Think</div>
          <input
            className="moveinput"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
          />
        </div>

        <PlayArrowIcon
          className="moveicon bg-green-600 rounded-full"
          onClick={() => {
            messageHandler();
          }}
        />
      </div>
    </div>
  );
};

export default ThinkMessage;
