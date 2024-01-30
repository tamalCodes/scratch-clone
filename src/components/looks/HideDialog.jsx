import React from "react";
import { useDispatch } from "react-redux";
import { hideMessage } from "../../redux/functions/looks";
import { updateHistory } from "../../redux/slice/historySlice";

const HideDialog = ({ type, defaultval, compId }) => {
  const dispatch = useDispatch();

  const displayMessage = () => {
    hideMessage();
    try {
      dispatch(
        updateHistory({
          type,
        })
      );
    } catch (error) {
      console.log("🚀 ~ displayMessage ~ error:", error);
    }
  };

  return (
    <div elevation={3}>
      <div
        id={compId}
        onClick={() => displayMessage()}
        className="movebox bg-yellow-500"
      >
        Hide Message
      </div>
    </div>
  );
};

export default HideDialog;
