import React from "react";

export class Counter extends React.Component{
    state = {
        counter: 0
    }

    componentDidMount() {
        setInterval(() => {
          this.setState(prevState => ({
            counter: prevState.counter + 1
          }));
        }, 1000);
      }
    render() {
        return (
            <div>
                <h1>{ this.state.counter}</h1>
            </div>
        )
    }
}