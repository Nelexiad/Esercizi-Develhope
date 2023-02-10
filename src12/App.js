

import React from "react";
import Hello from './Hello';
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name='Daniele' age='26'/>
                <Hello />
            </div>
        )
    }
}

export default App;