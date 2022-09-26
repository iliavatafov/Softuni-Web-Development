import { useState } from "react";

export const Clicker = (props) => {
  const [count, setCount] = useState(props.time || 0);

  const incrementHandler = () => {
    setCount((count) => count + 1);
  };

  const decrementHandler = () => {
    setCount((count) => count - 1);
  };

  const clearHandler = () => {
    setCount(0);
  };

  let type = "";

  if (count < 10) {
    type = "Normal User";
  } else if (count < 20) {
    type = "Heavy User";
  } else {
    type = "Mega User";
  }

  let isHeavy = count >= 20;

  return (
    <div>
      {isHeavy && (
        <button style={{ fontSize: "50" + "px", color: "red" }}>
          Click here for Bambucha
        </button>
      )}
      <h1>Counter</h1>
      <h2>User type: {type}</h2>
      <h2>{count}</h2>
      <button onClick={decrementHandler}>--</button>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={incrementHandler}>++</button>
    </div>
  );
};
