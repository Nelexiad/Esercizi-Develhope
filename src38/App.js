import React from "react";
import Container from "./Container";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Login />
        </Container>
      </div>
    );
  }
}

export default App;
