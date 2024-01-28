import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

function App({ update_list }) {
  const complist = useSelector((state) => state.list);
  sessionStorage.setItem("spriteAngle", 0);

  function initializeSpriteSyles() {
    const el = document.getElementById(`sprite0-div`);
    el.style.position = "relative";
    el.style.left = "0px";
    el.style.top = "0px";
  }

  useEffect(() => {
    initializeSpriteSyles();
  }, []);

  const onDragEnd = (result) => {
    let element = result.draggableId.split("-")[0];
    const old_list = complist.midAreaLists;

    let source_index = old_list.findIndex(
      (x) => x.id === result.source.droppableId
    );

    if (source_index > -1) {
      let comp_list = old_list[source_index].comps;
      comp_list.splice(result.source.index, 1);
      old_list[source_index].comps = comp_list;
    }

    try {
      let dest_index = old_list.findIndex(
        (x) => x.id === result.destination.droppableId
      );

      if (dest_index > -1) {
        let dest_comp_list = old_list[dest_index].comps;
        dest_comp_list.splice(result.destination.index, 0, `${element}`);

        old_list[dest_index].comps = dest_comp_list;
      }
    } catch (error) {
      console.log(error);
    }
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
