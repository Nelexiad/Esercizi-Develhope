import useCounter from "./useCounter";

const App = () => {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(0, 1, 2);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Add</button>
      <button onClick={onDecrement}>Subtract</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default App;
