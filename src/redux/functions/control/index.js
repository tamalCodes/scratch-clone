import { store } from "../../../store";

export async function waitEvent(type) {
  let time = 0;
  switch (type) {
    case "WAIT_FIVE":
      time = 5;
      break;
    case "WAIT_TEN":
      time = 10;
      break;
    default:
      time = 0;
  }

  await new Promise((resolve) => setTimeout(resolve, time * 1000));
}

export const hideSprite = () => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  el.style.display = "none";
};

export const showSprite = () => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  el.style.display = "inline-block";
};

export const resetSize = () => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  el.style.transform = "scale(1)";
};

export const changeSize = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  switch (type) {
    case "SIZE_HALF":
      el.style.transform = "scale(0.5)";
      break;
    case "SIZE_DOUBLE":
      el.style.transform = "scale(2)";
      break;
    default:
      el.style.transform = "scale(1)";
  }
};
