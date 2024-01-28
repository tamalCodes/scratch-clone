import React, { useEffect, useState } from "react";
import sidebarData from "../static/SidebarData";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

export default function OldSidebar() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(sidebarData?.Events);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    console.log({ reorderedItems });
    setItems(reorderedItems);
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <h1 className="font-poppins text-2xl font-semibold mb-1">Events</h1>

      {/* <h1 className="font-poppins text-2xl font-semibold mb-1 mt-3">Motion</h1>
      {sidebarData?.Motion?.map((item, index) => {
        return (
          <Block variant="blue">
            {item?.text1}
            {item?.img && (
              <img src={item?.img} alt="" className="w-4 h-4 mx-1" />
            )}
            {item?.text2}
          </Block>
        );
      })} */}
    </div>
  );
}
