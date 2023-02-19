import React from "react";

import Counter from "./Counter";
import Login from "./Login";

class App extends React.Component {
  onCounterChange = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <Counter />
        <Login />
      </div>
    );
  }
}

export default App;
