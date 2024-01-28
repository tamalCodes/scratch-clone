import React from "react";
import { useDispatch } from "react-redux";
import { changeSize } from "../../redux/functions/control";
import { updateHistory } from "../../redux/slice/historySlice";

const Size = ({ type, defaultval, comp_id }) => {
  const dispatch = useDispatch();

  const changeSizeHandler = () => {
    changeSize(type);
    try {
      dispatch(updateHistory({ type, val1: defaultval }));
    } catch (error) {
      dispatch(updateHistory({ type, val1: defaultval }));
    }
  };

  return (
    <div className="movebox bg-yellow-500" onClick={() => changeSizeHandler()}>
      <div className="text-white">Change Size {defaultval}x</div>
    </div>
  );
};

export default Size;
