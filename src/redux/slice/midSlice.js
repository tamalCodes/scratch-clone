import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: [],
    },
  ],
  active: "midAreaList-0",
};

const midSlice = createSlice({
  name: "mid",
  initialState,
  reducers: {
    updateList: (state, action) => {
      let element = action.payload.draggableId.split("-")[0];

      let source_index = state.midAreaLists.findIndex(
        (x) => x.id === action.payload.source.droppableId
      );

      if (source_index > -1) {
        let comp_list = state.midAreaLists[source_index].comps;
        comp_list.splice(action.payload.source.index, 1);
        state.midAreaLists[source_index].comps = comp_list;
      }

      try {
        let dest_index = state.midAreaLists.findIndex(
          (x) => x.id === action.payload.destination.droppableId
        );

        if (dest_index > -1) {
          let dest_comp_list = state.midAreaLists[dest_index].comps;
          dest_comp_list.splice(
            action.payload.destination.index,
            0,
            `${element}`
          );

          state.midAreaLists[dest_index].comps = dest_comp_list;
        }
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
    },

    addList: (state, action) => {
      var newId = state.midAreaLists.length;

      state.midAreaLists.push({
        id: `midAreaList-${newId}`,
        comps: [],
      });
    },

    setActiveList: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { updateList, addList, setActiveList } = midSlice.actions;
export default midSlice.reducer;
