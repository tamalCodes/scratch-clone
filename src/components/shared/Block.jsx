import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Block = ({ variant, children, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`flex font-poppins rounded-sm flex-row flex-wrap ${
            variant === "yellow" ? "bg-yellow-500" : "bg-blue-500"
          } text-white px-2 py-1 my-2 text-sm cursor-pointer`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default Block;
