import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";
import { updateList } from "./redux/slice/midSlice";
import { store } from "./store";

function App({ update_list }) {
  const dispatch = useDispatch();

  function initializeSpriteSyles() {
    const el = document.getElementById(`${store.getState().sprite.active}-div`);
    el.style.position = "relative";
    el.style.left = "0px";
    el.style.top = "0px";
  }

  useEffect(() => {
    initializeSpriteSyles();
  }, []);

  const onDragEnd = (result) => {
    dispatch(updateList(result));
  };

  return (
    <div className="bg-blue-100 font-sans">
      <div className="h-screen  overflow-hidden flex flex-row pt-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div>
          <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
