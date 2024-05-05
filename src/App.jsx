import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increments, Decrements, Resets } from "./Redux/Actions/CounterActions";
const App = () => {
  const dispath = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  const HandleIncrement = () => {
    dispath(Increments(5));
  };
  const HandleDecrement = () => {
    dispath(Decrements());
  };
  const HandleRest = () => {
    dispath(Resets());
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>count:{count}</h1>
        <div>
          <button style={{ cursor: "pointer" }} onClick={HandleIncrement}>
            Increment
          </button>
          <button style={{ cursor: "pointer" }} onClick={HandleDecrement}>
            Decrrement
          </button>
          <button style={{ cursor: "pointer" }} onClick={HandleRest}>
            Rest
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
