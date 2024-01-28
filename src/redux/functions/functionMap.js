import { changeSize, resetSize, waitEvent } from "./control";
import { sayMessageWithTimer, thinkMessageWithTimer } from "./looks";
import {
  MoveStepsX,
  MoveStepsY,
  RotateAntiClockwise,
  RotateClockwise,
} from "./motion";

const functionMap = {
  MOVEX_TEN: MoveStepsX,
  MOVEX_FIFTEEN: MoveStepsX,
  MOVEX_THIRTY: MoveStepsX,
  MOVEY_TEN: MoveStepsY,
  MOVEY_FIFTEEN: MoveStepsY,
  MOVEY_THIRTY: MoveStepsY,
  CLOCKWISE_TEN: RotateClockwise,
  CLOCKWISE_FIFTEEN: RotateClockwise,
  CLOCKWISE_THIRTY: RotateClockwise,
  ANTICLOCKWISE_TEN: RotateAntiClockwise,
  ANTICLOCKWISE_FIFTEEN: RotateAntiClockwise,
  ANTICLOCKWISE_THIRTY: RotateAntiClockwise,
  SAY_TEN: sayMessageWithTimer,
  SAY_FIFTEEN: sayMessageWithTimer,
  SAY_THIRTY: sayMessageWithTimer,
  THINK_TEN: thinkMessageWithTimer,
  THINK_FIFTEEN: thinkMessageWithTimer,
  THINK_THIRTY: thinkMessageWithTimer,
  WAIT_FIVE: waitEvent,
  WAIT_TEN: waitEvent,
  SIZE_HALF: changeSize,
  SIZE_DOUBLE: changeSize,
  SIZE_RESET: resetSize,
};

export default functionMap;
