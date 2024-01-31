import { combineReducers } from "redux";
import { eventReducer } from "./events/eventReducer";
import activeReducer from "./slice/activeSlice";
import historyReducer from "./slice/historySlice";
import midReducer from "./slice/midSlice";
import motionReducer from "./slice/motionSlice";
import spriteReducer from "./slice/spriteSlice";

export const rootReducer = combineReducers({
  // character: characterReducer,
  event: eventReducer, // This is the mordern way to do it
  motion: motionReducer,
  history: historyReducer,
  mid: midReducer,
  view: activeReducer,
  sprite: spriteReducer,
});
