import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { fetchComponent } from "./fetchComponents";

const Sidebar = () => {
  const motionComponents = [
    "MOVEX_TEN",
    "MOVEX_FIFTEEN",
    "MOVEX_THIRTY",
    "MOVEY_TEN",
    "MOVEY_FIFTEEN",
    "MOVEY_THIRTY",
    "CLOCKWISE_TEN",
    "CLOCKWISE_FIFTEEN",
    "CLOCKWISE_THIRTY",
    "ANTICLOCKWISE_TEN",
    "ANTICLOCKWISE_FIFTEEN",
    "ANTICLOCKWISE_THIRTY",

    "GOTO_XY",
  ];
  const looksComponents = [
    "SAY_TEN",
    "SAY_FIFTEEN",
    "SAY_THIRTY",
    "THINK_TEN",
    "THINK_FIFTEEN",
    "THINK_THIRTY",
  ];

  const eventsComponents = ["BROADCAST"];

  const controlComponents = [
    "WAIT_FIVE",
    "WAIT_TEN",
    "HIDE_MESSAGE",
    "SIZE_HALF",
    "SIZE_DOUBLE",
    "SIZE_RESET",
    "SHOW",
    "HIDE",
  ];
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <h1 className="font-poppins text-2xl font-semibold mb-4">Sidebar</h1>
      <h1 className="font-poppins text-xl font-semibold ">Motion</h1>

      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion flex flex-col gap-0.5 items-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-[200px]"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <h1 className="font-poppins text-xl font-semibold mt-3">Looks</h1>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks flex flex-col gap-0.5 items-center my-0"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-[200px]"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <h1 className="font-poppins text-xl font-semibold mt-3">Control</h1>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks flex flex-col gap-0.5 items-center my-0 mb-10"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {controlComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-[200px]"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
export default Sidebar;
