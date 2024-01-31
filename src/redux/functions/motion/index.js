import { store } from "../../../store";
import { updateAngle } from "../../slice/spriteSlice";

export const MoveStepsX = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}-div`);
  const currentLeft = el.offsetLeft;

  el.style.position !== "relative" && (el.style.position = "relative");
  let steps = 0;

  switch (type) {
    case "MOVEX_TEN":
      steps = 10;
      break;
    case "MOVEX_FIFTEEN":
      steps = 15;
      break;
    case "MOVEX_THIRTY":
      steps = 30;
      break;
    default:
      steps = 0;
  }

  el.style.left = currentLeft + steps + "px";
};

export const MoveStepsY = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}-div`);
  const top = el.offsetTop;
  el.style.position !== "relative" && (el.style.position = "relative");

  let steps = 0;
  switch (type) {
    case "MOVEY_TEN":
      steps = 10;
      break;
    case "MOVEY_FIFTEEN":
      steps = 15;
      break;
    case "MOVEY_THIRTY":
      steps = 30;
      break;
    default:
      steps = 0;
  }

  el.style.top = top + steps + "px";
};

export const RotateClockwise = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  const currentAngle = store
    .getState()
    .sprite.characters.find(
      (obj) => obj.id === store.getState().sprite.active
    ).angle;

  let angle = 0;
  switch (type) {
    case "CLOCKWISE_TEN":
      angle = 10;
      break;
    case "CLOCKWISE_FIFTEEN":
      angle = 15;
      break;
    case "CLOCKWISE_THIRTY":
      angle = 30;
      break;
    default:
      angle = 0;
  }

  const newAngle = parseInt(currentAngle) + parseInt(angle);

  el.style.transform = `rotate(${newAngle}deg)`;
  store.dispatch(updateAngle(newAngle));
};

export const RotateAntiClockwise = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  const currentAngle = store
    .getState()
    .sprite.characters.find(
      (obj) => obj.id === store.getState().sprite.active
    ).angle;

  let angle = 0;
  switch (type) {
    case "ANTICLOCKWISE_TEN":
      angle = 10;
      break;
    case "ANTICLOCKWISE_FIFTEEN":
      angle = 15;
      break;
    case "ANTICLOCKWISE_THIRTY":
      angle = 30;
      break;
    default:
      angle = 0;
  }

  const newAngle = parseInt(currentAngle) - parseInt(angle);

  el.style.transform = `rotate(${newAngle}deg)`;
  store.dispatch(updateAngle(newAngle));
};

export const GotoXY = (x, y) => {
  const el = document.getElementById(`${store.getState().sprite.active}-div`);
  el.style.position !== "relative" && (el.style.position = "relative");
  el.style.left = x + "px";
  el.style.top = y + "px";
};
