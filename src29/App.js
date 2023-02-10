

import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";

import Hello from './Hello';
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";


class App extends React.Component {
    render() {
        return (
            <div>
                <InteractiveWelcome/>
                <Hello />
                <ClickCounter />
                <ClickTracker />
                <Login  />
            </div>
        )
    }
}

export default App;