import React from "react";
import CounterDisplay from "./CounterDisplay";

export class Counter extends React.Component {
    
 state = {
      counter: this.props.initialVal
    };
  



  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter + this.props.increment
      }));
    }, this.props.delay);
  }
  render() {
    return (
      <div>
        <CounterDisplay display={this.state.counter } />
      </div>
    )
  }
}