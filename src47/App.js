import React from "react";
import ClickCounter from "./ClickCounter";
import Login from "./Login";

class App extends React.Component {
  onCounterChange = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <ClickCounter onCounterChange={this.onCounterChange} />
        <Login />
      </div>
    );
  }
}

export default App;
