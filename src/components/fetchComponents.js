import React from "react";
import Repeat from "./control/RepeatCtr";
import Wait from "./control/Wait";
import BroadcastMessage from "./events/MsgBroadcast";
import HideDialog from "./looks/HideDialog";
import Hide from "./looks/HideSprite";
import ResetSize from "./looks/ResetSize";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Show from "./looks/ShowSprite";
import Size from "./looks/Size";
import Think from "./looks/Think";
import ThinkTimer from "./looks/ThinkTimer";
import GotoXY from "./motion/GotoXY";
import MoveX from "./motion/MoveX";
import MoveY from "./motion/MoveY";
import TurnAntiClockwise from "./motion/RotateAntiClockwise";
import TurnClockwise from "./motion/RotateClockwise";

const componentMap = {
  MOVEX_TEN: <MoveX type="MOVEX_TEN" defaultval={10} val1={0} val2={0} />,
  MOVEX_FIFTEEN: (
    <MoveX type="MOVEX_FIFTEEN" defaultval={15} val1={0} val2={0} />
  ),
  MOVEX_THIRTY: <MoveX type="MOVEX_THIRTY" defaultval={30} val1={0} val2={0} />,
  MOVEY_TEN: <MoveY type="MOVEY_TEN" defaultval={10} val1={0} val2={0} />,
  MOVEY_FIFTEEN: (
    <MoveY type="MOVEY_FIFTEEN" defaultval={15} val1={0} val2={0} />
  ),
  MOVEY_THIRTY: <MoveY type="MOVEY_THIRTY" defaultval={30} val1={0} val2={0} />,
  CLOCKWISE_TEN: (
    <TurnClockwise type="CLOCKWISE_TEN" defaultval={10} val1={0} val2={0} />
  ),
  CLOCKWISE_FIFTEEN: (
    <TurnClockwise type="CLOCKWISE_FIFTEEN" defaultval={15} val1={0} val2={0} />
  ),
  CLOCKWISE_THIRTY: (
    <TurnClockwise type="CLOCKWISE_THIRTY" defaultval={30} val1={0} val2={0} />
  ),
  ANTICLOCKWISE_TEN: (
    <TurnAntiClockwise
      type="ANTICLOCKWISE_TEN"
      defaultval={10}
      val1={0}
      val2={0}
    />
  ),
  ANTICLOCKWISE_FIFTEEN: (
    <TurnAntiClockwise
      type="ANTICLOCKWISE_FIFTEEN"
      defaultval={15}
      val1={0}
      val2={0}
    />
  ),
  ANTICLOCKWISE_THIRTY: (
    <TurnAntiClockwise
      type="ANTICLOCKWISE_THIRTY"
      defaultval={30}
      val1={0}
      val2={0}
    />
  ),
  GOTO_XY: <GotoXY type="GOTO_XY" val1={0} val2={0} />,

  SAY_TEN: <SayMessageWithTimer type="SAY_TEN" defaultval={10} />,
  SAY_FIFTEEN: <SayMessageWithTimer type="SAY_FIFTEEN" defaultval={15} />,
  SAY_THIRTY: <SayMessageWithTimer type="SAY_THIRTY" defaultval={30} />,
  THINK_TEN: <ThinkTimer type="THINK_TEN" defaultval={10} />,
  THINK_FIFTEEN: <ThinkTimer type="THINK_FIFTEEN" defaultval={15} />,
  THINK_THIRTY: <ThinkTimer type="THINK_THIRTY" defaultval={30} />,
  SIZE_HALF: <Size type="SIZE_HALF" defaultval={0.5} />,
  SIZE_DOUBLE: <Size type="SIZE_DOUBLE" defaultval={2} />,
  SIZE_RESET: <ResetSize type="SIZE_RESET" />,
  SHOW: <Show type="SHOW" />,
  HIDE: <Hide type="HIDE" />,
  BROADCAST: <BroadcastMessage />,
  WAIT_FIVE: <Wait type="WAIT_FIVE" defaultval={5} />,
  WAIT_TEN: <Wait type="WAIT_TEN" defaultval={10} />,
  REPEAT: <Repeat />,
  HIDE_MESSAGE: <HideDialog type="HIDE_MESSAGE" />,
  THINK: <Think type="THINK" val1={""} />,
};

export const fetchComponent = (key, id, val1, val2) => {
  const Component = componentMap[key];
  return Component ? React.cloneElement(Component, { id, val1, val2 }) : null;
};
