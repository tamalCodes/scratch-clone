import functionMap from "./functionMap";

const executeMotionFunctionWithDelay = (motionFunction, event, delay) => {
  setTimeout(() => {
    motionFunction(event);
  }, delay);
};

const runEvents = async (midAreaList, delayBetweenEvents = 500) => {
  for (let i = 0; i < midAreaList.length; i++) {
    const event = midAreaList[i];

    let time = 0;
    switch (event) {
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

    const motionFunction = functionMap[event];

    if (motionFunction) {
      executeMotionFunctionWithDelay(
        motionFunction,
        event,
        i * delayBetweenEvents
      );
    } else {
      console.warn(`Motion function not found for event: ${event}`);
    }
  }
};

export default runEvents;
