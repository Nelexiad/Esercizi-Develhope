import React from "react";

class ClickCounter extends React.Component{
    state = {
        count:0
    }

    incrementCount = () => {
        this.setState(state => ({
            count : state.count +1
        }))
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}
export default ClickCounter