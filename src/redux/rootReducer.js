import { combineReducers } from "redux";
import activeReducer from "./slice/activeSlice";
import historyReducer from "./slice/historySlice";
import midReducer from "./slice/midSlice";
import motionReducer from "./slice/motionSlice";
import spriteReducer from "./slice/spriteSlice";

export const rootReducer = combineReducers({
  // character: characterReducer,
  motion: motionReducer,
  history: historyReducer,
  mid: midReducer,
  view: activeReducer,
  sprite: spriteReducer,
});
