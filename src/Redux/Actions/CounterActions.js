import { Increment, Decrement, Reset } from "../Constant/CounterConstant";

const Increments = (payloadInfo) => {
  return {
    type: Increment,
    payload: payloadInfo,
  };
};

const Decrements = (payloadInfo) => {
  return {
    type: Decrement,
    payload: payloadInfo,
  };
};

const Resets = (payloadInfo) => {
  return {
    type: Reset,
    payload: payloadInfo,
  };
};
export { Increments, Decrements, Resets };
