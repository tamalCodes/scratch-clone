import { useSnackbar } from "notistack";
import React, { useState } from "react";

const BroadcastMsg = ({ compId }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    message: "",
  });
  const handleClick = () => {
    enqueueSnackbar(state.message, { variant: "info" });
  };

  return (
    <div elevation={3}>
      <div className="rounded text-center bg-yellow-400 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ message: e.target.value });
            }}
          />
        </div>
        <div
          id={compId}
          className="rounded flex flex-row flex-wrap bg-yellow-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => handleClick()}
        >
          {`Broadcast ${state.message}`}
        </div>
      </div>
    </div>
  );
};

export default BroadcastMsg;
