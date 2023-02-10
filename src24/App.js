

import React from "react";
import ClickCounter from "./ClickCounter";

import Hello from './Hello';
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<strong>Daniele</strong>} age='26'/>
                <Hello />
                <ClickCounter/>
            </div>
        )
    }
}

export default App;