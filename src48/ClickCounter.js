import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((evt) => evt + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
export default ClickCounter;
