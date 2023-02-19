import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, handleRemove) => (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    );
  }
}

export default App;
