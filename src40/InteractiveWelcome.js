import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component{
    state = {
        textInput: '',
        pass:'ooo'
    }
    handleInputChange = (event) => {
        this.setState(() => ({
            textInput: event.target.value
            
        }))
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} />
                <Welcome name={ this.state.textInput} />
                    
                
            </div>
        )
    }
}

export default InteractiveWelcome