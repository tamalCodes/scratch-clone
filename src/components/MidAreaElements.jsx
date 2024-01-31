import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setActiveList } from "../redux/slice/midSlice";
import { store } from "../store";
import { fetchComponent } from "./fetchComponents";

const MidAreaElements = () => {
  const area_list = useSelector((state) => state.mid);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center h-full w-full">
      {area_list.midAreaLists.map((l) => {
        return (
          <Droppable droppableId={l.id} type="COMPONENTS" key={l.id}>
            {(provided) => {
              return (
                <ul
                  className={`${
                    l.id
                  } w-[250px] min-h-[50px] flex flex-col bg-slate-100 rounded-md ${
                    store.getState().mid.active === l.id &&
                    "border-2 border-blue-500"
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  onClick={() => {
                    dispatch(setActiveList(l.id));
                  }}
                >
                  {l.comps &&
                    l.comps.map((x, i) => {
                      let str = `${x}`;
                      let component_id = `comp${str}-${l.id}-${i}`;

                      return (
                        <Draggable
                          key={`${str}-${l.id}-${i}`}
                          draggableId={`${str}-${l.id}-${i}`}
                          index={i}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mx-auto"
                            >
                              {fetchComponent(str, component_id)}
                              {provided.placeholder}
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </ul>
              );
            }}
          </Droppable>
        );
      })}
    </div>
  );
};

export default MidAreaElements;
