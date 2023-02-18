import React from "react";

import UncontrolledLogin from "./UncontrolledLogin";

class App extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChildState = (childState) => {
    this.setState(
      {
        ...childState,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div>
        <UncontrolledLogin onLogin={this.handleChildState} />
      </div>
    );
  }
}

export default App;
