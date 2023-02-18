import React from "react";

class ClickTracker extends React.Component{
    state = {
        lastClicked: ""
      };
    
      handleClick = (event) => {
        this.setState({
          lastClicked: event.target.innerText
        });
      };
    render() {
        return (
            <div>
        <button onClick={this.handleClick}>Button 1</button>
        <button onClick={this.handleClick}>Button 2</button>
        <button onClick={this.handleClick}>Button 3</button>
        <h1>Last clicked: {this.state.lastClicked}</h1>
      </div>
        )
    }
}
export default ClickTracker