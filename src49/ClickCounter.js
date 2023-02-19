import React, { useEffect, useState } from "react";

const ClickCounter = ({ onCounterChange }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((evt) => evt + 1);
  };
  useEffect(() => onCounterChange(count), [onCounterChange, count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
export default ClickCounter;
