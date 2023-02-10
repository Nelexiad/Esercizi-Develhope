import React from "react";

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
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}