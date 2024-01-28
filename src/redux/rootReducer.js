import { combineReducers } from "redux";
import { characterReducer } from "./character/characterReducer";
import { eventReducer } from "./events/eventReducer";
import { listReducer } from "./midarea/list";
import activeReducer from "./slice/activeSlice";
import historyReducer from "./slice/historySlice";
import midReducer from "./slice/midSlice";
import motionReducer from "./slice/motionSlice";

export const rootReducer = combineReducers({
  character: characterReducer,
  list: listReducer,
  event: eventReducer, // This is the mordern way to do it
  motion: motionReducer,
  history: historyReducer,
  mid: midReducer,
  view: activeReducer,
});
