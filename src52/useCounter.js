import { useState } from "react";

const useCounter = (initialValue = 0, increment = 1, decrement = 2) => {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((cnt) => cnt + increment);
  }

  function handleCounterDecrement() {
    setCounter((cnt) => cnt - decrement);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
};

export default useCounter;
