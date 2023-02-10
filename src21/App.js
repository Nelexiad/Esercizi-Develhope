

import React from "react";
import { Counter } from "./Counter";
import Hello from './Hello';
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<strong>Daniele</strong>} age='26'/>
                <Hello />
                <Counter initialVal={0} increment={2} delay={1000}/>
            </div>
        )
    }
}

export default App;