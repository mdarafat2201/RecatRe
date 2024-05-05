import { Increment, Decrement, Reset } from "../Constant/CounterConstant";
const initailValue = {
  count: 0,
};

export const counterReducer = (state = initailValue, action) => {
  switch (action.type) {
    case Increment: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case Decrement: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case Reset: {
      return {
        ...state,
        count: (state.count = 0),
      };
    }
    default: {
      return state;
    }
  }
};
