import { useState, useCallback } from "react";

const useCounter = (initialValue = 0, increment = 1, decrement = 2) => {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(
    function handleCounterIncrement() {
      setCounter((cnt) => cnt + increment);
    },
    [increment]
  );

  const handleCounterDecrement = useCallback(
    function handleCounterDecrement() {
      setCounter((cnt) => cnt - decrement);
    },
    [decrement]
  );

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
};

export default useCounter;
