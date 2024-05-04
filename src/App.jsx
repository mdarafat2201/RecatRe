import React from "react";

const App = () => {
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
        <h1>count:</h1>
        <div>
          <button style={{ cursor: "pointer" }}>Increment</button>
          <button style={{ cursor: "pointer" }}>Decrrement</button>
          <button style={{ cursor: "pointer" }}>Rest</button>
        </div>
      </div>
    </>
  );
};

export default App;
