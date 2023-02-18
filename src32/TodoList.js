import React from "react";

class TodoList extends React.Component {
  state = {
    items: ["item1", "item2", "item3"],
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      items: [...prevState.items, prevState.value],
      value: "",
    }));
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus
          />
          <button type="submit">add</button>
        </form>
        <ul>
          {this.state.items.map((items, index) => {
            return <li key={items[index]}>{items}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
