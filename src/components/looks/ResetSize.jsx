import React from "react";
import { useDispatch } from "react-redux";
import { resetSize } from "../../redux/functions/control";
import { updateHistory } from "../../redux/slice/historySlice";

const ResetSize = ({ type, defaultval, comp_id }) => {
  const dispatch = useDispatch();

  const changeSizeHandler = () => {
    resetSize();
    try {
      dispatch(updateHistory({ type }));
    } catch (error) {
      console.log("🚀 ~ changeSizeHandler ~ error:", error);
    }
  };

  return (
    <div className="movebox bg-yellow-500" onClick={() => changeSizeHandler()}>
      <div className="text-white">Reset Size</div>
    </div>
  );
};

export default ResetSize;
