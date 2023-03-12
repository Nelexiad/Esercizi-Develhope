import { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((cnt) => cnt + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};

export default ClickCounter;
