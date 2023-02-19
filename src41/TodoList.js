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
  handleReset = () => {
    this.setState({ items: [], value: "" });
  };
  handleRemove = (index) => {
    this.setState((prevState) => {
      const newItems = [...prevState.items];
      newItems.splice(index, 1);
      return { items: newItems };
    });
  };
  handleLog = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus
          />
          <button type='submit'>add</button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
        <ul>
          {this.state.items.map((items, index) => {
            return (
              <li key={index}>
                {items}
                <button onClick={() => this.handleRemove(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
        {this.props.render(this.state.items, this.handleRemove)}
      </div>
    );
  }
}

export default TodoList;
