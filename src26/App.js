

import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";

import Hello from './Hello';
import InteractiveWelcome from "./InteractiveWelcome";


class App extends React.Component {
    render() {
        return (
            <div>
                <InteractiveWelcome/>
                <Hello />
                <ClickCounter />
                <ClickTracker/>
            </div>
        )
    }
}

export default App;