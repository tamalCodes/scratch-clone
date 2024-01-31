import HistoryIcon from "@mui/icons-material/History";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import runAllEvents from "../redux/functions";
import historyMap from "../redux/functions/historyMap";
import { updateHistory } from "../redux/slice/historySlice";
import { addCharacter } from "../redux/slice/spriteSlice";
import HistoryAreaElements from "./HistoryAreaElements";
import MidAreaElements from "./MidAreaElements";

const MidArea = ({ add_list }) => {
  const dispatch = useDispatch();
  const [activeView, setactiveView] = useState("midarea");
  const midAreaList = useSelector((state) => state.mid.midAreaLists[0].comps);

  function handleClick() {
    runAllEvents(midAreaList);
    midAreaList.forEach((element) => {
      try {
        dispatch(
          updateHistory({ type: element, val1: historyMap[element].val1 })
        );
      } catch (error) {
        console.log("🚀 ~ midAreaList.forEach ~ error:", error);
      }
    });
  }

  return (
    <div
      className={`flex-1 h-[90vh] ${
        activeView === "historyarea" && "overflow-y-auto"
      }  p-2 `}
    >
      <div className="flex gap-4 items-center mb-[2.25rem]">
        <h1
          className={`font-poppins text-2xl font-semibold cursor-pointer ${
            activeView === "midarea" && "bg-blue-500 p-2 rounded-md text-white"
          }`}
          onClick={() => {
            setactiveView("midarea");
          }}
        >
          Mid Area
        </h1>
        <h1
          className={`font-poppins text-2xl font-semibold cursor-pointer flex items-center gap-3 ${
            activeView === "historyarea" &&
            "bg-blue-500 p-2 rounded-md text-white"
          }`}
          onClick={() => {
            setactiveView("historyarea");
          }}
        >
          History
          <HistoryIcon className="max-w-[20px] max-h-[20px]" />
        </h1>

        <h1
          className={`font-poppins text-2xl font-semibold cursor-pointer flex items-center gap-3 border-4 border-blue-500 p-2 rounded-md $`}
          onClick={() => {
            handleClick();
          }}
        >
          Run all
        </h1>

        <h1
          className={`font-poppins text-2xl font-semibold cursor-pointer flex items-center gap-3 border-4 border-blue-500 p-2 rounded-md $`}
          onClick={() => {
            dispatch(addCharacter());
          }}
        >
          Add sprite
        </h1>
      </div>

      {activeView === "midarea" ? (
        <MidAreaElements add_list={add_list} />
      ) : (
        <HistoryAreaElements />
      )}
    </div>
  );
};

export default MidArea;
