import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (counter < 10) {
        setCounter((cnt) => cnt + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
