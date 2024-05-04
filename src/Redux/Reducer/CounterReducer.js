import { Increments, Decrements, Resets } from "../Actions/CounterActions";
import { Increment, Decrement, Reset } from "../Constant/CounterConstant";
const initailValue = {
  count: 0,
};

export const counterReducer = (state = initailValue, action) => {
  switch (action.type) {
    case Increment: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
  }
};
