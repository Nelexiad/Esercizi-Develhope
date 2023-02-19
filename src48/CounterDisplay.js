import React from "react";

class CounterDisplay extends React.Component{
    state = {
        
    }
    render() {
        return (
            <h1>{this.props.display}</h1>
        )
    }

}
export default CounterDisplay