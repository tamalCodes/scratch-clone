import React from "react";
import { useSelector } from "react-redux";
import { fetchComponent } from "./fetchComponents";

const HistoryAreaElements = () => {
  const history_list = useSelector((state) => state.history);

  return (
    <div className="">
      {history_list
        .slice()
        .reverse()
        .map((component, index) => {
          console.log(component);
          return (
            <div key={index} className="w-[200px]">
              {fetchComponent(
                component.type,
                component.id,
                component.val1,
                component.val2
              )}
            </div>
          );
        })}
    </div>
  );
};

export default HistoryAreaElements;
